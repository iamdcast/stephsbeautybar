import Header from "@/components/Header";
import Section from "@/components/Section";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className='h-min min-h-screen flex-shrink flex flex-col md:py-5 py-3 md:px-24 px-5 w-screen-xl'>
        <Header />
        <Section />
      </div>

      <main className='flex min-h-screen h-min flex-col items-center'>
        <Services />
        <Work />
      </main>

      <footer></footer>
    </>
  );
}
