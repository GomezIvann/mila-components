<p align="center">
  <a href="https://mila-components.vercel.app/">
    <img src="apps/web/common/assets/mila-icon.svg" alt="Mila icon" width="80px" />
  </a>
</p>
<h1 align="center">Monorepo structure</h1>

Mila-components is an open-source project structured as a **monorepo**, consolidating all the necessary code in a single repository.
This approach provides a more streamlined, unified, and semantic solution for managing the project efficiently.

## Monorepo structure

The monorepo is structured as follows (some folders and files are omitted for explanation purposes):

```bash
📂 apps
    📂 web                  # Next.js application for the documentation site
📂 packages
    📂 lib                  # Contains the halstack-react component library
📄 package.json             # Root package.json file, defining scripts and dependencies for the entire monorepo
📄 pnpm-lock.yaml           # Lockfile that ensures consistent installations across environments for all dependencies
📄 pnpm-workspace.yaml      # Defines the workspace configuration for pnpm, specifying the structure and package locations
📄 turbo.json               # Turborepo configuration file, specifying caching and build processes for the monorepo
```

There are two main folders here:

- `apps`: Contains documentation site and any other future Mila-related app.
- `packages`: Contains all the libraries that Mila-components is composed of.
