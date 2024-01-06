import React from "react";
import { useFormContext } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
interface IProps {
  placeholder: string;
  label: string;
  pettern: any;
  errorMessage: string;
  validate?: any;
  type: string;
}

export default function Input({ placeholder, label, pettern, validate, errorMessage, type }: IProps) {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <div
        className={`flex flex-col px-2 p-1.5 border-neutral-300 border-2  rounded-md ${
          errors[label]?.message ? "focus-within:border-red-400" : "focus-within:border-black"
        }`}
      >
        <label className="text-sm font-semibold">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="focus:outline-none"
          {...register(label, {
            required: `${label}은 필수 항목입니다`,
            pattern: { value: pettern, message: errorMessage },
            ...(label === "비밀번호 확인" && {
              validate: (value) => value === watch("비밀번호") || "비밀번호가 일치하지 않습니다."
            })
          })}
        />
      </div>
      <div className={`flex items-center gap-1 text-red-400 ${errors[label]?.message ? "opacity-100" : "opacity-0"}`}>
        <MdErrorOutline />
        <span className="text-sm">{errors[label]?.message as string}.</span>
      </div>
    </>
  );
}
