var km = prompt ('Scrivi il numero di km che desideri percorrere')

var età = prompt ('Scrivi la tua età')

var prezzo = km * 0.21
console.log('totale senza sconto',prezzo)

var prezzoMinorenni = prezzo * 20 / 100
console.log('prezzo scontato minorenni', prezzoMinorenni)

var prezzoOver65 = prezzo * 40 / 100
console.log('prezzo scontato over 65', prezzoOver65)



if (età < 18) {
    outcome = prezzoMinorenni
    console.log('prezzo scontato minorenni');
} else if (età > 65) { 
    outcome = prezzoOver65
    console.log('prezzo scontato over 65');
}
  


   

