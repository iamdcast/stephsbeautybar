import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className='h-screen flex flex-col xl:py-5 xl:px-36 w-screen-xl '>
        <Header />

        <section className='w-full h-full border border-red-500'>bye</section>
      </div>
      <header></header>
      <section></section>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='font-serif text-secondary'>UNVIEL YOUR GLOW</h1>
      </main>
      <footer></footer>
    </>
  );
}
