/*
    1- Sipariş bilgilerini object içerisinde saklayınız.
    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye
*/
let siparis1 = {
        "siparis_id": 101,
        "siparis_tarihi": "31.12.2022",
        "ödeme_sekli": "kredi kartı",
        "kargo_adresi": "Yahya kaptan mah. Kocaeli İzmit",
        "uruler":[
            {
            "urun_id": 5,
            "urun_basligi": "IPhone 13 Pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "urun_fiyati": 22000,
            },
            {
            "urun_id": 6,
            "urun_basligi": "IPhone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyati": 25000
            }
        ],
        "musteri":{
            "musteri_id": 12
        },
        "satici":{
            "firma_id": 34,
            "firma_adi": "Apple Turkiye"
        }
}
let siparis2 = {
    "siparis_id": 102,
    "siparis_tarihi": "30.12.2022",
    "ödeme_sekli": "kredi kartı",
    "kargo_adresi": "Yahya kaptan mah. Kocaeli İzmit",
    "uruler":[
        {
        "urun_id": 6,
        "urun_basligi": "IPhone 13 Pro Max",
        "urun_url": "http://abc.com/iphone-13-pro-max",
        "urun_fiyati": 25000
        }
    ],
    "musteri":{
        "musteri_id": 12
    },
    "satici":{
        "firma_id": 34,
        "firma_adi": "Apple Turkiye"
    }
}

//2- Her sipariş ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız.( kdv:%18 )
let siparis1_toplamKdv = (siparis1.uruler[0].urun_fiyati + siparis1.uruler[1].urun_fiyati)*0.18;
console.log(siparis1_toplamKdv);
let siparis2_toplamKdv = (siparis2.uruler[0].urun_fiyati)*0.18;
console.log(siparis2_toplamKdv);

// 3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.
 let toplam_kdv = siparis1_toplamKdv + siparis2_toplamKdv ;
 console.log(toplam_kdv);

