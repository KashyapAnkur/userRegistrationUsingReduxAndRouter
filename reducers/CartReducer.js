const initialState = {
    items: [
        {productName: "T-Shirt", price:"1200", size:"M",color:"green", img:"green_tshirt"},
        {productName: "Jeans", price:"2200", size:"L",color:"blue", img:"blue_jeans"},
        {productName: "Shirt", price:"1300", size:"M",color:"white", img:"white_shirt"},
        {productName: "Trouser", price:"3000", size:"L",color:"black", img:"black_trouser"},
        {productName: "Cap", price:"300", color:"grey", img:"grey_cap"},
        {productName: "Belt", price:"250", color:"brown", img:"belt"},
    ],
    cartItems:[]
}

function CartReducer(state = initialState, action) {
    switch(action.type) {
        case "cart/additem": {
            //check if item of items exists in cartItems, if yes then don't add
            let alreadyExists = state.items.filter( (value,index) => {
                if(action.itemIndex === index)
                return true;
                else
                return false;
            });
            
            let alreadyExists2 = state.cartItems.filter( (value,index) => {
                if(value.productName == alreadyExists[0].productName)
                return true;
                else
                return false;
            });
            //check if item of items exists in cartItems, if yes then don't add

            if((alreadyExists.length && alreadyExists2.length) && (alreadyExists[0].productName == alreadyExists2[0].productName)) {
                return state;
            } else {
                let itemToFind = state.items.filter( (value,index) => {
                    if(action.itemIndex === index)
                    return true;
                    else
                    return false;
                });
                return {...state,cartItems: state.cartItems.concat(itemToFind)}
            }
        }
        case "cart/removeitem": {
            let t = state.cartItems.filter( (val,index) => {
                if (action.itemIndex == index)
                return false;
                else
                return true;
            });
            return {...state,cartItems: t}
        }
        default : {
            return state;
        }
    }
}

export default CartReducer;