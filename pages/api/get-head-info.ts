import { extractMetadata } from "link-meta-extractor";
import { MetadataInformation } from "link-meta-extractor/dist/metadata";
import type { NextApiRequest, NextApiResponse } from "next";
import { yupUrl } from "../../utils/variables";

type Data = {
    metadata: MetadataInformation;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const query = req.query;
    if (!(await yupUrl.isValid(query))) {
        return res.status(400).end();
    }
    try {
        const url = query.url as string;
        const metadata = await extractMetadata(url);
        return res.status(200).json({ metadata });
    } catch (err) {
        return res.status(404).end();
    }
}
