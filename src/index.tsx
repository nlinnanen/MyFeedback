import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
/* eslint-disable-next-line */
// @ts-ignore
serviceWorker.register();

Notification.requestPermission(() => {
  setTimeout(() => {
    const text = `New question available!`;
    const notification = new Notification('We need your feedback!', { body: text });
  }, 10000)
})
