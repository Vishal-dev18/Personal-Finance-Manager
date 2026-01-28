async function register() {
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  if (!email || !password) {
    alert('Please fill all fields');
    return;
  }
  const res = await fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password }),
  });
  alert((await res.json()).message);
  // Redirect after successful registration
  window.location.href = "finance.html";
}
