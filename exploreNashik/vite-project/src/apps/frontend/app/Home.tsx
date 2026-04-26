import TravelTips from '@/components/ui/TravelTips'
import PlaceCard from '../content/index'
import HeroBannerOne from '../hero-banner/BannerOne'
import QuickStats from './QuickStat'
import TopAttraction from './TopAttraction'
import WineBanner from './WineBanner'
function Home() {
  return (
    <>
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
                              