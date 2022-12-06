import React from "react";

interface Props {
  classname?: string;
  data?: any;
  placeholderText?: string;
  func?: any;
}

const Cards: React.FC<Props> = ({ classname, data, placeholderText, func }) => {
  return (
    <div
      onClick={() => func(data?.id || placeholderText)}
      className={`cardContainer w-[13.5%] min-w-[200px] h-full border border-border rounded-3xl flex flex-col items-center justify-between p-2 bg-brown cursor-pointer ${classname}`}
    >
      <div className="w-full h-[80%] bg-white rounded-3xl overflow-hidden pointer-events-none">
        <img
          src={data?.img}
          alt="character"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-border font-semibold text-lg pointer-events-none">
        {data?.name || placeholderText}
      </h1>
    </div>
  );
};

export default Cards;
