var doSomethingWhenStops = function(){
    console.log('STOP');
}
var doSomethingWhenStarts = function(){
    console.log('START');
}
var stop = function(){
    if (typeof(t) != 'undefined') {
        doSomethingWhenStops();
        t = undefined;    
    }
};
var t;
window.document.addEventListener('mousemove', function(event){
    var X = event.pageX;
    var Y = event.pageY;
    if (typeof t != 'undefined') {
        clearTimeout(t);
    } else {
        doSomethingWhenStarts();
    }
    t = setTimeout(stop, 1000);
});
window.document.addEventListener('click', stop);