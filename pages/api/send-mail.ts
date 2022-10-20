// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { getElementsInApi } from "../../utils/variables";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "POST") {
        return res.status(404).end();
    }

    if (!req.body.objet || !req.body.message || !req.body.mail) {
        return res.status(400).end();
    }

    const objet = req.body.objet as string;
    const message = req.body.message as string;
    const mail = req.body.mail as string;

    const receivers = await getElementsInApi<{ mail: string }>(
        "/items/mail?fields=mail"
    );

    if (!receivers.data) {
        return res.status(500).end();
    }

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "autocampus.robot@outlook.fr",
            pass: "autocampus-robot",
        },
    });

    const receiversString = receivers.data
        .map((it) => it.mail)
        .reduce((p, n, i) => p + n + ",", "")
        .slice(0, -1);

    if (receivers.data.length === 0) {
        return res.status(500).end();
    }

    try {
        transporter.sendMail({
            from: "autocampus.robot@outlook.fr",
            to: receiversString,
            subject: objet,
            cc: mail,
            text: message,
        });
    } catch (e) {
        console.log("Error when send mail", e);
    }

    return res.status(200).end();
}
