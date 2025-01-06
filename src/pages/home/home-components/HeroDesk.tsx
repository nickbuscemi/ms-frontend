import headshot2 from "../../../assets/headshots/headshot2.jpg"
const HeroDesk = () => {        
    return (
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    className="object-cover w-full h-full" 
                    src={headshot2}
                    alt="Background" 
                />
            </div>

            {/* Content */}
            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="max-w-xl text-left">
                        <h1 className="tracking-tighter text-white">
                            <span className="font-sans font-normal text-7xl">We Help</span><br />
                            <span className="font-serif italic font-normal text-8xl">Companies</span>
                        </h1>
                        <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
                            We bring ideas to life by combining years of experiences of our very professional team.                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroDesk;