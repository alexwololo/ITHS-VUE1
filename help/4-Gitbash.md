# kör projektet

npm run dev

# Skapa git

git init

# Kolla status

git status

# Döp om all framtida branches till main:

git config --global init.defaultBranch main

# Byt namn på aktuell branch

git branch -m main

# Lägg till filer

git add index.html
git add _.html_ (addabar filer med dessa tecken i namnet.)
git add .

# Undo git add

git reset index.html
git reset .

# Paketera förändringar

git commit
git commit -m "meddelande"
git commit -a

# Användaruppgifter

git config --global user.email "jane@example.com"
git config --global user.name "Jane Doe"

# Byt namn på filer

git mv index.html home.html (git mv betyder att vi inte behöver git add)

# Ta bort fil

git rm home.html

# Se ändringar som inte har registrerats med git add (ej stagade)

git diff

# Se ändringar som har registrerats med git add (är stagade)

git diff --cached

# Återställ fil till hur den var i förra commiten

git restore index.html

# Gå till annan commit

Varje commit har ett ID, och dessa ID-värden går att se med git log.
(Man kan behöva trycka på q för att stänga av git log-läget.)
För att ändra projektmappen så att filernas innehåll är som i en viss commit,
skriv git checkout följt av den önskade commit:ens ID:

git checkout fd972fd7f42f4690d3404e1b549043dbf01ac092

För att gå tillbaka till den commit vi var på innan vi bytte, så skriv
git checkout @{-1}

# Skriv commitmedelanden i VSCode

git config --global core.editor "code --wait"

# Hämta filer - förutsätter ett befintligt repo

git pull

# merge conflicts

Steg för att lösa en merge conflict
När en merge conflict uppstår så ska man oftast utföra följande steg:

Öppna varje fil där det uppstod en merge conflict (Om det till exempel står
“Merge conflict in index.html”, så vet vi att filen index.html är föremål för
en merge conflict)
För varje fil, använd en texteditor, ta bort “<<<<<<<”, “=======” och “>>>>>>>”,
och se till att filen har rätt innehåll
För varje fil, kör git add
Kör git commit
Kör git push

# Skriv @ i teminal

alt gr + 2

# Hämta hem ett repo

Om vi vill ladda hem ett Git-projekt till vår dator, så kan vi göra så här
(Clone URL ska anpassas även här):
**git clone https://github.com/jonkri/test.git**
git clone skapar en mapp med samma namn som projektet, där projektfilerna
hamnar. Med ovanstående kommando så skapas en “test”-mapp.

Om man bockar för “Initialize [this] repository with a README” på GitHub/GitLab,
så kommer Git-tjänsteleverantören att köra git init, och då kan varken Alice
eller Bob göra det.
