import React, { InputHTMLAttributes, ReactElement } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: "lg" | "md";
}
const TextInput = ({
  inputSize = "lg",
  className,
  ...rest
}: Props): ReactElement => {
  if (inputSize === "lg") {
    return (
      <input
        className={`h-16 shadow-sm rounded px-4 py-2 ing-indigo-100 ${className}`}
        {...rest}
      />
    );
  }
  return <input {...rest} />;
};

export default TextInput;
