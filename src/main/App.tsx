import { useState } from 'react'
import 'bulma/css/bulma.css'
import RonyManLogo from '../assets/ronyman_logo.svg'
import RonyPicture from '../assets/Rony.jpeg'
import './App.css'
import Vue from 'vue'
import VuePrism from 'vue-prism'
Vue.use(VuePrism)

import 'prismjs/themes/prism.css'

function App() {
  return (
    <>
      <div class="">
        <a href="/" target="_blank">
        </a>
        <a href="/" target="_blank">
          <img src={RonyManLogo} className="logo ronyman" alt="RonyMAN LOGO" />
        </a>

      <h1 class="ronyman-com">ronyman.com</h1>
      <h3 class="ronyman-com">services@ronyman.com</h3>
      <div class="diagonal-box bg-one">
       <img src={RonyPicture} className="RonyPicture" alt="RonyMAN" />
  <div class="container">
    <p class="ronyman-com">
      <hr />
      Checkout <a href="https://amatak.org/">Amatak</a> All my projects out there. It seem i have no idea to descript here.
    </p>


  </div>
</div>
<div class="diagonal-box bg-two">
  <div class="ronyman-com">
    <h2>Server Repo</h2>
    <p>
      <a href="https://github.com/amatak-org" target="_blank">GitHub</a>
    </p>
  </div>
</div>
      <p className="ronyman_footer_text_6">
        One step off !  web | Android | Os from a single project.
        --------------------------------| coming soon...!
      </p>
 </div>

    </>
  )
}

export default App







