# Simple Typescript Class

```typescript
class Car {
  //attributes
  private _brand:string;
  
  //constructor for creating an object based on the class
  constructor(brand:string){
    this._brand = brand;
  }
  
  //getters and setters
  public set brand(brand:string){
    this._brand = brand;
  }
  
  public get brand():string{
    return this.
  }
  
  //other methods
  
  //in case of a game using the dom
  public draw():void{}
  public update():void{}
  
}
```

This is a simple class in TypeScript using private attributes and public methods. It also uses a setter and getter method. In Typescript it is essential to define the types. Try to find corresponding types voor de variables you are describing.

The class attributes start with a `_` for example `_brand`, because we want to use the same (class attribute) name for the set and get methodes. Do try omitting the `_` and see what happens.

### **Types**

---

If you have trouble finding the right types you can first look at this [list](<https://www.typescriptlang.org/docs/handbook/basic-types.html>) of basic types.

However in web development you are constantly working with `events` and `HTMLElements`.
- [Event types](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [HTML Element types](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

For a complete list of the types used you van view the [web api](https://developer.mozilla.org/en-US/docs/Web/API)