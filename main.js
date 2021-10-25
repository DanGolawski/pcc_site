window.onload = () => {
    const animationController = new AnimationController();

    animationController.mainScreenButtons.forEach(button => {
        button.addEventListener('click', () => animationController.goToDetailsPage(button));
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            animationController.backToMainPage();
        }
      }, false);
    

    

    // function manageMainButtons() {
    //     document.querySelectorAll('.item').forEach(item => item.classList.remove('element-hidden'));
    // }

    // function backToMainScreen() {
    //     document.querySelector('#controls-container').style.visibility = 'visible';
    //     manageMainButtons();
    // }
}

class BehaviorController {
    async sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
}

class AnimationController extends BehaviorController {

    backgroundController = null;
    mainButtonsController = null;
    detailsController = null;
    mainScreenButtons = [];

    constructor() {
        super();
        this.backgroundController = new BackgroundController();
        this.mainButtonsController = new MainButtonsController();
        this.detailsController = new DetailsController();
        this.mainScreenButtons = this.mainButtonsController.getMainButtons();
    }

    async goToDetailsPage(button) {
        this.mainButtonsController.hideButtons();
        await this.sleep(1000);
        this.backgroundController.animateBackgroundHiding();
        await this.sleep(3500);
        this.detailsController.showDetails(button);
    }

    async backToMainPage() {
        this.detailsController.hideDetails();
        await this.sleep(2000)
        this.backgroundController.animateBackgroundAppearing();
        await this.sleep(4000)
        this.mainButtonsController.showButtons();
    }
      
}

class MainButtonsController extends BehaviorController {

    mainScreenButtons = [];
    items = [];
    controlsContainer = null;

    constructor() {
        super();
        this.mainScreenButtons = document.querySelectorAll('.control-wrapper');
        this.items = document.querySelectorAll('.item');
        this.controlsContainer = document.querySelector('#controls-container');
    }

    getMainButtons() {
        return this.mainScreenButtons;
    }

    async hideButtons() {
        this.items.forEach(item => item.classList.toggle('element-hidden'));
        this.items.forEach(item => item.classList.toggle('element-visible'));
        await this.sleep(1000);
        this.controlsContainer.style.visibility = 'hidden';
    }

    showButtons() {
        this.controlsContainer.style.visibility = 'visible';
        this.items.forEach(item => item.classList.toggle('element-visible'));
        this.items.forEach(item => item.classList.toggle('element-hidden'));
    }
}


class BackgroundController extends BehaviorController {
    textToDisplay = `<div class="background-text-line">public class ManufacturaSukcesu { // tworzenie klasy za pomoca slowa kluczowego class</div>
        <div class="background-text-line">public int satisfiedCustomersFreq = 100; // inicjalizacja zmiennej widocznej dla innych klas</div>
        <div class="background-text-line">private String ourSecret = 'uczymy praktycznie'; // inicjalizacja zmiennej niewidocznej na zewnatrz</div>
        <div class="background-text-line">public void teach() { // metoda void, ktora nie zwraca wartosci, nie konczymy jej ciala slowem return</div>
        <div class="background-text-line">System.out.println('this is a Java code'); // cialo funkcji teach(). wypisujemy napis na ekranie</div>
        <div class="background-text-line">} // zakonczenie metody nawiasem klamrowym konczacym zamykajacym logike w ciele tej metody</div>
        <div class="background-text-line">}</div>`

    textContainer = null;
    textLines = [];

    constructor() {
        super();
        this.textContainer = document.querySelector('#text-container');
        this.displayBackground();
        this.textLines = document.querySelectorAll('.background-text-line');
    }

    displayBackground() {
        this.textContainer.innerHTML = this.textToDisplay;
    }

    async animateBackgroundHiding() {
        this.rotateLeft();
        await this.sleep(1200);
        this.makeRandomHorizontalMove();
        await this.sleep(1500);
        this.hideTextUnder();
    }

    async animateBackgroundAppearing() {
        this.showTextBack();
        await this.sleep(1500);
        this.restoreLinesMargin();
        await this.sleep(1300);
        this.rotateRight();
    }

    async rotateLeft() {
        // this.textContainer.classList.toggle('rotated-right');
        debugger
        this.textContainer.style.transform = 'translate(calc((100vw - 100%) / 2), -50%) rotate(0)';
        this.textContainer.classList.add('rotated-left');
        await this.sleep(1300);
        this.textContainer.style.transform = 'translate(calc((100vw - 100%) / 2), -50%) rotate(-90deg)';
    }

    async rotateRight() {
        // this.textContainer.style.transform = 'translate(0, -50%) rotate(-90deg)';
        // await this.sleep(1300);
        // this.textContainer.classList.remove('rotated-left');
        this.textContainer.style.transform = 'translate(calc((100vw - 100%) / 2), -25%) rotate(0)';
        await this.sleep(1300);
        this.textContainer.style.transform = 'translate(0, 0) rotate(0)';
        this.textContainer.classList.remove('rotated-left');
        
        // this.textContainer.style.transform = 'translate(0, 0) rotate(0)';
        
        
    }

    makeRandomHorizontalMove() {
        this.textLines.forEach(element => element.style.marginLeft = `${Math.floor(Math.random() * 20 - 10)*300}px`);
    }

    restoreLinesMargin() {
        this.textLines.forEach(element => element.style.marginLeft = 0);
    }

    hideTextUnder() {
        this.textContainer.style.marginTop = `${this.textContainer.offsetWidth}px`;
    }

    showTextBack() {
        this.textContainer.style.marginTop = 0;
    }
}

class DetailsController extends BehaviorController {

    wrapper = null;
    image = null;
    title = null;
    description = null;

    constructor() {
        super();
        this.wrapper = document.querySelector('#details-wrapper');
        this.image = document.querySelector('.details-image');
        this.title = document.querySelector('.detail-title');
        this.description = document.querySelector('.detail-description');
    }

    async showDetails(buttonWrapper) {
        this.setTitle(buttonWrapper)
        this.wrapper.style.visibility = 'visible';
        this.image.style.height = '100%';
        await this.sleep(500);
        this.title.style.opacity = 1;
        this.title.style.marginTop = 0;
        this.description.style.opacity = 1;
        this.description.style.marginTop = '5%';
    }

    setTitle(buttonWrapper) {
        const titleElement = buttonWrapper.querySelector('.module-name');
        const title = titleElement.innerHTML;
        this.title.innerHTML = title;
    }

    async hideDetails() {
        this.description.style.marginTop = '15%';
        this.description.style.opacity = 0;
        this.title.style.marginTop = '-5%';
        this.title.style.opacity = 0;
        await this.sleep(500);
        this.image.style.height = 0;
        await this.sleep(500);
        this.wrapper.style.visibility = 'hidden';
    }
}

