"use strict";
$(document).ready(function () {


  $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
  notyf.open({
    type: 'purple',
    duration: 5500,
    message: 'Gerando <b>Token Bearer</b> para acesso a API.'
  });


  $("#table").addClass('is-loading');
  $('.has-loader').addClass('has-loader-active');

  sessionStorage.setItem("data", "");

 

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.jntville.com.br/api/user/request_token", true);
  xhr.setRequestHeader('X-Api-Key', 'BAB69604455A86B6D0FF4923FEE534F2');
  xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send("username=api@jntville.com.br&password=BAB69604455A");
  xhr.onload = function() {
    console.log("Generate Token")
    console.log(this.responseText);
    var token = JSON.parse(this.responseText);
    console.log(token);
    console.log(token.data.token);


      
    sessionStorage.setItem("token", token.data.token);


    
  var getxh = new XMLHttpRequest();

  getxh.open("GET", "https://api.jntville.com.br:443/api/vsolution/all");
  getxh.setRequestHeader('X-Api-Key', 'BAB69604455A86B6D0FF4923FEE534F2');
  getxh.setRequestHeader('X-Token',  sessionStorage.getItem("token"));

  getxh.send();
  getxh.onload = function(){
    

    var moreIcon = feather.icons['more-horizontal'].toSvg();


    var res = moreIcon.replace("\"", "'")
    console.log(res);
    console.log(moreIcon);



    console.log("get data api")
    console.log(this.responseText);
    var retur = JSON.parse(this.responseText);
    console.log(retur.data);
   

    var String_dJSon;
    var x = 0;
    for (var i = 0; i < retur.data.vsolution.length; i++) {
    
      console.log(retur.data.vsolution[i].nome);
      console.log(retur.data.vsolution[i].id)
      console.log(i);

      
      if(i==0){
      String_dJSon = '{"data":['; }
      if(i == 0){
        var rowActionDropdown = "<div class='buttons'><button id='id\-" +retur.data.vsolution[i].id +"' class='button h-button is-primary is-elevated table' onclick='myFunction(" +retur.data.vsolution[i].id +")'><span class='icon'><i class='fas fa-edit'></i></span><span>Editar</span></button></div>";
        var nome = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].nome+"</span>";
        var check = "<div class='control'><label class='checkbox is-circle is-primary is-outlined'><input name='checkid' value='"+retur.data.vsolution[i].id+"' type='checkbox'><span></span></label></div>";
        var cnpj = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].cnpj+"</span>";
        var email = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].email+"</span>";
        var cidade = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].cidade+"</span>";
      String_dJSon +=  '{"checkbox":"'+check+'","picture":"'+cnpj+'","nome":"'+nome+'","position":"'+retur.data.vsolution[i].moeda+'","status":"'+cidade+'","action": "'+rowActionDropdown+'"},';
      
  
  
      }

      if(i < (retur.data.vsolution.length-1) && (i != 0)) {
        var rowActionDropdown = "<div class='buttons'><button id='id\-" +retur.data.vsolution[i].id +"' class='button h-button is-primary is-elevated table' onclick='myFunction(" +retur.data.vsolution[i].id +")'><span class='icon'><i class='fas fa-edit'></i></span><span>Editar</span></button></div>";
      
        var nome = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].nome+"</span>";
        var check = "<div class='control'><label class='checkbox is-circle is-primary is-outlined'><input name='checkid' value='"+retur.data.vsolution[i].id+"' type='checkbox'><span></span></label></div>";
        var cnpj = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].cnpj+"</span>";
        var email = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].email+"</span>";
        var cidade = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].cidade+"</span>";
      String_dJSon +=  '{"checkbox":"'+check+'","picture":"'+cnpj+'","nome":"'+nome+'","position":"'+retur.data.vsolution[i].moeda+'","status":"'+cidade+'","action": "'+rowActionDropdown+'"},';
      
  
  
      }
    


      if(i == retur.data.vsolution.length-1){
        var rowActionDropdown = "<div class='buttons'><button id='id\-" +retur.data.vsolution[i].id +"' class='button h-button is-primary is-elevated table' onclick='myFunction(" +retur.data.vsolution[i].id +")'><span class='icon'><i class='fas fa-edit'></i></span><span>Editar</span></button></div>";
      
        var nome = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].nome+"</span>";
        var check = "<div class='control'><label class='checkbox is-circle is-primary is-outlined'><input name='checkid' value='"+retur.data.vsolution[i].id+"' type='checkbox'><span></span></label></div>";
        var cnpj = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].cnpj+"</span>";
        var email = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].email+"</span>";
        var cidade = "<span class='has-dark-text dark-inverted is-font-alt is-weight-600 rem-90'>"+retur.data.vsolution[i].cidade+"</span>";
      String_dJSon +=  '{"checkbox":"'+check+'","picture":"'+cnpj+'","nome":"'+nome+'","position":"'+retur.data.vsolution[i].moeda+'","status":"'+cidade+'","action": "'+rowActionDropdown+'"}]}';
      
      }

      
      x ++;
    }


    var datass;
    datass = JSON.parse(String_dJSon);
    console.log("Stign for");
    console.log(String_dJSon);

    console.log("Stign for" + (String_dJSon));
  if ($('#users-datatable').length) {
    
    notyf.open({
      type: 'info',
      duration: 7500,
      message: '<b>Token Bearer</b> Gerada com sucesso para mais detalhes, consulte via <b>DEV CONSOLE</b>'
    });


    var datatable = new DataTable(document.querySelector('#users-datatable'), {
      pageSize: 10,
      sort: {
        checkbox: false,
        picture: true,
        name: false,
        position: false,
        status: true,
        action: false
      },
      filters: {
        checkbox: false,
        picture: true,
        name: false,
        position: 'select',
        status: true,
        action: false
      },
      filterText: 'Pesquisar... ',
      filterInputClass: 'input',
      counterText: function counterText(currentPage, totalPage, firstRow, lastRow, totalRow) {
        return 'Mostrando ' + firstRow + ' a ' + lastRow + ' de ' + totalRow + ' Empresas';
      },
      counterDivSelector: '.datatable-info span',
      pagingDivSelector: "#paging-first-datatable",
      firstPage: false,
      lastPage: false,
      nextPage: '<i class="fas fa-angle-right"></i>',
      prevPage: '<i class="fas fa-angle-left"></i>',
      afterRefresh: function afterRefresh() {
        if (env === 'development') {
          changeDemoImages();
        }

   
        
      },
      data: datass.data
    });

   
    setTimeout(function () {
      //Change demo images
      if (env === 'development') {
        changeDemoImages();
      } //initUserPopovers();

    
        $('.has-loader').removeClass('has-loader-active');
        $("#table").removeClass('is-loading no-click');
      
      adjustDropdowns();
      customizeDatatable();
    }, 1000);
  }


  }

  console.log( sessionStorage.getItem("token"));


  
  }

  
  $( "#deletar" ).click(function() {

    

    $('input:checkbox[name=checkid]').each(function() 
    {    
    if($(this).is(':checked'))


     // alert($(this).val());


      
      idempresa = $(this).val();


      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.jntville.com.br/api/vsolution/delete", true);
      xhr.setRequestHeader('X-Api-Key', 'BAB69604455A86B6D0FF4923FEE534F2');
      xhr.setRequestHeader('X-Token',  sessionStorage.getItem("token"));
      xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   

      xhr.send("id="+idempresa);
      xhr.onload = function() {
        var response = JSON.parse(this.responseText);
        console.log(response.message.length);
        if(response.message.length == 19){



        }else{



          notyf.open({
            type: 'purple',
            duration: 5500,
            message: 'Registro deletado com sucesso'
          });
          
         

          setTimeout(function () {
            location.reload();
          }, 6000);

        

        }

   
      }

      });

  })


  $( "#getcnpj" ).click(function() {


  
    
    $("#table").addClass('is-loading');
    $('.has-loader').addClass('has-loader-active');
    
    var param = $("#cnpj").val();

      var cnpjlimpo;
      var cnpjlimpo1;
      var cnpjlimpo2;

     
     cnpjlimpo = param.split('/').join('')
     cnpjlimpo1 = cnpjlimpo.split('.').join('')
     cnpjlimpo2 = cnpjlimpo1.split('-').join('')

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.jntville.com.br/cnpj.php?cnpj="+cnpjlimpo2);
    
   
    xhr.send();
    xhr.onload = function() {
      var response = JSON.parse(this.responseText);
      console.log(response);

      notyf.open({
        type: 'purple',
        duration: 5500,
        message: 'CNPJ encontrado com sucesso'
      });

      $("#contentmodal").removeClass('has-loader-active');
      $("#contentmodal").removeClass('is-loading no-click');

      $('#cnpj').val(response.cnpj);
      $('#sosical').val(response.nome);

      $('#cep').val(response.cep);
      $('#logradouro').val(response.logradouro);
      $('#numero').val(response.numero);
      $('#bairro').val(response.bairro);
      $('#cidade').val(response.municipio);
      $('.has-loader').removeClass('has-loader-active');
      $("#table").removeClass('is-loading no-click');

    }

  });


  $( "#fechar" ).click(function() {
    
    $('#cnpj').val("");
    $('#sosical').val("");
    $('#modeda').val("");
    $('#cotacao').val("");
    $('#cep').val("");
    $('#logradouro').val("");
    $('#numero').val("");
    $('#bairro').val("");
    $('#cidade').val("");
    $('#idempresa').val("");
  });

  $( "#addempresa" ).click(function() {
    
    $('#cnpj').val("");
    $('#sosical').val("");
    $('#modeda').val("");
    $('#cotacao').val("");
    $('#cep').val("");
    $('#logradouro').val("");
    $('#numero').val("");
    $('#bairro').val("");
    $('#cidade').val("");
    $('#idempresa').val("");
    sessionStorage.setItem("add", 1);
  })
  

  $( "#salvar" ).click(function() {




    $("#contentmodal").addClass('is-loading');
    $("#contentmodal").addClass('has-loader-active');

    

    var add = sessionStorage.getItem("add")

    if(add == 1){

    var cnpj = $('#cnpj').val();
   var social = $('#sosical').val();
   var moeda = $('#moeda').val();
   var cotacao = $('#cotacao').val();
   var cep = $('#cep').val();
   var logradouro = $('#logradouro').val();
   var numero = $('#numero').val();
   var bairro = $('#bairro').val();
   var cidade = $('#cidade').val();
   var idempresa = $('#idempresa').val();
    

   var xhr = new XMLHttpRequest();
   xhr.open("POST", "https://api.jntville.com.br/api/vsolution/add", true);
   xhr.setRequestHeader('X-Api-Key', 'BAB69604455A86B6D0FF4923FEE534F2');
   xhr.setRequestHeader('X-Token',  sessionStorage.getItem("token"));
   xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   //{"status":true,"message":"Detail Vsolution","data":{"vsolution":{"id":"1","cnpj":"9482840284092848290","nome":"njnknknjkn","email":"jk98s@kmnjknvf.com","moeda":"R$","cotacao":"60000","logradouro":"rua jnvjfnvfjn","numero":"45","complemento":"casa","cep":"37410045","bairro":"centro","cidade":"tres coracoes"}}}
   xhr.send("id="+idempresa+"&cnpj="+cnpj+"&nome="+social+"&email="+cnpj+"&moeda="+moeda+"&cotacao="+cotacao+"&logradouro="+logradouro+"&numero="+numero+"&cep="+cep+"&bairro="+bairro+"&cidade="+cidade+"");
   
      if(cnpj.length > 11){

   xhr.onload = function() {

            if(response.message.length == 56){
                $("#contentmodal").removeClass('has-loader-active');
                $("#contentmodal").removeClass('is-loading no-click');
                var response = JSON.parse(this.responseText);
                console.log(response.message);
                console.log(response.message.length);

                notyf.open({
                  type: 'green',
                  duration: 5500,
                  message: '<h3>Dados gravado com sucesso para a empresa: <b>'+social+'</b> </h3>'
                });
                $("#contentmodal").removeClass('has-loader-active');
                $("#contentmodal").removeClass('is-loading no-click');

            }else{

                      notyf.error("Bearer Token Inválido Recarreque a página para tentar resolver o problema");
                      $("#contentmodal").removeClass('has-loader-active');
                      $("#contentmodal").removeClass('is-loading no-click');
            }

      }
      }else{

     
        $("#cnpj").addClass('is-danger-focus');
        $( "#cnpj" ).focus();
        notyf.error("O campo CNPJ é obrigatório");
                      $("#contentmodal").removeClass('has-loader-active');
                      $("#contentmodal").removeClass('is-loading no-click');
      }
   

      



    }else{

   var cnpj = $('#cnpj').val();
   var social = $('#sosical').val();
   var moeda = $('#moeda').val();
   var cotacao = $('#cotacao').val();
   var cep = $('#cep').val();
   var logradouro = $('#logradouro').val();
   var numero = $('#numero').val();
   var bairro = $('#bairro').val();
   var cidade = $('#cidade').val();
   var idempresa = $('#idempresa').val();
    

   var xhr = new XMLHttpRequest();
   xhr.open("POST", "https://api.jntville.com.br/api/vsolution/update", true);
   xhr.setRequestHeader('X-Api-Key', 'BAB69604455A86B6D0FF4923FEE534F2');
   xhr.setRequestHeader('X-Token',  sessionStorage.getItem("token"));
   xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   //{"status":true,"message":"Detail Vsolution","data":{"vsolution":{"id":"1","cnpj":"9482840284092848290","nome":"njnknknjkn","email":"jk98s@kmnjknvf.com","moeda":"R$","cotacao":"60000","logradouro":"rua jnvjfnvfjn","numero":"45","complemento":"casa","cep":"37410045","bairro":"centro","cidade":"tres coracoes"}}}
   xhr.send("id="+idempresa+"&cnpj="+cnpj+"&nome="+social+"&email="+cnpj+"&moeda="+moeda+"&cotacao="+cotacao+"&logradouro="+logradouro+"&numero="+numero+"&cep="+cep+"&bairro="+bairro+"&cidade="+cidade+"");
   xhr.onload = function() {

  
     var response = JSON.parse(this.responseText);
      console.log(response.message);
      console.log(response.message.length);
      if(response.message.length == 15){
        $("#contentmodal").removeClass('has-loader-active');
        $("#contentmodal").removeClass('is-loading no-click');
        notyf.open({
          type: 'warning',
          message: 'Não encontramos uma alteração de dados'
        });
      }
        if(response.message.length == 57){
          $("#contentmodal").removeClass('has-loader-active');
          $("#contentmodal").removeClass('is-loading no-click');

          notyf.open({
            type: 'green',
            duration: 5500,
            message: '<h3>Dados gravado com sucesso para a empresa: <b>'+social+'</b> </h3>'
          });
         
         
        }
        
        if(response.message.length == 24){


          
          notyf.error("Bearer Token Inválido Recarreque a página para tentar resolver o problema");

        }
        
      }
    
     
   }
   

   console.log(cnpj +social + +moeda + cotacao + cep + logradouro + numero + bairro + cidade + idempresa);
   
   
  });

});



function myFunction($param) {
  sessionStorage.setItem("add", 0);

  //init preloader
  $("#contentmodal").addClass('is-loading');
  $("#contentmodal").addClass('has-loader-active');


      $("#demo-large-modal").addClass("is-active");
      var getDetailxh = new XMLHttpRequest();
      getDetailxh.open("GET", "https://api.jntville.com.br/api/vsolution/detail?id="+$param);
      getDetailxh.setRequestHeader('X-Api-Key', 'BAB69604455A86B6D0FF4923FEE534F2');
      getDetailxh.setRequestHeader('X-Token',  sessionStorage.getItem("token"));

      getDetailxh.send();
      getDetailxh.onload = function(){

        console.log(this.responseText);
        var dadosempresa = JSON.parse(this.responseText);

        
        $('#cnpj').val(dadosempresa.data.vsolution.cnpj);
        $('#sosical').val(dadosempresa.data.vsolution.nome);
        $('#moeda').val(dadosempresa.data.vsolution.moeda);
        $('#cotacao').val(dadosempresa.data.vsolution.cotacao);
        $('#cep').val(dadosempresa.data.vsolution.cep);
        $('#logradouro').val(dadosempresa.data.vsolution.logradouro);
        $('#numero').val(dadosempresa.data.vsolution.numero);
        $('#bairro').val(dadosempresa.data.vsolution.bairro);
        $('#cidade').val(dadosempresa.data.vsolution.cidade);
        $('#idempresa').val(dadosempresa.data.vsolution.id);


        //close preloader
        $("#contentmodal").removeClass('has-loader-active');
        $("#contentmodal").removeClass('is-loading no-click');

      }






}

