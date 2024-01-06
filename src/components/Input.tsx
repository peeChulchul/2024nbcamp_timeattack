"use client";
import React from "react";
import { MdErrorOutline } from "react-icons/md";
interface IProps {
  placeholder: string;
  label: string;
}

export default function Input({ placeholder, label }: IProps) {
  return (
    <>
      <div className="flex flex-col px-2 p-1.5 border-neutral-300 border-2 focus-within:border-red-400 rounded-md ">
        <label className="text-sm font-semibold">{label}</label>
        <input className="text-sm focus:outline-none" placeholder={placeholder} />
      </div>
      <div className="flex items-center gap-1 text-red-400">
        <MdErrorOutline />
        <span className="text-sm">에러메시지</span>
      </div>
    </>
  );
}
