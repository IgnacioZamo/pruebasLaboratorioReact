import { useState } from "react"


const Ej1_3 = ()=>{
    
    const [list, setList] = useState("");
    const [listGroup, setListGroup] = useState([]);

    const handleSubmitToDoList = (e)=>{
        e.preventDefault();
        if(!list.trim()) return; //evitara campos vacios
        const newTask = {id: Date.now(), text:list}
        setListGroup([...listGroup,newTask])
        setList("");
    };

    return (
        <div className="border-t-2 pt-10">
            <h2 className="text-xl text-green-800 underline mb-10">Ejercicio 3</h2>
            <p>toDoList:</p>
            <section>
                <h3>Escriba una toDoList</h3>
                <form onSubmit={handleSubmitToDoList}>
                    <input 
                        className="border rounded-lg" 
                        type="text" 
                        placeholder="Describa su actividad" 
                        value= {list} 
                        onChange={(e)=> setList(e.target.value)}
                        />
                    <button className="border px-3 py-2" type="submit">Agendar</button>
                </form>
            </section>



            <section className="w-full py-10 border rounded-lg">
                <h3>Tareas pendientes:</h3>
                <ul>
                    {listGroup.map(listt =>(
                        <li key={listt.id}>{listt.text}</li>
                    ))}
                </ul>

            </section>

        </div>
    )
}

export default Ej1_3