import { Button, Table, Container, Row, Col } from 'react-bootstrap'

const OrderDetail = ({ products, activeForm, setActiveForm }) => {
    return (
        <div className='mt-5'>
            {products.length ?
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Items of selected order</h1>
                            </Col>
                            <Col>
                                <Button
                                    variant={activeForm ? 'danger' : 'primary'}
                                    onClick={() => setActiveForm(!activeForm)}>{activeForm ? 'Close Form' : 'Add Product'}
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>SKU</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{`$${product.price}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                : null
            }
        </div>
    )
}

export default OrderDetail
