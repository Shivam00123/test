import React from "react";

interface characterInfo {
  charactername: string;
  characterdesc: string;
}

const CharacterDesc: React.FC<characterInfo> = ({
  characterdesc,
  charactername,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-around text-left pb-5 px-3">
      <h1 className="text-xl font-bold">{charactername}</h1>
      <p className="text-ba font-bold">{characterdesc}</p>
    </div>
  );
};

export default CharacterDesc;
