// do {
//     var p = prompt('pilih : gajah, semut, orang');
//     var comp = Math.random();

//     if( comp < 0.34 ) {
//         comp = 'gajah';
//     } 
//     else if( comp >= 0.34 && comp < 0.67 ) {
//         comp = 'orang';
//     } 
//     else {
//         comp = 'semut';
//     }

//     var hasil = '';
//     if( p == comp ) {
//         hasil = 'SERI!';
//     } 
//     else if( p == 'gajah' ) {
//         hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
//     } 
//     else if( p == 'orang' ) {
//         hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
//     } 
//     else if( p == 'semut' ) {
//         hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
//     } 
//     else {
//         hasil = 'memasukkan pilihan yang salah!';
//     }

//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     var lagi = confirm('lagi?');
// } while(lagi == true);

// alert('terimakasih sudah bermain.');

//suwit 2.0
function getPilihanComputer () {
    const comp = Math.random();

    if( comp < 0.34 )
        return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) 
        return 'orang';
    return 'semut';
}

function getHasil (comp, player) {
    if( player == comp)
        return 'SERI!';
    if( player == 'gajah' )
        return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' )
        return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' )
        return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

function putar () {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
        if (i==gambar.length) {
            i = 0;
        }
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
let cW = 0,cL = 0, uW = 0, uL = 0 ,t = 0 ;
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            let cpuW = document.querySelector('.area-komputer .win');
            let cpuL = document.querySelector('.area-komputer .lose');
            let userW = document.querySelector('.area-player .win');
            let userL = document.querySelector('.area-player .lose');
            let tie = document.querySelector('.area-komputer .tie');

            if(hasil == 'SERI!') {
                t++;
                tie.innerHTML = t;
            }
            else if (hasil == 'MENANG!') {
                uW++;
                cL++;
                userW.innerHTML = uW;
                cpuL.innerHTML = cL;
            }
            else if (hasil == 'KALAH!') {
                uL++;
                cW++;
                userL.innerHTML = uL;
                cpuW.innerHTML = cW;
            }
        }, 1000);
    });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });