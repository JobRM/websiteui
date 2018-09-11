function minlengthValidationMessage(err, field) {
  return `Should have at least ${field.templateOptions.minLength} characters`;
}

function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${
    field.templateOptions.maxLength
  } characters`;
}

function minValidationMessage(err, field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export const validationMessages = [
  { name: 'required', message: 'This field is required!' },
  { name: 'minlength', message: minlengthValidationMessage },
  { name: 'maxlength', message: maxlengthValidationMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage }
];
