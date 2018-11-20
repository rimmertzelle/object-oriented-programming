# Typescriot compiler

In order to transpile (see [difference between compiling en transpiling](http://www.geekhours.com/2017/03/08/difference-compiling-transpiling/)) a file from Typescript to Javascript you have to use `tsc filename.js`. However you can automate this process by using a transpile configuration file. Because TypeScript calls this procese compiling, we will use this term as wel.

**Typescript Compilation File (tsconfig.json)**

```js
  {
    "compilerOptions": {
        "sourceMap":  true,
        "removeComments": true,
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "target":"es5",
        "out": "js/main.js"
    },
    "include" : [
        "ts/**/*"
    ]
}
```

This is a simple configuration file which feeds the compiling process. If you type `tsc -w` in the folder of this file the typescript compiler will use this file to compile Typescript to JavaScript. 

- line 2: these are the compiler options
- line 3: boolean for using an sourceMap to map the JS to TS. 
- line 4: remove Comments in the compiled JavaScript
- line 5: check if there are some implicit any types used in TS.
- line 6: check if there are some implicit return types used in TS.
- line 7: which ecmascript version should the compiler use.
- line 8: what is the output file of the compiling process.
- line 11: which files and folders to compile.

For detailed description of compiler options see [tsconfig on typescript.com](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)