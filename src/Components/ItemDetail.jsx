import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-wrap bg-success">
            <Card style={{ width: '30rem' }} >
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body >
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        {producto.descripcion}
                    </Card.Text>
                </Card.Body >
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><strong>Categoria:</strong> {producto.categoria}</ListGroup.Item>
                    <ListGroup.Item><strong>Precio:</strong> ${producto.precio}</ListGroup.Item>
                    <ListGroup.Item><strong>Stock:</strong> {producto.stock}</ListGroup.Item>
                </ListGroup>
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="btn btn-danger">
                        Regresar
                    </Link>
                    <Card.Link href="#" className="btn btn-primary">
                        Comprar
                    </Card.Link>
                </Card.Body>

            </Card>
        </div>
    );
}


export default ItemDetail