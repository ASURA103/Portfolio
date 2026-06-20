import myself1 from "./../assets/myself1.jpg"
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";

export default function Background1() {
  const mountRef = useRef(null);

  const mode = localStorage.getItem("modes");

  useEffect(() => {
    const container = mountRef.current;

    if (!container) return;

    // Remove old canvas on theme change
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    container.appendChild(renderer.domElement);

    const PARTICLE_COLOR =
      mode !== "light"
        ? 0x6b7280 // gray for dark mode
        : 0xfca5a5;

    const particles = [];

    const geometry = new THREE.SphereGeometry(
      0.25,
      8,
      8
    );

    const material = new THREE.MeshBasicMaterial({
      color: PARTICLE_COLOR,
    });

    const particlesCount = 80;

    for (let i = 0; i < particlesCount; i++) {
      const mesh = new THREE.Mesh(
        geometry,
        material
      );

      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 20
      );

      mesh.velocity = {
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
      };

      particles.push(mesh);

      scene.add(mesh);
    }

    const lineMaterial = new THREE.LineBasicMaterial({
      color: PARTICLE_COLOR,
      transparent: true,
      opacity: 0.3,
    });

    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Remove old lines
      scene.children
        .filter((obj) => obj instanceof THREE.Line)
        .forEach((line) => {
          scene.remove(line);

          if (line.geometry) {
            line.geometry.dispose();
          }
        });

      // Move particles
      particles.forEach((p) => {
        p.position.x += p.velocity.x;

        p.position.y += p.velocity.y;

        if (
          p.position.x > 40 ||
          p.position.x < -40
        ) {
          p.velocity.x *= -1;
        }

        if (
          p.position.y > 25 ||
          p.position.y < -25
        ) {
          p.velocity.y *= -1;
        }
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const distance =
            particles[i].position.distanceTo(
              particles[j].position
            );

          if (distance < 12) {
            const points = [
              particles[i].position,
              particles[j].position,
            ];

            const lineGeometry =
              new THREE.BufferGeometry().setFromPoints(
                points
              );

            const line = new THREE.Line(
              lineGeometry,
              lineMaterial
            );

            scene.add(line);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect =
        container.clientWidth /
        container.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        handleResize
      );

      geometry.dispose();

      material.dispose();

      lineMaterial.dispose();

      renderer.dispose();

      while (container.firstChild) {
        container.removeChild(
          container.firstChild
        );
      }
    };
  }, [mode]);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        mode !== "light"
          ? "bg-bgds text-white"
          : "bg-white text-bgds"
      }`}
    >
      {/* Three Background */}

      <div
        ref={mountRef}
        className="absolute inset-0 z-0"
      />

      {/* Content */}

      <div className="relative z-10 flex items-center justify-around min-h-screen select-none">
        <div className="w-[20rem] sm:w-[32rem] md:w-[43rem] flex flex-col items-center justify-center anime">
          <h2 className="text-center text-4xl font-semibold">
            Hi, I'm
          </h2>

          <h1 className="md:text-[10rem] font-bold sm:text-8xl text-6xl">
            Rahul
          </h1>

          <div className="w-[20rem] sm:w-[32rem] md:w-[43rem] flex items-center justify-center pl-10 md:p-0">
            <h3 className="text-xs sm:text-xl">
              Architecting Seamless Experiences,
              From Intuitive Interfaces to Robust,
              Scalable APIs and Backends.
              Your Full-Stack Solution.
            </h3>
          </div>

          <br />

          <Link
            to="/about"
            className={`px-5 py-3 font-chill font-semibold rounded-md transition-all duration-500 ${
              mode !== "light"
                ? "bg-white text-bgds hover:bg-forHover hover:text-white"
                : "bg-bgds text-white hover:bg-red-300"
            }`}
          >
            About Me
          </Link>
        </div>

        <div className="hidden lg:block w-96 h-96 overflow-hidden animate-wiggle">
          <img
            src={myself1}
            alt="Rahul"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}