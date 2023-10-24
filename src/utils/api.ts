const createURL = (path: string) => window.location.origin + path; //dynamically create the url path based on the current browser url

export const shortenUrl = async (url: string) => {
  const res = await fetch(createURL("/api/shorten"), {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  if (res.ok) {
    const { data } = await res.json();
    // console.log("data from api.ts: ", data);

    return data;
  } else {
    throw new Error("Something went wrong with the api call");
  }
};
