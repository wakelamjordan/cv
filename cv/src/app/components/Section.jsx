import React from "react";

const Section = ({ children, title = null }) => {
  return (
    <section className="bg-blue-400 rounded-box p-5 grid gap-3 justify-items-center">
      {title ? (
        <div className="border-b-2 border-black w-full">
          <h2 className="uppercase text-lg font-medium">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
