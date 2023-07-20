import learning from '../../util/data.json'
import LearningCard from '../card/Learning-card';
export default function LearningList() {
    const projects = learning.Learning;
    return (
        <div className='bg-black text-white'>
            <div id='container' className='w-11/12 mx-auto text-center'>
                <div id='Learning-list' className='w-full'>
                    <h2 className='text-3xl font-bold py-5'>Learning</h2>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        projects.map((project, index) => (
                            <LearningCard
                                key={index}
                                id={project.id}
                                title={project.title}
                                detail={project.detail}
                                DateProject={project.date}
                                types={project.types}
                                img={project.img}
                                className="col-span-1"
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
