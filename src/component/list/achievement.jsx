import achievment from '../../util/data.json'
import AchievementCard from '../card/Achievement-card';

export default function Achievement() {
    const projects = achievment.Achievement;
    return (
        <div className='bg-black text-white'>
            <div id='container' className='w-11/12 mx-auto text-center'>
                <div id='Achievment-list' className='w-full'>
                    <h2 className='text-3xl font-bold py-5'>Achievement</h2>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        projects.map((project, index) => (
                            <AchievementCard
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
