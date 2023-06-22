import Header from "@/components/Header";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <div className='h-screen flex flex-col xl:py-5 xl:px-36 w-screen-xl '>
        <Header />
        <Section />
      </div>

      <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-secondary'>
        <h1 className='font-serif text-primary'>UNVIEL YOUR GLOW</h1>
      </main>
      <footer></footer>
    </>
  );
}
