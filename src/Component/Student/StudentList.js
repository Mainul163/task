import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Jsonlist from "../JsonList/JsonList.json";
import StudentShowList from "../StudentShowList/StudentShowList";

const Student = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const showlist = (id) => {
    const url = `/info/${id}`;
    history.push(url);
  };

  useEffect(() => {
    setData(Jsonlist);
  }, []);

  return (
    <div>
      {data.map((info) => (
        <StudentShowList
          details={info}
          showlist={showlist}
          key={info.id}
        ></StudentShowList>
      ))}
    </div>
  );
};

export default Student;
