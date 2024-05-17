import Ej1 from "./ej1"
import Ej2 from "./Ej2"
import Ej3 from "./Ej3";
import Ej4 from "./Ej4"


const ContenedorTailwind = () => {
  return (
    <div className="w-4/5 mx-auto h-auto border border-blue-500 rounded-xl px-10 py-10 flex flex-col gap-14">
        <Ej1/>
        <Ej2/>
        <Ej3/>
        <Ej4/>

    </div>
  )
}

export default ContenedorTailwind;