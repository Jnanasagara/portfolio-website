<script setup lang="ts">
import { Button } from 'frappe-ui';
</script>

<template>
  <Button id="theme-toggle" class="theme-toggle" label="Toggle color theme" :aria-pressed="false">
    <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
    <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.3 15.4A8.8 8.8 0 0 1 8.6 3.7 8.8 8.8 0 1 0 20.3 15.4Z" /></svg>
    <span class="theme-word theme-word-light">LIGHT</span>
    <span class="theme-word theme-word-dark">DARK</span>
  </Button>
</template>

<style>
.theme-toggle { display: inline-flex !important; align-items: center; border: 1px solid var(--line) !important; background: transparent !important; color: var(--text) !important; border-radius: 2px !important; box-shadow: none !important; font: 500 .65rem/1 var(--mono) !important; letter-spacing: .12em; padding: .65rem .85rem !important; min-height: 2.45rem; cursor: pointer; transition: border-color .25s, color .25s, background .25s; }
.theme-toggle:hover { border-color: var(--accent) !important; color: var(--accent) !important; background: var(--surface) !important; }
.theme-toggle:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.theme-toggle > .truncate { display:inline-flex; align-items:center; justify-content:center; gap:.55rem; line-height:1; }
.theme-icon { display:block; flex:none; width:16px; height:16px; }
.theme-word { display:block; line-height:1; }
:root[data-theme='dark'] .theme-word-dark, :root[data-theme='dark'] .theme-icon-moon, :root[data-theme='light'] .theme-word-light, :root[data-theme='light'] .theme-icon-sun { display: none; }
@media (max-width: 660px) { .theme-word { display: none; } .theme-toggle { padding: .68rem !important; } }
</style>
