import TravelTips from '@/components/ui/TravelTips'
import PlaceCard from '../content/index'
import HeroBannerOne from '../hero-banner/BannerOne'
import QuickStats from './QuickStat'
import TopAttraction from './TopAttraction'
import WineBanner from './WineBanner'

function Home() {
  return (
    <>
<link
  rel="canonical"
  href="https://explorenashik.in/"
/>

<meta property="og:type" content="website" />

<meta
  property="og:title"
  content="Explore Nashik | Tourist Places, Temples & Travel Guide"
/>

<meta
  property="og:description"
  content="Discover famous tourist places, forts, waterfalls, wineries and travel information in Nashik."
/>

<meta
  property="og:url"
  content="https://explorenashik.in/"
/>

<meta
  property="og:image"
  content="https://explorenashik.in/enCover.png"
/>

<meta
  name="twitter:card"
  content="summary_large_image"
/>

<meta
  name="twitter:title"
  content="Explore Nashik"
/>

<meta
  name="twitter:description"
  content="Discover famous tourist places in Nashik."
/>

<meta
  name="twitter:image"
  content="https://explorenashik.in/enCover.png"
/>
      <HeroBannerOne />
      <PlaceCard  />
      <QuickStats/>
      <TopAttraction  />
      <WineBanner />
      <TravelTips />
    </>
  ) 
}

export default Home
                              