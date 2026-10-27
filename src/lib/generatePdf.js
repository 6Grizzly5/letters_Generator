import { jsPDF } from "jspdf";
<<<<<<< HEAD
import { TEMPLATES } from "./templates";
import { buildVars, fillTemplate, formatDateFr } from "./profile";

const USAGE_KEY = "letters_generator_usage";
=======
import { CANDIDATE } from "../config";
import { TEMPLATES } from "./templates";

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const USAGE_KEY = "letters_generator_usage";

export const formatDateFr = (d) => `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const tint = (rgb, f) => rgb.map((c) => Math.round(c + (255 - c) * f));
const safeName = (s) => s.trim().replace(/[^\p{L}\p{N}._-]+/gu, "_").replace(/^[._]+|[._]+$/g, "").slice(0, 70) || "Entreprise";

<<<<<<< HEAD
// ---- Rotation des modèles (stockée sur l'appareil) ---------------------------
=======
// Remplacement sûr (pas de regex, pas de problème avec { } ou $ dans le nom)
function fill(text, company) {
  const vars = { school: CANDIDATE.school, company, availability: CANDIDATE.availability, availabilityStart: CANDIDATE.availabilityStart };
  return Object.entries(vars).reduce((t, [k, v]) => t.split(`{${k}}`).join(v), text);
}

// ---- Rotation des modèles (stockée dans le navigateur) -----------------------
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
function readUsage() {
  try { return JSON.parse(localStorage.getItem(USAGE_KEY)) || {}; } catch { return {}; }
}
export function recordUsage(key) {
  const u = readUsage();
  u[key] = (u[key] || 0) + 1;
  try { localStorage.setItem(USAGE_KEY, JSON.stringify(u)); } catch { /* ignore */ }
}
export function pickTemplate(company) {
  const u = readUsage();
  const keys = Object.keys(TEMPLATES);
  const min = Math.min(...keys.map((k) => u[k] || 0));
  const pool = keys.filter((k) => (u[k] || 0) === min);
  let h = 2166136261;
  for (const ch of company.toLowerCase()) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return pool[h % pool.length];
}

// ---- Génération du PDF --------------------------------------------------------
<<<<<<< HEAD
export function generateLetter({ profile: p, company, address, recipient, service, templateKey }) {
  const t = TEMPLATES[templateKey];
  const vars = buildVars(p, company);
  const fill = (s) => fillTemplate(s, vars);
=======
export function generateLetter({ company, address, recipient, service, templateKey }) {
  const t = TEMPLATES[templateKey];
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
  const accent = hexToRgb(t.accent);
  const sidebar = t.style === "sidebar";
  const dark = [27, 35, 51];
  const grey = [91, 100, 117];

  const doc = new jsPDF({ unit: "mm", format: "a4" });
<<<<<<< HEAD
  doc.setProperties({ title: `Demande de stage - ${company}`, author: p.name });
=======
  doc.setProperties({ title: `Demande de stage - ${company}`, author: CANDIDATE.name });
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37

  const W = 210, H = 297;
  const L = sidebar ? 24 : 21.5, R = 21.5, U = W - L - R, BOTTOM = H - 22;
  const top = sidebar ? 20 : 24;
  let y = top;

  const text = (size, style, color) => { doc.setFont("helvetica", style).setFontSize(size).setTextColor(...color); };
  const wrap = (s, w) => doc.splitTextToSize(s, w);
  const ensure = (h) => { if (y + h > BOTTOM) { doc.addPage(); y = top; } };

  // En-tête : mes infos à gauche, destinataire à droite
  const rightW = U * 0.42, rightX = W - R - rightW, leftW = rightX - L - 8;

  let ly = y + 5;
  text(13, "bold", accent);
<<<<<<< HEAD
  wrap(p.name, leftW).forEach((l) => { doc.text(l, L, ly); ly += 5.6; });
  text(9, "normal", grey);
  wrap(`${vars.Level}, parcours ${p.field}`, leftW).forEach((l) => { doc.text(l, L, ly + 0.5); ly += 4.4; });
  ly += 2.5;
  text(9, "normal", dark);
  [p.address || p.city, p.email, p.phone].forEach((l) => { wrap(l, leftW).forEach((x) => { doc.text(x, L, ly); ly += 4.6; }); });
=======
  wrap(CANDIDATE.name, leftW).forEach((l) => { doc.text(l, L, ly); ly += 5.6; });
  text(9, "normal", grey);
  wrap(CANDIDATE.level, leftW).forEach((l) => { doc.text(l, L, ly + 0.5); ly += 4.4; });
  ly += 2.5;
  text(9, "normal", dark);
  [CANDIDATE.location, CANDIDATE.email, CANDIDATE.phones].forEach((l) => { doc.text(l, L, ly); ly += 4.6; });
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37

  let ry = y + 5;
  text(10.5, "bold", dark);
  wrap(company, rightW).forEach((l) => { doc.text(l, rightX, ry); ry += 5.2; });
  text(10, "normal", dark);
  const rLines = [];
  if (address) rLines.push(...wrap(address, rightW));
  rLines.push(...wrap(`À l'attention de ${recipient}`, rightW));
  if (service) rLines.push(...wrap(service, rightW));
  rLines.forEach((l) => { doc.text(l, rightX, ry); ry += 5; });
  doc.setDrawColor(...accent).setLineWidth(0.5).line(rightX - 4, y + 1, rightX - 4, ry - 3);

  y = Math.max(ly, ry) + 9;

  // Objet (avant « Madame, Monsieur, »)
  const boxH = 9;
  doc.setFillColor(...tint(accent, 0.9)).rect(L, y, U, boxH, "F");
  doc.setFillColor(...accent).rect(L, y, 1.1, boxH, "F");
  text(10.5, "bold", dark);
  doc.text("Objet :", L + 5, y + 5.9);
  const objW = doc.getTextWidth("Objet :");
  text(10.5, "normal", dark);
<<<<<<< HEAD
  doc.text(fill(t.subject), L + 5 + objW + 1.8, y + 5.9);
=======
  doc.text(t.subject, L + 5 + objW + 1.8, y + 5.9);
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
  y += boxH + 10;

  // Corps de la lettre (texte justifié)
  text(10.5, "normal", dark);
  doc.text("Madame, Monsieur,", L, y);
  y += 8;

  const LH = 5.5;
  text(10.3, "normal", dark);
<<<<<<< HEAD
  t.paragraphs.forEach((para) => {
    const lines = wrap(fill(para), U);
    lines.forEach((line, i) => {
      ensure(LH);
      const words = line.split(" ");
      if (i === lines.length - 1 || words.length < 2) {
=======
  t.paragraphs.forEach((p) => {
    const lines = wrap(fill(p, company), U);
    lines.forEach((line, i) => {
      ensure(LH);
      const words = line.split(" ");
      const isLast = i === lines.length - 1;
      if (isLast || words.length < 2) {
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
        doc.text(line, L, y);
      } else {
        const total = words.reduce((s, w) => s + doc.getTextWidth(w), 0);
        const gap = (U - total) / (words.length - 1);
        let x = L;
        words.forEach((w) => { doc.text(w, x, y); x += doc.getTextWidth(w) + gap; });
      }
      y += LH;
    });
    y += 3.2;
  });

  // Date et signature en bas
  ensure(38);
  y += 4;
  text(10, "normal", dark);
<<<<<<< HEAD
  doc.text(`Fait à ${p.city}, le ${formatDateFr(new Date())}`, W - R, y, { align: "right" });
  y += 22;
  text(10.5, "bold", dark);
  doc.text(p.name, W - R, y, { align: "right" });
  text(8.8, "normal", grey);
  doc.text(`${vars.Etudiant} en ${p.field} - ${p.school}`, W - R, y + 5, { align: "right" });

  // Décor et pied de page sur chaque page
  const pages = doc.getNumberOfPages();
  for (let n = 1; n <= pages; n++) {
    doc.setPage(n);
=======
  doc.text(`Fait à ${CANDIDATE.city}, le ${formatDateFr(new Date())}`, W - R, y, { align: "right" });
  y += 22;
  text(10.5, "bold", dark);
  doc.text(CANDIDATE.name, W - R, y, { align: "right" });
  text(8.8, "normal", grey);
  doc.text(`Étudiant en Génie Logiciel - ${CANDIDATE.school}`, W - R, y + 5, { align: "right" });

  // Décor et pied de page sur chaque page
  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
    doc.setFillColor(...accent);
    if (sidebar) {
      doc.rect(0, 0, 5.5, H, "F");
      doc.setFillColor(...tint(accent, 0.55)).rect(5.5, 0, 1.7, H, "F");
    } else {
      doc.rect(0, 0, W, 5.5, "F");
      doc.setFillColor(...tint(accent, 0.55)).rect(0, 5.5, W, 1.7, "F");
    }
    doc.setDrawColor(216, 221, 229).setLineWidth(0.2).line(L, H - 13.5, W - R, H - 13.5);
    text(8, "normal", [102, 112, 133]);
<<<<<<< HEAD
    doc.text(`${p.name}  |  ${p.email}  |  ${p.phone}`, L, H - 9);
    if (pages > 1) doc.text(`Page ${n}/${pages}`, W - R, H - 9, { align: "right" });
=======
    doc.text(`${CANDIDATE.name}  |  ${CANDIDATE.email}  |  ${CANDIDATE.phones}`, L, H - 9);
    if (pages > 1) doc.text(`Page ${p}/${pages}`, W - R, H - 9, { align: "right" });
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
  }

  const d = new Date();
  const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const blob = doc.output("blob");
  return { url: URL.createObjectURL(blob), filename: `Lettre_stage_${safeName(company)}_${stamp}.pdf` };
}
