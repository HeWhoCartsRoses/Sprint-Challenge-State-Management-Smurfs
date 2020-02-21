const initState = {
    smurfs: [],
    savedSmurfs: [],
    isYoinking: false,
    error: ''
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'START_YOINKING':
            return {
                ...state,
                isYoinking: true,
                error: ''
            };
        case 'YOINK_GOOD':
            return {
                ...state,
                isYoinking: false,
                error: '',
                smurfs: action.payload
            };
        case 'YOINK_BAD':
            return {
                ...state,
                isYoinking: false,
                error: action.payload
            };
        case "ADD_SMURF":
            console.log('toggle finished', state, action)
            const newSmurf = { name: action.payload };
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            };
        default:
            return state;
    }

};