const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

document.getElementById('kaloriForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfa yenilenmesini engelle

    var cinsiyet = document.getElementById('cinsiyet').value;
    var yas = parseInt(document.getElementById('yas').value);
    var boy = parseInt(document.getElementById('boy').value);
    var kilo = parseInt(document.getElementById('kilo').value);
    var hareketlilik = parseFloat(document.getElementById('hareketlilik').value);
    var hedef = document.getElementById('hedef').value;

    var bazalMetabolizma;
    if (cinsiyet === 'erkek') {
        bazalMetabolizma = 66 + (13.75 * kilo) + (5 * boy) - (6.75 * yas);
    } else if (cinsiyet === 'kadın') {
        bazalMetabolizma = 655 + (9.56 * kilo) + (1.85 * boy) - (4.68 * yas);
    }

    var kaloriFaktor;
            if (hedef === 'yag-yakmak') {
                kaloriFaktor = 0.9;
            } else if (hedef === 'kilo-korumak') {
                kaloriFaktor = 1;
            } else if (hedef === 'kas-artirmak') {
                kaloriFaktor = 1.1;
            }

    var gunlukKalori = bazalMetabolizma * hareketlilik * kaloriFaktor;
    var protein = kilo * 2.2; // Kilo başına 2.2 gram protein
    var karbonhidrat = gunlukKalori * 0.45 / 4; // Günlük kalorinin %45'i karbonhidrat (her gram karbonhidrat 4 kalori)
    var yag = gunlukKalori * 0.2 / 9; // Günlük kalorinin %20'si yağ (her gram yağ 9 kalori)

    

    var sonuc = document.getElementById('sonuc');
    sonuc.innerHTML = '<h2 class="hesap-sonuc">Hesaplama Sonucu:</h2>' + 
                '<b>Günlük kalori ihtiyacınız:</b> ' + gunlukKalori.toFixed(2) + ' kalori<br>' +
                '<b>Protein ihtiyacınız:</b> ' + protein.toFixed(2) + ' gram<br>' +
                '<b>Karbonhidrat ihtiyacınız:</b> ' + karbonhidrat.toFixed(2) + ' gram<br>' +
                '<b>Yağ ihtiyacınız:</b> ' + yag.toFixed(2) + ' gram';
        });