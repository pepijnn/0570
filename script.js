const knoppen = document.querySelectorAll('.knop');

knoppen.forEach(knop => {
  knop.addEventListener('click', () => {
    knop.classList.add('clicked');
    setTimeout(() => {
      knop.classList.remove('clicked');
    }, 1000); // Terugzetten naar oude kleur na 1000 milliseconden (1 seconden)
  });
});
