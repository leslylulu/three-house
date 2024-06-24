import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Myhome(props) {
  // const { nodes, materials } = useGLTF("/public/models/WawaOffice.glb");
  const { nodes, materials } = useGLTF("/public/models/myhome.glb");
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // // LIBRARY FLOOR
    // tl.current.from(
    //   libraryRef.current.position,
    //   {
    //     duration: 0.5,
    //     x: -2,
    //   },
    //   0.5
    // );
    // tl.current.from(
    //   libraryRef.current.rotation,
    //   {
    //     duration: 0.5,
    //     y: -Math.PI / 2,
    //   },
    //   0
    // );

    // // ATTIC
    // tl.current.from(
    //   atticRef.current.position,
    //   {
    //     duration: 1.5,
    //     y: 2,
    //   },
    //   0
    // );

    // tl.current.from(
    //   atticRef.current.rotation,
    //   {
    //     duration: 0.5,
    //     y: Math.PI / 2,
    //   },
    //   1
    // );

    // tl.current.from(
    //   atticRef.current.position,
    //   {
    //     duration: 0.5,

    //     z: -2,
    //   },
    //   1.5
    // );
  }, []);

  return (
    // <group
    //   {...props}
    //   dispose={null}
    //   ref={ref}
    //   position={[0.5, -1, -1]}
    //   rotation={[0, -Math.PI / 3, 0]}
    // >
    //   <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
    //   <group position={[0, 2.11, -2.23]}>
    //     <group ref={libraryRef}>
    //       <mesh
    //         geometry={nodes["02_library"].geometry}
    //         material={materials["02"]}
    //       />
    //     </group>
    //   </group>
    //   <group position={[-1.97, 4.23, -2.2]}>
    //     <group ref={atticRef}>
    //       <mesh
    //         geometry={nodes["03_attic"].geometry}
    //         material={materials["03"]}
    //       />
    //     </group>
    //   </group>
    // </group>
		<group {...props} dispose={null} ref={ref} >
      <group position={[2.914, 2.975, -1.782]} rotation={[Math.PI / 2, 0, 0]} scale={0.038}>
        <mesh geometry={nodes.Sample_Book015_1.geometry} material={materials.cover} />
        <mesh geometry={nodes.Sample_Book015_2.geometry} material={materials.wall} />
        <mesh geometry={nodes.Sample_Book015_3.geometry} material={materials.wood} />
        <mesh geometry={nodes.Sample_Book015_4.geometry} material={materials.desk} />
        <mesh geometry={nodes.Sample_Book015_5.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Sample_Book015_6.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Sample_Book015_7.geometry} material={materials.polySurface43SG} />
        <mesh geometry={nodes.Sample_Book015_8.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Sample_Book015_9.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Sample_Book015_10.geometry} material={materials.back} />
        <mesh geometry={nodes.Sample_Book015_11.geometry} material={materials.roll} />
        <mesh geometry={nodes.Sample_Book015_12.geometry} material={materials.Outline} />
        <mesh geometry={nodes.Sample_Book015_13.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Sample_Book015_14.geometry} material={materials.Emission} />
        <mesh geometry={nodes.Sample_Book015_15.geometry} material={materials.Logo} />
        <mesh geometry={nodes.Sample_Book015_16.geometry} material={materials.Main} />
        <mesh geometry={nodes.Sample_Book015_17.geometry} material={materials.Text} />
        <mesh geometry={nodes.Sample_Book015_18.geometry} material={materials.Camera} />
        <mesh geometry={nodes.Sample_Book015_19.geometry} material={materials.Camera1} />
        <mesh geometry={nodes.Sample_Book015_20.geometry} material={materials.CameraGreen} />
        <mesh geometry={nodes.Sample_Book015_21.geometry} material={materials.Black} />
        <mesh geometry={nodes.Sample_Book015_22.geometry} material={materials.Second} />
        <mesh geometry={nodes.Sample_Book015_23.geometry} material={materials.KeysMain} />
        <mesh geometry={nodes.Sample_Book015_24.geometry} material={materials.KeysBottom} />
        <mesh geometry={nodes.Sample_Book015_25.geometry} material={materials.TopLine} />
        <mesh geometry={nodes.Sample_Book015_26.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Sample_Book015_27.geometry} material={materials.cat} />
        <mesh geometry={nodes.Sample_Book015_28.geometry} material={materials.page} />
        <mesh geometry={nodes.Sample_Book015_29.geometry} material={materials.cup} />
        <mesh geometry={nodes.Sample_Book015_30.geometry} material={materials.pang} />
        <mesh geometry={nodes.Sample_Book015_31.geometry} material={materials.Pages} />
        <mesh geometry={nodes.Sample_Book015_32.geometry} material={materials.Title} />
        <mesh geometry={nodes.Sample_Book015_33.geometry} material={materials.Book_4} />
        <mesh geometry={nodes.Sample_Book015_34.geometry} material={materials.Book_1} />
        <mesh geometry={nodes.Sample_Book015_35.geometry} material={materials.Book_2} />
        <mesh geometry={nodes.Sample_Book015_36.geometry} material={materials.Book_3} />
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/myhome.glb");