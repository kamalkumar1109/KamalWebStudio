import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AppHeader } from './components/AppHeader.jsx';
import { AppFooter } from './components/AppFooter.jsx';
import { WhatsAppButton } from './components/WhatsAppButton.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { PortfolioPage } from './pages/PortfolioPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { RestaurantDemoPage } from './pages/RestaurantDemoPage.jsx';
import { GymDemoPage } from './pages/GymDemoPage.jsx';
import { DentalClinicDemoPage } from './pages/DentalClinicDemoPage.jsx';
import { SalonDemoPage } from './pages/SalonDemoPage.jsx';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>
      <Content className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio/restaurant-demo" element={<RestaurantDemoPage />} />
          <Route path="/portfolio/gym-demo" element={<GymDemoPage />} />
          <Route path="/portfolio/dental-clinic-demo" element={<DentalClinicDemoPage />} />
          <Route path="/portfolio/salon-demo" element={<SalonDemoPage />} />
        </Routes>
      </Content>
      <Footer className="app-footer">
        <AppFooter />
      </Footer>
      <WhatsAppButton />
    </Layout>
  );
}

export default App;
