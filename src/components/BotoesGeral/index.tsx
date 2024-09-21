import * as Buttone from './styles'

export const BotaoGeral = () => {
  return <Buttone.Botao href="/novo">Adicionar Contato Novo</Buttone.Botao>
}

export const BotaoRemov = () => {
  return <Buttone.BotaoPop>Editar</Buttone.BotaoPop>
}

export const BotaoAdd = () => {
  return <Buttone.BotaoPush>Remover</Buttone.BotaoPush>
}
