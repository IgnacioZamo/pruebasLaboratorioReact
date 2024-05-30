import { useState } from "react"


const Ej2 = ()=>{

    const [nombre, setNombre] = useState("")
    const [direccion, setdireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [dni, setDni] = useState("")

    const handleButtonClean = ()=> {
        setNombre("");
        setdireccion("");
        setTelefono("");
        setDni("");
    }

    const handleButtonSubmit = (e)=>{
        e.preventDefault();
        console.log("submit", {nombre, direccion, telefono, dni})
    }

    return (
        <div className="border-t-2 pt-10">
            <h2 className="text-xl text-green-800 underline mb-10">Ejercicio 2</h2>
            <form onSubmit={handleButtonSubmit} className="flex flex-col gap-4 justify-center mb-10">
                <label htmlFor="">
                    Apellido y nombre:
                    <input value={nombre} onChange={(e)=>  setNombre(e.target.value)} className="border ml-3" type="text" required placeholder="Campo obligatorio"/>
                </label>
                <label htmlFor="">
                    Direccion:
                    <input value={direccion} onChange={(e) => setdireccion(e.target.value)} className="border ml-3" type="text" required placeholder="Campo obligatorio" />
                </label>
                <label htmlFor="">
                    Telefono:
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} className="border ml-3" type="text" />
                </label>
                <label htmlFor="">
                    DNI:
                    <input value={dni} onChange={(e)=> setDni(e.target.value)} className="border ml-3" type="text" />
                </label>
                <div className="flex gap-9">
                    <button className="px-3 py-2 border rounded-lg"  type="submit">Enviar</button>
                    <button className="px-3 py-2 border rounded-lg" type="button" onClick={handleButtonClean}>Borrar</button>
                </div>
            </form>

        </div>
    )
}

export default Ej2