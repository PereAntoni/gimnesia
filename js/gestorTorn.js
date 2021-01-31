class gestorTorn{
    constructor(){
        this.nTorns=0;
        this.torn=0;
    }
    setnTorns(n){this.nTorns=n;}
    getTorn(){return this.torn;}
    nouTorn(){  this.torn++;
                if (this.torn>=this.nTorns){this.torn=0;}
                return this.torn;}
}