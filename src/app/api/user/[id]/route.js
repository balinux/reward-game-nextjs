import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const data = await req.query;
  console.log("Data: ", data);

  if (!data) {
    return NextResponse.status(400).json({
      message: "Missing required parameter: userId",
    });
  }

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: params.userId,
  //   },
  // });
  //
  // return NextResponse.json(user, { status: 200 });
  return NextResponse.json({ status: 200 });
};
