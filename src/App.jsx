import { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import Home from './Home';
import Calculate from './Calculate';
import FetchApi from './FetchApi';
import NotFound from './NotFound';

const { Header, Content } = Layout;
const { Title } = Typography;

function AppShell() {
  const [radius, setRadius] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f7fb' }}>
      <Header
        style={{
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <Title level={3} style={{ margin: 0, color: '#1677ff', fontSize: 'clamp(16px, 3vw, 24px)' }}>
            Cylinder Calculator
          </Title>

          <nav style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#1677ff' : '#595959',
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none',
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/calculate"
              style={({ isActive }) => ({
                color: isActive ? '#1677ff' : '#595959',
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none',
              })}
            >
              Calculate
            </NavLink>
            <NavLink
              to="/fetch-api"
              style={({ isActive }) => ({
                color: isActive ? '#1677ff' : '#595959',
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none',
              })}
            >
              Fetch API
            </NavLink>
          </nav>
        </div>
      </Header>

      <Content style={{ padding: '16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculate" element={<Calculate radius={radius} setRadius={setRadius} height={height} setHeight={setHeight} result={result} setResult={setResult} />} />
            <Route path="/fetch-api" element={<FetchApi />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
