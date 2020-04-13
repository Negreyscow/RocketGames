import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
        <li>
            <img src="https://s3.amazonaws.com/comparegame/thumbnails/43991/medium.jpg" alt="Doom"/>
            <strong>Doom Eternal</strong>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
            </button>
        </li>
        <li>
            <img src="https://s3.amazonaws.com/comparegame/thumbnails/43991/medium.jpg" alt="Doom"/>
            <strong>Doom Eternal</strong>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
            </button>
        </li>
        <li>
            <img src="https://s3.amazonaws.com/comparegame/thumbnails/43991/medium.jpg" alt="Doom"/>
            <strong>Doom Eternal</strong>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
            </button>
        </li>
    </ProductList>
  );
}
