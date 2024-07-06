'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-screen h-[10vh] text-[#f2f2f2] ">
      <nav className="h-full  flex justify-between px-14">
        <div className="flex items-center font-bold">
          <h1>Tomas Coelho</h1>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/contact">Contact Me</Link>
            </li>
            <li>
              <Link target="_blank" href="https://github.com/coeltom">
                <FaGithub size={30} />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://linkedin.com">
                <FaLinkedin size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          {nav ? (
            <IoClose size={30} onClick={toggleNav} />
          ) : (
            <IoMenu size={30} onClick={toggleNav} />
          )}
        </div>
        {nav && (
          <div className=" md:hidden transition ease-in-out absolute left-0 bg-[#1a222d] h-screen w-80">
            <h1 className="m-6 font-bold">Tomas Coelho</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-center text-xl">
                <Link href="/">Home</Link>
              </li>
              <li className="text-center text-xl ">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="text-center text-xl">
                <Link href="/about">About Me</Link>
              </li>
              <li className="text-center text-xl">
                <Link href="/contact">Contact Me</Link>
              </li>
              <li className="flex justify-center ">
                <Link target="_blank" href="https://github.com/coeltom">
                  <FaGithub size={30} />
                </Link>
              </li>
              <li className="flex justify-center">
                <Link target="_blank" href="https://linkedin.com">
                  <FaLinkedin size={30} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
