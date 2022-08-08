const calculatorButton = document.getElementsByClassName("calculator-button");
const modal = document.getElementById("modal-calculator");
const span = document.getElementsByClassName("close")[0];

function revealModal() {
    console.log("Did the modal work?")
    modal.style.display = "block";
}

function closeModal() {
    console.log("Did the close work?")
    modal.style.display = "none";
}
span.onClick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

let choiceImport = document.getElementById("import");
let choiceExport = document.getElementById("export");
let bulk = document.getElementById("bulk");
let container = document.getElementById("container");
let containerExport = document.getElementById("container2")
let truck = document.getElementById("truck");
let rail = document.getElementById("rail");
let twentyFeet = document.getElementById("twentyFeet");
let twenty = document.getElementById("twentyContainerAmount");
let forty = document.getElementById("fortyContainerAmount");
let ton = document.getElementById("bulkTonAmount");
let fortyFeet = document.getElementById("fortyFeet");

let total = document.getElementById("total");

let getTotal = document.getElementById("calculate");
getTotal.addEventListener("click", function() {
    let twentyContainerAmountInput = Number(twenty.value);
    let fortyContainerAmountInput = Number(forty.value);
    let tonInput = Number(ton.value);
    let calculatedTotal = 0;
    // BELOW ARE ALL THE VARIABLES FOR SHIPPING COSTS
    let importBulkRailTon = 28;
    let importBulkTruckTon = 86;
    let importContainerTwentyRail = 2305;
    let importContainerFortyRail = 2155;
    let importContainerTwentyTruck = 2455;
    let importContainerFortyTruck = 3855;
    let exportContainerTwentyRail = 1260;
    let exportContainerFortyRail = 2060;
    let exportContainerTwentyTruck = 1685;
    let exportContainerFortyTruck = 2260;
    // if ((twentyContainerAmountInput < 1 || fortyContainerAmountInput < 1 ) && tonInput < 1) {
    //     alert("Please enter a number greater than or equal to one.")
    // }
    
    
    if(choiceImport.checked) {
        console.log("import checked")
        if(bulk.checked) {
            if(rail.checked){
                calculatedTotal = tonInput * importBulkRailTon;
            } else {
                //by truck
                calculatedTotal = tonInput * importBulkTruckTon;
            }
        } else {
            // Containerized
            if(rail.checked){
                if(twentyFeet.checked){
                    console.log("Twenty Feet import Checked RAIL")
                    calculatedTotal += twentyContainerAmountInput * importContainerTwentyRail;
                    if (fortyFeet.checked) {
                        console.log("Forty Feet import ADDED Checked RAIL")
                        calculatedTotal += fortyContainerAmountInput * importContainerFortyRail;
                    }
                }
                else {
                    calculatedTotal = fortyContainerAmountInput * importContainerFortyRail;
                    console.log("Forty Feet import RAIL ALONE")
                }
            }
            // By truck
            else{
                if(truck.checked) {
                    console.log("truck checked bulk import")
                if(twentyFeet.checked){
                    calculatedTotal += twentyContainerAmountInput * importContainerTwentyTruck;
                    console.log("twenty feet import TRUCK ALONE")
                    if(fortyFeet.checked) {
                        calculatedTotal += fortyContainerAmountInput * importContainerFortyTruck;
                        console.log("forty feet import truck ADDEd")
                    }           
                }
                else{
                    calculatedTotal = fortyContainerAmountInput * importContainerFortyTruck;
                    console.log("forty feet import TRUCK ALONE")
                }
            }
        }
    }
    } else if (choiceExport.checked) {
        console.log("Export is checked")
        //export
        if(containerExport.checked) {
            console.log("Container Checked Export")
            if(rail.checked) {
                console.log("Export container RAIL checked")
               if(twentyFeet.checked) {
                console.log("Twenty Feet export RAIL ALONE checked")
                calculatedTotal += twentyContainerAmountInput * exportContainerTwentyRail;
                if(fortyFeet.checked) {
                    console.log("Forty Feet RAIL export added checked")
                    calculatedTotal += fortyContainerAmountInput * exportContainerFortyRail;
                }
               }
               else {
                calculatedTotal = fortyContainerAmountInput * exportContainerFortyRail;
                console.log("forty Feet export RAIL ALONE checked")
               }
            } else {
                if(truck.checked) {
                    console.log("export truck checked")
                    if(twentyFeet.checked) {
                        console.log("Twenty Feet export truck ALONE checked")
                        calculatedTotal += twentyContainerAmountInput * exportContainerTwentyTruck;
                        if(fortyFeet.checked) {
                            console.log("Forty Feet truck export added checked")
                            calculatedTotal += fortyContainerAmountInput * exportContainerFortyTruck;
                        }
                    }
                    else {
                        console.log("forty Feet export truck ALONE checked")
                        calculatedTotal = fortyContainerAmountInput * exportContainerFortyTruck;
                    }
                }
            }
        } else {
            if(bulk.checked) {
                alert("This option is not available yet.")
            }
            
        }
    
}
    
    total.value = calculatedTotal.toLocaleString('us-Us', {style: 'currency', currency: 'USD'});
    console.log(calculatedTotal)
    })


        $(".bulk-container-export").hide();
        $(".bulk-container-import").hide();
        $(".truck-rail").hide();
        $(".tons-input").hide();
        $(".final-selection").hide();
        $(".containers-selection").hide();
        $(".final-calculation").hide();
        $(".finalSelection").hide();
        $(".reveal-results").hide();

    $(document).ready(function() {
        $('input:radio[name=import-export]').click(function () {     
            
            if ($('input:radio[name=import-export]:checked').val() === "import") {
                console.log("bulk-container-import shows")
                $(".bulk-container-import").show();
                $(".bulk-container-export").hide();
            } else {
                console.log("bulk-container-export shows")
                $(".bulk-container-export").show();
                $(".bulk-container-import").hide();
            }          
        })
        $('input:radio[name=bulk-container-import]').click(function () {
                if ($('input:radio[name=bulk-container-import]:checked').val() === "bulk") {
                    
            $(".tons-input").show();
            $(".final-calculation").show();
            $(".containers-selection").hide();
            $(".truck-rail").show();
                }
                else {
                    $(".truck-rail").show();
                    $(".final-calculation").show();
                    $(".containers-selection").show();
                    $(".tons-input").hide();
                
                }
        
        })
  
    $('input:radio[name=bulk-container-export]').click(function () {
        if ($('input:radio[name=bulk-container-export]:checked').val() === "container") {
            $(".truck-rail").show();
            $(".containers-selection").show();
        $(".final-calculation").show();
        $(".tons-input").hide();
        }
        // alert("Aye yo this isn't done yet.")
       
    })
    $('#calculate').click(function () {
        $(".reveal-results").show();
    })

})
 
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 1200) {
        $('.calculator-button').fadeOut();
    }
    else {
        $('.calculator-button').show();
    }
});