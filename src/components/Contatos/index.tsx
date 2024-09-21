import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as C from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatosClass from '../../models/Contatos'

type Props = ContatosClass

const Contato = ({ nome, email, tele, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [editN, setEditN] = useState('')
  const [editE, setEditE] = useState('')
  const [editT, setEditT] = useState('')

  useEffect(() => {
    setEditN(nome)
    setEditE(email)
    setEditT(tele)
  }, [nome, email, tele])

  return (
    <C.Card>
      <C.ContactName
        disabled={!estaEditando}
        value={editN}
        onChange={(e) => setEditN(e.target.value)}
      >
        {nome}
      </C.ContactName>
      <C.ContactEmail
        disabled={!estaEditando}
        value={editE}
        onChange={(e) => setEditE(e.target.value)}
      >
        {email}
      </C.ContactEmail>
      <C.ContactTel
        disabled={!estaEditando}
        value={editT}
        onChange={(e) => setEditT(e.target.value)}
      >
        {tele}
      </C.ContactTel>
      <C.BarraAcao>
        {estaEditando ? (
          <>
            <C.Botao>Salvar</C.Botao>
            <C.BotaoRe
              onClick={() => {
                setEstaEditando(false)
                setEditN(nome)
                setEditE(email)
                setEditT(tele)
              }}
            >
              Cancelar
            </C.BotaoRe>
          </>
        ) : (
          <>
            <C.Botao onClick={() => setEstaEditando(true)}>Editar</C.Botao>
            <C.BotaoRe onClick={() => dispatch(remover(id))}>Remover</C.BotaoRe>
          </>
        )}
      </C.BarraAcao>
    </C.Card>
  )
}

export default Contato
