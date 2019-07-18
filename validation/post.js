const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validatePostInput = data => {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : '';

    if(!Validator.isLength(data.text, {min: 0, max: 300})) 
        errors.text = 'Post must be less than 300 characters.';

    if(Validator.isEmpty(data.text)) 
        errors.text = 'Text field is required.';

    return {
        errors,
        isValid: isEmpty(errors)
    }
}