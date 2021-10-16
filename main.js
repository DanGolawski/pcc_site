window.onload = () => {
    const backgroundController = new BackgroundController();

    backgroundController.displayBackground();
}

class BackgroundController {
    textToDisplay = `<div class="background-text-line">public class ManufacturaSukcesu { // tworzenie klasy za pomoca slowa kluczowego class</div>
        <div class="background-text-line">&nbsp&nbsppublic int satisfiedCustomersFreq = 100; // inicjalizacja zmiennej widocznej dla innych klas</div>
        <div class="background-text-line">&nbsp&nbspprivate String ourSecret = 'uczymy praktycznie'; // inicjalizacja zmiennej niewidocznej na zewnatrz</div>
        <div class="background-text-line">&nbsp&nbsppublic void teach() { // metoda void, ktora nie zwraca wartosci, nie konczymy jej ciala slowem return</div>
        <div class="background-text-line">&nbsp&nbsp&nbsp&nbspSystem.out.println('this is a Java code'); // cialo funkcji teach(). wypisujemy napis na ekranie</div>
        <div class="background-text-line">&nbsp&nbsp} // zakonczenie metody nawiasem klamrowym konczacym zamykajacym logike w ciele tej metody</div>
        <div class="background-text-line">}</div>`

    displayBackground() {
        const textContainer = document.querySelector('#text-container');
        textContainer.innerHTML = this.textToDisplay;
    }
}