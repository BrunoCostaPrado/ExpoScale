import * as esbuild from "esbuild"
// import * as devalue from "devalue"
import fs from "node:fs"

let result = await esbuild.build({
	entryPoints: ["src/app.ts"],
	bundle: true,
	outdir: "build/",
	minify: true,
	packages: "external",
	format: "esm",
	metafile: true,
	platform: "node",
	splitting: true,
	tsconfig: "tsconfig.json",
	sourcemap: true,
	minifyIdentifiers: true,
	minifySyntax: true
})

fs.writeFileSync("meta.json", JSON.stringify(result.metafile))
// fs.writeFileSync("meta1.json", devalue.stringify(result.metafile))

console.log(await esbuild.analyzeMetafile(result.metafile))
