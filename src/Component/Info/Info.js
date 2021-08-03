import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jsonlist from "../JsonList/JsonList.json";
const Info = (props) => {
  const [data, setData] = useState([]);
  const id = props.location.state;
  // const { id } = useParams();

  const studentMoreDetails = data.find((info) => info.id == id);
  console.log(studentMoreDetails);

  useEffect(() => {
    setData(Jsonlist);
  }, []);

  return (
    <div className="container">
      <h2>Name: {studentMoreDetails?.id} </h2>
      <h2>Name: {studentMoreDetails?.name} </h2>
      <h2> Gender: {studentMoreDetails?.gender}</h2>
    </div>
  );
};

export default Info;
