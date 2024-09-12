let currentStep = 1;

function nextStep() {
  if (currentStep < 3) {
    if (currentStep === 1 && !validateStep1()) {
      alert('Preencha todos os campos do passo 1.');
      return;
    } else if (currentStep === 2 && !validateStep2()) {
      alert('Preencha todos os campos do passo 2.');
      return;
    }

    // Esconder o step atual
    document.getElementById(`step-${currentStep}`).style.display = 'none';

    // Mostrar o próximo step
    currentStep++;
    document.getElementById(`step-${currentStep}`).style.display = 'block';

    // Atualizar o passo ativo
    updateStepIndicator();
  }
}

function prevStep() {
  if (currentStep > 1) {
    // Esconder o step atual
    document.getElementById(`step-${currentStep}`).style.display = 'none';

    // Mostrar o step anterior
    currentStep--;
    document.getElementById(`step-${currentStep}`).style.display = 'block';

    // Atualizar o passo ativo
    updateStepIndicator();
  }
}

function updateStepIndicator() {
  // Remover a classe 'active' de todos os passos
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    // Comparar com o valor de currentStep - 1 porque o array começa em 0
    if (index === currentStep - 1) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

updateStepIndicator();

function validateStep1() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const fone = document.getElementById('fone').value;
  const cpf = document.getElementById('cpf').value;

  // Removendo whatsapp da validação, pois é opcional
  return nome && email && fone && cpf;
}

function validateStep2() {
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const carroceria = document.getElementById('carroceria').value;
  const cambio = document.getElementById('cambio').value;
  const ano = document.getElementById('ano').value;
  const km = document.getElementById('km').value;
  const placa = document.getElementById('placa').value;

  return marca && modelo && carroceria && cambio && ano && km && placa;
}

function displayConfirmation() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('fone').value;

  const confirmationHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
  `;

  document.getElementById('confirmation').innerHTML = confirmationHTML;
}

function submitForm() {
  document.getElementById('steps-form').reset();
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('success-message').style.display = 'block';
}
