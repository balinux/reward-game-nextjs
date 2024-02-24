import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany({
    where: {
      completed: false,
    },
  });
  // console.log("tasks", tasks);
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Posts",
      data: tasks,
    },
    {
      status: 200,
    },
  );
}
