import React, { FC } from "react";
import HeadlessButton, { HeadlessButtonProps } from "./HeadlessButton";
import { twMerge } from "tailwind-merge";

export interface ReuseButtonProps extends HeadlessButtonProps {
  //   variant?: string;
  buttonPrefix?: React.ReactNode;
  buttonSuffix?: React.ReactNode;
}

const ReuseButton: FC<ReuseButtonProps> = (props) => {
  const defaultStyleClasses =
    "inline-flex justify-center items-center focus:outline-none font-normal text-sm bg-red-500 hover:bg-blue-700 text-white rounded-md px-4 py-2 border border-transparent";

  const finalClassNames = twMerge(defaultStyleClasses, props.className);

  return (
    <HeadlessButton
      className={finalClassNames}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      busy={props.busy}
      busyText={props.busyText}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props?.buttonPrefix && props.buttonPrefix}
      {props.children}
      {props?.buttonSuffix && props.buttonSuffix}
    </HeadlessButton>
  );
};

export default ReuseButton;