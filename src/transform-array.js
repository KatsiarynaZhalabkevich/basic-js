const DISCARD_NEXT = '--discard-next',
    DISCARD_PREV = '--discard-prev',
    DOUBLE_PREV = '--double-prev',
    DOUBLE_NEXT = '--double-next';

function isControlSymbol(el) {
    return el === DISCARD_NEXT || el === DISCARD_PREV || el === DOUBLE_NEXT || el === DOUBLE_PREV;
}

//убрать след / удвоить след 1 убрать пред /удвоить пред
function isIgnoreCurEl(prev, next) {
    return prev === DISCARD_NEXT || (next === DISCARD_PREV && prev !== DOUBLE_NEXT);
}

function isAddCurEl(prev, next) {
    return (prev === DOUBLE_NEXT || next === DOUBLE_PREV) && next!==DISCARD_PREV;
}

function isAddCurELTwice(prev, next) {
    return prev === DOUBLE_NEXT && next === DOUBLE_PREV;
}

module.exports = function transform(arr) {
    let res = [];
    console.log(arr);

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (!isControlSymbol(arr[i]) && !isIgnoreCurEl(arr[i-1],arr[i+1])) {
                res.push(arr[i]);
                if (isAddCurEl(arr[i - 1], arr[i + 1])) {
                    res.push(arr[i]);
                }
                if (isAddCurELTwice(arr[i - 1], arr[i + 1])) {
                    res.push(arr[i]);

                }
            }

        }
    } else {
        throw new Error('It is not Array');
    }
    console.log(res);
    return res;

};
