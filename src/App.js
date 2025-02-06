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
              <ul className='flex flex-row w-3/4 space-x-20'>
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
              <button className='btn-primary'>
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
              <img src={companyLogo} alt="" />
              <img src={companyLogo1} alt="" />
              <img src={companyLogo2} alt="" />
              <img src={companyLogo3} alt="" />
              <img src={companyLogo4} alt="" />
              <img src={companyLogo5} alt="" />
            </div>
            <hr />
          </section>

          <section>
            <div className='flex flex-col gap-8 items-center mt-28 mb-28'>
            <h4>Features</h4>
            <h2 className='font-semibold text-6xl'>Analytics that feels like it's from the future</h2>
            <p className=' text-center text-2xl w-5/6'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 startups.</p>

            </div>
            <div className='grid grid-cols-3 items-center text-center gap-10'>
              <div>

                <h3>Share team inboxes</h3>
                <p></p>
                </div>
              <div>
                <h3>Deliver instant answers</h3>
                </div>
              <div>
                <h3>Manage your team eith reports</h3></div>
              <div>
                <h3>Connect with customers</h3></div>
              <div>
                <h3>Connect the tool you already use</h3></div>
              <div>
                <h3>Our people make the difference</h3></div>
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
