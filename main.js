window.onload = () => {
    const backgroundController = new BackgroundController();

    backgroundController.displayBackground();
}

class BackgroundController {
    textToDisplay = `<div class="background-text-line">public class ManufacturaSukcesu { // tworzenie klasy za pomoca slowa kluczowego class</div>
        <div class="background-text-line">public int satisfiedCustomersFreq = 100; // inicjalizacja zmiennej widocznej dla innych klas</div>
        <div class="background-text-line">private String ourSecret = 'uczymy praktycznie'; // inicjalizacja zmiennej niewidocznej na zewnatrz</div>
        <div class="background-text-line">public void teach() { // metoda void, ktora nie zwraca wartosci, nie konczymy jej ciala slowem return</div>
        <div class="background-text-line">System.out.println('this is a Java code'); // cialo funkcji teach(). wypisujemy napis na ekranie</div>
        <div class="background-text-line">} // zakonczenie metody nawiasem klamrowym konczacym zamykajacym logike w ciele tej metody</div>
        <div class="background-text-line">}</div>`

    displayBackground() {
        const textContainer = document.querySelector('#text-container');
        textContainer.innerHTML = this.textToDisplay;

        setTimeout(() => {
            this.rotate('text-container');
            this.makeRandomHorizontalMove();
        }, 2000)
    }

    rotate(elementId) {
        const element = document.querySelector(`#${elementId}`);
        element.classList.add('rotated');
    }

    makeRandomHorizontalMove() {
        document.querySelectorAll('.background-text-line').forEach(element => {
            element.style.marginLeft = `${Math.floor(Math.random() * 20 - 10)*100}px`;
        })
    }
}