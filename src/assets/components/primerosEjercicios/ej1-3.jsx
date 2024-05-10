import { useState } from "react"


const Ej1_3 = ()=>{

const handleSubmitToDoList = (e)=>{
    const [list, setList] = useState("");
    e.preventDefault();
    console.log("funciona")

    
}



    return (
        <div className="border-t-2 pt-10">
            <h2 className="text-xl text-green-800 underline mb-10">Ejercicio 3</h2>
            <p>toDoList:</p>
            <section>
                <h3>Escriba una toDoList</h3>
                <form onSubmit={handleSubmitToDoList}>
                    <input className="border rounded-lg" type="text" placeholder="Describa su actividad"/>
                    <button className="border px-3 py-2" type="submit" >Agendar</button>
                </form>
                
            </section>

        </div>
    )
}

export default Ej1_3