import React from "react";

const WorkExperience = () => {
  return (
        <>
    <h2 className="text-lg md:text-6xl mb-4 text-black dark:text-white text-center">
       WORK EXPERIENCE
     </h2>
    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 mt-8">
      <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
        <figure className="stroke-dark absolute left-0 dark:stroke-light">
          <svg
            className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
            width="75"
            height="75"
            viewBox="0 0 100 100"
          >
            <circle
              cx="75"
              cy="50"
              r="20"
              pathLength="1"
              className="stroke-purple  stroke-1 fill-none dark:stroke-purple"
            ></circle>
            <circle
              cx="75"
              cy="50"
              r="20"
              pathLength="1"
              className="fill-purple stroke-[5px] dark:fill-dark"
              stroke-dashoffset="0px"
              stroke-dasharray="0.6270834604899088px 1px"
            ></circle>
            <circle
              cx="75"
              cy="50"
              r="10"
              pathLength="1"
              className="animate-pulse stroke-1 fill-purple dark:fill-purple"
            ></circle>
          </svg>
        </figure>
        <div style={{ transform: "none" }}>
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            Web Developer{" "}
            <a
              className="capitalize text-primary dark:text-purple"
              href="https://google.com"
              target="_blank"
            >
              @Baancha
            </a>
          </h3>
          <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
            2022-Present | Mountain View, CA
          </span>
          <p className="font-medium w-full md:text-sm">
            {" "}
            Worked on a team responsible for developing new features for
            Google's search engine, including improving the accuracy and
            relevance of search results and developing new tools for data
            analysis and visualization.
          </p>
        </div>
      </li>
      <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
        <figure className="stroke-dark absolute left-0 dark:stroke-light">
          <svg
            className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
            width="75"
            height="75"
            viewBox="0 0 100 100"
          >
            <circle
              cx="75"
              cy="50"
              r="20"
              pathLength="1"
              className="stroke-purple  stroke-1 fill-none dark:stroke-purple"
            ></circle>
            <circle
              cx="75"
              cy="50"
              r="20"
              pathLength="1"
              className="fill-purple stroke-[5px] dark:fill-dark"
              stroke-dashoffset="0px"
              stroke-dasharray="0.6270834604899088px 1px"
            ></circle>
            <circle
              cx="75"
              cy="50"
              r="10"
              pathLength="1"
              className="animate-pulse stroke-1 fill-purple dark:fill-purple"
            ></circle>
          </svg>
        </figure>
        <div style={{ transform: "none" }}>
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            Web Developer Intern{" "}
            <a
              className="capitalize text-primary dark:text-purple"
              href="https://google.com"
              target="_blank"
            >
              @AARK Technologies
            </a>
          </h3>
          <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
            Aug 2022 - Sep 2023 | Yamuna Nagar, Haryana
          </span>
          <p className="font-medium w-full md:text-sm">
            {" "}
            Worked on a team responsible for developing new features for
            Google's search engine, including improving the accuracy and
            relevance of search results and developing new tools for data
            analysis and visualization.
          </p>
        </div>
      </li>
  
    </ul>
    </>
  );
};

export default WorkExperience;
