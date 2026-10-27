// Profil de l'utilisateur : stocké uniquement dans le navigateur de son appareil (localStorage).
const KEY = "letters_generator_profile_v2";

export const EMPTY_PROFILE = {
  name: "", gender: "m", city: "", address: "", email: "", phone: "",
  school: "", level: "", field: "", skills: "",
  startDate: "", duration: "six mois",
};
export const REQUIRED = ["name", "city", "email", "phone", "school", "level", "field", "startDate", "duration"];

export function loadProfile() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...EMPTY_PROFILE, ...JSON.parse(raw) } : null;
  } catch { return null; }
}
export function saveProfile(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* navigation privée : on garde en mémoire */ }
}
export function clearProfile() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
export const formatDateFr = (d) => `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
export function formatIso(iso) {
  const [y, m, d] = (iso || "").split("-").map(Number);
  return y && m && d ? `${d} ${MONTHS[m - 1]} ${y}` : iso || "";
}
const ucFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const lcFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);
const joinList = (a) => (a.length < 2 ? a.join("") : `${a.slice(0, -1).join(", ")} et ${a[a.length - 1]}`);

// Variables injectées dans les modèles ({company}, {e}, {level}...)
export function buildVars(p, company) {
  const f = p.gender === "f";
  const skills = p.skills.split(/[,;\n]+/).map((s) => s.trim()).filter(Boolean);
  const startDate = formatIso(p.startDate);
  return {
    company,
    school: p.school,
    level: lcFirst(p.level),
    Level: ucFirst(p.level),
    field: p.field,
    duration: p.duration,
    startDate,
    availability: `à partir du ${startDate}, pour une durée de ${p.duration}`,
    skillsSentence: skills.length
      ? `j'ai travaillé avec des outils et technologies tels que ${joinList(skills)}`
      : "j'ai acquis des compétences pratiques solides dans mon domaine",
    e: f ? "e" : "",
    etudiant: f ? "étudiante" : "étudiant",
    Etudiant: f ? "Étudiante" : "Étudiant",
    serieux: f ? "sérieuse" : "sérieux",
    rigoureux: f ? "rigoureuse" : "rigoureux",
    Curieux: f ? "Curieuse" : "Curieux",
    heureux: f ? "heureuse" : "heureux",
  };
}
export function fillTemplate(text, vars) {
  return Object.entries(vars).reduce((t, [k, v]) => t.split(`{${k}}`).join(v), text);
}
