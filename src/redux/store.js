import { createStore, combineReducers} from 'redux'

import newsReducer from './reducers/news-reducer'
import authReducer from './reducers/auth-reducer'

let store = createStore(combineReducers({
    news: newsReducer,
    auth: authReducer
}))

export default store

window.store = store