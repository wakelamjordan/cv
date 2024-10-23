"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./resources/iconLib";

import Link from "next/link";

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
    <>
      <div className="font-[family-name:var(--font-geist-sans)] p-2 grid gap-2 relative text-base-content hiddenz">
        <div className="md:h-screen md:fixed md:w-72 md:py-2">
          <Section additionalClass={["h-full"]}>
            <div className="flex flex-col items-center">
              <Image
                src={dataContent.profile.photo.src}
                alt={dataContent.profile.photo.alt}
                priority
                width={100}
                height={100}
                className="rounded-full"
              />
              <h1 className="text-2xl">{dataContent.profile.name}</h1>
              <h2 className="">
                {dataContent.profile.title.split("</br>")[0]}
                <br />
                {dataContent.profile.title.split("</br>")[1]}
              </h2>
              <div className="flex w-full flex-col text-center">
                <div className="divider divider-primary my-0"></div>
              </div>
              <div className="grid gap-3">
                <div className="text-center md:text-left">{`${age(
                  new Date(dataContent.profile.birth)
                )} ans`}</div>
                <div>
                  <FontAwesomeIcon
                    icon={"fa-solid fa-location-dot"}
                    className="mx-1"
                  />{" "}
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
                    <FontAwesomeIcon icon={"fas fa-phone"} className="mx-1" />{" "}
                    {dataContent.profile.contact.phone}
                  </Link>
                </div>
                <div>
                  <Link
                    className="link link-hover"
                    href={`mailto:${dataContent.profile.contact.email}`}
                  >
                    <FontAwesomeIcon
                      icon={"fas fa-envelope"}
                      className="mx-1"
                    />{" "}
                    {dataContent.profile.contact.email}
                  </Link>
                </div>
                <div>
                  <Link
                    className="link link-hover"
                    href={dataContent.profile.contact.website}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={"fas fa-link"} className="mx-1" />{" "}
                    {dataContent.profile.contact.website.replace(
                      "https://",
                      ""
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    className="link link-hover"
                    href={dataContent.profile.contact.linkedin}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={"fab fa-linkedin"}
                      className="mx-1"
                    />{" "}
                    {dataContent.profile.contact.linkedin.replace(
                      "https://",
                      ""
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    className="link link-hover"
                    href={dataContent.profile.contact.github}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={"fab fa-github"} className="mx-1" />{" "}
                    {dataContent.profile.contact.github.replace("https://", "")}
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </div>
        <div className="md:col-span-5 grid gap-2 md:pl-72">
          <Section title={"Profil"}>
            <p className="">{dataContent.summary}</p>
          </Section>
          <Section title={"Expérience professionnelle"}>
            <TimeLineJob>{dataContent.experience}</TimeLineJob>
          </Section>
          <Section title={"Formation"}>
            <TimeLineDegree>{dataContent.education}</TimeLineDegree>
          </Section>
          <div className="grid gap-2 xl:grid-cols-2">
            <Section title={"Compétences techniques"}>
              <div className="grid gap-2 grid-cols-2 xl:grid-cols-4 w-full justify-items-center">
                {dataContent.skills.technicalSkills.map((i, key) => {
                  return (
                    <div
                      key={key}
                      className="md:tooltip"
                      data-tip={i.exemple}
                      // style={{ minHeight: "200px" }}
                    >
                      <div className="flex-grow flex items-center justify-center min-h-32">
                        <div className="relative inline-flex">
                          <div className="w-20">
                            <Image
                              src={i.image}
                              className="object-contain w-full h-full"
                              alt={`image ${i.name}`}
                            />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-center mt-auto">{i.name}</h3>
                      <div className=" flex flex-col justify-between"></div>
                    </div>
                  );
                })}
              </div>
            </Section>
            <Section title={"Compétences comportementales"}>
              <div className="w-full">
                {dataContent.skills.transferableSkills.map((i, key) => {
                  return (
                    <div className="" key={key}>
                      <h3 className="my-2 font-medium">
                        <FontAwesomeIcon icon={i.icon} className="mx-2" />
                        {i.title}
                      </h3>
                      <p className="italic">{i.description}</p>
                    </div>
                    // <div
                    //   key={key}
                    //   className="grid justify-items-center md:tooltip"
                    //   data-tip={i.description}
                    //   style={{ minHeight: "110px" }}
                    // >
                    //   <h3 className="text-center mt-auto">{i.title}</h3>
                    // </div>
                  );
                })}
              </div>
            </Section>
          </div>
          <Section title={"Centres d’intérêt"}>
            <div className="w-full grid gap-3">
              {dataContent.interests.map((i, key) => {
                return (
                  <div className="" key={key}>
                    <h3 className="font-medium">
                      <FontAwesomeIcon icon={i.icon} className="mx-2" />
                      {i.name}
                    </h3>
                    <p className="italic">{i.description}</p>
                  </div>
                  // <div
                  //   key={key}
                  //   className="grid justify-items-center md:tooltip"
                  //   data-tip={i.description}
                  //   style={{ minHeight: "110px" }}
                  // >
                  //   <h3 className="text-center mt-auto">{i.title}</h3>
                  // </div>
                );
              })}
            </div>
          </Section>
        </div>
      </div>
      <div className="w-[210mm] h-[297mm] m-auto bg-slate-500 gridz grid-cols-4 hidden">
        <div className="bg-gray-950 grid grid-flow-col grid-rows-2">
          <div className="bg-yellow-300">
            <Section additionalClass={["h-full p-0"]}>
              <div className="flex flex-col items-center">
                {/* <Image
                  src={dataContent.profile.photo.src}
                  alt={dataContent.profile.photo.alt}
                  priority
                  width={100}
                  height={100}
                  className="rounded-full"
                /> */}
                <h1 className="text-xl">{dataContent.profile.name}</h1>
                {/* <h2 className="">
                  {dataContent.profile.title.split("</br>")[0]}
                  <br />
                  {dataContent.profile.title.split("</br>")[1]}
                </h2> */}
                <div className="flex w-full flex-col text-center">
                  <div className="divider divider-primary my-0"></div>
                </div>
                <div className="grid gap-3 px-2">
                  <div className="text-center md:text-left">{`${age(
                    new Date(dataContent.profile.birth)
                  )} ans`}</div>
                  <div>
                    <FontAwesomeIcon
                      icon={"fa-solid fa-location-dot"}
                      className="mx-1"
                    />{" "}
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
                      <FontAwesomeIcon icon={"fas fa-phone"} className="mx-1" />{" "}
                      {dataContent.profile.contact.phone}
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="link link-hover"
                      href={`mailto:${dataContent.profile.contact.email}`}
                    >
                      <FontAwesomeIcon
                        icon={"fas fa-envelope"}
                        className="mx-1"
                      />{" "}
                      {dataContent.profile.contact.email}
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="link link-hover"
                      href={dataContent.profile.contact.website}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={"fas fa-link"} className="mx-1" />{" "}
                      {dataContent.profile.contact.website.replace(
                        "https://",
                        ""
                      )}
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="link link-hover"
                      href={dataContent.profile.contact.linkedin}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={"fab fa-linkedin"}
                        className="mx-1"
                      />{" "}
                      {dataContent.profile.contact.linkedin.replace(
                        "https://",
                        ""
                      )}
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="link link-hover"
                      href={dataContent.profile.contact.github}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={"fab fa-github"}
                        className="mx-1"
                      />{" "}
                      {dataContent.profile.contact.github.replace(
                        "https://",
                        ""
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </Section>
          </div>
          <div className="bg-red-300"></div>
        </div>
        <div className="bg-green-400 col-span-3"></div>
      </div>
    </>
  );
}
