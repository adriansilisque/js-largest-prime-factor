function largestPrimeFactor(n) {
 if (n % 2 == 0){
        var lastFactor = 2;
        n=n/2;
        while (n % 2 == 0){
            n=n/2; }
 }else{
    lastFactor =1;}
factor = 3;
maxFactor = Math.sqrt(n);
    
while ((n > 1) && (factor<=maxFactor)){
        if (n % factor == 0){
            n=n/factor
            lastFactor=factor
            while (n % factor == 0){

                n = n / factor}
            maxFactor= Math.sqrt(n)
        }
        factor += 2;
}
if (n == 1){
  return lastFactor;
}else{
    return n;
}
}
    
function ValidateResult(origText, result){
 var index, total = 1;
 for(index = 0; index < result.length; index++){ total = total * result[index];}
 return (origText === total.toString()) ? result : "Error: Factoring did not validate";
};


