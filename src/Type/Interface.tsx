import { NavLinkProps, LinkProps, RouteProps } from "react-router-dom";
import { OptionHTMLAttributes, InputHTMLAttributes } from "react";

//react-router-dom

export interface faceNavLink extends NavLinkProps {
  readonly key: string;
  readonly text?: string;
}

export interface faceLink extends LinkProps {
  readonly key: string;
  readonly text?: string;
}

export interface faceRoute extends RouteProps {
  readonly key: string;
}

export interface faceMatch<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

//Product

export interface faceProduct {
  readonly title: string;
  readonly prodState: string;
  readonly shipping: string;
  readonly sold: string;
  readonly alt: string;
  readonly material: string;
  readonly location: string;
  readonly src: string[];
  readonly color: string[];
  readonly saiz: string[];
  readonly price: string;
  readonly id: string;
  readonly to: string;
}

//Teg
export interface faceTeg {
  readonly Tag: string;
  readonly key: string;
}

export interface faceTegWithText
  extends OptionHTMLAttributes<HTMLOptionElement>,
    faceTeg {
  readonly text: string | number;
}
export interface faceTegWithoutText
  extends InputHTMLAttributes<HTMLInputElement>,
    faceTeg {}
