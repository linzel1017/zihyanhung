function navigateToTopPage() {
}
function showContent(contentId) {
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
  
  var rightSidebar = document.getElementById('rightSidebar');
  rightSidebar.style.display = 'none';
}

function showImageInRightSidebar(imageUrl) {
  var rightSidebar = document.getElementById('rightSidebar');
  var rightImage = rightSidebar.querySelector('img');

  rightImage.src = imageUrl;
  rightSidebar.style.display = 'block';
}

function closeRightSidebar() {
  var rightSidebar = document.getElementById('rightSidebar');
  rightSidebar.style.display = 'none';
}

function navigateToTopPage() {
  window.scrollTo(0, 0);
}
