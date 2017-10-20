
$(function () {
    $('.grid').on('click', function () {
        $.getJSON('datas/photos.json', function (data) {
            $.each(data, function (index, d) {

                $('#zone1').append('Id : ' + d.Id1 + '<br>');
                $('#zone1').append('Nom : ' + d.Nom1 + '<br>');
                $('#zone1').append('Déscription : ' + d.Description1 + '<br><br>');
                $('#zone1').append('Chemin de l image: ' + d.Chemin1 + '<br><br>');
                $('#zone1').append('Coordonées gps : ' + d.GPS1 + '<br><br>');
                
               
            });
        });
    });
});


// $(function () {
//     $('.grid').on('click', function () {
//         $.getJSON('datas/photos.json', function (data) {
//             $.each(data, function (index, d) {

//                 $('#zone2').append('Id : ' + d.Id23 + '<br>');
//                 $('#zone2').append('Nom : ' + d.Nom23 + '<br>');
//                 $('#zone2').append('Déscription : ' + d.Description23 + '<br><br>');
//                 $('#zone2').append('Chemin de l image: ' + d.Chemin23 + '<br><br>');
//                 $('#zone2').append('Coordonées gps : ' + d.GPS23 + '<br><br>');
               
//             });
//         });
//     });
// });




// $(function () {
//     $('.grid').on('click', function () {
//         $.getJSON('datas/photos.json', function (data) {
//             $.each(data, function (index, d) {
                
//                 $('#zone3').append('Id : ' + d.Id3 + '<br>');
//                 $('#zone3').append('Nom : ' + d.Nom3 + '<br>');
//                 $('#zone3').append('Déscription : ' + d.Description3 + '<br><br>');
//                 $('#zone3').append('Chemin de l image: ' + d.Chemin3 + '<br><br>');
//                 $('#zone3').append('Coordonées gps : ' + d.GPS3 + '<br><br>');
//             });
//         });
//     });
// });








