import type { MetaFunction } from '@remix-run/node';
import { Link } from 'react-router-dom';

export const meta: MetaFunction = () => {
    return [
        { title: 'Ellie Moulton | Frontend Developer' },
        {
            name: 'description',
            content:
                "Hi, I'm Ellie! I'm a freelance developer and I would love to help you build your dream website!",
        },
    ];
};


export default function Index() {
    return (
        <>
            <div>
                <h1>Hello World!</h1>
                <Link to='/portfolio'>
                    <p>portfolio</p>
                </Link>
            </div>
        </>
    );
}
