import axios from 'axios';

export const search = () => (dispatch) => {
    dispatch({ type: 'START_YOINKING' });
    axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
            console.log(response.data)
            dispatch({ type: 'YOINK_GOOD', payload: response.data })

        })
        .catch((err) => dispatch({ type: 'YOINK_BAD', payload: err.response }));
};