import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Result } from 'antd';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Card style={{ maxWidth: 700, margin: '40px auto', borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
      <Result
        status="404"
        title="Page not found 404"
        subTitle="คุณจะถูกเปลี่ยนไปยังหน้า Home ภายใน 5 วินาที"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            กลับหน้า Home
          </Button>
        }
      />
    </Card>
  );
}

export default NotFound;
