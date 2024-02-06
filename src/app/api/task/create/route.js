import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export const POST = async (request) => {
  const { userId, taskId } = await request.json()
  try {
    // menandai task sudah dikerjakan
    const completedTask = await prisma.task.update({
      where: { id: taskId },
      data: { completed: true }
    })
    console.log("completedTask", completedTask)

    // membuat hubungan m - m antara user dan task
    const createUserTask = await prisma.userTask.create({
      data: {
        userId,
        taskId
      }
    })

    console.log("create usertask", createUserTask)

    // Ambil informasi tugas
    const tasks = await prisma.task.findUnique({
      where: { id: taskId }
    });
    
    console.log("tasks", tasks)
    return NextResponse.json(tasks)
  } catch (error) {
    console.error("Error completing task:", error);

    //return NextResponse.json({ error: "Internal Server Error" });
    return NextResponse.json({ error });
  }
  console.log(body)
  //const userTaskList = await prisma.userTask.create({

  //})
}
