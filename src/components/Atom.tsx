import React, { useMemo } from "react";
import { Line, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";







const Atom = () => {
    return (
        <>

            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
            </EffectComposer>
        </>
    );
};

export default Atom;