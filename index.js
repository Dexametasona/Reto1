/**
 * @author alexander machicado gomez
 * @fileoverview this file contains all the functions of the landing page
*/

const successMessage = document.getElementById("successMessage");
/**
 * @param {event} e - Represents the event that is triggered
 * this function validates the contact form
 * it also displays a message when all input are validated
 */
function validateFields(e) {
  e.preventDefault();
  const form = document.getElementById("formContact");
  const elements = form.elements;

  let formControlElements = getFormControlElements(elements);

  let isFormInvalid = formControlElements
    .some((e) => e.validity.valueMissing);

  if (isFormInvalid) {
    form.classList.add("was-validated");
    return;
  }

  form.classList.remove("was-validated");
  showElement(successMessage);
}
/**
 * @param {HTMLElement} element 
 * this function receives an element and displays it for 3 seconds
 */
function showElement(element) {
  element.classList.remove("hidden");
  setTimeout(() => element.classList.add("hidden"), 3000);
}

/**
 * @param {HTMLFormControlsCollection} elements 
 * @returns {HTMLInputElement | HTMLTextAreaElement []}
 * this function receives an object wich contains
 * all elements of the form and returns only the elements with class form-control
 */
function getFormControlElements(elements) {
  console.log(elements)
  let formControlElements = [];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const isFormControl = element.classList.contains("form-control");
    if (isFormControl) formControlElements.push(element);
  }

  return formControlElements;
}
