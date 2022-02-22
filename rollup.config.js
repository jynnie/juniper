import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";

import packageJson from "./package.json";

export default {
  input: "./package/index.tsx",
  output: [
    {
      file: packageJson.browser,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    sass({
      include: [
        "./package/styles/**/*.scss",
        "./package/styles/**/*.sass",
        "./package/styles/**/*.css",
      ],
      output: "./dist/style.css",
      failOnError: true,
    }),
    typescript({
      lib: ["es5", "es6", "dom"],
      target: "es5",
      tsconfig: "./tsconfig.rollup.json",
    }),
  ],
  external: ["react", "react-feather"],
};
