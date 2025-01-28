import React from 'react'
import { Timeline } from './ui/timeline';

const timelineData = [
  {
    title: "Currently...",
    content: (
<div className='font-mono'>
          <h2 className='md:font-semibold text-xl'>Pursuing a Bachelors of Computer Applications (BCA)</h2>
        <h3 className='md:font-semibold text-xl'>Bagwant Golbal University, Kotdwar, Uttarakhand</h3>
        <p> Currently, I am expanding my skills in a wide range of programming languages and technologies, including C, C++, JavaScript, Java, Python, and databases. I am also delving into Data Structures and Algorithms (DSA), and exploring Database Management Systems (DBMS).</p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
<div className='font-mono'>
          <h2 className='md:font-semibold text-xl'>
          Complete Senior Secondary Education(12th)
        </h2>
        <h3 className='md:font-semibold text-xl'>
          Adarsh Vidhya Niketan, Kotdwar, Pauri Garhwal, UK
        </h3>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
<div className='font-mono'>
          <h2 className='md:font-semibold text-xl'>
          Diploma in Computer Application
        </h2>
        <h3 className='md:font-semibold text-xl'>
          Lakshya Acadmey of Computer Application Kotdwar, Pauri Garhwal, UK
        </h3>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className='font-mono'>
        <h2 className='md:font-semibold text-xl'>
          Complete  Secondary Education(10th)
        </h2>
        <h3 className='md:font-semibold text-xl'>
          Adarsh Vidhya Niketan, Kotdwar, Pauri Garhwal, UK
        </h3>
      </div>
    ),
  },]
// A
const TimeLIne = () => {
  return (
    <div className='w-full h-auto'>
      <Timeline data={timelineData} />
    </div>
  )
}

export default TimeLIne