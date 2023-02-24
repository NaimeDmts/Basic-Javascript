let user1 = ["Naime", "Damataşı",26];

// dict, json

let kullanici = {
    "adi": "Naime",
    "soyadi": "Damataşı",
    "yasi": 26,
    "adresi": {
        "sehir": "İstanbul",
        "ilce": "Esenyurt"
    },
    "hobiler":["sinema","spor","kitap"]
}

let bilgiler;
bilgiler = kullanici.adi;
bilgiler = kullanici.soyadi;
bilgiler = kullanici["yasi"];
bilgiler = kullanici.adresi.sehir;
bilgiler = kullanici.adresi.ilce;
bilgiler = kullanici.hobiler[2];

let kullaniciA = {
    "adi": "Naime",
    "soyadi": "Damataşı",
    "yasi": 26,
    "adresi": {
        "sehir": "İstanbul",
        "ilce": "Esenyurt"
    },
    "hobiler":["sinema","spor","kitap"]
}
let kullaniciB = {
    "adi": "Yavuzhan",
    "soyadi": "Tepebaşı",
    "yasi": 25,
    "adresi": {
        "sehir": "Bartın",
        "ilce": "Merkez"
    },
    "hobiler":["sinema","spor","kitap"]
}

let kullanicilar = [ kullaniciA, kullaniciB];

bilgiler = kullanicilar[1].adi;

let k_bilgileri = [
    {
        "adi": "Naime",
        "soyadi": "Damataşı",
        "yasi": 26,
        "adresi": {
            "sehir": "İstanbul",
            "ilce": "Esenyurt"
        }
    },
    {
        "adi": "Yavuzhan",
        "soyadi": "Tepebaşı",
        "yasi": 25,
        "adresi": {
            "sehir": "Bartın",
            "ilce": "Merkez"
        }
    }

]

bilgiler = k_bilgileri[0].adi;


console.log(bilgiler);
