// Kullanıcıya kaç adet meyve girmek istediğini soralım.
// Söylediği adet kadar meyve ismini prompt ile eklesin.
// Yazılan her bir meyveyi diziye ekleyelim
// Eklenen meyvelerin hepsini console'a yazdıralım. 

let meyveler = [];

function eklenecekMeyve () {
  let meyveSayisi = prompt('Kac tane meyve eklemek istiyorsunuz? ');
  
  for (let i = 0; i < meyveSayisi; i++){
    let meyve = prompt(`${i + 1}. meyvenin ismini giriniz:`);
    meyveler.push(meyve);
  }
  console.log('Eklenen meyveler: ');
  for (let i = 0; i < meyveler.length; i++) {
    
    console.log(meyveler[i]);
  }
}

eklenecekMeyve();