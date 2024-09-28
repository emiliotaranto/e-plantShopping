import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Funzione per aggiungere un elemento al carrello
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Incrementa la quantità se l'elemento esiste già
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Aggiunge un nuovo elemento con quantità iniziale di 1
      }
    },
    // Funzione per rimuovere un elemento dal carrello
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload); // Filtra l'elemento da rimuovere
    },
    // Funzione per aggiornare la quantità di un elemento nel carrello
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Aggiorna la quantità dell'elemento
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions; // Esporta le azioni
export default CartSlice.reducer; // Esporta il reducer
