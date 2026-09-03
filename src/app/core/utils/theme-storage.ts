/** Encrypted theme preference for localStorage (not plaintext "dark"/"light"). */

const STORAGE_KEY = 'sm.ui.pref';
const LEGACY_KEY = 'portfolio-theme';
const SECRET = 'sm-portfolio-theme-v1';

export type ThemeMode = 'dark' | 'light';

function xorBytes(input: string, secret: string): string {
  let out = '';
  for (let i = 0; i < input.length; i += 1) {
    out += String.fromCharCode(input.charCodeAt(i) ^ secret.charCodeAt(i % secret.length));
  }
  return out;
}

function toBase64(value: string): string {
  return btoa(unescape(encodeURIComponent(value)));
}

function fromBase64(value: string): string {
  return decodeURIComponent(escape(atob(value)));
}

export function encodeThemePreference(mode: ThemeMode): string {
  const payload = JSON.stringify({
    v: 1,
    mode,
    ts: Date.now(),
  });
  return toBase64(xorBytes(payload, SECRET));
}

export function decodeThemePreference(raw: string | null): ThemeMode | null {
  if (!raw) return null;

  // Legacy plaintext support (one-time migration)
  if (raw === 'dark' || raw === 'light') {
    return raw;
  }

  try {
    const json = xorBytes(fromBase64(raw), SECRET);
    const data = JSON.parse(json) as { mode?: string };
    if (data.mode === 'dark' || data.mode === 'light') {
      return data.mode;
    }
  } catch {
    /* ignore corrupt values */
  }

  return null;
}

export function readStoredTheme(): ThemeMode | null {
  try {
    const encoded = localStorage.getItem(STORAGE_KEY);
    const decoded = decodeThemePreference(encoded);
    if (decoded) return decoded;

    const legacy = localStorage.getItem(LEGACY_KEY);
    return decodeThemePreference(legacy);
  } catch {
    return null;
  }
}

export function writeStoredTheme(mode: ThemeMode): void {
  try {
    localStorage.setItem(STORAGE_KEY, encodeThemePreference(mode));
    localStorage.removeItem(LEGACY_KEY);
  } catch {
    /* ignore quota / private mode */
  }
}

export { STORAGE_KEY, LEGACY_KEY };
