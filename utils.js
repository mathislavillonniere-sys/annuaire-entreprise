export const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

export const norm = (s) =>
  String(s ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export const fmtSiren = (s) =>
  String(s || "")
    .replace(/\s/g, "")
    .replace(/(\d{3})(?=\d)/g, "$1 ");

export const fmtSiret = (s) => {
  const d = String(s || "").replace(/\s/g, "");
  return d.length === 14 ? fmtSiren(d.slice(0, 9)) + " " + d.slice(9) : d;
};

export const fmtDate = (iso) =>
  iso ? new Date(iso + "T00:00:00").toLocaleDateString("fr-FR") : "—";

export const euro = (n) =>
  n === "" || n == null || isNaN(n)
    ? "—"
    : Number(n).toLocaleString("fr-FR") + " €";

export const yearsSince = (iso) =>
  iso ? Math.floor((Date.now() - new Date(iso).getTime()) / 31557600000) : 0;
