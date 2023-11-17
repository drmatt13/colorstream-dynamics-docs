/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

// Define a generic Props interface where First and Second are types
interface Props<First extends string, Second extends string> {
  first: First;
  second: Second;
  firstText: string;
  secondText: string;
  smaller?: boolean;
}

const BeforeAndAfter = <First extends string, Second extends string>({
  first,
  second,
  firstText,
  secondText,
  smaller = false,
}: Props<First, Second>) => {
  const [image, setImage] = useState<First | Second>(first);

  const onClick = () => {
    if (image === first) {
      setImage(second);
    } else {
      setImage(first);
    }
  };

  return (
    <>
      <div
        className={`${smaller && "w-[80%]"} mt-10 ursor-pointer mx-auto`}
        onClick={() => window.open(`/${image}.svg`)}
      >
        <img src={`/${image}.png`} alt={`${image}.png`} />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="mt-3 italic text-xs lg:text-sm">^ click to expand</div>
      </div>
      <div className="w-full flex justify-center mt-8 ">
        <button
          onClick={onClick}
          className={`${
            image === second
              ? "bg-red-500 hover:bg-red-400"
              : "bg-blue-500 hover:bg-blue-400"
          } px-8 py-2.5 text-sm rounded-md text-center text-white cursor-pointer /transition-colors`}
        >
          {image === first ? firstText : secondText}
        </button>
      </div>
    </>
  );
};

export default BeforeAndAfter;
