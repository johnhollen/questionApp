import reducers from './reducers';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;
