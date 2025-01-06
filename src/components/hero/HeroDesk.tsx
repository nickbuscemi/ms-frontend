import { urlFor } from '../../config/sanityImageHelper'
import { HeroContent } from '../../types/contentTypes'

interface HeroDeskProps {
    heroContent: HeroContent;
}

const HeroDesk: React.FC<HeroDeskProps> = ({ heroContent }) => {
    const backgroundImageUrl = heroContent?.backgroundImage
        ? urlFor(heroContent.backgroundImage).url()
        : null;

    return (
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
            {/* Background Image */}
            <div className="absolute inset-0">
                {backgroundImageUrl ? (
                    <img
                        className="object-cover w-full h-[120%]"
                        src={backgroundImageUrl}
                        alt={heroContent.backgroundAlt || 'Background'}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-900"></div> // Placeholder background
                )}
            </div>

            {/* Content */}
            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="max-w-xl text-left">
                        <h1 className="tracking-tighter text-white">
                            <span className="font-sans font-normal text-7xl">
                                {heroContent.titleLine1 || 'Title Line 1'}
                            </span>
                            <br />
                            <span className="font-serif italic font-normal text-8xl">
                                {heroContent.titleLine2 || 'Title Line 2'}
                            </span>
                        </h1>
                        <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
                            {heroContent.description || 'Default description text.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroDesk;
