import React from "react";

function Team() {
  return (
    <>
      <div className="py-10 bg-black">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl font-bold md:text-4xl leading-none tracking-normal text-gray-900  md:tracking-tight invert">
              Core Team Members
            </h2>
            <p className="lg:w-8/12 lg:mx-auto text-lg text-gray-600 md:text-xl invert">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae similique fugiat, perspiciatis quasi facilis repellat
              est quidem nostrum.
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl font-extrabold leading-none tracking-normal invert text-gray-900 md:text-2xl md:tracking-tight">
                  Hentoni Doe
                </h4>
                <span className="block text-sm text-gray-600 md:text-lg invert">
                  CEO-Founder
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl font-extrabold leading-none tracking-normal invert text-gray-900 md:text-2xl md:tracking-tight">
                  Jonathan Doe
                </h4>
                <span className="block text-sm text-gray-600 md:text-lg  invert">
                  Chief Technical Officer
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl font-extrabold leading-none tracking-normal invert text-gray-900 md:text-2xl md:tracking-tight">
                  Anabelle Doe
                </h4>
                <span className="block text-sm text-gray-600 md:text-lg invert">
                  Chief Operations Officer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
