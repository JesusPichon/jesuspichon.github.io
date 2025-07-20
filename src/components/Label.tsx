import type { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
};

function Label({ children }: LabelProps) {
  return (
    <div className="bg-[#0B3764] px-1 rounded w-full">
      <p className="font-mono font-light text-white text-xl">{children}</p>
    </div>
  );
}

export default Label;
