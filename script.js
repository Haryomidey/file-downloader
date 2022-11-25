const input = document.querySelector("input");
const button = document.querySelector("button");
const spans = document.querySelectorAll('span');

spans.forEach(span => {
  span.addEventListener('click', () => {
    if(span.classList.contains('video')){
      input.placeholder = 'Enter or paste your video url here';
    }else if(span.classList.contains('image')){
      input.placeholder = 'Enter or paste your image url here';
    }
    else if(span.classList.contains('music')){
      input.placeholder = 'Enter or paste your music url here';
    }
    else{
      input.placeholder = 'Enter or paste your pdf url here';
    }
  })
})

button.addEventListener("click", () => {
  if(input.placeholder === 'Enter or paste your video url here'){
    downloadFile(input.value, 'New-video');
    button.innerText = "Downloading Video...";
  }
  else if(input.placeholder === 'Enter or paste your image url here'){
    downloadFile(input.value, 'New-image')
    button.innerText = "Downloading Image...";
  }
  else if(input.placeholder === 'Enter or paste your music url here'){
    downloadFile(input.value, 'New-Music')
    button.innerText = "Downloading Music...";
  }
  else if(input.placeholder === 'Enter or paste your pdf url here'){
    downloadFile(input.value, 'New-pdf');
    button.innerText = "Downloading Pdf...";
  }
  else{
    downloadFile(input.value, 'Unnamed');
    button.innerText = "Downloading File...";
  }
});


function downloadFile(url, fileName){
  fetch(url).then(res => res.blob()).then(file => {
    let tempUrl = URL.createObjectURL(file);
    const aTag = document.createElement("a");
    aTag.href = tempUrl;
    aTag.download = fileName;
    document.body.appendChild(aTag);
    aTag.click();
    button.innerText = "Download File";
    URL.revokeObjectURL(tempUrl);
    aTag.remove();
}).catch(() => {
    alert("Failed to download file!");
    button.innerText = "Download File";
});
    input.value = '';
};
