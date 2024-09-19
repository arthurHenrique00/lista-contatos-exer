import { EstiloGlobal } from './global'
import * as Buttone from './components/BotoesGeral'
import * as Control from './components/Campo'
import CardContato from './components/Contatos'
import ListaContatos from './containers/Body'

function App() {
  return (
    <>
      <aside className="App">
        <Buttone.BotaoGeral></Buttone.BotaoGeral>
        {/* <EstiloGlobal />
        <label>Digite seu nome: </label>
        <Control.CampoNome />
        <label>Digite seu e-mail: </label>
        <Control.CampoEmail />
        <label>Digite seu Telenfone</label>
        <Control.CampoTel /> */}
      </aside>
      <ListaContatos></ListaContatos>
    </>
  )
}

export default App
