import { extractMetadata } from "link-meta-extractor";
import { MetadataInformation } from "link-meta-extractor/dist/metadata";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    metadata: MetadataInformation;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const query = req.query;
    try {
        const url = query.url as string;
        const metadata = await extractMetadata(url);
        return res.status(200).json({ metadata });
    } catch (err) {
        return res.status(404).end();
    }
}
