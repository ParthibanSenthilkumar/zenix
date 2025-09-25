$(document).ready(function(){
	

  
    var percent = document.getElementById("Ultra1").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra1").value); 
        var minmoney1 	= [100,25.00,1000.00,50.00,100.00 ];
        var maxmoney1	= [5001.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money1").val(minmoney1[0]);
        console.log($("#money1").val(minmoney1[0]));
        
        //Calculator
        function calc(){
            var money1 = parseFloat($("#money1").val());
            switch (percent) {
                case 0:
                    if( (money1 >= 10 && money1 < 9999999999)){
                        var profitDaily1 = money1 / 100 * 0.5;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 500 * 0.5 + money1;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 0.5;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 500 * 0.5;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text('$' + profitDaily1);
                        $("#profitTotal1").text('$' + profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                    //} else if(isNaN(money1) == true) {
                    } if (money1 < 10){
                        $("#profitDaily1").text("Error!");
                        $("#profitTotal1").text("Error!");
                        $("#profitPercent1").text("Error!");
                        $("#profitNet1").text("Error!");
                    }
                    break;
                case 1:
                    if ( money1 >= 100   && money1 <= 1000){
    
                        var profitDaily1 = money1 / 100 * 3;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 3 * 30;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 3;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 3;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text(profitDaily1);
                        $("#profitTotal1").text(profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                        //} else if(isNaN(money1) == true) {
                    }  if (money1 < 100){
                        $("#profitDaily1").text("Min: $100");
                        $("#profitTotal1").text("Min: $100");
                        $("#profitPercent1").text("Min: $100");
                        $("#profitNet1").text("Min: $100");
                    }
                        if (money1 > 1000){
                        $("#profitDaily1").text("Max: $1000");
                        $("#profitTotal1").text("Max: $1000");
                        $("#profitPercent1").text("Max: $1000");
                        $("#profitNet1").text("Max: $1000");
                    }
                    break;
                case 2:
                    if ( money1 >= 1000   && money1 <= 2000){
    
                        var profitDaily1 = money1 / 100 * 4;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 4 * 40;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 4;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 4;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text(profitDaily1);
                        $("#profitTotal1").text(profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                        //} else if(isNaN(money1) == true) {
                    }  if (money1 < 1000){
                        $("#profitDaily1").text("Min: $1000");
                        $("#profitTotal1").text("Min: $1000");
                        $("#profitPercent1").text("Min: $1000");
                        $("#profitNet1").text("Min: $1000");
                    }
                        if (money1 > 2000){
                        $("#profitDaily1").text("Max: $2000");
                        $("#profitTotal1").text("Max: $2000");
                        $("#profitPercent1").text("Max: $2000");
                        $("#profitNet1").text("Max: $2000");
                    }
                    break;
                case 3:
                    if ( money1 >= 2000   && money1 <= 3000){
    
                        var profitDaily1 = money1 / 100 * 5;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 5 * 40;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 5;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 5;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text(profitDaily1);
                        $("#profitTotal1").text(profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                        //} else if(isNaN(money1) == true) {
                    }  if (money1 < 2000){
                        $("#profitDaily1").text("Min: $2000");
                        $("#profitTotal1").text("Min: $2000");
                        $("#profitPercent1").text("Min: $2000");
                        $("#profitNet1").text("Min: $2000");
                    }
                        if (money1 > 3000){
                        $("#profitDaily1").text("Max: $3000");
                        $("#profitTotal1").text("Max: $3000");
                        $("#profitPercent1").text("Max: $3000");
                        $("#profitNet1").text("Max: $3000");
                    }
                    break;
                case 4:
                    if ( money1 >= 3000   && money1 <= 4000){
    
                        var profitDaily1 = money1 / 100 * 6;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 6 * 40;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 6;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 6;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text(profitDaily1);
                        $("#profitTotal1").text(profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                        //} else if(isNaN(money1) == true) {
                    }  if (money1 < 3000){
                        $("#profitDaily1").text("Min: $3000");
                        $("#profitTotal1").text("Min: $3000");
                        $("#profitPercent1").text("Min: $3000");
                        $("#profitNet1").text("Min: $3000");
                    }
                        if (money1 > 4000){
                        $("#profitDaily1").text("Max: $4000");
                        $("#profitTotal1").text("Max: $4000");
                        $("#profitPercent1").text("Max: $4000");
                        $("#profitNet1").text("Max: $4000");
                    }
                    break;

                
            }
        }
        if($("#money1").length){
            calc();
        }
        $("#money1").keyup(function(){
            calc();
        });
    
        $("#Ultra1").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    
    
        
    });
    
    
                //   ******======== CALCI PART 2=========*******  //
    
    $(document).ready(function(){
    var percent = document.getElementById("Ultra2").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra2").value); 
        var minmoney2 	= [1500,25.00,1000.00,50.00,100.00 ];
        var maxmoney2	= [5001.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money2").val(minmoney2[0]);
        console.log($("#money2").val(minmoney2[0]));
        
        //Calculator
        function calc(){
            var money2 = parseFloat($("#money2").val());
            switch (percent) {
                case 0:
                    if( (money2 >= 10 && money2 < 9999999999)){
                        var profitDaily2 = money2 / 100 * 0.5;
                        var profitDaily2 = profitDaily2.toFixed(2);
                        var profitTotal2 = money2 / 100 * 500 * 0.5 + money2;
                        var profitTotal2 = profitTotal2.toFixed(2);
                        var profitPercent2 = 0.5;
                        var profitPercent2 = profitPercent2.toFixed(2);
                        var profitNe2 = money2 / 100 * 500 * 0.5;
                        var profitNe2 = profitNe2.toFixed(2);
    
                        $("#profitDaily2").text('$' + profitDaily2);
                        $("#profitTotal2").text('$' + profitTotal2);
                        $("#profitPercent2").text(profitPercent2 + '%');
                        $("#profitNe2").text('$' + profitNe2);
                    //} else if(isNaN(money2) == true) {
                    } if (money2 < 10){
                        $("#profitDaily2").text("Error!");
                        $("#profitTotal2").text("Error!");
                        $("#profitPercent2").text("Error!");
                        $("#profitNe2").text("Error!");
                    }
                    break;
                case 1:
                    if ( money2 >= 500   && money2 <= 5000){
    
                        var profitDaily2 = money2 / 100 * 5;
                        var profitDaily2 = profitDaily2.toFixed(2);
                        var profitTotal2 = money2 / 100 * 5 *30;
                        var profitTotal2 = profitTotal2.toFixed(2);
                        var profitPercent2 = 5;
                        var profitPercent2 = profitPercent2.toFixed(2);
                        var profitNe2 = money2 / 100 * 5;
                        var profitNe2 = profitNe2.toFixed(2);
    
                        $("#profitDaily2").text(profitDaily2);
                        $("#profitTotal2").text(profitTotal2);
                        $("#profitPercent2").text(profitPercent2 + '%');
                        $("#profitNe2").text('$' + profitNe2);
                        //} else if(isNaN(money2) == true) {
                    }  if (money2 < 500){
                        $("#profitDaily2").text("Min: $500");
                        $("#profitTotal2").text("Min: $500");
                        $("#profitPercent2").text("Min: $500");
                        $("#profitNe2").text("Min: $500");
                    }
                        if (money2 > 5000){
                        $("#profitDaily2").text("Max: $5000");
                        $("#profitTotal2").text("Max: $5000");
                        $("#profitPercent2").text("Max: $5000");
                        $("#profitNe2").text("Max: $5000");
                    }
                    break;	
                case 2:
                    if ( money2 >= 600   && money2 <= 6000){
    
                        var profitDaily2 = money2 / 100 * 5;
                        var profitDaily2 = profitDaily2.toFixed(2);
                        var profitTotal2 = money2 / 100 * 5 *30;
                        var profitTotal2 = profitTotal2.toFixed(2);
                        var profitPercent2 = 5;
                        var profitPercent2 = profitPercent2.toFixed(2);
                        var profitNe2 = money2 / 100 * 5;
                        var profitNe2 = profitNe2.toFixed(2);
    
                        $("#profitDaily2").text(profitDaily2);
                        $("#profitTotal2").text(profitTotal2);
                        $("#profitPercent2").text(profitPercent2 + '%');
                        $("#profitNe2").text('$' + profitNe2);
                        //} else if(isNaN(money2) == true) {
                    }  if (money2 < 600){
                        $("#profitDaily2").text("Min: $600");
                        $("#profitTotal2").text("Min: $600");
                        $("#profitPercent2").text("Min: $600");
                        $("#profitNe2").text("Min: $600");
                    }
                        if (money2 > 6000){
                        $("#profitDaily2").text("Max: $6000");
                        $("#profitTotal2").text("Max: $6000");
                        $("#profitPercent2").text("Max: $6000");
                        $("#profitNe2").text("Max: $6000");
                    }
                    break;
                case 3:
                    if ( money2 >= 700   && money2 <= 7000){
    
                        var profitDaily2 = money2 / 100 * 5;
                        var profitDaily2 = profitDaily2.toFixed(2);
                        var profitTotal2 = money2 / 100 * 5 *30;
                        var profitTotal2 = profitTotal2.toFixed(2);
                        var profitPercent2 = 5;
                        var profitPercent2 = profitPercent2.toFixed(2);
                        var profitNe2 = money2 / 100 * 5;
                        var profitNe2 = profitNe2.toFixed(2);
    
                        $("#profitDaily2").text(profitDaily2);
                        $("#profitTotal2").text(profitTotal2);
                        $("#profitPercent2").text(profitPercent2 + '%');
                        $("#profitNe2").text('$' + profitNe2);
                        //} else if(isNaN(money2) == true) {
                    }  if (money2 < 700){
                        $("#profitDaily2").text("Min: $700");
                        $("#profitTotal2").text("Min: $700");
                        $("#profitPercent2").text("Min: $700");
                        $("#profitNe2").text("Min: $700");
                    }
                        if (money2 > 7000){
                        $("#profitDaily2").text("Max: $7000");
                        $("#profitTotal2").text("Max: $7000");
                        $("#profitPercent2").text("Max: $7000");
                        $("#profitNe2").text("Max: $7000");
                    }
                    break;
                case 4:
                    if ( money2 >= 800   && money2 <= 8000){
    
                        var profitDaily2 = money2 / 100 * 5;
                        var profitDaily2 = profitDaily2.toFixed(2);
                        var profitTotal2 = money2 / 100 * 5 *30;
                        var profitTotal2 = profitTotal2.toFixed(2);
                        var profitPercent2 = 5;
                        var profitPercent2 = profitPercent2.toFixed(2);
                        var profitNe2 = money2 / 100 * 5;
                        var profitNe2 = profitNe2.toFixed(2);
    
                        $("#profitDaily2").text(profitDaily2);
                        $("#profitTotal2").text(profitTotal2);
                        $("#profitPercent2").text(profitPercent2 + '%');
                        $("#profitNe2").text('$' + profitNe2);
                        //} else if(isNaN(money2) == true) {
                    }  if (money2 < 800){
                        $("#profitDaily2").text("Min: $800");
                        $("#profitTotal2").text("Min: $800");
                        $("#profitPercent2").text("Min: $800");
                        $("#profitNe2").text("Min: $800");
                    }
                        if (money2 > 8000){
                        $("#profitDaily2").text("Max: $8000");
                        $("#profitTotal2").text("Max: $8000");
                        $("#profitPercent2").text("Max: $8000");
                        $("#profitNe2").text("Max: $8000");
                    }
                    break;
            }
        }
        if($("#money2").length){
            calc();
        }
        $("#money2").keyup(function(){
            calc();
        });
    
        $("#Ultra2").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    
    });
    
                //   ******======== CALCI PART 3=========*******  //
    
    $(document).ready(function(){
        
    var percent = document.getElementById("Ultra3").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra3").value); 
        var minmoney3 	= [2500,25.00,1000.00,50.00,100.00 ];
        var maxmoney3	= [5001.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money3").val(minmoney3[0]);
        console.log($("#money3").val(minmoney3[0]));
        
        //Calculator
        function calc(){
            var money3 = parseFloat($("#money3").val());
            switch (percent) {
                case 0:
                    if( (money3 >= 10 && money3 < 9999999999)){
                        var profitDaily3 = money3 / 100 * 0.5;
                        var profitDaily3 = profitDaily3.toFixed(2);
                        var profitTotal3 = money3 / 100 * 500 * 0.5 + money3;
                        var profitTotal3 = profitTotal3.toFixed(2);
                        var profitPercent3 = 0.5;
                        var profitPercent3 = profitPercent3.toFixed(2);
                        var profitNet3 = money3 / 100 * 500 * 0.5;
                        var profitNet3 = profitNe3.toFixed(2);
    
                        $("#profitDaily3").text('$' + profitDaily3);
                        $("#profitTotal3").text('$' + profitTotal3);
                        $("#profitPercent3").text(profitPercent3 + '%');
                        $("#profitNet3").text('$' + profitNe3);
                    //} else if(isNaN(money3) == true) {
                    } if (money3 < 10){
                        $("#profitDaily3").text("Error!");
                        $("#profitTotal3").text("Error!");
                        $("#profitPercent3").text("Error!");
                        $("#profitNet3").text("Error!");
                    }
                    break;
                case 1:
                    if ( money3 >= 2500   && money3 <= 100000){
    
                        var profitDaily3 = money3 / 100 * 200;
                        var profitDaily3 = profitDaily3.toFixed(2);
                        var profitTotal3 = money3 / 100 * 200;
                        var profitTotal3 = profitTotal3.toFixed(2);
                        var profitPercent3 = 200;
                        var profitPercent3 = profitPercent3.toFixed(2);
                        var profitNet3 = money3 / 100 * 200;
                        var profitNet3 = profitNe3.toFixed(2);
    
                        $("#profitDaily3").text(profitDaily3);
                        $("#profitTotal3").text(profitTotal3);
                        $("#profitPercent3").text(profitPercent3 + '%');
                        $("#profitNet3").text('$' + profitNe3);
                        //} else if(isNaN(money3) == true) {
                    }  if (money3 < 2500){
                        $("#profitDaily3").text("Min: $2500");
                        $("#profitTotal3").text("Min: $2500");
                        $("#profitPercent3").text("Min: $2500");
                        $("#profitNet3").text("Min: $2500");
                    }
                        if (money3 > 4999){
                        $("#profitDaily3").text("Max: $4999");
                        $("#profitTotal3").text("Max: $4999");
                        $("#profitPercent3").text("Max: $4999");
                        $("#profitNet3").text("Max: $4999");
                    }
                    break;	
            }
        }
        if($("#money3").length){
            calc();
        }
        $("#money3").keyup(function(){
            calc();
        });
    
        $("#Ultra3").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    
    
        
    });
    
            //   ******======== CALCI PART 4=========*******  //
    
    
    $(document).ready(function(){
    
    var percent = document.getElementById("Ultra4").value;
        
        var percent =  parseFloat(document.getElementById("Ultra4").value); 
        var minmoney4 	= [5000,25.00,1000.00,50.00,100.00 ];
        var maxmoney4	= [5001.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money4").val(minmoney4[0]);
        console.log($("#money4").val(minmoney4[0]));
        
        //Calculator
        function calc(){
            var money4 = parseFloat($("#money4").val());
            switch (percent) {
                case 0:
                    if( (money4 >= 10 && money4 < 9999999999)){
                        var profitDaily4 = money4 / 100 * 0.5;
                        var profitDaily4 = profitDaily4.toFixed(2);
                        var profitTotal4 = money4 / 100 * 500 * 0.5 + money4;
                        var profitTotal4 = profitTotal4.toFixed(2);
                        var profitPercent4 = 0.5;
                        var profitPercent4 = profitPercent4.toFixed(2);
                        var profitNe4 = money4 / 100 * 500 * 0.5;
                        var profitNe4 = profitNe4.toFixed(2);
    
                        $("#profitDaily4").text('$' + profitDaily4);
                        $("#profitTotal4").text('$' + profitTotal4);
                        $("#profitPercent4").text(profitPercent4 + '%');
                        $("#profitNe4").text('$' + profitNe4);
                    //} else if(isNaN(money4) == true) {
                    } if (money4 < 10){
                        $("#profitDaily4").text("Error!");
                        $("#profitTotal4").text("Error!");
                        $("#profitPercent4").text("Error!");
                        $("#profitNet4").text("Error!");
                    }
                    break;
                case 1:
                    if ( money4 >= 5000   && money4 <= 500000){
    
                        var profitDaily4 = money4 / 100 * 300;
                        var profitDaily4 = profitDaily4.toFixed(2);
                        var profitTotal4 = money4 / 100 * 300;
                        var profitTotal4 = profitTotal4.toFixed(2);
                        var profitPercent4 = 300;
                        var profitPercent4 = profitPercent4.toFixed(2);
                        var profitNet4 = money4 / 100 * 300;
                        var profitNet4 = profitNe4.toFixed(2);
    
                        $("#profitDaily4").text(profitDaily4);
                        $("#profitTotal4").text(profitTotal4);
                        $("#profitPercent4").text(profitPercent4 + '%');
                        $("#profitNet4").text('$' + profitNe4);
                        //} else if(isNaN(money4) == true) {
                    }  if (money4 < 5000){
                        $("#profitDaily4").text("Min: $5000");
                        $("#profitTotal4").text("Min: $5000");
                        $("#profitPercent4").text("Min: $5000");
                        $("#profitNet4").text("Min: $5000");
                    }
                        if (money4 > 500000){
                        $("#profitDaily4").text("Max: $500000");
                        $("#profitTotal4").text("Max: $500000");
                        $("#profitPercent4").text("Max: $500000");
                        $("#profitNet4").text("Max: $500000");
                    }
                    break;	
            }
        }
        if($("#money4").length){
            calc();
        }
        $("#money4").keyup(function(){
            calc();
        });
    
        $("#Ultra4").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    
    
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    