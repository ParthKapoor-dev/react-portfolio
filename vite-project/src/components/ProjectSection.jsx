import EchoHubImage from "../../Images/ignorance.jpeg"
import keyboardImage from "../../Images/keyboard image.jpeg"
import ECommerceImage from "../../Images/cool tech.jpeg"

import EchoHub1 from "../../Images/echohub-1.png"
// import EchoHub2 from "../../Images/echohub-2.png"
import Ecom1 from "../../Images/e-commerce-1.png"
import TS1 from "../../Images/typespeed-1.png"

import { useEffect, useRef } from "react"

export default function ProjectSection() {

    const ImageRef = useRef();
    const keyboardImageRef = useRef();
    const EComRef = useRef();
    const cursor = useRef();
    const ProjectSectionRef = useRef();

    useEffect(() => {
        const htmlDocument = document.documentElement;

        var ydir = 0;
        var xdir = 0;
        var yscroll = 0;
        function onScroll() {

            const scrollValue = (window.scrollY / htmlDocument.clientHeight);
            ImageRef.current.style.transform = `translateY( ${scrollValue * 10 - 35}%)`;

            keyboardImageRef.current.style.transform = `translateY(-${scrollValue * 15}%)`;

            EComRef.current.style.transform = `translateY(-${scrollValue * 15}%)`;


            const offset = ProjectSectionRef.current.getBoundingClientRect();
            yscroll = - offset.top;

            cursor.current.style.transform = `translate( 
                ${(xdir * 100 / htmlDocument.clientWidth)}vw,
                ${((ydir + yscroll) * 100 / htmlDocument.clientHeight)}vh
            )`

        }
        function handleMouseMove(event) {
            const offset = ProjectSectionRef.current.getBoundingClientRect();

            yscroll = -offset.top
            ydir = event.clientY;
            xdir = event.clientX;
            cursor.current.style.transform = `translate( 
                ${(xdir * 100 / htmlDocument.clientWidth)}vw,
                ${((ydir + yscroll) * 100 / htmlDocument.clientHeight)}vh
            )`
        }
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('scroll', onScroll);
        return () => {

            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('mousemove', handleMouseMove)

        }
    }, [])

    function handleMouseEnter(contentVal) {
        const body = document.querySelector('.downPage-section');
        const echohub = document.querySelector('.cursor-echohub-div');
        const ecom = document.querySelector('.cursor-ecom-div');
        const typespeed = document.querySelector('.cursor-typespeed-div');

        var color;
        switch (contentVal) {
            case 'echo-hub':
                color = `#4a5964`;
                echohub.style.opacity = 1;
                break;
            case 'type-speed':
                color = '#443125';
                typespeed.style.opacity = 1;
                break;
            case 'e-com':
                color = 'rgb(95, 61, 82)';
                ecom.style.opacity = 1;
                break;
            default:
                color = '#14181b';
        }
        body.style.backgroundColor = color
    }

    function handleMouseLeave() {
        const body = document.querySelector('.downPage-section');
        const echohub = document.querySelector('.cursor-echohub-div');
        const ecom = document.querySelector('.cursor-ecom-div');
        const typespeed = document.querySelector('.cursor-typespeed-div');
        echohub.style.opacity = 0;
        ecom.style.opacity = 0;
        typespeed.style.opacity = 0;
        body.style.backgroundColor = `#14181b`
    }
    return (
        <div className="projectSection" ref={ProjectSectionRef}>

            <div className="cursor-div" ref={cursor}>
                <div className="cursor-echohub-div">
                    <img src={EchoHub1} />
                </div>

                <div className="cursor-ecom-div">
                    <img src={Ecom1} />
                </div>

                <div className="cursor-typespeed-div">
                    <img src={TS1} />
                </div>
            </div>
            <div className="projectSection-heading">
                Projects
            </div>

            <div className="projectSection-content-div">

                <div className="projectSection-upper-content-div">

                    <div className="echo-hub-content-div" onMouseEnter={() => handleMouseEnter('echo-hub')} onMouseLeave={() => handleMouseLeave('echo-hub')}>

                        <img src={EchoHubImage} ref={ImageRef} />

                    </div>

                    <div className="typespeed-content-div" onMouseEnter={() => handleMouseEnter('type-speed')} onMouseLeave={() => handleMouseLeave('type-speed')}>

                        <img src={keyboardImage} ref={keyboardImageRef} />
                    </div>

                </div>

                <div className="projectSection-lower-content-div">

                    <div className="e-commerce-content-div" onMouseEnter={() => handleMouseEnter('e-com')} onMouseLeave={() => handleMouseLeave('e-com')}>

                        <img src={ECommerceImage} ref={EComRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}