import React, { useState } from "react";
import { TodoItem, cstrTodoItem } from './TodoItem';
import { useRecoilState } from 'recoil';
import { listDataState } from '../store';
import md5 from 'blueimp-md5'

import './TodoList.css'

function TodoList() {

    const [listData, setListData] = useRecoilState(listDataState);
    const [inputData, setInputData] = useState("");

    return (
        <div className="list">
            <ul>
                {listData.map((item, index) => {
                    return (
                        <li key={index+md5(item.label)}><TodoItem itemdata={item} /></li>
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
                        const newListData = [...listData, cstrTodoItem(md5(inputData),inputData)];
                        setListData(newListData);
                        setInputData("");
                    }}>Add</button>
                </span>
            </div>
        </div>
    )
}

export default TodoList;