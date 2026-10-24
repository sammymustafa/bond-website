import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Allow omitting a field by destructuring it next to a rest element ({ omit, ...rest }).
      "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    },
  },
  // Build output, generated files, local reports and downloads are not linted.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "reports/**", "public/**", "src/content/registry.ts"]),
]);
