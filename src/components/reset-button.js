"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonReset = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const resetTasks = async () => {
    try {
      const response = await axios.get("/api/task/reset");
      console.log("success reset tasks: ", response);
      router.refresh();
    } catch (error) {
      console.log("error reset: ", error);
    }
  };

  return (
    <>
      <button
        className="btn btn-block btn-primary text-white"
        onClick={() => {
          resetTasks();
        }}
      >
        reset
      </button>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
    </>
  );
};

export default ButtonReset;
