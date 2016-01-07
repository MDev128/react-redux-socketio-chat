import expect from 'expect';
import { applyMiddleware } from 'redux';
import * as actions from '../client/js/actions/Actions';
import * as types from '../client/js/constants/ActionTypes';
import nock from 'nock';
import thunk from 'redux-thunk';
import promiseMiddleware from '../client/js/middleware/promiseMiddleware';

import configureStore from 'redux-mock-store';

const middlewares = [ thunk, promiseMiddleware ];
const mockStore = configureStore(middlewares);

// Test in mocha

// describe('async actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })

//   it('creates LOAD_MESSAGES_SUCCESS when fetching messages has been done', (done) => {
//     const expectedActions = [
//       { type: types.LOAD_MESSAGES },
//       { type: types.LOAD_MESSAGES_SUCCESS, body: { messages: ['do something']  } }
//     ]
//     const store = mockStore({ messages: [] }, expectedActions, done)
//     store.dispatch(actions.fetchMessages())
//   })
// })