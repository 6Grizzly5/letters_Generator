import { useState } from "react";
import Setup from "./components/Setup.jsx";
import { TEMPLATES } from "./lib/templates";
import { clearProfile, loadProfile, saveProfile } from "./lib/profile";
import { generateLetter, pickTemplate, recordUsage } from "./lib/generatePdf";

const INITIAL = { company: "", address: "", recipient: "Service des Ressources Humaines", service: "", template: "auto" };

export default function App() {
  const [profile, setProfile] = useState(loadProfile);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const dropResult = () => { if (result) URL.revokeObjectURL(result.url); setResult(null); };

  if (!profile || editing) {
    return (
      <Setup
        firstTime={!profile}
        initial={profile || undefined}
        onSave={(p) => { saveProfile(p); setProfile(p); setEditing(false); dropResult(); }}
        onCancel={() => setEditing(false)}
        onReset={() => { clearProfile(); setProfile(null); setEditing(false); dropResult(); }}
      />
    );
  }

  const onGenerate = (e) => {
    e.preventDefault();
    const company = form.company.trim();
    if (!company) return setError("Le nom de l'entreprise est obligatoire.");
    setError("");
    try {
      const templateKey = form.template === "auto" ? pickTemplate(company) : form.template;
      const out = generateLetter({
        profile, company,
        address: form.address.trim(),
        recipient: form.recipient.trim() || "Service des Ressources Humaines",
        service: form.service.trim(),
        templateKey,
      });
      dropResult();
      setResult({ ...out, templateKey });
    } catch (err) {
      setError(`Impossible de générer le PDF : ${err.message}`);
    }
  };

  return (
    <div className="page">
      <header className="top">
        <div>
          <h1>Letters Generator</h1>
          <p>Bonjour {profile.name.split(" ")[0]}, génère ta lettre de demande de stage en PDF.</p>
        </div>
        <button className="ghost" onClick={() => setEditing(true)}>Mes informations</button>
      </header>

      <main>
        <form onSubmit={onGenerate} className="card">
          <label>Nom de l'entreprise *
            <input value={form.company} onChange={set("company")} placeholder="Nom de l'entreprise" autoFocus />
          </label>
          <label>Adresse de l'entreprise (facultatif)
            <input value={form.address} onChange={set("address")} placeholder="Ville, pays" />
          </label>
          <label>Destinataire
            <input value={form.recipient} onChange={set("recipient")} />
          </label>
          <label>Service visé (facultatif)
            <input value={form.service} onChange={set("service")} placeholder="Service informatique" />
          </label>
          <label>Modèle
            <select value={form.template} onChange={set("template")}>
              <option value="auto">Automatique (le moins utilisé)</option>
              {Object.entries(TEMPLATES).map(([k, t]) => <option key={k} value={k}>{t.label}</option>)}
            </select>
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="primary">Générer la lettre</button>
        </form>

        <section className="card preview">
          {result ? (
            <>
              <div className="bar">
                <span>Modèle : <b>{TEMPLATES[result.templateKey].label}</b></span>
                <a className="primary" href={result.url} download={result.filename} onClick={() => recordUsage(result.templateKey)}>Télécharger le PDF</a>
              </div>
              <iframe title="Aperçu de la lettre" src={result.url} />
            </>
          ) : (
            <p className="empty">L'aperçu de ta lettre apparaîtra ici.</p>
          )}
        </section>
      </main>
    </div>
  );
}
