// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import type { Message } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { messages, content } = req.body;

  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      messages: [
        ...messages,
        {
          role: "user",
          content:
            content +
            " - please respond in JSON data in form {response: string}",
        },
      ] satisfies Message[],
    }),
  });

  const data = await resp.json();
  const apiMessage = data.choices[0].message.content;
  res.json(apiMessage);
}
