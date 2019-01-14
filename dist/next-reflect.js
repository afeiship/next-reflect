(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxReflect = nx.declare('nx.Reflect', {
    statics: {
      apply: function(inCallback, inContext, inArgs) {
        return inCallback.apply(inContext, inArgs);
      },
      construct: function(inClass) {
        var Class = inClass.bind.apply(inClass, arguments);
        return new Class();
      },
      get: function(inTarget, inKey) {
        return inTarget[inKey];
      },
      set: function(inTarget, inKey, inValue) {
        return (inTarget[inKey] = inValue);
      },
      defineProperty: function(inTarget) {},
      deleteProperty: function(inTarget) {},
      has: function(inTarget, inKey) {},
      ownKeys: function(inTarget, inKey) {},
      isExtensible: function(inTarget) {
        if (typeof inTarget !== 'object') {
          throw new TypeError('Reflect.isExtensible called on non-object');
        }
        return Object.isExtensible(inTarget);
      },
      preventExtensions: function(inTarget, inKey) {},
      getOwnPropertyDescriptor: function(inTarget, inKey) {},
      getPrototypeOf: function(inTarget, inKey) {},
      setPrototypeOf: function(inTarget, inKey) {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReflect;
  }
})();
