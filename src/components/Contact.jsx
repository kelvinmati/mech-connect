import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="py-24 ">
      <div className="w-mobile md:w-medium mx-auto grid gap-10 md:gap-0 md:grid-cols-3 rounded-lg ">
        <div className="md:col-span-2 md:p-5">
          <div className="mb-5">
            <h2 className="text-4xl font-bold">
              We would love to hear from you{" "}
            </h2>
            <p>Kindly enter your details here to get in touch</p>
          </div>
          <form className="flex flex-col space-y-5">
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                placeholder="John doe"
                className="p-2 border rounded-md  outline-none focus:border-my_blue"
              />
            </div>
            <div className="flex flex-col">
              <label>
                Email <span className="text-red">*</span>
              </label>
              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                className="p-2 border rounded-md  outline-none focus:border-my_blue"
              />
            </div>
            <div className="flex flex-col">
              <label>
                Message <span className="text-red">*</span>
              </label>
              <textarea
                className="border rounded-md p-2 outline-none focus:border-my_blue"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div>
              <button
                onClick={(e) => e.preventDefault()}
                className="hover:bg-yellow-500 transition-all bg-my_yellow text-white px-10 py-4 rounded-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="text-white bg-my_blue rounded-lg p-3">
          <h2 className="my-7 text-2xl ">Contact Information</h2>
          <div className="space-y-7">
            <div className="flex space-x-3">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p className="text-[#fff]">+254-8-134-767</p>
            </div>
            <div className="flex space-x-3">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p className="text-[#fff]">support@mechconnect.com</p>
            </div>
            <div className="flex space-x-3">
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="text-[#ffffffea]">Ngara Aqua plaza.4th floor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
