import * as Control from './styles'

export const CampoNome = () => {
  return (
    <Control.CampoControlNome type="text" placeholder="Exemplo Sobrenome" />
  )
}

export const CampoEmail = () => {
  return (
    <Control.CampoControlEmail type="email" placeholder="example@gmail.com" />
  )
}

export const CampoTel = () => {
  return <Control.CampoControlTel type="tel" placeholder="(00) 0000-0000" />
}
