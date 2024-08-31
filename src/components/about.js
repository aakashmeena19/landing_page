import React from 'react'
import png from '../assets/pngegg (10).png'

const about = () => {
  return (
    <section id="About" className='About'>
   

   
            <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 bg-white-100 shadow-md">
                {/* Paragraph Section */}
                <div className="flex-1 mb-4 md:mb-0 md:pr-8">
                <h1 className='text-4xl font-semibold mb-4 text-orange-900  flex justify-center'>About Us</h1>
                      <p className='text-orange-500	color: rgb(234 179 8);text-base mb-8'>
Welcome! I’m Akash Meena a passionate web developer dedicated to crafting stunning, high-performance websites that help businesses thrive online.

With 5 years of experience in the industry, I specialize in creating bespoke web solutions that are both visually captivating and technically robust. My expertise spans across [], ensuring that every project I undertake is optimized for user experience and functionality.

At the heart of my approach is a commitment to understanding your unique needs and goals. Whether you're looking to build a brand-new website, revamp an existing one, or tackle specific technical challenges, I provide tailored solutions that align with your vision and objectives.

 </p>
 {/* <div className='flex justify-center'> */}
 <a href="#" class=" px-6 py-3 text-white bg-orange-500 border border-transparent rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-900 focus:ring-opacity-50 transition duration-200 ">
                      Learn More
</a>


                          
                </div>
                
                {/* Image Section */}
                <div className="flex-1">
                    <img 
                        src={png} 
                        alt="Placeholder" 
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
            </section>
        );
    };
    
   
    
  


export default about;
