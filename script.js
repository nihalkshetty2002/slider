
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  document.querySelectorAll('.text-overlay').forEach((text) => {
    let isDragging = false;
    let offsetX, offsetY;
  
    text.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - text.getBoundingClientRect().left;
      offsetY = e.clientY - text.getBoundingClientRect().top;
    });
  
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const parent = text.parentElement;
      const parentRect = parent.getBoundingClientRect();
      let newX = e.clientX - parentRect.left - offsetX;
      let newY = e.clientY - parentRect.top - offsetY;
  
      newX = Math.max(0, Math.min(newX, parentRect.width - text.offsetWidth));
      newY = Math.max(0, Math.min(newY, parentRect.height - text.offsetHeight));
  
      text.style.left = `${newX}px`;
      text.style.top = `${newY}px`;
    });
  
    window.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
  
  const fontStyleInput = document.getElementById('font-style');
  const fontSizeInput = document.getElementById('font-size');
  const fontColorInput = document.getElementById('font-color');
  
  document.querySelectorAll('.text-overlay').forEach((text) => {
    fontStyleInput.addEventListener('change', () => {
      text.style.fontFamily = fontStyleInput.value;
    });
  
    fontSizeInput.addEventListener('input', () => {
      text.style.fontSize = `${fontSizeInput.value}px`;
    });
  
    fontColorInput.addEventListener('input', () => {
      text.style.color = fontColorInput.value;
    });
  });

 
document.getElementById("add-text").addEventListener("click", () => {
    const activeSlide = document.querySelector(".swiper-slide-active .image-container");
    const newText = document.createElement("div");
    newText.classList.add("text-overlay");
    newText.contentEditable = "true";
    newText.textContent = "New Text";
    activeSlide.appendChild(newText);
    enableTextDrag(newText);
    newText.click(); 
  });
  