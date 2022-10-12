import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProyectsById = () => {
    const {id} =useParams()
    const [pro, setPro] = useState()
    useEffect(() => {

    }, [])
    
  return (
       <h1> Proyects {id}</h1>
  )
}

export default ProyectsById