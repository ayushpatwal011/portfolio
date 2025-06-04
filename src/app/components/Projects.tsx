import React from 'react'
import { ProjectOne } from './ProjectOne'
import { ProjectTwo } from './ProjectTwo'


const Projects = () => {
  return (
    <div className= 'w-full border-t-2 border-emerald-900'>
        <h1 className='w-full text-center font-semibold text-4xl pt-4'>Projects</h1>
        <div className='md:flex justify-center items-center gap-20'>
            <ProjectOne name="Pokemon Cards(Frontend)" content="React Project, Handling Large Api, Using Vite, Tailwind Css I made a responsive website" liveDemo="https://pokemoncards-roan.vercel.app/" githubCode="https://github.com/ayushpatwal011/pokemoncards"/>
         
            <ProjectTwo name="Vegcart (Full Stack)" content="Full Stack Project, Handling Large Api, Using MERN I made a functional website" liveDemo="https://vegcart-seven.vercel.app/" githubCode="https://github.com/ayushpatwal011/vegcart"/>
         
        </div>
    </div>
  )
}

export default Projects