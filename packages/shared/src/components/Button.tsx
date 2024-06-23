import React, { ButtonHTMLAttributes, type PropsWithChildren } from "react";

export function Button({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button {...props}>{children}</button>;
}
