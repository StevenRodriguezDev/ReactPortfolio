import { useState } from 'react';
import '/src/App.css';

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from '../utils/helpers';

function Form() {
// Create state variables for the fields in the form
// We are also setting their initial values to an empty string
const [email, setEmail] = useState('');
const [userName, setUserName] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  // Based on the input type, we set the state of either email, username, and message
  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'userName') {
    setUserName(inputValue);
  } else {
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();

  // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  if (!validateEmail(email) || !userName) {
    setErrorMessage('Email or username is invalid');
    // We want to exit out of this code block if something is wrong so that the user can correct it
    return;
    // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
  }
  if (!checkMessage(message)) {
    setErrorMessage(
      `Choose a message for the account: ${userName}`
    );
    return;
  }
  alert(`Hello ${userName}`);

  // If everything goes according to plan, we want to clear out the input after a successful registration.
  setUserName('');
  setMessage('');
  setEmail('');
};


return (
  <div className="container text-center">
    <h1>Hello, {userName} Lets chat!</h1>
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Email"
      />
      <input
        value={userName}
        name="userName"
        onChange={handleInputChange}
        type="text"
        placeholder="Name"
      />
       <textarea 
       value={message}
       name="message" 
       onChange={handleInputChange}
       type="message"
       placeholder="Message"
       rows={4} 
       cols={40} 
       />
      {/* <input
        value={password}
        name="password"
        onChange={handleInputChange}
        type="password"
        placeholder="Password"
      /> */}

    <button type="submit">Submit</button>
    </form>
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
  </div>
);
}

export default Form;