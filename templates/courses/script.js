// Функция для открытия модального окна
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
