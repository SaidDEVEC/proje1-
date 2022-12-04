document.write('merhaba dünya');
 

var sayi1 = prompt('ilk sayi gir'); // 23
var sayi2 = prompt('ikinci sayi gir'); 
var pId = document.getElementById('pozel');

if (sayi1 == sayi2) {
pId.innerHTML = "sayilar eşit";

}else if (sayi1 > sayi2){
pId.innerHTML = "sayi1 büyük";
} else{
pId.innerHTML ="sayi2 büyük";
}



