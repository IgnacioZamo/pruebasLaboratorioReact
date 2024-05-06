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
            <form onSubmit={handleButtonSubmit} className="flex flex-col gap-4 justify-center">
                <label htmlFor="">
                    Apellido y nombre:
                    <input value={nombre} onChange={(e)=>  setNombre(e.target.value)} className="border" type="text"/>
                </label>
                <label htmlFor="">
                    Direccion:
                    <input value={direccion} onChange={(e) => setdireccion(e.target.value)} className="border" type="text" />
                </label>
                <label htmlFor="">
                    Telefono:
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} className="border" type="text" />
                </label>
                <label htmlFor="">
                    DNI:
                    <input value={dni} onChange={(e)=> setDni(e.target.value)} className="border" type="text" />
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