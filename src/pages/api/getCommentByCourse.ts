// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  Comment, Database } from "../../types/model_interfaces";
import { promises } from 'fs';

type Data = {
  comments?: Comment[],
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method == "GET") {
    const file = await promises.readFile("/public/database.json", 'utf8');
    const db: Database = JSON.parse(file);
    const { id } = req.body;
    const comments = db.comments.filter(comment => comment.courseID == id);


    if (!comments) {
      res.status(200).json({ message: "no such course." });
    } else {
      res.status(200).json({ comments })
    }
  }
}
