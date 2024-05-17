import React from 'react'
import { useState } from 'react';


const ej1_4 = () => {
    const [useImage, setUseImage] = useState(null);
    const images = [
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg',
        'https://content.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg',
        'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg',
    ]

    return (
        <div>
            <h3 className='font-bold text-2xl mb-10'>Seleccionador de imagenes</h3>
            <div>
                <div className='flex justify-center gap-10'>
                    {                    
                        images.map((img,index)=>(
                            <img
                                key = {index}
                                src = {img}
                                alt = {`Imagen numero ${index+1}`}
                                onClick={()=>setUseImage(img)}
                                className='w-36 hover:scale-110 transition hover:cursor-pointer'
                            />
                        ))
                    }

                </div>
                {
                    useImage &&(
                        <div className='mt-16'>
                            <h3 className='text-center font-bold'>Imagen seleccionada:</h3>
                            <img
                                src={useImage}
                                className='w-full my-10 mx-auto'
                            />
                            <div>
                                <img 
                                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" 
                                    alt="cruz-close"
                                    onClick={()=>setUseImage(null)}
                                    className='hover:cursor-pointer w-10 mx-auto'
                                />
                            </div>

                        </div>
                    )
                }
            </div>

        </div>
    )

  };
  

export default ej1_4;