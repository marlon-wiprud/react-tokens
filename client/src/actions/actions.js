import * as types from "./actionTypes";
import { get } from "https";

export const getAllTokens = dispatch => {
  return dispatch => {
    fetch("https://roll-76f98.firebaseio.com/tokens.json")
      .then(result => result.json())
      .then(json => {
        dispatch(getAllTokenSuccess(json));
      })
      .catch(err => console.log(err));
  };
};

export const getAllTokenSuccess = tokens => ({
  type: types.GET_ALL_TOKENS_SUCCESS,
  payload: tokens
});

export const getSingleToken = id => {
  return dispatch => {
    fetch(`https://roll-76f98.firebaseio.com/tokens/${id}.json`)
      .then(res => res.json())
      .then(json => {
        const data = Object.assign({}, json, {
          id
        });
        dispatch(getSingleTokenSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

export const getSingleTokenSuccess = token => ({
  type: types.GET_SINGLE_TOKEN_SUCCESS,
  payload: token
});

export const saveTokenId = id => ({
  type: types.SAVE_TOKEN_ID,
  payload: id
});

export const createToken = (name, price, symbol, volume) => {
  return dispatch => {
    const data = { name, symbol, volume, price };
    fetch("https://roll-76f98.firebaseio.com/tokens.json", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        dispatch(createTokenSuccess());
      })
      .catch(err => console.log("ERROR: ", err));
  };
};

export const createTokenSuccess = () => ({
  type: types.CREATE_TOKEN_SUCCESS
});

export const saveName = name => ({
  type: types.SAVE_NAME,
  payload: name
});

export const savePrice = price => ({
  type: types.SAVE_PRICE,
  payload: price
});

export const saveSymbol = symbol => ({
  type: types.SAVE_SYMBOL,
  payload: symbol
});

export const saveVolume = volume => ({
  type: types.SAVE_VOLUME,
  payload: volume
});

export const favoriteToken = id => ({
  type: types.FAVORITE_TOKEN,
  payload: id
});

export const unfavoriteToken = id => ({
  type: types.UNFAVORITE_TOKEN,
  payload: id
});

export const getWindowFavorites = () => ({
  type: types.GET_WINDOW_FAVORITES
});
