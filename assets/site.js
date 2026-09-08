
(function(){
  var pre=document.getElementById('preloader');
  function hide(){ if(!pre) return; pre.classList.add('hide'); document.body.classList.remove('is-loading'); setTimeout(function(){ if(pre) pre.remove(); },400); }
  document.body.classList.add('is-loading');
  window.addEventListener('load', function(){ setTimeout(hide, 250); });
  setTimeout(hide, 2000);

  var btn=document.querySelector('.nav-toggle');
  var nav=document.getElementById('site-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var open=document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded','false');
    });
  });
  window.addEventListener('resize', function(){
    if(window.innerWidth>1040){ document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded','false'); }
  });
})();
