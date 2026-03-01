// Test form submission exactly as the React app does it
const formData = new FormData();
formData.append('name', 'Test User');
formData.append('email', 'test@example.com');
formData.append('phone', '+355 69 123 4567');
formData.append('birth_date', '2000-01-01');
formData.append('address', 'Test Address, Tirana');
formData.append('school', 'Shkolla 9-vjecare');
formData.append('message', 'Test registration message');
formData.append('submission_date', new Date().toLocaleString('sq-AL'));

fetch('https://formsubmit.co/ajax/qfp_donbosko@yahoo.it', {
  method: 'POST',
  body: formData
})
.then(response => {
  console.log('Response status:', response.status);
  return response.json();
})
.then(result => {
  console.log('Form submission result:', result);
})
.catch(error => {
  console.error('Form submission error:', error);
});
