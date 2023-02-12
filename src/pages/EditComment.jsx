import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditComment() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  React.useEffect(() => {
    axios.get(`http://localhost:4000/api/comment/${id}`).then((result) => {
      console.log(result);
      setUser(result.data.name);
      setComment(result.data.comment);
    });
  }, [id]);

  const changeUser = (event) => {
    setUser(event.target.value);
  };
  const changeComment = (event) => {
    setComment(event.target.value);
  };

  const update = (e) => {
    e.preventDefault();
    const body = {
      name: user,
      comment: comment,
    };

    axios.patch(`http://localhost:4000/api/comment/${id}`, body).then((result) => {
      console.log(result);
      window.location.href = `/comments`
    })
  }

  return (
    <div className="p-[20px]">
      <div className="flex flex-row justify-between text-sky-600 mb-[20px]">
        <Link to={"/comments"}>
          <p>List of Comments</p>
        </Link>
        <p>Logout</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
          <p className="font-bold text-[5vw]">Edit Comment</p>
          <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-2 mt-[10px]" onSubmit={update}>
              <input
                onChange={changeUser}
                value={user}
                className="border-black border-[1px] pl-[5px] w-[40vw]"
              />
              <input
                onChange={changeComment}
                value={comment}
                className="border-black border-[1px] pl-[5px] w-[70vw] h-[6vh]"
              />
              <button
                type="submit"
                className="bg-sky-600 rounded-md text-white w-[15vw] mt-[20px] font-bold"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
