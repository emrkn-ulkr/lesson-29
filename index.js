function tasKagitmakas(kullaniciSecimi) {
    // 0=taş, 1=kağıt, 2=makas
    let pcZar = Math.floor(Math.random() * 3);
    let pcSecim = null;
    let kullaniciKucukHarfSecim = kullaniciSecimi.toLowerCase();
    let sonuc = '';
    if (pcZar === 0) pcSecim = 'taş';

    if (pcZar === 1) pcSecim = 'kağıt';

    if (pcZar === 2) pcSecim = 'makas';

    if (pcSecim === kullaniciKucukHarfSecim)
        sonuc = `Senin seçimin: ${kullaniciKucukHarfSecim}. Bilgisayarın seçimi: ${pcSecim}. Beraberlik!`;
    if (pcSecim === 'taş' && 'makas' === kullaniciKucukHarfSecim)
        sonuc = `Senin seçimin: ${kullaniciKucukHarfSecim}. Bilgisayarın seçimi: ${pcSecim}. Kaybettin!`;
    if (pcSecim === 'taş' && 'kağıt' === kullaniciKucukHarfSecim)
        sonuc = `Senin seçimin: ${kullaniciKucukHarfSecim}. Bilgisayarın seçimi: ${pcSecim}. Kazandınız!`;
    if (pcSecim === 'kağıt' && 'makas' === kullaniciKucukHarfSecim)
        sonuc = `Senin seçimin: ${kullaniciKucukHarfSecim}. Bilgisayarın seçimi: ${pcSecim}. Kazandın!`;
    if (pcSecim === 'kağıt' && 'taş' === kullaniciKucukHarfSecim)
        sonuc = `Senin seçimin: ${kullaniciKucukHarfSecim}. Bilgisayarın seçimi: ${pcSecim}. Kaybettin!`;
    if (pcSecim === 'makas' && 'taş' === kullaniciKucukHarfSecim)
        sonuc = `Senin seçimin: ${kullaniciKucukHarfSecim}. Bilgisayarın seçimi: ${pcSecim}. Kazandın!`;
    if (pcSecim === 'makas' && 'kağıt' === kullaniciKucukHarfSecim)
        sonuc = `Senin seçimin: ${kullaniciKucukHarfSecim}. Bilgisayarın seçimi: ${pcSecim}. Kaybettin!`;

    return sonuc;
}
tasKagitmakas('makas');
/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitmakas;
