import { Card, Col, Row, Typography, Tag, Button } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DentalClinicDemoPage() {
  return (
    <div className="page-container demo-page demo-dental">
      <section className="section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title className="demo-title">BrightSmile Dental Clinic</Title>
            <Paragraph className="demo-subtitle">
              Calm, trustworthy website for clinics focused on treatments, before/after results and patient reviews.
            </Paragraph>
            <Tag color="blue" style={{ marginBottom: 12 }}>
              Great for dental, skin and health clinics
            </Tag>
          </Col>
          <Col xs={24} md={10}>
            <Card className="demo-card" title="Featured Treatments" bordered={false}>
              <ul className="demo-list">
                <li>Teeth Whitening</li>
                <li>Smile Makeover</li>
                <li>Braces & Aligners</li>
              </ul>
              <Button type="primary" block style={{ marginTop: 16 }}>
                Book Appointment
              </Button>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Before / After Gallery" bordered={false}>
              <Paragraph>
                Grid gallery to show real patient smile transformations and build strong social proof.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="demo-card" title="Patient Reviews" bordered={false}>
              <Paragraph>
                "Best dental experience I've ever had. Clean clinic, friendly staff and clear explanations."
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

