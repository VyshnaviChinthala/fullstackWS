import HomeCarousel from "../components/Homecarousel"
import HomeCards from "../components/Homecards"
import SocialCard from "../components/SocialCard"

const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
                <HomeCarousel/>
                <HomeCards/>
                <SocialCard />
            </div>
        </>
    )
}

export default Home