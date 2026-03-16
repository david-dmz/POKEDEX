// Fichier : ServerStats.jsx
// ÉTAPE 1 : Sortir SERVER_CONFIG et le passer depuis le parent (App.jsx)
// ÉTAPE 2 : Transformer ce composant pour qu'il utilise les props
export default function ServerStats({config}) {
  return (
    <div className="server-card" style={{ border: '2px solid #333', padding: '15px', fontFamily: 'monospace' }}>
      <h2 style={{ background: '#333', color: '#00ff00', padding: '5px' }}>
        SYSTEM LOG: {config.id}
      </h2>

      <div className="specs-section">
        <h3>Spécifications :</h3>
        <ul>
          <li>Processeur : {config.specs.cpu}</li>
          <li>Mémoire : {config.specs.ram}</li>
          <li>Stockage : {config.specs.storage}</li>
        </ul>
      </div>

      <div className="network-section" style={{ borderTop: '1px solid #ccc', marginTop: '10px' }}>
        <p><strong>IP Address :</strong> {config.network.ip}</p>
        <p><strong>Status :</strong> {config.network.status}</p>
        <p><strong>Dernier Backup :</strong> {config.network.lastBackup}</p>
      </div>

      <footer style={{ marginTop: '15px', fontSize: '0.8rem', color: '#666' }}>
        Administrateur système : {config.admin}
      </footer>
    </div>
  );
}