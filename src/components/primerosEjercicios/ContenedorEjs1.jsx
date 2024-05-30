import Ej1 from "./ej1-1"
import Ej2 from "./ej1-2";
import Ej3 from "./ej1-3";
import Ej4 from "./ej1-4";


const ContenedorEjs1 = ()=>{
    return(
        <div className="w-4/5 mx-auto h-auto border border-blue-500 rounded-xl px-10 py-10 flex flex-col gap-20">
            <Ej1/>
            <Ej2/>
            <Ej3/>
            <Ej4/>
        </div>
    )
}

export default ContenedorEjs1;