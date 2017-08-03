
function indexOf(src, ptr) {

    var k = 0,
        index = -1,
        c = ptr.split("");
    for (i = 0; i < src.length; i++) {
        if (src.charAt(i) == c[k]) {
            k++;
            if (index == -1) index = i;
            if (k == ptr.length) return index;

        } else {
            k = 0;
            index = -1;
        }
    }
    return index;
}


if(typeof exports !== 'undefined') {
    exports.indexOf = indexOf;
}