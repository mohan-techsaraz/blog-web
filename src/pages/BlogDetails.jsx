import React from 'react'
import Header from '../common/Header'
import { useParams } from 'react-router-dom'
import { bloglist } from '../Data/BlogData';

export default function BlogDetails() {
    let urlParams=useParams();
    let blogId=urlParams.id;
    console.log(blogId)
    let singleBlogDetails=bloglist.filter((v,i)=>v.id==blogId)[0]
    console.log(singleBlogDetails)
  return (
    <div>
        <Header/>
<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div class="bg-cover  "  title="Woman holding a mug">
    <img src={singleBlogDetails.image} className='w-[100%] h-[500px]'/>
    </div>
  <div class="max-w-2xl mx-auto">
    <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div class="">
            
              <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2">{singleBlogDetails.title}</h1>
              <p class="text-gray-700 text-xs mt-2">Written By: <a href="#" class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Ahmad Sultani
              </a></p>
               <p>{singleBlogDetails.content}</p>          
             </div>
          
            </div>
       </div>
  </div>
  
 </div>





  
  
  )
}
