import { Link } from 'react-router-dom';

export default function Portfolio() {
    console.log('portfolio page');
    return (
        <>
            <head>
                <title>Portfolio</title>
                <meta name='description' content='My description' />
            </head>
            <h1>Portfolio</h1>
            <Link to='/'>
                <p>home page</p>
            </Link>
            <h3>Notes App</h3>
            <h3>All Campus Security</h3>
            <Link to='/portfolio/process-coffee'>
                <h3>Process Coffee Roasters</h3>
            </Link>
        </>
    );
}
