"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ButtonBadge = () => {
  const router = useRouter();

  const [data, setData] = useState(0);

  useEffect(() => {
    getUser("clszl9p6t0000xy6qmum8vcv3");
  }, []);

  const getUser = async (userId) => {
    try {
      const response = await axios.get(`/api/user/${userId}`);
      console.log("data user: ", response);
    } catch (error) {
      console.log("error get user data: ", error);
    }
  };

  return (
    <button className="btn">
      Inbox
      <div className="badge badge-secondary">+99</div>
    </button>
  );
};
