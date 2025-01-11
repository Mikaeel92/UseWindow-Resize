import { useState } from "react"

export default function CustomHook () {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })


    return windowSize
}