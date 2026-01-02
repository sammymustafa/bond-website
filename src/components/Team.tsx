"use client";

import { Linkedin } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Rishabh Goel",
    role: "CEO",
    credential: "Harvard Medical School, Regeneron",
    linkedin: "#",
    image: "/images/team/Rishabh_goel_headshot.jpg",
    imagePosition: "object-top", // Show the top of the head
  },
  {
    name: "Sammy Mustafa",
    role: "CIO",
    credential: "Harvard Medical School, Regeneron STS, Mass General Brigham",
    linkedin: "#",
    image: "/images/team/sammy_mustafa_headshot.jpeg",
    imagePosition: "object-center",
  },
];

export default function Team() {
  return (
    <section id="company" className="section bg-white">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Team</p>
          <h2 className="heading-lg mb-4">
            Built by operators.
          </h2>
          <p className="body-lg">
            Our team combines AI expertise with deep clinical research experience.
          </p>
        </div>

        {/* Founders */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-20">
          {team.map((member) => (
            <div key={member.name} className="text-center max-w-xs">
              {/* Headshot */}
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bond-primary to-bond-accent p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={144}
                      height={144}
                      className={`w-full h-full object-cover ${member.imagePosition}`}
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-bond-primary font-medium mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm mb-4">{member.credential}</p>
              <a
                href={member.linkedin}
                className="inline-flex items-center gap-1 text-gray-400 hover:text-bond-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
