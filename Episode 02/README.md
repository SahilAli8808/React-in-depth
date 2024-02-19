# Part 1

## NPM
NPM does not stand for Node Package Manager, but it manages lots of packages.

### Dependencies
Most importantly, bundlers, which bundle, clean, and cache the whole code so that we can ship it or push it to production. Examples include Vite, Parcel, and CRA.

## Types of Dependencies
1. **Dev Dependencies**
   - Generally required in development, not in production.
2. **Normal Dependencies**
   - Generally required in both development and production.

## Versioning in Dependencies
Tilde (`~`) and caret (`^`) in version numbers:
- `^1.3.4`: Automatically updates to the latest minor version (e.g., `1.3.5`) in the future.
- `~1.2.4`: Automatically updates to the latest major version (e.g., `2.3.5`) in the future.

## `package.json` vs `package-lock.json`
- `package.json`: Configuration for npm, tracking which version of a package is installed.
- `package-lock.json`: Keeps track of the exact version of packages and locks the version.

### Transitive Dependencies
When a package has other dependencies.

Integrity in `package-lock.json` ensures the production and local environments are consistent.

# Part 2

## `npx` Command
Executes the package. Example: `npx parcel file_name`.

### Parcel
- Builds the development build and hosts it to the server.
- Refreshes page via HMR (Hot Module Replacement) when changes are saved.
- File watching algorithm written in C++.
- Caching for faster builds.
- Image optimization, file compression, and minification.
- Differential bundling to support older browsers.
- Consistent hashing and tree shaking (removing unused code).

## `browserslist`
- Package that specifies which browsers are compatible with the app.
- Example: "last 2 Chrome versions".
- Check `browserslist.dev` for details.
