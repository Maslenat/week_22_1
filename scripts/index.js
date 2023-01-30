

 function onSearch() {
    document.getElementById('container').innerHTML="";
  
    let count = document.getElementById('count').value;
    let word = document.getElementById('word').value;
    if (count!=="" && count <=5){
      if(word !==""){
      
        fetch('https://api.giphy.com/v1/gifs/search?api_key=mtBkmqk2rzS8O8rBcUAw8g5RJtmah8X3&q=' + word + '&limit=' + count + '&offset=0&rating=g&lang=en').then(r=>r.json()).then(img=>{
          let image;
          let src;
          for (let i of img.data){
    
            console.log(i);
            image=document.createElement('iframe');
            src=i.embed_url;
            document.getElementById('container').appendChild(image);
            image.setAttribute('src', src);
            image.setAttribute('width', '300px');
            image.setAttribute('height', '300px');

          } 
          
          }).catch(error=>alert('Нет доступа к серверу'));
        }

      else alert("введите слово или фразу что ищем");
    }
    else alert("введите число картинок от 1 до 5!");

}



