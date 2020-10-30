const CustomError = require("../extensions/custom-error");
//+++
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === undefined) {
            this.chain.push('( )');
        } else {
            this.chain.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(+position) || position > this.getLength()) {
            this.chain.splice(0);
            throw new Error('Position is wrong');
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const res = this.chain.join('~~');
        this.chain.splice(0);
        return res;
    }
};

module.exports = chainMaker;
