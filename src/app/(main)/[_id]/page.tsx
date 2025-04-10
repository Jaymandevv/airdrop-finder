"use client";

import { mockData } from "@/mock/mockData";
import { IProject } from "@/type";
import { Facebook, Globe, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

function ProjectDetails() {
  const { _id } = useParams();
  const data = mockData.filter((data: IProject) => data._id == _id)[0];
  console.log(data);

  const socialIcon = {
    twitter: <Twitter />,
    website: <Globe />,
    discord: <Facebook />,
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold capitalize">{data.project_name} Airdrop</h2>
      <div className="flex gap-4">
        <div className="w-2/4">
          <Image src={data.image} alt={data.project_name} width={100} height={100} className="w-full h-auto" />
        </div>
        <div>
          <h3>{data.project_name}</h3>
          <p>{data.description}</p>
          <div>
            <p>Steps to Join Airdrop</p>
            <ol className="list-decimal pl-8">
              {data.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="flex gap-2">
            {data.project_socials.map((social) => (
              <Link key={social.url} href={social.url} target="_blank">
                {socialIcon[social.name]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
