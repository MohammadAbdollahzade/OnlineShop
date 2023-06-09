import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { CustomerDataContext , NumberGoodsContext , ProductsCartContext } from '../../context/home/HomeContext'

function Get({ setProductData }) {

  const [numberGoods, setNumberGoods] = useContext(NumberGoodsContext)
  const [customerData, setCustomerData] = useContext(CustomerDataContext)
  const [productsCart , setProductsCart] = useContext(ProductsCartContext)

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/data/carts')
        .then(response => {
          const filteredProducts = response.data.data.filter(
            cart => cart.customerId === customerData.id
            )
          const productsCart = filteredProducts.map(cart => ({
            productId: cart.productId,
            quantity: cart.quantity,
            status: cart.status
          }))
          setProductsCart(productsCart)
          setNumberGoods(filteredProducts.length)
          setProductData(productsCart)
        })
        .catch(error => {
          console.error(error)
        })
  },[customerData])

  return null
}

export default Get
