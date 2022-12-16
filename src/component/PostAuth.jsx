import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../redux/features/users/usersSlice';

const PostAuth = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  console.log(users);
  const author = users.find((user) => user.id === parseInt(userId));

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuth;
