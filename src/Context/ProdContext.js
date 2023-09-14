import React, { useState } from 'react'
import { createContext } from 'react'

const GraphyContext = createContext();

export default function ProdContext(props) {
      const [prodname,setprodName]=useState("product")
      const [prodPrice,setprodPrice]=useState(0)
      const [prodImg,setprodImg]=useState(0)


    return (
        <GraphyContext.Provider value={{prodname,setprodName,prodPrice,setprodPrice,prodImg,setprodImg}}>
            {props.children}
        </GraphyContext.Provider>
    )
}

export { GraphyContext };