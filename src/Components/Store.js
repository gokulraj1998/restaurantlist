import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { restaurantReducer } from './reducers/reducer'
const reducers= combineReducers({
    restaurantList:restaurantReducer

})
const middleware=[thunk]
const Store =createStore(reducers,applyMiddleware(...middleware))


export default Store