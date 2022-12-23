import React from "react";
import bluetitlebar from "@/public/Images/homepage/bluetitle.png";
import whitetitlebar from "@/public/Images/homepage/whitetitle.png";
import yellowtitlebar from "@/public/Images/homepage/yellowtitle.png";

interface Props {
  classname?: string;
  title: string;
  borderColor?: string;
}

const HomepageTitleBar: React.FC<Props> = ({
  classname,
  title,
  borderColor = "blue",
}) => {
  const chageImage = (name: string) => {
    switch (name) {
      case "white":
        return `${whitetitlebar}`;
      case "yellow":
        return `${yellowtitlebar}`;
      default:
        return `${bluetitlebar}`;
    }
  };

  return (
    <div className={`absolute min-h-[46px] pointer-events-none ${classname}`}>
      <img
        src={chageImage(borderColor)}
        alt="titlebackgroundd"
        className="w-full h-full object-fill"
      />
      <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-lg xl:text-xl whitespace-nowrap">
        {title}
      </h1>
    </div>
  );
};

export default HomepageTitleBar;
