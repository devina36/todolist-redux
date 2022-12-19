import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState('');

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const canSave = Boolean(data);

  const handleSave = () => {
    dispatch(addTodo({ newContent: data }));

    setData('');
  };
  return (
    <section className=" mb-8">
      <h2 className=" flex items-center text-white text-lg sm:text-2xl font-semibold gap-x-3 mb-4">
        <span className="text-2xl sm:text-3xl">🍉</span> What's your plan for today?
      </h2>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
        <input
          type="text"
          name="content"
          value={data}
          onChange={handleChange}
          className="
          w-full sm:w-4/5 bg-slate-200/10 border-[1px] border-white rounded-lg px-5 py-3 
          backdrop-blur-md placeholder:text-slate-200/60"
        />
        <button
          type="button"
          onClick={handleSave}
          disabled={!canSave}
          className="w-full sm:w-fit px-8 py-3 disabled:opacity-50 
          enabled:hover:bg-rose-600 bg-rose-500 border-[1px] 
          border-white text-white rounded-lg transition-all ease-in-out duration-150"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
