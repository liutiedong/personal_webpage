// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/blog.tsx";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/ColorMode.tsx";
import * as $$1 from "./islands/HomeNav.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/blog.tsx": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/ColorMode.tsx": $$0,
    "./islands/HomeNav.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
