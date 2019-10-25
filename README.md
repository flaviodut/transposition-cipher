## Cifra de transposição colunar com JavaScript

_(Also know as Columnar Transposition Cipher)_

Gosto bastante de história em geral e depois que vi o filme que trata da equipe de criptografia liderada por Alan Turing, "O jogo da imitação", acabei recebendo a indicação do livro que conta a história da criptografia ao longo dos séculos.

Por curiosidade, resolvi aplicar o conceito de uma das técnicas antigas de criptografia apresentadas no livro e escrevi esse programa.   

Abaixo, segue o trecho do livro que explica o funcionamento da __transposição colunar__ e que me deixou curioso para implementar uma solução:

> Depois da Batalha da Jutlândia, em junho de 1916, os alemães recorreram principalmente a seus submarinos para atacar os britânicos. Eles usavam o mesmo livro de códigos, mas supercifrado com transposição colunar.

> Para misturar as letras usando transposição colunar, a mensagem é escrita em linhas de comprimento fixado pela palavra-chave. Se a mensagem "attack British fleet at dawn tomorrow" (atacar a frota britânica amanhã ao amanhecer) for cifrada usando a palavra-chave `UBOATS`, a tabela ficará assim:

| U | B | O | A | T | S |
|---|---|---|---|---|---|
| a | t | t | a | c | k |
| b | r | i | t | i | s |
| h | f | l | e | e | t |
| a | t | d | a | w | n |
| t | o | m | o | r | r |
| o | w | j | q | r | w |

> As células que restarem na última linha recebem letras nulas. Então, as colunas são transpostas, obedecendo à ordem alfabética da palavra-chave (ABOSTU):

| A | B | O | S | T | U |
|---|---|---|---|---|---|
| a | t | t | k | c | a |
| t | r | i | s | i | b |
| e | f | l | t | e | h |
| o | t | d | n | w | a |
| o | o | m | r | r | t |
| q | w | j | w | r | q |

> Em seguida, a mensagem é transmitida coluna a coluna, e o texto fica:

> ATEOOQ TRFTOW TILDMJ KSTNRW CIEWRR ABHATO

> Remover as letras nulas produz um texto cifrado de comprimento desigual, o que o torna mais fácil de decifrar. Para decifrar, inverte-se o processo - uma tarefa simples para quem tem a palavra-chave.

> Para confundir ainda mais os decifradores, a mensagem pode ser cifrada duas vezes, usando a mesma palavra-chave ou outra diferente. A marinha alemã não fazia isso, porque já estavam cifrando texto codificado.

> Para aumentar a segurança, os alemães mudaram seu livro de códigos em agosto de 1916. Mas, na noite de 23 de setembro, o zepelim L32 foi derrubado em Essex, matando os 22 tripulantes. Um exemplar chamuscado do novo livro de códigos foi encontrado entre os destroços. Outro exemplar foi recuperado por um mergulhador num submarino afundado no litoral de Kent. Assim, os decifradores da Sala 40 puderam continuar como antes.

### Referência bibliográfica

CIMINO, Al. A história da quebra dos códigos secretos. Ed. M.Books, 2018, p. 64. ISBN 978-85-7680-304-1.

### Links de interesse

* [Transposition cipher (Wikipedia EN)](https://en.wikipedia.org/wiki/Transposition_cipher)
* [Cifra de transposição (Wikipedia PT)](https://pt.wikipedia.org/wiki/Cifra_de_transposi%C3%A7%C3%A3o)
