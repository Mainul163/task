import React from "react";
import { Link } from "react-router-dom";

const StudentShowList = ({ details, showlist }) => {
  return (
    <div class="card mb-5" style={{ width: "18rem" }}>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:{details.id}</li>
        <li class="list-group-item">Name:{details.name}</li>
      </ul>
      <div class="card-footer">
        <Link
          to={{
            pathname: "/info",

            state: details.id,
          }}
        >
          add
        </Link>
        {/* <button onClick={() => showlist(details.id)}> mone details</button> */}
      </div>
    </div>
  );
};

export default StudentShowList;
