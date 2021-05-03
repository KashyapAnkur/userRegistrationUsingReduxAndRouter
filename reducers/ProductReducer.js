let initialState = {
    products: [
        {name: "ASD",price:123},
        {name: "ASDL",price:321},
    ]
};

function ProductReducer(state = initialState, action) {
    switch(action.type) {
        case "products/add": {
            let newProducts = [...state.products, action.product];
            return newProducts;
        }
        default : {
            return state;
        }
    }
}

export default ProductReducer;