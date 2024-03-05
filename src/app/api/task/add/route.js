const { default: prisma } = require("@/lib/prisma");
const { NextResponse } = require("next/server");

export const POST = async (request) => {
  const body = await request.json();
  const task = await prisma.task.create({
    data: {
      url_image: body.url_image,
      title: body.title,
      description: body.description,
      points: body.points,
    },
  });
  return NextResponse.json(task, { status: 201 });
};
