import React, { Fragment, useContext } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import { useCotizador } from '../hooks/useCotizador'
import { Error } from './Error'


export const Formulario = () => {

    const { datos, handleChangeDatos, setError, error, cotizarSeguro } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        //values: permite revisar los valores del objeto, mientras que keys: permite revisar si un objeto esta vacio
        if (Object.values(datos).includes('')) { 
            setError('Error, Campos Obligatorios')
            return //no continue ejecutandose
        }
        
        setError('')
        //cotizando
        cotizarSeguro()
    }



  return (
    <>
        {error && <Error />}
       <form onSubmit={handleSubmit}>
            <div className='my-5'>
                <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                <select name="marca" id="" className='w-full p-3 bg-white border-gray-200' onChange={ e => handleChangeDatos(e) } value={datos.marca}>
                    <option value="">--Selecciona la Marca --</option>
                    {MARCAS.map(marca => (
                        <option value={marca.id} key={marca.id}>
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className='my-5'>
                <label htmlFor="year" className='block mb-3 font-bold text-gray-400 uppercase'>Año</label>
                <select name="year" id="" className='w-full p-3 bg-white border-gray-200' onChange={ e => handleChangeDatos(e) } value={datos.year}>
                    <option value="">--Selecciona el Año --</option>
                    {YEARS.map(year => (
                        <option value={year} key={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className='my-5'>
                <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase'>Elige un Plan</label>
                <div className='flex gap-3 items-center'>
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="">{plan.nombre}</label>
                            <input type="radio" name='plan' value={plan.id} onChange={ e => handleChangeDatos(e) }/>
                        </Fragment>
                    ))}
                </div>
            </div>

            <input 
                type="submit" 
                className='w-full bg-indigo-500 hover:bg-indigo-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold' 
                value="Cotizar" 
            />

        </form> 
    </>
  )
}
