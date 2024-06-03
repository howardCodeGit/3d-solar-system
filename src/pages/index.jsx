import React from 'react';
import * as THREE from 'three';
import { useEffect } from 'react';

export default function Home() {
  let gui;

  const initGui = async () => {
    const dat = await import('dat.gui');
    gui = new dat.GUI();
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <canvas id='myThreeJsCanvas' />
    </div>
  );
}
