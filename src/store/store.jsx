import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const useListStore = create(persist((set) => ({
    list: [],
    addToList: (item) => set((state) => ({ list: [...state.list, item] })),
    eliminateList: (cover) =>
        set((state) => ({
            list: state.list.filter((book) => book.book.cover !== cover),
        })),
}), { name: "bugs" }));

export default useListStore;
