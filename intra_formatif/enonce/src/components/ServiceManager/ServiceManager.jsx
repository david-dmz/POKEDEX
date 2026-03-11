// Cible : Créer ComposantA, ComposantB, ComposantC
// Structure actuelle : A( B C B ) et A( C B )
import ComponentA from "../ComponentA/ComponentA";
import ComponentB from "../ComponentB/ComponentB";
import ComponentC
 from "../ComponentC/ComponentC";
export default function ServiceManager() {
  return (
    <section className="exo-1">
      {/* Premier Bloc : A( B C B ) */}
      <div className="comp-a" style={{border: '1px solid red', padding: '10px'}}>
        <h2>Service Global Alpha</h2>
    <ComponentA>
      <ComponentB/>
      <ComponentC/>
      <ComponentB/>
    </ComponentA>
      </div>

      <br />

      {/* Deuxième Bloc : A( C B ) */}
      <div className="comp-a" style={{border: '1px solid red', padding: '10px'}}>
        <h2>Service Global Alpha</h2>
    <ComponentA>
      <ComponentC/>
      <ComponentB/>
    </ComponentA>
      </div>
    </section>
  );
}
