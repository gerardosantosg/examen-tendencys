import { Navbar, Container } from 'react-bootstrap'

const Nav = ({ orderNumber }) => {
    return (
        <div>
            <Navbar bg="warning">
                <Container>
                    <Navbar.Brand>
                        <h2>Order Number: {orderNumber}</h2>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav
