const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateExperienceInput = data => {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.monthStart = !isEmpty(data.monthStart) ? data.monthStart : '';
    data.yearStart = !isEmpty(data.yearStart) ? data.yearStart : '';

    if(Validator.isEmpty(data.title)) 
        errors.title = 'Experience title field is required.';
    
    if(Validator.isEmpty(data.company)) 
        errors.company = 'Company field is required.';

    if(Validator.isEmpty(data.monthStart)) 
        errors.monthStart = 'The month start field is required.';

    if(Validator.isEmpty(data.yearStart)) 
        errors.yearStart = 'The year start field is required.';

    return {
        errors,
        isValid: isEmpty(errors)
    }
}