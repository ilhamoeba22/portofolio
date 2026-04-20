Place Inter font files in this folder so the app can use local fonts during production builds.

Recommended files (woff2):
- Inter-Regular.woff2
- Inter-Medium.woff2
- Inter-Bold.woff2

Options to obtain the files:

1) Download manually from Google Fonts
   - Visit https://fonts.google.com/specimen/Inter
   - Select required styles and download, then extract the woff2 files into this folder.

2) Use a helper (example using google-webfonts-helper site):
   - Visit https://google-webfonts-helper.herokuapp.com/fonts/inter?subsets=latin
   - Choose styles and copy the woff2 files into this folder (rename as listed above).

After placing the files, run:

```bash
npm run build
npm run start
```

If you prefer not to host fonts locally, remove the `next/font` usage in `app/layout.tsx` and use a system font stack in `globals.css` instead.