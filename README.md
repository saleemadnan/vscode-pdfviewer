# vscode-pdf

Display PDF files directly in VS Code using the built-in PDF.js viewer.

![screenshot](https://user-images.githubusercontent.com/3643499/84454816-98fcd600-ac96-11ea-822c-3ae1e1599a13.gif)

## Features

- Open and view `.pdf` files directly inside VS Code
- Auto-reload when the PDF file changes on disk
- Configurable defaults: zoom level, scroll mode, spread mode, cursor tool, and sidebar visibility
- Password-protected PDF support
- Document outline (bookmarks), thumbnails, attachments, and layers panel

## Requirements

VS Code `^1.46.0`

## Extension Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `pdf-preview.default.cursor` | `select` \| `hand` | `select` | Default cursor tool |
| `pdf-preview.default.scale` | string | `auto` | Default zoom level (`auto`, `page-actual`, `page-fit`, `page-width`, or a number like `1.5`) |
| `pdf-preview.default.sidebar` | boolean | `false` | Show sidebar on load |
| `pdf-preview.default.scrollMode` | `vertical` \| `horizontal` \| `wrapped` | `vertical` | Default scroll mode |
| `pdf-preview.default.spreadMode` | `none` \| `odd` \| `even` | `none` | Default spread mode |

## Development

### Prerequisites

- Node.js >= 18
- npm

### Setup

```bash
npm install
npm run compile
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run compile` | Compile TypeScript |
| `npm run watch` | Watch and recompile on changes |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run package` | Package into `.vsix` |

### Upgrading PDF.js

1. Download the latest [Prebuilt (older browsers)](https://mozilla.github.io/pdf.js/getting_started/#download) release.
2. Extract the ZIP file.
3. Overwrite `./lib/*` with the extracted directories.
   - If `lib/web/viewer.html` has changed, apply those changes to the HTML template in `src/pdfPreview.ts`.
4. Remove the sample PDF:
   - Delete `compressed.tracemonkey-pldi-09.pdf` from `lib/web/`.
   - In `lib/web/viewer.js`, clear the `defaultUrl` value:
     ```js
     defaultUrl: {
       value: "",
       kind: OptionKind.VIEWER
     },
     ```

## Change log

See [CHANGELOG.md](CHANGELOG.md).

## License

See [LICENSE](./LICENSE).
