function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    
    content.classList.toggle('expanded');
    
    var stage = content.closest('.stage');
    
    var arrow = stage.querySelector('img');
    if (arrow) {
        arrow.classList.toggle('flipped');
    }
}

