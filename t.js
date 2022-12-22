



const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';

  // 👇️ show div
  const box = document.getElementById('box');
  box.style.display = 'block';
});

// for list mobile footer

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// for filter overlay 
function openFilter() {
  document.getElementById("myFilter").style.width = "100%";
}

function closeFilter() {
  document.getElementById("myFilter").style.width = "0%";
}


// for search 

function openSearch() {
  document.getElementById("mySearch").style.width = "100%";
}

function closeSearch() {
  document.getElementById("mySearch").style.width = "0%";
}



















