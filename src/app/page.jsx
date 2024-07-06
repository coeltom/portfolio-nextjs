'use client';
import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import dev from '@/assets/dev.svg';

export default function Home() {
  return (
    <main className="h-[80vh] flex items-center px-10 justify-between">
      <div className="text-3xl font-bold">
        <h1 className="">Hi! I'm Tomas,</h1>
        <ReactTyped
          strings={['Web Developer', 'Frontend Developer']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>

      <Image
        className="hidden md:block"
        src={dev}
        alt="Developer"
        width={500}
        height={500}
        fill={false}
      />
    </main>
  );
}
