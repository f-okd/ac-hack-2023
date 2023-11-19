// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  Video, Database } from "../../types/model_interfaces";
import { promises } from 'fs';

type Data = {
  video?: Video,
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method == "GET") {
    const file = await promises.readFile(process.cwd() + "/public/database.json", "utf8");
    const db: Database = JSON.parse(file);
    const { id } = JSON.parse(req.body);
    const video = db.videos.find(video => video.id == id);

    if (!video) {
      res.status(200).json({ message: "no such video." });
    } else {
      res.status(200).json({ video })
    }
  }
}
