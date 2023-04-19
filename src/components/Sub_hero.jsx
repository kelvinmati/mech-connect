import React from "react";

const Sub_hero = () => {
  return (
    <div className="bg-gray-50 py-20 relative z-10">
      <div className="w-mobile md:w-medium mx-auto grid md:grid-cols-2 md:gap-32  gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold py-2  ">
            Work remotely as a mechanic
          </h2>
          <p>Be your own boss,receive jobs anywhere,anytime.</p>
        </div>
        <div>
          <a
            target="_blank"
            href="https://play.google.com/store/search?q=mech+connect&c=apps"
          >
            <button className="px-14 py-3 bg-my_yellow text-white rounded-full  flex space-x-5">
              <span> Get App</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className=" absolute bg-gray-100 w-[65%] right-[20%]  rounded-tr-full rounded-bl-full -z-10   top-0 bottom-0  "></div>
    </div>
  );
};

export default Sub_hero;
