import React, { useEffect, useState } from 'react';
import TimeAgo from './TimeAgo';
import { FiTrash } from 'react-icons/fi';
import { updateTodo } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const CardItem = ({ todo, handleDelete }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo.done === true) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.done]);

  const handleEdit = () => {
    setChecked(!checked);
    dispatch(updateTodo(todo));
  };
  return (
    <article
      className={`animate-slide-down w-full transition-all duration-300 ease-in-out border-[1px] 
    rounded-lg px-5 py-3 mb-4 ${checked ? 'bg-[#B7CD4A]/70 border-green-600' : 'bg-slate-200/40 border-white'}`}
    >
      <div className=" flex justify-between items-center">
        <div className=" flex gap-x-3 items-center">
          <input type="checkbox" checked={checked} onChange={() => handleEdit()} className=" w-7 h-7 rounded-lg" />
          <div className="flex flex-col">
            <h3 className={`capitalize font-medium ${checked ? 'line-through' : 'no-underline'}`}>{todo.content}</h3>
            <p className="text-sm">
              <TimeAgo timestamp={todo.date} />
            </p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <FiTrash className=" cursor-pointer hover:text-rose-600" onClick={handleDelete} />
        </div>
      </div>
    </article>
  );
};

export default CardItem;
