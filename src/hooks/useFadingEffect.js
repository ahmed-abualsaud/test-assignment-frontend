import { useState, useEffect } from 'react'

const useFadingEffect = () => {

    const [fade, setFade] = useState("fade-out");

    useEffect(() => {
        if (fade === "fade-in") {
            setFade("fade-out")
        }
    }, [fade])

    return { fade, setFade }
}

export default useFadingEffect