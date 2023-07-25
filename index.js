/**
 * Function constructor creates ladders
 * @param {number} maxStep 
 * @param {number} minStep 
 */


function Ladder (maxStep, minStep) {
this.currentStep = 0
this.maxStep = maxStep,
this.minStep = minStep
}

/**
 * Object-prototype of function Ladder with options to change ladders.
 */
const ladderOptions = {

    showStep: function () {
        return this.currentStep
    },

    up: function () {
        if (this.currentStep < this.maxStep) {
            return ++this.currentStep
            
        }
        return `You stay on ${this.maxStep}. This is the top`
    
    },
    
    down: function () {
        if (this.currentStep > this.minStep) {
            return --this.currentStep
        }

        return `You stay on ${this.currentStep}. This is the bottom`
        
    }

}

Ladder.prototype = ladderOptions

const ladder1 = new Ladder (10, -10)