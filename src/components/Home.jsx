import React from 'react'
import "./App.css"

const Home = () => {

  const mycss = {
    fontFamily: "PT Serif"

  }
  return (
   <>
   

  <div className="maindiv h-screen w-full bg-green-300">


  <div style={{backgroundImage:"url(https://www.techrepublic.com/wp-content/uploads/2022/10/tr-saas-software-as-a-service-what.jpeg)",height: "100vh" ,width: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat:"no-repeat", display: "flex", justifyContent: "end"}}>

<div className="content h-full w-2/5  flex flex-col items-center justify-center ">

  <h4  className='h-32 w-full  text-4xl text-center font-semibold leading-10'>Manage Your Data With Pinnacle Management System... </h4>


  <p className='h-36 w-full  text-base px-4 py-4 mt-2 text-center text-white'> These days, you can get data about any aspect of your business, ranging from market conditions to consumer values. But without the right tools, this collection of data can seem overwhelming. Data management systems will help you make sense of your data and draw meaning from your insights. </p>

  <button className='h-10 w-32 border-2 border-solid border-black text-base font-bold rounded mt-4 hover:border-white hover:text-white'>Explore More</button>
</div>

</div>


<div className="h-screen w-full px-12  ">

<h1 className='text-4xl mt-7 text-sky-900 fontfamily' >How We Tailor Data Management Solutions <br /> to Specific Industry Needs </h1>

<p className='text-xl mt-7'>ScienceSoft has practical experience in 30+ domains, including healthcare, manufacturing, BFSI, retail <br /> & ecommerce, telecoms, transportation & logistics, and more.</p>

<div className='h-3/5 w-auto  mt-5 flex items-center justify-between px-5 py-5 '>

<div className="box1  h-72 w-64 border-2 border-solid border-slate-300 rounded flex flex-col items-center px-5 py-1">

  <h1 className='text-3xl'>⭐</h1>

  <h2 className='text-xl font-bold text-center'>Industry-defined capabilities</h2>

<hr className='border border-solid border-black w-full'/>

  <p className='mt-2'>Having delivered hundreds of projects for every major industry, we know what data sources, software capabilities, and integrations will help our customers solve their industry-defined challenges.</p>
</div>

<div className="box2  h-72 w-64 border-2 border-solid border-slate-300 rounded flex flex-col items-center px-5 py-1">

<h1 className='text-3xl'>⭐</h1>

<h2 className='text-xl font-bold text-center'>Regulatory compliance expertise</h2>

<hr className='border border-solid border-black w-full'/>

<p className='mt-2'>We have in-house compliance experts who ensure compliance with both general and industry-specific regulations, including PCI DSS, HIPAA, FDA, GLBA.</p>

</div>

<div className="box3  h-72 w-64 border-2 border-solid border-slate-300 rounded flex flex-col items-center px-5 py-1">

<h1 className='text-3xl'>⭐</h1>

<h2 className='text-xl font-bold text-center'>Continuous Company growth</h2>

<hr className='border border-solid border-black w-full'/>

<p className='mt-2'>Our experts keep investing in their expertise to stay up-to-date with industry changes. We are ready to plan and deliver cutting-edge solutions that are fully in line with the latest domain trends.</p>

</div>

<div className="box4  h-72 w-64 border-2 border-solid rounded flex flex-col items-center px-5 py-1 border-slate-300">

<h1 className='text-3xl'>⭐</h1>

<h2 className='text-xl font-bold text-center'>Training and Support</h2>

<hr className='border border-solid border-black w-full'/>

<p className='mt-2'>Provide industry-specific training materials and support resources.
Ensure that the support team is knowledgeable about the unique challenges faced by users in that industry.</p>



</div>




</div>


</div>



<div className="pg3 h-screen w-full px-12  bg-slate-100 border-t flex ">

<div className="pg3-content">

<h1 className='text-4xl mt-7 text-sky-900 fontfamily'>Data Quality Standards We Target </h1>

<p className='text-xl mt-7'>When establishing data management for customers, <br /> ScienceSoft guarantees the following data quality characteristics:</p>

<div className="imgbox h-3/6 w-2/3  mt-5 bg-[url(https://estuary.dev/static/15d4b0bb8affc7db29e782ae10588b78/d6047/02_Data_Quality_Data_Quality_Dimensions_24ba5a39c7.png)] bg-center bg-cover bg-no-repeat rounded-full"></div>

</div>

<div className="pg3-topicsbox h-full w-2/3  flex px-2 py-2 ">

<div className="left w-2/4 h-full  flex flex-col items-center justify-around ">

<div className="box1 h-36 w-72 shadow-md text-center">
  <h2 className='text-2xl font-semibold'> <span className='text-3xl'>✔</span> Consistency </h2>
  <p className='text-xl'>No data contradictions within one data store and across different data stores.</p>
</div>


<div className="box2 h-36 w-72 shadow-md text-center">

<h2 className='text-2xl font-semibold'> <span className='text-3xl'>✔</span>Accuracy </h2>
  <p className='text-xl'>The information your data contains is reliable and error-free.</p>

</div>

<div className="box3 h-36 w-72 shadow-md text-center">

<h2 className='text-2xl font-semibold'> <span className='text-3xl'>✔</span>Completeness </h2>
  <p className='text-xl'>Data is sufficient for answering your business questions.</p>

</div>

{/* left */}
</div>


<div className="right   w-2/4 h-full  flex flex-col items-center justify-around">

<div className="box1 h-36 w-72 shadow-md text-center">

<h2 className='text-2xl font-semibold'> <span className='text-3xl'>✔</span>Auditability </h2>
  <p className='text-xl'>Data is accessible, and it is possible to trace the introduced changes.</p>

</div>

<div className="box2 h-36 w-72 shadow-md text-center">

<h2 className='text-2xl font-semibold'> <span className='text-3xl'>✔</span>	
Timeliness </h2>
  <p className='text-xl'>Data represents reality within a reasonable period of time or  with the corporate standards</p>

</div>

<div className="box3 h-36 w-72 shadow-md text-center">

<h2 className='text-2xl font-semibold'> <span className='text-3xl'>✔</span>	
Uniqueness </h2>
  <p className='text-xl'>A data record with specific details  only once in a database, no data duplicates are reported.</p>

</div>

{/* right */}
</div>






</div>



</div>




    {/* main */}
  </div>
   
   

 

   
   </>
  )
}

export default Home

