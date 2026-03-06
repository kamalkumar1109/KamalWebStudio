import { Button, Card, Col, Row, Space, Typography } from 'antd';
import {
  ThunderboltOutlined,
  MobileOutlined,
  LayoutOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="hero-section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title className="hero-title">Modern Websites for Local Businesses</Title>
            <Paragraph className="hero-subtitle">
              I help businesses attract more customers with fast, modern and mobile-friendly websites.
            </Paragraph>
            <Space size="middle" wrap>
              <Button type="primary" size="large" onClick={() => navigate('/portfolio')}>
                View Portfolio
              </Button>
              <Button size="large" onClick={() => navigate('/contact')}>
                Book Free Demo
              </Button>
            </Space>
          </Col>
          <Col xs={24} md={10}>
            <Card className="hero-card" bordered={false}>
              <Title level={4}>Websites that work for your business</Title>
              <Paragraph>
                From restaurants to gyms and clinics, I build websites that look professional and bring you real
                customers.
              </Paragraph>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Text strong>Fast delivery</Text>
                  <Paragraph type="secondary">Get your website live in days, not months.</Paragraph>
                </Col>
                <Col span={12}>
                  <Text strong>Local business focused</Text>
                  <Paragraph type="secondary">Designed for small and local businesses in your city.</Paragraph>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section">
        <Title level={2} className="section-title">
          Services Overview
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card title="Business Website Development" bordered={false} className="service-card">
              <Paragraph>
                Clean, modern websites that clearly explain your business and help customers contact you easily.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Website Redesign" bordered={false} className="service-card">
              <Paragraph>
                Upgrade old or outdated websites to a fresh, modern and mobile-friendly experience.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Website + SEO Setup" bordered={false} className="service-card">
              <Paragraph>
                Websites built with basic SEO so your business can be found on Google by local customers.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section">
        <Title level={2} className="section-title">
          Why Choose Us
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={12} md={6}>
            <Card bordered={false} className="feature-card">
              <ThunderboltOutlined className="feature-icon" />
              <Title level={4}>Fast websites</Title>
              <Paragraph type="secondary">Optimised for speed so your visitors never have to wait.</Paragraph>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card bordered={false} className="feature-card">
              <MobileOutlined className="feature-icon" />
              <Title level={4}>Mobile responsive</Title>
              <Paragraph type="secondary">Looks perfect on mobiles, tablets and desktops.</Paragraph>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card bordered={false} className="feature-card">
              <LayoutOutlined className="feature-icon" />
              <Title level={4}>Professional design</Title>
              <Paragraph type="secondary">Modern layouts that make your brand look trustworthy.</Paragraph>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card bordered={false} className="feature-card">
              <DollarCircleOutlined className="feature-icon" />
              <Title level={4}>Affordable pricing</Title>
              <Paragraph type="secondary">Plans for every stage of your business growth.</Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="cta-section">
        <Card className="cta-card">
          <Row align="middle" gutter={[24, 24]}>
            <Col xs={24} md={16}>
              <Title level={3}>Want a website for your business?</Title>
              <Paragraph style={{ color: 'gray' }}>
                Let's discuss your business and show you a live demo website tailored for your industry.
              </Paragraph>
            </Col>
            <Col xs={24} md={8} className="cta-actions">
              <Button type="primary" size="large" onClick={() => navigate('/contact')}>
                Book Free Demo
              </Button>
            </Col>
          </Row>
        </Card>
      </section>
    </div>
  );
}

