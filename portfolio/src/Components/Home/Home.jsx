import avatarImg from "../../assets/fb.jpg"
import TextChange from "../textChange";

const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20"> 
            <div className="md:w-2/4 md:pt-10">
            <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter pb-3">
                <TextChange/>
            </h1>
            <p className="text-sm md:text-2xl tracking-tight text-justify">
            Experienced full-stack developer with 6 months of expertise in building pixel-perfect, responsive web applications using modern technologies. Proficient in both frontend and backend development.
            </p>
            <a href="https://github.com/Md-Badhon-Sheikh/cv" target="_blank">
            <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">My Resume</button>
            </a>
            </div>
            <div className="mr-16">
                <img className="w-80 rounded-full" src={avatarImg} alt="" />
            </div>
        </div>
    );
};

export default Home;