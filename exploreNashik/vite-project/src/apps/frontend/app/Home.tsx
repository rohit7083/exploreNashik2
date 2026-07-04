import TravelTips from '@/components/ui/TravelTips'
import SEO from '../../../components/seo/SEO'
import PlaceCard from '../content/index'
import HeroBannerOne from '../hero-banner/BannerOne'
import QuickStats from './QuickStat'
import TopAttraction from './TopAttraction'
import WineBanner from './WineBanner'

function Home() {
  return (
    <>
      <SEO
        title="Explore Nashik | Tourist Places, Temples & Travel Guide"
        description="Discover famous tourist places, forts, waterfalls, wineries and travel information in Nashik."
        url="https://explorenashik.in/"
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
                              