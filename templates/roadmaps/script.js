<<<<<<< HEAD
// function toggleContent(id) {
//     var content = document.getElementById(id);
//     var allContents = document.querySelectorAll('.content');

//     // Сначала закрываем все открытые блоки
//     allContents.forEach(function(otherContent) {
//         if (otherContent.id !== id) {
//             otherContent.classList.remove('expanded');
//         }
//     });

//     // Затем переключаем состояние выбранного блока
//     content.classList.toggle('expanded');
// }

function toggleContent(contentId) {
    // Находим элемент с id, соответствующим переданному contentId
    var content = document.getElementById(contentId);
    
    // Переключаем класс 'expanded' для контента
    content.classList.toggle('expanded');
    
    // Находим родительский элемент 'stage', чтобы получить к нему доступ
    var stage = content.closest('.stage');
    
    // В родительском элементе находим <img> и переключаем класс 'flipped'
=======
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    
    content.classList.toggle('expanded');
    
    var stage = content.closest('.stage');
    
>>>>>>> 66677e9 (first commit)
    var arrow = stage.querySelector('img');
    if (arrow) {
        arrow.classList.toggle('flipped');
    }
}

