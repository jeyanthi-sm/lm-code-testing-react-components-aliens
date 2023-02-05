import React from "react";

interface ButtonProps {
  onClick: () => {};
}
export default function Button(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return <button {...props} />;
}
