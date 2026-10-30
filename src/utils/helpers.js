export const read = (key, fallback) => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback } catch { return fallback } }
export const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)) } catch {} }
export const copyText = async (text) => { await navigator.clipboard.writeText(text) }
export const fmt = (n) => Number.isFinite(Number(n)) ? Number(n).toLocaleString(undefined,{maximumFractionDigits:6}) : '—'
