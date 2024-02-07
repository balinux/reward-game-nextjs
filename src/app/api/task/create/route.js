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
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        tasks: {
          include: {
            task: true,
          },
        },
      },
    });

    console.log("user", user)

    // Hitung total poin dari semua tugas pengguna
    const totalPoints = user.tasks.reduce(
      (acc, userTask) => acc + userTask.task.points,
      0
    );

    // Update total point
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: { totalPoints },
    });

    return NextResponse.json({ user: updateUser, task: completedTask });
  } catch (error) {
    console.error("Error completing task:", error);

    //return NextResponse.json({ error: "Internal Server Error" });
    return NextResponse.json({ error });
  }
  //  console.log(body)
  //const userTaskList = await prisma.userTask.create({

  //})
}
