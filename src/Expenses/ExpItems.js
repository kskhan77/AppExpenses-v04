import { useState } from "react";
import ExpDate from "./ExpDate";

const ExpItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHander = () => {
    setTitle("i am chainge you ");
    console.log(title);
  };

  return (
    <div className="d-inline-flex m-2 ">
      <ExpDate date={props.date} />
      <div className="m-3 bg-info rounded">{title}</div>
      <div className="bg-danger w-25  btn m-3">{props.amount}</div>
      <button className="btn btn-warning " onClick={clickHander}>
        change Title
      </button>
    </div>
  );
};

export default ExpItems;
