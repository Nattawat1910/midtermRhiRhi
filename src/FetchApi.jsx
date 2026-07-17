import { useEffect, useState } from 'react';
import { Card, Col, Empty, Row, Spin, Typography } from 'antd';

const { Title, Text } = Typography;

function FetchApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Card style={{ borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
      <Title level={2}>Products from Fake Store API</Title>
      <Text type="secondary">รายการสินค้าจาก API ที่จัดแสดงในรูปแบบ Card ที่สวยงาม</Text>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <Spin size="large" />
        </div>
      ) : products.length === 0 ? (
        <Empty description="No products found" style={{ marginTop: 24 }} />
      ) : (
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          {products.map((product) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.image} style={{ height: 180, objectFit: 'contain', padding: 16 }} />}
                style={{ borderRadius: 12 }}
              >
                <Card.Meta
                  title={product.title.length > 40 ? `${product.title.slice(0, 40)}...` : product.title}
                  description={
                    <div>
                      <Text strong>${product.price}</Text>
                      <br />
                      <Text type="secondary">{product.category}</Text>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Card>
  );
}

export default FetchApi;
