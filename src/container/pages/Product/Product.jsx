import React, {Component,Fragment} from 'react';
import CardProduct from './CardProduct/CardProduct';
import "./Product.css"
import {connect} from 'react-redux';
class Product extends Component{
    // state={
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                <h3>Product Page</h3>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://png.pngtree.com/template/20190322/ourmid/pngtree-chicken-logo-designs-image_83471.jpg" alt="Logo Perusahaan"/>
                    </div>
                    <div className="troley">
                        <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="Logo Troli"/>
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);