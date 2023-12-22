import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from "rollup-plugin-import-css";

import pkg from "./package.json" assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: "esm",
			},
		],
		plugins: [
			peerDepsExternal(),
			typescript({ tsconfig: "./tsconfig.json" }),
			terser(),
			css({minify: true})
		]
	},
	{
		input: "src/index.ts",
		output: [{ file: pkg.types, format: "esm" }],
		plugins: [dts()],
		external: [/\.(css)$/],
	},
];