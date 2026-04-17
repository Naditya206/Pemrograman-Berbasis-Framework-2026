import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/utils/db/servicefirebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await signUp(req.body, (result: { status: string; message: string }) => {
      if (result.status === "success") {
        res.status(200).json({ status: true, statusCode: 200, message: result.message });
      } else {
        res.status(400).json({ status: false, statusCode: 400, message: result.message });
      }
    });
  } else {
    res.status(405).json({ status: false, statusCode: 405, message: "Method not allowed" });
  }
}
