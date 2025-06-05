import React from 'react'
import { ProjectOne } from './ProjectOne'
import { ProjectTwo } from './ProjectTwo'


const Projects = () => {
  return (
    <div className= 'w-full border-t-2 border-emerald-900'>
        <h1 className='w-full text-center font-semibold text-4xl pt-4'>Projects</h1>
        <div className='md:flex justify-center items-center gap-20'>

            <ProjectOne name="Ayush Docs(Full Stack)" content="A full-stack blog application featuring AI-powered suggestions and an admin dashboard. Built with the MERN stack, this project delivers a fully functional and responsive blogging platform.
" liveDemo="https://ayushdocs.vercel.app" githubCode="https://github.com/ayushpatwal011/ayushdocs"/>
         
            <ProjectTwo name="Vegcart (Full Stack)" content="A full-stack e-commerce application designed to handle large APIs and includes a powerful admin dashboard. Developed using the MERN stack, it provides a smooth and scalable user experience.
" liveDemo="https://vegcart-seven.vercel.app" githubCode="https://github.com/ayushpatwal011/vegcart"/>
         
        </div>
    </div>
  )
}

export default Projects
