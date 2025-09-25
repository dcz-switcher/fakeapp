/**
 * Fonction permettant de gérer les interactions du stepper
 * 
 * @param stepper #Format : document.getElementById("");
 * @param valueMin Valeur minimale
 * @param valueMax Valeur maximale
 * @param step Valeur du step d'incrémentation/décrémentation
 */
export function handleStepper(stepper, valueMin, valueMax, step) {
    const stepperInput = stepper?.querySelector('input');
    const stepperValue = stepper?.querySelector(".mds-stepper__value")

    let decrementButton; 
    let incrementButton; 

    // apply Js on a11y maj HTML
    if(stepper.querySelector(".mds-btn.mds-icon__remove")) {
        decrementButton = stepper?.querySelector('.mds-icon__remove');
        incrementButton= stepper?.querySelector('.mds-icon__add');
    } else {
        decrementButton = stepper?.querySelector('.mds-btn:has(span.mds-icon__remove)');
        incrementButton = stepper?.querySelector('.mds-btn:has(span.mds-icon__add)');
    }

    disableButton(stepperInput, valueMin, valueMax, incrementButton, decrementButton);

    stepperInput?.addEventListener("input", function () {
        let formattedValue = stepperInput.value.replace(/\D/g, '');
        stepperInput.value = formattedValue;

        stepperValue.innerText =  " " + formattedValue.toString() + " ";
        disableButton(stepperInput, valueMin, valueMax, incrementButton, decrementButton);
    });

    decrementButton?.addEventListener("click", function (e) {
        e.preventDefault();
        let newValue = stepperInput.value;
        if (parseInt(newValue) > valueMin) {
            if (step) {
                newValue = parseInt(newValue) - step;
                if (stepperInput.value.length > 0 && !Number.isInteger(parseInt(newValue) / step)) {
                    moduloValue = numRoundMultipleDown(parseInt(stepperInput.value), step);
                    moduloValue > valueMax ? moduloValue = valueMax : moduloValue = moduloValue;
                    moduloValue < valueMin ? moduloValue = valueMin : moduloValue = moduloValue;
                    newValue = moduloValue.toString();
                }
            } else newValue--;
            stepperInput.value = newValue.toString();
        } else {
            stepperInput.value = newValue.toString();
        }
        stepperValue.innerText =  " " + newValue.toString() + " ";
        disableButton(stepperInput, valueMin, valueMax, incrementButton, decrementButton);
    });

    incrementButton?.addEventListener("click", function (e) {
        e.preventDefault();
        let newValue = stepperInput.value;
        if (stepperInput.value.length > 0) {
            if (parseInt(newValue) < valueMax) {
                if (step) {
                    newValue = parseInt(newValue) + step;
                    if (!Number.isInteger(parseInt(newValue) / step)) {
                        moduloValue = numRoundMultipleUp(parseInt(stepperInput.value), step);
                        moduloValue > valueMax ? moduloValue = valueMax : moduloValue = moduloValue;
                        moduloValue < valueMin ? moduloValue = valueMin : moduloValue = moduloValue;
                        newValue = moduloValue.toString();
                    }
                } else newValue++;
                stepperInput.value = newValue.toString();
            } else {
                stepperInput.value = valueMax.toString();
            }
        } else {
            step ? stepperInput.value = valueMin + step : stepperInput.value = valueMin + 1;
        }
        stepperValue.innerText = " " + newValue.toString() + " ";
        disableButton(stepperInput, valueMin, valueMax, incrementButton, decrementButton);
    });
}

const disableButton = (stepperInput, valueMin, valueMax, incrementButton, decrementButton) => {
    if(stepperInput) {
        if (stepperInput.disabled) {
            incrementButton.disabled = true;
            decrementButton.disabled = true;
        } else {
            if (parseInt(stepperInput.value) === valueMax || parseInt(stepperInput.value) > valueMax) {
                incrementButton.disabled = true;
                decrementButton.disabled = false;
            } else if (parseInt(stepperInput.value) === valueMin || parseInt(stepperInput.value) < valueMin) {
                incrementButton.disabled = false;
                decrementButton.disabled = true;
            } else {
                decrementButton.disabled = false;
                incrementButton.disabled = false;
            }
        }
    }
}

function numRoundMultipleUp(x, y) {
    return Math.round(x / y) * y;
}

function numRoundMultipleDown(x, y) {
    return Math.floor(x / y) * y;
}
