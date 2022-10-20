import { NextApiRequest, NextApiResponse } from "next";
import { allPath } from "../../utils/variables";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== process.env.MY_SECRET_REVALIDATE_TOKEN) {
        return res.status(401).end();
    }

    try {
        allPath.forEach((path) => {
            res.revalidate(path);
        });
        return res.status(200).end();
    } catch (err) {
        return res.status(500).end();
    }
}
