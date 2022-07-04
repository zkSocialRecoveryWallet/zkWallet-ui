import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = JSON.parse(req.body);
  console.log(id);

  try {
    const fetchGuardians = await fetch(
      `http://localhost:3000/api/guardians/id/${id}`
    );
    const data = await fetchGuardians.json();
    console.log("data", data);
    res.status(200).json(data);
  } catch (error: any) {
    console.log("error ===>", error);
    const { message } = JSON.parse(error.body).error;
    const reason = message.substring(
      message.indexOf("'") + 1,
      message.lastIndexOf("'")
    );

    res.status(500).send(reason || "Unknown error!");
  }
}
