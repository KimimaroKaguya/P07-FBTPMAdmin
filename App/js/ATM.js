$(document).ready(function() { 
    var b1000='';
    var b500='';
    var b100='';
    var a1000='1000 = ';
    var a500='500 = ';
    var a100='100 = ';
    var account = '';
    var account_val='';
    var account_balance='';
    // 23,000 บาท
    $('#process').live('click',function(){       
    var balance = $('#balance').val();
    var AmountInATM = $('#AmountInATM').val();
    if(AmountInATM==0)
    {
        $('#account').html('จำนวนเงินในตู้ไม่เพียงพอ ATM');
    }else{
        if(balance.length>0){
            if(Math.floor(balance)<=Math.floor(AmountInATM)){
                if(balance.substr(-2)==0){
                    if(balance>=1000){
                        b1000 = Math.floor(balance/1000);
                        account = balance-(b1000*1000);
                        if(account>=500){
                            b500 = Math.floor(account/500);
                            account = account-(b500*500);
                            if(account>=100){
                            b100 = Math.floor(account/100);
                            }
                        }else{
                            b500 = Math.floor(account/500);
                            b100 = Math.floor(account/100);
                        }
                    account_val = a1000+b1000+' ใบ <br>'+a500+b500+' ใบ <br>'+a100+b100+' ใบ <br>';
                    account_balance = AmountInATM-balance;//คำนวนเงินที่เหลือในตู้  
                   var detail = '<div class="panel panel-white">'+
                    '<div class="panel-heading">'+account_val+'</div>'+
                    '<div class="panel-body">'+
                        '<ul class="list-icon">'+
                            '<li>จำนวนเงินในตู้ '+ AmountInATM + ' บาท'+'</li>'+
                            '<li>จำนวนเงินที่กด '+ balance + ' บาท'+'</li>'+
                            '<li>จำนวนเงินที่เหลือในตู้ '+ account_balance + ' บาท'+'</li>'  +                         
                        '</ul>'+
                    '</div>'+
                    '</div>';                         
                    $('#account').html(detail);
                    document.getElementById("AmountInATM").value = account_balance;
                    }else if(balance>500){
                        b500 = Math.floor(balance/500);
                        account = balance-(b500*500);
                            if(account>=100){
                            b100 = Math.floor(account/100);
                            }
                        account_val = a500+b500+' ใบ '+a100+b100+' ใบ ';
                        account_balance = AmountInATM-balance;//คำนวนเงินที่เหลือในตู้
                        var detail = '<div class="panel panel-white">'+
                                        '<div class="panel-heading">'+account_val+'</div>'+
                                        '<div class="panel-body">'+
                                            '<ul class="list-icon">'+
                                                '<li>จำนวนเงินในตู้ '+ AmountInATM + ' บาท'+'</li>'+
                                                '<li>จำนวนเงินที่กด '+ balance + ' บาท'+'</li>'+
                                                '<li>จำนวนเงินที่เหลือในตู้ '+ account_balance + ' บาท'+'</li>'+                           
                                            '</ul>'+
                                        '</div>'+
                                        '</div>';                         
                    $('#account').html(detail);
                        document.getElementById("AmountInATM").value = account_balance;                          
                    }else{
                        b100 = Math.floor(balance/100);
                        account_val = a100+b100+' ใบ ';
                        account_balance = AmountInATM-balance;//คำนวนเงินที่เหลือในตู้                                
                        var detail = '<div class="panel panel-white">'+
                                        '<div class="panel-heading">'+account_val+'</div>'+
                                        '<div class="panel-body">'+
                                            '<ul class="list-icon">'+
                                                '<li>จำนวนเงินในตู้ '+ AmountInATM + ' บาท'+'</li>'+
                                                '<li>จำนวนเงินที่กด '+ balance + ' บาท'+'</li>'+
                                                '<li>จำนวนเงินที่เหลือในตู้ '+ account_balance + ' บาท'+'</li>' +                          
                                            '</ul>'+
                                        '</div>'+
                                        '</div>';                         
                    $('#account').html(detail);
                        document.getElementById("AmountInATM").value = account_balance;  
                    }
                }else{
                    $('#balance').focus();
                    $('#account').html('ถอนต่ำกว่าหลักสิบไม่ได้คับ');                                            
                    // alert('ถอนต่ำกว่าหลักสิบไม่ได้คับ');
                }
            }else{
                $('#balance').focus();
                $('#account').html('จำนวนเงินของคุณไม่พอ'); 
                // alert('จำนวนเงินของคุณไม่พอ');                        
            }
            }else{
                $('#account').html('คุณยังไม่ได้ใส่จำนวนเงิน');
            // alert('คุณยังไม่ได้ใส่จำนวนเงิน');
            $('#balance').focus();
        }
    }
});

});