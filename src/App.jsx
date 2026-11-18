
import { useState, useEffect } from "react";

function App() {
  // État des utilisateurs
  const [users, setUsers] = useState([]);

  // État du chargement
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Erreur :", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div>
        <h2>Chargement...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Gestion des utilisateurs</h1>
      <h2>Liste des utilisateurs</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
