import {Link} from 'react-router-dom'

const Navbar = () => {
    return <div className='navbar-container'>
        <Link to='/'>Home</Link>
        <Link to='/image-generator'>Image Generator</Link>
        <Link to='/history'>History</Link>
    </div>
}

export default Navbar;