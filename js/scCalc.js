window.onload = function() {

  

}

foo
flatpickr('#txtLahir', {
                "dateFormat": "d-m-Y",
                disableMobile: "true"
                });


$("#txtBerat").on("keyup change", function(e) {
    $("#txtBerat").val(($('#txtBerat').val()).replace(/\,/gi, "."));
})

$("#txtTinggi").on("keyup change", function(e) {
    $("#txtTinggi").val(($('#txtTinggi').val()).replace(/\,/gi, "."));
})

$("#txtLahir").on("keyup change", function(e) {
 $("#txtUsia").val(getAge());
})  
  
  
function getAge() {
      var start   = new Date(convertDate($('#txtLahir').val()));
      var end = new Date();
  
       month   = Math.round(((end - start ) / 1000 / 60 / 60 / 24) / 30)
      
      return month;
  
  }
  
function convertDate(dateString){
  var p = dateString.split(/\D/g);
  return [p[2],p[1],p[0] ].join("-")
}
  
  
function countWeight( gender, ages, weight ) {

  var ws1 ='';
  var ws2 ='';
  var ws3 ='';

                  if (gender === "Laki-laki") { 

                  let dbWghtBoys = dt_weight_boy.find(({ Month }) => Month >= ages);

                  ws1 = parseFloat(`${dbWghtBoys.SD3neg}`);
                  ws2 = parseFloat(`${dbWghtBoys.SD2neg}`);
                  ws3 = parseFloat(`${dbWghtBoys.SD1pls}`);

                  }

                  else if (gender === "Perempuan") {

                  let dbWghtGirl = dt_weight_girl.find(({ Month }) => Month >= ages);

                  ws1 = parseFloat(`${dbWghtGirl.SD3neg}`);
                  ws2 = parseFloat(`${dbWghtGirl.SD2neg}`);
                  ws3 = parseFloat(`${dbWghtGirl.SD1pls}`);
                  }


if (weight < ws1) {
 stat_wght = `<button class="btn btn-danger d-block mb-2" style="width:100%;" type="button">Berat badan anak <br>dalam kategori sangat kurus</button>` ; ;
 } else if ( weight > ws1 && weight < ws2 ) {
 stat_wght = `<button class="btn btn-danger d-block mb-2" style="width:100%;" type="button">Berat badan anak <br>dalam kategori kurus</button>` ;
 }
 else if ( weight >= ws2 && weight < ws3 ) {
 stat_wght = `<button class="btn btn-success d-block mb-2" style="width:100%;" type="button">Berat badan anak <br>sudah sesuai</button>` ;
 }
  else if ( weight > ws3 ) {
 stat_wght =  `<button class="btn btn-warning d-block mb-2" style="width:100%;" type="button">Berat badan anak <br>dalam kategori gemuk</button>` ;
 }


 return stat_wght;


}  


function countHeight( gender, ages, height ) {

var hs1 ='';
var hs2 ='';
var hs3 ='';

                      if (gender === "Laki-laki") { 

                      let dbHghtBoys = dt_height_boy.find(({ Month }) => Month >= ages);

                      hs1 = parseFloat(`${dbHghtBoys.SD3neg}`);
                      hs2 = parseFloat(`${dbHghtBoys.SD2neg}`);
                      hs3 = parseFloat(`${dbHghtBoys.SD1pls}`);

                      }

                      else if (gender === "Perempuan") {

                      let dbHghtGirl =dt_height_girl.find(({ Month }) => Month >= ages);

                      hs1 = parseFloat(`${dbHghtGirl.SD3neg}`);
                      hs2 = parseFloat(`${dbHghtGirl.SD2neg}`);
                      hs3 = parseFloat(`${dbHghtGirl.SD1pls}`);
                      }


if (height < hs1) {
stat_hght = `<button class="btn btn-danger d-block mb-2" style="width:100%;" type="button">Tinggi badan anak <br>dalam kategori sangat pendek</button>` ;
} else if ( height > hs1 && height < hs2 ) {
stat_hght = `<button class="btn btn-danger d-block mb-2" style="width:100%;" type="button">Tinggi badan anak <br>dalam kategori pendek</button>` ;
}
else if ( height >= hs2 && height < hs3 ) {
stat_hght =  `<button class="btn btn-success d-block mb-2" style="width:100%;" type="button">Tinggi badan anak <br>sudah sesuai</button>` ; 
}
else if ( height > hs3 ) {
stat_hght = `<button class="btn btn-warning d-block mb-2" style="width:100%;" type="button">Tinggi badan anak <br>dalam kategori sangat tinggi</button>` ;
}


return stat_hght;


}  

function resultModal(titleBox,dataNama,dataGender,dataAge,dataWeight,dataHeight) {

  var resultBegin ='';
  var resultMid1 ='';
  var resultMid2 ='';
  var resultMid3 ='';
  var resultEnd ='';
  var resultWeight ='';
  var resultHeight ='';
  


  resultWeight = countWeight( dataGender, dataAge, dataWeight );
  resultHeight = countHeight( dataGender, dataAge, dataHeight );


  resultBegin = `<div class="" id="boxModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle"
  aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document">
    
   

    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
       
         

<div class="modal-body">



<div class="modal-header">
          
          <h6>`+ titleBox +`</h6>
          <button class="close close" id="closeModal" type="button" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>  
        </div> 


<div class="container">
  
    <div class="errorModal"></div>
    <div class="user-content" style="margin-top: 15px !important">
      <h6>Nama Anak : ` + dataNama.toUpperCase() + `</h6><br>
      
      <div class="user-meta-data d-flex align-items-center justify-content-between" style="margin-top: -10px; margin-left:10px; margin-right:22px">
        

        `;
        
         if (dataGender === "Laki-laki") { 
         resultMid1 =`<p style='text-align: center;'>Jenis Kelamin<br><i class='fa fa-male' style='font-size:65px;color:#797494'></i></br><span class="counter"> </span><span><b>`+ dataGender + `</b></span></p>`;
        }  else { 
         resultMid1 =`<p style='text-align: center;'>Jenis Kelamin<br><i class='fa fa-female' style='font-size:65px;color:#797494'></i></br><span class="counter"> </span><span><b>`+ dataGender + `</b></span></p>`;
        }

        
        resultMid2 = `<p style='text-align: center;'>Usia Anak<br><i class='fa fa-calendar' style='font-size:65px;color:#797494'></i></br><span class="counter"> </span><span><b>` + dataAge + ` Bulan</b></span></p>`;
       

        resultMid3 =` </div>
      <br>
      <div class="user-meta-data d-flex align-items-center justify-content-between" style="text-align: center;margin-top: -30px; margin-left:12px; margin-right:12px">
        
        
        <p style='text-align: center;'>Berat Badan<br><i class='fa fa-universal-access' style='font-size:65px;color:#797494'></i></br><span class="counter"> </span><span><b>`+ dataWeight + ` Kg</b></span></p>
        <p style='text-align: center;'>Tinggi Badan<br><i class='fa fa-street-view' style='font-size:65px;color:#797494;'></i></br><span class="counter"> </span><span><b>`+ dataHeight + ` Cm</b></span></p>
      </div>
    </div>`;

         

  resultEnd = `</div>

  <div class="modal-footer">`   
          
           // <button type="button" id="saveData" class="btn btn-primary btn-lg btn-block"><i class='fa fa-bookmark' style='font-size:15px'></i> Simpan</button>
         + ` <button type="button" id="saveData" class="btn btn-primary btn-lg btn-block"><i class='fa fa-sign-in' style='font-size:15px'></i> Input Baru</button>
          
        </div>

</div> 



    
  </div>`;


  resultBox = resultBegin + resultMid1 + resultMid2 + resultMid3 + resultWeight + resultHeight + resultEnd ;
  

return resultBox



}
  
$("#formAntropometri").parsley({
   errorClass: 'has-danger',
   successClass: 'has-success',
   errorsWrapper: '<b><span class="alert-danger"></span></b>'
 }).on('form:validate', function() {
   $("#formAntropometri").addClass('was-validated');
 }).on('form:submit', function() {

      var dtName = $('#txtNama').val();
      var dtGender = $('#txtGender').val();
      var dtBorn = $('#txtLahir').val();
      var dtWeight = ($('#txtBerat').val()).replace(/\,/gi, ".");
      var dtHeight = ($('#txtTinggi').val()).replace(/\,/gi, ".");
      var getMnt = getAge();
    
      $('#mymodal').html(resultModal("Profil Hasil ", dtName, dtGender, getMnt, dtWeight, dtHeight ));

      
        
      

      $('#boxModal').addClass( "modal fade show" );
      $('#boxModal').attr('style', 'display: block; background-color:rgba(0,0,0,0.3)');
      $('.page-content-wrapper').attr('style', 'display:none');

              $('#closeModal').on('click', function() {

                    $('.page-content-wrapper').attr('style', 'display:block');
                    $('#boxModal').attr('style', 'display: none');

                    return false;


              }); 


              

              $('#saveData').on('click', function() {


               // saveData(dtName,dtGender,dtBorn,getMnt,dtWeight,dtHeight);

               

                location.replace("/");

                

                return false;
              }); 
              

   return false; 
 });




function saveData (dataName,dataGender,dataBorn, dataAge,dataWeight,dataHeight) {

  if (!(localStorage.getItem('dataAnak'))) {

    
    var newData =  `[{"idData": "`+ dateId() +`","name": "`+ dataName +`", "gender": "`+ dataGender + `", "born": "`+ dataBorn +`", "ages": "`+ dataAge +`" , "weight": "`+ dataWeight +`", "height": "`+ dataHeight +`" }]`;
    localStorage.setItem('dataAnak', newData)
   
  } else {
    var oldData = (localStorage.getItem('dataAnak')).slice(1, -1);
    var updateData = `[`+ oldData + `,{"idData": "`+ dateId() +`","name": "`+ dataName +`", "gender": "`+ dataGender + `", "born": "`+ dataBorn + `", "ages": "`+ dataAge +`" , "weight": "`+ dataWeight +`", "height": "`+ dataHeight +`" }]`;
    localStorage.setItem('dataAnak', updateData)
    
  }




}



function dateId() {
  var mId = new Date();
var dateString = mId.getUTCFullYear() +""+ (mId.getUTCMonth()+1) +""+ mId.getUTCDate() + "" + mId.getUTCHours() + "" + mId.getUTCMinutes() + "" + mId.getUTCSeconds();

return dateString;
}

