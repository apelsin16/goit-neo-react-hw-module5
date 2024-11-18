import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <p>404 Page not found</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;
