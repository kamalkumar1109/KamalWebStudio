import { Card, Col, Row, Typography, Tag, Progress, Button } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function GymDemoPage() {
  return (
    <div className="page-container demo-page demo-gym">
      <section className="section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title className="demo-title">PowerFit Gym</Title>
            <Paragraph className="demo-subtitle">
              Bold, energetic landing page for gyms and fitness studios with clear membership plans and class
              schedules.
            </Paragraph>
            <Tag color="cyan" style={{ marginBottom: 12 }}>
              Ideal for gyms, yoga studios & fitness centres
            </Tag>
          </Col>
          <Col xs={24} md={10}>
            <Card className="demo-card" title="Membership Snapshot" bordered={false}>
              <Paragraph>
                <Text strong>Monthly Goal Completion</Text>
              </Paragraph>
              <Progress percent={72} status="active" />
              <Button type="primary" block style={{ marginTop: 16 }}>
                View Membership Plans
              </Button>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Popular Classes" bordered={false}>
              <ul className="demo-list">
                <li>Strength & Conditioning · 7:00 AM</li>
                <li>HIIT & Fat Burn · 6:00 PM</li>
                <li>Yoga & Mobility · 8:00 PM</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Trainer Highlight" bordered={false}>
              <Paragraph>
                Showcase trainer photos, certifications and specialisations to build trust and motivate enquiries.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

