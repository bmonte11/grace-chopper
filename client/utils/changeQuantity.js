export default function changeQuantity(operation) {
  const currentQuantity = this.state.quantityToAdd
  switch (operation) {
    case 'increment':
      this.setState({quantityToAdd: currentQuantity + 1})
      break
    case 'decrement':
      if (this.state.quantityToAdd > 1) {
        this.setState({quantityToAdd: currentQuantity - 1})
      }
      break
    default:
      break
  }
}
