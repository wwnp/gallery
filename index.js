import { Gallery } from './components/Gallery.js'
import { loading } from './core/loading.js'

const gallery = new Gallery('#app', { loading: loading })

gallery.render()

