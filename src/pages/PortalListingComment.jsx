import React from "react";
import { Link } from "react-router-dom";
import AdminComments from "../components/AdminComments";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";

export default function PortalListingComment() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:4000/api/comment/").then((result) => {
      setData(result.data);
    });
  }, []);

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Apakah Anda yakin akan menghapus post ini?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // console.log(_id)
            axios
              .delete(`localhost:4000/api/comment/${id}`)
              .then((res) => {
                console.log("succes delete: ", res.data);
              })
              .catch((err) => {
                console.log("err: ", err);
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("user tidak setuju"),
        },
      ],
    });
  };

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
          <p className="font-bold">List of Comments</p>
          <div className="flex flex-col gap-3">
            {data.map((item, i) => {
              return (
                <AdminComments
                  id={item._id}
                  key={i}
                  name={item.name}
                  comment={item.comment}
                  onDelete={confirmDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
