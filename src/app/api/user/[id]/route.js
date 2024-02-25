import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, context) => {
  const { id } = context.params;
  console.log("Data: ", id);

  if (!id) {
    return NextResponse.json({
      status: 400,
      message: "Missing required parameter: userId",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (user) {
    return NextResponse.json({
      data: {
        code: 200,
        user: user,
      },
    });
  } else {
    return NextResponse.json({
      data: {
        code: 400,
        user: null,
      },
    });
  }
  // console.log("data user: ", user);

  // return NextResponse.json(user, { status: 200 });
  // return NextResponse.json({ status: 200 });
};
