# Typescriot compiler

In order to transpile (see [difference between compiling en transpiling](http://www.geekhours.com/2017/03/08/difference-compiling-transpiling/)) a file from Typescript to Javascript you have to use `tsc filename.js`. However you can automate this process by using a transpile configuration file. Because TypeScript calls this procese compiling, we will use this term as wel.

**Typescript Compilation File (tsconfig.json)**

```json
{
    "compilerOptions": {
        "target": "es6",
        "sourceMap": true,
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "removeComments": true,
        "out": "build/app.js",
        "noEmitOnError": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

This is a simple configuration file which feeds the compiling process. If you type `tsc` in the folder of this file the typescript compiler will use this file to compile Typescript to JavaScript. 

- The `compilerOptions` object holds all the compiler options.
- You can to set a version of JS with the `target` attribute.
- The `out` attribute holds the final result of the compiling process. In this case the TS files will be compiled in one JS file.
- the `include` attribute holds all the files and directories to compile.
- the `exclude` attribute exludes certain files and directories from the compiling process.

For detailed description of compiler options see [tsconfig on typescript.com](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)