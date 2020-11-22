$(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');
    const $submitButton = $('#submit-button')
  
    $menuButton.on('click', () => {
      $navDropdown.show();
    })
    
    $navDropdown.on('mouseleave', () => {
      $navDropdown.hide();
    })
  
  })