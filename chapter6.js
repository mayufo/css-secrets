// console.log($('.image-slider'));
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

$$('.image-slider').forEach(function (sel) {
    var div = document.createElement('div');
    var img = sel.querySelectorAll('img')[0];
    div.appendChild(img);
    sel.insertBefore(div, sel.childNodes[0]);

    var range = document.createElement('input');
    range.type = 'range';
    range.oninput = function () {
        div.style.width = this.value + '%';
    };
    sel.appendChild(range);
});