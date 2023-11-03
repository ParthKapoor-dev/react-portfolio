import EchoHubImage from "../../Images/ignorance.jpeg"
import keyboardImage from "../../Images/keyboard image.jpeg"
import ECommerceImage from "../../Images/cool tech.jpeg"
import { useEffect, useRef } from "react"

export default function ProjectSection() {

    const ImageRef = useRef();
    const keyboardImageRef = useRef();
    const EComRef = useRef();
    useEffect(() => {
        const htmlDocument = document.documentElement;

        function onScroll() {
            const scrollValue = (window.scrollY / htmlDocument.clientHeight);
            // if (scrollValue <= 1.4)
            ImageRef.current.style.transform = `translate(-15% , ${scrollValue*10 -35}%)`;
            keyboardImageRef.current.style.transform = `translateY(-${scrollValue*15}%)`;
            EComRef.current.style.transform = `translateY(-${scrollValue*15}%)`;

        }
        window.addEventListener('scroll', onScroll);
        return () => {

            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    return (
        <div className="projectSection">

            <div className="projectSection-heading">
                Projects
            </div>

            <div className="projectSection-content-div">

                <div className="projectSection-upper-content-div">

                    <div className="echo-hub-content-div">

                        <img src={EchoHubImage} ref={ImageRef} />

                    </div>

                    <div className="typespeed-content-div">

                        <img src={keyboardImage} ref={keyboardImageRef}/>
                    </div>

                </div>

                <div className="projectSection-lower-content-div">

                    <div className="e-commerce-content-div">

                        <img src={ECommerceImage} ref={EComRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}