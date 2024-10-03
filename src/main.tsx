import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.ts'
import { BrowserRouter } from 'react-router-dom'
//@ts-ignore
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>
)
