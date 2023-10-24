import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { url } = await request.json(); //get url from request body
  //   console.log("URL from body", url);

  try {
    const res = await fetch("https://api.rebrandly.com/v1/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: `${process.env.REBRANDLY_API_KEY}`,
      },
      body: JSON.stringify({
        destination: url,
      }),
    });

    // console.log("response from rebrandly", res);
    const data = await res.json();
    // console.log("NEW URL", data);
    return NextResponse.json({ data: { url: data.shortUrl } });
  } catch (error) {
    console.log(error);
  }
};
