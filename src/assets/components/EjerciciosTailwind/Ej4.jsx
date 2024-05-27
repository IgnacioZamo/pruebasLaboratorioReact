import React, { useState } from 'react'


const Ej4 = () => {
    const navBar = ["About Us", "Our Projects", "Community", "Resources"];

    const itemsDesplegables = [ {txt:"Inmersive Learning System"},
                                {txt:"Responsible Research"},
                                {txt:"Responsible Renovation"}
    ]

    const [item1, setItem1] = useState(null);

    const handleClickItem= (indice)=>{

        if(item1 !== indice){
            setItem1(indice);
        } else{
            setItem1(null);
        }


    };
    



  return (
    <div className='w-4/5 mx-auto border bg-slate-950'>
        <nav className="flex justify-around items-center py-5 w-10/12 mx-auto">
            <div className='px-1 py-1 border border-l-lime-600 border-r-slate-950 border-b-slate-950 border-t-lime-600 hover:cursor-pointer hover:scale-110'>
                <p className='font-bold text-lime-500'>ZETA</p>
            </div>
            <ul className='flex gap-5'>
                {navBar.map((list, index)=>(
                    <li key={index}><a onClick={(e)=>e.preventDefault()} className='text-slate-600 text-sm font-bold hover:text-slate-500' href="">{list}</a></li>
                ))}
            </ul>
            <div>
                <button onClick={(e)=>e.preventDefault()} className='text-slate-600 text-sm font-bold px-3 py-2 border-2 border-lime-500 rounded-lg active:bg-lime-600 active:text-black '>Sign Up</button>
            </div>
        </nav>
        <div className='grid grid-cols-2 w-full my-10 py-10'>
            <div className='w-4/5 mx-auto'>

                {/* texto con gradiente ↓*/}

                <h2 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-100 font-bold mb-10'>Let's explore your own <span className='text-lime-500'>VR</span> world</h2>
                <p className='text-slate-100 mb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium consequuntur odio eum, impedit ex necessitatibus sed enim exercitationem nulla alias nihil aspernatur nesciunt? Similique!
                </p>
                <div className='flex justify-around'>
                    <button className='bg-gradient-to-r from-lime-400 via-lime-500 to-lime-400 px-3 py-2 rounded-xl font-bold text-sm active:text-slate-200'>Explore Now</button>
                    <div className='hover:cursor-pointer hover:scale-105 transition flex gap-5 items-center'>
                        <img className='h-12' src="https://www.freeiconspng.com/uploads/play-button-icon-png-5.png" alt="" />
                        <p className='text-slate-300'>Learn More</p>
                    </div>
                </div>

            </div>
            <div className='w-4/5 ml-auto bg-gradient-to-r from-lime-400 to-lime-600 relative' style={{borderRadius:'100% 0% 98% 2% / 36% 100% 0% 64%' }}>
                <p style={{transform: 'translate(50%, -50%) rotate(270deg)'}} className='absolute right-6 top-1/2 text-5xl text-slate-600/30 font-bold'>ZETA</p>
                <img style={{transform: 'translateX(50%)'}} className='absolute right-1/2 bottom-0 h-80' src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png" alt="" />
            </div>
        </div>

        <div className='py-10 mb-10'>
            <h2 className=' mb-10 w-2/5 mx-auto text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-100'>Discover the <span className='text-lime-500'>world</span> <br/> based your loves</h2>
            <div className='p-10 w-4/5 mx-auto border border-slate-500 rounded-xl'>
                <div className='flex justify-around mb-10'>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/512/8541/8541858.png" alt="" />
                    </div>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/512/3893/3893024.png" alt="" />
                    </div>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://static-00.iconduck.com/assets.00/openai-icon-1011x1024-uztb7qme.png" alt="" />
                    </div>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/512/2097/2097443.png" alt="" />
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://static-00.iconduck.com/assets.00/heart-icon-512x461-rdoishra.png" alt="" />
                    </div>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://simpleicon.com/wp-content/uploads/business-man-1.png" alt="" />
                    </div>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://static.thenounproject.com/png/110006-200.png" alt="" />
                    </div>
                    <div className='p-2 bg-lime-500 border rounded-xl hover:scale-150 transition'>
                        <img className='h-16 w-16' src="https://static.thenounproject.com/png/3063623-200.png" alt="" />
                    </div>
                </div>
            </div>                
        </div>

        <div className='grid grid-cols-2 py-10 items-center'>
            <div className='w-4/5 mr-auto bg-gradient-to-r from-lime-400 to-lime-600 relative h-64 ' style={{borderRadius:'55% 45% 100% 0% / 0% 100% 0% 100% ' }}>
                <p style={{transform: 'translate(-30%, -50%) rotate(90deg)'}} className='absolute left-0 top-1/2 text-5xl text-slate-600/30 font-bold'>ZETA</p>
                <img style={{transform: 'translate(50%, 0)'}} className='absolute h-80 bottom-0 right-1/2' src="https://images.vexels.com/media/users/3/215788/isolated/preview/eef34f5740249cb9781e656b16f3ed73-sonriendo-jugando-videojuegos-chico-plano.png" alt="" />
            </div>
            <div className='px-10'>
                <h2 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-100 font-bold mb-10'>Commitment we've <span className='text-lime-500'>developed</span></h2>
                <p className='text-slate-200 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, voluptatum quo distinctio debitis iusto voluptatibus nostrum, deleniti ad ea maxime recusandae soluta veritatis deserunt? Id doloribus sunt velit rem enim.</p>
                <div className='flex flex-col gap-5'>
                    
                    {itemsDesplegables.map((abc,indice) =>(
                        <div key={indice} onClick={()=> handleClickItem(indice)} className= {`w-4/5 mx-auto py-4 border border-slate-500 rounded-lg flex flex-col items-center gap-5 hover:cursor-pointer ${item1==indice? "transition ease-in bg-lime-500": ""}`} >
                            <div className='flex gap-5 items-center w-full'>
                                <div className='bg-lime-500 rounded-lg mx-4'>
                                    <img className='h-8' src="https://static.thenounproject.com/png/110006-200.png" alt="" />
                                </div>
                                <h3 className={`${item1==indice? "text-slate-800 text-lg font-semibold":"text-slate-200 text-lg font-semibold"} `}>{abc.txt}</h3>
                            </div>
                            <div className={`${item1==indice? "":"hidden"} `}><p className='px-10 transition ease-in'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore, aut debitis, adipisci cumque, autem itaque laboriosam rem id unde eius esse cupiditate praesentium culpa?</p></div>
                        </div>
                        
                    ))}

                </div>
            </div>

        </div>

    </div>
  )
}

export default Ej4