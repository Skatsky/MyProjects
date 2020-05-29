// BUDGET CONTROLLER
var budgetController = (function() {

    

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        inputType: 'add__type',
        inputDescription: 'add__description',
        inputValue: 'add__value',
        inputButton: '.add__btn',
    }

    return {
        getInput : function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        }
    };
})();

// CLOGAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var input = UICtrl.getInput();
    };

    return {
        init: function () {
            
        }
    }

})(budgetController, UIController);