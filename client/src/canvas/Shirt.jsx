import React from 'react'
import { easing } from 'maath';
import  { useSnapshot } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture} from '@react-three/drei';
import state from '../store';

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.glb');

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    return (
        <div>
            <group>
                <mesh
                    castShadow
                    geometry={nodes.T_Shirt_male.geometry}
                    material={materials.lambert1}
                    material-roughness={1}
                    dispose={null}
                >

                </mesh>
            </group>
        </div>
    )
}

export default Shirt