// Fichier: ServiceBuilder.jsx
// Objectif : Identifier et créer ComposantA, ComposantB et ComposantC
// Structure visuelle à décoder : A(BCB), A(BC), A(CC)
import './ServiceManager.css'
import ComponentA  from '../ComponentA/ComponentA'
import ComponentB from '../ComponentB/ComponentB'
import ComponentC from'../ComponentC/ComponentC'

export default function ServiceBuilder() {
  return (
    <div className="container" style={{ padding: '30px' }}>

      {/* --- PREMIER BLOC : A ( B C B ) --- */}
      <ComponentA>
        <ComponentB/>
        <ComponentC/>
        <ComponentB/>
      </ComponentA>

      {/* --- DEUXIÈME BLOC : A ( B C ) --- */}
    <ComponentA>
        <ComponentB/>
        <ComponentC/>
      </ComponentA>

      {/* --- TROISIÈME BLOC : A ( C C ) --- */}
      <ComponentA>
        <ComponentC/>
        <ComponentC/>
      </ComponentA>

    </div>
  );
}