function findPrime(...numbers) {
    let count=0;
    for (let i=0; i<numbers.length; i++){
        for (let div=2; div<numbers[i]; div++){
            if(numbers[i]%div == 0){
                count++;
            }
        }
        if(count==0){
        console.log(numbers[i] + " asal sayidir.")    
        }
        else{
            console.log(numbers[i] + " asal sayi degildir, " + count + " adet böleni vardır.")   
        }
        count=0;
    }
}

// findPrime(11,13,16,17,47)

function findFriends(x,y) {
    let xToplam = 0
    for (let i = 1; i < x; i++) {
        if (x % i == 0) {
            xToplam = xToplam + i
        }
    }

    let yToplam = 0
    for (let j = 1; j < x; j++) {
        if (y % j == 0) {
            yToplam = yToplam + j
        }
    }

    if (xToplam == y && yToplam == x) {
        console.log(x + " ve " + y + " arkadaş sayılardır.")
    }
    else{
        console.log(x + " ve " + y + " arkadaş sayı değiller.")
    }
}

// findFriends(17296,18416)

function findPerfectNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let toplam = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                toplam = toplam + j
            }
        }
        if (toplam == 2*i) {
            console.log(i + " mükemmel sayıdır.")
        }
    }
}

// findPerfectNumbers(1000)

function findPrimeNumbers(n) {
    let primeNumbers = []
    for (let i = 1; i <= n; i++) {
        let count = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if (count == 0) {
            primeNumbers.push(i)
        }
        count == 0
    }
    console.log(`1000'e kadar olan asal sayılar : ${primeNumbers}`)
}

findPrimeNumbers(1000)

