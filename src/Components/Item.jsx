import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    const linkStyle = {
        textDecoration: 'none', 
        color: 'inherit'
      };
  return (
    <Link to={`/item/${producto.id}`}style={linkStyle}>
      <div>
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
        <Card.Body className='bg-light text-center'>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>$ {producto.precio}</Card.Text>
          <Button variant="secondary">Agregar al Carrito</Button>
        </Card.Body>
      </div>
    </Link>
  );
}

export default Item;
