import React from "react";
import teamMembers from "../../data/teamData";

function Team() {
  return (
    <div className="flex flex-col text-center text-slate-950">
      <div className="justify-center items-center px-16 pt-32 pb-8 w-full text-4xl font-bold leading-10 bg-white max-md:px-5 max-md:pt-10 max-md:max-w-full">
        Our Team
      </div>
      <div className="flex gap-5 self-center px-5 mt-4 max-md:flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex overflow-hidden relative flex-col flex-1 px-14 pt-8 pb-20 aspect-[0.65] max-md:px-5 transition-transform duration-300 transform hover:scale-105"
          >
            <img
              loading="lazy"
              srcSet={`${member.imageUrl}width=100 100w, ${member.imageUrl}width=200 200w, ${member.imageUrl}width=400 400w, ${member.imageUrl}width=800 800w, ${member.imageUrl}width=1200 1200w, ${member.imageUrl}width=1600 1600w, ${member.imageUrl}width=2000 2000w, ${member.imageUrl}&`}
              alt={member.name}
              className="object-cover absolute inset-0 size-full transition-opacity duration-300 hover:opacity-80"
            />
            <div className="relative text-xl font-medium leading-6">
              {member.name}
            </div>
            <div className="relative mt-3 text-sm leading-6">
              {member.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
