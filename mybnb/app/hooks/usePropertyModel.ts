import {create} from "zustand"

interface AddPropertyModelStore {
    isOpen: boolean;
    open:() => void;
    close:() => void;
}

const usePropertyModel = create<AddPropertyModelStore>((set) =>({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))

export default usePropertyModel;