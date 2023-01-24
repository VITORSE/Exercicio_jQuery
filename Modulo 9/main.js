$(document).ready(function(){
  $('form').on('submit', function(e) {
      e.preventDefault();
      const ativi = $('.atividade').val();
      const hour = $('.hora').val();
      const novoItem = $(' <tbody><tr><th><p>' + hour + '</p></th><th><p>' + ativi + '</p></th><th><div class="wrapper"><input type="checkbox" id="check"/><p><label for = "check">Checkbox</label></p></div></th></tr></tbody>');

      $(novoItem).appendTo('table');

      $('.atividade').val('');
      $('.hora').val('');

  })
})