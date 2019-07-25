import { OptionHTMLAttributes, InputHTMLAttributes } from "react";

//react-router-dom

export interface faceMatch<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

//Response
export interface faceCategoriesList {
  Hat: faceProduct[],
  Jacket: faceProduct[],
  Pant: faceProduct[],
  Shirt: faceProduct[],
  Shoe: faceProduct[],
  Suit: faceProduct[]
}
export interface faceResponse {
  Childrens: faceCategoriesList,
  Mens: faceCategoriesList,
  Womens: faceCategoriesList
}

//Product

export interface faceProduct {
  title: string;
  prodState: string;
  shipping: string;
  sold: string;
  alt: string;
  material: string;
  location: string;
  src: string[];
  color: string[];
  saiz: string[];
  price: string;
  id: string;
  to: string;
}

//Teg
export interface faceTeg {
  Tag: string;
  key: string;
}

export interface faceTegWithText
  extends OptionHTMLAttributes<HTMLOptionElement>,
  faceTeg {
  text: string | number;
}
export interface faceTegWithoutText
  extends InputHTMLAttributes<HTMLInputElement>,
  faceTeg { }
