import { atom } from 'recoil'

const listDataState = atom({
    key: "todolistData", default: [
        { id: 1, label: "learn react and recoil", visible: true, isDone: false },
        { id: 2, label: "play GTA5", visible: true, isDone: true },
        { id: 3, label: "listen to music", visible: true, isDone: false },
        { id: 4, label: "hangout with gf", visible: true, isDone: true }
    ]
})

export {
    listDataState
}