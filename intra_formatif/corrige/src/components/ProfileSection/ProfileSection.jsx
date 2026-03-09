export default function ProfileSection(props) {
  return (
    <section className="exo-2">
      <h2>Profil Utilisateur</h2>
      <div className="user-box">
        {/* ÉTAPE 2 : Remplacer par props.user.name, etc. */}
        <p>Nom : {props.user.name}</p>
        <p>Rôle : {props.user.role}</p>
        <p>Membre depuis : {props.user.joinDate}</p>
      </div>
    </section>
  );
}