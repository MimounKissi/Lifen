import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignInPage from '../steps/SignInPage.js' 
import MailBoxPage from '../steps/MailBoxPage.js';
import InformationPatient from '../steps/InformationPatient.js';

var reader = new FileReader();
const signin = new SignInPage(); 
const mailbox = new MailBoxPage(); 
const infopatient = new InformationPatient();

Given('A connected lifen user on the send box', () => {
  signin.visit();
  signin.fillEmail('kissimimoun@gmail.com');
  signin.fillPassword('Ki$$i93190');
  signin.submit(); 
  mailbox.goToSendBox();
});

And('he goes on the page information of the {string}', (patient) => {
  mailbox.choosePatient(patient);
});

And('he uploads the document {string}', (docName) => {
  mailbox.uploadDocument(docName);
});

When('he update the lastName with {string}', (lastNameUpdate) => {
  infopatient.editInformations();
  infopatient.updateLastName(lastNameUpdate);
  infopatient.submit();
});

When('he update the firstName with {string}', (firstNameUpdate) => {
  infopatient.editInformations();
  infopatient.updateFirstName(firstNameUpdate);
  infopatient.submit();
});

When('he update the birth date with {string}', (birthDate) => {
  infopatient.editInformations();
  infopatient.updateBirthDate(birthDate);
  infopatient.submit();
});

Then('the patient firstName should be {string}', (firstNameUpdate) => {
  cy.wait(100)
  infopatient.checkUpdateName(firstNameUpdate.toLowerCase());
});

Then('the patient lastName should be {string}', (lastNameUpdate) => {
  infopatient.checkUpdateName(lastNameUpdate.toUpperCase());
});

Then('the patient birth date should be {string}', (birthDate) => {
  infopatient.checkUpdateBirthDate(birthDate);
});
