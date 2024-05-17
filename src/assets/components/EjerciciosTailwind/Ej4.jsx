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

    </div>
  )
}

export default Ej4