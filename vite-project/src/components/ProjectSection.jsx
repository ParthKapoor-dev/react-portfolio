import EchoHubImage from "../../Images/ignorance.jpeg"
import keyboardImage from "../../Images/keyboard image.jpeg"
import ECommerceImage from "../../Images/cool tech.jpeg"
// import EchoHub1 from "../../Images/echohub-1.png"
// import EchoHub2 from "../../Images/echohub-2.png"

import { useEffect, useRef } from "react"

export default function ProjectSection() {

    const ImageRef = useRef();
    const keyboardImageRef = useRef();
    const EComRef = useRef();

    // var cursorPosition;
    useEffect(() => {
        const htmlDocument = document.documentElement;

        function onScroll() {
            const scrollValue = (window.scrollY / htmlDocument.clientHeight);
            ImageRef.current.style.transform = `translateY( ${scrollValue * 10 - 35}%)`;

            keyboardImageRef.current.style.transform = `translateY(-${scrollValue * 15}%)`;

            EComRef.current.style.transform = `translateY(-${scrollValue * 15}%)`;
        }

        function onMouseMove(){
            // var position = window.scrollY + window.clientHeight 
        }
        window.addEventListener('scroll', onScroll);
        window.addEventListener('mousemove' , onMouseMove)
        return () => {

            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    function handleMouseEnter( contentVal ) {
        var color;
        // var images = [];
        switch (contentVal){
            case 'echo-hub' : 
                color = `#4a5964`;
                // images = [ EchoHub1 , EchoHub2];
                break; 
            case 'type-speed' : 
                color = '#443125';
                break;
            case 'e-com' :
                color = 'rgb(95, 61, 82)';
                break;
            default :
                color = '#14181b';
        }
        const body = document.querySelector('.downPage-section')
        body.style.backgroundColor = color
    }

    function handleMouseLeave() {
        const body = document.querySelector('.downPage-section')
        body.style.backgroundColor = `#14181b`
        console.log(body)
    }
    return (
        <div className="projectSection">

            <div className="projectSection-heading">
                Projects
            </div>

            <div className="projectSection-content-div">

                <div className="projectSection-upper-content-div">

                    <div className="echo-hub-content-div" onMouseEnter={()=>handleMouseEnter('echo-hub')} onMouseLeave={()=>handleMouseLeave('echo-hub')}>

                        <img src={EchoHubImage} ref={ImageRef} />

                    </div>

                    <div className="typespeed-content-div" onMouseEnter={()=>handleMouseEnter('type-speed')} onMouseLeave={()=>handleMouseLeave('type-speed')}>

                        <img src={keyboardImage} ref={keyboardImageRef} />
                    </div>

                </div>

                <div className="projectSection-lower-content-div">

                    <div className="e-commerce-content-div" onMouseEnter={()=>handleMouseEnter('e-com')} onMouseLeave={()=>handleMouseLeave('e-com')}>

                        <img src={ECommerceImage} ref={EComRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}