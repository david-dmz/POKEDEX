import ServiceManager from './components/ServiceManager/ServiceManager.jsx';
import ProfileSection from './components/ProfileSection/ProfileSection.jsx';
import DestinationList from './components/DestinationList/DestinationList.jsx';

function App() {

  // Données pour l'Exo 3
  const destinations = [
    { id: 1, name: "Paris", price: "1200$", date: "15 Mai" },
    { id: 2, name: "Tokyo", price: "1500$", date: "22 Juin" },
    { id: 3, name: "Rome", price: "1100$", date: "10 Juillet" }
  ];

  const SERVER_CONFIG = {
    id: "SRV-99-ALPHA",
    specs: {
      cpu: "8 Cores",
      ram: "32GB",
      storage: "1TB NVMe"
    },
    network: {
      ip: "192.168.1.105",
      status: "Online",
      lastBackup: "2026-03-14"
    },
    admin: "Alex Prof" 
  };
  return (
    <div className="container">
      <ServiceManager />
      <hr />
      <ProfileSection config = {SERVER_CONFIG} />
      <hr />
      <DestinationList items={destinations} />
    </div>
  );
}

export default App;