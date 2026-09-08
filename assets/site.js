
(function(){
  var pre=document.getElementById('preloader');
  function hide(){ if(!pre) return; pre.classList.add('hide'); document.body.classList.remove('is-loading'); setTimeout(function(){ if(pre) pre.remove(); },450); }
  document.body.classList.add('is-loading');
  window.addEventListener('load', function(){ setTimeout(hide, 280); });
  setTimeout(hide, 2200);

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

  var more=document.querySelector('.more');
  var moreBtn=document.querySelector('.more-btn');
  if(more && moreBtn){
    moreBtn.addEventListener('click', function(e){
      e.stopPropagation();
      more.classList.toggle('open');
      moreBtn.setAttribute('aria-expanded', more.classList.contains('open') ? 'true' : 'false');
    });
    document.addEventListener('click', function(){ more.classList.remove('open'); moreBtn.setAttribute('aria-expanded','false'); });
  }
})();
