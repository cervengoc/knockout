ko.bindingHandlers['submit'] = {
    'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        ko.bindingHandlers.event.init(element, function() {
            return {
              "submit": valueAccessor()
            }
        }, allBindings, viewModel, bindingContext);
    }
};
