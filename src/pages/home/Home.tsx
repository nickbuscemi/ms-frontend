// components
import HeroDesk from "../../components/hero/HeroDesk";
import IntroSection1 from "../../components/sections/IntroSection1";
// hooks
import { useSanityContent } from "../../hooks/useSanityContent";
// queries
import { heroSectionQuery } from "../../queries/sanityQueries";
//types
import { HeroContent } from "../../types/contentTypes";

const Home = () => {
    const { data: heroContent, error, loading } = useSanityContent<HeroContent>(heroSectionQuery);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (!heroContent) return <div>No content available</div>;


    return (
        <div className="relative h-screen">
            <HeroDesk heroContent={heroContent} />
            <IntroSection1 />
        </div>
    );
};

export default Home;
