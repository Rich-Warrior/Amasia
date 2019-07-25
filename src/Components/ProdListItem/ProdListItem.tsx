import React, { FC, Fragment } from "react";

import { faceProduct } from "../../Type/Interface";

const ProdListItem: FC<faceProduct> = ({
  title = "",
  prodState = "",
  shipping = "",
  sold = "",
  alt = "",
  src = [],
  price = ""
}) => (
  <Fragment>
    {!!title && <h2 itemProp="name">{title}</h2>}
    {!!src.length && (
      <img
        src={`/${src[0]}`}
        alt={alt ? alt : "name not defined"}
        height={"220px"}
        width={"220px"}
      />
    )}

    {!!price && <span>{price}</span>}
    {!!prodState && <span>{prodState}</span>}
    {!!shipping && <span>{shipping}</span>}
    {!!sold && <span>{sold}</span>}
  </Fragment>
);

export default ProdListItem;
