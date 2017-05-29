
/**
* Theme: Ubold Admin Template
* Author: Coderthemes
* Demo: Editable (Inline editing)
* 
*/


$(function(){

    //modify buttons style
    $.fn.editableform.buttons = 
    '<button type="submit" class="btn btn-primary editable-submit btn-sm waves-effect waves-light"><i class="md md-done"></i></button>' +
    '<button type="button" class="btn btn-white editable-cancel btn-sm waves-effect"><i class="md md-clear"></i></button>';
    
    //editables 
    $('#username').editable({
     type: 'text',
     pk: 1,
     name: 'username',
     title: 'Enter username'
   });
    
    $('#firstname').editable({
      validate: function(value) {
       if($.trim(value) == '') return 'This field is required';
     }
   });
    
    $('#cobitselect').editable({
      source: [
      {value: 1, text: '5.Optimizat'},
      {value: 2, text: '4.Gestionat şi măsurabil'},
      {value: 3, text: '3.Documentat'},
      {value: 4, text: '2.Minim'},
      {value: 5, text: '0.Inexistent'},
      {value: 6, text: 'Nu este aplicabil'}
      ],
      display: function(value, sourceData) {
       var colors = {1: "#5fbeaa", 2: "#5fbeaa", 3: "#5fbeaa", 4: "#5fbeaa", 5: "#5fbeaa", 6: "#5fbeaa"},
       elem = $.grep(sourceData, function(o){return o.value == value;});

       if(elem.length) {
         $(this).text(elem[0].text).css("color", colors[value]);
       } else {
         $(this).empty();
       }
     }
   });
    
    $('#status').editable();
    
    $('#group').editable({
      showbuttons: false
    });

    $('#dob').editable();

    $('#implementation').editable({
      showbuttons: 'bottom'
    });
    $('#responsible').editable({
      showbuttons: 'bottom'
    });

    //inline


  $('#inline-username').editable({
     type: 'text',
     pk: 1,
     name: 'username',
     title: 'Enter username',
     mode: 'inline'
   });
    
    $('#inline-firstname').editable({
      validate: function(value) {
       if($.trim(value) == '') return 'This field is required';
     },
     mode: 'inline'
   });
    
    $('#inline-cobitselect').editable({
      prepend: "not selected",
      mode: 'inline',
      source: [
      {value: 1, text: '5.Optimizat'},
      {value: 2, text: '4.Gestionat şi măsurabil'},
      {value: 3, text: '3.Documentat'},
      {value: 4, text: '2.Minim'},
      {value: 5, text: '0.Inexistent'},
      {value: 6, text: 'Nu este aplicabil'}
      ],
      display: function(value, sourceData) {
       var colors = {1: "#5fbeaa", 2: "#5fbeaa", 3: "#5fbeaa", 4: "#5fbeaa", 5: "#5fbeaa", 6: "#5fbeaa"},
       elem = $.grep(sourceData, function(o){return o.value == value;});

       if(elem.length) {
         $(this).text(elem[0].text).css("color", colors[value]);
       } else {
         $(this).empty();
       }
     }
   });
    
    $('#inline-status').editable({
        mode: 'inline',
        inputclass: 'string'
    });
    
    $('#inline-group').editable({
      showbuttons: false,
      mode: 'inline'
    });

    $('#inline-dob').editable({mode: 'inline'});

    $('#inline-comments').editable({
      showbuttons: 'bottom',
      mode: 'inline'
    });



  });