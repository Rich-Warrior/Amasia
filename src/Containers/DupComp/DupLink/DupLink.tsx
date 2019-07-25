import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

import { faceLink } from "../../../Type/Interface";

const DupLink: FC<{ array: faceLink[] }> = ({ array }) => (
  <Fragment>
    {array.map(({ to, key, replace, text }: faceLink) => (
      <Fragment key={`${key}+${to}+${text}`}>
        <Link to={to} replace={replace}>
          {text}
        </Link>
      </Fragment>
    ))}
  </Fragment>
);

export default DupLink;
