// import { useState } from 'react'
import data from '../../util/data.json'
import ProjectCard from '../card/project-card'
export default function ProjectList() {
    const projects = data.project;
    return (
        <div className='bg-black text-white'>
            <div id='container' className='w-11/12 mx-auto text-center'>
                <div id='project-list' className='w-full'>
                    <h2 className='text-3xl font-bold py-5'>Project</h2>
                </div>
                <div className='flex justify-center gap-8'>
                    {projects.map((project, index) => (
                        <ProjectCard
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

            </div>
        </div>
    )
}
