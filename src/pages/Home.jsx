import React from "react";
import Logo from "../img/logo.png";
import Comments from "../components/Comments";
import axios from "axios";

export default function Home() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:4000/api/comment/").then((result) => {
      setData(result.data);
    });
  }, []);
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      comment: comment,
    };
    axios
      .post("http://localhost:4000/api/comment/", body)
      .then((result) => {
        console.log(result)
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <div className="w-[95%]">
        <img src={Logo} alt="logo" className="w-[30vw] my-[20px]" />
      </div>
      <div className="w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
        <p className="font-bold text-[5vw]">My Article</p>
        <p className="text-gray-400 font-semibold text-[3.5vw]">
          18th January 2023
        </p>
        <p className="mt-[2vh]">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="flex flex-col justify-start w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
        <p className="font-bold text-[5vw]">Add your comment</p>
        <form className="flex flex-col gap-2 mt-[10px]">
          <input
            type="text"
            placeholder="Your name ..."
            className="border-black border-[1px] pl-[5px] w-[40vw]"
            onChange={(e) => {setName(e.target.value)}}
          />
          <input
            type="text"
            placeholder="Your comment ..."
            className="border-black border-[1px] pl-[5px] w-[70vw] h-[6vh]"
            onChange={(e) => {setComment(e.target.value)}}
          />
          <div className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="Captcha ..."
              className="border-black border-[1px] pl-[5px] w-[40vw]"
            />
            <p className="font-bold bg-slate-200 w-[30vw]">What is x + y?</p>
          </div>
          <button
            type="submit"
            onClick={submit}
            className="bg-sky-500 rounded-md text-white w-[15vw] mt-[20px]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-start w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px]">
        <p className="font-bold text-[5vw] mb-[20px]">Comments (0)</p>
        {
          data.map(item => {
            return <Comments key={item._id} name={item.name} comment={item.comment}/>
          })
        } 
      </div>
    </div>
  );
}
