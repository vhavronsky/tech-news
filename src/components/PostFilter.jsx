import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <MyInput 
                style={{marginRight: '50px'}}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search'
            />
            <MySelect 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort"
                options={[
                    {value: 'title', name: 'By Name'},
                    {value: 'body', name: 'By Description'}
                ]}
            />
      </div>
    )
}


export default PostFilter;
