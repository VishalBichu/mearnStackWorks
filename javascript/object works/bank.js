class bank {
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
    }
    validate(acno) {
        return acno in this.account_details ? true : false
    }

    authenicate(acno, password) {
        if (this.validate(acno)) {
            let pwd = this.account_details[acno].password
            if (password == pwd) {
                return "login success"
            }
            else {
                return "invalid password"
            }
        }
        else {
            return "invalid acno"
        }
    }
    getBalance(acno) {
        if (this.validate(acno)) {
            return this.account_details[acno].balance
        }
    }

    fundTransfer(fromacno, toacno, amount) {
        if (this.validate(fromacno) && this.validate(toacno)) {
            let availbal = this.getBalance(fromacno)
            if(amount>availbal){
                return "insufficient balance"
            }
            else{
                this.account_details[fromacno].balance-=amount
                this.account_details[toacno].balance+=amount
            }
        
        }
        else{
            return "transaction failed"
        }
    }

}



var obj = new bank()
console.log(obj.fundTransfer(1000,1002,1000));
console.log((obj).getBalance(1000));