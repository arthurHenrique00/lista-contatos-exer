import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as C from './styles'

type Props = {
  nome?: string
  email?: string
  tele?: number
  id?: number
}

const Contato = ({ nome, email, tele }: Props) => {
  const dispatch = useDispatch()

  return (
    <C.Card>
      <C.ContactName>{nome}</C.ContactName>
      <C.ContactEmail>{email}</C.ContactEmail>
      <C.ContactTel>{tele}</C.ContactTel>
      <C.BarraAcao>
        <C.Botao>Editar</C.Botao>
        <C.BotaoRe>Remover</C.BotaoRe>
      </C.BarraAcao>
    </C.Card>
  )
}

export default Contato
