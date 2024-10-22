import React from "react";

const Section = ({ children, title = null, additionalClass = [] }) => {
  return (
    <section
      className={`rounded-box p-5 bg-base-200${
        " " + additionalClass.join(" ")
      }`}
    >
      {title ? (
        <div className="border-b-2 border-black w-full mb-5">
          <h2 className="uppercase text-lg font-medium">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
