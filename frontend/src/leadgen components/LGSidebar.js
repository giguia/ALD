import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogoutLG } from '../hooks/useLogoutLG'; // Import the logout hook
import LoginLG from '../leadgen pages/LoginLG';

const LGSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logoutLG } = useLogoutLG(); // Use the logout hook

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logoutLG(); // Call the logout function
  };

  return (
    <>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <header><img src={process.env.PUBLIC_URL + '/chromagen.png'} alt="Chromagen Logo" className="chromagen" /></header>
        <ul>
          <li><Link to="/AddForm"><i className="fas fa-qrcode"></i>Dashboard</Link></li>
          <li><Link to="#"><i className="fas fa-link"></i>Users</Link></li>
          <li><Link to="#"><i className="fas fa-stream"></i>Leads</Link></li>
          <li><Link to="/AdminReports"><i className="fas fa-calendar-week"></i>Reports</Link></li>
          <li><Link to="#"><i className="far fa-question-circle"></i>About</Link></li>
          <li><Link to="#"><i className="fas fa-sliders-h"></i>Services</Link></li>
          <li><Link to="#"><i className="far fa-envelope"></i>Contact</Link></li>
          <li><Link to="/AdminProfile"><i className="fas fa-user"></i>Profile</Link></li>
          <li><Link to="/LoginLG" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i>Signout</Link></li>
        <li><button onClick={handleLogout}><i className="fas fa-user"></i>Signout</button></li>
        </ul>
      </div>
    </>
  );
};

export default LGSidebar;
