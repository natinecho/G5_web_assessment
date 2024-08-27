"use client";
import Image from "next/image";
import { A2SV_Logo } from "@/public/Icons";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [activeTab, SetActiveTab] = useState("Home");
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <div className="w-1/4">
        <Image src={A2SV_Logo} alt="A2SV_Logo" width={200} height={200} />
      </div>
      <div className="w-2/5">
        <ul className="flex items-center justify-between text-xl">
          <li
            className={activeTab === "Home" ? "text-blue-500 underline" : ""}
            onClick={() => SetActiveTab("Home")}
          >
            <Link href={'/'}>
            Home
            </Link>
          </li>
          <li
            className={activeTab === "Teams" ? "text-blue-500 underline" : ""}
            onClick={() => SetActiveTab("Teams")}
          >
            Teams
          </li>
          <li
            className={
              activeTab === "Succcess Stories" ? "text-blue-500 underline" : ""
            }
            onClick={() => SetActiveTab("Succcess Stories")}
          >
            Succcess Stories
          </li>
          <li
            className={
              activeTab === "About Us" ? "text-blue-500 underline" : ""
            }
            onClick={() => SetActiveTab("About Us")}
          >
            About Us
          </li>
          <li
            className={activeTab === "Blogs" ? "text-blue-500 underline" : ""}
            onClick={() => SetActiveTab("Blogs")}
          >
                <Link href={'/blogs'}>
            Blogs
            </Link>
          </li>
          <li
            className={
              activeTab === "Get Involved" ? "text-blue-500 underline" : ""
            }
            onClick={() => SetActiveTab("Get Involved")}
          >
            Get Involved
          </li>
        </ul>
      </div>
      <div className="w-1/5 flex justify-end gap-10 text-xl">
        <button className="font-bold">login</button>
        <button className="bg-[#264FAD] py-3 px-5 rounded-xl text-white">
          donate
        </button>
      </div>
    </div>
  );
};

export default Header;
