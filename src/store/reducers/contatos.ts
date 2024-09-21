import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contatos'
import { act } from 'react'

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Arthur',
      email: 'arthur@gmail.com',
      tele: 449999,
      id: 1
    },
    {
      nome: 'Henrique',
      email: 'henrique@gmail.com',
      tele: 558888,
      id: 2
    },
    {
      nome: 'Lima',
      email: 'lima@gmail.com',
      tele: 667777,
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contatos>) => {
      const contatoExisted = state.itens.find(
        (c) => c.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExisted) {
        alert('Contato já existe!')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
