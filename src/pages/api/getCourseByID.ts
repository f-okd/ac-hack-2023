// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  Course, Database } from "../../types/model_interfaces";
import { promises } from 'fs';

type Data = {
  course?: Course,
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const file = await promises.readFile(process.cwd() + "/public/database.json", "utf8");
  const db: Database = JSON.parse(file);
  const { id } = JSON.parse(req.body);
  const course = db.courses.find(course => course.id == id);

  if (!course) {
    res.status(200).json({ message: "no such comment." });
  } else {
    res.status(200).json({ course })
  }
}
