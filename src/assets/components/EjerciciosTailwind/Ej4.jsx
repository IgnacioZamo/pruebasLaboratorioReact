import React from 'react'

const Ej4 = () => {
    const navBar = ["About Us", "Our Projects", "Community", "Resources"];
  return (
    <div className='w-4/5 mx-auto border bg-slate-950'>
        <navbar className="flex justify-around items-center py-5 w-10/12 mx-auto">
            <div className='px-1 py-1 border border-l-lime-600 border-r-slate-950 border-b-slate-950 border-t-lime-600 hover:cursor-pointer hover:scale-110'>
                <p className='font-bold text-lime-500'>ZETA</p>
            </div>
            <ul className='flex gap-5'>
                {navBar.map((list)=>(
                    <li><a onClick={(e)=>e.preventDefault()} className='text-slate-600 text-sm font-bold hover:text-slate-500' href="">{list}</a></li>
                ))}
            </ul>
            <div>
                <button onClick={(e)=>e.preventDefault()} className='text-slate-600 text-sm font-bold px-3 py-2 border-2 border-lime-500 rounded-lg active:bg-lime-600 active:text-black '>Sign Up</button>
            </div>
        </navbar>
        <div className='grid grid-cols-2 w-full mt-10 py-10'>
            <div className='w-4/5 mx-auto'>
                <h2 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-100 font-bold mb-10'>Let's explore your own <span className='text-lime-500'>VR</span> world</h2>
                <p className='text-slate-100'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium consequuntur odio eum, impedit ex necessitatibus sed enim exercitationem nulla alias nihil aspernatur nesciunt? Similique!
                </p>
            </div>
            <div className='w-4/5 ml-auto bg-gradient-to-r from-lime-400 to-lime-600 relative' style={{borderRadius:'100% 0% 98% 2% / 36% 100% 0% 64%' }}>
                <p style={{transform: 'translate(50%, -50%) rotate(270deg)'}} className='absolute right-6 top-1/2 text-5xl text-slate-600/30 font-bold'>ZETA</p>
                <img style={{transform: 'translateY(-50%)'}} className='absolute right-20 top-24 h-80' src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png" alt="" />

            </div>

        </div>

    </div>
  )
}

export default Ej4