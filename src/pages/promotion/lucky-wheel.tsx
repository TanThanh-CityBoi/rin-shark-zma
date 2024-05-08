import React, { FC, useEffect, useState } from "react";
import { randomColor } from "utils/style";

const sectors = [
  {
    title: "Sector 1",
    color: randomColor(),
  },
  {
    title: "Sector 22",
    color: randomColor(),
  },
  {
    title: "Sector 333",
    color: randomColor(),
  },
  {
    title: "Sector 444",
    color: randomColor(),
  },
  {
    title: "Sector 555",
    color: randomColor(),
  },
  {
    title: "Sector 666",
    color: randomColor(),
  },
];

const LuckyWheel: FC = () => {
  const rotateWheel = (currentRotate, index) => {
    const wheel = document.getElementById("wheel__container");
    if (!wheel) return;
    wheel.style.transform = `rotate(${
      currentRotate - index * rotate - rotate / 2
    }deg)`;
  };

  const spinWheelHandler = () => {
    if (isWheeling) return;
    setIsWheeling(true);
    const randomIndex = Math.floor(Math.random() * items.length);
    const newRotate = currentRotate + 360 * 10;
    setCurrentRotate(newRotate);
    //
    rotateWheel(newRotate, randomIndex);
    setSelectedSector(items[randomIndex]);

    setTimeout(() => {
      setIsWheeling(false);
    }, 7000);
  };

  const [selectedSector, setSelectedSector] = useState<any>(null);
  const [currentRotate, setCurrentRotate] = useState<any>(0);
  const [items, setItems] = useState<any>([]);
  const [isWheeling, setIsWheeling] = useState<Boolean>(false);

  const itemSize = items.length;
  const rotate = 360 / itemSize;
  const skewY = 90 - rotate;

  useEffect(() => {
    if (sectors.length < 4) {
      setItems([...sectors, ...sectors]);
    } else {
      setItems(sectors);
    }
  }, []);

  return (
    <div className="">
      <div className="flex justify-center items-center w-full">
        <div
          id="wheel__container"
          onClick={spinWheelHandler}
          style={{
            transition: "cubic-bezier(0.075, 0.8, 0.2, 1) 7s",
          }}
          className="wheel relative border border-[6px] border-sky-500 rounded-full w-[312px] aspect-square z-20"
        >
          <div
            className={`wheel__inner overflow-hidden relative rounded-full w-[300px] aspect-square bg-yellow-300`}
          >
            {items.map((itm, idx) => {
              return (
                <div
                  style={{
                    backgroundColor: itm.color,
                    transform: `rotate(${rotate * idx}deg) skewY(-${skewY}deg)`,
                    transformOrigin: "0% 100%",
                  }}
                  key={idx}
                  className="wheel__sec absolute top-0 right-0 w-1/2 h-1/2"
                >
                  <span
                    style={{
                      transform: `skewY(${skewY}deg) rotate(${rotate / 2}deg)`,
                      left: "-100%",
                    }}
                    className="text-white text-center absolute w-[200%] h-[200%] pt-4"
                  >
                    {itm.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 p-5">
        <button
          className="font-semibold text-lg bg-sky-500 px-10 py-4 rounded-md text-white"
          onClick={spinWheelHandler}
        >
          Spin
        </button>
      </div>
      {selectedSector && (
        <p className="text-center">Selected Sector: {selectedSector.title}</p>
      )}
    </div>
  );
};

export default LuckyWheel;
