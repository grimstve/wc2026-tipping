// cache bust
/**
 * config.template.js — Supabase configuration TEMPLATE
 *
 * Copy this file to config.js and fill in your own Supabase keys.
 * Find them at: Supabase Dashboard → Settings → API
 *
 * config.js is listed in .gitignore and must NEVER be committed.
 */

const SUPABASE_URL  = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON = 'YOUR_ANON_PUBLIC_KEY';


const CONFIG = {
  LANG: 'no',
  LEADERBOARD_REFRESH_SEC: 300,
};

var db = null;

function initSupabase() {
  try {
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
    console.log('Supabase connected');
  } catch (err) {
    console.error('Supabase init failed:', err);
  }
  return db;
}
