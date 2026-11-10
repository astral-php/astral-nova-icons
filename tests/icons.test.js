import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const root = new URL('../dist/', import.meta.url);
const svg = readFileSync(new URL('icons.svg', root), 'utf8');
const css = readFileSync(new URL('nova-icons.css', root), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('icons.json', root), 'utf8'));

const ids = [...svg.matchAll(/id="(nova-icon-[^"]+)"/g)].map((x) => x[1]);
const names = ids.map((id) => id.replace(/^nova-icon-/, ''));

test('sprite has unique symbol ids', () => {
  assert.equal(ids.length, new Set(ids).size);
  assert.ok(ids.length >= 55, `expected >= 55 icons, got ${ids.length}`);
});

test('manifest lists every sprite icon', () => {
  assert.deepEqual([...names].sort(), [...manifest.icons].sort());
});

test('size modifiers are documented in CSS', () => {
  for (const size of ['sm', 'md', 'lg', 'xl']) {
    assert.match(css, new RegExp(`\\.nova-icon--${size}\\b`));
  }
});

test('filled helpers exist', () => {
  assert.match(css, /\.nova-icon--filled\b/);
  for (const name of manifest.filled) {
    assert.ok(names.includes(name), `missing filled icon ${name}`);
  }
});

test('no script tags in sprite', () => {
  assert.doesNotMatch(svg, /<script/i);
});

test('core starter icons remain available', () => {
  for (const name of ['home', 'user', 'shield', 'code', 'puzzle', 'palette', 'chevron-right']) {
    assert.ok(names.includes(name), `missing ${name}`);
  }
});
