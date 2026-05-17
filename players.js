/**
 * players.js — Fotos de jugadores para el Álbum Panini Mundial 2026
 * 
 * Carga las fotos desde la Wikipedia API (CORS permitido desde browsers).
 * Para usar: incluir este script en index.html ANTES del cierre </body>
 * 
 * <script src="players.js"></script>
 * 
 * Para GitHub Pages: ambos archivos deben estar en la misma carpeta.
 */

// ── Mapeo ID → Título en Wikipedia (en inglés) ──────────────────────────────
const AB_WIKI_TITLES = {
  41: 'Lionel Messi',
  42: 'Cristiano Ronaldo',
  43: 'Kylian Mbappé',
  44: 'Vinícius Júnior',
  45: 'Erling Haaland',
  46: 'Jude Bellingham',
  47: 'Pedri',
  48: 'Luka Modrić',
  49: 'Alisson Becker',
  50: 'Marc-André ter Stegen',
  51: 'Mohamed Salah',
  52: 'Son Heung-min',
  53: 'Jamal Musiala',
  54: 'Kevin De Bruyne',
  55: 'Antonio Rüdiger',
  56: 'Ousmane Dembélé',
  57: 'Lamine Yamal',
  58: 'Marcus Rashford',
  59: 'Harry Kane',
  60: 'Neymar',
  61: 'Luis Díaz (footballer, born 1997)',
  62: 'James Rodríguez',
  63: 'Julián Álvarez',
  64: 'Rodrigo Hernández Cascante',
  65: 'Neymar',
  66: 'Robert Lewandowski',
  67: 'Thibaut Courtois',
  68: 'Lautaro Martínez',
  69: 'Ángel Di María',
  70: 'Antoine Griezmann',
  71: 'Victor Osimhen',
  72: 'Eduardo Camavinga',
  73: 'Jamal Musiala',
  74: 'Antonio Rüdiger',
  75: 'Lamine Yamal',
  76: 'Rodrygo',
  77: 'Alisson Becker',
  78: 'Son Heung-min',
  79: 'Mohamed Salah',
  80: 'Kevin De Bruyne',
  81: 'Lautaro Martínez',
  82: 'Roberto Firmino',
  83: 'James Rodríguez',
  84: 'Darwin Núñez',
  85: 'Hirving Lozano',
  86: 'Christian Pulisic',
  87: 'Alphonso Davies',
  88: 'Enner Valencia',
  89: 'Arturo Vidal',
  90: 'Paolo Guerrero',
  91: 'Antoine Griezmann',
  92: 'Kylian Mbappé',
  93: 'Gavi (footballer)',
  94: 'Ferran Torres',
  95: 'Thomas Müller',
  96: 'Jamal Musiala',
  97: 'Phil Foden',
  98: 'Bruno Fernandes (midfielder)',
  99: 'Rafael Leão',
  100: 'Achraf Hakimi',
  101: 'Karim Benzema',
  102: 'Robert Lewandowski',
  103: 'Virgil van Dijk',
  104: 'Marc-André ter Stegen',
  105: 'Thibaut Courtois',
  106: 'Bernardo Silva',
  107: 'Riyad Mahrez',
  108: 'Ivan Perišić',
  109: 'Nicolò Barella',
  110: 'Federico Valverde',
};

// ── Caché en localStorage ──────────────────────────────────────────────────
const AB_PHOTO_CACHE_KEY = 'ab_player_photos_v3';

function abLoadPhotoCache() {
  try {
    const raw = localStorage.getItem(AB_PHOTO_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch(e) { return {}; }
}

function abSavePhotoCache(cache) {
  try { localStorage.setItem(AB_PHOTO_CACHE_KEY, JSON.stringify(cache)); } catch(e) {}
}

// ── Fetch desde Wikipedia API (CORS habilitado con origin=*) ───────────────
async function abFetchWikiPhoto(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=300&format=json&origin=*`;
  const resp = await fetch(url);
  const data = await resp.json();
  const pages = data.query.pages;
  const page = Object.values(pages)[0];
  return page?.thumbnail?.source || null;
}

// ── Carga progresiva: fetch en lotes, actualiza imágenes en DOM ───────────
async function abLoadPlayerPhotos() {
  // Asegurarse de que AB_PHOTOS exista (definido en index.html)
  if (typeof AB_PHOTOS === 'undefined') {
    window.AB_PHOTOS = {};
  }

  const cache = abLoadPhotoCache();
  const missing = [];

  // Populate AB_PHOTOS from cache first (instant)
  for (const [id, title] of Object.entries(AB_WIKI_TITLES)) {
    const numId = parseInt(id);
    if (cache[id]) {
      AB_PHOTOS[numId] = cache[id];
    } else {
      missing.push({ id: numId, strId: id, title });
    }
  }

  // Re-render album if open and we had cached data
  if (Object.keys(cache).length > 0) {
    try { if (typeof abRenderGrid === 'function') abRenderGrid(); } catch(e) {}
  }

  if (missing.length === 0) return;

  // Fetch missing in batches of 10 (Wikipedia allows up to 50 titles per request)
  const BATCH = 10;
  for (let i = 0; i < missing.length; i += BATCH) {
    const batch = missing.slice(i, i + BATCH);
    const titles = batch.map(p => p.title).join('|');
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=pageimages&pithumbsize=300&format=json&origin=*`;
      const resp = await fetch(url);
      const data = await resp.json();
      const pages = data.query.pages;

      // Wikipedia returns pages indexed by page ID, match by title
      const byTitle = {};
      for (const page of Object.values(pages)) {
        if (page.thumbnail?.source) {
          byTitle[page.title.toLowerCase()] = page.thumbnail.source;
        }
      }

      for (const player of batch) {
        const thumb = byTitle[player.title.toLowerCase()];
        if (thumb) {
          AB_PHOTOS[player.id] = thumb;
          cache[player.strId] = thumb;
          // Update any visible img with this player ID immediately
          abUpdatePlayerImgs(player.id, thumb);
        }
      }

      abSavePhotoCache(cache);
    } catch(e) {
      console.warn('abLoadPlayerPhotos batch failed:', e.message);
    }

    // Small delay between batches to be respectful
    if (i + BATCH < missing.length) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  // Final re-render
  try { if (typeof abRenderGrid === 'function') abRenderGrid(); } catch(e) {}
}

// ── Update visible imgs for a given player ID without full re-render ───────
function abUpdatePlayerImgs(id, url) {
  // Stickers in the grid have a data-sid attribute we can target
  document.querySelectorAll(`[data-ab-id="${id}"] img`).forEach(img => {
    img.src = url;
  });
}

// ── Start loading when DOM is ready ───────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', abLoadPlayerPhotos);
} else {
  abLoadPlayerPhotos();
}

// ── Export for manual refresh ──────────────────────────────────────────────
window.abRefreshPhotos = function() {
  try { localStorage.removeItem(AB_PHOTO_CACHE_KEY); } catch(e) {}
  abLoadPlayerPhotos();
};

console.log('[AlbumPanini] players.js cargado — fetching fotos desde Wikipedia API...');
