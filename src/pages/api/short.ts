import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function shortenUrl(
  req: NextApiRequest,
  usePonyFill = true,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body);
  // try {
  //   const url = {
  //     url: "https://www.linkein.com/company/frontend-mentor",
  //   };
  //   const data = await fetch(`https://shrtlnk.dev/api/v2/link`, {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "api-key": `${process.env.SHORT_API}`,
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     cache: "no-cache",
  //     body: JSON.stringify(url),
  //   });

  //   const response = await data.json();
  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }

  res.status(200).json({ message: "Hello from Next.js!" });
}
