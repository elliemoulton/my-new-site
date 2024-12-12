import { Link } from 'react-router-dom';

import Products from '~/components/coffee/Products';

// imgs
import Didi from 'src/imgs/didi.webp';
import AboutUs from 'src/imgs/about-us.webp';

export default function ProcessCoffee() {
    return (
        <>
            <div>
                <div className='home'>
                    <div className='video-header'>
                        <h1>Welcome to the Process.</h1>
                        <p>
                            A small scale specialty coffee roaster nestled in
                            Santa Monica, California, offering sustainably and
                            ethically sourced coffee roasts.
                        </p>
                        <Link to='/collections/all'>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                    <div className='sales-area'>
                        <Products />
                    </div>
                    <div className='player-highlight text-img-homepage'>
                        <div className='text'>
                            <h3>Keeping DiDi Haračić fueled for every game.</h3>
                            <p>
                                We bring you Rising Tide: a single origin coffee
                                that brings with it the story of a people and a
                                community - inviting you into the experience.
                                There is the calmness of the ocean, the
                                sweetness of chocolate, the brightness of ripe
                                fruit and the break of dawn present in every
                                cup.
                            </p>
                            <Link to='/products/rising-tide-didi-x-process'>
                                <button>Learn More</button>
                            </Link>
                        </div>
                        <img src={Didi} alt='DiDi Haračić' loading='lazy' />
                    </div>
                    <div className='brew-guides'>
                        <h2>Learn how to brew the perfect cup of coffee.</h2>
                        {/* <BrewGuideCards /> */}
                    </div>
                    <div className='about-us text-img-homepage'>
                        <div className='text'>
                            <h3>About us.</h3>
                            <p>
                                Everything and everyone is in process -
                                constantly changing, adapting, and evolving.
                                When it comes to coffee, we are committed to
                                making sure these changes are desirable and
                                profitable for all - not just the ones who stand
                                to benefit most from the changes.
                            </p>
                            <Link to='/pages/about'>
                                <button>Learn More</button>
                            </Link>
                        </div>
                        <img src={AboutUs} alt='founders' loading='lazy' />
                    </div>
                    <div className='instagram'>
                        <h3>Follow us</h3>
                        <p>
                            <Link
                                to='https://www.instagram.com/processcoffeeroasters/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                @processcoffeeroasters
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
