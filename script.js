function showToast(){
  const t = document.getElementById('toast');
  t.style.display = 'block';

  setTimeout(()=>{
    t.style.display = 'none';
  }, 2500);
}
