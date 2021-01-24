# TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!

## Project setup

```
npm init -y
```

### typescript setup

```
npm i -g typescript
```

### typescript compile

```
tsc helloworld.ts
```

### tsconfig.js

```
tsc --init

{
  "compilerOptions": {
    "target": "ES2015",
    // "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src"
    "strict": true,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```

### tsc watch

```
tsc -w
```

### live-server setup

```
npm i live-server -g
```

### run live-server

```
live-server dist
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
