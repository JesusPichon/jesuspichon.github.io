import Label from "../components/Label";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/Project.types";
import Slider from "react-slick";

function ProjectsSection() {
    const projects: Project[] = [
        {
            title: "Encriptador",
            description: "Challenge 01: Encriptador de texto, programa Oracle Next Education.",
            img: "https://objectstorage.sa-santiago-1.oraclecloud.com/n/axtvtikkef9i/b/bucket-projects/o/01-Encriptador.png",
            technologies: [
                { name: "HTML", color: "red" },
                { name: "CSS", color: "blue" },
                { name: "JavaScript", color: "yellow" },
            ],
        },
        {
            title: "BioCollector",
            description: "Aplicacion movil para la toma de datos biologicos en campo.",
            img: "https://objectstorage.sa-santiago-1.oraclecloud.com/n/axtvtikkef9i/b/bucket-projects/o/02-BioCollector.png",
            technologies: [
                { name: "React native", color: "red" },
                { name: "JavaScript", color: "yellow" },
                { name: "Pocket Base", color: "gray" },
                { name: "SQLite", color: "green" }
            ],
        },
        {
            title: "SOTM",
            description: "Aplicación que permite encontrar la ruta más corta entre las estaciones del metro de la Ciudad de México. (3° Fepro 2022 | Puebla)",
            img: "https://objectstorage.sa-santiago-1.oraclecloud.com/n/axtvtikkef9i/b/bucket-projects/o/04-SOTM.png",
            technologies: [
                { name: "Java", color: "red" },
                { name: "Apchae", color: "yellow" },
                { name: "JSP", color: "gray" },
                { name: "AJAX", color: "green" }
            ],
        },
        {
            title: "Conversor",
            description: "Challenge 02: Conversor de divisas, programa Oracle Next Education.",
            img: "https://objectstorage.sa-santiago-1.oraclecloud.com/n/axtvtikkef9i/b/bucket-projects/o/04-SOTM.png",
            technologies: [
                { name: "Java", color: "red" },
            ],
        },
        {
            title: "Recko:ChatBot",
            description: "Sistema para la gestión de tareas en Notion utilizando el servicio de mensajería WhatsApp. (1° Hackathon | Puebla)",
            img: "https://objectstorage.sa-santiago-1.oraclecloud.com/n/axtvtikkef9i/b/bucket-projects/o/06-ChatBot.png",
            technologies: [
                { name: "Express", color: "gray" },
                { name: "JavaScript", color: "yellow" },
                { name: "Notion", color: "white" },
            ],
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-gradient-to-r from-[#062D4E] to-[#051A2F] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto mb-8 px-4 w-35">
                <Label>Projects</Label>
            </div>

            <div className="slider-container sm:px-40">
                <Slider {...settings}>
                    {projects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            img={item.img}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProjectsSection;
