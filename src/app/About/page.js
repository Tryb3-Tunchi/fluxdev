"use client";
import { useEffect, useState } from "react";
import Datas from "../data/data";

const Tag = () => {
  return (
    <div className="flex items-center justify-center text-center flex-wrap w-3/4 m-auto gap-4">
      {Datas.map((data) => (
        <div className="" key={data.id}>
          <img className="w-3/4 flex m-auto" src={data.img} alt={data.id} />
          {/* <p>{data.img}</p> */}
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};

const about = () => {
  return (
    <div>
      {/* <h2>About that time we worked</h2> */}
      <div>
        <div className="about__left text-center">
          <h3 className="font-bold text-4xl py-4 text-orange-300">
            How it started
          </h3>
          <p className="head py-4 text-2xl">
            Our Goal is to transform your Ideas of Business into Reality{" "}
          </p>
          <p className="  pb-4 w-11/12 m-auto">
            PTS is a cutting-edge software development startup dedicated to
            creating bespoke software solutions that drive business growth and
            innovation. By leveraging the latest technologies and agile
            methodologies, CodeWave Innovations aims to help companies across
            various industries transform their operations and enhance their
            digital presence.
          </p>
        </div>
        <div className="about__right">
          <img src="photo2.png" alt="" />
          <div className="text-center grid grid-cols-2 m-4 gap-6 text-lg font-semibold about__rating">
            <p>
              <span>2.5</span>
              <span>Years of experience</span>
            </p>
            <p>
              <span>30</span>
              <span>Projects work</span>
            </p>
            <p>
              <span>1.5k</span>
              <span>Positive reviews</span>
            </p>
            <p>
              <span>2K+</span>
              <span>Customers</span>
            </p>
          </div>
        </div>
      </div>
      <Tag />
    </div>
  );
};

export default about;
