import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  usePonyFill = true,
  res: NextApiResponse<ResponseData>
) {
  const url = {
    url: "https://www.linkein.com/company/frontend-mentor",
  };
  const data = await fetch(`https://shrtlnk.dev/api/v2/link`, {
    method: "POST",
    headers: {
      "api-key": `${process.env.SHORT_API}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    body: JSON.stringify(url),
  });
  const response = await data.json();
  console.log(response);
  res.status(200).json({ message: "Hello from Next.js!" });
}

//
