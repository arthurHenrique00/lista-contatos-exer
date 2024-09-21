import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contatos'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contatos('Arthur', 'arthur@gmail.com', 449999999, 1),
    new Contatos('Eu', 'exemple@outlook.com', 448888888, 2),
    new Contatos('Eudenovo', 'Exampla@hotmail.com', 44777777, 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
