import * as types from "../actions/actionTypes";

const initialState = {
  tokens: {},
  single_token: {},
  favorites: {},
  createTokenText: ""
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_TOKENS_SUCCESS: {
      return Object.assign({}, state, {
        tokens: action.payload
      });
      break;
    }

    case types.GET_SINGLE_TOKEN_SUCCESS: {
      const id = action.payload.id;

      if (state.favorites[id]) {
        action.payload.is_favorite = true;
      }

      return Object.assign({}, state, {
        single_token: action.payload
      });
    }

    case types.CREATE_TOKEN_SUCCESS: {
      return Object.assign({}, state, {
        createTokenText: "Success!"
      });
    }

    case types.SAVE_NAME: {
      return Object.assign({}, state, {
        new_token_name: action.payload
      });
    }

    case types.SAVE_PRICE: {
      return Object.assign({}, state, {
        new_token_price: action.payload
      });
    }

    case types.SAVE_SYMBOL: {
      return Object.assign({}, state, {
        new_token_symbol: action.payload
      });
    }

    case types.SAVE_VOLUME: {
      return Object.assign({}, state, {
        new_token_volume: action.payload
      });
    }

    case types.FAVORITE_TOKEN: {
      const newObj = {};
      newObj[action.payload] = 1;

      const favorites = Object.assign({}, state.favorites, newObj);

      window.sessionStorage.favorites = JSON.stringify(favorites);

      return Object.assign({}, state, {
        favorites
      });
    }

    case types.UNFAVORITE_TOKEN: {
      const windowFavorites = JSON.parse(window.sessionStorage.favorites);
      const windowFavoritesCopy = Object.assign({}, windowFavorites);

      const favoritesCopy = Object.assign({}, state.favorites);

      delete favoritesCopy[action.payload];
      delete windowFavoritesCopy[action.payload];

      window.sessionStorage.favorites = JSON.stringify(windowFavoritesCopy);

      return Object.assign({}, state, {
        favorites: favoritesCopy
      });
    }

    case types.GET_WINDOW_FAVORITES: {
      if (window.sessionStorage.favorites) {
        const favorites = JSON.parse(window.sessionStorage.favorites);
        return Object.assign({}, state, {
          favorites: favorites
        });
      } else {
        return state;
      }
    }

    default:
      return state;
  }
}

export default mainReducer;
