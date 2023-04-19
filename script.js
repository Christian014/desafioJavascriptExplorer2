const students = [];
let studentName = [];

let firstNumber = 0;
let secondNumber = 0;
let options = 0;

let nameStudent = [];

while (options != 3){

    options = prompt(`Cadastro de alunos

    1 para cadastrar aluno
    2 para ver aluno cadastrado
    3 para fechar o sistema
        `);
        
    switch(options){
        case '1':
            studentName = prompt("Nome do estudante: ")
            firstNumber = prompt("nota da primeira prova: ")
            secondNumber= prompt("nota da segunda prova: ")

            nameStudent.push(studentName);

            resultTest(firstNumber, secondNumber, studentName)
            break;

        case '2':
            alert(nameStudent)
            break

        case '3':
            alert("Tchauu")
    };
}


function resultTest(number1, number2, nameStudent){

    let resultSum = Number(number1) + Number(number2);

    let resultSumDivision = Number(resultSum) / 2;

    if(resultSumDivision <= 5){
        alert(`${nameStudent} vc foi reprovado com a nota ${resultSumDivision}`)
    }else{
        alert(`${nameStudent} vc foi aprovado com a nota ${resultSumDivision}`)
    }
    
}
