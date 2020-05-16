import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { formatPrice } from '../../util/format'
import * as CartActions from '../../store/modules/cart/actions'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price)
  })))

  const total = useSelector(state => formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
  }, 0)
))
  
  const dispatch = useDispatch()

  function increment(product){
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1))
  }

  function decrement(product){
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1))
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map(item => (
            <tr>
              <td>
                <img 
                  src={item.image} 
                  alt={item.title}
                />
              </td>

              <td>
                <strong>{item.title}</strong>
                <span>{item.priceFormatted}</span>
              </td>

              <td>
                <div>
                  <button type="button" onClick={() =>  decrement(item)}>
                    <MdRemoveCircleOutline size={20} color="limegreen"/>
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button" onClick={() =>  increment(item)}>
                    <MdAddCircleOutline size={20} color="limegreen"/>
                  </button>
                </div>
              </td>

              <td>
                <strong>{item.subtotal}</strong>
              </td>

              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(item.id))}>
                  <MdDelete size={20} color="limegreen" />
                </button>
              </td> 

            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
