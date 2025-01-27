import React from 'react'
import { Timeline } from './ui/timeline';

const timelineData = [
  {
    title: "Currently...",
    content: (
      <>
        <h2 className='font-bold text-xl'>Pursuing a Bachelors of Computer Applications (BCA)</h2>
        <h3 className='font-bold text-xl'>Bagwant Golbal University, Kotdwar, Uttarakhand</h3>
        <p> Currently, I am expanding my skills in a wide range of programming languages and technologies, including C, C++, JavaScript, Java, Python, and databases. I am also delving into Data Structures and Algorithms (DSA), and exploring Database Management Systems (DBMS).</p>
      </>
    ),
  },
  {
    title: "2023",
    content: (
      <>
        <h2 className='font-bold text-xl'>
          Complete Senior Secondary Education(12th)
        </h2>
        <h3 className='font-bold text-xl'>
          Adarsh Vidhya Niketan, Kotdwar, Pauri Garhwal, UK
        </h3>
      </>
    ),
  },
  {
    title: "2022",
    content: (
      <>
        <h2 className='font-bold text-xl'>
          Diploma in Computer Application
        </h2>
        <h3 className='font-bold text-xl'>
          Lakshya Acadmey of Computer Application Kotdwar, Pauri Garhwal, UK
        </h3>
      </>
    ),
  },
  {
    title: "2021",
    content: (
      <>
        <h2 className='font-bold text-xl'>
          Complete  Secondary Education(10th)
        </h2>
        <h3 className='font-bold text-xl'>
          Adarsh Vidhya Niketan, Kotdwar, Pauri Garhwal, UK
        </h3>
      </>
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