const formData = {
  email: "",
  message: "",
};

// 2. Вибір форми та ключа для локального сховища
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 3. Функція для збереження даних у локальне сховище
function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// 4. Обробник події input
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Збереження без пробілів
  saveToLocalStorage();
});

// 5. Відновлення даних із локального сховища
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.assign(formData, parsedData); // Оновлення formData
      form.elements.email.value = formData.email || "";
      form.elements.message.value = formData.message || "";
  }
}
populateForm();

// 6. Обробник події submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
  }

  console.log('Submitted data:', formData);

  // Очищення після сабміту
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});