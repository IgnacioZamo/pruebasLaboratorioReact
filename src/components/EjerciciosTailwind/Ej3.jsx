import React from 'react'

const Ej3 = () => {
  return (
    <div className='w-4/5 h-96 mx-auto mt-3 relative flex border'>
        <div
        className="bg-cover bg-center w-full h-auto"
        style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/fondo-hojas-verdes-tropicales_53876-88891.jpg')" }}>
            <div className='w-full h-20 backdrop-blur-sm flex items-center'>
                <div className='flex justify-between items-center px-10  w-full'>
                    <img className='h-12 hover:cursor-pointer' src="https://images.vexels.com/media/users/3/224235/isolated/preview/c9b0be525cc3bace6e7e91667d7d6bb0-logotipo-abstracto-naranja.png" alt="" />
                    <ul className='flex gap-5 items-center'>
                        <li className='text-slate-100 hover:cursor-pointer text-sm'>Discover</li>
                        <li className='text-slate-100 hover:cursor-pointer text-sm'>Service</li>
                        <li className='text-slate-100 hover:cursor-pointer text-sm'>Community</li>
                        <li className='text-slate-100 hover:cursor-pointer text-sm'>About Us</li>
                        <div className='text-white text-sm bg-gradient-to-r from-orange-700 to-orange-400 px-3 py-2 rounded-2xl hover:cursor-pointer active:text-red-600'>
                            Register
                        </div>
                    </ul>
                </div>
            </div>

            <div className='w-full px-10 grid grid-cols-2 mt-16 ml-16'>
                <div>
                    <h1 className='text-5xl font-bold mb-5' ><span className='text-slate-100'>LIVE YOUR</span> <br /> <span className='text-orange-500'>ADVENTURE</span></h1>
                    <p className='pr-10 text-white text-sm leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae mollitia <br /> corporis. Voluptas quisquam aspernatur quasi odit suscipit rem, <br /> repellat dolore delectus animi nostrum similique, maxime vitae autem!</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='relative bg-gradient-to-r from-orange-600 to-orange-400 w-64 h-44 border border-orange-300 border-double border-b-4 border-r-4' style={{borderRadius: '4rem 0 1rem 4rem'}}>
                        <img className='absolute cover bottom-0 h-64' src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Transparent.png" alt="" />

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Ej3