// Cible : Créer ComposantA, ComposantB, ComposantC

import { ComponentA } from "../ComponentA/ComponentA";
import ComponentB from "../ComponentB/ComponentB";
import ComponentC from "../ComponentC/ComponentC";

// Structure actuelle : A( B C B ) et A( C B )
export default function ServiceManager() {
  return (
    <section className="exo-1">
      {/* Premier Bloc : A( B C B ) */}
      <div className="comp-a" style={{border: '1px solid red', padding: '10px'}}>
        <h2>Service Global Alpha</h2>
        <ComponentB/>
        <ComponentC/>
        <ComponentB/>
      </div>

      <br />

      {/* Deuxième Bloc : A( C B ) */}
      <ComponentA>
        <ComponentC/>
        <ComponentB/>
      </ComponentA>
    </section>
  );
}
