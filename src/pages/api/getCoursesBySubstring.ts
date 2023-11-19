// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  Course, Database } from "../../types/model_interfaces";
import { promises } from 'fs';

type Data = {
  courses?: Course[],
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const file = await promises.readFile(process.cwd() + "/public/database.json", "utf8");
  const db: Database = JSON.parse(file);
  const { substring } = req.body;
  const courses = db.courses.filter(course => course.title.toLowerCase().includes(substring));
  console.log(substring);
  console.log(courses);
  console.log(db.courses);

  if (!courses) {
    res.status(200).json({ message: "no matching courses." });
  } else {
    res.status(200).json({ courses });
  }
}
6