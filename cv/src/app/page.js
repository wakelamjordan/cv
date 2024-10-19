"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  const [dataContent, setDataContent] = useState(null);

  useEffect(() => {
    fetch("/data-json.json")
      .then((response) => response.json())
      .then((data) => setDataContent(data))
      .catch((error) =>
        console.error(`érreur de récupération des data: ${error}.`)
      );
  }, []);

  if (!dataContent) {
    return null;
  }

  function age(birthday) {
    birthday = new Date(birthday);
    return new Number(
      (new Date().getTime() - birthday.getTime()) / 31536000000
    ).toFixed(0);
  }

  return (
    <div className="bg-base-100 font-[family-name:var(--font-geist-sans)] p-2">
      <section className="bg-base-200 text-base-content rounded-box p-2 grid gap-3 justify-items-center">
        {/* <section className="bg-base-200 text-base-content rounded-box p-2 flex flex-col items-center"> */}
        <Image
          src={dataContent.profile.photo.src}
          alt={dataContent.profile.photo.alt}
          priority
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-2xl">{dataContent.profile.name}</h1>
        <h2 className="text-base">{dataContent.profile.title}</h2>
        <div className="flex w-full flex-col text-center">
          <div className="divider"></div>
        </div>
        <div className="text-center">
          <div>{`${age(new Date(dataContent.profile.birth))} ans`}</div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />{" "}
            {dataContent.profile.contact.location}
          </div>
          <div>
            <Link
              href={`tel:${dataContent.profile.contact.phone.replace(
                /\s/g,
                ""
              )}`}
            >
              <FontAwesomeIcon icon={faPhone} className="fa-fw" />{" "}
              {dataContent.profile.contact.phone}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
