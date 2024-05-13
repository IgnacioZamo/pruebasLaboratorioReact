import { useState } from "react"


const Ej1_3 = ()=>{
    
    const [list, setList] = useState("");
    const [listGroup, setListGroup] = useState([]);

    const handleSubmitToDoList = (e)=>{
        e.preventDefault();
        if(!list.trim()) return; //evitara campos vacios
        const newTask = {id: Date.now(), text:list, completed:false}
        setListGroup([...listGroup,newTask])
        setList("");
    };

    const handleDeleteButtonAll = ()=>{
            setListGroup([])
    }


    const handleButtonDelete = (id) => {
        setListGroup(listGroup.filter(task => task.id !== id));
    };

    const handleButtonCompleteTask = (id)=>{
        setListGroup(listGroup.map(task=>{
            if(task.id === id) {
                return {...task, completed: !task.completed}
            }
            return task
        }));

    }


    return (
        <div className="border-t-2 pt-10">
            <h2 className="text-xl text-green-800 underline mb-10">Ejercicio 3</h2>
            <p>toDoList:</p>
            <section className="mb-10">
                <h3 className="mb-10">Escriba sus tareas pendientes</h3>
                <form onSubmit={handleSubmitToDoList} className="flex gap-10">
                    <input 
                        className="border rounded-lg" 
                        type="text" 
                        placeholder="Describa su actividad" 
                        value= {list} 
                        onChange={(e)=> setList(e.target.value)}
                        />
                    <button className="border px-3 py-2" type="submit">Agendar</button>
                    <button className="border px-3 py-2" onClick={handleDeleteButtonAll}>Eliminar todo</button>
                </form>
            </section>


            <section className="w-full pt-5 pb-10 border rounded-lg">
                <h3 className="text-xl font-bold underline italic text-center mb-5">Tareas pendientes:</h3>

                    {listGroup.map(listt =>(
                        <div 
                        className={`grid grid-cols-2 gap-8 items-center mb-4 pl-10 ${listt.completed ? 'bg-green-400' : ''}`}
                        key={listt.id}>
                           <li className="text-center" >{listt.text}</li>
                           <div>
                            <button className="border px-3 py-2" onClick={()=> handleButtonCompleteTask(listt.id)}>{listt.completed? "Desmarcar":"Completar"}</button>
                            <button className="border px-3 py-2" onClick={()=> handleButtonDelete(listt.id)}>Eliminar</button>

                           </div>
                        </div>
                    ))}


            </section>

        </div>
    )
}

export default Ej1_3