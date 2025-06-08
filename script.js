document.addEventListener('DOMContentLoaded', () => {
  // Kart hover efekti
  const cards = document.querySelectorAll('.social-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '';
    });
  });

  // Footer yılı otomatik güncelleme
  const footer = document.querySelector('footer');
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `© ${currentYear} GamerX • Tüm hakları saklıdır.`;
  }
});