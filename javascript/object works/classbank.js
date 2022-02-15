class Bank {
    createaccount(acno, pname, pan, branch, phone, bal) {
        this.accountnumber = acno;
        this.personname = pname;
        this.pan = pan;
        this.branch = branch;
        this.phone = phone;
        this.bal = bal
    }
    withdarw(amount) {
        if (amount > this.bal) {
            console.log(`transaction failed on your account${this.accountnumber}`);
        }
        else {
            this.bal -= amount
            console.log(`your account ${this.accountnumber}has been debited with ${amount}your cureent bal is${this.bal}`);

        }

    }
    deposit(amount){
        this.bal+=amount
        console.log(`your account ${this.accountnumber}has been credited with ${amount}your current bal is${this.bal}`);
     }
     balanceEnquiry(){
         console.log(`your available balance is ${this.bal}`);
     }

}
var bank=new Bank()
bank.createaccount(11111111111,"ram",1223,"kannur",11445677,10000)
bank.deposit(200)