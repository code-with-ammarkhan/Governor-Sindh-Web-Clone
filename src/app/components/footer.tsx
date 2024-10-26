import Link from "next/link";
import Image from "next/image";
import MailIcon from "../images/email.png"
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faTiktok,
  faFacebook,
  faWhatsapp,
  faMailchimp,
  faLetterboxd,
  faMagento,
} from "@fortawesome/free-brands-svg-icons"; // Social icons
import { Mail } from "lucide-react";

function Footer() {
  return (
    <div className="bg-gray-200 w-full  flex flex-col justify-center items-center mt-6">
      <div className=" w-[80%]  flex sm:flex-col md:flex-row lg:flex-row xl:flex justify-center items-start  ">
        <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
          <ul>
            <li>
              <h1 className="font-bold text-xl pb-4">Core Courses</h1>
            </li>
            <li>
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li>
              <Link href="#">Web2 Using NextJS</Link>
            </li>
            <li>
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
        </div>
        <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
          <ul>
            <li>
              <h1 className="font-bold text-xl pb-4">Advanced Courses</h1>
            </li>
            <li>
              <Link href="#">Web 3 and Metaverse</Link>
            </li>
            <li>
              <Link href="#">Cloud-Native Computing</Link>
            </li>
            <li>
              <Link href="#">
                Artificial Intelligence (AI) and Deep Learning
              </Link>
            </li>
            <li>
              <Link href="#">Ambient Computing and loT</Link>
            </li>
            <li>
              <Link href="#">Genomics and Bioinformatics</Link>
            </li>
            <li>
              <Link href="#">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>

        <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15 ">
          <h1 className="font-bold text-xl pb-4">Social Links</h1>
          <ul className="list-none flex">
            <li>
              <Link
                href="https://www.youtube.com/@KamranTessorikk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-red-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/ammar-khan-b3b7312bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-700 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.tiktok.com/@KamranTessoriPk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-black text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/TeamKTessori"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>
            <li>
              <Link
                href="bit.ly/4d8zzBk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-green-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>
          </ul>
          <div className="flex items-center mt-4">
  <a
    href="mailto:education@governorsindh.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <Image src={MailIcon} alt="mail" className="w-6 h-6 mr-2" />
    <p className="text-sm">education@governorsindh.com</p>
  </a>
</div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
