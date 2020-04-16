import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { formatPrice } from '../../util/format'
import * as CartActions from '../../store/modules/cart/actions'

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product){
    updateAmountRequest(product.id, product.amount + 1)
  }

  function decrement(product){
    updateAmountRequest(product.id, product.amount - 1)
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
                    <MdRemoveCircleOutline size={20} color="#7159c1"/>
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button" onClick={() =>  increment(item)}>
                    <MdAddCircleOutline size={20} color="#7159c1"/>
                  </button>
                </div>
              </td>

              <td>
                <strong>{item.subtotal}</strong>
              </td>

              <td>
                <button type="button" onClick={() => removeFromCart(item.id)}>
                  <MdDelete size={20} color="#7159c1" />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price)
  })),

  total: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount
    }, 0)
  )
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Cart)
