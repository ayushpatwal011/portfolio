import React from 'react'
import { ProjectOne } from './ProjectOne'

const Projects = () => {
  return (
    <div className= 'w-full border-t-2 border-emerald-900'>
        <h1 className='w-full text-center font-semibold text-4xl pt-4'>Projects</h1>
        <div className='md:flex justify-center items-center gap-20'>
            <ProjectOne name="Pokemon Cards" content="React Project, Handling Large Api, Using Vite, Tailwind Css I made a responsive website" liveDemo="https://pokemoncards-roan.vercel.app/" githubCode="https://github.com/ayushpatwal011/pokemoncards"/>
         
            <ProjectOne name="Pokemon Cards" content="React Project, Handling Large Api, Using Vite, Tailwind Css I made a responsive website" liveDemo="https://pokemoncards-roan.vercel.app/" githubCode="https://github.com/ayushpatwal011/pokemoncards"/>
         
        </div>
    </div>
  )
}

export default Projects