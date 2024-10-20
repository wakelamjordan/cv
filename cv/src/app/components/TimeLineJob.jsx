import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const TimeLineJob = ({ children }) => {
  return (
    <div className="w-full">
      <ul className="timeline timeline-vertical timeline-compact">
        {typeof children == "object"
          ? children.map((i, key) => {
              return (
                <li key={key}>
                  <div className="timeline-start">{`${i.startDate}${
                    i.endDate ? ` - ${i.endDate}` : null
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
                    <h3 className="font-bold">{i.company}</h3>
                    <h4 className="font-light italic">{i.location}</h4>

                    <ul className="mx-2">
                      {i.responsibilities.map((r, key) => {
                        return (
                          <li className="list-disc p-1" key={key}>
                            {r}
                          </li>
                        );
                      })}
                    </ul>
                    {i.projectLink ? (
                      <>
                        <FontAwesomeIcon icon={faGlobe} className="mx-1" />
                        <Link className="link link-hover" href={i.projectLink}>
                          {i.projectLink.replace("https://", "")}
                        </Link>
                      </>
                    ) : null}
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

export default TimeLineJob;
