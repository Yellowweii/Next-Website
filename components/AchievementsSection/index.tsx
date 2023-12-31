"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const achievementsList = [
  {
    metric: "Projects",
    value: "100+",
  },
  {
    metric: "Users",
    value: "1M+",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-8">
      <div className="border-[#33353f] border rounded-md py-8 px-16 flex flex-wrap sm:flex-row items-center sm:justify-between justify-center gap-3">
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center mx-4">
              <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
              <p className="text-[#adb7be] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
