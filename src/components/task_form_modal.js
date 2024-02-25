"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [point, setPoint] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const addTask = await axios.post("/api/task/add", {
        title: title,
        description: description,
        points: point,
      });
      console.log("response tambah task: ", addTask);
    } catch (error) {
      console.log("error axios:", error);
    }
    setIsLoading(false);
    setTitle("");
    setDescription("");
    setPoint(5);
    // setBrand("");
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tambah Tugas</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">Nama Tugas</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered"
                placeholder="Nama Tugas"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Dekskipsi</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input input-bordered"
                placeholder="Description"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Bintang</label>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={point === 1}
                  value="1"
                  onChange={(e) => setPoint(parseInt(e.target.value))}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  value="2"
                  checked={point === 2}
                  onChange={(e) => setPoint(parseInt(e.target.value))}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={point === 3}
                  value="3"
                  onChange={(e) => setPoint(parseInt(e.target.value))}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={point === 4}
                  value="4"
                  onChange={(e) => setPoint(parseInt(e.target.value))}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={point === 5}
                  value="5"
                  onChange={(e) => setPoint(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
