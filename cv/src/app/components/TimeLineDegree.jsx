import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const TimeLineDegree = ({ children }) => {
  return (
    <div className="w-full">
      <ul className="timeline timeline-vertical timeline-compact">
        {typeof children == "object"
          ? children.map((i, key) => {
              return (
                <li key={key}>
                  <div className="timeline-start">{`${i.startDate}${
                    i.graduationDate ? ` - ${i.graduationDate}` : null
                  }`}</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box w-full">
                    <h3 className="font-bold">{i.degree}</h3>
                    <h4 className="font-light italic">{i.school}</h4>
                    <h4 className="font-light italic">{i.location}</h4>
                  </div>
                  <hr />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default TimeLineDegree;
