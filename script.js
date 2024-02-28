let ogr1_ad = "Ada";
let ogr1_soyadi= "Bilgi";
let ogr1_dogumTarihi = "2010";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) /3;
console.log(parseInt(ogr1_ortalama));
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "Yiğit";
let ogr2_soyadi = "Bilgi";
let ogr2_dogumTarihi = "2012";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;
console.log(parseInt(ogr2_ortalama));
console.log(ogr2_ortalama >= 50);

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
console.log(ogr1_yas);
console.log(ogr2_yas);