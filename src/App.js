import './App.css';
import mainImg from "./images/image1.png"
import companyLogo from "./images/company logo.png"
import companyLogo1 from "./images/company logo-1.png"
import companyLogo2 from "./images/company logo-2.png"
import companyLogo3 from "./images/company logo-3.png"
import companyLogo4 from "./images/company logo-4.png"
import companyLogo5 from "./images/company logo-5.png"
import { FiPlayCircle } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <section>
            <nav className='flex flex-row h-20 items-center bg-blue-400'>
              <div className='w-1/5'>LOGO ZYSK</div>
              <ul className='flex flex-row w-3/4 '>
                <li>Home</li>
                <li>Product</li>
                <li>Resource</li>
                <li>Pricing</li>
              </ul>
              <div>User</div>
            </nav>
            <div className='flex flex-col gap-14 items-center mt-28'>
              <div className='flex flex-row justify-center space-x-6'>
                <div>
                  New feature
                </div>
                <div>
                  Check out the team dashboard
                </div>
              </div>
              <h1 className='font-semibold text-6xl'>Beautiful analytics to grow smater</h1>
              <p className=' text-center text-2xl w-5/6'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 startups.</p>
              <div className='flex flex-row space-x-8'>
              <div className='demo-btn'>
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
            <p className='text-center'>Join 4000+ companies already growing</p>
            <div className='grid grid-cols-6 items-center gap-10 m-14 object-cover '>
              <img src={companyLogo} alt="Company Logo" />
              <img src={companyLogo1} alt="Company Logo" />
              <img src={companyLogo2} alt="Company Logo" />
              <img src={companyLogo3} alt="Company Logo" />
              <img src={companyLogo4} alt="Company Logo" />
              <img src={companyLogo5} alt="Company Logo" />
            </div>
            <hr />
          </section>

          <section>
            <div className='flex flex-col gap-8 items-center mt-28 mb-28'>
            <h4>Features</h4>
            <h2 className='font-semibold text-6xl'>Analytics that feels like it's from the future</h2>
            <p className=' text-center text-2xl w-5/6'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 startups.</p>

            </div>
            <div className='grid grid-cols-3 items-center text-center gap-10 m-14'>
              <div>

                <h3 className='font-bold text-2xl'>Share team inboxes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat unde praesentium tempora architecto eos aliquid similique nihil excepturi optio.</p>
                </div>
              <div>
                <h3 className='font-bold text-2xl'>Deliver instant answers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat unde praesentium tempora architecto eos aliquid similique nihil excepturi optio.</p>
                </div>
              <div>
                <h3 className='font-bold text-2xl'>Manage your team eith reports</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat unde praesentium tempora architecto eos aliquid similique nihil excepturi optio.</p>
                </div>
              <div>
                <h3 className='font-bold text-2xl'>Connect with customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat unde praesentium tempora architecto eos aliquid similique nihil excepturi optio.</p>
                </div>
              <div>
                <h3 className='font-bold text-2xl'>Connect the tool you already use</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat unde praesentium tempora architecto eos aliquid similique nihil excepturi optio.</p>
                </div>
              <div>
                <h3 className='font-bold text-2xl'>Our people make the difference</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat unde praesentium tempora architecto eos aliquid similique nihil excepturi optio.</p>
                </div>
            </div>
          </section>

          <section>
            <div className='text-center mb-28'>
                <h2 className='font-bold text-2xl' >Frequently asked questions</h2>
                <p>Everything you need to know about the product and billing.</p>
            </div>
            <div className='flex justify-center mt-2 mb-8 text-left'>
            <div className='flex flex-col'>
              <details className='mb-16'>
                <summary className="cursor-pointer list-none transition duration-300 ease-in-out font-bold group-open:font-bold group-open:text-blue-600">
                  Is ther a free trail available?
                </summary>
                <p className="transition duration-300 ease-in-out">Yes, you can try us for free 30 days. If tou want, we'll provide you with a free, personalized 30- minute onboarding call to get you up and running as soon as possible.</p>
              </details>
              <hr />
              <details className='mb-16'>
                <summary className="cursor-pointer list-none transition duration-300 ease-in-out font-bold group-open:font-bold group-open:text-blue-600">
                  Can I change my plan later?
                </summary>
                <p className="transition duration-300 ease-in-out">Yes, you can try us for free 30 days. If tou want, we'll provide you with a free, personalized 30- minute onboarding call to get you up and running as soon as possible.</p>
              </details>
              <hr />
              <details className='mb-16'>
                <summary className="cursor-pointer list-none transition duration-300 ease-in-out font-bold group-open:font-bold group-open:text-blue-600">
                  What is your cancellation policy?
                </summary>
                <p className="transition duration-300 ease-in-out">Yes, you can try us for free 30 days. If tou want, we'll provide you with a free, personalized 30- minute onboarding call to get you up and running as soon as possible.</p>
              </details>
              <hr />
              <details className='mb-16'>
                <summary className="cursor-pointer list-none transition duration-300 ease-in-out font-bold group-open:font-bold group-open:text-blue-600">
                  Can other info be added to an invoice?
                </summary>
                <p className="transition duration-300 ease-in-out">Yes, you can try us for free 30 days. If tou want, we'll provide you with a free, personalized 30- minute onboarding call to get you up and running as soon as possible.</p>
              </details>
              <hr />
              <details className='mb-16'>
                <summary className="cursor-pointer list-none transition duration-300 ease-in-out font-bold group-open:font-bold group-open:text-blue-600">
                  How does billing work?
                </summary>
                <p className="transition duration-300 ease-in-out">Yes, you can try us for free 30 days. If tou want, we'll provide you with a free, personalized 30- minute onboarding call to get you up and running as soon as possible.</p>
              </details>
              <hr />
              <details className='mb-16'>
                <summary className="cursor-pointer list-none transition duration-300 ease-in-out font-bold group-open:font-bold group-open:text-blue-600">
                  How do I change my account email?
                </summary>
                <p className="transition duration-300 ease-in-out">Yes, you can try us for free 30 days. If tou want, we'll provide you with a free, personalized 30- minute onboarding call to get you up and running as soon as possible.</p>
              </details>
            </div>
            </div>
            <div className='flex justify-center mt-2 mb-8'>
            <div className='flex flex-col items-center text-center w-4/5 space-y-6 bg-gray-100 pt-8 pb-8 rounded-lg'>
              <img src="" alt="logo" />
              <h2 className='font-bold'>Still have questions?</h2>
              <p>Cant't find the answer you're looking for? Please chat to our friendly team.</p>
              <button className='rounded-lg btn-primary'>Get in touch</button>
            </div>

            </div>
          </section>
        </header>


        <footer>
          <section>

          </section>
        </footer>

      </main>
    </div>
  );
}

export default App;
