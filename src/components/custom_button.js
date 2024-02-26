"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ButtonBadge = () => {
  const router = useRouter();

  const [data, setData] = useState(null);

  useEffect(() => {
    getUser("clszl9p6t0000xy6qmum8vcv3");
  }, []);

  const getUser = async (userId) => {
    try {
      const response = await axios.get(`/api/user/${userId}`);
      console.log("data user: ", response);
      setData(response.data.data.user);
    } catch (error) {
      console.log("error get user data: ", error);
    }
  };

  return (
    <button
      className="btn mr-5 sm:mr-0"
      onClick={() => getUser("clszl9p6t0000xy6qmum8vcv3")}
    >
      {data?.name}
      <div className="badge badge-secondary">{data?.totalPoints} ⭐</div>
    </button>
  );
};
