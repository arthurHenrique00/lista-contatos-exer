import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import { ListaDeContatos } from './styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ListaDeContatos>
      {itens.map((c) => (
        <li key={c.nome}>
          <Contato nome={c.nome} email={c.email} tele={c.tele} id={c.id} />
        </li>
      ))}
    </ListaDeContatos>
  )
}

export default ListaContatos
