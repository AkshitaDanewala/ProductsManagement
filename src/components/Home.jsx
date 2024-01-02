import React from 'react'

const Home = () => {
  return (
   <>
   
   <div style={{backgroundImage:"url(https://www.techrepublic.com/wp-content/uploads/2022/10/tr-saas-software-as-a-service-what.jpeg)",height: "90vh" ,width: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat:"no-repeat", display: "flex", justifyContent: "end"}}>

    <div className="content h-full w-2/5  flex flex-col items-center justify-center ">

      <h4  className='h-32 w-full  text-4xl text-center font-semibold leading-10'>Manage Your Data With Pinnacle Management System... </h4>


      <p className='h-36 w-full  text-base px-4 py-4 mt-2 text-center text-white'> These days, you can get data about any aspect of your business, ranging from market conditions to consumer values. But without the right tools, this collection of data can seem overwhelming. Data management systems will help you make sense of your data and draw meaning from your insights. </p>

      <button className='h-10 w-32 border-2 border-solid border-black text-base font-bold rounded mt-4 hover:border-white hover:text-white'>Explore More</button>
    </div>

   </div>

 <div className="targets h-full w-full bg-red-300">

<h1>Data Quality Standards We Target</h1>
<p>When establishing data management for customers, ScienceSoft guarantees the following data quality characteristics:</p>


</div>

   
   </>
  )
}

export default Home

