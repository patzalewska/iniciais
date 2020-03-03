let name = prompt("Qual seu nome e sobrenome?");
let firstInitial = name.slice(0,1);
let secondInitialPosition = name.indexOf(" ") + 1;
let secondInitial = name.slice(secondInitialPosition, secondInitialPosition + 1);

document.write("Suas iniciais são " + firstInitial.toUpperCase() + secondInitial.toUpperCase() );
