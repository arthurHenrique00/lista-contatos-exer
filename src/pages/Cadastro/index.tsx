import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoPop, BotaoPush } from '../../components/BotoesGeral/styles'
import { BarraAcao } from '../../components/Contatos/styles'
import * as Form from './styles'
import Contatos from '../../models/Contatos'
import { cadastrar } from '../../store/reducers/contatos'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    const contatoAdd = new Contatos(nome, email, telefone, 9)

    dispatch(cadastrar(contatoAdd))
    navigate('/')
  }

  return (
    <Form.CardFor onSubmit={cadastrarContato}>
      <h3>Adicione um novo contato</h3>
      <label htmlFor="namee">Novo nome: </label>
      <Form.CampoFor
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        name="namee"
      />{' '}
      <br />
      <label htmlFor="tele">Novo Telefone: </label>
      <Form.CampoFor
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        type="tel"
        name="tele"
      />{' '}
      <br />
      <label htmlFor="arroba">Novo e-mail: </label>
      <Form.CampoFor
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="arroba"
      />
      <BarraAcao typeof="submit">
        <BotaoPush>Adicionar</BotaoPush>
      </BarraAcao>
    </Form.CardFor>
  )
}

export default Cadastro
