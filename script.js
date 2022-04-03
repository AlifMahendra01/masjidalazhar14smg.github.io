var date = new Date();

var jam = date.getHours();
document.getElementById('jam').innerHTML = jam ;

var menit = date.getMinutes();
document.getElementById('menit').innerHTML =   menit ;

var tanggal = date.getDate();
document.getElementById('tanggal').innerHTML = tanggal ;

var bulan = date.getMonth();
document.getElementById('bulan').innerHTML =  bulan ;

var tahun = date.getFullYear();
document.getElementById('tahun').innerHTML =  tahun ;


