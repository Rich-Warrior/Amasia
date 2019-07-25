import React, { FC, Fragment } from "react";
import { faceTegWithText, faceTegWithoutText } from "../../../Type/Interface";

export const DupTegText: FC<{ array: faceTegWithText[] }> = ({ array }) => (
  <Fragment>
    {array.map(({ Tag, text, key, ...attribut }: faceTegWithText) => (
      <Fragment key={`${key}+${Tag}+${text}`}>
        <Tag {...attribut}>{text}</Tag>
      </Fragment>
    ))}
  </Fragment>
);

export const DupTeg: FC<{ array: faceTegWithoutText[] }> = ({ array }) => (
  <Fragment>
    {array.map(({ Tag, key, ...attribut }: faceTegWithoutText) => (
      <Fragment key={`${key}+${Tag}`}>
        <Tag {...attribut} />
      </Fragment>
    ))}
  </Fragment>
);
