const form = document.querySelectorAll('#steps-form input')

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

  return {nome, email, fone, cpf};
}

function validateStep2() {

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
  return {marca, modelo, carroceria, cambio, ano, quilometragem};
}

function displayConfirmation() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let fone = document.getElementById('fone').value;
  let cpf = document.getElementById('cpf').value;
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let carroceria = document.getElementById('carroceria').value;
  let cambio = document.getElementById('cambio').value;
  let ano = document.getElementById('ano').value;
  let quilometragem = document.getElementById('quilometragem').value; 

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
    <p><strong>Quilometragem:</strong> ${quilometragem}</p>
  `;

  document.getElementById('confirmation').innerHTML = confirmationHTML;
}

async function submitForm() { 
  // console.log()
  let valorDescri = document.getElementById('descri').value
  let form = `
  <form action="/cadastro" id="invForm" method="POST">
    <input name="nome_vendedor" id="nome_vendedor" value="${nome.value}">
    <input name="email_vendedor" id="email_vendedor" value="${email.value}">
    <input name="fone_vendedor" id="fone_vendedor" value="${fone.value}">
    <input name="cpf_vendedor" id="cpf_vendedor" value="${cpf.value}">
    <input name="marca_carro" id="marca_carro" value="${marca.value}">
    <input name="modelo_carro" id="modelo_carro" value="${modelo.value}">
    <input name="carroceria_carro" id="carroceria_carro" value="${carroceria.value}">
    <input name="cambio_carro" id="cambio_carro" value="${cambio.value}">
    <input name="ano_carro" id="ano_carro" value="${ano.value}">
    <input name="km_carro" id="km_carro" value="${ quilometragem.value}">
    <input name="desc" id="desc" value=${valorDescri.toString()}>
  </form>
  `
  document.querySelector('body').innerHTML += form
  document.getElementById('invForm').submit()
}



