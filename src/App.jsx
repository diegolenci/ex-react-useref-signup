import { useState, useRef } from "react";

function App() {
  // Campi controllati per validazione live
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Refs per i campi non controllati
  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceRef = useRef();
  const descriptionRef = useRef();

  // Validazione realtime username
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (!/^[a-zA-Z0-9]{6,}$/.test(value)) {
      setUsernameError("L'username deve essere almeno 6 caratteri alfanumerici, senza spazi o simboli.");
    } else {
      setUsernameError("");
    }
  };

  // Validazione realtime password
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (
      value.length < 8 ||
      !/[A-Za-z]/.test(value) ||
      !/[0-9]/.test(value) ||
      !/[^A-Za-z0-9]/.test(value)
    ) {
      setPasswordError("La password deve avere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Recupera valori dai ref
    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experience = experienceRef.current.value;
    const description = descriptionRef.current.value;

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
    if (usernameError || passwordError) {
      alert("Correggi gli errori nei campi username e password.");
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
              ref={fullNameRef}
            />
          </label>
        </div>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          {username.length > 0 && (
            usernameError
              ? <div style={{color: "red"}}>{usernameError}</div>
              : <div style={{color: "green"}}>Username valido</div>
          )}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          {password.length > 0 && (
            passwordError
              ? <div style={{color: "red"}}>{passwordError}</div>
              : <div style={{color: "green"}}>Password valida</div>
          )}
        </div>
        <div>
          <label>
            Specializzazione:
            <select
              ref={specializationRef}
              defaultValue="Full Stack"
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
              ref={experienceRef}
            />
          </label>
        </div>
        <div>
          <label>
            Breve descrizione:
            <textarea
              ref={descriptionRef}
            />
          </label>
        </div>
        <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App
