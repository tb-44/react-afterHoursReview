import React, { Component } from 'react';

class Detail extends Component {

    render() {
        return (
            <div>
                 <div> 
                 { !this.props.productImage ? <div></div> : <div><img className='detailImage' src={ this.props.productImage }/> <br/>
                 <p>${ this.props.productPrice }.00 </p> 
                 <button onClick={ () => this.props.addToCart() }>Add to Cart</button> 
                 </div>}
                </div> 
            </div>
        )
    }


}


export default Detail;