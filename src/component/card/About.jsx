// import React from 'react'
import PhotoProfile from '../../assets/image/about/PhotoProfile.jpg'
import { FaJava, FaPython,FaReact} from 'react-icons/fa';


export default function About() {
  return (
    <div className='bg-black text-white '>
      <div id="container" className=" w-11/12 mx-auto  ">
        <div id="about-me" className="grid grid-cols-3">
          <div id="profile-picture" className="col-span-1 w-full">
            <img src={PhotoProfile} alt="" className='' />
          </div>
          <div id="introduce" className="col-span-2 grid grid-rows-2">
            <div id='detail' className='row-span-1 grid'>
              <h2 className=' text-3xl font-bold'>ILHAM TATAYO LIE</h2>
              <p className='text-xl'>
                Currently pursuing a degree at Universitas Papua, simultaneously undergoing a bootcamp at harisenin.com. has completed a front-end
                developer course from Progate, acquiring skills in HTML, CSS, JavaScript, Git, and basic React. During high school, actively participated
                in informatics Olympiads and achieved success at the district level
              </p>
            </div>
            <div id='Expertise' className='row-span-1 '>
              <div className=''>
                <h2 className='text-2xl font-semibold mb-5'>Expertise</h2>
                <div id='skill' className='grid grid-cols-2 gap-4'>
                  <div id='Language' className='p-3 rounded-xl border-dashed border-2 border-sky-500'>
                    <h3 className='text-xl font-semibold mb-5'>Language Programing</h3>
                    <h3 className=' font-semibold mb-5 flex'><FaJava className='text-4xl' /> <FaPython className='text-4xl' /></h3>
                    <p className='text-justify '>As an individual, I am proficient in the Java language and enjoy learning within its domain. However, I often leverage Python to solve various problems. During my high school years, I actively participated in problem-solving competitions and informatics olympiads, where I primarily used Pascal as my main programming language. The combination of my knowledge and experience with different programming languages enables me to approach problem-solving challenges with flexibility and creativity.</p>
                  </div>
                  <div id='Web-programing' className='p-3 rounded-xl border-dashed border-2 border-sky-500'>
                    <h3 className='text-xl font-semibold mb-5'>Web programing</h3>
                    <h3 className=' font-semibold mb-5 flex'><FaReact className='text-4xl' /></h3>
                    <p className='text-justify'>{`I am a student who is deeply immersed in learning web programming through a diverse range of courses. Currently, I am engrossed in a project assigned to me on harisenin.com, where I am utilizing React in conjunction with the Tailwind framework. My learning journey extends beyond harisenin.com, as I have also sought knowledge from other reputable sources, such as Progate's Front-end Course and Coding Studio's Web Programming/Full Stack course. My passion for programming and continuous exploration of new technologies drive me to excel in the field of web development and create innovative solutions.`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
