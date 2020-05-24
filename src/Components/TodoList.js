import React, { useState } from "react";
import { TodoItem, cstrTodoItem } from './TodoItem';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
    listDataState,
    filteredListState,
    filterState,
    queryListDataState
} from '../store';
import md5 from 'blueimp-md5'

import './TodoList.css'

function TodoList() {

    const [listData, setListData] = useRecoilState(listDataState);
    const [inputData, setInputData] = useState("");
    const [filter, setFilter] = useRecoilState(filterState);
    const filteredListData = useRecoilValue(filteredListState);

    const queryListData = useRecoilValueLoadable(queryListDataState);
    if(queryListData.state === "hasValue") {
        setListData(queryListData.getValue())
    }
    
    return (
        <div className="list">
            <ul>
                {filteredListData.map((item, index) => {
                    return (
                        <li key={index + md5(item.label)}><TodoItem itemdata={item} /></li>
                    )
                })}
            </ul>
            {/* <h4>Todos From Server:</h4>
            <ul>
                {queryListData.state === "hasValue" ? queryListData.getValue().map((item, index) => {
                    return (
                        <li key={index + md5(item.label)}><TodoItem itemdata={item} /></li>
                    )
                }):null}
            </ul> */}
            <div>
                <span>
                    <input
                        value={inputData}
                        onChange={(value) => setInputData(value.target.value)}
                        placeholder="todo...">
                    </input>
                    <button onClick={() => {
                        const newListData = [...listData, cstrTodoItem(md5(inputData), inputData)];
                        setListData(newListData);
                        setInputData("");
                    }}>Add</button>
                </span>
                <select value={filter} onChange={({ target: { value } }) => setFilter(value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="undos">Uncompleted</option>
                </select>
            </div>
        </div>
    )
}

export default TodoList;