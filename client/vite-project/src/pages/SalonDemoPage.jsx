import { Card, Col, Row, Typography, Tag, Button } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function SalonDemoPage() {
  return (
    <div className="page-container demo-page demo-salon">
      <section className="section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title className="demo-title">GlowUp Salon</Title>
            <Paragraph className="demo-subtitle">
              Stylish, colourful landing page for salons with service highlights, packages and social media vibes.
            </Paragraph>
            <Tag color="magenta" style={{ marginBottom: 12 }}>
              For salons, spas and beauty studios
            </Tag>
          </Col>
          <Col xs={24} md={10}>
            <Card className="demo-card" title="Popular Packages" bordered={false}>
              <ul className="demo-list">
                <li>
                  <Text strong>Bridal Glow Package</Text>
                  <span>₹6,999</span>
                </li>
                <li>
                  <Text strong>Hair Makeover</Text>
                  <span>₹2,499</span>
                </li>
                <li>
                  <Text strong>Spa & Relax</Text>
                  <span>₹1,999</span>
                </li>
              </ul>
              <Button type="primary" block style={{ marginTop: 16 }}>
                Book Your Slot
              </Button>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Instagram-Ready Gallery" bordered={false}>
              <Paragraph>
                Masonry-style gallery to show hair colour transformations, nail art and makeup looks.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Social Proof" bordered={false}>
              <Paragraph>Highlight your Google ratings, Instagram followers and latest client reviews.</Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

