import React, { useEffect, useContext } from 'react'
import { CustomerDataContext, NumberGoodsContext } from '../../context/home/HomeContext'
import axios from 'axios'

function Delete({ removeCart, setRemoveCart, setProductsCart }) {

  const [customerData, setCustomerData] = useContext(CustomerDataContext)
  const [numberGoods, setNumberGoods] = useContext(NumberGoodsContext)

  useEffect(() => {
    if (removeCart !== undefined) {
      axios
        .delete('http://127.0.0.1:8000/delete/cart', {
          data: {
            productId: removeCart,
            customerId: customerData.id
          }
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.error(error)
        })
      setNumberGoods((prevNumberGoods) => prevNumberGoods - 1)
      setRemoveCart(undefined)
      setProductsCart('')
    }
  }, [removeCart])

}

export default Delete
