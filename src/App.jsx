import { useState } from 'react'
import './App.css'

function App() {
  return (
    < >
      <header className="flex justify-between self-center mx-10 mt-5">
        <div className="flex gap-3">
            <div className='bg-blue-100 p-3 rounded-xl text-blue-900 font-bold self-center'>logo</div>
            <i class="fi fi-ss-graduation-cap"></i>
            <div className='gap-1 flex-col'>
                <h1 className="text-black-800 text-2xl font-sans">GCE Srirangam</h1>
                <p className="text-trasparent">Placement Cell</p>
            </div>
            
        </div>
        <div className="flex gap-10 ">
            <a href="#" className=" cursor-pointer">Vision</a>
            <a href="#"  className=" cursor-pointer">Mission</a>
        </div>
    </header>
    <main className="flex text-center justify-center flex-col mt-30">
        <div className="flex flex-col w-110 self-center">
            <p className="text-blue-800 bg-blue-100 p-2 rounded-4xl font-bold w-80 self-center"><ul><li>Defining Professional Excellence</li></ul></p>
            <h1 className="text-5xl font-bold mt-8">Welcome to the <span className="text-blue-800">Placement</span> Cell</h1>
            <p className="mt-6">Shaping careers and defining futures through academic excellence and strategic global partnerships with industry leaders.</p>
            <button className="mt-10 bg-blue-800 w-40 p-2 cursor-pointer rounded-xl text-white font-bold self-center px-3">College Login</button>
        </div>
        <div className="mt-30 flex justify-evenly">
            <div>
                <p className="opacity-50">Impression rate</p>
                <h1 className="font-bold text-3xl">98.4 <span className="text-blue-800">%</span></h1>
                <small>....</small>
            </div>
            <div >
                <p className="opacity-50">Top Percentage</p>
                <h1 className="font-bold text-3xl">85 <span className="text-blue-800">LPA</span></h1>
                <small>....</small>
            </div>
            <div>
                <p className="opacity-50">Students Placed</p>
                <h1 className="font-bold text-3xl">500 <span className="text-blue-800">+</span></h1>
                <small>....</small>
            </div>
        </div>


        <div className="mt-15 flex justify-between gap-10 bg-gray-100 px-10 text-left py-10 ">
            <div className="flex flex-col gap-3 items-start ">
                <p className="text-blue-800 font-bold">Legacy of Excellence</p>
                <h1 className="font-bold text-3xl ">Vision & Strategic Mission</h1>
                <p>We dont't just facilitate jobs, we architect global careers. Our commitment to excellence drives every student toward a prestige-driven future.</p>
                <div className="flex justify-around bg-white rounded-3xl p-2">
                    <div className="bg-blue-100 h-fit p-3 rounded-2xl self-center">icon</div>
                    <div className="px-10 py-2 rounded-2xl">
                    <h2 className="font-bold text-xl">Global Vision</h2>
                    <p>To be a world className excellence for career development and startegic recruitment on the international stage.</p>
                    </div>
                </div>
                <div className="flex justify-around bg-white rounded-3xl p-2">
                    <div className="bg-blue-100 h-fit p-3 rounded-2xl self-center">icon</div>
                    <div className="px-10 py-2 rounded-2xl">
                    <h2 className="font-bold text-xl">Our Mission</h2>
                    <p>Empowering students with industry-ready cognitive skills and connecting them with world leaders across sectors.</p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-100 w-200 rounded-2xl"></div>
        </div>

        <div className="mt-10 flex gap-3 flex-col">
            <h1 className='font-bold text-2xl'>Career Support & Services</h1>
            <p>Comprehensive grooming and tactical preparation for the global job market.</p>
        </div>


        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] mt-20 text-left mx-[15%] gap-10">
            <div className="flex flex-col gap-2 p-10  width-[100%]">
                <div className='bg-blue-100 w-fit p-3 rounded-xl text-blue-900'>icon...</div>
                 <h1 className='font-bold text-l'>Faculties Information</h1>
                 <p>Professional portfolio design focused on algorithmic visibility and executive impact.</p>
            </div>
            <div className="flex flex-col gap-2 p-10  width-[100%]">
                <div className='bg-blue-100 w-fit p-3 rounded-xl text-blue-900'>icon...</div>
                 <h1 className='font-bold text-l'>Student Projects</h1>
                 <p>Stimulated technical and behavioural evaluations using industry-standard rubics.</p>
            </div>
            <div className="flex flex-col gap-2 p-10  width-[100%]">
                <div className='bg-blue-100 w-fit p-3 rounded-xl text-blue-900'>icon...</div>
                 <h1 className='font-bold text-l'>Mentorship</h1>
                 <p>One-on-one sessions with industry veterians and esteemed college alumini.</p>
            </div>
            <div className="flex flex-col gap-2 p-10  width-[100%]">
                <div className='bg-blue-100 w-fit p-3 rounded-xl text-blue-900'>icon...</div>
                 <h1 className='font-bold text-l'>Programs</h1>
                 <p>Nice skill validation through global partners with tech and business titans.</p>
            </div>
        </div>
    </main>


    <footer className='bg-black text-white mt-20 px-30 gap-30 pt-10 flex flex-col'>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-20'>
            <div  className="flex gap-3 flex-col p-3 w-[100%]">
                <div className='flex gap-2'>
                    <div className='bg-blue-100 p-1 rounded-xl text-blue-900 font-bold self-center w-10'>logo</div>
                    <h1 className='font-bold'>Placement <br /> Cell</h1>
                </div>
                <p>Dedicated to bridging the gap between prestigious education and professional excellence. Join our network at over 10,000 successful alumini globally.</p>
                <div className='flex gap-3 '>
                    <button className='rounded-3xl bg-white w-fit p-2 text-blue-900 font-bold'>shr</button>
                <button className='rounded-3xl bg-white w-fit p-2 text-blue-900 font-bold'>mg</button>
                </div>
                
            </div>
            <div  className="flex gap-3 flex-col p-3 w-[100%]">
                <h1 className='font-bold'>Quick Links</h1>
            <div className='flex flex-col'>
                    <a href="">Annual</a>
                    <a href="">Report</a>
                    <a href="">Placement</a>
                    <a href="">Status</a>
                    <a href="">Student</a>
                    <a href="">Feedback</a>
                    <a href="">Company</a>
                    <a href="">Registration</a>
            </div>
            </div>
            <div  className="flex gap-3 flex-col p-3 w-[100%]">
                <h1 className='font-bold'>Contact</h1>
                <p>
                    <li className=''>Main campus, Academic block IV Corporate reactions Wing</li>
                    <li>placement@gce.edu.com</li>
                </p>
            </div>
            <div className="flex gap-3 flex-col p-3 w-[100%]">
                <h1 className='font-bold'>Newsletter</h1>
                <p>Get the latest campus recruitment.....</p>
                <div className='flex w-[15%]'>
                    <input type="text" placeholder='Email address' className='max-w-30  bg-gray p-2 rounded-l'/>
                    <button className='bg-white text-black w-fit p-2 rounded-l cursor-pointer'>snd</button>
                </div>
            </div>
        </div>

        <div className=' flex flex-col font-bold text-center'>
                <p className=' p-0 m-0'>&copy;2026 PLACEMENT CELL. ALL RIGHTS RESERVED</p>
                <div className='flex gap-10 self-center  p-0 m-0'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                </div>
        </div>
    </footer>  
    </>
  )
}

export default App
