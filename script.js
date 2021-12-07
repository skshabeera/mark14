var initialprice=document.querySelector("#initial-price")
var stockQuantity=document.querySelector("#quantity-stocks")
var currentprice=document.querySelector("#current-price")
var submitBtn= document.querySelector("#submit-btn")
var outputBox=document.querySelector("#output-box")
submitBtn.addEventListener("click",submitHandler)

function submitHandler(){
    var ip=Number(initialprice.value)
    var qty=Number(stockQuantity.value)
    var curr=Number(currentprice.value)
    calculateProfitandloss(ip,curr,qty)

}
function calculateProfitandloss(initial,current,quantity){
    if (initial > current){
        var loss=(initial-current)*quantity
        var losspercentage=(loss/initial)*100
        showoutput(`the loss is ${loss} the percentage ${losspercentage}`);
    }else if(current > initial){
        var profit=(current-initial)*quantity
        console.log(profit)
        var profitpercentage=(profit/initial)*100
        showoutput(`the profit is ${profit} the percentage ${profitpercentage}`);
    }
    else{
        showoutput(`no profit no pain no gain no profit`)

    }

}
function showoutput(message){
    outputBox.innerHTML=message
}


