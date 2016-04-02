(function() {
    
    function CalculatorCtrl() {
        this.leftSide;
        this.rightSide;
        this.operand;
        this.result;
    }

    CalculatorCtrl.prototype.display = function() {
        this.result = (this.leftSide || "0") + (this.operand || "") + (this.rightSide || "");
    }

    CalculatorCtrl.prototype.appendNumber = function(number) {
        if (this.operand) {
            this.rightSide = this.rightSide || 0;
            this.rightSide = 10 * this.rightSide + number;
        } else {
            this.leftSide = this.leftSide || 0;
            this.leftSide = 10 * this.leftSide + number;
        }
        this.display();
    }

    CalculatorCtrl.prototype.chooseOperand = function(operand) {
        this.operand = operand;
        this.showResult();
        this.operand = operand;
        this.display();
    }

    CalculatorCtrl.prototype.showResult = function() {
        if (this.operand && this.rightSide)
        {
            var result;
            if (this.operand == '+'){
                result = this.leftSide + this.rightSide
            } else if (this.operand == '-'){
                result = this.leftSide - this.rightSide
            }
            this.operand = undefined;
            this.rightSide = undefined;
            this.leftSide = result;
        }
        this.display();
    }

    CalculatorCtrl.prototype.reset = function(operand) {
        this.operand = undefined;
        this.rightSide = undefined;
        this.leftSide = undefined;
        this.display();
    }

    angular.module("MyApp").controller("CalculatorCtrl", CalculatorCtrl);
})();
