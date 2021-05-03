import React from 'react'
import image1 from '../assets/orange.jpeg'
import { Card } from 'react-bootstrap';


function Tarjeta() {

  return (
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
  )
}
export default Tarjeta