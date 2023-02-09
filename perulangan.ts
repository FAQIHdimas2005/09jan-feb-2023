for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (x == 5 || x == 0 || x == 10 || y == x || y + x == 10) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  document.write("<br>");
}

document.write("<br><br>")

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++)
    if ( x + y == 5 || x + y == 15 
      || y + -x == 5 || -y + x == 5) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  document.write("<br>");
}

document.write("<br>")

for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++)
      if ( y == x ||
         -y + x == 0 || -y + x == 1 ||
         -y + x == 2 || -y + x == 3 ||
         -y + x == 4 || -y + x == 5 ||
         -y + x == 6 || -y + x == 7 ||
         -y + x == 8 || -y + x == 9 ||
         -y + x == 10) {
        document.write(" * ");
      } else {
        document.write(" _ ");
      }
    document.write("<br>");
  }
// let k=0
// let h=confirm("apakah anda mau mengulang")
// // console.log(k);
//   while (h){
//     h=confirm('apakah anda mau mengulang')
    
//     k++
//   }
//   document.write('jumlah pengulangan'+k+"kali")

  for(let g=0;  g<=10; g++){
    for(let b=0; b<=10; b++)
    if(g==b||-y)
  }