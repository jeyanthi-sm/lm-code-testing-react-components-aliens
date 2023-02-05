import React from "react";

export default function PlanetName(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input {...props} />;
}
