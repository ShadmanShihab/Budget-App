//Budget controller
var budgetController = (function(){
    //code here

    

})();



//UI Controller
var UIController = (function(){
    //code here

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };


    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }
})();



//Global App Controller
var controller = (function(budgetCtrl,  UICtrl){
    //code here
    var setUpEventListeners = function(){
        var DOMstrings = UIController.getDOMstrings();

        document.querySelector(DOMstrings.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode == 13 || event.which == 13){
                ctrlAddItem();
            }
        });
    }




    var ctrlAddItem = function(){
        // 1. Get the field input data
        var input = UIController.getInput();
        


        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget
    }

    return{
        init: function() {
            console.log('Application has started')
            setUpEventListeners();
        }
    }

 

})(budgetController, UIController);

controller.init();