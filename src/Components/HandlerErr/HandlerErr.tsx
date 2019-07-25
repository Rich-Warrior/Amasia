import React, { FC, Fragment, useEffect,useState } from "react";
import { Redirect } from "react-router";

const HandlerErr: FC<{ error: string }> = ({ error}) => {
  const [booleURL, setBooleURL] = useState(false);
  
  useEffect(()=>{
    document.title = `Error | Amasia`;
  const time = setTimeout(() =>  {setBooleURL(true)}, 10000);
  return(()=> clearTimeout(time));
  },[error])
  return (
    <Fragment>
     { booleURL && <Redirect to="/"/>}
      <div>{error}</div>
      <div>{"Contact site administrator"}</div>
    </Fragment>
  );
};

export default HandlerErr;
