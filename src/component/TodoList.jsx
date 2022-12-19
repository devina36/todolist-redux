import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getTodoList } from '../redux/todoSlice';
import CardItem from './CardItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState('all');

  const todoList = useSelector(getTodoList);

  const orderedPosts = todoList.slice().sort((a, b) => b.date.localeCompare(a.date));

  let content;
  if (status === 'complete') {
    content = orderedPosts
      .filter((item) => item.done === true)
      .map((item) => {
        return <CardItem key={item.id} todo={item} handleDelete={() => dispatch(deleteTodo(item))} />;
      });
  } else if (status === 'inclompete') {
    content = orderedPosts
      .filter((item) => item.done === false)
      .map((item) => {
        return <CardItem key={item.id} todo={item} handleDelete={() => dispatch(deleteTodo(item))} />;
      });
  } else {
    content = orderedPosts.map((item) => (
      <CardItem key={item.id} todo={item} handleDelete={() => dispatch(deleteTodo(item))} />
    ));
  }

  return (
    <section className="w-full">
      <div className=" flex justify-between mb-2">
        <h2 className=" w-full text-white text-base sm:text-lg font-medium">My List</h2>
        <div className="flex">
          <select id="type" value={status} onChange={(e) => setStatus(e.target.value)} className="py-2 rounded-md px-2">
            <option value={'all'}>All</option>
            <option value={'inclompete'}>Inclompete</option>
            <option value={'complete'}>Completed</option>
          </select>
        </div>
      </div>
      <div className="max-h-[350px] overflow-y-auto scroll-smooth scroll-bar">
        {content.length ? content : <p className="text-white text-center">No Todos</p>}
      </div>
    </section>
  );
};

export default TodoList;
