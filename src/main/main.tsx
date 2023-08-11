import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Vue from 'vue'
import VuePrism from 'vue-prism'
Vue.use(VuePrism)

import 'prismjs/themes/prism.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


