const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strengthText');
const message = document.getElementById('message');

// Check password strength
passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let strength = '';

  if(password.length < 6) strength = 'Weak';
  else if(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8) strength = 'Strong';
  else strength = 'Medium';

  strengthText.textContent = `Strength: ${strength}`;
  if(strength === 'Weak') strengthText.style.color = 'red';
  else if(strength === 'Medium') strengthText.style.color = 'orange';
  else strengthText.style.color = 'darkgreen';
});

// Submit password to backend
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = passwordInput.value;

  const res = await fetch('/check-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  message.textContent = data.message;
});








// const form = document.getElementById('passwordForm');
// const passwordInput = document.getElementById('password');
// const strengthText = document.getElementById('strengthText');
// const message = document.getElementById('message');

// Check Strength Pasword
// passwordInput.addEventListener('input', () =>{
//   const password = passwordInput.value;
//   let strength = '';

//   if(password.length <6) strength = "Weak";
//   else if(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match >=8) strength = 'Strong';

//   else strength = "Medium";

//   strengthText.textContent = `Strength: ${strength}`;
//   if(strength === 'Weak') strengthText.style.color = 'red';
//   else if(strength === 'Medium') strength.style.color = 'orange';
//   else strengthText.style.color = 'green';
// });
  //submit password to backend
  // form.addEventListener('submit', async (e) =>{
  //   e.preventDefault();
  //   const username = document.getElementById('username').value;
  //   const password = passwordInput.value;

  //   const res = await fetch ('/check-password',{
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json' },
  //     body: JSON.stringify({username, password})
  //   });
  //   const data = await res.json();
  //   message.textContent = data.message
  // });
