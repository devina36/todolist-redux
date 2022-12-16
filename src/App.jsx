import PostList from './component/PostList';
import AddPostForm from './component/AddPostForm';

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <main className=" flex justify-center overflow-x-hidden items-center my-element">
      <div className=" w-full sm:w-2/3 md:w-1/3 bg-slate-300/10 backdrop-blur-lg px-8 py-10 rounded-xl border-[1px] border-white my-5 sm:my-20 mx-4">
        <AddPostForm />
        <PostList />
      </div>
    </main>
  );
}

export default App;
