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
      ownKeys: function(inTarget) {
        var ownNames = Object.getOwnPropertyNames(inTarget);
        var ownSymbols = Object.getOwnPropertySymbols(inTarget);
        return [].concat(ownNames, ownSymbols);
      },
      isExtensible: function(inTarget) {
        this.__checkTarget(inTarget, 'isExtensible');
        return Object.isExtensible(inTarget);
      },
      preventExtensions: function(inTarget) {
        this.__checkTarget(inTarget, 'preventExtensions');
        return Object.preventExtensions(inTarget);
      },
      getOwnPropertyDescriptor: function(inTarget, inKey) {},
      getPrototypeOf: function(inTarget, inKey) {},
      setPrototypeOf: function(inTarget, inKey) {},
      __checkTarget: function(inTarget, inApi) {
        if (typeof inTarget !== 'object') {
          throw new TypeError('Reflect.' + inApi + ' called on non-object');
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReflect;
  }
})();
