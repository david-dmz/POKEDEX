export default function DestinationList({ items }) {
  // "items" sera passé par App.jsx (voir plus bas)
  return (
    <section className="exo-3">
      <h2>Destinations</h2>
      <ul>
        {/* Rendu laid à remplacer par items.map(...) */}
        <li>
      {items.name} - {items.price} (Départ: {items.date})</li>
  
      </ul>
    </section>
  );
}