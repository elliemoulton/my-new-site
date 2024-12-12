import LightRoast from '../../../src/imgs/coffee-roast1.webp';

const products = [
    { id: 0, title: `Light Roast`, price: `$16`, img: LightRoast },
    { id: 1, title: `Medium Roast`, price: `$14`, img: LightRoast },
    { id: 3, title: `Dark Roast`, price: `$12`, img: LightRoast },
];

export default function Products() {
    return (
        <>
            <div className='recommended-products'>
                <div className='recommended-products-grid'>
                    {products.map((product) => (
                        <>
                            <img
                                src={product.img}
                                loading='lazy'
                                alt={product.title}
                            />
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                        </>
                    ))}
                </div>

                <br />
            </div>
        </>
    );
}
