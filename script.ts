function osszesOszto(szam:number) {
    let megoldas:number[] = [];
    for (let index:number = 1; index <= szam; index++) {
        if (szam%index ==0) {
            megoldas.push(index);}}
    return megoldas;
}

function parosDarab(szam:number[]) {
    let db:number =0;

    for (let index:number = 0; index < szam.length; index++) {
        if (szam[index]%2==0) {
            db++; }}
    return db;
}
