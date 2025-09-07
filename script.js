const questions = [
  { question: "Čo sú premenné v jazyku JavaScript?", answers: ["Názvy pre funkcie, ktoré vždy vracajú výsledok.", "Príkazy, ktoré pošlú žiadosť na API.", "Miesto v pamäti počítača, kde je možné ukladať a meniť dáta počas behu programu.", "Špeciálne znaky na oddeľovanie riadkov kódu."], correct: 2 },
  { question: "Čo sú dátové typy v programovaní?", answers: ["Zoznam názvov premenných.", "Typy hodnôt, ktoré môže premenná obsahovať.", "Funkcie, ktoré naformátujú obyčajné číslo na text reprezentujúci peňažný obnos.", "Metódy, ktoré zmenia číslo na text."], correct: 1 },
  { question: "Čo je funkcia v JavaScripte?", answers: ["Séria príkazov, ktoré majú spoločnú úlohu, sú zabalené k sebe do spoločného bloku kódu, ktorý je možné opakovane volať.", "Metóda na odosielanie dát na server.", "Špeciálna premenná na uchovanie zoznamov.", "Podmienka na porovnanie dvoch hodnôt."], correct: 0 },
  { question: "Na čo slúžia podmienky v programovaní?", answers: ["Na evidenciu viacerých vlastností o jednej veci, vo formáte kľúč-hodnota.", "Na rozhodovanie, ktoré príkazy sa spustia na základe splnených kritérií.", "Na opakované spúšťanie identických príkazov.", "Na uchovanie viacerých hodnôt v jednej premennej."], correct: 1 },
  { question: "Čo sú polia v JavaScripte?", answers: ["Funkcie, ktoré vracajú viacero hodnôt na základe splnenej podmienky.", "Dátové typy dovoľujúce uchovať zoznam hodnôt.", "Premenné, ktoré obsahujú iba textové reťazce.", "Slučky, ktoré dovoľujú opakovane spustiť niektoré riadky kódu."], correct: 1 },
  { question: "Čo sú objekty v JavaScripte?", answers: ["Dátové štruktúry dovoľujúce evidovať vlastnosti vo formáte kľúč-hodnota.", "Metódy na prácu s poľami.", "Miesto v pamäti počítača, kde je možné ukladať a meniť dáta počas behu programu.", "Bloky kódu, ktoré sa spustia iba za určitej podmienky."], correct: 0 },
  { question: "Čo je cyklus v JavaScripte?", answers: ["Štruktúra, ktorá opakuje blok kódu, kým platí určitá podmienka.", "Funkcia, ktorá kontroluje pravdivosť výrazu.", "Zápis, ktorého jediná úloha je zistiť, či sa premenná je typu pole.", "Metóda na získanie konkrétnej hodnoty z objektu."], correct: 0 },
  { question: "Čo znamená API v programovaní?", answers: ["Špeciálny dátový typ, ktorý hovorí, že premenná je zámerne prázdna.", "Nástroj na hľadanie a opravovanie chýb v kóde.", "Rozhranie, ktoré umožňuje aplikáciám komunikovať medzi sebou.", "Operátor na porovnávanie hodnôt."], correct: 2 },
  { question: "Čo sú argumenty vo funkcii?", answers: ["Metódy na iterovanie cez pole.", "Typy premenných, ktorú sú schopné evidovať zoznam hodnôt v určitom poradí.", "Operátory na kontrolu pravdivosti podmienky.", "Hodnoty, ktoré posielame funkcii, aby ich mohla použiť pri výpočtoch."], correct: 3 },
  { question: "Aký je rozdiel medzi undefined a null v JavaScripte?", answers: ["undefined znamená, že hodnota neexistuje; null znamená, že hodnota je zámerne prázdna.", "undefined je dátový typ; null je funkcia.", "medzi undefined a null neexistujú rozdiely.", "null znamená, že premenná neexistuje; undefined je pole, ktoré v sebe nemá žiadne hodnoty."], correct: 0 },
  { question: "Na čo slúži kľúčové slovo return vo funkcii?", answers: ["Na vrátenie hodnoty z funkcie späť do miesta, kde bola funkcia zavolaná.", "Na zastavenie cyklu.", "Na vytvorenie novej premennej.", "Na porovnávanie hodnôt v podmienkach."], correct: 0 },
  { question: "Na čo pri programovaní slúži debugger?", answers: ["Metóda na testovanie rýchlosti aplikácie.", "Funkcia na automatické odstránenie chýb z kódu.", "Nástroj na zastavenie behu kódu a kontrolu jeho stavu v danom bode, často pomáhajúci s hľadaním chýb.", "Je to séria príkazov, ktoré majú spoločnú úlohu, sú zabalené k sebe do spoločného bloku kódu, ktorý je možné opakovane volať."], correct: 2 },
  { question: "Čo sú udalosti (events) v JavaScripte?", answers: ["Akcie, ktoré nastávajú na webe, ako kliknutie alebo stlačenie klávesy.", "Dátové štruktúry dovoľujúce evidovať vlastnosti vo formáte kľúč-hodnota.", "Dátový typ na reprezentovanie reťazcov.", "Špeciálne objekty na ukladanie funkcií."], correct: 0 },
  { question: "Čo robí event listener v JavaScripte?", answers: ["Zastavuje spúšťanie funkcie, ak dôjde k chybe.", "Opakuje blok kódu za predpokladu, že programátorom určená podmienka zostáva splnená.", "Čaká na určitú udalosť (napríklad kliknutie) a spustí funkciu, keď udalosť nastane.", "Pridáva hodnoty do poľa."], correct: 2 },
  { question: "Čo sú knižnice (libraries) v JavaScripte?", answers: ["Zbierky predpripraveného kódu, ktoré môžeme použiť na zjednodušenie programovania.", "Funkcie, ktoré zisťujú koľko slov alebo znakov sa nachádza v texte uloženom v premennej.", "Nástroje na zisťovanie syntaxových chýb.", "Hodnoty, ktoré posielame funkcii, aby ich mohla použiť pri výpočtoch."], correct: 0 },
  { question: "Ktorý z nasledujúcich zápisov správne vytvára novú premennú v JavaScripte?", answers: ["variable score = 420;", "let score = 420;", "new score := 420;", "create score 420;"], correct: 1 },
  { question: "Ktorý zápis v JavaScripte spustí cyklus?", answers: ["loop (i = 0; i < 5; i++) { console.log(i); }", "cycle { i = 0; while i < 5 { i++; } }", "for (let i = 0; i < 5; i++) { console.log(i); }", "for i in 5: print(i)"], correct: 2 },
  { question: "Ktorý zápis správne vytvorí novú funkciu v JavaScripte?", answers: ["function greet() { console.log('Hello!'); }", "function greet { print('Hello!'); }", "createFunction greet() { console.log('Hello!'); }", "def greet() { console.log('Hello!'); }"], correct: 0 },
  { question: "Ktorý je správny zápis pre podmienku v JavaScripte?", answers: ["if x > 10 then { console.log('Viac jak 10, menej jak Vašo!'); }", "when (x > 10) { console.log('Viac jak 10, menej jak Vašo!'); }", "if (x > 10) { console.log('Viac jak 10, menej jak Vašo!'); }", "if x > 10: print('Viac jak 10, menej jak Vašo!');"], correct: 2 },
  { question: "Ktorý kód správne vytvorí nové pole?", answers: ["let numbers = [1, 2, 3, 4];", "array numbers = [1, 2, 3, 4];", "let numbers = {1, 2, 3, 4};", "let numbers = (1, 2, 3, 4);"], correct: 0 },
  { question: "Ktorý zápis správne vytvorí nový objekt?", answers: ["let legend = { name: 'Vašo', age: 69 };", "new object legend = { name = 'Vašo', age = 69 };", "let legend = (name: 'Vašo', age: 69);", "const legend = [ name: 'Vašo', age: 69 ];"], correct: 0 },
  { question: "Ktorý kód správne spustí funkciu a využije všetky jej argumenty?", answers: ["function add(a, b) { return a + b; } plus(3);", "plus(3, 5) { function add(a, b) { return a + b; } }", "function plus(a, b) { return a + b; } plus(3, 5);", "add { a = 3, b = 5; }"], correct: 2 },
  { question: "Aký je hlavný rozdiel medzi let a const v JavaScripte?", answers: ["const znamená, že premenná je vždy typu číslo.", "let je starší spôsob deklarácie premenných.", "const sa používa na vytvorenie konštánt, ktoré nemožno predefinovať.", "let sa používa len na deklaráciu globálnych premenných."], correct: 2 },
  { question: "Ktorý kód správne zavolá funkciu createCard?", answers: ["createCard => ();", "call createCard;", "function createCard();", "createCard();"], correct: 3 },
  { question: "Čo je npm?", answers: ["Služba na hosťovanie webstránok tak, aby boli verejne prístupné.", "Programovací jazyk pre prácu s databázou.", "Knižnica na tvorbu animácií.", "Program pre správu knižníc a balíčkov pre JavaScript."], correct: 3 },
  { question: "Na čo sa používa Node.js?", answers: ["Na vytváranie responzívnych obrázkov.", "Na ukladanie dát v dočasnej pamäti prehliadača.", "Na spúšťanie JavaScriptu mimo webového prehliadača.", "Na vytváranie CSS štýlov."], correct: 2 },
  { question: "Na čo slúži funkcia fetch v JavaScripte?", answers: ["Na deklarovanie premenných a konštánt.", "Na získavanie údajov z webových API.", "Na pridávanie nových HTML elemetov do webstránky.", "Na spúšťanie cyklov ak platí podnienka."], correct: 1 },
  { question: "Ktorý príklad správne používa fetch?", answers: ["fetch(url) => { console.log(url.data); }", "execute fetch({ url: 'https://api.example.com' })", "getFetch('https://api.example.com');", "fetch('https://api.example.com').then(response => response.json()).then(data => console.log(data));"], correct: 3 },
  { question: "Aký je hlavný účel databáz v aplikáciách?", answers: ["Ukladať a organizovať údaje.", "Primárne na správne formátovanie dátumov.", "Na generovanie náhodných čísel.", "Na zjednodušenie písania CSS štýlov."], correct: 0 },
  { question: "Ktoré z týchto sú príklady reaktívnych UI frameworkov?", answers: ["Flask, Express, Django", "jQuery, Bootstrap, TailwindCSS", "Angular, Vue, React", "Node.js, Nginx, Apache"], correct: 2 },
  { question: "Čo sa rozumie pod pojmom backend vo webovom programovaní?", answers: ["Používateľské rozhranie aplikácie.", "Časť aplikácie, ktorá beží na serveri a spracováva logiku, prípadne komunikuje s databázou.", "Šablóna HTML stránky.", "Softvér pre zjednodušenie písania JavaScript kódu."], correct: 1 },
  { question: "Čo sa rozumie pod pojmom frontend vo webovom programovaní?", answers: ["Časť aplikácie, ktorá beží na serveri a spracováva dáta.", "Používateľské rozhranie a interaktívna časť aplikácie.", "Softvér na hosťovanie webových aplikácií.", "Nástroj na debugovanie kódu."], correct: 1 },
  { question: "Čo je server v kontexte webového programovania?", answers: ["Zariadenie alebo aplikácia, ktorá poskytuje služby alebo údaje klientovi.", "Nástroj na vytváranie CSS animácií.", "Hardvér, ktorý vykresľuje HTML stránky.", "Program na spracovanie obrázkov."], correct: 0 },
  { question: "Čo je klient v kontexte webového programovania?", answers: ["Zariadenie alebo aplikácia, ktorá prijíma a zobrazuje údaje od servera, napríklad webový prehliadač.", "Časť aplikácie bežiaca na serveri.", "Program na vytváranie, správu a optimalizáciu databáz.", "Hardvér na spúšťanie backendového kódu."], correct: 0 },
  { question: "Aký je hlavný účel console.log() v JavaScripte?", answers: ["Na spracovanie údajov zo servera.", "Na vytváranie logických operácií.", "Na vypísanie hodnôt do konzole, často pre účely debugovania.", "Na odosielanie údajov na server, najčastejšie pomocou metódy POST."], correct: 2 },
  { question: "Ktorá z možností najlepšie vystihuje JavaScript?", answers: ["JavaScript je štýlovací jazyk na úpravu vzhľadu webových stránok a aplikácií.", "JavaScript je softvér pre písanie programátorského kódu.", "JavaScript je databázový nástroj pre evidenciu údajov na strane servera.", "JavaScript je programovací jazyk vytvorený primárne pre pridávanie interaktivity na webové stránky."], correct: 3 },
  { question: "Čo sa stane, ak v JavaScripte nepridáte bodkočiarku na koniec príkazu?", answers: ["Kód nebude fungovať a spôsobí chybu a jej konkrétny text vypíše do konzole.", "JavaScript automaticky pochopí koniec príkazu vo väčšine prípadov.", "JavaScript automaticky pridá bodkočiarku len v komentároch.", "Bodkočiarka nikdy nie je a nikdy nebola potrebná ani používaná v JavaScripte."], correct: 1 },
  { question: "Aký je výsledok operácie 5 + '5'?", answers: ["10", "NaN", "'55'", "undefined"], correct: 2 },
  { question: "Ktorý operátor v JavaScripte kontroluje rovnosť hodnôt vrátane ich dátových typov?", answers: ["===", "==", "=", "!=="], correct: 0 },
  { question: "Ako sa skutočne naučíš písať kód?", answers: ["Stačí nájsť správnu knihu.", "Stačí nájsť správny kurz.", "Stačí nájsť správne YouTube video.", "Písaním kódu ✌️"], correct: 3 }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    const questionNumber = `Otázka ${currentQuestion + 1} ze ${questions.length}: `;
    questionElement.innerHTML = questionNumber + "<br>" + questions[currentQuestion].question;

    answersElement.innerHTML = "";
    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index, button);
        answersElement.appendChild(button);
    });

    const progressBar = document.getElementById("progress-bar");
    const progressPercent = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    // Zrušíme případný focus
    document.activeElement.blur();
    setTimeout(() => document.activeElement.blur(), 10);
}


function checkAnswer(index, button) {
    const correctIndex = questions[currentQuestion].correct;

    if(index === correctIndex) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
        // zvýrazní správnou odpověď
        const buttons = document.getElementById("answers").children;
        buttons[correctIndex].classList.add("correct");
        
    }

    button.blur();

    Array.from(document.getElementById("answers").children).forEach(b => b.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        if(currentQuestion < questions.length) {
            showQuestion();
            document.activeElement.blur(); // přidáno
        } else {
            showScore();
        }
    }, 800); // animace 0,8s
}

function showScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = `${score} z ${questions.length}`;
    document.getElementById("progress-bar").style.width = "100%";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    showQuestion();
}

showQuestion();
