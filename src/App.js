import { useState, useEffect } from 'react'
import OrderDetail from './components/OrderDetail'
import OrdersTable from './components/OrdersTable'
import ProductForm from './components/ProductForm'
import Nav from './components/Nav'


const App = () => {

  useEffect(() => {
    fetchOrders()
  }, [])

  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    const dataSent = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
      }
    }
    const dataReceived = await fetch('https://eshop-deve.herokuapp.com/api/v2/orders', dataSent)
    const result = await dataReceived.json()
    console.log(result)
    setOrders(result.orders)
  }

  const [products, setProducts] = useState([])
  const [orderNumber, setOrderNumber] = useState('')

  const fillProductsTable = (orderId) => {
    const [selectedOrder] = orders.filter(order => orderId === order.id)
    const selectedProducts = selectedOrder.items
    setOrderNumber(selectedOrder.number)
    setProducts(selectedProducts)
  }

  const [activeForm, setActiveForm] = useState(false)

  const addProduct = (registeredProduct) => {
    const newProduct = {
      id: registeredProduct.productId,
      sku: registeredProduct.productSku,
      name: registeredProduct.productName,
      quantity: registeredProduct.productQuantity,
      price: registeredProduct.productPrice
    }
    setProducts([...products, newProduct])
  }


  return (
    <>
      <Nav orderNumber={orderNumber} />
      <div className='container mt-5'>
        {activeForm && <ProductForm addProduct={addProduct} setActiveForm={setActiveForm} />}
        <OrderDetail products={products} activeForm={activeForm} setActiveForm={setActiveForm} />
        <OrdersTable orders={orders} fillProductsTable={fillProductsTable} />
      </div>
    </>
  )
}

export default App
