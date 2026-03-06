import { Card, Col, Row, Tag, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const services = [
  {
    title: 'Basic Website',
    price: '₹7000',
    description: 'Perfect for new local businesses that need a simple online presence.',
    includes: ['5 pages', 'Mobile responsive', 'Contact form', 'Google Map', 'WhatsApp button'],
    featured: false,
  },
  {
    title: 'Professional Website',
    price: '₹12000',
    description: 'For growing businesses that need a stronger brand and better visibility.',
    includes: [
      'Everything in Basic',
      'Gallery',
      'Reviews section',
      'Better UI/UX',
      'SEO setup',
    ],
    featured: true,
  },
  {
    title: 'Premium Website',
    price: '₹20000',
    description: 'For businesses that want online bookings, payments and admin control.',
    includes: [
      'Everything in Professional',
      'Booking system',
      'Payment integration',
      'Admin dashboard',
    ],
    featured: false,
  },
];

export function ServicesPage() {
  return (
    <div className="page-container">
      <section className="section">
        <Title level={2} className="section-title">
          Services & Pricing
        </Title>
        <Paragraph className="section-subtitle">
          Simple, transparent pricing for local businesses. Choose the plan that matches your goals today.
        </Paragraph>
        <Row gutter={[24, 24]}>
          {services.map((service) => (
            <Col xs={24} md={8} key={service.title}>
              <Card
                className={`pricing-card ${service.featured ? 'pricing-card-featured' : ''}`}
                bordered={!service.featured}
                title={
                  <div className="pricing-card-header">
                    <Title level={3}>{service.price}</Title>
                    <Text type="secondary">{service.title}</Text>
                    {service.featured && (
                      <Tag color="blue" className="pricing-tag">
                        Most Popular
                      </Tag>
                    )}
                  </div>
                }
              >
                <Paragraph>{service.description}</Paragraph>
                <ul className="pricing-list">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

