import React from 'react';
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card9.png'
import Card4 from '../assets/card4.png'
import Card6 from '../assets/card6.png'
import Card7 from '../assets/card7.png'





const Card = ({ imageSrc, title, description }) => 
   
    (
    
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:translate-y-3 hover:border-b-4 hover:border-orange-500 transition-all duration-200">
        <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-80 object-cover "
        />
        <div className="p-4">
            <h3 className="text-xl font-semibold text-orange-800 mb-2 ">{title}</h3>
            <p className="text-orange-600 mb-4">{description}</p>
            <a 
                href="#" 
                className="inline-block px-4 py-2 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-700 transition duration-300"
            >
                Learn More
            </a>
        </div>
    </div>
);

const CardsSection = () => {
    const cardData = [
      
         { imageSrc: Card2, title: "For a Health and Wellness Brand", description: "Welcome to AkashVibeWeb, where our mission is to empower you to live your healthiest, happiest life. We offer a range of premium wellness products and services, crafted with care and backed by science. Our team of health professionals and enthusiasts is committed to providing personalized support and guidance on your wellness journey. Join our community and discover a path to better health today!      "},
         { imageSrc: Card4, title: " For an E-Commerce Business", description: "AkashVibeWeb is more than just an online store; we’re a destination for discovering quality products and exceptional service. Our curated selection features the latest trends and timeless classics, all sourced from trusted brands. With a focus on customer satisfaction, we strive to make your shopping experience seamless and enjoyable. Explore our collections and experience the difference with AkashVibeWeb "},
         { imageSrc: Card6, title: " For a Nonprofit Organization", description: "AkashVibeWeb is dedicated to creating positive change in [specific cause or community]. Our team of passionate individuals works tirelessly to address pressing issues and improve lives. Through collaboration, advocacy, and innovative programs, we strive to make a meaningful impact. Join us in our mission to create a better world and become part of a community committed to making a difference.            "},
         { imageSrc: Card1, title: "For a Technology Startup", description: "At AkashVibeWeb,we're passionate about pushing the boundaries of technology to create solutions that make a real difference. Our team of experts is dedicated to developing cutting-edge software that simplifies your life and enhances productivity.With a commitment to excellence and a customer-first approach,we're here to transform your digital experience and drive your success.                              "},
         { imageSrc: Card7, title: "For a Consulting Firm", description: "At AkashVibeWeb, we specialize in delivering strategic consulting services that drive growth and innovation. Our team of seasoned consultants brings a wealth of experience and industry knowledge to help you navigate challenges and seize opportunities.  We partner with you to develop tailored solutions that achieve your goals and propel  your business forward.                                                        "},
         { imageSrc: Card3, title: "For a Creative Agency", description: "At AkashVibeWeb, we believe that creativity is the key to unlocking potential and making a lasting impact. Our talented team of designers, strategists, and storytellers work collaboratively to bring your brand’s vision to life. From innovative design solutions to impactful marketing strategies, we’re dedicated to helping you stand out  and succeed in a competitive world.                                           "},
       
];

    return (
        <section id='products' className='products'>
        <section className="p-4 md:p-8 bg-gray-100 ">
             <h1 className='text-4xl font-semibold mb-4 text-yellow-700 flex justify-center '>Products</h1>
                      <p className='text-yellow-500	color: rgb(234 179 8);text-base mb-8 flex justify-center'>We can explore our products</p>
                      <p className='text-yellow-500	'>"Welcome to AkashVibeWeb, where creating stunning websites is as easy as a few clicks. Whether you’re a beginner or a pro, our intuitive drag-and-drop builder empowers you to design and launch your site in minutes—no coding required. Start today and bring your vision to life with beautiful, responsive websites."</p>
                      <br></br>
                      
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {cardData.map((card, index) => (
                    <Card 
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
        </section>
        
    );
};

export default CardsSection;


