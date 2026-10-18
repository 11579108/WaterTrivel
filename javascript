function openFaucet(){
 // 轉把手
 document.getElementById('handle').style.transform='rotate(-80deg)';
 // 水流出現
 const stream=document.getElementById('stream');
 stream.classList.add('on');
 // 盆子積水
 setTimeout(()=>{ document.getElementById('fill').style.height='40px'; }, 300);
 // 持續噴水花
 const zone=document.querySelector('.faucet-wrap');
 let splashTimer=setInterval(()=>{
 const s=document.createElement('div');
 s.className='splash';
 s.style.setProperty('--dx',(Math.random()*40-20)+'px');
 s.style.left=(52+Math.random()*14)+'px';
 zone.appendChild(s);
 requestAnimationFrame(()=>s.classList.add('go'));
 setTimeout(()=>s.remove(),600);
 },120);
 // 按鈕鎖定
 document.getElementById('faucetBtn').style.pointerEvents='none';
 document.getElementById('faucetBtn').textContent='水正在流... 💦';
 // 轉場
 setTimeout(()=>{ clearInterval(splashTimer); go('s2'); }, 2600);
}
