/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import{apiUrl,filterData} from "./data";
import { toast } from "react-toastify";
import Spinner from"./components/Spinner";
const App = () => {
   const[courses,setCourses]=useState(null);
   const[loading,setLoading]=useState(true);
   const[category, SetCategory]=useState(filterData[0].title)
  async function fetchdata()  {
    setLoading(true);
    try{
        let response= await fetch(apiUrl);
        let output=  await  response.json();
        ///output
        setCourses(output.data);
    }
    catch(error)
    {
       toast.error("Network error");
    }
    setLoading(false);
  }   
  useEffect (()=>{
    fetchdata();
  },[]);

  return (
    <div className=" min-h-screen  bg-bgDark2">
         <div>
            <Navbar/>
         </div>
           <div className="bg-bgDark2">
                  <div>
                    <Filter filterData={filterData}
                    category={category}
                    SetCategory={SetCategory}
                    />
                  </div>

          
        <div className='w-11/12 max-w-[1200px]
        mx-auto  justify-center items-center min-h-[50vh]'>
             {
              loading ?(<Spinner/>):( <Cards courses={courses} category={category} />)
             }
        </div>
  </div>
    </div>
  )


}

export default App;
