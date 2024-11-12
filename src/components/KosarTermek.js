import React from 'react'
import { ListGroup } from 'react-bootstrap'

function KosarTermek({termek}) {
  return (
    <>
      {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
          <ListGroup.Item>{termek.title}</ListGroup.Item>
          <ListGroup.Item>{termek.description}</ListGroup.Item>
          <ListGroup.Item>{termek.price}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  )
}

export default KosarTermek