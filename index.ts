import { createRoot } from 'react-dom/client'
import App from '@/app'

const container = document.getElementById('root')

if (container != null) {
	const root = createRoot(container)
	root.render(App)
} else {
	console.log('Unable to find react root.')
}
