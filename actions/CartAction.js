const addToCart = (i) => ({type:"cart/additem", itemIndex: i});
const actionRemoveItem = (i) => ({type:"cart/removeitem", itemIndex: i});
export {addToCart, actionRemoveItem};