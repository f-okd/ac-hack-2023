// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  User, Database } from "../../types/model_interfaces";
import { promises } from 'fs';

type Data = {
  user?: User,
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method == "GET") {
    const file = await promises.readFile(process.cwd() + "/public/database.json", "utf8");
    const db: Database = JSON.parse(file);
    const { email, password } = JSON.parse(req.body);
    const user = db.users.find(
        user => user.email == email && user.password == password);

    if (!user) {
      res.status(200).json({ message: "no such user." });
    } else {
      res.status(200).json({ user })
    }
  }
}
