const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validatePrifileInput = data => {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    if(!Validator.isLength(data.handle, {min: 2, max: 40})) 
        errors.handle = 'Handle needs to be between 2 and 4 characters.'

    if(Validator.isEmpty(data.handle)) 
        errors.handle = 'Profile handle is required.'

    if(Validator.isEmpty(data.status)) 
        errors.status = 'Status field is required.'

    if(Validator.isEmpty(data.skills)) 
        errors.skills = 'Skills field is required.'

    if(!isEmpty(data.website)) {
        if(!Validator.isURL(data.website)) {
            errors.website = 'Not a validate URl.';
        }
    }

    if(!isEmpty(data.youtube)) {
        if(!Validator.isURL(data.youtube)) {
            errors.youtube = 'Not a validate URl.';
        }
    }

    if(!isEmpty(data.facebook)) {
        if(!Validator.isURL(data.facebook)) {
            errors.facebook = 'Not a validate URl.';
        }
    }

    if(!isEmpty(data.linkedin)) {
        if(!Validator.isURL(data.linkedin)) {
            errors.linkedin = 'Not a validate URl.';
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}