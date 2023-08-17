import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const StlPreview = ({ stlPath }) => {
  const stlRef = useRef();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <STLLoader ref={stlRef} url={stlPath} />
      <mesh ref={stlRef.current} />
    </Canvas>
  );
};

export default StlPreview;
