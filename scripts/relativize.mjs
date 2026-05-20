#!/usr/bin/env node
// Rewrite absolute asset/page URLs in the static export to be relative,
// so the site can be hosted under any subpath without server config.
//
// For each HTML file in out/, compute the depth from the out/ root and
// prepend the matching number of "../" to root-relative URLs. Hash-only
// links (#foo) and non-root links (http://, mailto:, data:, etc.) are
// left untouched. Cross-page hashes like "/#lyt" become "<prefix>#lyt"
// (i.e. they target the page that lives at the equivalent depth).

import { promises as fs } from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (e.isFile() && (full.endsWith(".html") || full.endsWith(".css")))
      files.push(full);
  }
  return files;
}

function relPrefixFor(filePath) {
  const rel = path.relative(OUT, path.dirname(filePath));
  if (rel === "" || rel === ".") return "./";
  const depth = rel.split(path.sep).length;
  return "../".repeat(depth);
}

function rewriteHtml(content, prefix) {
  return content
    // attributes that may hold a URL: href, src, srcset, content (og:image)
    .replace(
      /\b(href|src|content)=("|')(\/(?!\/)[^"']*)\2/g,
      (_, attr, q, url) => `${attr}=${q}${prefix}${url.slice(1)}${q}`,
    )
    .replace(/\bsrcset=("|')([^"']+)\1/g, (_, q, set) => {
      const rewritten = set
        .split(",")
        .map((part) => {
          const t = part.trim();
          if (!t) return t;
          const [u, ...rest] = t.split(/\s+/);
          if (u.startsWith("/") && !u.startsWith("//"))
            return [`${prefix}${u.slice(1)}`, ...rest].join(" ");
          return t;
        })
        .join(", ");
      return `srcset=${q}${rewritten}${q}`;
    });
}

function rewriteCss(content, prefix) {
  return content.replace(
    /url\((\s*)(["']?)(\/(?!\/)[^)"']*)\2(\s*)\)/g,
    (_, lead, q, url, trail) => `url(${lead}${q}${prefix}${url.slice(1)}${q}${trail})`,
  );
}

const files = await walk(OUT);
let changed = 0;
for (const f of files) {
  const prefix = relPrefixFor(f);
  const before = await fs.readFile(f, "utf8");
  const after = f.endsWith(".html")
    ? rewriteHtml(before, prefix)
    : rewriteCss(before, prefix);
  if (after !== before) {
    await fs.writeFile(f, after);
    changed++;
  }
}
console.log(`relativize: rewrote ${changed} / ${files.length} files`);
