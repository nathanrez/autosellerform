let currentStep = 1;

function nextStep() {
  if (currentStep === 1 && validateStep1()) {
    document.getElementById('step-1').style.display = 'none';
    currentStep++;
    document.getElementById('step-2').style.display = 'block';
  } else if (currentStep === 2 && validateStep2()) {
    document.getElementById('step-2').style.display = 'none';
    currentStep++;
    document.getElementById('step-3').style.display = 'block';
    displayConfirmation();
  }
}

function prevStep() {
  if (currentStep > 1) {
    if (currentStep === 2) {
      document.getElementById('step-2').style.display = 'none';
      currentStep--;
      document.getElementById('step-1').style.display = 'block';
    } else if (currentStep === 3) {
      document.getElementById('step-3').style.display = 'none';
      currentStep--;
      document.getElementById('step-2').style.display = 'block';
    }
  }
}

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
