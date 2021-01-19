/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: { url: "/", static: true },
		src: { url: "/dist" },
	},
	plugins: [
		"@snowpack/plugin-react-refresh",
		"@snowpack/plugin-dotenv",
		"@snowpack/plugin-typescript",
		"@snowpack/plugin-webpack",
	],
	routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
	alias: {
		"@": "./src",
	},
};
