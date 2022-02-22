# 🌿 Juniper 🍇

A React component library.

Work in progress personal project of React components built on pure CSS variables.

**This project is still in progress~**

## ✨ Getting Started

Install with either package manager.

```bash
yarn add juniper-ui
```

```bash
npm install juniper-ui
```

After installation, import the CSS into your app's entry file.

```jsx
import "juniper-ui/dist/style.css";
```

## 🔨 Development

The project's UI library files are in `package/`.

The project's documentation is a `Next.js` project, in the folder `src/`. You can run the below to start that up.

```bash
yarn install
yarn dev
```

### Using CSS and SCSS

Juniper is fully customizable from CSS only. Variables and CSS classes can be rewritten. Development uses SCSS purely for some nesting and helpers -- no SCSS variables.

Final `dist/` compiles to CSS.

## ❤️ Credits

This project builds on top of other components. Notably,

- [UI Box](https://github.com/segmentio/ui-box)
- [React Select](https://react-select.com/)
