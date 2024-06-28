

class BankAccount {
    constructor(account, balance){
        this.account = account;
        this.balance = balance;
    }

    deposit(jumlah){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (!isNaN(jumlah) && jumlah > 0 ){
                    this.balance += jumlah;
                    resolve (`Saldo berhasil ditambahkan. Saldo baru: ${this.balance}.`)
                } else{
                    reject (`Input tidak valid. Saldo tidak berubah. Silakan coba lagi.`);
                
                }
            }, 1000);
        })
    }

    withdraw(jumlah){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!isNaN(jumlah) && jumlah > 0 && jumlah <= this.balance){
                    this.balance -= jumlah;
                    resolve(`Saldo berhasil dikurangi. Saldo baru: ${this.balance}.`)
                } else if (jumlah > this.balance) {
                    reject(`Saldo tidak mencukupi untuk melakukang pengurangan. `)
                } else {
                    reject (`Input tidak valid. Saldo tidak berubah. Silakan coba lagi.`)
                }

            }, 1000);
        })
    }

    

}