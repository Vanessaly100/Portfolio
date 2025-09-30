import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollToTop = () => {
     const [scrollValue, setScrollValue] = useState(0);
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
       const calcScrollValue = () => {
         const pos = document.documentElement.scrollTop; //  current vertical scroll position
         const calcHeight =
           document.documentElement.scrollHeight -
           document.documentElement.clientHeight; // Represents the total height of the content in the element,
         const scrollValue = Math.round((pos * 100) / calcHeight); // Scroll percentage

         setScrollValue(scrollValue); // Update scroll value for progress
         setIsVisible(pos > 100); // Show button after 100px scroll
       };

       // Add event listeners for scroll and load
       window.addEventListener("scroll", calcScrollValue);
       window.addEventListener("load", calcScrollValue);

       return () => {
         // Clean up event listeners
         window.removeEventListener("scroll", calcScrollValue);
         window.removeEventListener("load", calcScrollValue);
       };
     }, []);

     const handleScrollToTop = () => {
       window.scrollTo({ top: 0, behavior: "smooth" });
     };

  return (
    <div>
      <section>
        <div
          onClick={handleScrollToTop}
          className={`fixed bottom-5 right-5 h-14 w-14 rounded-full grid place-items-center cursor-pointer transition-transform transform z-50 ${
            isVisible ? "scale-100" : "scale-0"
          }`}
          style={{
            background: `conic-gradient(#F59E0B ${scrollValue}%, #d7d7d7 ${scrollValue}%)`,
          }}
        >
          <span
            className="text-white text-xl flex items-center justify-center"
          >
            <FaArrowUp color="#107869" size={30}/>
          </span>
        </div>
      </section>
    </div>
  );
}

export default ScrollToTop