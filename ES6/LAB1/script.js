class NumSequence {
    #list = []; 

    constructor(start, end, step) {
        if (step <= 0) throw new Error("Step لازم يكون أكبر من 0");

        this.#genSequence(start, end, step);

        Object.defineProperties(this, {
            start: { value: start, writable: false, enumerable: false, configurable: false },
            end: { value: end, writable: false, enumerable: false, configurable: false },
            step: { value: step, writable: false, enumerable: false, configurable: false }
        });
    }

   
    #genSequence(start, end, step) {
        for (let i = start; i <= end; i += step) {
            this.#list.push(i);
        }
    }

    
    get list() {
        return [...this.#list];
    }
}


const seq = new NumSequence(1, 10, 2);
console.log(seq.list); 