import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './index'
import { routerMiddleware } from 'connected-react-router'


export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(),
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware()
            )
        )
    )
}
export const store = configureStore();