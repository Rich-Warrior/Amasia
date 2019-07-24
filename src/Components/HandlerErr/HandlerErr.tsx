import React, { FC, useEffect, useState } from "react";
import { Redirect } from "react-router";

const HandlerErr: FC<{ error: string }> = ({ error }) => {
  const [booleURL, setBooleURL] = useState(false);

  useEffect(() => {
    document.title = `Error | Amasia`;
    const time = setTimeout(() => {
      setBooleURL(true);
    }, 15000);
    return () => clearTimeout(time);
  }, [error]);
  return (
    <>
      {booleURL && <Redirect to="/" />}
      <div>
        {error === "404" ? "Page Not Found 404" : "An error has occurred"}
      </div>
      <div>{"Contact site administrator"}</div>
    </>
  );
};

export default HandlerErr;
