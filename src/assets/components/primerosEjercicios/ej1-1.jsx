import { useState } from "react"


const EjBotones = ()=>{
    const [like, setLike] = useState(0);
    const handleClickLike = ()=>{
        setLike(like + 1);
    }
    const handleClickDislike = ()=>{
        setLike(like - 1);
    }
    
    return (
        <div>
            <p className="text-center">Numero de likes: {like}</p>
            <div className="w-2/5 mx-auto flex justify-center gap-10 py-10">
                <button className="border border-slate-400 bg-slate-100 active:bg-slate-200 px-3 py-2 rounded-lg" onClick={handleClickLike}>Like <span className="text-red-500">♥</span></button>
                <button className="border border-slate-400 bg-slate-100 active:bg-slate-200 px-3 py-2 rounded-lg" onClick={handleClickDislike}>Dislike :( </button>
            </div>

        </div>
        
    )
}



export default EjBotones;