import React from "react";
import Terminal from "react-animated-term";
import "react-animated-term/dist/react-animated-term.css";

function About() {
  const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const termLines = [
    {
      text: "node example.js",
      cmd: true,
      delay: 80,
    },
    {
      text: "✔ Loaded app",
      cmd: false,
      repeat: true,
      repeatCount: 5,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + " Loading app",
          delay: 50,
        };
      }),
    },
    {
      text: "",
      cmd: true,
    },
  ];
  return (
    <div>
      {" "}
      <div className="pb-10 bg-black invert ">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-10 ">
            {/* <h2 className="mb-4 text-center text-2xl font-bold md:text-4xl leading-none tracking-normal text-gray-900  md:tracking-tight invert">
              About Us
            </h2> */}
            {/* <p className="lg:w-9/12 lg:mx-auto text-lg text-gray-600 md:text-xl invert">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae similique fugiat, perspiciatis quasi facilis repellat
              est quidem nostrum.
            </p> */}
            <Terminal lines={termLines} interval={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
