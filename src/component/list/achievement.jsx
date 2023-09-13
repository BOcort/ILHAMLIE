import achievment from '../../util/data.json'
import AchievementCard from '../card/Achievement-card';
import { useState } from 'react';

export default function Achievement() {
    const projects = achievment.Achievement;
    const [slide, setslide] = useState(1);
    const nextSlide = () => {
        if (slide === projects.length) {
            setslide(1)
        } else {
            setslide(slide + 1)
        }
    }

    const prevSlide = () => {
        if (slide === 1) {
            setslide(projects.length)
        } else {
            setslide(slide - 1)
        }
    }
    return (
        <div className='bg-black text-white'>
            <div id='container' className='w-11/12 mx-auto text-center'>
                <div id='Learning-list' className='w-full'>
                    <h2 className='text-3xl font-bold py-5'>Learning</h2>
                </div>
                <div className='flex justify-center gap-8 max-md:hidden'>
                    {projects.map((project, index) => (
                        <AchievementCard
                            key={index}
                            id={project.id}
                            title={project.title}
                            detail={project.detail}
                            DateProject={project.date}
                            types={project.types}
                            img={project.img}
                        />
                    ))}
                </div>

                <div className='hidden max-md:block'>
                    <div id="controls-carousel" className="relative w-full" data-carousel="static">
                        {/* Carousel wrapper */}
                        <div className="relative overflow-hidden rounded-lg items-center justify-center">
                            {projects.map((project, index) => (
                                <div key={index} className={`${project.id === slide ? "block" : "hidden"} duration-700 ease-in-out`}>
                                    <AchievementCard
                                        key={index}
                                        id={project.id}
                                        title={project.title}
                                        detail={project.detail}
                                        DateProject={project.date}
                                        types={project.types}
                                        img={project.img}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Slider controls */}
                        <button type="button" className={`absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`} data-carousel-prev onClick={() => prevSlide()}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => nextSlide()}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
