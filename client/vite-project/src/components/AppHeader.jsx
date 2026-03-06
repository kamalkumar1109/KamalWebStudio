import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Typography } from 'antd';

const { Title } = Typography;

const menuItems = [
  { key: '/', label: 'Home' },
  { key: '/services', label: 'Services' },
  { key: '/portfolio', label: 'Portfolio' },
  { key: '/contact', label: 'Contact' },
];

export function AppHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentKey = menuItems.find((item) => location.pathname === item.key)?.key || '/';

  return (
    <div className="header-inner">
      <div className="logo" onClick={() => navigate('/')}>
        <Title level={4} className="logo-text">
          Kamal <span>Web Studio</span>
        </Title>
      </div>
      <div className='menu-wrapper'>
      <Menu
        mode="horizontal"
        selectedKeys={[currentKey]}
        items={menuItems}
        onClick={(e) => navigate(e.key)}
        className="nav-menu"
      />
    </div>
    </div>
  );
}

