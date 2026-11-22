/**
 * main.ts - make.fun AI judge held entry (revised)
 * Gate: 200-270 chars, deterministic Node 22 program writing to $MAKEFUN_OUTPUT_DIR/entry.txt
 * Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const text = `The worn oak table takes the quiet weight of dusk. Outside, gray slate holds the dark soil without a sound. In the corner, a deep willow basket rests against the floorboards, carrying every dry clover untouched until morning.`;

writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
