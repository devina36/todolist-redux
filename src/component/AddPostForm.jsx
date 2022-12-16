import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../redux/features/posts/postsSlice';
import { selectAllUsers } from '../redux/features/users/usersSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const usersData = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthChanged = (e) => setUserId(e.target.value);

  const onSave = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle('');
      setContent('');
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = usersData.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section className=" mb-3">
      <h2 className=" flex items-center text-white text-2xl font-semibold gap-x-3 mb-4">
        <span className="text-3xl">🍉</span> Add a New List
      </h2>
      <form className="flex flex-col">
        <label htmlFor="postTitle"></label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Input your title..."
          value={title}
          onChange={onTitleChanged}
          className="
          w-full bg-slate-200/10 border-[1px] border-white rounded-lg px-5 py-3 
          backdrop-blur-md mb-4 placeholder:text-slate-200/60"
        />
        <label htmlFor="postAuthor"></label>
        <select id="postAuthor" className="mb-4" onChange={onAuthChanged} value={userId}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent"></label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          placeholder="Input your content..."
          value={content}
          onChange={onContentChanged}
          className="
          w-full bg-slate-200/10 border-[1px] border-white rounded-lg px-5 py-3 
          backdrop-blur-md mb-4 placeholder:text-slate-200/60 min-h-[80px]"
        ></textarea>
        <button
          type="button"
          onClick={onSave}
          disabled={!canSave}
          className="w-fit px-8 py-2 disabled:opacity-50 active:hover:bg-rose-500/80 bg-rose-500 border-[1px] border-white text-white rounded-lg self-end"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
