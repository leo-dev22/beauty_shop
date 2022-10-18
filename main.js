const menuBtn= document.querySelector('#menu-btn');
const closeBtn= document.querySelector('#close-btn');
const menu= document.querySelector('nav .container ul');
const navItem= document.querySelectorAll('nav ul li');
const questions= document.querySelectorAll('section#vosQuestions article');




// open side bar
menuBtn.addEventListener('click',()=>{
  menu.style.display='block';
  closeBtn.style.display='inline-block';
  menuBtn.style.display='none';
})

// close side bar
closeBtn.addEventListener('click',()=>{
  menu.style.display='none';
  closeBtn.style.display='none';
  menuBtn.style.display='inline-block';
})


// changer la classe active au click

navItem.forEach(item =>{
  const link= item.querySelector('a');
  link.addEventListener('click',()=>{
    removeActiveClass();
    link.classList.add('active');
  });
})

const removeActiveClass=()=>{
  navItem.forEach(item=>{
    const lien=item.querySelector('a');
    lien.classList.remove('active');
  })
}


// DEROULER LA REPONSE DES QUESTONS 

questions.forEach (question =>{
  question.addEventListener('click',()=>{
    question.classList.toggle('open');

    // CHANGER L'ICONE
   const icon=question.querySelector('.icon i');
   if(icon.className==='uil uil-plus'){
    icon.className='uil uil-minus';
   }else{
    icon.className='uil uil-plus';

   }
  })
});


// CHANGER LE STYLE DE LA NAVBAR AU SCROLL
window.addEventListener('scroll',()=>{
  const nav =document.querySelector('nav');

  nav.classList.toggle('window-scroll', window.screenY> 0);
  
})







