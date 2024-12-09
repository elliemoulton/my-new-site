import { Link } from 'react-router-dom';

export default function Demo() {
    return (
        <>
            <h1>Demo Page</h1>
            <Link to='/'>
                    <p>home page</p>
                </Link>
        </>
    );
}
