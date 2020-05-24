import { atom, selector } from 'recoil'

const listDataState = atom({
    key: "listDataState", default: [
        { id: 1, label: "learn react and recoil", visible: true, isDone: false },
        { id: 2, label: "play GTA5", visible: true, isDone: true },
        { id: 3, label: "listen to music", visible: true, isDone: false },
        { id: 4, label: "hangout with gf", visible: true, isDone: true }
    ]
})

const filterState = atom({
    key: "filterState", default: "all"
})

const filteredListState = selector({
    key: "filteredListState",
    get: ({ get }) => {
        const filter = get(filterState);
        const list = get(listDataState);
        switch (filter) {
            case 'all':
                return list
            case 'undos':
                return list.filter((item) => !item.isDone);
            default:
                return list;
        }
    },
})

export {
    listDataState,
    filteredListState,
    filterState
}