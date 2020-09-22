/* Suddisione ad albero dei nodi
oltre ai nodi ci sono gli elementi che comprendono spazi e commenti
*/
Document ha un figlio

html

html ha due figli:
  head
  body

html ha
2 attributi
  lang="it"
  dir="ltr"

head ha 2 figli
  meta ha
    1 attributo charset con contenuto:"utf-8"
  title ha
    1 testo con contenuto:"Corso Javascipt"

body ha tre figli
  h1 ha
    1 attributo id con contenuto:"App"
    1 testo con contenuto:"App"
  section ha
    1 attributo id con contenuto:"sezione" e ha tre figli
    h3 ha
      1 testo con contenuto:"Sezione1"
    a ha
      2 attributi
        href con contenuto:"link1.html"
        class con contenuto:"c1 c2" e un
      1 testo
        con contenuto:"Link1"
    a ha
      1 attributo
        href con contenuto:"link2.html"
      1 testo con contenuto:"Link2"

  script ha
      1 attributo type con contenuto:"text/javascript"
      1 attributo src con contenuto:"Lezioni\S8_Manipolazione_del_DOM_e_gestione_eventi\86_Introduzione.js"
      1 attributo charset con contenuto:"utf-8"
