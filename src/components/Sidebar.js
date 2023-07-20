import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/" className="logo-link">Nucleo</Link>
      </div>  
      <ul className="nav-links">
        <li className={`nav-item ${location.pathname === '/reviews' ? 'active' : ''}`}>
          <Link to="/reviews" className="nav-item">Reviews</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/writereview' ? 'active' : ''}`}>
          <Link to="/writereview" className="nav-item">Write a Review</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/upcoming' ? 'active' : ''}`}>
          <Link to="/upcoming" className="nav-item">Top Upcoming</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
          <Link to="/about" className="nav-item">About</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/community' ? 'active' : ''}`}>
          <Link to="/community" className="nav-item">Community Hub</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/newsletter' ? 'active' : ''}`}>
          <Link to="/newsletter" className="nav-item">Newsletter</Link>
        </li>
      </ul>
    </div>
  );
};


 
export default Sidebar;