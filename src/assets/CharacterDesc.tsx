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
    <div className="w-full h-full flex flex-col items-start justify-center text-left pb-5 px-5 space-y-2">
      <h1 className="text-2xl font-bold">{charactername}</h1>
      <pre>
        <p className="text-lg whitespace-pre-line font-bold">{characterdesc}</p>
      </pre>
    </div>
  );
};

export default CharacterDesc;
