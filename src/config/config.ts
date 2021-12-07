declare const global: any;

global.PORT = process.env.PORT || 3333
global.NameProject = "API__RUNNING" 
global.Cat = `
  ──────▄▀▄─────▄▀▄
  ─────▄█░░▀▀▀▀▀░░█▄
  ─▄▄──█░░░░░░░░░░░█──▄▄
  █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█`
global.DEFAULT_HEADER = { 'Content-Type': 'application/json' }

export default global;