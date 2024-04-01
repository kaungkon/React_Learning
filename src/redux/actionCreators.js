import * as actionTypes from './actionTypes';
import DISHES from '../data/dishes';
import { baseUrl } from './baseUrl';
import axios from 'axios';



export const addComment = ( dishId, rating, author, comment) => ({
        type: actionTypes.ADD_COMMENT,
        payload: {  //payload=>ekta obj jeikhane sobgulo information pathano hoy
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING,
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    
})

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING,
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading()); //eta call korle loadDishes reducer e jabe..

        axios.get(baseUrl+"dishes")
        .then((response) => response.data)
        .then(dishes => dispatch(loadDishes(dishes)));
        
        
    }
}



