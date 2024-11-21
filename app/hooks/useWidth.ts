// "use client";
import { useState, useEffect } from 'react'
const useScreenSize = () => {
   const [width, setWidth] = useState(0)

   useEffect(() => {
      setWidth(window.innerWidth)
      // window.addEventListener("resize", handleResize);

      // return () => {
      //    window.removeEventListener("resize", handleResize);
      // };
   }, [])

   // const handleResize = () => {
   //    setWidth(window.innerWidth);
   // };

   return { width }
}

export default useScreenSize
