import { Card, Col, Divider, Row, Typography } from 'antd';

const { Text } = Typography;

function Home() {
  return (
    <Card style={{ borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
      <Divider />

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={20}>
          <Card
            size="small"
            title={<span style={{ fontSize: 24 }}>สูตรคำนวณ</span>}
            style={{ background: '#f9fbff', borderRadius: 12, textAlign: 'center' }}
          >
            <Text strong style={{ fontSize: 24, display: 'block' }}>
              ปริมาตร = π × รัศมี² × ความสูง
            </Text>
            <br />
            <Text strong style={{ fontSize: 24, display: 'block' }}>
              หรือ ปริมาตรทรงกระบอก = πr²h
            </Text>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default Home;
