//---------first arey style of js---------

const calculterTriangel = document.getElementById('calculterTriangel');
calculterTriangel.addEventListener('click', function () {
  const triangeBaseiput = document.getElementById('triangeBaseiput');
  const triangeBaseiputValu = triangeBaseiput.value;
  const triange = parseFloat(triangeBaseiputValu);
  triangeBaseiput.value = '';

  const triangeBaseiputarey = document.getElementById('triangeBaseiputarey');
  const triangeBaseiputareyValu = triangeBaseiputarey.value;
  const Baseiputarey = parseFloat(triangeBaseiputareyValu);
  triangeBaseiputarey.value = '';

  const arey = 0.5 * triange * Baseiputarey;

  const triangelValu = document.getElementById('triangelValu');

  triangelValu.innerText = arey;
});

//-----------second arey style of js-----------
const rectangleAreyaSubmit = document.getElementById('rectangleAreyaSubmit');
rectangleAreyaSubmit.addEventListener('click', function () {
  const rectangleInput = document.getElementById('rectangleInput');
  const rectangleInputValu = rectangleInput.value;
  const rectangle = parseFloat(rectangleInputValu);
  rectangleInput.value = '';

  const rectangleInputBasic = document.getElementById('rectangleInputBasic');
  const rectangleInputBasicValu = rectangleInputBasic.value;
  const rectangleputarey = parseFloat(rectangleInputBasicValu);
  rectangleInputBasic.value = '';
  const areys = rectangle * rectangleputarey;

  const rectValues = document.getElementById('rectValues');
  rectValues.innerText = areys;
});

//-----------thride  arey style of js-----------
const ParallelogramSubmit = document.getElementById('ParallelogramSubmit');
ParallelogramSubmit.addEventListener('click', function () {
  const ParallelogramBasice = document.getElementById('ParallelogramBasice');
  const ParallelogramBasiceValu = ParallelogramBasice.value;
  const Parallelogram = parseFloat(ParallelogramBasiceValu);
  ParallelogramBasice.value = '';

  const ParallelogramBasicAreya = document.getElementById(
    'ParallelogramBasicAreya'
  );
  const ParallelogramBasicAreyaValu = ParallelogramBasicAreya.value;
  const Parall = parseFloat(ParallelogramBasicAreyaValu);
  ParallelogramBasicAreya.value = '';
  const areys = Parallelogram * Parall;

  const ParallValue = document.getElementById('ParallValue');
  ParallValue.innerText = areys;
});

//-----------fourth  arey style of js-----------

function myFunction() {
  const basis = myValue('rhombusBasic');
  const height = myValue('rhombusAreya');
  const valu = 0.5 * basis * height;
  areyValeSet('rhombusValue', valu);
}

//-------all section used for this function------
function myValue(inputValues) {
  const values = document.getElementById(inputValues);
  const iputvale = values.value;
  const valuInput = parseFloat(iputvale);
  return valuInput;
}

function areyValeSet(element, iputValue) {
  const areyaVale = document.getElementById(element);
  const value = (areyaVale.innerText = iputValue);
  return value;
}

//-------five  section styel withh js------
const PenSubmit = document.getElementById('PenSubmit');
PenSubmit.addEventListener('click', function () {
  const Pentagonbasic = myValue('Pentagonbasic');
  const PentagonInputAreya = myValue('PentagonInputAreya');

  const areya = 0.5 * Pentagonbasic * PentagonInputAreya;
  areyValeSet('PentagonValue', areya);
});
//-------sixe secetion is every ting done--------
const ellipSubmit = document.getElementById('ellipSubmit');
ellipSubmit.addEventListener('click', function () {
  const basice = myValue('ellipseBasice');
  const height = myValue('ellipseInputAreya');

  const areya = 0.5 * basice * height;
  areyValeSet('ellipseValue', areya);
});
