import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const resetData = await prisma.task.updateMany({
      where: {
        completed: true,
      },
      data: {
        completed: false,
      },
    });
    console.log("semua task sudah di update ke false");
    console.log("reset data: ", resetData);
    return NextResponse.json({
      data: {
        code: 200,
        message: "reset berhasil berhasil",
      },
    });
  } catch (error) {
    return NextResponse.json({
      data: {
        code: 500,
        message: "reset gagal",
      },
    });

    console.log("error update status task: ", error);
  }
};
