import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from '../redux/features/posts/postsSlice';
import PostAuth from './PostAuth';
import ReactionButton from './ReactionButton';
import TimeAgo from './TimeAgo';

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderPosts.map((post) => (
    <article className=" w-full bg-slate-200 border-[1px] border-white rounded-lg px-5 py-3 mb-4" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <PostAuth userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <section className="w-full">
      <h2 className=" w-full py-2 text-white text-lg font-medium">Post</h2>
      <div className="max-h-[150px] overflow-y-auto scroll-smooth scroll-bar">{renderedPosts}</div>
    </section>
  );
};

export default PostList;
