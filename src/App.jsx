import { useState } from 'react';
function Header(){
  return(
    <div className='flex my-3'>
      <div className='bg-blue-100 rounded-xl mx-3'>
          <img src='./images/instutionicon.jpg' className='w-10 h-10 my-3 mx-5 rounded-full object-cover'></img>
      </div>
      <div>
        <header className='flex justify-start font-bold' >GCE Srirangam<br></br></header>
       <h3 className=''>Placement Cell</h3>
      </div>
      

    </div>
   
  )
}
function StudentLogin(){
  return(
    <div className='bg-blue-50 shadow-lg p-8 flex flex-col h-full flex flex-col justify-center items-center'>
      <div className='flex justify-center mb-6'>
        <div className='bg-green-100 p-4 rounded-full'>
          <img src="./images/image.png" className='w-16 h-16 rounded-full object-cover'></img>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
          <h2 className='text-4xl font-bold mb-4'>Student Portal</h2>
          <p className='text-gray-600 leading-10 w-100'>Access your placement dashboard,apply for upcoming companies,and track your recruitment progress in real-time</p>
      </div>
      <div className='flex justify-center'>
            <button className='w-50 items-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-300 transition duration-200 mt-6'>STUDENT LOGIN</button>
      </div>
    </div>
  )
}
function AdminLogin(){
  return(
    <div className='bg-gray-50 shadow-lg p-8 flex flex-col justify-center items-center h-full'>
      <div className='flex justify-center mb-6'>
            <div className='bg-green-100 p-4 rounded-full'>
              <img src="./images/adminlogo.jpg" className='w-16 h-16 rounded-full object-cover justify-center'></img>
            </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-bold mb-4 items-center'>Admin Portal</h2>
            <p className='text-gray-600 leading-10 w-100'>Manage Student records, coordinate with campus recruiters,oversee the complete placement lifecycle</p>
      </div>
      <div className='flex justify-center '>
            <button className='w-50 bg-transparent border-2 border-solid border-sky-500 mt-15 py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition duration-200 mt-6'>ADMIN LOGIN</button>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <div className='flex justify-between my-10'>
      <div className='flex justify-start'>
        <span className='font-bold ml-3'>GCE SRIRANGAM</span><span className='mx-5'>| Placement Cell</span>
      </div>
      <div>
        <span className='m-4'>Privacy policy</span><span className='m-4'>Terms of service</span><span className='m-4'>Help desk</span>
      </div>
      <div className='flex justify-end mr-3'>
        <span>@2024 Gce Srirangam all rights reversed</span>
      </div>

    </div>

  )
}

function App() {
  return(
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <div className='grid grid-cols-2 h-160'>
        <div className='bg-blue'>
          <StudentLogin />
        </div>
        <div className='bg-gray-50'>
          <AdminLogin />
        </div>
      </div>
      <Footer />
    </div>
   
  )
}

export default App;