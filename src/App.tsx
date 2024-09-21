import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EstiloGlobal } from './global'
import * as Buttone from './components/BotoesGeral'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import store from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <aside className="App">
        <Buttone.BotaoGeral></Buttone.BotaoGeral>
        <RouterProvider router={rotas} />
      </aside>
    </Provider>
  )
}

export default App

{
  /*
<label>Digite seu nome: </label>
<Control.CampoNome />
<label>Digite seu e-mail: </label>
<Control.CampoEmail />
<label>Digite seu Telenfone</label>
<Control.CampoTel /> */
}
