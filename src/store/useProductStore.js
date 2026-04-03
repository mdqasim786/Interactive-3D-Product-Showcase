import { create } from 'zustand'

export const useProductStore = create((set) => ({
  activeColor: '#ffffff',
  productData: null,
  isLoading: false,
  setColor: (color) => set({ activeColor: color }),
  setProduct: (data) => set({ productData: data }),
}))