// Cible : Créer ComposantA, ComposantB, ComposantC
// Structure actuelle : A( B C B ) et A( C B )
export default function ServiceManager() {
  return (
    <section className="exo-1">
      {/* Premier Bloc : A( B C B ) */}
      <div className="comp-a" style={{border: '1px solid red', padding: '10px'}}>
        <h2>Service Global Alpha</h2>
        <div className="comp-b" style={{margin: '5px'}}><span>Option Beta - Actif</span></div>
        <div className="comp-c" style={{margin: '5px'}}><i>Détail Gamma - Vérifié</i></div>
        <div className="comp-b" style={{margin: '5px'}}><span>Option Beta - Actif</span></div>
      </div>

      <br />

      {/* Deuxième Bloc : A( C B ) */}
      <div className="comp-a" style={{border: '1px solid red', padding: '10px'}}>
        <h2>Service Global Alpha</h2>
        <div className="comp-c" style={{margin: '5px'}}><i>Détail Gamma - Vérifié</i></div>
        <div className="comp-b" style={{margin: '5px'}}><span>Option Beta - Actif</span></div>
      </div>
    </section>
  );
}
