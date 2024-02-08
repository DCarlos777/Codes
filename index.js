const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      Respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      Correta: 2 // Resposta C (const myVar;)
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      Respostas: [
        "==",
        "===",
        "!=",
      ],
      Correta: 1 // Resposta B (===)
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      Respostas: [
        "push()",
        "append()",
        "concat()",
      ],
      Correta: 0 // Resposta A (push())
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      Respostas: [
        "for (let i = 0; i < 10; i++) {}",
        "for (i = 0; i < 10; i++) {}",
        "for (var i = 0; i < 10; i++) {}",
      ],
      Correta: 0 // Resposta A (for (let i = 0; i < 10; i++) {})
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      Respostas: [
        "Selecionar um elemento HTML pelo seu ID",
        "Selecionar um elemento HTML pelo seu nome de classe",
        "Selecionar um elemento HTML pelo seletor CSS",
      ],
      Correta: 2 // Resposta C (Selecionar um elemento HTML pelo seletor CSS)
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      Respostas: [
        "Remove um evento de um elemento HTML",
        "Adiciona um evento a um elemento HTML",
        "Atualiza o estilo de um elemento HTML",
      ],
      Correta: 1 // Resposta B (Adiciona um evento a um elemento HTML)
    },
    {
      pergunta: "Qual é o resultado da expressão 'typeof []' em JavaScript?",
      Respostas: [
        "array",
        "object",
        "undefined",
      ],
      Correta: 1 // Resposta B ('object')
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof 42);?",
      Respostas: [
        "number",
        "string",
        "undefined",
      ],
      Correta: 0 // Resposta A ('number')
    },
    {
      pergunta: "Como você acessa o terceiro elemento de um array chamado 'myArray' em JavaScript?",
      Respostas: [
        "myArray[2]",
        "myArray[3]",
        "myArray[4]",
      ],
      Correta: 0 // Resposta A (myArray[2])
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      Respostas: [
        "// Comentário",
        "<!-- Comentário -->",
        "/* Comentário */",
      ],
      Correta: 0 // Resposta A (// Comentário)
    },
  
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas) {
  
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.Respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.Respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.Correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
  
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
  
  
  
  
    quiz.appendChild(quizItem)
  
  
  
  }
  
  
  
  
  
  
  
  