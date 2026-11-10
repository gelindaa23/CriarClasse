import {Cliente} from "../../src/models/Cliente"

const Andre = new Cliente(1, 'Andre Solicito', 60875354098, 410688964, new Date (1980,5,23));
console.log('Cliente 1', Andre);

Andre.calcularIdade();
console.log('Idade Andre: ', Andre.Idade);

const Janete = new Cliente(2, 'Janete de Oliveira', 50176431098, 203603746, new Date(1970, 1, 12));
console.log('Cliente 2', Janete);

Janete.calcularIdade();
console.log('Idade Janete: ', Janete.Idade);

const Jose = new Cliente(3, 'Jose de Almeida', 86237389008, 421724237, new Date(1965, 7, 13));
console.log('Cliente 3', Jose);

Jose.calcularIdade();
console.log('Idade Jose: ', Jose.Idade);