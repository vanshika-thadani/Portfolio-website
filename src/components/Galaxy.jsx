import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Starfield = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = -5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create starfield effect using BufferGeometry
    const starCount = 10000;
    const stars = new Float32Array(starCount * 3); // x, y, z for each star

    for (let i = 0; i < starCount * 3; i++) {
      stars[i] = Math.random() * 1000 - 500; // Random position for each star
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(stars, 3));
    const material = new THREE.PointsMaterial({ color: 0x888888, size: 0.1 });
    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.001; // Rotate for effect
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0"></div>;
};

export default Starfield;
