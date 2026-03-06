import { Card, Col, Row, Typography, Tag, Button } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function RestaurantDemoPage() {
  return (
    <div className="page-container demo-page demo-restaurant">
      <section className="section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title className="demo-title">RestaurantName Bistro</Title>
            <Paragraph className="demo-subtitle">
              Warm, modern restaurant website with an easy-to-browse menu, reservation button and strong visuals.
            </Paragraph>
            <Tag color="gold" style={{ marginBottom: 12 }}>
              Perfect for restaurants, cafés and bakeries
            </Tag>
          </Col>
          <Col xs={24} md={10}>
            <Card className="demo-card" title="Today&apos;s Specials" bordered={false}>
              <ul className="demo-list">
                <li>
                  <Text strong>Wood-Fired Margherita Pizza</Text>
                  <span>₹499</span>
                </li>
                <li>
                  <Text strong>Signature Pasta Alfredo</Text>
                  <span>₹449</span>
                </li>
                <li>
                  <Text strong>Grilled Veg Platter</Text>
                  <span>₹399</span>
                </li>
              </ul>
              <Button type="primary" block style={{ marginTop: 16 }}>
                Book a Table
              </Button>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Our Ambience" bordered={false}>
              <Paragraph>
                Highlight large food and ambience photos in a grid layout to make visitors hungry as soon as they open
                the website.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Opening Hours & Location" bordered={false}>
              <Paragraph>Mon–Sun · 11:00 AM – 11:00 PM</Paragraph>
              <Paragraph>RestaurantName, MG Road, Gurgaon</Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

