const FIRST_PLAYER = 'o';

export const initialState = {
    currentPlayer: FIRST_PLAYER,
    isGameEnded: false,
    isDraw: false,
    field: [
        "", "", "",
        "", "", "",
        "", "", "",
    ],
    text: `Ходит: ${FIRST_PLAYER}`
};


export const appReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CURRENT_PLAYER': {
            return ({
                ...state,
                currentPlayer: payload
            });
        }
        case 'SET_IS_GAME_ENDED': {
            return ({
                ...state,
                isGameEnded: payload
            });
        }
        case 'SET_IS_DRAW': {
            return ({
                ...state,
                isDraw: payload
            });
        }
        case 'SET_FIELD': {
            return ({
                ...state,
                field: [...payload]
            });
        }
        case 'START_AGAIN': {
            return initialState;
        }
        case 'SET_TEXT': {
            return ({
                ...state,
                text: payload
            });
        }
        default:
            return state;
    }
}