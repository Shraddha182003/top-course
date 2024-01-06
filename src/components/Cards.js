import React, { useState } from 'react'
import Card from "./Card"
const Cards = (props) => {
  let courses=props.courses;
  let category=props.category;
  const[likedCourses,setLikedCourses]=useState([]);
   function getCourses()
   {
      if(category === "All")
     {
          let allCourses=[];
              Object.values(courses).forEach(array=>{
                array.forEach(courseData=>{
                  allCourses.push(courseData); 
                })
              })
              return allCourses || [];
     }
        else{
          //send specific category data
           return courses[category];
        }
   }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      
      {
        // eslint-disable-next-line array-callback-return
        getCourses().map((course)=>
        (
          <Card key={course.id} 
          course={course}
          setLikedCourses={setLikedCourses}
           likedCourses={likedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards;