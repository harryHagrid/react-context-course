

export const cartReducer = (state , action ) => {

    switch(action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        case 'VALUE' :
            return action.num;
        default:
            return state;
    } 

}