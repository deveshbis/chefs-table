import backgroundImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen rounded-3xl banner-sec" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className=" bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Our Recipe Banner: Elevating your culinary journey with tantalizing flavors and irresistible creations, inspiring your inner chef.</p>
                        <div className='flex gap-10 justify-center'>
                            <button className="btn bg-green-500 rounded-[50px] px-7 ">Explore Now</button>
                            <button className="btn backdrop-blur-none bg-white bg-opacity-30 rounded-[50px] px-7">Our Feedback</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
