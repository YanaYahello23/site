import Parser from 'rss-parser';
import {NextApiRequest, NextApiResponse} from "next";

const parser = new Parser();

export default async function handler(req: NextApiRequest, res: NextApiResponse<any[] | { message: string }>) {
    const { url: rssUrl } = req.query;
    if (!rssUrl || typeof rssUrl !== 'string') {
        res.status(400).json({ message: 'A valid RSS URL must be provided.' });
        return;
    }
    try {
        const response = await fetch(rssUrl);
        const xml = await response.text();
        const feed = await parser.parseString(xml);
        res.status(200).json(feed.items);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Failed to fetch RSS feed' });
        }
    }
}