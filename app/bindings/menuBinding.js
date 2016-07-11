
import elliptical from '../references/elliptical';
import container from '../dependencies/container';


elliptical.binding('menu', function (node) {
    var DomEvent = container.getType('DomEvent');
    var dom = new DomEvent(node, this);
    dom.event($(window),'ui.topbar.search',onSearch);
    dom.event($(window),'ui.input.addon.press',onPress);

    function onSearch(event,data){
    	console.log(data);
    }

    function onPress(event,data){
    	console.log(data);
    }
    
    this.dispose = ()=> {
        dom.unbind();
    };

});
