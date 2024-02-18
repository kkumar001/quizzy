import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className='w-screen sm:h-screen h-full bg-slate-100 flex'>
      <Sidebar />
      <Main />
    </main>
  );
}
