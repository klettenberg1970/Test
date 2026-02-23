import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {

    return (
        <  div className="navigation">
            <Link to="/">Start</Link>
            <Link to="/wetter">Wetter</Link>
           
        </div>
    )
}