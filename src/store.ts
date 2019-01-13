import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const createDevelopmentMiddleware = () => {
    return applyMiddleware(thunk);
};

const createProductionMiddleware = () => {
    return applyMiddleware(thunk);
};

const middleware = process.env.NODE_ENV !== 'production' ? createDevelopmentMiddleware() : createProductionMiddleware();
const store = createStore(reducer, middleware);

export default store;