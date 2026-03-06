import { Space, Typography } from 'antd';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

const { Text, Link } = Typography;

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-inner">
      <div className="footer-left">
        <Text className="footer-text">© {year} Kamal Web Studio;. All rights reserved.</Text>
      </div>
      <div className="footer-right">
        <Space size="middle">
          <Link href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookFilled />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramFilled />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
            <LinkedinFilled />
          </Link>
        </Space>
      </div>
    </div>
  );
}

