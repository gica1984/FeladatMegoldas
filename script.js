function osszesOszto(szam) {
    var eredmeny = [];
    for (var index = 1; index <= szam; index++) {
        if (szam % index == 0) {
            eredmeny.push(index);
        }
    }
    return eredmeny;
}
function parosDarab(szamok) {
    var db = 0;
    for (var index = 0; index < szamok.length; index++) {
        if (szamok[index] % 2 == 0) {
            db++;
        }
    }
    return db;
}
