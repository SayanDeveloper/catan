import React from "react";

interface CellProps {
  src: string;
  top: number;
  left: number;
}

const Cell = ({ src, top, left }: CellProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <img src={src} className="w-[48px]" />
      <div className="absolute z-[3] top-[24px] left-[24px] text-black flex flex-col items-center h-[30px] transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-white" style={{ textShadow: "1px 1px 2px black" }}>
          6
        </div>
        <div className="flex gap-[2px]">
          <div className="rounded-full bg-red-500 w-[2px] h-[2px] border-[0.7px] border-white"></div>
          <div className="rounded-full bg-red-500 w-[2px] h-[2px] border-[0.7px] border-white"></div>
          <div className="rounded-full bg-red-500 w-[2px] h-[2px] border-[0.7px] border-white"></div>
          <div className="rounded-full bg-red-500 w-[2px] h-[2px] border-[0.7px] border-white"></div>
          <div className="rounded-full bg-red-500 w-[2px] h-[2px] border-[0.7px] border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Cell;
