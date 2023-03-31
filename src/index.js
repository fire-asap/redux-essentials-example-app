import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import * as Sentry from '@sentry/react'

import { worker } from './api/server'

import { extendedApiSlice } from './features/users/usersSlice'

Sentry.init({
  dsn: 'https://393a3dd4f8e5428a96ab4d7cbcb8a000@o4504914706366464.ingest.sentry.io/4504930908372992',
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
})

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  store.dispatch(extendedApiSlice.endpoints.getUsers.initiate())

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()
