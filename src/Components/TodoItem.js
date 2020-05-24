import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { listDataState } from '../store';
import { List, Map } from 'immutable';

import './TodoItem.css'

function cstrTodoItem(id, label, visible = true, isDone = false) {
    return {
        id,
        label,
        visible,
        isDone
    }
}
function getNewListData(id, listData) {
    const list = List(listData);
    return list.update(
        list.findIndex((value,_)=>value.id===id),
        (item)=>{
            return {...item, isDone: !item.isDone}
        }
    );
}

function delFromListData(id, listData) {
    return listData.filter(item => item.id !== id);
}

function TodoBtn(id, isDone) {
    const listData = useRecoilValue(listDataState);
    const setListDataState = useSetRecoilState(listDataState);

    const type = !isDone ? "done" : "redo"
    return (
        <span style={{ marginLeft: 30 }}>
            <button onClick={() => {
                setListDataState(getNewListData(id, listData))
            }}>{type}</button>
            <button onClick={() => {
                setListDataState(delFromListData(id, listData))
            }}>del</button>
        </span>
    )
}
function TodoItem(props) {
    const { id, label, visible, isDone } = props.itemdata;
    return (
        <div className="item">
            <div>
                {!isDone ? label : <s>{label}</s>}
            </div>
            <div>
                {TodoBtn(id, isDone)}
            </div>
        </div>
    )
}

export {
    TodoItem,
    cstrTodoItem
}