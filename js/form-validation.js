const form = document.getElementById('contactform');

const validationRules = {
  name: (value) => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  },

  email: (value) => {
    if (!value.trim()) return "Email is required";
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(value)) return "Please enter a valid email";
    return "";
  },

  phone: (value) => {
    if (!value.trim()) return "Phone number is required";
    const regex=/^\d{10}$/;
    const digits = value.replace(/\D/g, '');
    if (!regex.test(digits)) return "Phone must be exactly 10 digits";
    return "";
  },

  message: (value) => {
    if (!value.trim()) return "Message is required";
    if (value.trim().length < 10)
      return "Message must be at least 10 characters";
    return "";
  }
};

function validateForm() {
  const errors = {};
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    const rule = validationRules[input.name];
    if (rule) {
      const error = rule(input.value);
      if (error) errors[input.name] = error;
    }
  });

  return errors;
}

function showErrors(errors) {

  // Remove old errors
  form.querySelectorAll('.error-message').forEach(el => el.remove());
  form.querySelectorAll('input, textarea').forEach(el => {
    el.classList.remove('border-red-500', 'border-2');
  });

  // Add new errors
  Object.entries(errors).forEach(([name, message]) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) return;

    input.classList.add('border-red-500', 'border-2');

    const error = document.createElement('span');
    error.className = 'error-message text-red-500 text-sm mt-1';
    error.textContent = message;

    input.parentElement.appendChild(error);
  });
}

function clearErrors() {
  form.querySelectorAll('.error-message').forEach(el => el.remove());
  form.querySelectorAll('input, textarea').forEach(el => {
    el.classList.remove('border-red-500', 'border-2');
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const errors = validateForm();

  if (Object.keys(errors).length === 0) {
    alert("✓ Form submitted successfully!");
    form.reset();
    clearErrors();
  } else {
    showErrors(errors);
  }
});