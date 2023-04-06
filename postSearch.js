
import { SEARCH_FOOD, FETCH_FOOD } from './types';

export const fetchFood = text => dispatch => {
    console.log('fetch food');
    fetch('http://localhost:3000/prod')
    .then(res => res.json())
    .then(prod => dispatch(
        {
            type: FETCH_FOOD,
            payload:prod

        }
    ));
}


// export const createPost = (postData) => dispatch => {
//     console.log('create post action');
//     fetch('http://localhost:3000/prod', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//     })
//     .then(res => res.json())
//     .then(post => dispatch(
//         {
//             type: NEW_POST,
//             payload: post

//         }
//     ));
