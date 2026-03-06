import { useState } from 'react';
import { Button, Col, Form, Input, Row, Typography, message, Card } from 'antd';

const { Title, Paragraph, Text } = Typography;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          businessName: values.businessName,
          phone: values.phone,
          email: values.email,
          message: values.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      message.success(data.message || 'Message sent successfully!');
      form.resetFields();
    } catch (error) {
      message.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const demoUrl =
    'https://wa.me/917015550728?text=Hi%20J-Script-Studio,%20I%20want%20to%20book%20a%20free%20website%20demo.'; // replace number

  return (
    <div className="page-container">
      <section className="section">
        <Title level={2} className="section-title">
          Contact
        </Title>
        <Paragraph className="section-subtitle">
          Share a few details about your business and I'll get back to you with ideas and a free website demo.
        </Paragraph>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={14}>
            <Card className="contact-card">
              <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Your full name" />
                </Form.Item>
                <Form.Item label="Business Name" name="businessName">
                  <Input placeholder="Your business name" />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                  <Input placeholder="WhatsApp or mobile number" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input placeholder="you@example.com" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please tell me a bit about your project' }]}
                >
                  <Input.TextArea rows={4} placeholder="What type of website do you need?" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={submitting} block>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          <Col xs={24} md={10}>
            <Card className="contact-info-card">
              <Title level={4}>Business Contact</Title>
              <Paragraph>
                <Text strong>Phone:</Text> +91 70155 50728
              </Paragraph>
              <Paragraph>
                <Text strong>Email:</Text> sutharkamal1109@gmail.com
              </Paragraph>
              <Paragraph>
                <Text strong>City:</Text> Gurgaon, Haryana
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <section className="cta-section">
          <Card className="cta-card">
            <Row align="middle" gutter={[24, 24]}>
              <Col xs={24} md={16}>
                <Title level={3}>Book a Free Demo</Title>
                <Paragraph style={{color: 'gray'}}>
                  See a live demo website for your industry and understand exactly what you'll get before you
                  decide.
                </Paragraph>
              </Col>
              <Col xs={24} md={8} className="cta-actions">
                <Button type="primary" size="large" href={demoUrl} target="_blank" block>
                  Book Free Demo
                </Button>
              </Col>
            </Row>
          </Card>
        </section>
      </section>
    </div>
  );
}

