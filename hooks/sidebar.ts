import {create} from "zustand";



type Store = {
  condition: boolean;
  trigger: () => void;
};

const useTrigger = create<Store>((set) => ({
  condition: true,
  trigger: () => set((state) => ({ condition: !state.condition })),
  setTrue: () => set((state) => ({ condition: true })),
}));

export default useTrigger;