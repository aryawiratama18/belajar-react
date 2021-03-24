import React, {Component} from 'react';
import Counter from './Counter';
class CardProduct extends Component{
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://martani.id/wp-content/uploads/2020/05/ayam.jpg" alt=""/>
                </div>
                <p className="product-title">Daging Ayam Bumbu Barbeque</p>
                <p className="product-price">Rp 340.000</p>
                <Counter/>
            </div>
        )
    }
}

export default CardProduct;