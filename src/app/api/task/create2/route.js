import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (request) => {
  console.log("API update triggered");
  const task = await request.json();

  if (task.id) {
    //cari user terkait
    const user = await prisma.user.findUnique({
      where: {
        id: "clszl9p6t0000xy6qmum8vcv3",
      },
    });
    console.log("data user: ", user);

    // jika user ditemukan maka update point user
    if (user) {
      const updateUser = await prisma.user.update({
        where: {
          id: "clszl9p6t0000xy6qmum8vcv3",
        },
        data: {
          totalPoints: {
            increment: task.points,
          },
        },
      });

      console.log("udpateUser: ", updateUser);

      if (updateUser) {
        //update status task status
        const updateTask = await prisma.task.update({
          where: {
            id: task.id,
          },
          data: {
            completed: true,
          },
        });

        if (updateTask) {
          return NextResponse.json({
            data: {
              code: 200,
              message: "update point berhasil",
            },
          });
        } else {
          return NextResponse.json({
            data: {
              code: 400,
              message: "update data task gagal",
            },
          });
        }
      } else {
        return NextResponse.json({
          data: {
            code: 400,
            message: "update point error",
          },
        });
      }
    } else {
      return NextResponse.json({
        data: {
          code: 404,
          message: "user not found",
        },
      });
    }
  }
};
