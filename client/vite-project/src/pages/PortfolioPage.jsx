import { Button, Card, Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const projects = [
  {
    key: 'restaurant',
    title: 'Restaurant Website (Demo)',
    description: 'Clean menu layout, photo gallery, online table booking and Google Map.',
    path: '/portfolio/restaurant-demo',
  },
  {
    key: 'gym',
    title: 'Gym Website (Demo)',
    description: 'Membership plans, trainer profiles, class schedule and enquiry form.',
    path: '/portfolio/gym-demo',
  },
  {
    key: 'dental',
    title: 'Dental Clinic Website (Demo)',
    description: 'Service pages, before/after gallery, patient testimonials and appointment form.',
    path: '/portfolio/dental-clinic-demo',
  },
  {
    key: 'salon',
    title: 'Salon Website (Demo)',
    description: 'Service menu, price list, Instagram-style gallery and booking button.',
    path: '/portfolio/salon-demo',
  },
];

export function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="section">
        <Title level={2} className="section-title">
          Portfolio
        </Title>
        <Paragraph className="section-subtitle">
          Demo websites designed for different types of local businesses. Each can be customised with your branding,
          photos and content.
        </Paragraph>
        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} md={12} lg={6} key={project.key}>
              <Card
                className="portfolio-card"
                cover={<div className="portfolio-image-placeholder">Image Placeholder</div>}
              >
                <Title level={4}>{project.title}</Title>
                <Paragraph type="secondary">{project.description}</Paragraph>
                <Button type="primary" block onClick={() => navigate(project.path)}>
                  View Demo
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

