import React from 'react'
import Termek from './Termek'

function Vasarloter({termekLista}) {
  return (
     <div className='row gap-2'>
        {termekLista.map((termek) => {
            return <Termek key={termek.id} termek={termek}/>
      })}
    </div>
  )
}

export default Vasarloter