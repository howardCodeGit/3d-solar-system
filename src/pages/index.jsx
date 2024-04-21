import React from 'react';
import * as THREE from 'three';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <canvas id='myThreeJsCanvas' />
    </div>
  );
}
