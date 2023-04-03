import React from 'react';
import './List.css'

const List = (props) => {
    let {id,name,route}=props.list;
    return (
        <p className='text-purple-600 mx-3 px-3 hover:bg-slate-600 bg-green-300 m-2'>
            <a href={route}>{name}</a>
        </p>
    );
};

export default List;