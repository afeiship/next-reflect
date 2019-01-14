# construct:
> Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。
> https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible

## sample code:
```js
function Greeting(name) {
  this.name = name;
}

// new 的写法
const instance = new Greeting('张三');

// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);
```

## impl1:
```js
// 这个是有继承的思路去创建：
// 这个对比下面的方法，不足之处在于生成的 Class 是继承自 Person 的
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function construct(inClass,inArgs) {
    function Class() {
      return inClass.apply(this, inArgs);
    }
    Class.prototype = inClass.prototype;
    Class.constructor = inClass;
    return new Class();
}
// construct(Person,['fei',100])
```


## impl2:
```js
// 这个可以实现完美的，保持 Person 构造不变
function construct(inClass /*arg1,arg2,..*/){
  var Class = inClass.bind.apply(inClass, arguments);
  return new Class();
}
construct(Person,'fei',100)
```
## impl2-2:
```js
function construct(inClass) {
    return new (Function.prototype.bind.apply(inClass, arguments));
    // or even
    // return new (Cls.bind.apply(Cls, arguments));
    // if you know that Cls.bind has not been overwritten
}
```
