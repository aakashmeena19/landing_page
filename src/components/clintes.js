import React from 'react'
import png1 from '../assets/21.png'
import png2 from '../assets/22.png'
import png3 from '../assets/23.png'
import png4 from '../assets/24.png'
import png5 from '../assets/25.png'
import png6 from '../assets/26.png'
import png7 from '../assets/27.png'
import png8 from '../assets/mercedes.png'
import png9 from '../assets/toyota.png'
import png10 from '../assets/nessan.png'






const clintes = () => {
    return (
        <section id="Clients">
        <section className="p-4 md:p-8 bg-white-100 shadow-md">
                          <h1 className='flex justify-center text-4xl font-semibold mb-4 text-orange-900 '>Our Clientes </h1>
                          <p className='text-orange-500	color: rgb(234 179 8);text-base mb-8 flex justify-center'>We have been working with some Fortune 1000+ clients</p>

            <div className="flex flex-wrap justify-center gap-40">
                <img 
                    src={png1} 
                    alt="Client 1" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                 <img 
                    src={png6} 
                    alt="Client 1" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32  hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                 <img 
                    src={png7} 
                    alt="Client 1" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                <img 
                    src={png2} 
                    alt="Client 2" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                <img 
                    src={png3} 
                    alt="Client 3" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                <img 
                    src={png4}  
                    alt="Client 4" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                <img 
                    src={png5} 
                    alt="Client 5" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                    
                />
                 <img 
                    src={png8}  
                    alt="Client 4" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                   <img 
                    src={png9}  
                    alt="Client 4" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                     <img 
                    src={png10}  
                    alt="Client 4" 
                    className="w-24 h-24 object-contain md:w-32 md:h-32 hover:translate-y-3 hover:border-b-4 hover:border-shadow-md border-orange-200 transition-all duration-300"
                />
                  
            </div>
        </section>
        </section>
    );
};

export default clintes ;

  


