import { useState } from "react";
import { TEMPLATES } from "./lib/templates";
import { generateLetter, pickTemplate, recordUsage } from "./lib/generatePdf";

const INITIAL = { company: "", address: "", recipient: "Service des Ressources Humaines", service: "Service informatique", template: "auto" };

export default function App() {
  const [form, setForm] = useState(INITIAL);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onGenerate = (e) => {
    e.preventDefault();
    const company = form.company.trim();
    if (!company) return setError("Le nom de l'entreprise est obligatoire.");
    setError("");
    try {
      const templateKey = form.template === "auto" ? pickTemplate(company) : form.template;
      const out = generateLetter({
        company,
        address: form.address.trim(),
        recipient: form.recipient.trim() || "Service des Ressources Humaines",
        service: form.service.trim(),
        templateKey,
      });
      if (result) URL.revokeObjectURL(result.url);
      setResult({ ...out, templateKey });
    } catch (err) {
      setError(`Impossible de générer le PDF : ${err.message}`);
    }
  };

  const onDownload = () => recordUsage(result.templateKey);

  return (
    <div className="page">
      <header>
        <h1>Letters Generator</h1>
        <p>Génère ta lettre de demande de stage en PDF, directement dans le navigateur.</p>
      </header>

      <main>
        <form onSubmit={onGenerate} className="card">
          <label>Nom de l'entreprise *
            <input value={form.company} onChange={set("company")} placeholder="Airtel Madagascar" autoFocus />
          </label>
          <label>Adresse de l'entreprise (facultatif)
            <input value={form.address} onChange={set("address")} placeholder="Antananarivo, Madagascar" />
          </label>
          <label>Destinataire
            <input value={form.recipient} onChange={set("recipient")} />
          </label>
          <label>Service visé (facultatif)
            <input value={form.service} onChange={set("service")} />
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
                <a className="primary" href={result.url} download={result.filename} onClick={onDownload}>Télécharger le PDF</a>
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
