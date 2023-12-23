

function loadPage(page) {
  // Use AJAX to fetch content from the server
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Replace the content of the 'content' div with the fetched HTML
          document.getElementById('content').innerHTML = xhr.responseText;
      }
  };
  xhr.open('GET', page + '.html', true);
  xhr.send();

  // Prevent the default behavior of the anchor tag (page refresh)
  event.preventDefault();
}

// Load the default page on initial page load
window.onload = function () {
  loadPage('home');
};


  document.querySelectorAll('.nav-link').forEach((item) => {
     item.addEventListener('click', (event) => {
       document.querySelectorAll('.nav-link').forEach((item) => {
         item.classList.remove('active');
         console.log("jatu");
       });
       item.classList.add('active');
      
     });});
     
     
