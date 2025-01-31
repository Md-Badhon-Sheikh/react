import ProjectsCard from "./ProjectsCard";


const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap gap-5">
                <ProjectsCard
                 title="Hostel Management System" 
                 main="This is a Management System website, It's use a collage or University Student hostel room, meal manage system. "/>
                <ProjectsCard 
                title="Hostel Management System"  
                main="This is a Management System website, It's use a collage or University Student hostel room, meal manage system. "/>
                <ProjectsCard 
                title="Hostel Management System" 
                main="This is a Management System website, It's use a collage or University Student hostel room, meal manage system. "/>
            </div>
        </div>
    );
};

export default Projects;