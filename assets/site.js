
(function(){
  var pre=document.getElementById('preloader');
  function hide(){ if(!pre) return; pre.classList.add('hide'); document.body.classList.remove('is-loading'); setTimeout(function(){ pre.remove(); },500); }
  document.body.classList.add('is-loading');
  window.addEventListener('load', function(){ setTimeout(hide, 350); });
  setTimeout(hide, 2500);
  var btn=document.querySelector('.nav-toggle');
  if(btn){
    btn.addEventListener('click', function(){
      var open=document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav a').forEach(function(a){
      a.addEventListener('click', function(){ document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded','false'); });
    });
  }
})();
