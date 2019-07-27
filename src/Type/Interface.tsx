import { OptionHTMLAttributes, InputHTMLAttributes } from "react";

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

