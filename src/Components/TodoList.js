import React, { useState } from "react";
import { TodoItem, cstrTodoItem } from './TodoItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    listDataState,
    filteredListState,
    filterState
} from '../store';
import md5 from 'blueimp-md5'

import './TodoList.css'

function TodoList() {

    const [listData, setListData] = useRecoilState(listDataState);
    const [inputData, setInputData] = useState("");
    const [filter, setFilter] = useRecoilState(filterState);
    const filteredListData = useRecoilValue(filteredListState);

    return (
        <div className="list">
            <ul>
                {filteredListData.map((item, index) => {
                    return (
                        <li key={index + md5(item.label)}><TodoItem itemdata={item} /></li>
                    )
                })}
            </ul>
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
                    {
                        filter === "all" ? 
                        <button onClick={() => { setFilter("undos") }}>Show Undos</button> : 
                        <button onClick={() => { setFilter("all") }}>Show All</button>
                    }
                </span>
            </div>
        </div>
    )
}

export default TodoList;