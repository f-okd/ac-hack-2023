// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { promises } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const file = await promises.readFile("/public/database.json", 'utf8');
  const users = JSON.parse(file);

  switch (req.method) {
    case "GET":
      const { userID } = req.body;
      const response = await fetch("http://localhost:3000/users");

      if (!response.ok) {

      }

      res.status(200).json(response.json())

    case "POST":
      
  }
}
