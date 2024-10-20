"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Section from "./components/Section";
import TimeLineJob from "./components/TimeLineJob";
import TimeLineDegree from "./components/TimeLineDegree";

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
    <div className="bg-green-600 font-[family-name:var(--font-geist-sans)] p-2 grid gap-2">
      <Section>
        <Image
          src={dataContent.profile.photo.src}
          alt={dataContent.profile.photo.alt}
          priority
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-2xl">{dataContent.profile.name}</h1>
        <h2 className="">{dataContent.profile.title}</h2>
        <div className="flex w-full flex-col text-center">
          <div className="divider divider-primary"></div>
        </div>
        <div className="text-centers grid gap-3">
          <div className="text-center">{`${age(
            new Date(dataContent.profile.birth)
          )} ans`}</div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="mx-1" />{" "}
            {dataContent.profile.contact.location}
          </div>
          <div>
            <Link
              className="link link-hover"
              href={`tel:${dataContent.profile.contact.phone.replace(
                /\s/g,
                ""
              )}`}
            >
              <FontAwesomeIcon icon={faPhone} className="mx-1" />{" "}
              {dataContent.profile.contact.phone}
            </Link>
          </div>
          <div>
            <Link
              className="link link-hover"
              href={`mailto:${dataContent.profile.contact.email}`}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mx-1" />{" "}
              {dataContent.profile.contact.email}
            </Link>
          </div>
          <div>
            <Link
              className="link link-hover"
              href={dataContent.profile.contact.website}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} className="mx-1" />{" "}
              {dataContent.profile.contact.website.replace("https://", "")}
            </Link>
          </div>
          <div>
            <Link
              className="link link-hover"
              href={dataContent.profile.contact.linkedin}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mx-1" />{" "}
              {dataContent.profile.contact.linkedin.replace("https://", "")}
            </Link>
          </div>
          <div>
            <Link
              className="link link-hover"
              href={dataContent.profile.contact.github}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="mx-1" />{" "}
              {dataContent.profile.contact.github.replace("https://", "")}
            </Link>
          </div>
        </div>
      </Section>
      <Section title={"Profil"}>
        <p className="">{dataContent.summary}</p>
      </Section>
      <Section title={"Expérience professionnelle"}>
        <TimeLineJob>{dataContent.experience}</TimeLineJob>
      </Section>
      <Section title={"Formation"}>
        <TimeLineDegree>{dataContent.education}</TimeLineDegree>
      </Section>
      <Section title={"Compétences"}>
        <div className="grid gap-2 grid-cols-2 w-full justify-items-center">
          {dataContent.skills.map((i, key) => {
            return (
              <div
                key={key}
                className="grid justify-items-center"
                style={{ minHeight: "110px" }}
              >
                <div className="flex-grow flex items-center justify-center">
                  <div className="relative inline-flex">
                    <div className="w-20">
                      <img
                        src={i.image}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-center mt-auto">{i.name}</h3>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
