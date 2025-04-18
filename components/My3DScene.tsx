'use client';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

interface My3DSceneProps {
  width?: string;
  height?: string;
}

export default function My3DScene({ width, height }: My3DSceneProps) {
  const splineRef = useRef<any>(null);

  const handleClick = (objectName: string) => {
    switch (objectName) {
      case 'Button1':
        alert('Button 1 clicked!');
        break;
      case 'Button2':
        alert('Button 2 clicked!');
        break;
      case 'Button3':
        alert('Button 3 clicked!');
        break;
      case 'Button4':
        alert('Button 4 clicked!');
        break;
      default:
        console.log('Clicked:', objectName);
    }
  };

  const handleLoad = (spline: any) => {
    splineRef.current = spline;

    // Scale down the scene to fit within the container
    if (spline.graph) {
      const scale = 0.8; // Adjust this value to scale the scene (0.8 = 80% of original size)
      spline.setZoom(scale);
    }

    spline.addEventListener('mouseDown', (e: any) => {
      if (e.target?.name) {
        handleClick(e.target.name);
      }
    });
  };

  return (
    <div style={{ 
      width: width || '100%', 
      height: height || '100vh',
      overflow: 'hidden' // Prevents any overflow
    }}>
      <Spline
        scene="main1.spline"
        onLoad={handleLoad}
      />
    </div>
  );
}
