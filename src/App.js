import './App.css';
import React from 'react';
import mainImg from "./images/image1.png"
import companyLogo from "./images/company logo.png"
import Logo from "./images/logo.png"
import companyLogo1 from "./images/company logo-1.png"
import companyLogo2 from "./images/company logo-2.png"
import companyLogo3 from "./images/company logo-3.png"
import companyLogo4 from "./images/company logo-4.png"
import companyLogo5 from "./images/company logo-5.png"
import companyLogo6 from "./images/Fictional company logo.png"
import cadience from "./images/cadience wu.png"
import avatharGroup from "./images/Avatar group.png"
import Phoenix from "./images/Phoenix.png"
import Lana from "./images/Lana.png"
import userAvatar from "./images/userAvatar.png"
import SWE from "./images/SWE.png"
import Product from "./images/Product.png"
import Design from "./images/Design.png"


import { FiPlayCircle, FiCommand } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import { RiChatSmileAiLine } from "react-icons/ri";
import { LuMessageCircleHeart } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";


function App() {
  const copyright = String.fromCodePoint(0x00A9);
  const year = 2077;

  const faqs = [
    { 
      question: "Is there a free trial available?", 
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." 
    },
    { 
      question: "Can I change my plan later?", 
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." 
    },
    { 
      question: "What is your cancellation policy?", 
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." 
    },
    { 
      question: "Can other info be added to an invoice?", 
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." 
    },
    { 
      question: "How does billing work?", 
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." 
    },
    { 
      question: "How do I change my account email?", 
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." 
    },
  ];



  return (
    <div className="App">
      <main>
        <header>
          <section>
            <nav className='flex flex-row h-20 items-center'>
              <div className='flex justify-center w-1/6'><img src={Logo} alt="logo" /></div>
              <ul className='flex flex-row w-3/4 space-x-5'>
                <li>Home</li>
                <li>Product</li>
                <li>Resource</li>
                <li>Pricing</li>
              </ul>
              <div><img src={userAvatar} alt="User Logo" /></div>
            </nav>
            <hr />
            <div className='flex flex-col gap-10 items-center mt-28'>
              <div className='flex flex-row text-red-600 font-semibold bg-red-50 space-x-6 border border-gray-300 p-0.5 pr-3 rounded-full items-center'>
                <div className='border bg-slate-50 border-gray-300 rounded-full px-3'>
                  New feature
                </div>
                <div className='flex items-center gap-2'>
                  Check out the team dashboard <FaArrowRight />
                </div>
              </div>
              <h1 className='font-bold text-5xl'>Beautiful analytics to grow smater</h1>
              <p className=' text-center text-2xl w-4/6 text-gray-600'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 startups.</p>
              <div className='flex flex-row space-x-8'>
              <div className='demo-btn rounded-full'>
              <FiPlayCircle />Demo
              </div>
              <button className='btn-primary rounded-full'>
                Sign up
              </button>
              </div>
            </div>
            <div className='flex justify-center m-14 border-8 border-black rounded-t-3xl'>
            <img src={mainImg} alt="Chat botImg" className='object-cover object-top rounded-t-2xl h-[34rem] w-full' />
            </div>
          </section>

          <section className='flex flex-col'>
            <p className='text-center  text-gray-600 mt-10'>Join 4000+ companies already growing</p>
            <div className='grid grid-cols-6 items-center gap-10 m-12 object-cover '>
              <img src={companyLogo3} alt="Company Logo" />
              <img src={companyLogo4} alt="Company Logo" />
              <img src={companyLogo5} alt="Company Logo" />
              <img src={companyLogo} alt="Company Logo" />
              <img src={companyLogo1} alt="Company Logo" />
              <img src={companyLogo2} alt="Company Logo" />
            </div>
            <div className='flex justify-center mt-12'>
            <hr className='w-5/6' />
            </div>
          </section>

          <section>
            <div className='flex flex-col gap-6 items-center mt-28 mb-28'>
            <h4 className='text-red-500 font-bold'>Features</h4>
            <h2 className='font-semibold text-5xl'>Analytics that feels like it's from the future</h2>
            <p className=' text-center text-2xl w-4/6  text-gray-600'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 startups.</p>

            </div>
            <div className='grid grid-cols-3 items-center text-center gap-10 m-14'>
              <div className='flex flex-col items-center'>
                <div className='border border-gray-200 w-fit p-3 rounded-xl'>
                <IoChatbubblesOutline size={25} />
                </div>
                <h3 className='font-bold text-2xl'>Share team inboxes</h3>
                <p className=' text-gray-600'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='border border-gray-200 w-fit p-3 rounded-xl'>
                <BsLightningCharge size={25} />
                </div>
                <h3 className='font-bold text-2xl'>Deliver instant answers</h3>
                <p className=' text-gray-600'>An all-in-one customer service platform that helps you balance everything your customer need to be happy.</p>
                </div>
              <div className='flex flex-col items-center'>
                <div className='border border-gray-200 w-fit p-3 rounded-xl'>
                <FaRegShareSquare size={25} />
                </div>
                <h3 className='font-bold text-2xl'>Manage your team with reports</h3>
                <p className=' text-gray-600'>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                </div>
              <div className='flex flex-col items-center'>
                <div className='border border-gray-200 w-fit p-3 rounded-xl'>
                <RiChatSmileAiLine size={25} />
                </div>
                <h3 className='font-bold text-2xl'>Connect with customers</h3>
                <p className=' text-gray-600'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                </div>
              <div className='flex flex-col items-center'>
                <div className='border border-gray-200 w-fit p-3 rounded-xl'>
                <FiCommand size={25} />
                </div>
                <h3 className='font-bold text-2xl'>Connect the tool you already use</h3>
                <p className=' text-gray-600'>Explore 100+ integrations that make your day-to-day workflow more efficient and familer. Plus, our extensive developer tools.</p>
                </div>
              <div className='flex flex-col items-center'>
                <div className='border border-gray-200 w-fit p-3 rounded-xl'>
                <LuMessageCircleHeart size={25} />
                </div>
                <h3 className='font-bold text-2xl'>Our people make the difference</h3>
                <p className=' text-gray-600'>We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
                </div>
            </div>
          </section>

          <section className='flex flex-col items-center pb-20 bg-slate-100'>
              <div className='object-cover mt-20 mb-10'>
              <img src={companyLogo6} alt="Companylogo" />
              </div>
              <h1 className='font-bold text-5xl text-center w-5/6 mb-10'>We've been using Untitled to kick start every new project and can't imagine working without it.</h1>
              <p className='mb-8'><img src={cadience} alt="" /></p>
              <h4 className='font-semibold'>Candice Wu</h4>
              <p className=' text-gray-600'>Product Manager, Sisyphus</p>
          </section>
          <div className='flex justify-center'>
                <hr className='w-5/6' />
              </div>

          <section className='text-center'>
            <div className='mt-24 mb-20'>
                <h2 className='font-bold text-4xl' >Frequently asked questions</h2>
                <p className=' text-gray-600 mt-7 text-xl'>Everything you need to know about the product and billing.</p>
            </div>
            <div className="flex justify-center mt-4 mb-8">
              <div className="w-4/5 text-left">
                {faqs.map((faq, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <details className="w-2/4 mb-8">
                      <summary className="mt-8 flex items-center cursor-pointer list-none transition duration-300 ease-in-out font-bold">
                        <span className="w-4/5">{faq.question}</span>
                      </summary>
                      <p className="mt-4 transition duration-300 ease-in-out">{faq.answer}</p>
                    </details>
                    {index !== faqs.length - 1 && <hr className="w-2/4" />}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex justify-center mt-2 mb-8'>
            <div className='flex flex-col items-center text-center w-4/5 space-y-6 bg-gray-100 pt-8 pb-8 rounded-lg'>
              <img src={avatharGroup} alt="logo" />
              <h2 className='font-bold'>Still have questions?</h2>
              <p>Cant't find the answer you're looking for? Please chat to our friendly team.</p>
              <button className='rounded-lg btn-primary'>Get in touch</button>
            </div>
            </div>
            <hr />
          </section>

          <section className='flex flex-col m-10'>
            <div className='flex flex-row mb-20'>
                <div className='w-4/5 space-y-8'>
                  <h3 className='text-orange-600 font-bold'>
                    Our blog
                  </h3>
                  <h1 className='font-bold text-4xl'>
                    Lastest blog posts
                  </h1>
                  <p className='text-xl text-gray-600'>
                    Tool and strategies morden teams need to help their companies grow.
                  </p>
                </div>
                <div>
                  <button className='btn-primary rounded-lg'>View all posts</button>
                </div>
            </div>

            <div className='flex items-center'>
              <div className='space-y-4'>
                <img src={Design} alt="design" />
                <h3 className='text-orange-600 font-bold'>Design</h3>
                <div className='flex flex-row items-center'>
                <h1 className='font-bold text-2xl w-5/6'>UX review presentations</h1>
                <MdArrowOutward size={25} />
                </div>
                <p className='text-gray-600'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                <div className='flex items-center gap-4'>
                  <p><img src={userAvatar} alt="Olivia Rhye" /></p>
                  <div>
                    <p className='font-semibold'>Olivia Rhye</p>
                    <p>20 Jan 2024</p>
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <img src={Product} alt="product" />
                <h3 className='text-orange-600 font-bold'>Product</h3>
                <div className='flex flex-row items-center'>
                <h1 className='font-bold text-2xl w-5/6'>Migrating to Linear 101</h1>
                <MdArrowOutward size={25} />
                </div>
                <p className='text-gray-600'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
                <div className='flex items-center gap-4'>
                  <p><img src={Phoenix} alt="Phoenix Baker" /></p>
                  <div>
                    <p className='font-semibold'>Phoenix Baker</p>
                    <p>19 Jan 2024</p>
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <img src={SWE} alt="software" />
                <h3 className='text-orange-600 font-bold'>Software Engineering</h3>
                <div className='flex flex-row items-center'>
                <h1 className='font-bold text-2xl w-5/6'>Building your API stack</h1>
                <MdArrowOutward size={25} />
                </div>
                <p className='text-gray-600'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                <div className='flex items-center gap-4'>
                  <p><img src={Lana} alt="Lana Steiner" /></p>
                  <div>
                    <p className='font-semibold'>Lana Steiner</p>
                    <p>18 Jan 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='flex flex-col items-center gap-6 mt-32 mb-20  bg-gray-100 py-24'>
            <h1 className='font-bold text-4xl'>Start your free trail</h1>
            <p className='text-gray-600 text-lg'>Join our 4,000+ startups already growing with Untitled.</p>
            <div className='space-x-10 flex'>
              <button className='demo-btn rounded-lg bg-white text-gray-600'>Learn more</button>
              <button className='btn-primary rounded-lg'>Get started</button>
            </div>
          </section>
        </header>


        <footer className='mb-10 cursor-default'>
          <section className='flex justify-center' >
            <div className='grid grid-cols-6 gap-24 mb-10' >
            <div>
              <h4 className='text-gray-500 font-medium mb-4'>Product</h4>
              <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
                <li className='hover:animate-blink'>Overview</li>
                <li className='hover:animate-blink'>Features</li>
                <div className='flex flex-row space-x-4 items-center hover:animate-blink'>
                <li>Solution</li>
                <li className='border border-green-400 text-green-700 px-2 text-xs rounded-xl bg-green-100'>New</li>
                </div>
                <li className='hover:animate-blink'>Tutorials</li>
                <li className='hover:animate-blink'>Pricing</li>
                <li className='hover:animate-blink'>Releases</li>
              </ul>
            </div>
            <div>
            <h4 className='text-gray-500 font-medium mb-4'>Company</h4>
              <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
                <li className='hover:animate-blink'>About us</li>
                <li className='hover:animate-blink'>Careers</li>
                <li className='hover:animate-blink'>Press</li>
                <li className='hover:animate-blink'>News</li>
                <li className='hover:animate-blink'>Media kit</li>
                <li className='hover:animate-blink'>Contact</li>
              </ul>
            </div>
            <div>
            <h4 className='text-gray-500 font-medium mb-4'>Resources</h4>
              <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
                <li className='hover:animate-blink'>Blog</li>
                <li className='hover:animate-blink'>Newsletter</li>
                <li className='hover:animate-blink'>Events</li>
                <li className='hover:animate-blink'>Help centre</li>
                <li className='hover:animate-blink'>Tutorials</li>
                <li className='hover:animate-blink'>Support</li>
              </ul>
            </div>
            <div>
            <h4 className='text-gray-500 font-medium mb-4'>Use cases</h4>
              <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
                <li className='hover:animate-blink'>Startups</li>
                <li className='hover:animate-blink'>Enterprise</li>
                <li className='hover:animate-blink'>Government</li>
                <li className='hover:animate-blink'>Saas centre</li>
                <li className='hover:animate-blink'>Marketplaces</li>
                <li className='hover:animate-blink'>Ecommerce</li>
              </ul>
            </div>
            <div>
            <h4 className='text-gray-500 font-medium mb-4'>Social</h4>
              <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
                <li className='hover:animate-blink'>Twitter</li>
                <li className='hover:animate-blink'>Linkedin</li>
                <li className='hover:animate-blink'>Facebook</li>
                <li className='hover:animate-blink'>GitHub</li>
                <li className='hover:animate-blink'>AngelList</li>
                <li className='hover:animate-blink'>Dribble</li>
              </ul>
            </div>
            <div>
            <h4 className='text-gray-500 font-medium mb-4'>Legal</h4>
              <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
                <li className='hover:animate-blink'>Terms</li>
                <li className='hover:animate-blink'>Privacy</li>
                <li className='hover:animate-blink'>Cookies</li>
                <li className='hover:animate-blink'>Licenses</li>
                <li className='hover:animate-blink'>Settings</li>
                <li className='hover:animate-blink'>Contact</li>
              </ul>
            </div>
            </div>
          </section>
          <section className='flex items-center w-11/12'>
            <div className='w-1/2'>
            <p><img className='ml-16' src={Logo} alt="" /></p>

            </div>
            <p className='text-gray-500 font-medium w-full text-end'>{`${copyright} ${year} zysktechnologies. All rights reserved.`} </p>
          </section>
        </footer>
      
      </main>
    </div>
  );
}

export default App;
