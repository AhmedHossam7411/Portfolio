// create popup on gallery images

let ourGallery= document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click',()=>{
         let overlay=document.createElement("div");
         overlay.className='popupOverlay';
         document.body.appendChild(overlay); //add to body

         let popupBox=document.createElement('div');
         popupBox.className='popupBox';
         document.body.appendChild(popupBox);
         
         if(img.alt!==null){

         let popupHeading=document.createElement('h3');
         let imgText=document.createTextNode(img.alt);
         popupHeading.appendChild(imgText);
         popupBox.appendChild(popupHeading);
         }

         let popupImg= document.createElement('img');
         popupImg.src=img.src;
         popupBox.appendChild(popupImg); //add to popup box
          
          let closeButton=document.createElement('span');
          let closeButtonText=document.createTextNode('X');
          closeButton.appendChild(closeButtonText);
          closeButton.className='closeButton';
          popupBox.appendChild(closeButton);
    })
})

document.addEventListener('click',(e)=>{
    if(e.target.className=='closeButton'){
        document.querySelector('.popupOverlay').remove();
        document.querySelector('.popupBox').remove();
        
    }
})