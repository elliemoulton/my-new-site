import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <Link to='/'>
                <p>home page</p>
            </Link>
            <h3>Coffee Roasters</h3>
            <h3>Notes App</h3>
            <h3>All Campus Security</h3>
            <Link to='/portfolio/process-coffee'>
                <h3>File</h3>
            </Link>
        </>
    );
}
