import { useState } from 'react';
import { Link } from '@remix-run/react';

import ArrowRightShadow from '../../../src/imgs/arrow-right-shadow.svg';
import ArrowLeftShadow from '../../../src/imgs/arrow-left-shadow.svg';

import FrenchPress from '../../../src/imgs/french-press.png';
import V60 from '../../../src/imgs/v60.png';
import Chemex from '../../../src/imgs/chemex.png';
import ClassicDrip from '../../../src/imgs/classic-drip.png';
import ColdBrew from '../../../src/imgs/coldbrew.png';
import Espresso from '../../../src/imgs/coffee-machine.png';

// interface Props {
//     items: [];
//     id: number;
//     brewType: string;
//     class: string;
//     img: string;
//     requirement1: string;
//     requirement2: string;
//     instructions1: string;
//     instructions2: string;
// }

const items = [
    {
        id: 0,
        brewType: 'French Press',
        class: 'french-press',
        img: FrenchPress,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: 'french-press',
    },
    {
        id: 1,
        brewType: 'V60',
        class: 'v60',
        img: V60,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: 'v60',
    },
    {
        id: 2,
        brewType: 'Chemex',
        class: 'chemex',
        img: Chemex,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: 'chemex',
    },
    {
        id: 3,
        brewType: 'Classic Drip',
        class: 'classic-drip',
        img: ClassicDrip,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: 'classic-drip',
    },
    {
        id: 4,
        brewType: 'Cold Brew',
        class: 'cold-brew',
        img: ColdBrew,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: 'cold-brew',
    },
    {
        id: 5,
        brewType: 'Espresso',
        class: 'espresso',
        img: Espresso,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: 'espresso',
    },
];

export default function BrewGuideCards() {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log('activeIndex: ' + activeIndex);
    console.log('hello world');

    // const DesktopCard = ({ item }: { item: object }) => {
    //     return (
    //         <>
    //             <div className={`${item.class} brew-guide-card-desktop`}>
    //                 <div className='column-1'>
    //                     <h3>{item.brewType}</h3>
    //                     <img
    //                         src={item.img}
    //                         alt={item.brewType}
    //                         loading='lazy'
    //                     />
    //                     <p>Requirements</p>
    //                     <ul>
    //                         <li>{item.requirement1}</li>
    //                         <li>{item.requirement2}</li>
    //                     </ul>
    //                 </div>
    //                 <div className='column-2'>
    //                     <p>{item.instructions1}</p>
    //                     <br />
    //                     <p>{item.instructions2}</p>
    //                     <br />
    //                     <Link to={'pages/coffee-calculator-' + item.url}>
    //                         Read the full guide
    //                     </Link>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // };

    // const MobileCard = ({ item }) => {
    //     return (
    //         <>
    //             <div className={`${item.class} brew-guide-card-mobile`}>
    //                 <h3>{item.brewType}</h3>
    //                 <img src={item.img} alt={item.brewType} />
    //                 <div className='mobile-requirements'>
    //                     <p>Requirements</p>
    //                     <ul>
    //                         <li>{item.requirement1}</li>
    //                         <li>{item.requirement2}</li>
    //                     </ul>
    //                 </div>
    //                 <Link to={'pages/coffee-calculator-' + item.url}>
    //                     Read the full guide
    //                 </Link>
    //             </div>
    //         </>
    //     );
    // };

    const updateIndex = (newIndex: number) => {
        // so we can't scroll beyond the end
        if (newIndex <= -3) {
            newIndex = -3;
            //  so we can't scroll before the first one
        } else if (newIndex >= 2) {
            newIndex = 2;
        }
        setActiveIndex(newIndex);
    };

    const slideRight = () => {
        updateIndex(activeIndex - 1);
        console.log('slideRight');
    };

    const slideLeft = () => {
        updateIndex(activeIndex + 1);
        console.log('slideLeft');
    };

    // const checkKey = (e: ) => {
    //     e = e || window.e;
    //     if (e.keyCode == '37') {
    //         slideLeft();
    //         // left arrow
    //     } else if (e.keyCode == '39') {
    //         slideRight();
    //         // right arrow
    //     }
    // };

    return (
        <>
            <div className='card-container'>
                <div
                    className='inner'
                    style={{
                        // 8.332 is so it starts on card 3 (index 2) it starts it a half a card over so it is centered
                        // with 6 cards the center would be split between 2 cards
                        transform: `translate(${
                            8.332 + activeIndex * 16.667
                        }%)`,
                    }}
                    // % is 100/number of cards so 100/6=16.667
                >
                    {items.map((item) => {
                        // return <DesktopCard key={item.id} item={item} />;
                        return (
                            <>
                                <div
                                    className={`${item.class} brew-guide-card-desktop`}
                                >
                                    <div className='column-1'>
                                        <h3>{item.brewType}</h3>
                                        <img
                                            src={item.img}
                                            alt={item.brewType}
                                            loading='lazy'
                                        />
                                        <p>Requirements</p>
                                        <ul>
                                            <li>{item.requirement1}</li>
                                            <li>{item.requirement2}</li>
                                        </ul>
                                    </div>
                                    <div className='column-2'>
                                        <p>{item.instructions1}</p>
                                        <br />
                                        <p>{item.instructions2}</p>
                                        <br />
                                        <Link
                                            to={
                                                'pages/coffee-calculator-' +
                                                item.url
                                            }
                                        >
                                            Read the full guide
                                        </Link>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    {items.map((item) => {
                        // return <MobileCard key={item.id} item={item} />;
                        return (
                            <>
                                <div
                                    className={`${item.class} brew-guide-card-mobile`}
                                >
                                    <h3>{item.brewType}</h3>
                                    <img src={item.img} alt={item.brewType} />
                                    <div className='mobile-requirements'>
                                        <p>Requirements</p>
                                        <ul>
                                            <li>{item.requirement1}</li>
                                            <li>{item.requirement2}</li>
                                        </ul>
                                    </div>
                                    <Link
                                        to={
                                            'pages/coffee-calculator-' +
                                            item.url
                                        }
                                    >
                                        Read the full guide
                                    </Link>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className='buttons'>
                <button onClick={slideLeft} onKeyDown={slideLeft}>
                    <img src={ArrowLeftShadow} alt='previous' loading='lazy' />
                </button>
                <button onClick={slideRight} onKeyDown={slideRight}>
                    <img src={ArrowRightShadow} alt='next' loading='lazy' />
                </button>
            </div>
        </>
    );
}
