"use client";
import Image from "next/image";
import {
  FooterImage,
  facebook,
  tweeter,
  insta,
  youtube,
  linkedin,
} from "@/public/Icons";

const Footer = () => {
  return (
    <div className=" flex flex-col gap-5 p-10 mt-24">
      <div className="flex justify-between items-start py-2 border-gray-200 border-b">
        <div className="flex gap-10 items-start w-3/5">
          <Image
            src={FooterImage}
            alt="A2SV footer Image"
            width={300}
            height={300}
          />
          <div className="flex flex-col  gap-10">
            <div className="w-3/4 font-bold text-2xl">
              Get involved in improving tech education in Africa!
            </div>
            <button className="bg-[#264FAD] py-3 px-6 rounded-xl text-white w-2/5">
              Support Us
            </button>
          </div>
        </div>
        <div className="w-1/5">
          <ul className="flex flex-col gap-3">
            <li className="font-semibold">Links</li>
            <li className="font-thin">Home</li>
            <li className="font-thin">SuccesStories</li>
            <li className="font-thin">About Us</li>
            <li className="font-thin">Get Involved</li>
          </ul>
        </div>
        <div className="w-1/5">
          <ul className="flex flex-col gap-3">
            <li className="font-semibold">Teams</li>
            <li className="font-thin">Board Members</li>
            <li className="font-thin">Advisors/Mentors</li>
            <li className="font-thin">Executives</li>
            <li className="font-thin">Staffs</li>
          </ul>
        </div>
        <div className="w-1/5">
          <ul className="flex flex-col gap-3">
            <li className="font-semibold">Blogs</li>
            <li className="font-thin">Recent Blogs</li>
            <li className="font-thin">New Blog</li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-between ">
        <div>@ 2020 Africa to Silicon Valley, Inc. All right reserved.</div>
        <div className="flex w-[20%] justify-between gap-3 ">
          <Image src={tweeter} alt="tweeter" width={30} height={30} />

          <Image src={facebook} alt="facebook" width={30} height={30} />

          <Image src={youtube} alt="youtube" width={30} height={30} />

          <Image src={insta} alt="instagam" width={30} height={30} />

          <Image src={linkedin} alt="linked in" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
