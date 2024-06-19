import { useRef } from "react"



const ej1_6 = () => {
    const transicionRef = useRef (null)
    const handleClickButton = ()=>{
        transicionRef.current.className = 'absolute left-1/2 top-0 transition'

    }


  return (
    <div className='relative border overflow-hidden'>
        <button onClick={handleClickButton} className='py-2 px-3 bg-slate-100 border rounded-xl | hover:bg-slate-200 active:bg-slate-300 '>Clickeame</button>
        <div ref={transicionRef} className='absolute right-0 top-0 translate-x-full overflow-hidden transition'>
            <h3 className='text-xl'>HOLA MUNDO!</h3>
        </div>
    </div>
  )
}

export default ej1_6