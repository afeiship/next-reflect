# isExtensible
> http://es6.ruanyifeng.com/#docs/reflect


> Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。
```js
const myObject = {};
// 旧写法
Object.isExtensible(myObject) // true
// 新写法
Reflect.isExtensible(myObject) // true
// 如果参数不是对象，Object.isExtensible会返回false，因为非对象本来就是不可扩展的，而Reflect.isExtensible会报错。

Object.isExtensible(1) // false
Reflect.isExtensible(1) // 报错
```