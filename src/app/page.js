import Image from "next/image";
import Card from "@/components/card";
import prisma from "@/lib/prisma";
import AddTask from "@/components/task_form_modal";
import { ButtonBadge } from "@/components/custom_button";

const Home = async () => {
  const tasks = await getTasks();
  // console.log('tasks', tasks)
  return (
    <main>
      <div className=" min-h-screen mx-auto flex items-center justify-center">
        <div className=" flex flex-col ml-5 sm:ml-0 overflow-hidden">
          <div className="flex justify-between">
            <AddTask />
            <ButtonBadge />
          </div>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box">
            {tasks.map((task) => (
              <Card key={task.id} data={task} />
            ))}
            <div className="carousel-item">
              {/* <img */}
              {/*   src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" */}
              {/*   className="rounded-box" */}
              {/* /> */}
              <Image
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                alt="Image 1"
                className="rounded-box"
                width={300}
                height={200}
              />
            </div>
            {/* <div className="carousel-item"> */}
            {/*   <img */}
            {/*     src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" */}
            {/*     className="rounded-box" */}
            {/*   /> */}
            {/* </div> */}
            {/* <div className="carousel-item"> */}
            {/*   <img */}
            {/*     src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" */}
            {/*     className="rounded-box" */}
            {/*   /> */}
            {/* </div> */}
            {/* <div className="carousel-item"> */}
            {/*   <img */}
            {/*     src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" */}
            {/*     className="rounded-box" */}
            {/*   /> */}
            {/* </div> */}
            {/* <div className="carousel-item"> */}
            {/*   <img */}
            {/*     src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" */}
            {/*     className="rounded-box" */}
            {/*   /> */}
            {/* </div> */}
            {/* <div className="carousel-item"> */}
            {/*   <img */}
            {/*     src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" */}
            {/*     className="rounded-box" */}
            {/*   /> */}
            {/* </div> */}
            {/* <div className="carousel-item"> */}
            {/*   <img */}
            {/*     src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" */}
            {/*     className="rounded-box" */}
            {/*   /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;

const getTasks = async () => {
  const tasks = await prisma.task.findMany({
    where: {
      completed: false,
    },
  });
  return tasks;
};
