import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LatestNews from './components/LatestNews';
import Sidebar from './components/Sidebar';
import TopStories from './components/TopStories';
import WeatherWidget from './components/WeatherWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#E2F3F4] min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <LatestNews />
          <TopStories />
        </div>
        <div className="flex flex-col gap-8">
          <Sidebar />
          <WeatherWidget />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
