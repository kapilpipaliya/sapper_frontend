import * as sapper from '@sapper/app';

Array.prototype.i = function(val){
    if (val < 0) return this[this.length - Math.abs(val)]
    return this[val]
}

sapper.start({
	target: document.querySelector('#s')
});