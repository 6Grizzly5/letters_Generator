import { useState } from "react";
import { EMPTY_PROFILE, REQUIRED } from "../lib/profile";

// Défini EN DEHORS de Setup : sinon il est recréé à chaque frappe et l'input perd le focus.
function Field({ label, required = true, hint, ...inputProps }) {
  return (
    <label>
      {label}{required ? " *" : ""}
      <input {...inputProps} />
      {hint && <small>{hint}</small>}
    </label>
  );
}

export default function Setup({ initial, firstTime, onSave, onCancel, onReset }) {
  const [p, setP] = useState({ ...EMPTY_PROFILE, ...initial });
  const [error, setError] = useState("");
  const set = (k) => (e) => setP((prev) => ({ ...prev, [k]: e.target.value }));
  const bind = (k) => ({ value: p[k], onChange: set(k) });

  const submit = (e) => {
    e.preventDefault();
    const clean = Object.fromEntries(Object.entries(p).map(([k, v]) => [k, String(v).trim()]));
    if (REQUIRED.some((k) => !clean[k])) return setError("Merci de remplir tous les champs obligatoires (*).");
    if (!/^\S+@\S+\.\S+$/.test(clean.email)) return setError("L'adresse e-mail n'est pas valide.");
    setError("");
    onSave(clean);
  };

  return (
    <div className="page narrow">
      <header>
        <h1>{firstTime ? "Bienvenue sur Letters Generator" : "Mes informations"}</h1>
        <p>
          {firstTime
            ? "Renseigne tes informations une seule fois. Elles sont enregistrées uniquement sur cet appareil : rien n'est envoyé sur Internet."
            : "Modifie tes informations. Elles restent enregistrées uniquement sur cet appareil."}
        </p>
      </header>

      <form onSubmit={submit} className="card setup">
        <h3>Identité et contact</h3>
        <Field label="Nom complet" placeholder="Prénom NOM" {...bind("name")} />
        <label>
          Je suis *
          <select value={p.gender} onChange={set("gender")}>
            <option value="m">Un étudiant / candidat (accords au masculin)</option>
            <option value="f">Une étudiante / candidate (accords au féminin)</option>
          </select>
        </label>
        <div className="row">
          <Field label="Ville" placeholder="Antananarivo" hint="Utilisée pour « Fait à … »" {...bind("city")} />
          <Field label="Téléphone" placeholder="034 00 000 00" {...bind("phone")} />
        </div>
        <Field label="Adresse complète" placeholder="Lot 00, Ivato Aéroport, Madagascar" required={false} hint="Facultatif : sinon la ville est affichée" {...bind("address")} />
        <Field label="E-mail" type="email" placeholder="nom@exemple.com" {...bind("email")} />

        <h3>Formation</h3>
        <Field label="Établissement" placeholder="Université / École" {...bind("school")} />
        <div className="row">
          <Field label="Niveau" placeholder="troisième année de Licence" {...bind("level")} />
          <Field label="Filière / parcours" placeholder="Génie Logiciel" {...bind("field")} />
        </div>
        <Field label="Compétences (séparées par des virgules)" placeholder="JavaScript, React, Python, SQL" required={false} hint="Facultatif : utilisées dans le modèle « Compétences techniques »" {...bind("skills")} />

        <h3>Stage recherché</h3>
        <div className="row">
          <Field label="Date de début" type="date" {...bind("startDate")} />
          <Field label="Durée" placeholder="six mois" {...bind("duration")} />
        </div>

        {error && <p className="error">{error}</p>}
        <div className="actions">
          <button type="submit" className="primary">{firstTime ? "Enregistrer et commencer" : "Enregistrer"}</button>
          {!firstTime && <button type="button" className="ghost" onClick={onCancel}>Annuler</button>}
          {!firstTime && (
            <button type="button" className="ghost danger" onClick={() => window.confirm("Effacer toutes tes informations de cet appareil ?") && onReset()}>
              Effacer mes données
            </button>
          )}
        </div>
      </form>
    </div>
  );
}