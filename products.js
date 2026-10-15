// Catalogue Ancomex — données issues de ancomex.be (prix TTC en euros).
// cat: camera | chasse | cb | vhf | signal | divers
const IMG = (id, slug) => `https://ancomex.be/${id}-large_default/${slug}.jpg`;

window.CATEGORIES = [
  { id: "camera", name: "Caméras de recul", desc: "Kits, écrans, caméras et adaptateurs tracteurs", icon: "camera" },
  { id: "chasse", name: "Radio chasse BE", desc: "Radios VHF agréées Belgique et accessoires", icon: "radio" },
  { id: "cb", name: "CB 27 MHz", desc: "Postes mobiles, portables et antennes", icon: "antenna" },
  { id: "vhf", name: "UHF · VHF · PMR 446", desc: "Émetteurs-récepteurs professionnels", icon: "signal" },
  { id: "signal", name: "Signalisation", desc: "Balises, kits magnétiques et remorques", icon: "triangle" },
  { id: "divers", name: "Divers", desc: "GPS, antivol connecté et plus", icon: "pin" }
];

window.PRODUCTS = [
  // Caméras de recul
  { id: "rm131", name: "Kit caméra RM 131 AHDT + caméra RC-809 AHD", brand: "Ancomex", cat: "camera", price: 599, old: 649, img: IMG(325, "kit-camera-rm-131-ahdt-camera-rc-809-ahd"), tag: "Kit complet" },
  { id: "rm429", name: "Kit caméra RM 429 AHD", brand: "Ancomex", cat: "camera", price: 519, old: 549, img: IMG(113, "kit-camera-rm-429-ahd") },
  { id: "rm427", name: "Kit caméra RM 427 AHD", brand: "Ancomex", cat: "camera", price: 499, old: 529, img: IMG(106, "kit-camera-rm-427-ahd") },
  { id: "rm219", name: "Kit caméra RM 219 AHD", brand: "Ancomex", cat: "camera", price: 399, old: 419, img: IMG(102, "kit-camera-rm-219-ahd"), desc: "Écran RM 219 AHD + caméra RC 809 AHD + 10 m de câble", featured: true },
  { id: "rm217w", name: "Kit caméra RM 217 Wireless", brand: "Ancomex", cat: "camera", price: 350, img: IMG(116, "kit-camera-rm-217-wireless"), tag: "Sans fil" },
  { id: "rm216", name: "Kit caméra RM 216 D", brand: "Ancomex", cat: "camera", price: 299, old: 340, img: IMG(101, "kit-camera-rm-216-d"), desc: "Écran RM 216D + caméra RC 073 + câble 10 m", featured: true },
  { id: "rm217ahdw", name: "Écran RM 217 AHDW waterproof", brand: "Ancomex", cat: "camera", price: 280, old: 290, img: IMG(532, "ecran-rm-217-ahdw-waterproof") },
  { id: "rc639", name: "Caméra RC 639 chauffante", brand: "Ancomex", cat: "camera", price: 157.3, old: 169.4, img: IMG(174, "camera-rc-639-chauffante") },
  { id: "rc638", name: "Caméra RC 638 grand angle 150°", brand: "Ancomex", cat: "camera", price: 157.3, img: IMG(171, "camera-rc-638-avec-angle-de-150") },
  { id: "rc093", name: "Caméra RC 093 capteur CCD Sony", brand: "Ancomex", cat: "camera", price: 146, old: 157.3, img: IMG(179, "camera-rc-093-capteur-ccd-sony") },
  { id: "rc809", name: "Caméra RC 809 AHD", brand: "Ancomex", cat: "camera", price: 146, old: 151.25, img: IMG(182, "camera-rc-809-ahd") },
  { id: "rc361", name: "Caméra RC 361 vision lointaine (35°)", brand: "Ancomex", cat: "camera", price: 139.15, img: IMG(161, "camera-rc-361-vision-lointaine-35") },
  { id: "rc670", name: "Caméra RC-670 utilitaire", brand: "Ancomex", cat: "camera", price: 139.15, img: IMG(156, "camera-rc-670-utilitaire") },
  { id: "rc644", name: "Caméra RC 644 boule", brand: "Ancomex", cat: "camera", price: 127.05, old: 133.1, img: IMG(167, "camera-rc-644-boule") },
  { id: "rc073", name: "Caméra RC 073 CCD Sharp", brand: "Ancomex", cat: "camera", price: 121, old: 127.05, img: IMG(177, "camera-rc-073-ccd-sharp") },
  { id: "rc073d", name: "RC 073 déclassée", brand: "Ancomex", cat: "camera", price: 63.53, old: 127.05, img: IMG(321, "rc-073-declassee"), tag: "Fin de série" },
  { id: "jd4600", name: "Adaptateur G4 console 4600 John Deere", brand: "Ancomex", cat: "camera", price: 129, img: IMG(133, "adaptateur-g4-console-4600-") },
  { id: "jd4640", name: "Adaptateur caméra G4 console 4640 John Deere", brand: "Ancomex", cat: "camera", price: 95.65, old: 112.53, img: IMG(357, "adaptateur-camera-john-deere-7r-8r"), featured: true },
  { id: "jd2630", name: "Adaptateur caméra console 2630 Greenstar John Deere", brand: "Ancomex", cat: "camera", price: 99, old: 107.69, img: IMG(382, "adaptateur-camera-console-2630-greenstar-john-deere") },
  { id: "jd7r8r", name: "Adaptateur caméra John Deere 7R & 8R", brand: "Ancomex", cat: "camera", price: 89, old: 95.59, img: IMG(351, "adaptateur-camera-john-deere-7r-8r") },
  { id: "fendt", name: "Adaptateur Infoview Fendt 70 cm analogique", brand: "Ancomex", cat: "camera", price: 44.77, img: IMG(130, "adaptateur-infoview-fendt-70-cm-analogique") },
  { id: "alim3", name: "Câble d'alimentation 3 caméras", brand: "Ancomex", cat: "camera", price: 42, img: IMG(260, "cable-d-alimentation-3-cameras") },
  { id: "cable5", name: "Câbles de liaison 5 mètres", brand: "Ancomex", cat: "camera", price: 21.78, img: IMG(117, "cables-de-liaison-5m") },

  // Radio chasse
  { id: "tk2000ore", name: "Radio chasse Kenwood TK-2000 VHF BE + oreillette", brand: "Kenwood", cat: "chasse", price: 185, old: 198, img: IMG(478, "radio-chasse-kenwood-tk-2000-vhf-be-oreillette"), tag: "Pack", featured: true },
  { id: "tk2000", name: "Radio chasse Kenwood TK-2000 VHF agréée BE", brand: "Kenwood", cat: "chasse", price: 169, old: 179, img: IMG(479, "radio-chasse-kenwood-tk-2000-vhf-agree-be"), tag: "Meilleure vente", featured: true },
  { id: "crt7wpore", name: "Radio chasse CRT 7WP VHF BE waterproof + oreillette", brand: "CRT", cat: "chasse", price: 152, old: 157, img: IMG(387, "radio-chasse-crt-7wp-vhf-be-waterproof-oreillette"), tag: "Pack", featured: true },
  { id: "crt7wp", name: "Radio chasse CRT 7WP VHF BE waterproof", brand: "CRT", cat: "chasse", price: 135, old: 139, img: IMG(95, "radio-chasse-crt-7wp-vhf-be-waterproof") },
  { id: "knb65", name: "Batterie KNB-65L Kenwood pour TK-2000", brand: "Kenwood", cat: "chasse", price: 41, img: IMG(526, "batterie-knb-65l-kenwood-pour-tk-2000") },
  { id: "peltor", name: "Cordon casque antibruit Peltor SportTac", brand: "Peltor", cat: "chasse", price: 30, img: IMG(276, "cordon-casque-antibruits-peltor") },
  { id: "prok", name: "Oreillette-micro CRT PRO K", brand: "CRT", cat: "chasse", price: 19, img: IMG(375, "oreillette-micro-crt-pro-k") },

  // CB 27 MHz
  { id: "jfk3", name: "Président JFK III AM/FM 12/24 V", brand: "Président", cat: "cb", price: 285, old: 299, img: IMG(507, "president-jfk-iii-amfm-1224-volts") },
  { id: "johnson3", name: "Président JOHNSON III+ 12/24 V", brand: "Président", cat: "cb", price: 289, img: IMG(495, "president-johnson-iii-1224-volts") },
  { id: "randy3", name: "Président RANDY III+ Super 12-24 V IP67", brand: "Président", cat: "cb", price: 219, img: IMG(39, "president-randy-iii") },
  { id: "walker2", name: "Président WALKER II", brand: "Président", cat: "cb", price: 209, img: IMG(8, "president-walker-ii") },
  { id: "jerry", name: "Émetteur-récepteur Président JERRY portable", brand: "Président", cat: "cb", price: 159, img: IMG(466, "emetteur-recepteur-president-jerry-portable") },
  { id: "tcbh100", name: "Émetteur TTI TCB-H100 mobile + portable", brand: "TTI", cat: "cb", price: 159, img: IMG(421, "emetteur-tti-tcb-h100-mobile-portable") },
  { id: "maas", name: "Émetteur-récepteur portable MAAS KCB H-1000", brand: "MAAS", cat: "cb", price: 149, img: IMG(441, "emetteur-recepteur-portable-maas-kcb-h-1000") },
  { id: "martin", name: "Président MARTIN 12-24 V multinorme AM-FM", brand: "Président", cat: "cb", price: 149, img: IMG(30, "president-martin-12-24-volts-40-ch") },
  { id: "hp72", name: "CB portable PNI HP72", brand: "PNI", cat: "cb", price: 139, img: IMG(316, "cb-portable-pni-hp72") },
  { id: "barry2", name: "Président BARRY II+", brand: "Président", cat: "cb", price: 139, img: IMG(19, "president-barry-ii") },
  { id: "bill2", name: "Président BILL II ASC VOX", brand: "Président", cat: "cb", price: 139, img: IMG(2, "president-bill-ii-asc-vox") },
  { id: "teddy2", name: "Président TEDDY II", brand: "Président", cat: "cb", price: 105, old: 109, img: IMG(14, "president-teddy-ii"), featured: true },
  { id: "alphan", name: "CRT ALPHA N 40 cx AM/FM 12-24 V", brand: "CRT", cat: "cb", price: 89, img: IMG(498, "crt-alpha-n-40-cx-amfm-12-24-volts") },
  { id: "henry2", name: "Président HENRY II AM/FM 12-24 V", brand: "Président", cat: "cb", price: 85, old: 89, img: IMG(541, "president-henry-ii-amfm-12-24-volts") },
  { id: "jimmy3", name: "Président JIMMY III", brand: "Président", cat: "cb", price: 85, img: IMG(481, "president-jimmy-iii") },
  { id: "smini", name: "CRT S-MINI 40 cx AM/FM 4 W", brand: "CRT", cat: "cb", price: 75, img: IMG(47, "crt-smini") },
  { id: "tcb771", name: "Émetteur TTI TCB-771 AM/FM 40 cx", brand: "TTI", cat: "cb", price: 66.5, old: 95, img: IMG(366, "emetteur-tti-tcb-771-amfm-40-cx"), tag: "Promo" },
  { id: "megapro", name: "CRT Mégapro 12/24 V", brand: "CRT", cat: "cb", price: 60, old: 75, img: IMG(52, "crt-megapro-1224-volts") },
  { id: "onen", name: "CRT ONE N", brand: "CRT", cat: "cb", price: 65, old: 69, img: IMG(45, "crt-one-n") },
  { id: "millenium", name: "CRT Millenium", brand: "CRT", cat: "cb", price: 59, img: IMG(43, "crt-millenium-") },
  { id: "perf5000", name: "Sirio Performer 5000 PL complète", brand: "Sirio", cat: "cb", price: 89, img: IMG(252, "sirio-performer-5000-pl") },
  { id: "turbo5000", name: "Antenne Sirio Turbo 5000 PL complète", brand: "Sirio", cat: "cb", price: 89, img: IMG(89, "antenne-sirio-turbo-5000-pl-complete") },
  { id: "turbo3000", name: "Antenne Sirio Turbo 3000 PL complète", brand: "Sirio", cat: "cb", price: 83, img: IMG(86, "antenne-sirio-turbo-3000-pl-complete") },
  { id: "turbo2000", name: "Antenne Sirio Turbo 2000 PL complète", brand: "Sirio", cat: "cb", price: 73, img: IMG(81, "antenne-sirio-turbo-2000-pl-complete") },
  { id: "turbo1000", name: "Antenne Sirio Turbo 1000 PL complète", brand: "Sirio", cat: "cb", price: 69, img: IMG(76, "antenne-sirio-turbo-1000-pl-complete") },
  { id: "blueline", name: "Antenne Turbo 2000 Blue Line complète", brand: "Sirio", cat: "cb", price: 65, img: IMG(475, "antenne-turbo-2000-blue-line-complete") },
  { id: "omegamag", name: "Antenne OMEGA 27 magnétique", brand: "Sirio", cat: "cb", price: 61, img: IMG(345, "antenne-omega-27-magnetique") },
  { id: "gl27", name: "Antenne Sirio GL 27 sans plan de masse FME + PL", brand: "Sirio", cat: "cb", price: 59, img: IMG(66, "antenne-sirio-gl-27-sans-plan-de-masse-fme-pl") },
  { id: "delta27", name: "Sirio Delta 27 M95 FME + adaptateur PL", brand: "Sirio", cat: "cb", price: 45, img: IMG(72, "sirio-delta-27-m95") },
  { id: "omega27", name: "Antenne OMEGA 27 Sirio pied à percer + câble", brand: "Sirio", cat: "cb", price: 45, img: IMG(61, "sirio-omega-27") },

  // UHF / VHF / PMR
  { id: "tm281", name: "Émetteur-récepteur Kenwood TM-281-A VHF export", brand: "Kenwood", cat: "vhf", price: 259, img: IMG(367, "emetteur-recepteur-kenwood-tm-281-a-vhf-export") },
  { id: "crt7m", name: "Émetteur-récepteur CRT 7M COM UHF", brand: "CRT", cat: "vhf", price: 199.65, img: IMG(270, "emetteur-recepteur-crt-7m-com-uhf") },
  { id: "leixen", name: "Émetteur-récepteur Leixen W-898 S VHF-UHF export", brand: "Leixen", cat: "vhf", price: 139, old: 149, img: IMG(516, "emetteur-recepteur-leixen-w-898-s-vhf-uhf-export") },
  { id: "w318", name: "YJT W318 PMR 446 waterproof", brand: "YJT", cat: "vhf", price: 139, img: IMG(312, "yjt-w318-uhfvhf") },
  { id: "crt7wppmr", name: "Radio CRT 7WP PMR446 waterproof", brand: "CRT", cat: "vhf", price: 135, img: IMG(93, "radio-crt-7wp-pmr446-waterproof") },
  { id: "kdi03", name: "Rack d'encastrement Kenwood KDI-03", brand: "Kenwood", cat: "vhf", price: 84.7, img: IMG(455, "rack-d-encastrement-kenwood-kdi-03") },
  { id: "sp35l", name: "Haut-parleur externe ICOM SP-35L", brand: "ICOM", cat: "vhf", price: 52.03, img: IMG(515, "haut-parleur-externe-icom-sp-35l") },
  { id: "su370", name: "Antenne UHF SU 370-490 SL magnétique", brand: "Sirio", cat: "vhf", price: 47.19, img: IMG(330, "antenne-uhf-su-370-490-sl-magnetique") },
  { id: "sma47", name: "Antenne Sirio SMA 47/135 S + FME VHF", brand: "Sirio", cat: "vhf", price: 47.19, img: IMG(326, "antenne-sirio-sma-47135-s-fme-vhf") },

  // Signalisation
  { id: "triang", name: "Kit signalisation magnétique arrière triangulaire sans fil", brand: "Ancomex", cat: "signal", price: 129, img: IMG(429, "kit-signalisation-magnetique-arriere-triangulaire-sans-fil") },
  { id: "ancoflash", name: "Valise de 6 balises rechargeables Anco-Flash", brand: "Ancomex", cat: "signal", price: 119, old: 139, img: IMG(192, "valise-de-6-balises-rechargeables-anco-flash") },
  { id: "remorque7", name: "Kit remorque simple 7 broches", brand: "Ancomex", cat: "signal", price: 109, img: IMG(145, "kit-remorque-simple-7-broches") },
  { id: "magsf", name: "Kit signalisation magnétique arrière sans fil", brand: "Ancomex", cat: "signal", price: 99, img: IMG(205, "kit-signalisation-magnetique-arriere-sans-fil-") },
  { id: "remorque5", name: "Kit remorque spiralé 5 broches", brand: "Ancomex", cat: "signal", price: 90.75, img: IMG(302, "kit-remorque-spirale-5-broches") },

  // Divers
  { id: "khiko", name: "Balise GPS connectée KHIKO", brand: "KHIKO", cat: "divers", price: 499.25, old: 502.15, img: IMG(404, "antivol-connecte-khiko") }
];
