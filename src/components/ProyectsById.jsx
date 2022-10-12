import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProyectsById = () => {
    const {id} =useParams()
    const [pro, setPro] = useState()
    const [character, setCharacter] = useState()

    useEffect(() => {
         const URL=`https://pokeapi.co/`
         axios.get(URL).then(res=>setCharacter(res.data)).catch( e=>console.log(e))
    }, [id])
    
  return (
       <h1> Proyects {id}</h1>
  )
}

export default ProyectsById