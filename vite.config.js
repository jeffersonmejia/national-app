import cssPurge from "vite-plugin-purgecss";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
	root,
	plugins: [
		cssPurge(),
		createHtmlPlugin({
			minify: true,
			removeComments: true,
			collapseWhitespace: true,
		}),
	],
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, "index.html"),
				/*agencies: resolve(root, "src/agencies.html"),
				credit: resolve(root, "src/credit.html"),
				custom: resolve(root, "src/custom.html"),
				invest: resolve(root, "src/invest.html"),
				loan: resolve(root, "src/loan.html"),
				panel: resolve(root, "src/panel.html"),
				register: resolve(root, "src/register.html"),
				schedule: resolve(root, "src/schedule.html"),
				support: resolve(root, "src/support.html"),
				virtual: resolve(root, "src/virtual.html"),*/
			},
		},
	},
});
