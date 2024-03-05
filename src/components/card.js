"use client";
import prisma from "@/lib/prisma";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Card = ({ data }) => {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  console.log("data: ", data);
  const router = useRouter();

  const claimReward = async (task) => {
    console.log("berhasil menambahkan reward");
    // console.log("task: ", task);
    if (task) {
      try {
        const response = await axios.post("/api/task/create2", task);
        console.log("response claimReward: ", response.data);
        router.refresh();
      } catch (error) {
        console.log("error clain reward: ", error);
      }
    }
    // buat fungsi untuk menambah reward ke user yang mengerjakan task
  };

  return (
    <>
      <div className="carousel-item card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <Image
            // src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            src={
              data.image_url != null
                ? `/${data.image_url}`
                : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            }
            alt="Image 1"
            className="rounded-box mt-3"
            width={300}
            height={200}
          />{" "}
          {/* <img */}
          {/*   src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" */}
          {/*   alt="Shoes" */}
          {/* /> */}
        </figure>
        <p>{data.image_url}</p>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
            <div className="badge badge-primary">{data.points} ⭐</div>
          </h2>
          <p>{data.description ?? "tidak ada deskripsi"}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-block btn-primary text-white"
              onClick={() => setIsmodalOpen(true)}
            >
              Ambil bintang
            </button>

            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setIsmodalOpen(false)}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Kamu yakin?</h3>
            <p className="py-4">
              kamu yakin sudah mengerjakan tugas:{" "}
              <span className="font-bold">
                {data.title ?? "tidak ada judul"}
              </span>{" "}
            </p>
            <button
              className="btn btn-block btn-primary text-white"
              onClick={() => {
                claimReward(data);
                setIsmodalOpen(false);
              }}
            >
              {" "}
              Gasss!!!!
            </button>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Card;
