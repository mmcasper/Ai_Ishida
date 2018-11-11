const secureLinks=('a[href^="http"]');
$(secureLinks).attr('target','_blank');

// $('a[href^="https://"]').attr('target', '_blank');


function myFunction() {
    alert('Pricing Coming Soon!');
}

