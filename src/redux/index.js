import {legacy_createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'

// 统一导入处理
const requireModules = require.context('./', true, /reducer\.(ts|js)$/iu)
const modules = {}
requireModules.keys().forEach(path => {
  const modular = requireModules(path)
  const name = path.replace(/\.\/|\/reducer.(js|ts)/g, '')
  modules[name] = modular.default
});

const reducers = combineReducers(modules)

export default legacy_createStore(reducers, applyMiddleware(thunk))
