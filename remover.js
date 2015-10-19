function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

function select() {
    var length = document.getElementsByClassName("R4HkWb").length;
    while(length--) {
        eventFire(document.getElementsByClassName("R4HkWb")[length], 'click');
    }

    var num = document.getElementsByClassName("xjKiLb").length;
    eventFire(document.getElementsByClassName("xjKiLb")[num-1], 'click');

    setTimeout(confirm, 2000)
    function confirm() {
        var final_num = document.getElementsByClassName("CwaK9").length;
        eventFire(document.getElementsByClassName("CwaK9")[final_num-1], 'click');
    }

    setTimeout(select, 10000)
}

setTimeout(select, 10000)