import { useState } from "react";

function App() {
  // Stati per i campi del form
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("Full Stack");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validazione campi
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization ||
      !experience.trim() ||
      !description.trim()
    ) {
      alert("Compila tutti i campi.");
      return;
    }
    if (isNaN(Number(experience)) || Number(experience) <= 0) {
      alert("Anni di esperienza deve essere un numero positivo.");
      return;
    }
    if (!["Full Stack", "Frontend", "Backend"].includes(specialization)) {
      alert("Seleziona una specializzazione valida.");
      return;
    }
    // Stampa in console i dati del form
    console.log({
      fullName,
      username,
      password,
      specialization,
      experience,
      description
    });
    alert("Registrazione completata!");
  };

  return (
    <>
      <h1>Registrazione</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome completo:
            <input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Specializzazione:
            <select
              value={specialization}
              onChange={e => setSpecialization(e.target.value)}
            >
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Anni di esperienza:
            <input
              type="number"
              value={experience}
              onChange={e => setExperience(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Breve descrizione:
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App
