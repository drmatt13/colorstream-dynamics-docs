import React from "react";

const KinesisDiagram = () => {
  return (
    <>
      <style jsx>{`
        .ellipse {
          clip-path: ellipse(closest-side farthest-side);
        }
      `}</style>
      <div className="flex-1 flex flex-col justify-between relative">
        {/* left light */}
        <div className="absolute h-full w-[29.5%] z-30 flex flex-col">
          <div
            className="flex-1 bg-gradient-to-r from-white from-[0%] via-orange-300/40 via-[45%] to-orange-300/75"
            style={{
              clipPath:
                "polygon(93% 15%, 96% 25%, 98% 45%, 98% 55%, 96% 75%, 93% 85%, 0 100%, 0 0)",
            }}
          />
        </div>
        {/* body */}
        <div className="flex-1 flex mx-[20%]">
          <div className="flex-1 flex justify-center">
            <div className="w-[85%] h-[100%] bg-gradient-to-b from-[#96c6f6] via-blue-500 to-indigo-800 pl-[15%] pr-[2.5%] relative">
              {/* left ellipses */}
              <div className="absolute left-0 top-0 h-full w-[20%] -translate-x-1/2 ellipse bg-gradient-to-b from-[#96c6f6] via-blue-500 to-indigo-800 brightness-[60%]"></div>
              <div className="absolute left-0 top-0 h-full w-[20%] -translate-x-1/2 ellipse">
                <div className="w-full h-full scale-[90%] ellipse bg-gradient-to-b from-blue-400 to-indigo-800"></div>
              </div>
              <div className="absolute left-0 top-0 h-full w-[20%] translate-x-1/2 ellipse bg-gradient-to-b from-[#96c6f6] via-blue-500 to-indigo-800 z-40"></div>
              {/* top & bottom */}
              <div className="absolute left-0 top-0 h-full w-[80%] translate-x-[20%] flex flex-col justify-between z-40">
                <div
                  className="h-full bg-gradient-to-b from-[#96c6f6] via-blue-500 to-indigo-800 pl-[15%]"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 85%, 100% 85%, 100% 15%, 0 15%)",
                  }}
                ></div>
              </div>
              {/* inside */}
              <div
                className="absolute left-0 top-0 h-full w-[74.25%] translate-x-[20%] flex flex-col justify-between z-30"
                style={{
                  clipPath:
                    "polygon(90% 0, 98.2% 25%, 99.65% 40%, 99.8% 50%, 99.65% 60%, 98.2% 75%, 90% 100%, 0 100%, 0 0)",
                }}
              >
                <div className="h-[17.5%]"></div>
                {/* inside yellow */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                  <div
                    className="w-full h-[70%] bg-orange-300/50"
                    style={{
                      clipPath:
                        "polygon(50% 13%, 75% 14%, 100% 12.5%, 100% 87.5%, 75% 86%, 50% 87%, 25% 90%, 0 97.5%, 0 2.5%, 25% 10%)",
                    }}
                  ></div>
                </div>
                <div className="flex-1 ml-[15%] mr-[7.5%] flex justify-center items-center relative translate-x-[5%] /bg-black">
                  {/* <div className="absolute top-0 left-0 w-full h-full"></div> */}
                  {/* ******************* inside here *************************************************************************************************************************************** */}
                  <div className="w-full h-1/3 flex">
                    <div className="flex-1 flex flex-col justify-between relative">
                      <div className="absolute h-full w-[29.5%] flex flex-col">
                        <div
                          className="flex-1 bg-gradient-to-r from-white/0 from-[0%] via-blue-400/50 via-[45%] to-blue-500/90 z-50"
                          style={{
                            clipPath:
                              "polygon(93% 15%, 96% 25%, 98% 45%, 98% 55%, 96% 75%, 93% 85%, 0 100%, 0 0)",
                          }}
                        />
                      </div>
                      <div className="flex-1 flex mx-[20%] z-20">
                        <div className="flex-1 flex justify-center">
                          <div className="w-[85%] h-[100%] bg-gradient-to-b from-green-500 via-green-700 to-lime-900 pl-[15%] pr-[2.5%] relative">
                            <div className="absolute left-0 top-0 h-full w-[80%] translate-x-[20%] z-10 flex flex-col justify-between">
                              <div className="h-[17.5%]"></div>
                              <div className="flex-1 ml-[15%] mr-[7.5%] flex justify-center items-center text-xs md:text-[.7rem] lg:text-xs font-bold">
                                shard
                              </div>
                              <div className="h-[17.5%]"></div>
                            </div>
                            <div className="absolute left-0 top-0 h-full w-[20%] -translate-x-1/2 ellipse bg-gradient-to-b from-green-500 via-green-700 to-lime-900 brightness-[60%]"></div>
                            <div className="absolute left-0 top-0 h-full w-[20%] -translate-x-1/2 ellipse">
                              <div className="w-full h-full scale-[90%] ellipse bg-gradient-to-b from-green-500 via-green-700 to-lime-900 brightness-[85%]"></div>
                            </div>
                            <div className="absolute right-0 top-0 h-full w-[20%] translate-x-1/2 ellipse bg-gradient-to-b from-green-500 via-green-700 to-lime-900 -z-10"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-0 /bg-black h-full w-[40%] translate-x-[15%] flex flex-col">
                        <div
                          className="flex-1 bg-gradient-to-l from-white/0 from-[0%] via-blue-400/50 via-[45%] to-blue-500/90"
                          style={{
                            clipPath:
                              "polygon(0 15%, 100% 0, 100% 100%, 0 85%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* ******************* inside here *************************************************************************************************************************************** */}
                </div>
                <div className="h-[17.5%]"></div>
              </div>
              <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-blue-400 via-blue-950 to-blue-900"></div>

              {/* right block */}
              <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-b from-[#96c6f6] via-blue-500 to-indigo-800 z-20"></div>
              {/* right ellipses */}
              <div className="absolute right-0 top-0 h-full w-[20%] -translate-x-[45%] ellipse bg-gradient-to-b from-slate-400 via-blue-400 to-indigo-950 brightness-[70%] z-20"></div>
              <div className="absolute right-0 top-0 h-full w-[20%] -translate-x-[55%] ellipse bg-gradient-to-b from-blue-400 via-blue-950 to-blue-900 z-20"></div>
              {/* right edge */}
              <div className="absolute right-0 top-0 h-full w-[20%] translate-x-1/2 ellipse bg-gradient-to-b from-[#96c6f6] via-blue-500 to-indigo-800 z-10"></div>
            </div>
          </div>
        </div>
        {/* right arrow */}
        <div className="absolute right-0 /bg-black h-full w-[29.5%] flex flex-col">
          <div
            className="flex-1 bg-gradient-to-l from-orange-300/[17.5%] via-orange-300/[55%] to-orange-300/80"
            style={{
              clipPath:
                "polygon(0 25%, 50% 17.5%, 50% 0%, 100% 50%, 50% 100%, 50% 82.5%, 0 75%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default KinesisDiagram;
