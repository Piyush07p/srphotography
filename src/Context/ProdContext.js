import React, { useState } from 'react'
import { createContext } from 'react'

const GraphyContext = createContext();

export default function ProdContext(props) {
      const [prodname,setprodName]=useState("e")
    return (
        <GraphyContext.Provider value={{prodname}}>
            {props.children}
        </GraphyContext.Provider>
    )
}

export { GraphyContext };