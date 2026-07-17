import { useEffect } from 'react';
import { Alert, Card, Col, Form, InputNumber, Row, Statistic, Typography } from 'antd';

const { Title, Text } = Typography;

function Calculate({ radius, setRadius, height, setHeight, result, setResult }) {
  useEffect(() => {
    const pi = 22 / 7;
    const volume = pi * radius * radius * height;
    setResult(Number(volume.toFixed(2)));
  }, [radius, height, setResult]);

  return (
    <Card style={{ maxWidth: 700, margin: '20px auto', borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
      <Title level={2}>Calculate Volume of a Cylinder</Title>
      <Text type="secondary">ใส่ค่ารัศมีและความสูงเพื่อดูปริมาตรทันที</Text>

      <Form layout="vertical" style={{ marginTop: 16 }}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Radius (รัศมี)">
              <InputNumber
                style={{ width: '100%' }}
                min={0}
                value={radius}
                onChange={(value) => setRadius(value || 0)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Height (ความสูง)">
              <InputNumber
                style={{ width: '100%' }}
                min={0}
                value={height}
                onChange={(value) => setHeight(value || 0)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Alert
        type="success"
        message="สูตร: ปริมาตร = π × รัศมี² × ความสูง"
        style={{ marginTop: 12, borderRadius: 8 }}
      />

      <div style={{ marginTop: 20 }}>
        <Statistic title="Volume" value={result} precision={2} />
      </div>
    </Card>
  );
}

export default Calculate;
