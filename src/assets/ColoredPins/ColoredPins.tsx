import React, { useEffect, useState } from "react";
import greenpin from "@/public/Images/MeetThecast/greenpin.png";
import yellowpin from "@/public/Images/MeetThecast/yellowpin.png";
import purplepin from "@/public/Images/MeetThecast/purplepin.png";
import redpin from "@/public/Images/MeetThecast/redpin.png";

interface PinProp {
  classname?: string;
  pin: string;
}

const ColoredPins: React.FC<PinProp> = ({ classname, pin }) => {
  const [selectedPin, setSelectedPin] = useState<string>("");

  useEffect(() => {
    if (pin === "green") {
      setSelectedPin(`${greenpin}`);
    } else if (pin === "yellow") {
      setSelectedPin(`${yellowpin}`);
    } else if (pin === "purple") {
      setSelectedPin(`${purplepin}`);
    } else {
      setSelectedPin(`${redpin}`);
    }
  }, [pin]);

  return (
    <div className={`w-7 h-7 absolute ${classname}`}>
      <img
        src={selectedPin}
        alt="pin"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ColoredPins;
