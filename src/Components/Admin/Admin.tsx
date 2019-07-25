import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const icon = ["facebook", "linkedin", "stackoverflow", "github"]
 const icnUrl =icon.map((val,indx) => (
   <ul>
     <Link to={`${indx}`}> 
    <li>
      <img src={`/admin/${val}.svg`} alt={val} height={"40px"} width={"40px"} />
    </li>
    </Link>
    </ul>
  ));
  return (
    <Fragment>
      <img
        src={"/admin/Admin.svg"}
        alt={"Admin"}
        height={"300px"}
        width={"300px"}
      />
      <h1>Yedigaryan Edgar</h1>
      <p>tri mri mi cpur</p>
      <p>C++ PHP</p>
      <ul>
          {icnUrl}
      </ul>
     
    </Fragment>
  );
};

export default Admin;
