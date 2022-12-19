import React, { useEffect, useState } from 'react';
import TimeAgo from './TimeAgo';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { editTodo, updateStatus } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const CardItem = ({ todo, handleDelete }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(todo.content);

  useEffect(() => {
    if (todo.done === true) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.done, todo.content]);

  const handleStatus = () => {
    setChecked(!checked);
    dispatch(updateStatus(todo));
  };

  const handleUpdate = () => {
    dispatch(editTodo({ upContent: content, upId: todo.id }));
    setEdit(false);
  };

  const edits = () => {
    setContent(content);
    setEdit(true);
  };
  return (
    <article
      className={`animate-slide-down w-full transition-all duration-300 ease-in-out border-[1px] overflow-hidden
    rounded-lg px-5 py-3 mb-4 ${checked ? 'bg-[#B7CD4A]/70 border-green-600' : 'bg-slate-200/40 border-white'}`}
    >
      {!edit ? (
        <div className=" flex justify-between items-center">
          <div className=" flex gap-x-3 items-center flex-wrap overflow-x-hidden">
            <input type="checkbox" checked={checked} onChange={() => handleStatus()} className=" w-6 h-6 rounded-lg" />
            <div className="flex flex-col">
              <h3 className={`capitalize font-medium ${checked ? 'line-through' : 'no-underline'}`}>{todo.content}</h3>
              <p className="text-sm">
                <TimeAgo timestamp={todo.date} />
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <FiEdit className=" cursor-pointer hover:text-lime-400" onClick={() => edits()} />
            <FiTrash className=" cursor-pointer hover:text-rose-600" onClick={handleDelete} />
          </div>
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap overflow-x-hidden w-full animate-slide-down">
          <input
            type="text"
            className="w-full sm:w-3/5 p-2 rounded-md border-[1px] border-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex gap-x-1">
            <button
              onClick={handleUpdate}
              className="bg-rose-500/70 border-white text-sm p-2 text-white rounded-md border-[1px]"
            >
              Update
            </button>
            <button
              onClick={() => setEdit(false)}
              className="bg-lime-500/70 border-black text-sm p-2  rounded-md border-[1px]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default CardItem;
