$(function(){



$("select").append($("<option/>").val(12).html("Monthly"));
$("select").append($("<option/>").val(6).html("Bimonthly"));




$("#calculatorButton").click(function(){
  

var loanBalance=$("#loanBalance").val();
var interestRate=$("#interestRate").val();
var loanTerm=$("#loanTermInput").val();
var period=$("select option:selected").val();




    // monthly interest rate       
 var   monthlyInterestRate = (interestRate / 100) / period;          

    // number of payments
 var   numberOfPayments = loanTerm * period;

    // compounded interest rate
  var  compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  

    // interest quotient
  var  interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation
  var  monthlyPayment = loanBalance * interestQuotient;


 $("#userOutput").text("your monthly payment would be $" +  monthlyPayment.toFixed(2) + ".00");



});


});