import { FormEvent } from 'react'
import { BotaoPop, BotaoPush } from '../../components/BotoesGeral/styles'
import { BarraAcao } from '../../components/Contatos/styles'
import * as Form from './styles'
import Contato from '../../components/Contatos'

const cadastrarContato = (even: FormEvent) => {
  even.preventDefault()
}

const Cadastro = () => (
  <Form.CardFor>
    <h3>Adicione um novo contato</h3>
    <label htmlFor="namee">Novo nome: </label>
    <Form.CampoFor type="text" name="namee" /> <br />
    <label htmlFor="tele">Novo Telefone: </label>
    <Form.CampoFor type="tel" name="tele" /> <br />
    <label htmlFor="arroba">Novo e-mail: </label>
    <Form.CampoFor type="email" name="arroba" />
    <BarraAcao typeof="submit">
      <BotaoPush>Adicionar</BotaoPush>
      <BotaoPop>Cancelar</BotaoPop>
    </BarraAcao>
  </Form.CardFor>
)

export default Cadastro
