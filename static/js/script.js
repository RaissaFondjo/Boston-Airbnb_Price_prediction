const bedrooms = document.getElementById('bedrooms')
const security_deposit = document.getElementById('security_deposit')
const cleaning_fee = document.getElementById('cleaning_fee')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    // get the values from the inputs
    const bedroomsValue = bedrooms.Value.trim();
    const security_depositValue = security_deposit.Value.trim();
    const cleaning_feeValue = cleaning_fee.Value.trim();

    if(bedroomsValue.length >= 10) {
        //show error
        //add error class
        setErrorFor(bedrooms, 'Please enter valid Number of bedrooms');
    } else {
        //add success class
        setSuccessFor(bedrooms);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');


    // add error class
    formControl.className = 'form-control error';
    //add error message inside small
    small.innerText = message;

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
