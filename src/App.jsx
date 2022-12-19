// import PostList from './component/PostList';
// import AddPostForm from './component/AddPostForm';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <main className=" flex justify-center overflow-x-hidden my-element">
      <div className=" w-full h-fit min-w-[330px] sm:w-2/3 md:w-1/2 lg:w-2/5 bg-slate-300/10 backdrop-blur-lg px-8 py-10 rounded-xl border-[1px] border-white my-5 sm:my-16 mx-4">
        {/* <AddPostForm /> */}
        <AddTodo />
        <TodoList />
        {/* <PostList /> */}
      </div>
    </main>
  );
}

export default App;
