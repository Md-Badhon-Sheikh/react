import AboutImg from "../../assets/DALL·E 2025-02-01 01.41.51 - A 3D-rendered illustration of a young male character sitting in a modern office chair, stretching his arms up while working on a laptop. The scene inc.webp";
import {IoArrowForward} from "react-icons/io5";
const About = () => {
    return (
        <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                    <img className="md:h-80 rounded-3xl" src={AboutImg} alt="About Image" />

                    <ul>
                        <div className=" flex gap-3 py-4">
                            <IoArrowForward  size={30} className ="mt-1" />
                            <span className="w-96">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal"> Full Stack Developer </h1>
                                    <p className="text-sm md:text-md leading-tight">As a Full Stack Developer, I specialize in building dynamic, user-friendly web applications. My expertise includes front-end technologies like React, Vue.js, and Tailwind CSS, and back-end development using Node.js, Laravel, and MySQL. </p>
                            </span>
                        </div>
                        <div className=" flex gap-3 py-4">
                            <IoArrowForward  size={30} className ="mt-1" />
                            <span className="w-96">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal"> Laravel Developer </h1>
                                    <p className="text-sm md:text-md leading-tight">As a Laravel Developer, I specialize in building scalable, secure, and high-performance web applications using the Laravel framework. With expertise in PHP, MySQL, RESTful APIs, and authentication systems.</p>
                            </span>
                        </div>
                        <div className=" flex gap-3 py-4">
                            <IoArrowForward  size={30} className ="mt-1" />
                            <span className="w-96">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal"> React Developer </h1>
                                    <p className="text-sm md:text-md leading-tight">As a React Developer, I specialize in building dynamic, high-performance, and user-friendly web applications using React.js. With expertise in JavaScript (ES6+), Redux, Tailwind CSS, and REST APIs, I create interactive UI components that enhance user experience.</p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;