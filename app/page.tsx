import HeroBanner from './components/heroBanner/HeroBanner'
import Navbar from './components/navbar/Navbar'
import SongCard from './components/songCard'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <section className='bg-black  h-[100vh]'>
        <SongCard title='New Bollywood' src='/1.png' followers={100} />
      </section>
    </>
  )
}
