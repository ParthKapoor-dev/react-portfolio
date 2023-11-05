import { useEffect , useRef} from "react";

// Images
import TestImage from "../../Images/test image3.png"

export default function MainPage() {

    const ImageRef = useRef();
    const backgroundText = useRef();

    // function backgroundTextAnimation(){}

    useEffect(() => {
        const htmlDocument = document.documentElement;

        function onScroll() {
            const scrollValue = (window.scrollY / htmlDocument.clientHeight);
            if (scrollValue <= 1.4)
                ImageRef.current.style.transform = `translate(-50%,${scrollValue * 4}%) scale(${scrollValue * 3 + 1})`;
        }
        window.addEventListener('scroll', onScroll);
        return () => {

            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className="mainPage-photo-div">

            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,33,3,3,3,3,3,3,3,3,3,].map((value , index)=>{
                
                const marginData = Math.floor(Math.random()*400);
                console.log(marginData)
                return(
                    <div className="mainPage-backgroundText" key={index}  style={{
                        top : 50*index ,
                        marginLeft : marginData
                    }}  ref={backgroundText}>
                    Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer | Parth Kapoor | MERN Stack Web Developer | React JS | NEXT JS | UI UX Web Developer 
                </div>
                )
            })}
            

            <img src={TestImage} ref={ImageRef} />

            {/* <p className="heading"> */}
                {/* MERN <br /> WebDev
            </p> */}
        </div>
    )
}