import React from 'react'

const Ej2 = () => {
  return (
    <div className='w-4/5 h-96 mx-auto mt-3 relative flex border'>
      <div className='h-full w-1/4 relative'>
        <p className='absolute top-1/4 left-10 text-5xl font-extrabold'>Lab.</p>
        <p className='absolute bottom-10 left-5 rotate-90 text-5xl font-serif font-extrabold'>001</p>
      </div>
      <div className='h-full w-3/4 p-4 relative'>
          <h2 className='text-base font-bold'>Titulo</h2>
        <div className='flex gap-10'>
          <p className='text-sm w-1/4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
          <p className='text-sm w-1/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <img className=' z-0 h-5/6 absolute right-32 bottom-0' src="https://img.freepik.com/fotos-premium/pagina-colorear-retratos-adultos-pagina-imprimible_349618-12088.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais" alt="" />

        <div className='w-full h-1/3 z-10 bg-[#FF502F]/60 absolute bottom-9 right-0'>
          <div className='relative w-full h-full'>
            <div className='absolute bg-slate-900 w-10 h-10 left-0 bottom-0 flex justify-center items-center'>
              <p className='text-red-500/70 font-bold text-2xl'>→</p>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default Ej2