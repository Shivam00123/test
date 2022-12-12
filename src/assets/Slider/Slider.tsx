import React, { useState, useEffect } from "react";

const items = [
  {
    icon: "face",
    copy: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "pets",
    copy: "02. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "stars",
    copy: "03. Consectetur adipiscing elit.",
  },
  {
    icon: "invert_colors",
    copy: "04. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    icon: "psychology",
    copy: "05. Llamco nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "brightness_7",
    copy: "06. Misi ut aliquip ex ea commodo consequat.",
  },
];

const Card = (props: any) => {
  return (
    <li className="carouselChild">
      <span className="material-icons">{props.icon}</span>
      <p>{props.copy}</p>
    </li>
  );
};

const Slider = () => {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--num",
      `${carouselItems.length}`
    );
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy: any) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy: any) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      <button
        onClick={() => setMoveClass("next")}
        className="absolute top-1/2 left-2 w-8 h-8 bg-black z-50"
      >
        <span className="material-icons"></span>
      </button>
      <button
        onClick={() => setMoveClass("prev")}
        className="absolute top-1/2 right-2 w-8 h-8 bg-black z-50"
      >
        <span className="material-icons"></span>
      </button>
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {carouselItems.map((t, index) => (
          <Card key={t.copy + index} icon={t.icon} copy={t.copy} />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
