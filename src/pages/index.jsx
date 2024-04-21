import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <canvas id='myThreeJsCanvas' />
    </div>
  );
}
