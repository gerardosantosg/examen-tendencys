import React from 'react'
import { Button, Table } from 'react-bootstrap'

const OrdersTable = ({ orders, fillProductsTable }) => {
    return (
        <>
            <h1>Purchase Orders</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Amount of Items</th>
                        <th>Total</th>
                        <th>Order Products</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.items.length}</td>
                            <td>{`$${order.totals.total}`}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => fillProductsTable(order.id)}>
                                    View
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default OrdersTable
