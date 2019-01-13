(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxReflect = nx.declare('nx.Reflect', {
    statics: {
      defineProperty: function(inTarget, inKey, inDescriptor) {},
      defineProperties: function(inTarget, inObject) {},
      getOwnPropertyDescriptor: function(inTarget, inKey) {},
      getOwnPropertyDescriptors: function(inTarget) {},
      has: function(inTarget, inKey) {},
      apply: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReflect;
  }
})();
