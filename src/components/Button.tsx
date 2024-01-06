import React, { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return <button className="text-white bg-blue-900 py-5">{children}</button>;
}
