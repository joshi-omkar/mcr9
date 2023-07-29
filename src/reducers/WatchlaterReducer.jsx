export const initialState = {
    watchlater: [],
} 

export const WatchLaterReducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return {watchlater: [...state.watchlater, action.payload]}

        case 'remove':
            const data = state.watchlater.filter((item) => item !== action.payload)
            return {watchlater: data}

        default:
            return {watchlater: []}
    }
}