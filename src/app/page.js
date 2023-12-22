import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-center flex min-h-screen flex-col items-center justify-between p-24">
      <div className='align-middle'>
        <h1 className='text-6xl text-bold font-extrabold py-20'>Coming Soon Page</h1>

        <p className=' max-w-xl text-sky-500 text-3xl font-extralight'>Thank you for visiting us. Our website is currently under construction but don't worry, we are opening very soon in Glasgow!</p>
      </div>




      <div className='py-8 flex font-extrabold max-w-lg'>

        <div className='text-center text-3xl text-sky-500 mt-6 mx-8'>
          <div className='bg-gray-300 py-8 mb-6 px-8 border-solid border-4 rounded-lg  border-gray-300 text-4xl'>
            21
          </div>
          Days
        </div>

        <div className='text-center text-3xl text-sky-500 mt-6 mx-8'>
          <div className='bg-gray-300 py-8 mb-6 px-8 border-solid border-4 rounded-lg  border-gray-300 text-4xl'>
            17
          </div>
          Hours
        </div>

        <div className='text-center text-3xl text-sky-500  mt-6 mx-8'>
          <div className='bg-gray-300 py-8 mb-6 px-8 border-solid border-4 rounded-lg  border-gray-300 text-4xl'>
            33
          </div>
          Mins
        </div>

      </div>


      <div className='flex'>
        <input
              type = "text"
              className="text-black text-xl md:text-2xl lg:text-2xl rounded-lg p-2 font-extralight" 
              placeholder='Email address'
              
        />

        <button className='bg-sky-600 p-4 mx-4 rounded-xl text-xl md:text-2xl lg:text-2xl font-extralight'>
            Notify Me
        </button>
      </div>
    </main>
  )
}
