import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSmoothScroll from 'vue3-smooth-scroll'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
	faTwitter, 
	faNode,
	faHtml5,
	faReact,
	faPython,
	faVuejs,
	faSquareJs,
	faGithub,
	faLinkedin
	} from '@fortawesome/free-brands-svg-icons'
import {
	faBars,
	faEnvelope,
	faDownload
} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faTwitter, 
	faNode,
	faHtml5,
	faReact,
	faPython,
	faVuejs,
	faSquareJs,
	faGithub,
	faLinkedin,
	faBars,
	faEnvelope,
	faDownload)

import App from './App.vue'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueSmoothScroll)
app.use(createPinia())

app.mount('#app')
