const tl = gsap.timeline()
  .set('svg', {opacity:1})
  .set('.scratches', {rotation:180, x:299, y:155})
  .from('#cardMask rect', {scale:0, rotation:20, duration:2, transformOrigin:'50% 50%', ease:'expo.inOut'}, 0)
  .from('#coil', {scale:0.5, rotation:-30, duration:2, transformOrigin:'66% 42%', ease:'expo.inOut'}, 0)
  .from('#coil', {attr:{'stroke-dashoffset':-28}, ease:'none', duration:1, repeat:-1}, 0.5)
  .from('.centerC', {scale:0.8, transformOrigin:'50% 50%', duration:1, ease:'elastic.out(2)', stagger:0.1}, 0.8)
  .from('.logoPt', {x:(i)=>[18,-10][i], duration:1.2, ease:'expo.inOut'}, 0.9)
  .from('svg text', {x:-40, duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
  .from('.txtBox', {scaleX:0, transformOrigin:'100% 0', duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
  .fromTo('#box1', {transformOrigin:'50% 50%'},{rotation:'+=45', scale:()=>gsap.utils.random(0.5,1.5), ease:'expo.inOut', duration:1, repeat:-1, repeatRefresh:true, repeatDelay:0.3}, 1)
  
document.querySelectorAll('.star').forEach(function(s) {
  gsap.fromTo(s, {
    x:()=>Math.random()*600,
    y:()=>Math.random()*300,
    scale:0,
    transformOrigin:'50% 50%'
  },{
    scale:1,
    yoyo:true,
    repeat:-1,
    repeatRefresh:true,
    duration:()=>gsap.utils.random(0.6,1),
    ease:'power1.inOut',
    delay:Math.random()
  });
});

window.onclick =()=> tl.play(0);