import { createStore, combineReducers} from 'redux'

import newsReducer from './reducers/news-reducer'

let store = createStore(combineReducers({
    news: newsReducer
}))

export default store