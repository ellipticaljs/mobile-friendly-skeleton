(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['../references/elliptical', '../dependencies/container'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('../references/elliptical'), require('../dependencies/container'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.elliptical, global.container);
        global.menuBinding = mod.exports;
    }
})(this, function (_elliptical, _container) {
    'use strict';

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _elliptical2.default.binding('menu', function (node) {
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        dom.event($(window), 'ui.topbar.search', onSearch);
        dom.event($(window), 'ui.input.addon.press', onPress);

        function onSearch(event, data) {
            console.log(data);
        }

        function onPress(event, data) {
            console.log(data);
        }

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL21lbnVCaW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSx5QkFBVyxPQUFYLENBQW1CLE1BQW5CLEVBQTJCLFVBQVUsSUFBVixFQUFnQjtBQUN2QyxZQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsWUFBSSxNQUFNLElBQUksUUFBSixDQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBVjtBQUNBLFlBQUksS0FBSixDQUFVLEVBQUUsTUFBRixDQUFWLEVBQW9CLGtCQUFwQixFQUF1QyxRQUF2QztBQUNBLFlBQUksS0FBSixDQUFVLEVBQUUsTUFBRixDQUFWLEVBQW9CLHNCQUFwQixFQUEyQyxPQUEzQzs7QUFFQSxpQkFBUyxRQUFULENBQWtCLEtBQWxCLEVBQXdCLElBQXhCLEVBQTZCO0FBQzVCLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0E7O0FBRUQsaUJBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF1QixJQUF2QixFQUE0QjtBQUMzQixvQkFBUSxHQUFSLENBQVksSUFBWjtBQUNBOztBQUVELGFBQUssT0FBTCxHQUFlLE1BQUs7QUFDaEIsZ0JBQUksTUFBSjtBQUNILFNBRkQ7QUFJSCxLQWxCRCIsImZpbGUiOiJiaW5kaW5ncy9tZW51QmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGVsbGlwdGljYWwgZnJvbSAnLi4vcmVmZXJlbmNlcy9lbGxpcHRpY2FsJztcbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cblxuZWxsaXB0aWNhbC5iaW5kaW5nKCdtZW51JywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgRG9tRXZlbnQgPSBjb250YWluZXIuZ2V0VHlwZSgnRG9tRXZlbnQnKTtcbiAgICB2YXIgZG9tID0gbmV3IERvbUV2ZW50KG5vZGUsIHRoaXMpO1xuICAgIGRvbS5ldmVudCgkKHdpbmRvdyksJ3VpLnRvcGJhci5zZWFyY2gnLG9uU2VhcmNoKTtcbiAgICBkb20uZXZlbnQoJCh3aW5kb3cpLCd1aS5pbnB1dC5hZGRvbi5wcmVzcycsb25QcmVzcyk7XG5cbiAgICBmdW5jdGlvbiBvblNlYXJjaChldmVudCxkYXRhKXtcbiAgICBcdGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJlc3MoZXZlbnQsZGF0YSl7XG4gICAgXHRjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5kaXNwb3NlID0gKCk9PiB7XG4gICAgICAgIGRvbS51bmJpbmQoKTtcbiAgICB9O1xuXG59KTtcbiJdfQ==