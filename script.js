
    (function () {
      const form = document.getElementById('contactForm');
      const alertEl = document.getElementById('formAlert');

      const fields = {
        name: {
          input: document.getElementById('name'),
          error: document.getElementById('nameError'),
          validate: (value) => {
            if (!value) return 'Name is required.';
            // Allow letters, spaces, hyphens, apostrophes and common special characters; keep it permissive
            // but prevent only obviously invalid cases like only punctuation
            const letters = /[\p{L}]/u; // at least one Unicode letter
            if (!letters.test(value)) return 'Please enter a readable name.';
            if (value.length > 100) return 'Name is too long (max 100 chars).';
            return '';
          }
        },
        email: {
          input: document.getElementById('email'),
          error: document.getElementById('emailError'),
          validate: (value) => {
            if (!value) return 'Email is required.';
            // Simple, broadly compatible email regex (per requirements)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address.';
            if (value.length > 254) return 'Email is too long (max 254 chars).';
            return '';
          }
        },
        message: {
          input: document.getElementById('message'),
          error: document.getElementById('messageError'),
          validate: (value) => {
            if (!value) return 'Message is required.';
            if (value.length < 5) return 'Message is too short (min 5 chars).';
            if (value.length > 2000) return 'Message is too long (max 2000 chars).';
            return '';
          }
        }
      };

      function setError(fieldKey, message) {
        const { input, error } = fields[fieldKey];
        error.textContent = message;
        input.setAttribute('aria-invalid', message ? 'true' : 'false');
      }

      function clearAllErrors() {
        Object.keys(fields).forEach((k) => setError(k, ''));
      }

      function validateAll() {
        let isValid = true;
        Object.entries(fields).forEach(([key, { input, validate }]) => {
          const value = String(input.value || '').trim();
          const msg = validate(value);
          setError(key, msg);
          if (msg) isValid = false;
        });
        return isValid;
      }

      // Real-time validation on blur/input
      Object.entries(fields).forEach(([key, { input, validate }]) => {
        input.addEventListener('blur', () => {
          const msg = validate(String(input.value || '').trim());
          setError(key, msg);
        });
        input.addEventListener('input', () => {
          // Clear error as user types once valid
          const msg = validate(String(input.value || '').trim());
          setError(key, msg);
        });
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Always prevent actual navigation/submission
        clearAlert();

        const ok = validateAll();
        if (!ok) {
          showAlert('Please fix the highlighted errors and try again.', 'error');
          return; // prevent form submission if invalid
        }

        // Form is valid — show success (no actual sending per requirements)
        showAlert('Success! Your inputs look good. (This demo does not send data.)', 'success');
        form.reset();
        clearAllErrors();
      });

      form.addEventListener('reset', () => {
        clearAllErrors();
        clearAlert();
      });

      function showAlert(message, type = 'success') {
        alertEl.className = `alert ${type} show`;
        alertEl.textContent = message;
      }

      function clearAlert() {
        alertEl.className = 'alert success';
        alertEl.textContent = '';
      }
    })();
 

