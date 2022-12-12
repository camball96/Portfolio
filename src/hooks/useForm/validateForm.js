export default function validateForm(values) {
    let errors = {}

    if(!values.name) {
        errors.name = 'Name is required'
    }

    if(!values.company) {
        errors.company = 'Company is required'
    }

    if(!values.email) {
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    return errors;
}