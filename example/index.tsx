import { createRoot } from 'react-dom/client'
import App from './app'

const container = document.querySelector('#content')
if (!container) throw new Error('Root container not found')

const root = createRoot(container)
root.render(<App />)
