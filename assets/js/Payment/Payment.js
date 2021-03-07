// PROGRESS
const changeStep = (props) => {

    $("#content").empty();

    switch(props.step) {
        case 0:
            props.progressBar.setCurrentStep(0);
            paymentCheckout({container: 'content'});
            updateItemsInCheckout({container: 'items',totalContainer: 'totalPrice'});

            props.previousStep.addClass('hidden');

            props.nextStep.html('Delivery Details')
            props.nextStep.on('click', () => {
                
                changeStep({step: 1,progressBar: progressBar,previousStep: $('#previousStep'), nextStep: $('#nextStep')});

            });
            break;
        case 1:
            props.progressBar.setCurrentStep(1);

            paymentAddress({container: 'content'});

            props.previousStep.removeClass('hidden');
            props.previousStep.on('click', () => {
                changeStep({step: 0,progressBar: progressBar,previousStep: $('#previousStep'), nextStep: $('#nextStep')});
            });

            props.nextStep.html('Payment Method')
            props.nextStep.on('click', () => {
                changeStep({step: 2,progressBar: progressBar,previousStep: $('#previousStep'), nextStep: $('#nextStep')});
            });
            break;
        case 2: 
            props.progressBar.setCurrentStep(2);

            props.previousStep.on('click', () => {
                changeStep({step: 1,progressBar: progressBar,previousStep: $('#previousStep'), nextStep: $('#nextStep')});
            });

            props.nextStep.html('Complete!')
            props.nextStep.on('click', () => {
                
            });
            break;
    }

}