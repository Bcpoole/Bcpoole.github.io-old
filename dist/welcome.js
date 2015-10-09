System.register([], function (_export) {
  'use strict';

  var Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Welcome = function Welcome() {
        _classCallCheck(this, Welcome);

        this.heading = 'Under Construction!';
      };

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BRWEsT0FBTyxFQUlQLG1CQUFtQjs7Ozs7Ozs7O0FBSm5CLGFBQU8sWUFBUCxPQUFPOzhCQUFQLE9BQU87O2FBQ2xCLE9BQU8sR0FBRyxxQkFBcUI7Ozs7O0FBR3BCLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1COztpQkFDeEIsZ0JBQUMsS0FBSyxFQUFDO0FBQ1gsbUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUNyQzs7O2VBSFUsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7Y29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBXZWxjb21lIHtcbiAgaGVhZGluZyA9ICdVbmRlciBDb25zdHJ1Y3Rpb24hJztcbn1cblxuZXhwb3J0IGNsYXNzIFVwcGVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsdWUpe1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
