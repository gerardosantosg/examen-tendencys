import { useState } from 'react'
import { Button, Form, FloatingLabel } from 'react-bootstrap'

const ProductForm = ({ addProduct, setActiveForm }) => {

    const [productId, setProductId] = useState('')
    const [productSku, setProductSku] = useState('')
    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const submitForm = () => {
        if (!productId || !productSku || !productName || !productQuantity || !productPrice) {
            alert('Please fill all the fields')
            return
        }
        addProduct({ productId, productSku, productName, productQuantity, productPrice })
        setActiveForm(false)
        setProductId('')
        setProductSku('')
        setProductName('')
        setProductQuantity('')
        setProductPrice('')
    }

    return (
        <div>
            <h2>Add Product to Order</h2>
            <FloatingLabel
                controlId='floatingInput'
                label='ID'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='ID'
                    onChange={(e) => setProductId(e.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingInput'
                label='SKU'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='SKU'
                    onChange={(e) => setProductSku(e.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingInput'
                label='Name'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setProductName(e.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingInput'
                label='Quantity'
                className='mb-3'
            >
                <Form.Control
                    type='number'
                    placeholder='Quantity'
                    onChange={(e) => setProductQuantity(e.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingInput'
                label='Price'
                className='mb-3'
            >
                <Form.Control
                    type='number'
                    placeholder='Price'
                    onChange={(e) => setProductPrice(e.target.value)}
                />
            </FloatingLabel>
            <Button onClick={submitForm}>Add Product</Button>
        </div>
    )
}

export default ProductForm
