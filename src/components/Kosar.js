import React from 'react'
import KosarTermek from './KosarTermek'

function Kosar({kosarLista}) {
  return (
    <div className='row gap-2'>
        {kosarLista.map((termek) => {
            return <KosarTermek key={termek.id} termek={termek}/>
      })}
    </div>   
  )
}

export default Kosar