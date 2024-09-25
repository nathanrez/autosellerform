let currentStep = 1;

function nextStep() {
  if (currentStep === 1 && validateStep1()) {
    document.getElementById('step1').style.display = 'none';
    currentStep++;
    document.getElementById('step2').style.display = 'block';
  } else if (currentStep === 2 && validateStep2()) {
    document.getElementById('step2').style.display = 'none';
    currentStep++;
    document.getElementById('step3').style.display = 'block';
    displayConfirmation();
  }
}

function prevStep() {
  if (currentStep > 1) {
    if (currentStep === 2) {
      document.getElementById('step2').style.display = 'none';
      currentStep--;
      document.getElementById('step1').style.display = 'block';
    } else if (currentStep === 3) {
      document.getElementById('step3').style.display = 'none';
      currentStep--;
      document.getElementById('step2').style.display = 'block';
    }
  }
}

const modelosPorMarca = {
  audi: ["A3", "A4", "Q3"],
  bmw: ["130i", "320i", "M3", "X1", "X5"],
  chevrolet: ["Astra", "Camaro", "Celta", "Cobalt", , "Spin", "Corsa", "S10", "Tracker"],
  fiat: ["Uno", "Mobi", "500", "Strada", "Toro"],
  ford: ["Fiesta", "Fusion", "Escort", "Ecosport", "Ranger"],
  honda: ["Civic", "HRV", "Fit", "City"],
  mercedes: ["A200", "C180", "GLA200"],
  nissan: ["Versa", "Tiida", "Sentra", "L200"],
  toyota: ["Corolla", "Hillux", "Camry", "Etios"],
  volkswagen: ["Gol", "Golf", "Jetta", "Passat", "Voyage", "Fox", "Up!", "Nivus"]
};

function showModels() {
  const marcaSelecionada = document.getElementById('marca').value;
  const modeloDropdown = document.getElementById('modelo');

  modeloDropdown.innerHTML = '<option value=""></option>';

  if (marcaSelecionada && modelosPorMarca[marcaSelecionada]) {
      const modelosOrdenados = modelosPorMarca[marcaSelecionada].sort();
      modelosOrdenados.forEach(function(modelo) {
          const option = document.createElement('option');
          option.value = modelo.toLowerCase();
          option.text = modelo;
          modeloDropdown.appendChild(option);
      });
  }
}

function validateStep1() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const fone = document.getElementById('fone').value;
  const cpf = document.getElementById('cpf').value;

  return {nome, email, fone, cpf};
}

function validateStep2() {
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const carroceria = document.getElementById('carroceria').value;
  const cambio = document.getElementById('cambio').value;
  const ano = document.getElementById('ano').value;
  const km = document.getElementById('km').value;

  // Parte do upload de arquivos
  var files = document.querySelector('input[name="files"]');
  if (files) {
    files.addEventListener("change", function(file) {
      var input = file.target;
      
      var reader = new FileReader();
      
      reader.onload = function() {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL; // Exibe a imagem no elemento de saída
      };
    
      reader.readAsDataURL(input.files[0]); // Lê o primeiro arquivo
    });
  } else {
    console.error("Campo de upload de arquivo não encontrado.");
  }

  // Retorna os valores do formulário
  return {marca, modelo, carroceria, cambio, ano, km};
}

function displayConfirmation() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const fone = document.getElementById('fone').value;
  const cpf = document.getElementById('cpf').value;
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const carroceria = document.getElementById('carroceria').value;
  const cambio = document.getElementById('cambio').value;
  const ano = document.getElementById('ano').value;
  const km = document.getElementById('km').value;

  const confirmationHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${fone}</p>
    <p><strong>CPF:</strong> ${cpf}</p>
    <p><strong>Marca:</strong> ${marca}</p>
    <p><strong>Modelo:</strong> ${modelo}</p>
    <p><strong>Carroceria:</strong> ${carroceria}</p>
    <p><strong>Cambio:</strong> ${cambio}</p>
    <p><strong>Ano:</strong> ${ano}</p>
    <p><strong>Quilometragem:</strong> ${km}</p>
  `;

  document.getElementById('confirmation').innerHTML = confirmationHTML;
}

function submitForm() {
  document.getElementById('multi-step-form').reset();
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('success-message').style.display = 'block';
}