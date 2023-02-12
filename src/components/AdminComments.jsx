import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AdminComments(props) {
  const { name, comment, id } = props;
  const Delete = (id) => {
    axios.delete(`http://localhost:4000/api/comment/${id}`).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };

  const Update = (id) => {
    window.location.href = `/edit-comments/${id}`;
  };
  return (
    <div>
      <div className="flex flex-col w-[100%] border-[1px] border-gray-300 rounded-[5px] py-[20px] pl-[15px]">
        <p className="text-[5vw] font-bold">{name}</p>
        <p className="font-bold text-gray-400">6th May 2022</p>
        <p>{comment}</p>
        <div className="flex flex-row gap-5 justify-end mr-[30px] text-white">
          <Link to={"/edit-comments/"}>
            <button
              className="bg-sky-500 w-[15vw] rounded-2xl font-bold text-center"
              onClick={() => Update(id)}
            >
              Edit
            </button>
          </Link>
          <button
            className="bg-red-500 w-[15vw] rounded-2xl font-bold text-center"
            onClick={() => Delete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
