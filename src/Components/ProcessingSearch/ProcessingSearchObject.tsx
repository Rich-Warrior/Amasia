import { InputHTMLAttributes } from "react";

export const ProcessingSearchInputMax: InputHTMLAttributes<
  HTMLInputElement
> = {
  type: "text",
  name: "maxPrice",
  size: 6,
  maxLength: 10
};


export const ProcessingSearchInputMin: InputHTMLAttributes<
  HTMLInputElement
> = {
  type: "text",
  name: "minPrice",
  size: 6,
  maxLength: 10
};
