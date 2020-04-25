// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {fetchSingleOrder} from '../store/single-order'
// import changeQuantity from '../utils/changeQuantity'

// class SingleProduct extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       quantityToAdd: 1
//     }
//     this.changeQuantity = changeQuantity.bind(this)
//   }

//   async componentDidMount() {
//     const orderId = this.props.match.params.OrderId
//     await this.props.getProduct(orderId)
//   }

//   render() {
//     const {order} = this.props
//     return (

//     )
//   }
// }

// const mapState = state => ({
//   order: state.singleOrder,
// })

// const mapDispatch = dispatch => ({
//   getOrder: id => dispatch(fetchSingleOrder(id)),
// })

// export default connect(mapState, mapDispatch)(SingleOrder)
