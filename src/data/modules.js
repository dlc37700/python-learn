export const modules = [
  {
    id: 1,
    emoji: '🚀',
    title: 'Premiers pas',
    description: 'Découvre Python et ta première ligne de code !',
    color: '#00ff88',
    lesson: {
      title: 'Bienvenue dans Python !',
      content: `
        <h2>Qu'est-ce que Python ?</h2>
        <p>Imagine que tu veuilles expliquer à un robot comment préparer un sandwich. Tu ne peux pas juste dire "fais-le" — il faut tout détailler : "prends le pain", "ouvre le pain", "pose le jambon", etc. Un <strong>langage de programmation</strong>, c'est exactement ça : une façon précise de donner des instructions à une machine.</p>
        <p>Python est l'un de ces langages. Il a été créé en 1991 et s'est imposé comme le langage préféré des débutants ET des professionnels. Pourquoi ? Parce qu'il ressemble presque à de l'anglais lisible, et qu'il est incroyablement puissant.</p>
        <div class="info-box">
          <p>🐍 Python est utilisé par Google, Netflix, Instagram, la NASA, les chercheurs en IA… et maintenant par toi ! Le nom vient de la troupe humoristique "Monty Python", pas du serpent.</p>
        </div>

        <h2>Comment ça marche ?</h2>
        <p>Quand tu écris du code Python, tu écris des <strong>instructions</strong> dans un fichier texte. Python les lit ligne par ligne, de haut en bas, et les exécute dans l'ordre. C'est comme une liste de courses que ton ordinateur suit à la lettre.</p>
        <p>Le résultat s'affiche dans la <strong>console</strong> — c'est la zone noire où tu vois les sorties de ton programme. C'est ta fenêtre de dialogue avec Python.</p>

        <h2>La fonction print() — ton premier outil</h2>
        <p>La toute première chose à apprendre, c'est comment faire parler Python. La fonction <code>print()</code> affiche du texte dans la console. C'est la commande la plus utilisée quand on débute.</p>
        <pre><code class="language-python">print("Bonjour le monde !")
print("Je m'appelle Python")</code></pre>
        <p>Décortiquons la première ligne :</p>
        <ul>
          <li><strong>print</strong> — le nom de la fonction (vient de l'anglais "imprimer/afficher")</li>
          <li><strong>( )</strong> — les parenthèses indiquent qu'on appelle une fonction</li>
          <li><strong>"Bonjour le monde !"</strong> — le texte à afficher, obligatoirement entre guillemets</li>
        </ul>
        <div class="tip-box">
          <p>💡 Les guillemets sont obligatoires autour du texte. Sans eux, Python croit que tu parles d'une variable et affiche une erreur. Tu peux utiliser des guillemets simples <code>'bonjour'</code> ou doubles <code>"bonjour"</code> — les deux fonctionnent.</p>
        </div>

        <h2>print() peut afficher beaucoup de choses</h2>
        <p>print() ne se limite pas au texte. Tu peux aussi afficher des nombres, des calculs, ou plusieurs choses à la fois :</p>
        <pre><code class="language-python">print(42)               # Un nombre entier
print(3.14)             # Un nombre décimal
print(10 + 5)           # Un calcul → affiche 15
print("J'ai", 15, "ans")  # Plusieurs éléments séparés par des virgules</code></pre>
        <p>Quand on sépare plusieurs éléments par des virgules dans print(), Python les affiche avec un espace entre eux automatiquement.</p>

        <h2>Les commentaires — des notes pour toi</h2>
        <p>Un commentaire, c'est du texte dans ton code que Python <strong>ignore complètement</strong>. Il commence par le symbole <code>#</code>. À quoi ça sert ? À laisser des explications pour toi-même (ou quelqu'un qui lira ton code plus tard).</p>
        <pre><code class="language-python"># Ceci est un commentaire — Python l'ignore totalement
print("Bonjour !")  # Ce commentaire est en fin de ligne

# Tu peux commenter une ligne de code pour la désactiver :
# print("Cette ligne ne s'exécutera pas")</code></pre>
        <p>Prends l'habitude de commenter ton code ! Dans 6 mois, quand tu reliras un vieux programme, tu seras content d'avoir laissé des notes.</p>

        <h2>Erreurs courantes à éviter</h2>
        <ul>
          <li>Oublier les guillemets autour du texte : <code>print(bonjour)</code> → erreur !</li>
          <li>Mélanger guillemets ouvrants et fermants : <code>print("bonjour')</code> → erreur !</li>
          <li>Les majuscules comptent : <code>Print()</code> ne fonctionne pas, seulement <code>print()</code></li>
        </ul>
        <div class="tip-box">
          <p>✅ Ne t'inquiète pas des erreurs — elles font partie de l'apprentissage ! Lis le message d'erreur, il te dit souvent exactement ce qui ne va pas.</p>
        </div>
      `
    },
    interactiveCode: `print("Bonjour le monde !")
# Essaie de modifier ce texte !
print("Je commence à apprendre Python")`,
    exercises: [
      {
        id: 1,
        title: 'Affiche ton prénom',
        description: 'Utilise <code>print()</code> pour afficher ton prénom dans la console.',
        starter: '# Écris ton code ici\n',
        solution: 'print("Lucas")',
        hint: 'Utilise print() avec ton prénom entre guillemets'
      },
      {
        id: 2,
        title: 'Trois messages',
        description: 'Affiche 3 messages différents, chacun sur une nouvelle ligne.',
        starter: '# Affiche trois messages différents\n',
        solution: 'print("Message 1")\nprint("Message 2")\nprint("Message 3")',
        hint: 'Tu as besoin de 3 lignes avec print()'
      }
    ],
    activity: {
      title: '🎮 Défi final : La carte de super-héros',
      description: 'Tu maîtrises <code>print()</code> et les commentaires ? Prouve-le ! Crée une <strong>carte d\'identité de super-héros codeur</strong> qui affiche ton nom de code, ta ville, ton super-pouvoir et une devise secrète. Utilise des caractères pour décorer le cadre !',
      goal: 'Objectif : afficher une carte avec au moins 6 lignes, utiliser au moins 1 commentaire, et inclure les 4 infos (nom, ville, pouvoir, devise).',
      starter: `# 🦸 MA CARTE DE SUPER-HÉROS CODEUR
# Remplace les ??? par tes vraies infos !

print("================================")
print("   🦸  SUPER-HÉROS CODEUR  🦸")
print("================================")
# Ton nom de héros
print("Nom     :", "???")
# Ta ville
print("Ville   :", "???")
# Ton super-pouvoir
print("Pouvoir :", "???")
print("================================")
# Ta devise secrète
print("Devise  :", "???")
print("================================")`,
      solution: `# 🦸 MA CARTE DE SUPER-HÉROS CODEUR
print("================================")
print("   🦸  SUPER-HÉROS CODEUR  🦸")
print("================================")
# Ton nom de héros
print("Nom     :", "CodeMaster")
# Ta ville
print("Ville   :", "Paris")
# Ton super-pouvoir
print("Pouvoir :", "Déboguer en 10 secondes")
print("================================")
# Ta devise secrète
print("Devise  :", "Je code, donc je suis !")
print("================================")`
    },
    quiz: [
      {
        id: 1,
        question: 'Quelle instruction permet d\'afficher du texte ?',
        options: ['show()', 'print()', 'display()', 'write()'],
        answer: 1,
        explanation: 'print() est la fonction de base pour afficher du texte en Python.'
      },
      {
        id: 2,
        question: 'Comment écrire un commentaire en Python ?',
        options: ['// commentaire', '/* commentaire */', '# commentaire', '-- commentaire'],
        answer: 2,
        explanation: 'Le symbole # permet d\'écrire des commentaires que Python ignore.'
      },
      {
        id: 3,
        question: "Que fait ce code ? print('Salut')",
        options: ['Rien', "Affiche : Salut", 'Crée une variable', 'Génère une erreur'],
        answer: 1,
        explanation: 'print() affiche le texte entre guillemets dans la console.'
      }
    ]
  },
  {
    id: 2,
    emoji: '📦',
    title: 'Les variables',
    description: 'Stocke des informations dans des boîtes magiques !',
    color: '#00d4ff',
    lesson: {
      title: 'Les variables',
      content: `
        <h2>Pourquoi a-t-on besoin de variables ?</h2>
        <p>Imagine que tu calcules la moyenne de tes notes plusieurs fois dans ton programme. Sans variable, tu devrais réécrire "14 + 17 + 12 + 15" à chaque fois. Avec une variable, tu stockes le résultat une fois, et tu l'utilises partout. Les variables sont les <strong>tiroirs de mémoire</strong> de ton programme.</p>

        <h2>C'est quoi une variable ?</h2>
        <p>Une variable, c'est un <strong>nom</strong> qu'on donne à un emplacement en mémoire pour y stocker une valeur. Pense à une boîte avec une étiquette collée dessus :</p>
        <ul>
          <li>L'<strong>étiquette</strong> = le nom de la variable (ex: <code>age</code>)</li>
          <li>Le <strong>contenu</strong> = la valeur stockée (ex: <code>15</code>)</li>
          <li>Le <strong>signe =</strong> = l'opération "met cette valeur dans cette boîte"</li>
        </ul>
        <pre><code class="language-python">age = 15          # La boîte "age" contient 15
prenom = "Alice"  # La boîte "prenom" contient "Alice"
print(age)        # Affiche 15
print(prenom)     # Affiche Alice</code></pre>
        <p>À tout moment, tu peux <strong>changer</strong> la valeur d'une variable — la boîte garde le même nom, mais son contenu change :</p>
        <pre><code class="language-python">score = 0
print(score)   # 0
score = 10
print(score)   # 10
score = score + 5   # La nouvelle valeur = l'ancienne + 5
print(score)   # 15</code></pre>

        <h2>Les règles de nommage</h2>
        <p>Un nom de variable doit respecter quelques règles :</p>
        <ul>
          <li>Commence par une lettre ou un underscore <code>_</code> (pas un chiffre)</li>
          <li>Ne contient que des lettres, chiffres ou underscores (pas d'espaces !)</li>
          <li>Est sensible à la casse : <code>Age</code> et <code>age</code> sont deux variables différentes</li>
          <li>Par convention, on écrit en minuscules avec des underscores : <code>mon_prenom</code></li>
        </ul>
        <div class="tip-box">
          <p>✅ Choisis des noms explicites ! <code>age</code> est bien, <code>a</code> ne dit rien. <code>nombre_de_points</code> est excellent.</p>
        </div>

        <h2>Les 4 types de base</h2>
        <p>En Python, chaque valeur a un <strong>type</strong> qui indique sa nature. Les 4 types fondamentaux :</p>

        <h3>🔢 int — les nombres entiers</h3>
        <p>Pour compter des choses : âge, score, année, quantité... Pas de virgule, peut être négatif.</p>
        <pre><code class="language-python">age = 15
score = -5
annee = 2024</code></pre>

        <h3>📝 str — le texte (string = chaîne de caractères)</h3>
        <p>Pour stocker du texte : noms, messages, adresses... Toujours entre guillemets.</p>
        <pre><code class="language-python">prenom = "Alice"
message = 'Bonjour !'     # guillemets simples ou doubles, au choix
vide = ""                  # chaîne vide</code></pre>

        <h3>🔣 float — les nombres décimaux</h3>
        <p>Pour les mesures précises : taille, poids, prix, coordonnées GPS... Le séparateur décimal est un <strong>point</strong> (pas une virgule !).</p>
        <pre><code class="language-python">taille = 1.75
prix = 9.99
temperature = -3.5</code></pre>

        <h3>✅ bool — les booléens (vrai/faux)</h3>
        <p>Pour représenter un état qui ne peut être que OUI ou NON. Très utilisé dans les conditions. Attention : <code>True</code> et <code>False</code> prennent une majuscule.</p>
        <pre><code class="language-python">etudiant = True
majeur = False
connecte = True</code></pre>

        <h2>Découvrir le type d'une variable</h2>
        <p>Si tu ne sais pas quel type contient une variable, utilise <code>type()</code> :</p>
        <pre><code class="language-python">age = 15
print(type(age))      # &lt;class 'int'&gt;
print(type("Alice"))  # &lt;class 'str'&gt;
print(type(3.14))     # &lt;class 'float'&gt;
print(type(True))     # &lt;class 'bool'&gt;</code></pre>
        <div class="info-box">
          <p>💡 Le type d'une variable est important ! On ne peut pas additionner un <code>int</code> et un <code>str</code> directement — Python ne sait pas comment faire. Tu verras comment convertir les types dans le prochain module.</p>
        </div>
      `
    },
    interactiveCode: `# Les différents types de variables
age = 15
prenom = "Alice"
taille = 1.75
etudiant = True

print("Prénom:", prenom)
print("Âge:", age)
print("Taille:", taille)
print("Étudiant:", etudiant)`,
    exercises: [
      {
        id: 1,
        title: 'Crée ta variable âge',
        description: 'Crée une variable <code>age</code> avec ton âge et affiche-la.',
        starter: "# Crée une variable 'age' avec ton âge\n",
        solution: 'age = 15\nprint(age)',
        hint: 'Utilise: age = 15 puis print(age)'
      },
      {
        id: 2,
        title: 'Plusieurs types',
        description: 'Crée 4 variables : <code>prenom</code> (str), <code>age</code> (int), <code>taille</code> (float), <code>etudiant</code> (bool) et affiche-les toutes.',
        starter: "# Crée: prenom (str), age (int), taille (float), etudiant (bool)\n",
        solution: 'prenom = "Alice"\nage = 15\ntaille = 1.65\netudiant = True\nprint(prenom, age, taille, etudiant)',
        hint: 'Crée chaque variable sur une ligne, puis utilise print() pour tout afficher'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quel est le type de : age = 15',
        options: ['str', 'float', 'int', 'bool'],
        answer: 2,
        explanation: '15 est un nombre entier, donc de type int.'
      },
      {
        id: 2,
        question: "Quel est le type de : nom = 'Python'",
        options: ['int', 'str', 'float', 'bool'],
        answer: 1,
        explanation: 'Le texte entre guillemets est de type str (string = chaîne de caractères).'
      },
      {
        id: 3,
        question: 'Comment déclare-t-on une variable ?',
        options: ['var x = 5', 'x := 5', 'x = 5', 'int x = 5'],
        answer: 2,
        explanation: 'En Python, on utilise simplement le signe = pour affecter une valeur.'
      }
    ]
  },
  {
    id: 3,
    emoji: '➕',
    title: 'Les opérations',
    description: 'Calcule et manipule des données comme un pro !',
    color: '#a855f7',
    lesson: {
      title: 'Les opérations',
      content: `
        <h2>Python est une super calculatrice</h2>
        <p>L'une des premières choses qu'on fait avec Python, c'est des calculs. Mais Python va bien plus loin qu'une calculatrice classique. Il dispose de 7 opérateurs arithmétiques, dont certains que tu ne connais peut-être pas encore.</p>

        <h2>Les 7 opérateurs arithmétiques</h2>
        <pre><code class="language-python">a = 10
b = 3

print(a + b)   # Addition       → 13
print(a - b)   # Soustraction   → 7
print(a * b)   # Multiplication → 30
print(a / b)   # Division       → 3.3333...
print(a // b)  # Division entière → 3
print(a % b)   # Modulo (reste) → 1
print(a ** b)  # Puissance      → 1000</code></pre>
        <p>Les 4 premiers sont familiers. Expliquons les 3 derniers :</p>

        <h3>// — la division entière</h3>
        <p>La division entière donne le <strong>quotient sans les décimales</strong>. Utile quand on veut travailler uniquement avec des nombres entiers :</p>
        <pre><code class="language-python">print(10 / 3)   # 3.3333... (division normale, float)
print(10 // 3)  # 3         (division entière, int)
print(7 // 2)   # 3         (7 divisé par 2 = 3 reste 1)</code></pre>

        <h3>% — le modulo (reste de division)</h3>
        <p>Le modulo donne le <strong>reste</strong> d'une division. C'est très utile pour savoir si un nombre est pair/impair, ou pour faire des cycles :</p>
        <pre><code class="language-python">print(10 % 3)  # 1  (10 = 3×3 + 1, reste = 1)
print(9 % 3)   # 0  (9 = 3×3 + 0, divisible !)
print(7 % 2)   # 1  (impair → reste non nul)
print(8 % 2)   # 0  (pair → reste nul)</code></pre>
        <div class="info-box">
          <p>💡 Astuce du pro : <code>n % 2 == 0</code> permet de tester si un nombre est pair. Si le reste de la division par 2 est 0, le nombre est pair !</p>
        </div>

        <h3>** — la puissance</h3>
        <p>L'opérateur <code>**</code> calcule une puissance. <code>2 ** 8</code> signifie 2 multiplié par lui-même 8 fois :</p>
        <pre><code class="language-python">print(2 ** 3)   # 8     (2³ = 2×2×2)
print(10 ** 2)  # 100   (10²)
print(2 ** 10)  # 1024  (utilisé en informatique !)</code></pre>

        <h2>Priorité des opérations</h2>
        <p>Python respecte les règles mathématiques : multiplication et division avant addition et soustraction. Utilise des parenthèses pour forcer l'ordre :</p>
        <pre><code class="language-python">print(2 + 3 * 4)    # 14  (3×4 d'abord, puis +2)
print((2 + 3) * 4)  # 20  (parenthèses en premier)</code></pre>

        <h2>Concaténation de chaînes</h2>
        <p>Le symbole <code>+</code> ne sert pas qu'à additionner des nombres. Avec des <strong>chaînes de texte</strong>, il les <strong>colle bout à bout</strong> — c'est la concaténation :</p>
        <pre><code class="language-python">prenom = "Alice"
nom = "Martin"
print("Bonjour " + prenom + " " + nom + " !")
# → Bonjour Alice Martin !</code></pre>
        <p>Attention : l'espace entre le prénom et le nom, c'est toi qui le gères ! Python ne l'ajoute pas automatiquement avec <code>+</code>.</p>

        <h2>Le piège : mélanger nombres et texte</h2>
        <p>Python ne peut pas additionner un nombre et du texte. Il faut d'abord <strong>convertir</strong> l'un des deux :</p>
        <pre><code class="language-python">age = 15

# ❌ Ceci génère une erreur :
# print("J'ai " + age + " ans")

# ✅ Il faut convertir age en str :
print("J'ai " + str(age) + " ans")   # J'ai 15 ans

# ✅ Ou utiliser une f-string (on verra ça plus tard) :
print(f"J'ai {age} ans")             # J'ai 15 ans</code></pre>

        <h2>Les fonctions de conversion</h2>
        <ul>
          <li><code>str(15)</code> → convertit le nombre 15 en texte <code>"15"</code></li>
          <li><code>int("42")</code> → convertit le texte <code>"42"</code> en nombre <code>42</code></li>
          <li><code>float("3.14")</code> → convertit le texte <code>"3.14"</code> en décimal <code>3.14</code></li>
        </ul>
        <div class="tip-box">
          <p>✅ Résumé : <code>+</code> avec des nombres = addition. <code>+</code> avec des textes = collage. Jamais les deux ensemble sans conversion !</p>
        </div>
      `
    },
    interactiveCode: `# Explorons les opérations !
a = 17
b = 5

print("Addition:", a + b)
print("Division entière:", a // b)
print("Reste:", a % b)
print("Puissance:", a ** 2)

# Concaténation
prenom = "Bob"
age = 14
print("Je m'appelle " + prenom + " et j'ai " + str(age) + " ans")`,
    exercises: [
      {
        id: 1,
        title: 'Aire d\'un rectangle',
        description: 'Calcule et affiche l\'aire d\'un rectangle (longueur × largeur).',
        starter: 'longueur = 8\nlargeur = 5\n# Calcule et affiche l\'aire\n',
        solution: 'longueur = 8\nlargeur = 5\naire = longueur * largeur\nprint("Aire:", aire)',
        hint: 'Multiplie longueur par largeur et stocke dans une variable'
      },
      {
        id: 2,
        title: 'Nom complet',
        description: 'Concatène des chaînes pour créer une phrase de présentation.',
        starter: 'prenom = "Alice"\nnom = "Martin"\n# Affiche le nom complet avec Bonjour\n',
        solution: 'prenom = "Alice"\nnom = "Martin"\nprint("Bonjour " + prenom + " " + nom + " !")',
        hint: 'Utilise + pour coller les chaînes ensemble'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quel opérateur donne le reste d\'une division ?',
        options: ['/', '//', '%', '**'],
        answer: 2,
        explanation: '% est l\'opérateur modulo qui donne le reste d\'une division.'
      },
      {
        id: 2,
        question: 'Que vaut 2 ** 3 ?',
        options: ['6', '8', '9', '5'],
        answer: 1,
        explanation: '** est l\'opérateur puissance. 2**3 = 2×2×2 = 8'
      },
      {
        id: 3,
        question: 'Comment concatène-t-on deux chaînes ?',
        options: ['a & b', 'a + b', 'a . b', 'concat(a,b)'],
        answer: 1,
        explanation: 'On utilise + pour coller deux chaînes de caractères.'
      }
    ]
  },
  {
    id: 4,
    emoji: '🔀',
    title: 'Les conditions',
    description: 'Fais des choix dans ton code avec if/elif/else !',
    color: '#ff6b35',
    lesson: {
      title: 'Les conditions',
      content: `
        <h2>Pourquoi des conditions ?</h2>
        <p>Jusqu'ici, ton programme exécute toutes les lignes dans l'ordre, sans réfléchir. Mais la vraie vie est pleine de choix : "Si j'ai plus de 18 ans, je peux voter. Sinon, je ne peux pas." Les conditions permettent à ton programme de <strong>prendre des décisions</strong> selon les données.</p>
        <p>Sans conditions, tous les programmes feraient toujours la même chose, quelle que soit la situation. Avec les conditions, ils deviennent vraiment intelligents.</p>

        <h2>Le if — "si..."</h2>
        <p>La syntaxe de base : si une condition est vraie, exécute ce bloc de code.</p>
        <pre><code class="language-python">age = 16

if age >= 18:
    print("Tu es majeur !")
    print("Tu peux voter.")</code></pre>
        <p>Ici, si <code>age</code> vaut 16, la condition <code>16 >= 18</code> est <strong>fausse</strong> — les deux lignes indentées ne s'exécutent pas du tout.</p>

        <h2>L'indentation — LA règle la plus importante</h2>
        <p>En Python, l'<strong>indentation</strong> (les espaces au début d'une ligne) n'est pas optionnelle — elle est <strong>obligatoire</strong> pour définir les blocs de code. C'est ce qui rend Python si lisible.</p>
        <pre><code class="language-python">if age >= 18:
    print("Dans le if")     # ← 4 espaces : appartient au if
    print("Encore dans le if")  # ← idem
print("Hors du if")        # ← 0 espace : s'exécute toujours</code></pre>
        <div class="info-box">
          <p>⚠️ Utilise toujours <strong>4 espaces</strong> (ou la touche Tab) pour indenter. Mélanger espaces et tabs cause des erreurs. Tous les éditeurs modernes le font automatiquement.</p>
        </div>

        <h2>Le else — "sinon..."</h2>
        <p><code>else</code> s'exécute quand la condition du <code>if</code> est fausse. On ne peut pas avoir de <code>else</code> sans <code>if</code>.</p>
        <pre><code class="language-python">age = 16

if age >= 18:
    print("Majeur ✓")
else:
    print("Mineur ✗")</code></pre>
        <p>Python lit cela comme : "Si age est supérieur ou égal à 18 → affiche Majeur. Dans tous les autres cas → affiche Mineur."</p>

        <h2>elif — "sinon si..."</h2>
        <p>Pour tester plusieurs cas, on enchaîne des <code>elif</code>. Python les teste dans l'ordre et s'arrête au premier vrai :</p>
        <pre><code class="language-python">note = 15

if note >= 16:
    print("Excellent !")      # testé en premier
elif note >= 14:
    print("Très bien")        # testé seulement si le if est faux
elif note >= 12:
    print("Bien")
elif note >= 10:
    print("Passable")
else:
    print("À améliorer")      # si aucune condition précédente n'est vraie</code></pre>
        <p>Pour note = 15 : <code>15 >= 16</code> est faux, <code>15 >= 14</code> est vrai → Python affiche "Très bien" et <strong>ignore</strong> tout le reste.</p>

        <h2>Les opérateurs de comparaison</h2>
        <p>Ces opérateurs comparent deux valeurs et retournent <code>True</code> ou <code>False</code> :</p>
        <pre><code class="language-python">print(5 == 5)   # True  — égal à (DEUX signes égal !)
print(5 != 3)   # True  — différent de
print(5 > 3)    # True  — strictement supérieur
print(5 < 3)    # False — strictement inférieur
print(5 >= 5)   # True  — supérieur ou égal
print(5 <= 4)   # False — inférieur ou égal</code></pre>
        <div class="tip-box">
          <p>⚠️ Erreur classique : confondre <code>=</code> (affectation, crée une variable) et <code>==</code> (comparaison, pose une question). <code>age = 15</code> stocke 15. <code>age == 15</code> demande "est-ce que age vaut 15 ?"</p>
        </div>

        <h2>Combiner des conditions : and, or, not</h2>
        <p>Tu peux combiner plusieurs conditions en une seule expression :</p>
        <pre><code class="language-python">age = 16
permis = True

# and : les DEUX doivent être vraies
if age >= 18 and permis:
    print("Tu peux conduire !")   # age >= 18 est faux → n'affiche rien

# or : AU MOINS UNE doit être vraie
if age < 13 or age > 17:
    print("Pas au lycée")         # age > 17 est faux, age < 13 aussi → rien

# not : inverse la condition
if not permis:
    print("Pas de permis")        # not True = False → rien</code></pre>
      `
    },
    interactiveCode: `# Système de notes
note = 14

if note >= 16:
    print("Excellent ! 🌟")
elif note >= 14:
    print("Très bien ! 👏")
elif note >= 12:
    print("Bien 👍")
elif note >= 10:
    print("Passable")
else:
    print("À retravailler 💪")

print("Note:", note, "/ 20")`,
    exercises: [
      {
        id: 1,
        title: 'Positif ou négatif ?',
        description: 'Vérifier si un nombre est positif, négatif ou nul.',
        starter: 'nombre = 7\n# Affiche si le nombre est positif, négatif ou nul\n',
        solution: 'nombre = 7\nif nombre > 0:\n    print("positif")\nelif nombre < 0:\n    print("négatif")\nelse:\n    print("nul")',
        hint: 'Utilise if/elif/else avec les opérateurs > et <'
      },
      {
        id: 2,
        title: 'Majeur ou mineur ?',
        description: 'Vérifier si une personne est majeure (âge >= 18).',
        starter: 'age = 16\n# Affiche si la personne est majeure ou mineure\n',
        solution: 'age = 16\nif age >= 18:\n    print("Majeur")\nelse:\n    print("Mineur")',
        hint: 'Compare l\'âge avec 18 en utilisant >='
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quel opérateur teste l\'égalité ?',
        options: ['=', '==', '===', '!='],
        answer: 1,
        explanation: '== teste l\'égalité. = est l\'affectation.'
      },
      {
        id: 2,
        question: 'Que fait else ?',
        options: ['Répète le code', 'S\'exécute si if est False', 'Arrête le programme', 'Crée une boucle'],
        answer: 1,
        explanation: 'else s\'exécute quand la condition du if est fausse.'
      },
      {
        id: 3,
        question: 'L\'indentation en Python c\'est :',
        options: ['Optionnel', '4 espaces obligatoires', 'Obligatoire pour définir les blocs', 'Juste esthétique'],
        answer: 2,
        explanation: 'L\'indentation est obligatoire en Python pour délimiter les blocs de code.'
      }
    ]
  },
  {
    id: 5,
    emoji: '🔄',
    title: 'Les boucles',
    description: 'Répète des actions sans te fatiguer !',
    color: '#00ff88',
    lesson: {
      title: 'Les boucles',
      content: `
        <h2>Pourquoi les boucles sont-elles indispensables ?</h2>
        <p>Suppose que tu veuilles afficher la table de multiplication de 7. Sans boucle, tu écrirais 10 lignes de print(). Avec une boucle, tu en écris 2. Et si demain tu veux la table jusqu'à 100 ? Avec une boucle, tu changes un seul chiffre. <strong>Les boucles permettent de répéter du code automatiquement</strong>, ce qui est l'un des super-pouvoirs de la programmation.</p>

        <h2>La boucle for — "pour chaque..."</h2>
        <p>La boucle <code>for</code> est utilisée quand tu sais <strong>à l'avance combien de fois</strong> tu veux répéter quelque chose. Elle parcourt une séquence de valeurs une par une.</p>
        <pre><code class="language-python">for i in range(5):
    print(i)
# Affiche : 0, puis 1, puis 2, puis 3, puis 4</code></pre>
        <p>Décortiquons : <code>range(5)</code> génère la séquence 0, 1, 2, 3, 4. À chaque tour de boucle, <code>i</code> prend la valeur suivante, et les lignes indentées s'exécutent.</p>

        <h2>range() — le générateur de séquences</h2>
        <p><code>range()</code> est extrêmement flexible. Il accepte 1, 2 ou 3 arguments :</p>
        <pre><code class="language-python">range(5)          # 0, 1, 2, 3, 4          (de 0 à 4)
range(2, 8)       # 2, 3, 4, 5, 6, 7       (de 2 à 7)
range(1, 10, 2)   # 1, 3, 5, 7, 9          (de 1 à 9, pas de 2)
range(10, 0, -1)  # 10, 9, 8, ..., 1       (compte à rebours)</code></pre>
        <div class="info-box">
          <p>💡 La borne de fin est <strong>toujours exclue</strong>. <code>range(1, 6)</code> donne 1, 2, 3, 4, 5 — pas 6. Pense-y comme "de 1 jusqu'à 6 non inclus".</p>
        </div>

        <h2>for sur une liste</h2>
        <p>On peut aussi parcourir directement les éléments d'une liste, sans passer par range() :</p>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print("J'aime les", fruit)
# J'aime les pomme
# J'aime les banane
# J'aime les cerise</code></pre>
        <p>C'est souvent plus lisible que <code>for i in range(len(fruits))</code> quand on n'a pas besoin de l'index.</p>

        <h2>La boucle while — "tant que..."</h2>
        <p>La boucle <code>while</code> répète son bloc de code <strong>tant qu'une condition reste vraie</strong>. On l'utilise quand on ne sait pas à l'avance combien d'itérations il faudra.</p>
        <pre><code class="language-python">compteur = 0
while compteur < 5:
    print("Tour", compteur)
    compteur += 1    # compteur = compteur + 1
# Tour 0, Tour 1, Tour 2, Tour 3, Tour 4</code></pre>
        <p>Ici, Python vérifie <code>compteur &lt; 5</code> avant chaque tour. Dès que c'est faux (compteur vaut 5), la boucle s'arrête.</p>
        <div class="tip-box">
          <p>⚠️ Le piège du while : si tu oublies <code>compteur += 1</code>, la condition reste toujours vraie → <strong>boucle infinie</strong>. Ton programme tourne sans fin ! Assure-toi toujours que quelque chose dans la boucle fait progresser vers la sortie.</p>
        </div>

        <h2>break — sortir d'urgence</h2>
        <p><code>break</code> quitte immédiatement la boucle, même si la condition est encore vraie ou que range() n'est pas terminé :</p>
        <pre><code class="language-python">for i in range(100):
    if i == 5:
        break          # On sort dès que i vaut 5
    print(i)
# Affiche : 0, 1, 2, 3, 4  — puis s'arrête</code></pre>

        <h2>continue — sauter une itération</h2>
        <p><code>continue</code> saute le reste du tour en cours et passe directement au suivant :</p>
        <pre><code class="language-python">for i in range(10):
    if i % 2 == 0:    # Si i est pair
        continue      # Saute ce tour
    print(i)          # N'affiche que les impairs : 1, 3, 5, 7, 9</code></pre>

        <h2>for ou while : comment choisir ?</h2>
        <ul>
          <li>Tu connais le nombre d'itérations à l'avance → utilise <strong>for</strong></li>
          <li>Tu répètes jusqu'à ce qu'une condition change → utilise <strong>while</strong></li>
          <li>Quand c'est possible, préfère <strong>for</strong> : moins risqué de boucle infinie</li>
        </ul>
      `
    },
    interactiveCode: `# La boucle for avec range
print("Compter jusqu'à 5 :")
for i in range(1, 6):
    print(i)

print()

# Table de multiplication
n = 7
print(f"Table de {n} :")
for i in range(1, 6):
    print(f"{n} x {i} = {n * i}")`,
    exercises: [
      {
        id: 1,
        title: 'Nombres de 1 à 5',
        description: 'Utilise une boucle for pour afficher les nombres de 1 à 5.',
        starter: '# Utilise une boucle for pour afficher 1, 2, 3, 4, 5\n',
        solution: 'for i in range(1, 6):\n    print(i)',
        hint: 'Utilise range(1, 6) pour obtenir 1 à 5'
      },
      {
        id: 2,
        title: 'Compte à rebours',
        description: 'Affiche 5, 4, 3, 2, 1, puis "Décollage !"',
        starter: "# Affiche 5, 4, 3, 2, 1, Décollage !\n",
        solution: 'for i in range(5, 0, -1):\n    print(i)\nprint("Décollage !")',
        hint: 'range(5, 0, -1) compte de 5 à 1'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Que produit range(3) ?',
        options: ['1, 2, 3', '0, 1, 2, 3', '0, 1, 2', '1, 2'],
        answer: 2,
        explanation: 'range(3) génère 0, 1, 2 — il commence à 0 et s\'arrête avant 3.'
      },
      {
        id: 2,
        question: 'Quelle boucle s\'utilise quand on ne sait pas combien de fois itérer ?',
        options: ['for', 'while', 'loop', 'repeat'],
        answer: 1,
        explanation: 'while continue tant qu\'une condition est vraie, utile quand le nombre d\'itérations est inconnu.'
      },
      {
        id: 3,
        question: 'Que fait break ?',
        options: ['Continue à l\'itération suivante', 'Recommence la boucle', 'Sort immédiatement de la boucle', 'Pause la boucle'],
        answer: 2,
        explanation: 'break interrompt immédiatement l\'exécution de la boucle.'
      }
    ]
  },
  {
    id: 6,
    emoji: '📋',
    title: 'Les listes',
    description: 'Stocke plusieurs valeurs dans une seule variable !',
    color: '#00d4ff',
    lesson: {
      title: 'Les listes',
      content: `
        <h2>Le problème des variables séparées</h2>
        <p>Imagine que tu veuilles stocker les notes de toute ta classe : 30 élèves. Créer 30 variables séparées (<code>note1</code>, <code>note2</code>... <code>note30</code>) serait un cauchemar. Et comment calculer la moyenne de toutes ces variables ? Les <strong>listes</strong> résolvent ce problème : elles permettent de stocker plusieurs valeurs dans une seule variable, dans l'ordre.</p>

        <h2>Créer une liste</h2>
        <p>Une liste s'écrit entre crochets <code>[ ]</code>, avec les éléments séparés par des virgules. Elle peut contenir n'importe quel type de données, même mélangés :</p>
        <pre><code class="language-python">fruits  = ["pomme", "banane", "cerise"]   # liste de str
notes   = [14, 17, 12, 15, 18]            # liste de int
vide    = []                               # liste vide
mixte   = [42, "bonjour", True, 3.14]     # types mélangés (déconseillé)</code></pre>

        <h2>Accéder aux éléments — les indices</h2>
        <p>Chaque élément d'une liste a un <strong>indice</strong> (sa position). En Python, les indices commencent à <strong>0</strong>, pas à 1. C'est une convention universelle en informatique.</p>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]
#          index 0   index 1   index 2

print(fruits[0])   # pomme   ← premier élément
print(fruits[1])   # banane  ← deuxième
print(fruits[2])   # cerise  ← troisième (et dernier ici)</code></pre>
        <p>Les indices négatifs permettent de compter depuis la fin, très pratique :</p>
        <pre><code class="language-python">print(fruits[-1])  # cerise  ← dernier élément
print(fruits[-2])  # banane  ← avant-dernier</code></pre>
        <div class="info-box">
          <p>⚠️ Si tu essaies d'accéder à un index qui n'existe pas (<code>fruits[10]</code> sur une liste de 3 éléments), Python génère une <code>IndexError</code>. Vérifie toujours que ton index est dans les bornes !</p>
        </div>

        <h2>Modifier une liste</h2>
        <p>Contrairement aux chaînes de texte, les listes sont <strong>modifiables</strong> après leur création :</p>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]

fruits[0] = "fraise"      # Remplace "pomme" par "fraise"
print(fruits)              # ["fraise", "banane", "cerise"]

fruits.append("mangue")   # Ajoute à la FIN
print(fruits)              # ["fraise", "banane", "cerise", "mangue"]

fruits.remove("banane")   # Supprime la première occurrence
print(fruits)              # ["fraise", "cerise", "mangue"]

print(len(fruits))         # 3 — nombre d'éléments</code></pre>

        <h2>Méthodes utiles</h2>
        <pre><code class="language-python">nombres = [5, 2, 8, 1, 9, 3]

nombres.sort()             # Trie en place (modifie la liste)
print(nombres)             # [1, 2, 3, 5, 8, 9]

print(nombres.index(8))    # 4 — indice de la valeur 8
print(8 in nombres)        # True — 8 est bien dans la liste
print(nombres.count(3))    # 1 — combien de fois 3 apparaît</code></pre>

        <h2>Parcourir une liste avec for</h2>
        <p>Les listes et les boucles <code>for</code> sont faites pour aller ensemble. C'est la façon la plus naturelle de traiter tous les éléments :</p>
        <pre><code class="language-python">notes = [14, 17, 12, 15, 18]

# Méthode 1 : parcourir les valeurs directement
for note in notes:
    print(note)

# Méthode 2 : parcourir avec l'index (si on en a besoin)
for i in range(len(notes)):
    print(f"Élève {i+1} : {notes[i]}/20")

# Calculer la moyenne
total = 0
for note in notes:
    total += note
moyenne = total / len(notes)
print("Moyenne :", moyenne)</code></pre>
        <div class="tip-box">
          <p>✅ Astuce : Python a une fonction intégrée <code>sum(liste)</code> qui additionne tous les éléments. Donc la moyenne s'écrit simplement : <code>sum(notes) / len(notes)</code></p>
        </div>
      `
    },
    interactiveCode: `# Travailler avec des listes
fruits = ["pomme", "banane", "cerise", "mangue"]

print("Liste complète:", fruits)
print("Premier:", fruits[0])
print("Dernier:", fruits[-1])
print("Nombre de fruits:", len(fruits))

# Ajouter un fruit
fruits.append("fraise")
print("Après ajout:", fruits)

# Parcourir
print("\\nTous les fruits :")
for fruit in fruits:
    print("  🍎", fruit)`,
    exercises: [
      {
        id: 1,
        title: 'Liste de fruits',
        description: 'Crée une liste <code>fruits</code> avec 3 fruits et affiche-la ainsi que son premier élément.',
        starter: "# Crée une liste 'fruits' avec 3 fruits et affiche-la\n",
        solution: 'fruits = ["pomme", "banane", "cerise"]\nprint(fruits)\nprint("Premier fruit:", fruits[0])',
        hint: 'Crée la liste avec [] puis accède à fruits[0]'
      },
      {
        id: 2,
        title: 'Ajouter des éléments',
        description: 'Ajoute 4 et 5 à la liste nombres, puis affiche la liste et sa longueur.',
        starter: 'nombres = [1, 2, 3]\n# Ajoute 4 et 5, puis affiche la liste et sa longueur\n',
        solution: 'nombres = [1, 2, 3]\nnombres.append(4)\nnombres.append(5)\nprint(nombres)\nprint("Longueur:", len(nombres))',
        hint: 'Utilise .append() deux fois, puis len() pour la longueur'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Comment accède-t-on au premier élément de liste = [10, 20, 30] ?',
        options: ['liste[1]', 'liste[0]', 'liste.first()', 'liste(0)'],
        answer: 1,
        explanation: 'Les indices commencent à 0. liste[0] donne le premier élément.'
      },
      {
        id: 2,
        question: 'Quelle méthode ajoute un élément en fin de liste ?',
        options: ['.add()', '.insert()', '.append()', '.push()'],
        answer: 2,
        explanation: '.append() ajoute un élément à la fin de la liste.'
      },
      {
        id: 3,
        question: 'Que retourne len([1, 2, 3, 4]) ?',
        options: ['3', '4', '5', '0'],
        answer: 1,
        explanation: 'len() retourne le nombre d\'éléments. La liste a 4 éléments.'
      }
    ]
  },
  {
    id: 7,
    emoji: '🔧',
    title: 'Les fonctions',
    description: 'Crée tes propres commandes réutilisables !',
    color: '#a855f7',
    lesson: {
      title: 'Les fonctions',
      content: `
        <h2>Le problème du code dupliqué</h2>
        <p>Imagine que tu calcules la moyenne dans ton programme à 5 endroits différents. Si tu te rends compte qu'il y a un bug dans ta formule, tu dois corriger 5 fois. Et si tu oublies un endroit ? Les <strong>fonctions</strong> résolvent ce problème : tu écris la logique une seule fois, tu lui donnes un nom, et tu l'utilises autant de fois que tu veux. C'est le principe DRY : <em>Don't Repeat Yourself</em>.</p>

        <h2>Tu utilises déjà des fonctions !</h2>
        <p>En fait, tu connais déjà des fonctions : <code>print()</code>, <code>len()</code>, <code>range()</code>, <code>int()</code>... Ce sont des fonctions que Python t'offre. Maintenant tu vas <strong>créer les tiennes</strong>.</p>

        <h2>Définir une fonction avec def</h2>
        <p>Le mot-clé <code>def</code> (abréviation de "define") crée une fonction. La fonction ne s'exécute pas au moment où tu la définis — elle attend d'être <strong>appelée</strong>.</p>
        <pre><code class="language-python">def dire_bonjour():           # définition — rien ne s'exécute ici
    print("Bonjour !")
    print("Comment vas-tu ?")

# La fonction n'a encore rien fait...
dire_bonjour()   # ← appel : maintenant ça s'exécute !
dire_bonjour()   # ← deuxième appel, même résultat
dire_bonjour()   # ← troisième appel</code></pre>
        <p>La fonction est définie une fois mais appelée 3 fois. Si tu modifies le corps de la fonction, les 3 appels bénéficient automatiquement de la modification.</p>

        <h2>Les paramètres — personnaliser la fonction</h2>
        <p>Les <strong>paramètres</strong> sont des variables locales que tu passes à la fonction pour qu'elle puisse travailler avec des données variables :</p>
        <pre><code class="language-python">def saluer(prenom):          # "prenom" est le paramètre
    print("Bonjour " + prenom + " !")

saluer("Alice")   # prenom = "Alice" → Bonjour Alice !
saluer("Bob")     # prenom = "Bob"   → Bonjour Bob !
saluer("Chloé")   # prenom = "Chloé" → Bonjour Chloé !</code></pre>
        <p>La même fonction, 3 comportements différents selon ce qu'on lui passe. On peut avoir plusieurs paramètres :</p>
        <pre><code class="language-python">def se_presenter(prenom, age, ville):
    print(f"Je m'appelle {prenom}, j'ai {age} ans, j'habite à {ville}.")

se_presenter("Alice", 15, "Paris")
se_presenter("Bob", 14, "Lyon")</code></pre>

        <h2>return — renvoyer un résultat</h2>
        <p>Jusqu'ici nos fonctions affichent des choses mais ne <strong>renvoient</strong> rien. Avec <code>return</code>, la fonction peut calculer un résultat et le renvoyer pour qu'on puisse l'utiliser :</p>
        <pre><code class="language-python">def calculer_carre(nombre):
    return nombre * nombre    # renvoie le résultat

# La valeur retournée peut être stockée dans une variable
resultat = calculer_carre(5)
print(resultat)               # 25

# Ou utilisée directement
print(calculer_carre(7) + calculer_carre(3))  # 49 + 9 = 58</code></pre>
        <div class="info-box">
          <p>💡 Différence fondamentale : <code>print()</code> affiche un texte à l'écran pour toi. <code>return</code> renvoie une valeur au code qui a appelé la fonction. Seul <code>return</code> permet d'utiliser le résultat dans un calcul.</p>
        </div>

        <h2>Fonctions avec plusieurs paramètres et return</h2>
        <pre><code class="language-python">def calculer_moyenne(notes):
    if len(notes) == 0:
        return 0
    return sum(notes) / len(notes)

def mention(moyenne):
    if moyenne >= 16:
        return "Très bien"
    elif moyenne >= 14:
        return "Bien"
    elif moyenne >= 10:
        return "Passable"
    else:
        return "Insuffisant"

mes_notes = [14, 17, 12, 15, 18]
moy = calculer_moyenne(mes_notes)
print(f"Moyenne : {moy:.1f} → {mention(moy)}")</code></pre>

        <h2>Variables locales</h2>
        <p>Les variables créées à l'intérieur d'une fonction sont <strong>locales</strong> — elles n'existent que pendant l'exécution de la fonction et disparaissent ensuite. Ça évite les conflits de noms entre fonctions :</p>
        <pre><code class="language-python">def ma_fonction():
    x = 10    # variable locale : existe seulement ici
    print(x)

ma_fonction()
# print(x)  ← NameError : x n'existe pas ici !</code></pre>
        <div class="tip-box">
          <p>✅ Règle d'or : une bonne fonction fait <strong>une seule chose</strong>, a un nom clair qui dit ce qu'elle fait, et peut être réutilisée n'importe où. Si ta fonction fait 50 lignes, c'est souvent signe qu'il faut la découper en plusieurs petites fonctions.</p>
        </div>
      `
    },
    interactiveCode: `# Créer et utiliser des fonctions
def saluer(prenom):
    print("Bonjour " + prenom + " !")

def calculer_moyenne(notes):
    total = sum(notes)
    return total / len(notes)

# Utiliser les fonctions
saluer("Alice")
saluer("Bob")

mes_notes = [14, 17, 12, 15, 18]
moyenne = calculer_moyenne(mes_notes)
print("Ma moyenne:", moyenne)`,
    exercises: [
      {
        id: 1,
        title: 'Fonction saluer',
        description: 'Crée une fonction <code>saluer</code> qui prend un prénom et affiche "Bonjour [prénom] !"',
        starter: '# Crée une fonction \'saluer\' qui prend un prénom et affiche "Bonjour [prénom] !"\n',
        solution: 'def saluer(prenom):\n    print("Bonjour " + prenom + " !")\n\nsaluer("Alice")\nsaluer("Bob")',
        hint: 'Utilise def saluer(prenom): puis print() avec le paramètre'
      },
      {
        id: 2,
        title: 'Calculer l\'aire',
        description: 'Crée une fonction <code>calculer_aire</code> qui prend longueur et largeur, et retourne l\'aire.',
        starter: "# Crée une fonction 'calculer_aire' qui prend longueur et largeur, retourne l'aire\n",
        solution: 'def calculer_aire(longueur, largeur):\n    return longueur * largeur\n\naire = calculer_aire(5, 3)\nprint("Aire:", aire)',
        hint: 'La fonction doit utiliser return pour renvoyer le résultat'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quel mot-clé définit une fonction ?',
        options: ['function', 'func', 'def', 'define'],
        answer: 2,
        explanation: 'def est le mot-clé Python pour définir une fonction.'
      },
      {
        id: 2,
        question: 'À quoi sert return ?',
        options: ['Afficher un résultat', 'Renvoyer une valeur', 'Terminer le programme', 'Créer une boucle'],
        answer: 1,
        explanation: 'return renvoie une valeur depuis la fonction vers l\'appelant.'
      },
      {
        id: 3,
        question: 'Comment appelle-t-on la fonction addition(3, 5) ?',
        options: ['call addition(3, 5)', 'addition(3, 5)', 'run addition(3, 5)', 'exec addition(3, 5)'],
        answer: 1,
        explanation: 'On appelle une fonction en écrivant son nom suivi des arguments entre parenthèses.'
      }
    ]
  },

  // ─── NIVEAU 2 ────────────────────────────────────────────────────────────────

  {
    id: 8,
    emoji: '✂️',
    title: 'Chaînes avancées',
    level: 2,
    description: 'Maîtrise les f-strings, le slicing et les méthodes de texte !',
    color: '#f59e0b',
    lesson: {
      title: 'Les chaînes de caractères en profondeur',
      content: `
        <h2>Pourquoi maîtriser les chaînes de caractères ?</h2>
        <p>Presque tout ce qu'un programme traite passe un jour par du texte : des noms d'utilisateurs, des messages, des fichiers CSV, des pages web… En Python, les chaînes sont partout. Maîtriser leurs outils, c'est maîtriser une grande partie de la programmation réelle.</p>
        <p>Dans ce module, tu vas découvrir trois grandes catégories d'outils : les <strong>f-strings</strong> pour formater du texte, le <strong>slicing</strong> pour découper, et les <strong>méthodes</strong> pour transformer et rechercher.</p>

        <h2>Les f-strings — formater du texte proprement</h2>
        <p>Avant les f-strings, il fallait concaténer les chaînes avec <code>+</code>, ce qui était fastidieux et source d'erreurs. Les <strong>f-strings</strong> (introduites en Python 3.6) permettent d'insérer n'importe quelle expression directement dans une chaîne en mettant un <code>f</code> devant les guillemets :</p>
        <pre><code class="language-python">prenom = "Alice"
age = 15
# Ancienne méthode (à éviter)
print("Bonjour " + prenom + ", tu as " + str(age) + " ans !")

# Avec f-string (moderne et lisible)
print(f"Bonjour {prenom}, tu as {age} ans !")
print(f"Dans 5 ans, tu auras {age + 5} ans.")</code></pre>
        <p>Entre les accolades <code>{}</code>, tu peux mettre n'importe quelle expression Python : une variable, un calcul, un appel de fonction !</p>
        <pre><code class="language-python">prix = 12.5
quantite = 3
print(f"Total : {prix * quantite:.2f} €")  # :.2f = 2 décimales

score = 87
print(f"Tu as {score}/100 ({score/100*100:.0f}%)")

nom = "alice"
print(f"Bienvenue, {nom.capitalize()} !")</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Le format <code>:.2f</code> après une variable dans une f-string contrôle l'affichage des nombres décimaux. <code>:.0f</code> = 0 décimale, <code>:.3f</code> = 3 décimales. Très utile pour les prix et les pourcentages !</div>

        <h2>Le slicing (découpage de chaîne)</h2>
        <p>Imagine une chaîne comme un tableau de cases numérotées. Chaque case a un <strong>indice</strong> qui commence à 0. Le slicing permet d'extraire une tranche de cases avec la syntaxe <code>[début:fin:pas]</code> :</p>
        <pre><code class="language-python">mot = "Python"
#      P y t h o n
#      0 1 2 3 4 5  (indices positifs)
#     -6-5-4-3-2-1  (indices négatifs)

print(mot[0])     # P (premier caractère)
print(mot[-1])    # n (dernier caractère)
print(mot[0:3])   # Pyt  (indices 0, 1, 2 — la fin est EXCLUE)
print(mot[2:])    # thon (du 3ème jusqu'à la fin)
print(mot[:4])    # Pyth (du début jusqu'au 4ème exclu)
print(mot[-3:])   # hon  (les 3 derniers caractères)
print(mot[::-1])  # nohtyP (pas -1 = inversé !)</code></pre>
        <p>Le troisième paramètre (le <strong>pas</strong>) contrôle de combien d'indices on saute à chaque étape. <code>[::-1]</code> signifie "de la fin jusqu'au début en reculant de 1 à chaque fois" — c'est l'astuce classique pour inverser une chaîne !</p>
        <pre><code class="language-python">texte = "abcdefghij"
print(texte[::2])    # acegi (un sur deux)
print(texte[1::2])   # bdfhj (un sur deux, en commençant à 1)
print(texte[7:2:-1]) # hgfed (de l'indice 7 à 2, à reculons)</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — L'indice de fin est <strong>toujours exclu</strong>. <code>"Python"[0:3]</code> donne <code>"Pyt"</code> (indices 0, 1, 2), PAS "Pyth". Retiens : <code>[début inclus : fin exclue]</code>.</div>

        <h2>Méthodes essentielles des chaînes</h2>
        <p>Les chaînes Python ont des dizaines de méthodes intégrées. Voici les plus utiles :</p>

        <h3>Changer la casse</h3>
        <pre><code class="language-python">texte = "  Bonjour le Monde  "
print(texte.upper())          # "  BONJOUR LE MONDE  "
print(texte.lower())          # "  bonjour le monde  "
print(texte.title())          # "  Bonjour Le Monde  " (majuscule à chaque mot)
print(texte.capitalize())     # "  bonjour le monde  " (majuscule seulement au début)</code></pre>

        <h3>Nettoyer les espaces</h3>
        <pre><code class="language-python">texte = "  Bonjour le Monde  "
print(texte.strip())          # "Bonjour le Monde" (enlève les espaces aux deux bouts)
print(texte.lstrip())         # "Bonjour le Monde  " (seulement à gauche)
print(texte.rstrip())         # "  Bonjour le Monde" (seulement à droite)</code></pre>

        <h3>Remplacer et découper</h3>
        <pre><code class="language-python">texte = "Bonjour le Monde"
print(texte.replace("Monde", "Python"))  # "Bonjour le Python"
print(texte.replace("o", "0"))           # "B0nj0ur le M0nde" (remplace TOUTES les occurrences)

# split() découpe une chaîne selon un séparateur
mots = "pomme,banane,cerise"
liste = mots.split(",")       # ['pomme', 'banane', 'cerise']
print(liste)

# join() fait l'inverse : colle une liste en chaîne
print(" - ".join(liste))      # pomme - banane - cerise
print(", ".join(["a", "b", "c"]))  # a, b, c</code></pre>

        <h2>Rechercher dans une chaîne</h2>
        <pre><code class="language-python">phrase = "Python est super et puissant"
print(len(phrase))                 # 28 (nombre de caractères)
print("est" in phrase)             # True (contient "est" ?)
print("java" in phrase)            # False
print(phrase.startswith("Python")) # True (commence par...)
print(phrase.endswith("ant"))      # True (finit par...)
print(phrase.find("super"))        # 11 (indice du début, -1 si absent)
print(phrase.count("e"))           # 3 (nombre d'occurrences de "e")</code></pre>

        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Les chaînes sont <strong>immuables</strong> : une fois créée, tu ne peux pas modifier un caractère. Mais toutes les méthodes retournent une <em>nouvelle</em> chaîne. Donc <code>texte.upper()</code> ne modifie pas <code>texte</code>, il retourne une nouvelle chaîne en majuscules. Pour "modifier", tu dois réassigner : <code>texte = texte.upper()</code>.</div>

        <h2>Exemple concret : traiter des données textuelles</h2>
        <pre><code class="language-python"># Nettoyer et formater une liste de prénoms saisis par l'utilisateur
prenoms_bruts = ["  alice  ", "BOB", "chloé ", "  DAVID"]

prenoms_propres = []
for prenom in prenoms_bruts:
    prenom_net = prenom.strip().capitalize()  # Nettoie + capitalise
    prenoms_propres.append(prenom_net)

print(prenoms_propres)  # ['Alice', 'Bob', 'Chloé', 'David']

# Version en une ligne (on verra les compréhensions plus tard)
propres = [p.strip().capitalize() for p in prenoms_bruts]
print(propres)</code></pre>
      `
    },
    interactiveCode: `prenom = "Alice"
age = 15
# f-string
print(f"Bonjour {prenom}, tu as {age} ans !")
# Slicing
mot = "Python"
print(mot[::-1])
# Méthodes
phrase = "bonjour le monde"
print(phrase.title())`,
    exercises: [
      {
        id: 1,
        title: 'Carte de visite',
        description: 'Crée une variable <code>prenom</code>, <code>age</code> et <code>ville</code>, puis affiche une phrase avec une f-string.',
        starter: 'prenom = "Lucas"\nage = 15\nville = "Paris"\n# Affiche : "Je m\'appelle Lucas, j\'ai 15 ans et j\'habite à Paris."\n',
        solution: 'prenom = "Lucas"\nage = 15\nville = "Paris"\nprint(f"Je m\'appelle {prenom}, j\'ai {age} ans et j\'habite à {ville}.")',
        hint: 'Utilise f"..." avec les variables entre accolades {}'
      },
      {
        id: 2,
        title: 'Palindrome',
        description: 'Vérifie si le mot "kayak" est un palindrome (identique à l\'envers) en utilisant le slicing.',
        starter: 'mot = "kayak"\n# Affiche True si c\'est un palindrome, False sinon\n',
        solution: 'mot = "kayak"\nprint(mot == mot[::-1])',
        hint: 'Inverse le mot avec [::-1] et compare-le à l\'original'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Que vaut "Python"[1:4] ?',
        options: ['Pyt', 'yth', 'ytho', 'thon'],
        answer: 1,
        explanation: 'Les indices 1, 2, 3 donnent "y", "t", "h" → "yth". L\'indice de fin est exclu.'
      },
      {
        id: 2,
        question: 'Comment écrire une f-string ?',
        options: ['format("Salut {nom}")', 'f"Salut {nom}"', '"Salut" + nom', 's"Salut {nom}"'],
        answer: 1,
        explanation: 'Les f-strings commencent par f avant les guillemets, et les variables vont entre {}.'
      },
      {
        id: 3,
        question: 'Quelle méthode sépare une chaîne en liste ?',
        options: ['.strip()', '.split()', '.join()', '.slice()'],
        answer: 1,
        explanation: '.split(séparateur) découpe la chaîne en une liste selon le séparateur donné.'
      }
    ]
  },
  {
    id: 9,
    emoji: '📖',
    title: 'Les dictionnaires',
    level: 2,
    description: 'Stocke des données avec des clés et des valeurs !',
    color: '#10b981',
    lesson: {
      title: 'Les dictionnaires',
      content: `
        <h2>Pourquoi les dictionnaires existent-ils ?</h2>
        <p>Imagine que tu veux stocker les informations d'un élève. Avec une liste, tu pourrais faire <code>["Alice", 15, "Paris", 14.5]</code>. Mais comment te souvenir que l'indice 0 est le prénom, l'indice 2 est la ville ? C'est vite le chaos.</p>
        <p>Les <strong>dictionnaires</strong> résolvent ce problème en remplaçant les indices numériques par des <strong>clés descriptives</strong>. Au lieu de <code>eleve[0]</code>, tu écris <code>eleve["prenom"]</code>. Le code se comprend tout seul !</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Un dictionnaire Python c'est comme un vrai dictionnaire : tu cherches un <strong>mot (clé)</strong> et tu trouves sa <strong>définition (valeur)</strong>. On l'appelle aussi <em>dict</em> ou <em>hashmap</em> dans d'autres langages.</div>

        <h2>Créer et accéder à un dictionnaire</h2>
        <p>Un dictionnaire se crée avec des accolades <code>{}</code> et la notation <code>clé: valeur</code>. Les clés sont généralement des chaînes, les valeurs peuvent être de n'importe quel type :</p>
        <pre><code class="language-python">eleve = {
    "prenom": "Alice",
    "age": 15,
    "moyenne": 14.5,
    "redoublant": False,
    "matieres": ["Maths", "Français", "Histoire"]  # valeur peut être une liste !
}

# Accéder à une valeur avec sa clé
print(eleve["prenom"])   # Alice
print(eleve["age"])      # 15
print(eleve["matieres"]) # ['Maths', 'Français', 'Histoire']</code></pre>
        <p>Si tu essaies d'accéder à une clé qui n'existe pas, Python lève une <code>KeyError</code>. Pour éviter ça, utilise <code>.get()</code> :</p>
        <pre><code class="language-python">print(eleve["ville"])       # KeyError : 'ville' n'existe pas !
print(eleve.get("ville"))   # None (pas d'erreur)
print(eleve.get("ville", "Non renseignée"))  # "Non renseignée" (valeur par défaut)</code></pre>

        <h2>Modifier un dictionnaire</h2>
        <p>Les dictionnaires sont <strong>mutables</strong> : on peut ajouter, modifier et supprimer des clés à tout moment :</p>
        <pre><code class="language-python">eleve = {"prenom": "Alice", "age": 15}

# Modifier une valeur existante
eleve["age"] = 16
print(eleve["age"])  # 16

# Ajouter une nouvelle clé (même syntaxe que modifier !)
eleve["ville"] = "Paris"
eleve["note_python"] = 18

# Supprimer une clé
del eleve["note_python"]

# Afficher tout le dictionnaire
print(eleve)  # {'prenom': 'Alice', 'age': 16, 'ville': 'Paris'}</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — <code>eleve["cle"] = valeur</code> fait deux choses selon si la clé existe : si elle existe, ça la <strong>modifie</strong> ; si elle n'existe pas, ça <strong>l'ajoute</strong>. Python ne fait pas la différence, alors fais attention à ne pas écraser par accident une valeur existante !</div>

        <h2>Parcourir un dictionnaire</h2>
        <p>Il existe plusieurs façons de boucler sur un dictionnaire selon ce dont tu as besoin :</p>
        <pre><code class="language-python">scores = {"Alice": 18, "Bob": 14, "Chloé": 16}

# Boucle sur les clés seulement (comportement par défaut)
for prenom in scores:
    print(prenom)  # Alice, puis Bob, puis Chloé

# Boucle sur les valeurs seulement
for note in scores.values():
    print(note)    # 18, 14, 16

# Boucle sur les clés ET les valeurs (le plus courant)
for prenom, note in scores.items():
    print(f"{prenom} : {note}/20")

# Accéder aux clés et valeurs comme des listes
print(list(scores.keys()))    # ['Alice', 'Bob', 'Chloé']
print(list(scores.values()))  # [18, 14, 16]</code></pre>

        <h2>Méthodes utiles</h2>
        <pre><code class="language-python">d = {"a": 1, "b": 2, "c": 3}

# Vérifier si une clé existe
print("a" in d)       # True
print("z" in d)       # False

# Nombre de paires clé-valeur
print(len(d))         # 3

# Fusionner deux dictionnaires (Python 3.9+)
d2 = {"d": 4, "e": 5}
d3 = d | d2  # {a:1, b:2, c:3, d:4, e:5}

# Mettre à jour en place
d.update({"f": 6, "a": 99})  # Ajoute "f" et remplace "a"
print(d)</code></pre>

        <h2>Dictionnaires imbriqués — la vraie puissance</h2>
        <p>Les valeurs d'un dictionnaire peuvent elles-mêmes être des dictionnaires ! C'est comme ça que les vraies données sont structurées (JSON d'une API, profil utilisateur, etc.) :</p>
        <pre><code class="language-python">classe = {
    "Alice": {"age": 15, "notes": [14, 16, 18], "ville": "Paris"},
    "Bob":   {"age": 14, "notes": [11, 12, 10], "ville": "Lyon"},
}

# Accéder à une donnée imbriquée
print(classe["Alice"]["ville"])   # Paris
print(classe["Bob"]["notes"][0])  # 11 (première note de Bob)

# Calculer la moyenne d'Alice
notes_alice = classe["Alice"]["notes"]
moyenne = sum(notes_alice) / len(notes_alice)
print(f"Moyenne d'Alice : {moyenne:.1f}")</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Les dictionnaires Python sont <strong>ordonnés depuis Python 3.7</strong> : ils conservent l'ordre d'insertion des clés. C'est pratique quand l'ordre a de l'importance !</div>
      `
    },
    interactiveCode: `# Crée un dictionnaire élève
eleve = {
    "prenom": "Alice",
    "age": 15,
    "matiere_preferee": "Python"
}
print(f"Bonjour {eleve['prenom']} !")
print(f"Âge : {eleve['age']} ans")

# Parcourir
for cle, valeur in eleve.items():
    print(f"  {cle} → {valeur}")`,
    exercises: [
      {
        id: 1,
        title: 'Fiche élève',
        description: 'Crée un dictionnaire <code>eleve</code> avec tes infos (prenom, age, classe), puis affiche chaque info avec une f-string.',
        starter: '# Crée le dictionnaire eleve\neleve = {}\n# Affiche chaque info\n',
        solution: 'eleve = {"prenom": "Lucas", "age": 15, "classe": "3ème"}\nprint(f"Prénom : {eleve[\'prenom\']}")\nprint(f"Âge : {eleve[\'age\']} ans")\nprint(f"Classe : {eleve[\'classe\']}")',
        hint: 'Utilise des accolades {} avec clé: valeur pour créer le dictionnaire'
      },
      {
        id: 2,
        title: 'Compteur de mots',
        description: 'À partir de la liste donnée, crée un dictionnaire qui compte combien de fois chaque mot apparaît.',
        starter: 'mots = ["chat", "chien", "chat", "oiseau", "chien", "chat"]\ncompteur = {}\n# Remplis le dictionnaire compteur\n# Affiche le résultat\n',
        solution: 'mots = ["chat", "chien", "chat", "oiseau", "chien", "chat"]\ncompteur = {}\nfor mot in mots:\n    if mot in compteur:\n        compteur[mot] += 1\n    else:\n        compteur[mot] = 1\nprint(compteur)',
        hint: 'Boucle sur la liste, et pour chaque mot : s\'il est déjà dans le dict, ajoute 1, sinon mets 1'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Comment accède-t-on à la valeur de la clé "age" dans un dictionnaire d ?',
        options: ['d[0]', 'd.age', 'd["age"]', 'd.get[age]'],
        answer: 2,
        explanation: 'On accède à une valeur par sa clé entre crochets : d["age"].'
      },
      {
        id: 2,
        question: 'Quelle méthode retourne toutes les paires clé-valeur ?',
        options: ['.keys()', '.values()', '.items()', '.pairs()'],
        answer: 2,
        explanation: '.items() retourne les paires (clé, valeur), utile pour boucler sur les deux à la fois.'
      },
      {
        id: 3,
        question: 'Que fait d.get("x", 0) si "x" n\'est pas dans le dictionnaire ?',
        options: ['Génère une erreur', 'Retourne None', 'Retourne 0', 'Retourne "x"'],
        answer: 2,
        explanation: '.get(clé, défaut) retourne la valeur par défaut (ici 0) si la clé est absente, sans erreur.'
      }
    ]
  },
  {
    id: 10,
    emoji: '🛡️',
    title: 'Gestion des erreurs',
    level: 2,
    description: 'Attrape les erreurs avant qu\'elles ne bloquent ton programme !',
    color: '#ef4444',
    lesson: {
      title: 'try, except, finally',
      content: `
        <h2>Pourquoi gérer les erreurs ?</h2>
        <p>Imagine que ton programme demande à l'utilisateur de taper un nombre, et il tape "bonjour" à la place. Sans protection, Python s'arrête brutalement avec un message d'erreur rouge et effrayant. C'est une mauvaise expérience utilisateur !</p>
        <p>La <strong>gestion des erreurs</strong> est l'art d'anticiper les problèmes et d'y répondre gracieusement plutôt que de laisser le programme planter. Dans la vraie vie, c'est la différence entre un site qui affiche "Oops, quelque chose s'est mal passé" et un site qui se fige complètement.</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — En Python, les erreurs s'appellent des <strong>exceptions</strong>. Une exception est un objet qui représente quelque chose qui a mal tourné. Python en a des dizaines prédéfinies, et tu peux même en créer de nouvelles !</div>

        <h2>La structure try / except — ton filet de sécurité</h2>
        <p>Le principe : tu "tentes" du code dans un bloc <code>try</code>. Si une exception survient, Python saute immédiatement dans le bloc <code>except</code> correspondant, sans planter.</p>
        <pre><code class="language-python">try:
    resultat = 10 / 0
except ZeroDivisionError:
    print("Impossible de diviser par zéro !")

# Sans try/except, ce code produirait :
# ZeroDivisionError: division by zero
# (et le programme s'arrêterait)</code></pre>
        <p>Avec <code>try/except</code>, le programme continue après le bloc — il ne plante pas !</p>
        <pre><code class="language-python"># Exemple concret : convertir une saisie utilisateur
saisie = "quarante-deux"

try:
    nombre = int(saisie)
    print(f"Le nombre est : {nombre}")
except ValueError:
    print(f"'{saisie}' n'est pas un nombre valide !")
    nombre = 0  # Valeur par défaut

print(f"Résultat utilisé : {nombre}")  # Le programme continue !</code></pre>

        <h2>Attraper plusieurs types d'erreurs</h2>
        <p>Tu peux avoir plusieurs blocs <code>except</code> pour gérer différents types d'erreurs séparément :</p>
        <pre><code class="language-python">def diviser_saisie(texte_a, texte_b):
    try:
        a = int(texte_a)
        b = int(texte_b)
        resultat = a / b
        return resultat
    except ValueError:
        print("Erreur : l'un des deux n'est pas un entier !")
    except ZeroDivisionError:
        print("Erreur : division par zéro impossible !")
    except Exception as e:
        print(f"Erreur inattendue : {e}")
    return None

print(diviser_saisie("10", "2"))     # 5.0
print(diviser_saisie("abc", "2"))    # Erreur : pas un entier
print(diviser_saisie("10", "0"))     # Erreur : division par zéro</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Ne jamais écrire <code>except:</code> ou <code>except Exception:</code> sans préciser le type d'erreur (sauf en dernier recours) ! Attraper toutes les erreurs peut masquer des bugs graves. Sois précis : attrape uniquement les erreurs que tu sais gérer.</div>

        <h2>else et finally — les blocs complémentaires</h2>
        <p>Le bloc <code>try/except</code> a deux extensions utiles :</p>
        <ul>
          <li><code>else</code> : s'exécute <em>uniquement</em> si aucune exception n'a été levée dans le <code>try</code></li>
          <li><code>finally</code> : s'exécute <em>toujours</em>, qu'il y ait eu une erreur ou non — idéal pour libérer des ressources</li>
        </ul>
        <pre><code class="language-python">def lire_nombre(texte):
    try:
        nombre = int(texte)
    except ValueError:
        print(f"Conversion échouée : '{texte}' n'est pas un entier")
        return None
    else:
        print(f"Conversion réussie : {nombre}")
        return nombre
    finally:
        print("(bloc finally toujours exécuté)")

lire_nombre("42")    # Réussit → else s'exécute, puis finally
lire_nombre("oups")  # Échoue → except s'exécute, puis finally</code></pre>
        <pre><code class="language-python"># finally est crucial pour libérer des ressources
def lire_fichier(nom):
    fichier = None
    try:
        fichier = open(nom, "r")
        return fichier.read()
    except FileNotFoundError:
        print(f"Fichier '{nom}' introuvable !")
        return ""
    finally:
        if fichier:
            fichier.close()  # Toujours fermé, même en cas d'erreur</code></pre>

        <h2>Les exceptions les plus courantes</h2>
        <p>Python a de nombreuses exceptions prédéfinies. Voici les plus fréquentes :</p>
        <pre><code class="language-python"># ValueError : valeur du bon type mais invalide
int("abc")          # ValueError: invalid literal for int()

# TypeError : mauvais type d'argument
"hello" + 5         # TypeError: can only concatenate str (not "int") to str

# NameError : variable inexistante
print(variable_inconnue)  # NameError: name 'variable_inconnue' is not defined

# IndexError : index hors limites
liste = [1, 2, 3]
liste[10]           # IndexError: list index out of range

# KeyError : clé absente dans un dict
d = {"a": 1}
d["b"]              # KeyError: 'b'

# ZeroDivisionError : division par zéro
10 / 0              # ZeroDivisionError: division by zero

# FileNotFoundError : fichier introuvable
open("inexistant.txt")  # FileNotFoundError: No such file or directory</code></pre>

        <h2>Lever ses propres exceptions avec raise</h2>
        <p>Tu peux toi-même déclencher une exception avec le mot-clé <code>raise</code>. C'est utile pour valider des données dans tes fonctions :</p>
        <pre><code class="language-python">def calculer_racine(n):
    if n < 0:
        raise ValueError(f"Impossible : racine de {n} (nombre négatif !)")
    return n ** 0.5

try:
    print(calculer_racine(16))   # 4.0
    print(calculer_racine(-1))   # Lève ValueError
except ValueError as e:
    print(f"Erreur : {e}")</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Avec <code>except Exception as e</code>, la variable <code>e</code> contient le message d'erreur. Tu peux l'afficher avec <code>print(e)</code> ou l'inclure dans une f-string : <code>f"Erreur : {e}"</code>. C'est très pratique pour déboguer !</div>

        <h2>Exemple complet : saisie sécurisée</h2>
        <pre><code class="language-python">def demander_age():
    """Demande un âge valide à l'utilisateur (simulation)"""
    saisies = ["quinze", "-3", "200", "15"]  # Simule les saisies utilisateur

    for saisie in saisies:
        try:
            age = int(saisie)
            if age < 0 or age > 150:
                raise ValueError(f"Âge irréaliste : {age}")
            print(f"Âge valide : {age} ans")
        except ValueError as e:
            print(f"Saisie invalide '{saisie}' : {e}")

demander_age()</code></pre>
      `
    },
    interactiveCode: `# Exemple : division sécurisée
def diviser(a, b):
    try:
        resultat = a / b
    except ZeroDivisionError:
        print("Erreur : division par zéro !")
        return None
    else:
        return resultat

print(diviser(10, 2))   # 5.0
print(diviser(10, 0))   # Erreur : division par zéro !`,
    exercises: [
      {
        id: 1,
        title: 'Conversion sécurisée',
        description: 'Essaie de convertir la chaîne <code>"abc"</code> en entier avec <code>int()</code>. Attrape le <code>ValueError</code> et affiche un message d\'erreur propre.',
        starter: 'texte = "abc"\n# Essaie de convertir en entier\n# Si ça échoue, affiche "Ce n\'est pas un nombre valide !"\n',
        solution: 'texte = "abc"\ntry:\n    nombre = int(texte)\n    print(f"Nombre : {nombre}")\nexcept ValueError:\n    print("Ce n\'est pas un nombre valide !")',
        hint: 'Mets int(texte) dans un bloc try, et gère ValueError dans except'
      },
      {
        id: 2,
        title: 'Accès sécurisé à une liste',
        description: 'Tente d\'accéder à l\'index 10 d\'une liste de 3 éléments. Attrape l\'IndexError et affiche un message clair.',
        starter: 'fruits = ["pomme", "banane", "cerise"]\n# Tente d\'accéder à l\'index 10\n# Gère l\'erreur proprement\n',
        solution: 'fruits = ["pomme", "banane", "cerise"]\ntry:\n    print(fruits[10])\nexcept IndexError:\n    print(f"Index invalide ! La liste n\'a que {len(fruits)} éléments.")',
        hint: 'Mets fruits[10] dans un try et gère IndexError dans except'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quel bloc s\'exécute toujours, même en cas d\'erreur ?',
        options: ['try', 'except', 'else', 'finally'],
        answer: 3,
        explanation: 'finally s\'exécute toujours, qu\'il y ait eu une erreur ou non. Utile pour libérer des ressources.'
      },
      {
        id: 2,
        question: 'Quelle erreur survient avec int("abc") ?',
        options: ['TypeError', 'ValueError', 'NameError', 'SyntaxError'],
        answer: 1,
        explanation: 'ValueError est levée quand la valeur est du bon type (str) mais invalide pour la conversion demandée.'
      },
      {
        id: 3,
        question: 'Quand s\'exécute le bloc else dans un try/except ?',
        options: ['Toujours', 'Si une erreur est levée', 'Si aucune erreur n\'est levée', 'Jamais'],
        answer: 2,
        explanation: 'Le bloc else s\'exécute uniquement si aucune exception n\'a été levée dans le try.'
      }
    ]
  },
  {
    id: 11,
    emoji: '⚡',
    title: 'Compréhensions de listes',
    level: 2,
    description: 'Crée des listes élégantes en une seule ligne !',
    color: '#8b5cf6',
    lesson: {
      title: 'List comprehensions',
      content: `
        <h2>Le problème des boucles répétitives</h2>
        <p>En Python, il arrive souvent qu'on veuille créer une liste en transformant ou filtrant une autre. La façon classique avec une boucle <code>for</code> fonctionne, mais elle prend 3 à 5 lignes pour quelque chose de simple. Les <strong>compréhensions de listes</strong> permettent de faire ça en <em>une seule ligne élégante</em>.</p>
        <p>C'est l'une des fonctionnalités les plus aimées de Python — une fois que tu l'as comprise, tu ne pourras plus t'en passer !</p>

        <h2>La syntaxe de base</h2>
        <p>La forme générale est : <code>[expression for élément in itérable]</code></p>
        <pre><code class="language-python"># Méthode classique avec boucle (3 lignes)
carres = []
for i in range(1, 6):
    carres.append(i ** 2)
print(carres)  # [1, 4, 9, 16, 25]

# Compréhension de liste (1 ligne, même résultat !)
carres = [i ** 2 for i in range(1, 6)]
print(carres)  # [1, 4, 9, 16, 25]</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — La compréhension se lit de gauche à droite comme une phrase : "crée une liste de <strong>i au carré</strong>, pour chaque <strong>i</strong> dans <strong>range(1, 6)</strong>". L'ordre est : ce qu'on veut produire, puis la boucle.</div>

        <h2>Transformer des éléments</h2>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise", "kiwi"]

# Mettre en majuscules
majuscules = [f.upper() for f in fruits]
print(majuscules)  # ['POMME', 'BANANE', 'CERISE', 'KIWI']

# Longueur de chaque mot
longueurs = [len(f) for f in fruits]
print(longueurs)   # [5, 6, 6, 4]

# Construire des chaînes
annonces = [f"J'adore les {f}s !" for f in fruits]
print(annonces[0])  # J'adore les pommes !

# Convertir des types
textes = ["1", "2", "3", "4", "5"]
nombres = [int(t) for t in textes]
print(nombres)  # [1, 2, 3, 4, 5]</code></pre>

        <h2>Ajouter un filtre avec if</h2>
        <p>On peut ajouter une condition à la fin pour ne garder que certains éléments. La forme est : <code>[expression for élément in itérable if condition]</code></p>
        <pre><code class="language-python">nombres = list(range(1, 21))  # [1, 2, 3, ..., 20]

# Nombres pairs uniquement
pairs = [n for n in nombres if n % 2 == 0]
print(pairs)   # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Multiples de 3
mult3 = [n for n in nombres if n % 3 == 0]
print(mult3)   # [3, 6, 9, 12, 15, 18]

# Filtrer ET transformer : carrés des pairs seulement
pairs_carres = [n ** 2 for n in nombres if n % 2 == 0]
print(pairs_carres)  # [4, 16, 36, 64, 100, 144, 196, 256, 324, 400]

# Filtrer des mots
fruits = ["pomme", "banane", "cerise", "kiwi", "ananas"]
longs = [f for f in fruits if len(f) > 5]
print(longs)  # ['banane', 'cerise', 'ananas']</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — L'ordre dans une compréhension avec filtre est : expression → for → if. On met d'abord ce qu'on veut calculer, puis la boucle, puis la condition. C'est différent d'une phrase française mais logique une fois habituée !</div>

        <h2>Cas d'utilisation réels</h2>
        <pre><code class="language-python"># Nettoyer une liste de données
donnees_brutes = ["  Alice  ", "BOB", " chloé", "DAVID  "]
propres = [d.strip().capitalize() for d in donnees_brutes]
print(propres)  # ['Alice', 'Bob', 'Chloé', 'David']

# Extraire des informations d'une liste de dicts
eleves = [
    {"nom": "Alice", "note": 15},
    {"nom": "Bob",   "note": 9},
    {"nom": "Chloé", "note": 17},
]
noms_admis = [e["nom"] for e in eleves if e["note"] >= 10]
print(noms_admis)  # ['Alice', 'Chloé']

# Générer des données
table_multiplication_7 = [7 * i for i in range(1, 11)]
print(table_multiplication_7)  # [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]</code></pre>

        <h2>Quand ne PAS utiliser les compréhensions</h2>
        <p>Les compréhensions sont géniales, mais pas pour tout !</p>
        <ul>
          <li>Si la logique est complexe (plusieurs conditions imbriquées) → préfère une boucle for classique</li>
          <li>Si tu dois exécuter plusieurs actions par élément → préfère une boucle</li>
          <li>Si quelqu'un doit comprendre ton code facilement → la lisibilité prime sur la concision</li>
        </ul>
        <pre><code class="language-python"># Trop complexe en compréhension → utilise une boucle
# À éviter :
resultat = [a * b for a in range(5) for b in range(5) if a != b if a + b > 4]

# Plus lisible avec une boucle :
resultat = []
for a in range(5):
    for b in range(5):
        if a != b and a + b > 4:
            resultat.append(a * b)</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Les compréhensions sont aussi légèrement plus rapides que les boucles for équivalentes en Python, car elles sont optimisées par l'interpréteur. Mais la lisibilité doit toujours primer sur la performance !</div>
      `
    },
    interactiveCode: `# Exemples de compréhensions de listes
nombres = list(range(1, 11))
print("Nombres :", nombres)

carres = [n ** 2 for n in nombres]
print("Carrés :", carres)

pairs = [n for n in nombres if n % 2 == 0]
print("Pairs :", pairs)

mots = ["python", "est", "super", "cool"]
majuscules = [m.upper() for m in mots if len(m) > 3]
print("Longs en majuscules :", majuscules)`,
    exercises: [
      {
        id: 1,
        title: 'Cubes',
        description: 'Crée une liste <code>cubes</code> contenant les cubes (n³) des nombres de 1 à 5 en une seule ligne.',
        starter: '# Crée la liste cubes en une ligne avec une compréhension\ncubes = []\nprint(cubes)  # Attendu : [1, 8, 27, 64, 125]\n',
        solution: 'cubes = [n ** 3 for n in range(1, 6)]\nprint(cubes)',
        hint: 'Syntaxe : [n**3 for n in range(1, 6)]'
      },
      {
        id: 2,
        title: 'Filtrer des notes',
        description: 'À partir de la liste de notes, crée une liste avec uniquement les notes supérieures ou égales à 10.',
        starter: 'notes = [8, 15, 12, 5, 18, 9, 14, 3, 11]\n# Crée une liste "admis" avec les notes >= 10\n# Affiche le nombre d\'admis\n',
        solution: 'notes = [8, 15, 12, 5, 18, 9, 14, 3, 11]\nadmis = [n for n in notes if n >= 10]\nprint(admis)\nprint(f"{len(admis)} élèves admis sur {len(notes)}")',
        hint: 'Ajoute une condition if n >= 10 à la fin de la compréhension'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle est la syntaxe correcte d\'une compréhension de liste ?',
        options: ['(x*2 for x in liste)', '[x*2 for x in liste]', '{x*2 for x in liste}', 'list(x*2, liste)'],
        answer: 1,
        explanation: 'Les crochets [] définissent une compréhension de liste. Les parenthèses () créent un générateur, les accolades {} un set.'
      },
      {
        id: 2,
        question: 'Que produit [x for x in range(5) if x % 2 != 0] ?',
        options: ['[0, 2, 4]', '[1, 3]', '[1, 2, 3, 4]', '[0, 1, 2, 3, 4]'],
        answer: 1,
        explanation: 'x % 2 != 0 garde les impairs : 1 et 3 (0, 2, 4 sont pairs et exclus).'
      },
      {
        id: 3,
        question: 'Que fait [len(m) for m in ["ab", "cde", "f"]] ?',
        options: ['["ab", "cde", "f"]', '[2, 3, 1]', '[1, 2, 3]', 'Une erreur'],
        answer: 1,
        explanation: 'len() retourne la longueur de chaque mot : "ab"→2, "cde"→3, "f"→1 → [2, 3, 1].'
      }
    ]
  },
  {
    id: 12,
    emoji: '🎲',
    title: 'Modules & imports',
    level: 2,
    description: 'Utilise les super-pouvoirs intégrés de Python !',
    color: '#06b6d4',
    lesson: {
      title: 'Importer des modules',
      content: `
        <h2>Ne pas réinventer la roue !</h2>
        <p>Imagine que tu doives écrire un programme qui génère des nombres aléatoires, fait des calculs mathématiques complexes, ou lit la date d'aujourd'hui. Tu pourrais tout coder toi-même... mais d'autres l'ont déjà fait, en mieux, et en optimisé !</p>
        <p>Python est livré avec une <strong>bibliothèque standard</strong> de plusieurs centaines de modules prêts à l'emploi. Un module, c'est un fichier Python contenant des fonctions et des classes que tu peux <em>importer</em> dans ton code.</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — On dit que Python est livré avec "batteries incluses" (batteries included). Presque tout ce dont tu as besoin est déjà là, sans rien installer !</div>

        <h2>Les deux façons d'importer</h2>
        <pre><code class="language-python"># Méthode 1 : importer le module entier
import math
print(math.sqrt(16))  # On préfixe avec "math."
print(math.pi)

# Méthode 2 : importer seulement ce dont on a besoin
from math import sqrt, pi
print(sqrt(16))  # Plus besoin du préfixe
print(pi)

# Méthode 3 : donner un alias (raccourci)
import random as rd
print(rd.randint(1, 6))  # "rd" à la place de "random"</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Évite <code>from module import *</code> (qui importe tout). Ça peut créer des conflits de noms et rend le code difficile à lire. Préfère importer spécifiquement ce dont tu as besoin.</div>

        <h2>Le module random — les dés du programmeur</h2>
        <p>Le module <code>random</code> génère des valeurs aléatoires. Indispensable pour les jeux, les simulations et les tests !</p>
        <pre><code class="language-python">import random

# Entier aléatoire entre 1 et 6 inclus (comme un dé)
de = random.randint(1, 6)
print(f"Tu as lancé un {de}")

# Nombre décimal entre 0.0 et 1.0 (exclus)
print(random.random())   # ex: 0.7432...

# Choisir un élément au hasard dans une liste
fruits = ["pomme", "banane", "cerise", "kiwi"]
print(random.choice(fruits))   # ex: "banane"

# Mélanger une liste (modifie la liste en place !)
random.shuffle(fruits)
print(fruits)   # Ordre aléatoire

# Choisir plusieurs éléments sans remise
echantillon = random.sample(range(1, 50), 6)  # Loto : 6 numéros parmi 1-49
print(sorted(echantillon))</code></pre>

        <h2>Le module math — les maths avancées</h2>
        <p>Pour tout ce que les opérateurs de base ne peuvent pas faire :</p>
        <pre><code class="language-python">import math

print(math.sqrt(16))      # 4.0 (racine carrée)
print(math.sqrt(2))       # 1.4142... (irrrationnel)
print(math.pi)            # 3.14159265358979...
print(math.e)             # 2.71828... (constante d'Euler)
print(math.floor(3.7))    # 3 (arrondi vers le bas)
print(math.ceil(3.2))     # 4 (arrondi vers le haut)
print(math.pow(2, 10))    # 1024.0 (2 puissance 10)
print(math.log(100, 10))  # 2.0 (logarithme base 10)
print(math.factorial(5))  # 120 (5! = 5×4×3×2×1)
print(math.gcd(12, 8))    # 4 (plus grand commun diviseur)
print(math.sin(math.pi / 2))  # 1.0 (sinus de 90°)</code></pre>

        <h2>Le module datetime — travailler avec les dates</h2>
        <pre><code class="language-python">from datetime import datetime, date, timedelta

# Date et heure actuelles
maintenant = datetime.now()
print(maintenant)                # 2024-01-15 14:30:25.123456
print(f"Année : {maintenant.year}")
print(f"Mois  : {maintenant.month}")
print(f"Jour  : {maintenant.day}")
print(f"Heure : {maintenant.hour}:{maintenant.minute:02d}")

# Formater une date
print(maintenant.strftime("%d/%m/%Y"))   # 15/01/2024
print(maintenant.strftime("%A %d %B"))   # Monday 15 January

# Date actuelle (sans l'heure)
aujourd_hui = date.today()
print(aujourd_hui)   # 2024-01-15

# Calculs de dates
dans_30_jours = aujourd_hui + timedelta(days=30)
print(f"Dans 30 jours : {dans_30_jours}")</code></pre>

        <h2>Le module os — interagir avec le système</h2>
        <pre><code class="language-python">import os

# Répertoire courant
print(os.getcwd())  # ex: /home/user/monprojet

# Lister les fichiers d'un dossier
fichiers = os.listdir(".")
print(fichiers)

# Vérifier l'existence d'un fichier
print(os.path.exists("fichier.txt"))   # True ou False
print(os.path.isfile("fichier.txt"))   # C'est bien un fichier ?
print(os.path.isdir("dossier"))        # C'est bien un dossier ?

# Variables d'environnement
print(os.environ.get("HOME", "inconnu"))  # Répertoire home</code></pre>

        <h2>Le module collections — structures de données avancées</h2>
        <pre><code class="language-python">from collections import Counter, defaultdict

# Counter : compter facilement
mots = ["chat", "chien", "chat", "oiseau", "chien", "chat"]
compte = Counter(mots)
print(compte)          # Counter({'chat': 3, 'chien': 2, 'oiseau': 1})
print(compte.most_common(2))  # [('chat', 3), ('chien', 2)]

# defaultdict : dict avec valeur par défaut automatique
scores = defaultdict(list)  # Chaque valeur est une liste vide par défaut
scores["Alice"].append(15)
scores["Alice"].append(18)
scores["Bob"].append(12)
print(dict(scores))  # {'Alice': [15, 18], 'Bob': [12]}</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Pour les modules non inclus dans Python (comme Flask, NumPy, Pandas...), il faut les installer avec <code>pip install nom_module</code> dans le terminal. La bibliothèque standard, elle, est toujours disponible sans installation !</div>
      `
    },
    interactiveCode: `import random
import math

# Simuler 5 lancers de dé
print("Lancer de dés :")
for i in range(5):
    de = random.randint(1, 6)
    print(f"  Lancer {i+1} : {de}")

# Math
print(f"\\nRacine de 144 : {math.sqrt(144)}")
print(f"Pi ≈ {math.pi:.4f}")

# Jeu simple
mots = ["python", "boucle", "variable", "fonction"]
mot = random.choice(mots)
print(f"\\nMot choisi : {mot.upper()}")`,
    exercises: [
      {
        id: 1,
        title: 'Jeu de pile ou face',
        description: 'Utilise <code>random.randint(0, 1)</code> pour simuler un lancer de pièce. Affiche "Pile" si 0, "Face" si 1.',
        starter: 'import random\n# Simule un lancer de pièce\n# Affiche "Pile" ou "Face"\n',
        solution: 'import random\nresultat = random.randint(0, 1)\nif resultat == 0:\n    print("Pile !")\nelse:\n    print("Face !")',
        hint: 'random.randint(0, 1) donne 0 ou 1, puis utilise if/else'
      },
      {
        id: 2,
        title: 'Calculatrice cercle',
        description: 'Calcule et affiche le périmètre et l\'aire d\'un cercle de rayon 7 avec <code>math.pi</code>.',
        starter: 'import math\nrayon = 7\n# Calcule périmètre (2 * pi * r) et aire (pi * r²)\n# Affiche avec 2 décimales\n',
        solution: 'import math\nrayon = 7\nperimetre = 2 * math.pi * rayon\naire = math.pi * rayon ** 2\nprint(f"Périmètre : {perimetre:.2f}")\nprint(f"Aire : {aire:.2f}")',
        hint: 'Utilise math.pi pour π. :.2f dans une f-string donne 2 décimales.'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle ligne importe uniquement la fonction sqrt du module math ?',
        options: ['import math.sqrt', 'from math import sqrt', 'import sqrt from math', 'include math.sqrt'],
        answer: 1,
        explanation: '"from math import sqrt" importe uniquement sqrt, utilisable directement sans écrire math.sqrt.'
      },
      {
        id: 2,
        question: 'Que retourne random.randint(1, 6) ?',
        options: ['Un float entre 1.0 et 6.0', 'Un entier entre 1 et 5', 'Un entier entre 1 et 6 inclus', 'Un entier entre 0 et 6'],
        answer: 2,
        explanation: 'randint(a, b) retourne un entier entre a et b inclus (les deux bornes sont comprises).'
      },
      {
        id: 3,
        question: 'Quelle fonction de math donne la racine carrée ?',
        options: ['math.sqrt()', 'math.root()', 'math.racine()', 'math.pow()'],
        answer: 0,
        explanation: 'math.sqrt(x) retourne la racine carrée de x. math.pow(x, n) donne x à la puissance n.'
      }
    ]
  },
  {
    id: 13,
    emoji: '🏗️',
    title: 'Fonctions avancées',
    level: 2,
    description: 'Paramètres par défaut, *args et fonctions lambda !',
    color: '#f97316',
    lesson: {
      title: 'Aller plus loin avec les fonctions',
      content: `
        <h2>Les fonctions, au niveau suivant</h2>
        <p>Tu sais déjà créer des fonctions de base avec <code>def</code>. Ce module explore les fonctionnalités avancées qui rendent tes fonctions vraiment flexibles et puissantes : les paramètres optionnels, les arguments en nombre variable, et les fonctions lambda.</p>

        <h2>Paramètres par défaut</h2>
        <p>Parfois tu veux qu'un paramètre soit optionnel — s'il n'est pas fourni, une valeur par défaut est utilisée automatiquement :</p>
        <pre><code class="language-python">def saluer(prenom, message="Bonjour"):
    print(f"{message} {prenom} !")

saluer("Alice")              # Bonjour Alice !  (message par défaut)
saluer("Bob", "Salut")       # Salut Bob !      (message fourni)
saluer("Chloé", "Coucou")   # Coucou Chloé !   (message fourni)</code></pre>
        <p>C'est très utile pour les fonctions avec de nombreuses options, où la plupart du temps on veut les valeurs standard :</p>
        <pre><code class="language-python">def afficher_note(note, total=20, emoji=True):
    pourcentage = note / total * 100
    base = f"{note}/{total} ({pourcentage:.0f}%)"
    if emoji:
        if note >= 16: base += " 🌟"
        elif note >= 12: base += " ✓"
        else: base += " ✗"
    return base

print(afficher_note(15))          # 15/20 (75%) ✓
print(afficher_note(18))          # 18/20 (90%) 🌟
print(afficher_note(15, emoji=False))  # 15/20 (75%)
print(afficher_note(75, total=100))    # 75/100 (75%) ✓</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Les paramètres avec valeur par défaut doivent toujours venir <em>après</em> les paramètres sans défaut ! <code>def f(x=1, y)</code> est une erreur. La règle : d'abord les obligatoires, ensuite les optionnels.</div>

        <h2>Arguments nommés (keyword arguments)</h2>
        <p>Quand tu appelles une fonction, tu peux nommer tes arguments. L'ordre n'a alors plus d'importance !</p>
        <pre><code class="language-python">def creer_profil(nom, age, ville="Paris", sport="inconnu"):
    print(f"{nom}, {age} ans, {ville}, sport : {sport}")

# Ordre classique
creer_profil("Alice", 15, "Lyon", "tennis")

# Avec noms : ordre libre !
creer_profil(age=16, nom="Bob", sport="foot", ville="Bordeaux")

# Mix : positionnels d'abord, nommés ensuite
creer_profil("Chloé", 14, sport="natation")  # ville reste "Paris"</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Les arguments nommés rendent le code plus lisible, surtout pour les fonctions avec beaucoup de paramètres. <code>afficher(texte, couleur="rouge", taille=14)</code> se comprend immédiatement même sans regarder la définition de la fonction !</div>

        <h2>*args — nombre variable d'arguments positionnels</h2>
        <p>Et si tu ne sais pas à l'avance combien d'arguments ta fonction va recevoir ? <code>*args</code> capture tous les arguments dans un tuple :</p>
        <pre><code class="language-python">def somme(*nombres):
    # nombres est un tuple de tous les arguments passés
    total = 0
    for n in nombres:
        total += n
    return total

print(somme(1, 2, 3))           # 6
print(somme(10, 20, 30, 40))    # 100
print(somme(5))                  # 5
print(somme())                   # 0

# Utilisation avec sum() intégré
def ma_somme(*args):
    return sum(args)   # Plus élégant !

# Exemple : calculer la moyenne de n nombres
def moyenne(*notes):
    if not notes:
        return 0
    return sum(notes) / len(notes)

print(moyenne(14, 16, 12, 18))  # 15.0</code></pre>

        <h2>**kwargs — arguments nommés variables</h2>
        <p><code>**kwargs</code> capture tous les arguments nommés dans un dictionnaire :</p>
        <pre><code class="language-python">def afficher_infos(**infos):
    # infos est un dict de tous les arguments nommés
    for cle, valeur in infos.items():
        print(f"  {cle} : {valeur}")

afficher_infos(nom="Alice", age=15, ville="Paris")
# nom : Alice
# age : 15
# ville : Paris

# Combiner *args et **kwargs
def tout_afficher(*args, **kwargs):
    print("Positionnels :", args)
    print("Nommés      :", kwargs)

tout_afficher(1, 2, 3, couleur="rouge", taille=14)
# Positionnels : (1, 2, 3)
# Nommés      : {'couleur': 'rouge', 'taille': 14}</code></pre>

        <h2>Les fonctions lambda — fonctions anonymes</h2>
        <p>Une <strong>lambda</strong> est une fonction sans nom, définie en une seule ligne. Parfaite pour les petites opérations utilisées une seule fois :</p>
        <pre><code class="language-python"># Syntaxe : lambda paramètres: expression (une seule !)

# Équivalences :
def doubler(x):
    return x * 2

doubler_lambda = lambda x: x * 2

print(doubler(5))        # 10
print(doubler_lambda(5)) # 10

# Lambda avec plusieurs paramètres
additionner = lambda a, b: a + b
print(additionner(3, 7))  # 10

# Lambda avec condition (ternaire)
signe = lambda n: "positif" if n > 0 else "négatif" if n < 0 else "zéro"
print(signe(5))    # positif
print(signe(-3))   # négatif</code></pre>

        <h2>Lambda + sorted() — le duo gagnant</h2>
        <p>L'usage le plus fréquent des lambdas est avec <code>sorted()</code> ou <code>sort()</code> pour définir le critère de tri :</p>
        <pre><code class="language-python"># Trier des tuples par le deuxième élément (la note)
eleves = [("Alice", 15), ("Bob", 18), ("Chloé", 12), ("David", 16)]

par_note = sorted(eleves, key=lambda e: e[1])
print(par_note)  # [('Chloé', 12), ('Alice', 15), ('David', 16), ('Bob', 18)]

par_note_desc = sorted(eleves, key=lambda e: e[1], reverse=True)
print(par_note_desc)  # [('Bob', 18), ('David', 16), ...]

# Trier des dicts
produits = [
    {"nom": "pomme", "prix": 0.5},
    {"nom": "kiwi",  "prix": 1.2},
    {"nom": "banane","prix": 0.3},
]
par_prix = sorted(produits, key=lambda p: p["prix"])
print([p["nom"] for p in par_prix])  # ['banane', 'pomme', 'kiwi']</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Utilise <code>lambda</code> pour des fonctions courtes et ponctuelles (surtout comme argument de <code>sorted</code>, <code>map</code>, <code>filter</code>). Pour tout ce qui a plus d'une ligne ou qui sera réutilisé, crée une vraie fonction avec <code>def</code>.</div>
      `
    },
    interactiveCode: `# Paramètre par défaut
def saluer(prenom, message="Bonjour"):
    print(f"{message} {prenom} !")

saluer("Alice")
saluer("Bob", "Salut")

# *args
def somme(*nombres):
    return sum(nombres)

print(f"\\nSomme de 1+2+3+4+5 = {somme(1,2,3,4,5)}")

# Lambda + sorted
fruits = ["banane", "kiwi", "fraise", "pomme"]
par_longueur = sorted(fruits, key=lambda f: len(f))
print("\\nTriés par longueur :", par_longueur)`,
    exercises: [
      {
        id: 1,
        title: 'Puissance avec défaut',
        description: 'Crée une fonction <code>puissance(base, exposant=2)</code> qui retourne base^exposant. Par défaut, elle calcule le carré.',
        starter: '# Crée la fonction puissance avec un paramètre par défaut\n\nprint(puissance(3))     # 9 (3²)\nprint(puissance(2, 10)) # 1024 (2¹⁰)\n',
        solution: 'def puissance(base, exposant=2):\n    return base ** exposant\n\nprint(puissance(3))\nprint(puissance(2, 10))',
        hint: 'def puissance(base, exposant=2): — le paramètre avec valeur par défaut se met en dernier'
      },
      {
        id: 2,
        title: 'Maximum de n nombres',
        description: 'Crée une fonction <code>mon_max(*nombres)</code> qui retourne le plus grand nombre parmi tous les arguments passés.',
        starter: '# Crée la fonction mon_max(*nombres)\n\nprint(mon_max(3, 1, 7, 2))     # 7\nprint(mon_max(10, 99, 42))     # 99\n',
        solution: 'def mon_max(*nombres):\n    maxi = nombres[0]\n    for n in nombres:\n        if n > maxi:\n            maxi = n\n    return maxi\n\nprint(mon_max(3, 1, 7, 2))\nprint(mon_max(10, 99, 42))',
        hint: 'Utilise *nombres pour recevoir un nombre variable d\'arguments, puis boucle pour trouver le max'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Que fait def f(x, y=10) ?',
        options: ['y est obligatoire', 'x vaut 10 par défaut', 'y vaut 10 si non fourni', 'Génère une erreur'],
        answer: 2,
        explanation: 'y=10 signifie que y a 10 comme valeur par défaut. Si l\'appelant ne fournit pas y, il vaut 10.'
      },
      {
        id: 2,
        question: 'Que fait *args dans def f(*args) ?',
        options: ['Crée un dictionnaire', 'Accepte un nombre variable d\'arguments sous forme de tuple', 'Multiplie les arguments', 'Crée une liste vide'],
        answer: 1,
        explanation: '*args capture tous les arguments positionnels dans un tuple, quel que soit leur nombre.'
      },
      {
        id: 3,
        question: 'Que vaut (lambda x: x**2)(4) ?',
        options: ['2', '8', '16', 'lambda'],
        answer: 2,
        explanation: 'La lambda prend x et retourne x². Appelée avec 4, elle retourne 4² = 16.'
      }
    ]
  },
  {
    id: 14,
    emoji: '🗂️',
    title: 'Tuples & Sets',
    level: 2,
    description: 'Deux structures de données incontournables !',
    color: '#84cc16',
    lesson: {
      title: 'Tuples et ensembles (sets)',
      content: `
        <h2>Deux structures de données méconnues mais essentielles</h2>
        <p>Tu connais les listes et les dictionnaires. Python offre deux autres structures fondamentales : les <strong>tuples</strong> (données immuables groupées) et les <strong>sets</strong> (collections sans doublon). Chacune a ses cas d'usage précis !</p>

        <h2>Les tuples — des données figées dans le temps</h2>
        <p>Un tuple ressemble à une liste, mais avec une différence cruciale : il est <strong>immuable</strong>. Une fois créé, tu ne peux plus le modifier. On l'écrit avec des parenthèses (ou même sans !).</p>
        <pre><code class="language-python">coordonnees = (48.8566, 2.3522)  # Paris : lat, lon
couleurs_rgb = (255, 128, 0)     # Orange en RGB
dimensions = (1920, 1080)        # Résolution Full HD
point = 10, 20                   # Parenthèses optionnelles !

# Accès identique aux listes
print(coordonnees[0])  # 48.8566
print(len(couleurs_rgb))  # 3

# Mais impossible de modifier !
# coordonnees[0] = 99  → TypeError !</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Quand utiliser un tuple plutôt qu'une liste ? Quand les données ne devraient <em>pas</em> changer : coordonnées GPS, dimensions d'une image, jours de la semaine, codes de couleurs RGB. L'immuabilité protège contre les modifications accidentelles !</div>

        <h2>Le déballage (unpacking) — la magie des tuples</h2>
        <p>Le déballage permet d'assigner les éléments d'un tuple à plusieurs variables d'un coup :</p>
        <pre><code class="language-python"># Déballage simple
x, y = (10, 20)
print(x, y)  # 10 20

# Sans parenthèses, même résultat
prenom, age, ville = "Alice", 15, "Paris"
print(f"{prenom}, {age} ans, {ville}")

# Swap de deux variables en une ligne (Python est magique !)
a, b = 5, 10
print(f"Avant : a={a}, b={b}")
a, b = b, a   # Échange les valeurs !
print(f"Après : a={a}, b={b}")

# Ignorer certaines valeurs avec _
lat, _, ville = (48.8566, 2.3522, "Paris")
print(f"Ville : {ville}")

# Déballage partiel avec *
premier, *reste = (1, 2, 3, 4, 5)
print(premier)  # 1
print(reste)    # [2, 3, 4, 5]

*debut, dernier = (1, 2, 3, 4, 5)
print(debut)    # [1, 2, 3, 4]
print(dernier)  # 5</code></pre>

        <h2>Tuples dans les boucles</h2>
        <p>Les tuples s'utilisent beaucoup avec les boucles, surtout pour retourner plusieurs valeurs d'une fonction :</p>
        <pre><code class="language-python"># Retourner plusieurs valeurs d'une fonction (retourne un tuple)
def min_max(liste):
    return min(liste), max(liste)  # Tuple implicite !

notes = [14, 8, 17, 12, 15]
mini, maxi = min_max(notes)
print(f"Min : {mini}, Max : {maxi}")

# Boucle sur une liste de tuples
classement = [("Alice", 15), ("Bob", 18), ("Chloé", 12)]
for prenom, note in classement:   # Déballage automatique !
    print(f"  {prenom} : {note}/20")</code></pre>

        <h2>Les sets (ensembles) — collections sans doublon</h2>
        <p>Un set est une collection non ordonnée qui <strong>n'accepte pas les doublons</strong>. Parfait pour les opérations sur des ensembles et les tests d'appartenance ultra-rapides !</p>
        <pre><code class="language-python"># Créer un set (attention : {} vide crée un dict, pas un set !)
nombres = {1, 2, 3, 4, 4, 2, 1}
print(nombres)   # {1, 2, 3, 4} — les doublons disparaissent !

ensemble_vide = set()  # Création d'un set vide

# Ajouter et supprimer
nombres.add(5)
nombres.remove(3)      # Erreur si absent
nombres.discard(99)    # Pas d'erreur si absent
print(nombres)</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — <code>{}</code> crée un <em>dictionnaire</em> vide, pas un set vide ! Pour un set vide, utilise <code>set()</code>. En revanche <code>{1, 2, 3}</code> crée bien un set, car il n'y a pas de paires clé:valeur.</div>

        <h2>Les opérations ensemblistes</h2>
        <p>Les sets supportent les opérations mathématiques sur les ensembles — comme en cours de maths !</p>
        <pre><code class="language-python">a = {1, 2, 3, 4, 5}
b = {3, 4, 5, 6, 7}

print(a | b)   # Union : {1, 2, 3, 4, 5, 6, 7}  (tout ce qui est dans a OU b)
print(a & b)   # Intersection : {3, 4, 5}       (ce qui est dans a ET b)
print(a - b)   # Différence : {1, 2}             (dans a mais pas dans b)
print(b - a)   # Différence : {6, 7}             (dans b mais pas dans a)
print(a ^ b)   # Différence symétrique : {1, 2, 6, 7}  (dans l'un mais pas les deux)

# Vérifier des sous-ensembles
print({1, 2} <= a)   # True ({1,2} est inclus dans a)
print(a >= {2, 4})   # True (a contient {2,4})</code></pre>

        <h2>Cas d'usage pratiques des sets</h2>
        <pre><code class="language-python"># Éliminer les doublons d'une liste (sans doute l'usage le plus courant !)
mots = ["python", "java", "python", "c", "java", "python", "ruby"]
uniques = list(set(mots))
print(sorted(uniques))  # ['c', 'java', 'python', 'ruby']
print(f"Doublons supprimés : {len(mots) - len(set(mots))}")  # 3

# Test d'appartenance ultra-rapide (bien plus rapide qu'une liste !)
prenoms_interdits = {"admin", "root", "system", "null"}
prenom_saisi = "alice"
if prenom_saisi in prenoms_interdits:
    print("Ce prénom est réservé !")
else:
    print("Prénom disponible !")

# Trouver les éléments communs à deux listes
liste_a = [1, 2, 3, 4, 5, 6]
liste_b = [4, 5, 6, 7, 8, 9]
communs = set(liste_a) & set(liste_b)
print(communs)  # {4, 5, 6}</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Les sets sont <em>extrêmement rapides</em> pour tester si un élément est présent (<code>x in mon_set</code>). Sur une liste de 1 million d'éléments, une liste parcourt jusqu'à 1 million de cases ; un set trouve la réponse en quasi-temps constant. C'est la structure idéale pour les "listes d'interdits" ou les "éléments déjà vus" !</div>
      `
    },
    interactiveCode: `# Tuples
coordonnees = (48.8566, 2.3522)
lat, lon = coordonnees
print(f"Paris : lat={lat}, lon={lon}")

# Déballage swap
a, b = 10, 20
print(f"Avant swap : a={a}, b={b}")
a, b = b, a
print(f"Après swap : a={a}, b={b}")

# Sets
notes = [15, 12, 15, 18, 12, 14, 18]
print(f"\\nNotes : {notes}")
print(f"Notes uniques : {sorted(set(notes))}")
print(f"Nombre de valeurs uniques : {len(set(notes))}")`,
    exercises: [
      {
        id: 1,
        title: 'Dépiler un tuple',
        description: 'Crée un tuple <code>personne</code> avec (prénom, âge, ville) et affiche chaque valeur sur une ligne avec le déballage.',
        starter: '# Crée le tuple et déballe-le\npersonne = ("Alice", 15, "Lyon")\n# Déballe en 3 variables et affiche\n',
        solution: 'personne = ("Alice", 15, "Lyon")\nprenom, age, ville = personne\nprint(f"Prénom : {prenom}")\nprint(f"Âge : {age} ans")\nprint(f"Ville : {ville}")',
        hint: 'prenom, age, ville = personne — puis utilise chaque variable'
      },
      {
        id: 2,
        title: 'Doublons',
        description: 'À partir de la liste fournie, affiche les mots uniques triés alphabétiquement et le nombre de doublons supprimés.',
        starter: 'mots = ["python", "java", "python", "c", "java", "python", "ruby"]\n# Trouve les mots uniques et le nombre de doublons\n',
        solution: 'mots = ["python", "java", "python", "c", "java", "python", "ruby"]\nuniques = sorted(set(mots))\nprint("Mots uniques :", uniques)\nprint(f"Doublons supprimés : {len(mots) - len(uniques)}")',
        hint: 'set() élimine les doublons, sorted() trie, len() compte'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle est la différence principale entre un tuple et une liste ?',
        options: ['Le tuple est plus rapide', 'Le tuple est immuable (non modifiable)', 'Le tuple peut contenir plus d\'éléments', 'Le tuple n\'a pas d\'index'],
        answer: 1,
        explanation: 'Un tuple est immuable : on ne peut pas ajouter, supprimer ou modifier ses éléments après création.'
      },
      {
        id: 2,
        question: 'Que vaut {1, 2, 2, 3, 3, 3} ?',
        options: ['{1, 2, 2, 3, 3, 3}', '{1, 2, 3}', '[1, 2, 3]', '6'],
        answer: 1,
        explanation: 'Un set élimine automatiquement les doublons. Le résultat est {1, 2, 3}.'
      },
      {
        id: 3,
        question: 'Que fait a, b = b, a ?',
        options: ['Génère une erreur', 'Copie b dans a', 'Échange les valeurs de a et b', 'Crée un tuple (b, a)'],
        answer: 2,
        explanation: 'C\'est le swap élégant de Python : les valeurs de a et b sont échangées en une seule ligne.'
      }
    ]
  },

  // ─── NIVEAU 3 ────────────────────────────────────────────────────────────────

  {
    id: 15,
    emoji: '🏛️',
    title: 'Classes & POO',
    level: 3,
    description: 'Crée tes propres types d\'objets avec la POO !',
    color: '#f97316',
    lesson: {
      title: 'Introduction à la Programmation Orientée Objet',
      content: `
        <h2>Pourquoi la Programmation Orientée Objet ?</h2>
        <p>Imagine que tu dois gérer un jeu avec 20 personnages, chacun avec un nom, des points de vie, une arme, des compétences... Avec ce qu'on a vu jusqu'ici, tu aurais 20 séries de variables : <code>nom1, pv1, arme1, nom2, pv2, arme2...</code> C'est ingérable !</p>
        <p>La <strong>Programmation Orientée Objet (POO)</strong> résout ce problème en regroupant des données (attributs) ET des comportements (méthodes) dans une seule entité : un <strong>objet</strong>. C'est la façon de programmer utilisée dans presque tous les grands logiciels.</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Analogie avec la cuisine : une <strong>classe</strong> c'est la recette (le plan), un <strong>objet</strong> c'est le gâteau fabriqué à partir de cette recette. Avec une recette, tu peux faire autant de gâteaux (objets) que tu veux, chacun différent !</div>

        <h2>Définir une classe</h2>
        <p>Une classe se définit avec le mot-clé <code>class</code>. Par convention, les noms de classes commencent par une majuscule :</p>
        <pre><code class="language-python">class Eleve:
    """Représente un élève avec ses informations."""

    def __init__(self, prenom, age):
        # self.prenom et self.age sont des ATTRIBUTS d'instance
        self.prenom = prenom
        self.age = age
        self.notes = []     # Liste vide par défaut pour chaque élève

    def se_presenter(self):
        print(f"Je m'appelle {self.prenom}, j'ai {self.age} ans.")

    def ajouter_note(self, note):
        self.notes.append(note)

    def calculer_moyenne(self):
        if not self.notes:
            return 0
        return sum(self.notes) / len(self.notes)

# Créer des INSTANCES (objets) à partir de la classe
e1 = Eleve("Alice", 15)
e2 = Eleve("Bob", 14)

# Chaque objet est INDÉPENDANT
e1.se_presenter()   # Je m'appelle Alice, j'ai 15 ans.
e2.se_presenter()   # Je m'appelle Bob, j'ai 14 ans.

e1.ajouter_note(15)
e1.ajouter_note(18)
e2.ajouter_note(12)

print(f"Moyenne Alice : {e1.calculer_moyenne():.1f}")  # 16.5
print(f"Moyenne Bob   : {e2.calculer_moyenne():.1f}")  # 12.0
print(f"Notes Alice   : {e1.notes}")   # [15, 18]
print(f"Notes Bob     : {e2.notes}")   # [12]  (liste différente !)</code></pre>

        <h2>Le rôle de __init__ et self</h2>
        <p>Ces deux éléments sont au cœur de la POO en Python :</p>
        <ul>
          <li><strong><code>__init__</code></strong> est le <em>constructeur</em> — cette méthode spéciale est appelée <em>automatiquement</em> quand tu crées un objet. C'est là qu'on initialise les attributs.</li>
          <li><strong><code>self</code></strong> représente l'objet lui-même. C'est obligatoire en premier paramètre de chaque méthode. Quand tu écris <code>self.prenom</code>, tu accèdes à <em>l'attribut prenom de cet objet précis</em>.</li>
        </ul>
        <pre><code class="language-python">class Voiture:
    def __init__(self, marque, modele, annee):
        self.marque = marque    # Attribut
        self.modele = modele    # Attribut
        self.annee = annee      # Attribut
        self.km = 0             # Attribut avec valeur par défaut
        self.allumee = False    # État de la voiture

    def allumer(self):
        if not self.allumee:
            self.allumee = True
            print(f"Vroom ! {self.marque} {self.modele} démarrée.")
        else:
            print("La voiture est déjà allumée !")

    def rouler(self, kilometres):
        if self.allumee:
            self.km += kilometres
            print(f"Tu as roulé {kilometres} km. Total : {self.km} km.")
        else:
            print("Allume d'abord la voiture !")

    def __str__(self):
        return f"{self.marque} {self.modele} ({self.annee}) — {self.km} km"

ma_voiture = Voiture("Renault", "Clio", 2020)
ma_voiture.allumer()        # Vroom ! Renault Clio démarrée.
ma_voiture.rouler(150)      # Tu as roulé 150 km. Total : 150 km.
ma_voiture.rouler(50)       # Tu as roulé 50 km. Total : 200 km.
print(ma_voiture)           # Renault Clio (2020) — 200 km</code></pre>

        <h2>Attributs de classe vs. attributs d'instance</h2>
        <p>Les attributs peuvent appartenir à la classe entière (partagés par tous les objets) ou à chaque instance individuellement :</p>
        <pre><code class="language-python">class Eleve:
    # Attribut de CLASSE (partagé par tous les élèves)
    etablissement = "Collège Victor Hugo"
    nombre_eleves = 0

    def __init__(self, prenom):
        # Attribut d'INSTANCE (propre à cet objet)
        self.prenom = prenom
        Eleve.nombre_eleves += 1   # Incrémente le compteur global

e1 = Eleve("Alice")
e2 = Eleve("Bob")
e3 = Eleve("Chloé")

print(e1.etablissement)        # Collège Victor Hugo (attribut de classe)
print(Eleve.nombre_eleves)     # 3 (3 élèves créés)
print(e1.prenom)               # Alice (attribut d'instance)
print(e2.prenom)               # Bob   (attribut d'instance différent)</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — N'utilise pas une liste ou un dict mutable comme valeur par défaut dans <code>__init__</code> de cette façon : <code>def __init__(self, notes=[])</code>. Cette liste serait <em>partagée</em> entre tous les objets ! Écris toujours <code>self.notes = []</code> à l'intérieur de <code>__init__</code>.</div>

        <h2>Encapsulation — protéger les données</h2>
        <p>En POO, on essaie de cacher les détails internes d'un objet. Par convention en Python, un attribut préfixé par <code>_</code> est "privé" (ne devrait pas être accédé directement depuis l'extérieur) :</p>
        <pre><code class="language-python">class CompteBancaire:
    def __init__(self, titulaire, solde_initial=0):
        self.titulaire = titulaire
        self._solde = solde_initial  # "privé" par convention

    def deposer(self, montant):
        if montant <= 0:
            raise ValueError("Le montant doit être positif")
        self._solde += montant
        print(f"Dépôt de {montant}€. Nouveau solde : {self._solde}€")

    def retirer(self, montant):
        if montant > self._solde:
            print("Fonds insuffisants !")
        else:
            self._solde -= montant
            print(f"Retrait de {montant}€. Nouveau solde : {self._solde}€")

    def consulter_solde(self):
        print(f"Solde de {self.titulaire} : {self._solde}€")

compte = CompteBancaire("Alice", 100)
compte.deposer(50)           # Dépôt de 50€. Nouveau solde : 150€
compte.retirer(30)           # Retrait de 30€. Nouveau solde : 120€
compte.retirer(200)          # Fonds insuffisants !
compte.consulter_solde()     # Solde de Alice : 120€</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — La POO organise le code autour de concepts du monde réel. Python, les jeux vidéo, les sites web, les apps mobiles — tout est construit avec des objets. Maîtriser les classes, c'est apprendre à penser comme un développeur professionnel !</div>
      `
    },
    interactiveCode: `class Animal:
    def __init__(self, nom, espece):
        self.nom = nom
        self.espece = espece
        self.faim = 50  # 0 = rassasié, 100 = affamé

    def manger(self):
        self.faim = max(0, self.faim - 20)
        print(f"{self.nom} mange. Faim : {self.faim}%")

    def decrire(self):
        print(f"{self.nom} est un(e) {self.espece} (faim: {self.faim}%)")

chat = Animal("Mimi", "chat")
chien = Animal("Rex", "chien")

chat.decrire()
chien.decrire()
chat.manger()
chat.manger()
chat.decrire()`,
    exercises: [
      {
        id: 1,
        title: 'Classe Rectangle',
        description: 'Crée une classe <code>Rectangle</code> avec les attributs <code>longueur</code> et <code>largeur</code>, et deux méthodes : <code>aire()</code> et <code>perimetre()</code> qui retournent les valeurs.',
        starter: '# Crée la classe Rectangle\n\n# Test\nr = Rectangle(5, 3)\nprint(r.aire())       # 15\nprint(r.perimetre())  # 16\n',
        solution: 'class Rectangle:\n    def __init__(self, longueur, largeur):\n        self.longueur = longueur\n        self.largeur = largeur\n\n    def aire(self):\n        return self.longueur * self.largeur\n\n    def perimetre(self):\n        return 2 * (self.longueur + self.largeur)\n\nr = Rectangle(5, 3)\nprint(r.aire())\nprint(r.perimetre())',
        hint: 'def __init__(self, longueur, largeur): puis self.longueur = longueur ...'
      },
      {
        id: 2,
        title: 'Classe Compte bancaire',
        description: 'Crée une classe <code>Compte</code> avec un <code>solde</code> initial. Ajoute les méthodes <code>deposer(montant)</code>, <code>retirer(montant)</code> (sans aller sous 0) et <code>afficher_solde()</code>.',
        starter: '# Crée la classe Compte\n\nc = Compte(100)\nc.deposer(50)\nc.retirer(30)\nc.afficher_solde()  # Solde : 120\nc.retirer(200)       # Fonds insuffisants\n',
        solution: 'class Compte:\n    def __init__(self, solde_initial):\n        self.solde = solde_initial\n\n    def deposer(self, montant):\n        self.solde += montant\n\n    def retirer(self, montant):\n        if montant > self.solde:\n            print("Fonds insuffisants")\n        else:\n            self.solde -= montant\n\n    def afficher_solde(self):\n        print(f"Solde : {self.solde}")\n\nc = Compte(100)\nc.deposer(50)\nc.retirer(30)\nc.afficher_solde()\nc.retirer(200)',
        hint: 'retirer() doit vérifier if montant > self.solde avant de soustraire'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Que représente self dans une classe Python ?',
        options: ['Le nom de la classe', 'L\'instance courante de l\'objet', 'Un paramètre obligatoire sans signification', 'La classe parente'],
        answer: 1,
        explanation: 'self désigne l\'instance (l\'objet) sur laquelle la méthode est appelée. Il donne accès aux attributs et méthodes de cet objet.'
      },
      {
        id: 2,
        question: 'Quel est le rôle de __init__ ?',
        options: ['Détruire l\'objet', 'Appeler la classe parente', 'Initialiser l\'objet à sa création', 'Définir les méthodes'],
        answer: 2,
        explanation: '__init__ est le constructeur : il est appelé automatiquement quand on crée un objet avec MaClasse().'
      },
      {
        id: 3,
        question: 'Comment accède-t-on à l\'attribut "nom" d\'un objet "p" ?',
        options: ['nom(p)', 'p->nom', 'p.nom', 'get(p, nom)'],
        answer: 2,
        explanation: 'On accède aux attributs d\'un objet avec la notation pointée : objet.attribut.'
      }
    ]
  },
  {
    id: 16,
    emoji: '👑',
    title: 'Héritage',
    level: 3,
    description: 'Réutilise et spécialise tes classes !',
    color: '#eab308',
    lesson: {
      title: 'Héritage et polymorphisme',
      content: `
        <h2>Pourquoi l'héritage ?</h2>
        <p>Imagine que tu codes un jeu avec des <code>Guerrier</code>, des <code>Mage</code> et des <code>Archer</code>. Tous ont un nom, des points de vie, et peuvent attaquer. Si tu crées trois classes séparées, tu vas copier-coller beaucoup de code commun. Et si tu dois corriger un bug dans "attaquer", tu devras le corriger trois fois !</p>
        <p>L'<strong>héritage</strong> résout ce problème : tu écris une fois le code commun dans une classe <strong>parent</strong>, puis les classes <strong>enfants</strong> héritent de tout ça et peuvent ajouter ou modifier ce dont elles ont besoin.</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Le principe DRY (Don't Repeat Yourself) est fondamental en programmation. L'héritage est l'un des outils clés pour éviter la répétition. "Un Chien EST un Animal" — c'est la question à se poser pour savoir si l'héritage est approprié !</div>

        <h2>Syntaxe de l'héritage</h2>
        <p>Pour faire hériter une classe, on met la classe parent entre parenthèses :</p>
        <pre><code class="language-python">class Animal:           # Classe PARENT (ou base, ou superclasse)
    def __init__(self, nom, espece):
        self.nom = nom
        self.espece = espece
        self.pv = 100   # Points de vie

    def respirer(self):
        print(f"{self.nom} respire.")

    def decrire(self):
        print(f"{self.nom} est un(e) {self.espece} ({self.pv} PV)")

class Chien(Animal):    # Chien HÉRITE d'Animal
    def aboyer(self):   # Méthode PROPRE à Chien
        print(f"{self.nom} dit : Woof !")

class Chat(Animal):     # Chat HÉRITE d'Animal
    def ronronner(self): # Méthode PROPRE à Chat
        print(f"{self.nom} ronronne...")

# Utilisation
rex = Chien("Rex", "chien")
mimi = Chat("Mimi", "chat")

rex.respirer()    # Méthode héritée d'Animal ✓
rex.aboyer()      # Méthode propre à Chien ✓
mimi.decrire()    # Méthode héritée d'Animal ✓
mimi.ronronner()  # Méthode propre à Chat ✓

# Un Chien EST un Animal
print(isinstance(rex, Chien))   # True
print(isinstance(rex, Animal))  # True !</code></pre>

        <h2>super() — appeler le constructeur du parent</h2>
        <p>Quand la classe enfant a son propre <code>__init__</code>, elle doit appeler celui du parent avec <code>super()</code> pour ne pas perdre l'initialisation du parent :</p>
        <pre><code class="language-python">class Animal:
    def __init__(self, nom, espece):
        self.nom = nom
        self.espece = espece
        self.pv = 100

class Chien(Animal):
    def __init__(self, nom, race):
        # Appelle Animal.__init__ avec les bons arguments
        super().__init__(nom, "chien")   # ← CRUCIAL !
        self.race = race                  # Attribut supplémentaire

    def decrire(self):
        # On peut aussi appeler les méthodes du parent avec super()
        print(f"{self.nom} ({self.race}) — {self.pv} PV")

rex = Chien("Rex", "Berger Allemand")
rex.decrire()    # Rex (Berger Allemand) — 100 PV
print(rex.nom)   # Rex      (attribut du parent)
print(rex.race)  # Berger Allemand (attribut de l'enfant)</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Si ta classe enfant définit <code>__init__</code> mais n'appelle pas <code>super().__init__(...)</code>, les attributs du parent ne seront pas initialisés ! Tu auras des <code>AttributeError</code> en essayant d'accéder à <code>self.nom</code>, <code>self.pv</code>, etc.</div>

        <h2>Surcharger (override) des méthodes</h2>
        <p>Un enfant peut <em>remplacer</em> une méthode du parent par sa propre version. C'est la <strong>surcharge</strong> (override) :</p>
        <pre><code class="language-python">class Animal:
    def parler(self):
        print("...")    # Son générique

class Chien(Animal):
    def parler(self):   # REMPLACE la version du parent
        print("Woof !")

class Chat(Animal):
    def parler(self):   # REMPLACE aussi
        print("Miaou !")

class Vache(Animal):
    pass                # N'override pas → utilise la version parent

# Test
animaux = [Chien("Rex", "chien"), Chat("Mimi", "chat"), Vache("Marguerite", "vache")]
for a in animaux:
    print(f"{a.nom} : ", end="")
    a.parler()
# Rex : Woof !
# Mimi : Miaou !
# Marguerite : ...   (version parent)</code></pre>

        <h2>Le polymorphisme — la puissance réelle</h2>
        <p>Le <strong>polymorphisme</strong> signifie qu'on peut appeler la même méthode sur des objets différents, et chacun réagit à sa façon. C'est ce qui rend le code flexible et extensible :</p>
        <pre><code class="language-python">class Personnage:
    def __init__(self, nom, pv):
        self.nom = nom
        self.pv = pv

    def attaquer(self, cible):
        degats = 10    # Attaque de base
        cible.pv -= degats
        print(f"{self.nom} attaque {cible.nom} → {degats} dégâts")

class Guerrier(Personnage):
    def attaquer(self, cible):
        degats = 25   # Plus fort !
        cible.pv -= degats
        print(f"⚔️  {self.nom} frappe {cible.nom} → {degats} dégâts")

class Mage(Personnage):
    def attaquer(self, cible):
        degats = 40   # Encore plus fort !
        cible.pv -= degats
        print(f"🔮 {self.nom} lance un sort sur {cible.nom} → {degats} dégâts")

# On peut traiter tous les personnages de la même façon
equipe = [Guerrier("Arthur", 100), Mage("Merlin", 80)]
boss = Personnage("Dragon", 500)

for perso in equipe:
    perso.attaquer(boss)   # Chacun attaque à sa façon

print(f"PV du boss : {boss.pv}")  # 500 - 25 - 40 = 435</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Tu peux vérifier la hiérarchie d'héritage avec <code>isinstance(obj, Classe)</code> et <code>issubclass(ClasseEnfant, ClasseParent)</code>. En Python, toutes les classes héritent en dernier de <code>object</code>, la classe mère de tout !</div>

        <h2>Héritage multiple</h2>
        <p>Python permet à une classe d'hériter de <em>plusieurs</em> parents en même temps :</p>
        <pre><code class="language-python">class Volant:
    def voler(self):
        print(f"{self.nom} vole !")

class Nageur:
    def nager(self):
        print(f"{self.nom} nage !")

class Canard(Animal, Volant, Nageur):
    def __init__(self, nom):
        Animal.__init__(self, nom, "canard")
    def coin_coin(self):
        print(f"{self.nom} : Coin coin !")

donald = Canard("Donald")
donald.voler()      # Donald vole !
donald.nager()      # Donald nage !
donald.coin_coin()  # Donald : Coin coin !
donald.respirer()   # Méthode d'Animal</code></pre>
      `
    },
    interactiveCode: `class Vehicule:
    def __init__(self, marque, vitesse_max):
        self.marque = marque
        self.vitesse_max = vitesse_max

    def decrire(self):
        print(f"{self.marque} — vitesse max : {self.vitesse_max} km/h")

    def rouler(self):
        print(f"{self.marque} roule !")

class Voiture(Vehicule):
    def __init__(self, marque, vitesse_max, portes):
        super().__init__(marque, vitesse_max)
        self.portes = portes

    def decrire(self):
        super().decrire()
        print(f"  {self.portes} portes")

class Moto(Vehicule):
    def rouler(self):
        print(f"{self.marque} vroooom !")

v = Voiture("Peugeot", 180, 5)
m = Moto("Yamaha", 220)
v.decrire()
m.decrire()
v.rouler()
m.rouler()`,
    exercises: [
      {
        id: 1,
        title: 'Formes géométriques',
        description: 'Crée une classe <code>Forme</code> avec un attribut <code>couleur</code> et une méthode <code>aire()</code> qui retourne 0. Crée deux sous-classes : <code>Cercle(rayon)</code> et <code>Carre(cote)</code> qui redéfinissent <code>aire()</code>.',
        starter: 'import math\n# Crée les classes Forme, Cercle et Carre\n\nc = Cercle("rouge", 5)\nq = Carre("bleu", 4)\nprint(f"Cercle rouge : {c.aire():.2f}")   # 78.54\nprint(f"Carré bleu : {q.aire()}")          # 16\n',
        solution: 'import math\n\nclass Forme:\n    def __init__(self, couleur):\n        self.couleur = couleur\n    def aire(self):\n        return 0\n\nclass Cercle(Forme):\n    def __init__(self, couleur, rayon):\n        super().__init__(couleur)\n        self.rayon = rayon\n    def aire(self):\n        return math.pi * self.rayon ** 2\n\nclass Carre(Forme):\n    def __init__(self, couleur, cote):\n        super().__init__(couleur)\n        self.cote = cote\n    def aire(self):\n        return self.cote ** 2\n\nc = Cercle("rouge", 5)\nq = Carre("bleu", 4)\nprint(f"Cercle rouge : {c.aire():.2f}")\nprint(f"Carré bleu : {q.aire()}")',
        hint: 'class Cercle(Forme): — puis super().__init__(couleur) dans __init__, et redéfinis aire()'
      },
      {
        id: 2,
        title: 'isinstance',
        description: 'Crée une liste avec un objet Voiture et un objet Moto (des classes ci-dessus). Boucle dessus et affiche pour chaque objet s\'il est une instance de Voiture.',
        starter: 'class Vehicule:\n    def __init__(self, marque):\n        self.marque = marque\n\nclass Voiture(Vehicule):\n    pass\n\nclass Moto(Vehicule):\n    pass\n\nvehicules = [Voiture("Peugeot"), Moto("Yamaha"), Voiture("Renault")]\n# Affiche le type de chaque véhicule\n',
        solution: 'class Vehicule:\n    def __init__(self, marque):\n        self.marque = marque\n\nclass Voiture(Vehicule):\n    pass\n\nclass Moto(Vehicule):\n    pass\n\nvehicules = [Voiture("Peugeot"), Moto("Yamaha"), Voiture("Renault")]\nfor v in vehicules:\n    if isinstance(v, Voiture):\n        print(f"{v.marque} → Voiture")\n    else:\n        print(f"{v.marque} → Moto")',
        hint: 'isinstance(objet, Classe) retourne True si l\'objet est une instance de la classe'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle syntaxe crée une classe Chien héritant d\'Animal ?',
        options: ['class Chien extends Animal:', 'class Chien(Animal):', 'class Chien -> Animal:', 'class Chien inherits Animal:'],
        answer: 1,
        explanation: 'En Python, l\'héritage s\'écrit en mettant la classe parente entre parenthèses après le nom de la classe enfant.'
      },
      {
        id: 2,
        question: 'Que fait super().__init__() dans une sous-classe ?',
        options: ['Crée un nouvel objet', 'Appelle le constructeur de la classe parente', 'Détruit l\'objet parent', 'Redéfinit la méthode init'],
        answer: 1,
        explanation: 'super() donne accès à la classe parente. super().__init__() appelle son constructeur, utile pour initialiser les attributs hérités.'
      },
      {
        id: 3,
        question: 'Qu\'est-ce que le polymorphisme ?',
        options: ['Avoir plusieurs classes', 'Plusieurs objets avec le même nom', 'Redéfinir une méthode dans une sous-classe', 'Importer plusieurs modules'],
        answer: 2,
        explanation: 'Le polymorphisme permet à chaque sous-classe de redéfinir une méthode héritée avec son propre comportement.'
      }
    ]
  },
  {
    id: 17,
    emoji: '📁',
    title: 'Fichiers & JSON',
    level: 3,
    description: 'Lis, écris et stocke des données durablement !',
    color: '#14b8a6',
    lesson: {
      title: 'Lire et écrire des fichiers',
      content: `
        <h2>Pourquoi lire et écrire des fichiers ?</h2>
        <p>Jusqu'ici, toutes tes données disparaissaient à la fin du programme. Les variables ne survivent pas ! Pour conserver des données entre deux exécutions (scores d'un jeu, liste de contacts, configuration...), il faut les écrire dans des <strong>fichiers</strong>.</p>
        <p>Python rend la gestion des fichiers simple et sécurisée. Et le format <strong>JSON</strong> est devenu le standard mondial pour échanger des données structurées — entre Python et une base de données, entre un serveur et un navigateur web, etc.</p>

        <h2>Ouvrir un fichier avec with open()</h2>
        <p>La façon recommandée d'ouvrir des fichiers en Python est avec <code>with open(...)</code>. Ce gestionnaire de contexte garantit que le fichier est <em>toujours fermé</em> après utilisation, même si une erreur survient :</p>
        <pre><code class="language-python"># Syntaxe : with open(chemin, mode, encoding) as variable:
# Modes :
#   "r"  → lecture seule (défaut)
#   "w"  → écriture (écrase le fichier si existant)
#   "a"  → ajout à la fin (ne supprime pas)
#   "x"  → création (erreur si fichier déjà existant)
#   "r+" → lecture et écriture

# Lire tout le contenu d'un coup
with open("notes.txt", "r", encoding="utf-8") as f:
    contenu = f.read()        # Une seule grande chaîne
    print(contenu)

# Lire ligne par ligne (économise la mémoire pour les grands fichiers)
with open("notes.txt", "r", encoding="utf-8") as f:
    for ligne in f:
        print(ligne.strip())  # strip() enlève le \n en fin de ligne

# Lire toutes les lignes dans une liste
with open("notes.txt", "r", encoding="utf-8") as f:
    lignes = f.readlines()    # ['ligne1\n', 'ligne2\n', ...]
    print(len(lignes), "lignes")</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Toujours préciser <code>encoding="utf-8"</code> pour les fichiers texte ! Sans ça, Python utilise l'encodage du système (qui varie selon l'OS et la configuration). Les accents et caractères spéciaux peuvent s'afficher bizarrement.</div>

        <h2>Écrire dans un fichier</h2>
        <pre><code class="language-python"># Créer ou écraser un fichier
with open("scores.txt", "w", encoding="utf-8") as f:
    f.write("Alice : 150 points\n")
    f.write("Bob   : 120 points\n")
    f.write("Chloé : 180 points\n")

# Ajouter sans effacer le contenu existant
with open("scores.txt", "a", encoding="utf-8") as f:
    f.write("David : 95 points\n")

# Écrire plusieurs lignes d'un coup avec writelines()
nouvelles_lignes = ["Emma : 160\n", "Félix : 140\n"]
with open("scores.txt", "a", encoding="utf-8") as f:
    f.writelines(nouvelles_lignes)</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Le mode <code>"w"</code> efface tout le contenu existant avant d'écrire ! Si tu veux conserver ce qui est déjà dans le fichier, utilise <code>"a"</code> (append). Vérifie toujours le mode avant d'écrire !</div>

        <h2>Gestion des erreurs avec les fichiers</h2>
        <pre><code class="language-python">def lire_fichier(nom):
    try:
        with open(nom, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        print(f"Fichier '{nom}' introuvable !")
        return ""
    except PermissionError:
        print(f"Pas de droits pour lire '{nom}' !")
        return ""

contenu = lire_fichier("notes.txt")
if contenu:
    print(f"Fichier lu : {len(contenu)} caractères")</code></pre>

        <h2>JSON — le format universel des données structurées</h2>
        <p>JSON (JavaScript Object Notation) est un format texte qui ressemble aux dictionnaires Python. Il est utilisé partout : APIs web, fichiers de configuration, stockage de données...</p>
        <pre><code class="language-python">import json

# Python → JSON (sérialisation)
eleves = [
    {"nom": "Alice", "note": 15, "admis": True},
    {"nom": "Bob",   "note": 12, "admis": True},
    {"nom": "Eve",   "note": 8,  "admis": False},
]

# Écrire dans un fichier JSON
with open("eleves.json", "w", encoding="utf-8") as f:
    json.dump(eleves, f, indent=2, ensure_ascii=False)

# Lire depuis un fichier JSON
with open("eleves.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(data[0]["nom"])   # Alice
print(type(data))       # list</code></pre>

        <h2>JSON en mémoire (sans fichier)</h2>
        <pre><code class="language-python">import json

# Python → chaîne JSON (pour l'envoyer sur le réseau, etc.)
profil = {"nom": "Alice", "age": 15, "langages": ["Python", "HTML"]}
json_texte = json.dumps(profil, indent=2, ensure_ascii=False)
print(json_texte)
# {
#   "nom": "Alice",
#   "age": 15,
#   "langages": ["Python", "HTML"]
# }

# Chaîne JSON → Python (données reçues d'une API par exemple)
json_recu = '{"titre": "Mon livre", "pages": 250, "dispo": true}'
livre = json.loads(json_recu)
print(livre["titre"])  # Mon livre
print(type(livre))     # dict</code></pre>

        <h2>Correspondances JSON ↔ Python</h2>
        <pre><code class="language-python"># Python          ←→  JSON
# dict            ←→  objet {}
# list            ←→  tableau []
# str             ←→  string ""
# int / float     ←→  number
# True / False    ←→  true / false
# None            ←→  null

import json

data_python = {
    "texte": "Bonjour",
    "liste": [1, 2, 3],
    "actif": True,
    "rien": None
}
print(json.dumps(data_python))
# {"texte": "Bonjour", "liste": [1, 2, 3], "actif": true, "rien": null}</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Dans Pyodide (ce navigateur), les fichiers sont simulés en mémoire. Utilise <code>json.dumps()</code> et <code>json.loads()</code> pour pratiquer la sérialisation sans fichier. Dans tes vrais projets, tu utiliseras <code>json.dump()</code> et <code>json.load()</code> avec de vrais fichiers.</div>
      `
    },
    interactiveCode: `import json

# Simuler la sauvegarde d'élèves en JSON
eleves = [
    {"nom": "Alice", "note": 15, "classe": "3ème A"},
    {"nom": "Bob",   "note": 12, "classe": "3ème B"},
    {"nom": "Chloé", "note": 18, "classe": "3ème A"},
]

# Sérialiser en JSON
json_str = json.dumps(eleves, indent=2, ensure_ascii=False)
print("=== JSON généré ===")
print(json_str)

# Désérialiser
data = json.loads(json_str)
print("\\n=== Notes ===")
for e in data:
    print(f"  {e['nom']} : {e['note']}/20")

moyenne = sum(e['note'] for e in data) / len(data)
print(f"\\nMoyenne de classe : {moyenne:.1f}/20")`,
    exercises: [
      {
        id: 1,
        title: 'Sérialiser un inventaire',
        description: 'Crée un dictionnaire <code>inventaire</code> (articles → quantité), convertis-le en JSON avec <code>json.dumps</code> et affiche le résultat indenté.',
        starter: 'import json\n\ninventaire = {"pommes": 12, "bananes": 5, "cerises": 30}\n# Convertis en JSON (indent=2) et affiche\n',
        solution: 'import json\n\ninventaire = {"pommes": 12, "bananes": 5, "cerises": 30}\njson_str = json.dumps(inventaire, indent=2)\nprint(json_str)',
        hint: 'json.dumps(dictionnaire, indent=2) convertit et formate le JSON'
      },
      {
        id: 2,
        title: 'Filtrer depuis JSON',
        description: 'Parse la chaîne JSON fournie, puis affiche uniquement les élèves avec une note >= 14.',
        starter: 'import json\n\ndata = \'[{"nom":"Alice","note":15},{"nom":"Bob","note":11},{"nom":"Chloe","note":17},{"nom":"David","note":9}]\'\n# Parse le JSON et affiche les élèves avec note >= 14\n',
        solution: 'import json\n\ndata = \'[{"nom":"Alice","note":15},{"nom":"Bob","note":11},{"nom":"Chloe","note":17},{"nom":"David","note":9}]\'\neleves = json.loads(data)\nbons = [e for e in eleves if e["note"] >= 14]\nfor e in bons:\n    print(f"{e[\'nom\']} : {e[\'note\']}/20")',
        hint: 'json.loads(data) pour parser, puis une compréhension de liste avec if note >= 14'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quel mode ouvre un fichier pour ajouter du contenu sans l\'effacer ?',
        options: ['"r"', '"w"', '"a"', '"x"'],
        answer: 2,
        explanation: '"a" (append) ouvre le fichier en mode ajout. "w" efface et recrée le fichier. "r" est lecture seule.'
      },
      {
        id: 2,
        question: 'Que fait json.loads(texte) ?',
        options: ['Écrit du JSON dans un fichier', 'Lit un fichier JSON', 'Convertit une chaîne JSON en objet Python', 'Valide le JSON'],
        answer: 2,
        explanation: 'json.loads() (load string) convertit une chaîne JSON en liste/dictionnaire Python. json.load() lit depuis un fichier.'
      },
      {
        id: 3,
        question: 'Pourquoi utiliser "with open(...) as f:" ?',
        options: ['C\'est obligatoire en Python', 'Le fichier est fermé automatiquement même en cas d\'erreur', 'C\'est plus rapide', 'Pour lire plusieurs fichiers à la fois'],
        answer: 1,
        explanation: '"with" garantit que le fichier est toujours fermé correctement, même si une exception se produit.'
      }
    ]
  },
  {
    id: 18,
    emoji: '🌀',
    title: 'Récursion',
    level: 3,
    description: 'Une fonction qui s\'appelle elle-même !',
    color: '#a855f7',
    lesson: {
      title: 'Fonctions récursives',
      content: `
        <h2>Une fonction qui s'appelle elle-même ?</h2>
        <p>La <strong>récursion</strong>, c'est l'idée qu'une fonction peut s'appeler elle-même pour résoudre un problème. Ça semble bizarre au premier abord, mais certains problèmes se définissent naturellement de façon récursive.</p>
        <p>Exemple : la factorielle. 5! = 5 × 4! et 4! = 4 × 3! et 3! = 3 × 2! ... jusqu'à 1! = 1. Le problème se répète avec une valeur plus petite — c'est la récursion !</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Imagine des poupées russes (Matriochka). Pour ouvrir la dernière, tu dois d'abord ouvrir celle du dessus, et celle du dessus, et encore celle du dessus... jusqu'à la toute petite qui ne s'ouvre pas (cas de base). La récursion fonctionne pareil !</div>

        <h2>La règle d'or : toujours un cas de base</h2>
        <p>Toute fonction récursive doit avoir <em>obligatoirement</em> :</p>
        <ul>
          <li>Un <strong>cas de base</strong> — la condition d'arrêt, qui ne fait pas d'appel récursif</li>
          <li>Un <strong>appel récursif</strong> — qui se rapproche du cas de base à chaque étape</li>
        </ul>
        <pre><code class="language-python">def countdown(n):
    if n <= 0:           # CAS DE BASE : on s'arrête
        print("Décollage !")
    else:
        print(n)
        countdown(n - 1)  # APPEL RÉCURSIF : on se rapproche de 0

countdown(5)
# 5
# 4
# 3
# 2
# 1
# Décollage !</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Sans cas de base (ou si on ne s'en rapproche pas), la récursion tourne à l'infini et Python finit par lancer une <code>RecursionError: maximum recursion depth exceeded</code>. Python limite la récursion à ~1000 niveaux par sécurité.</div>

        <h2>La factorielle — exemple classique</h2>
        <pre><code class="language-python">def factorielle(n):
    # Cas de base : 0! et 1! valent 1
    if n == 0 or n == 1:
        return 1
    # Appel récursif : n! = n × (n-1)!
    return n * factorielle(n - 1)

# Traçage de l'exécution pour n=4 :
# factorielle(4)
#   = 4 * factorielle(3)
#         = 3 * factorielle(2)
#               = 2 * factorielle(1)
#                     = 1  ← cas de base !
#               = 2 * 1 = 2
#         = 3 * 2 = 6
#   = 4 * 6 = 24

print(factorielle(0))   # 1
print(factorielle(1))   # 1
print(factorielle(5))   # 120
print(factorielle(10))  # 3628800</code></pre>

        <h2>La suite de Fibonacci</h2>
        <p>La suite de Fibonacci se définit naturellement de façon récursive : chaque nombre est la somme des deux précédents (1, 1, 2, 3, 5, 8, 13, 21...) :</p>
        <pre><code class="language-python">def fibonacci(n):
    # Cas de base : F(0) = 0, F(1) = 1
    if n <= 1:
        return n
    # Récursion : F(n) = F(n-1) + F(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
# 0 1 1 2 3 5 8 13 21 34</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — La version récursive de Fibonacci est élégante mais <em>très lente</em> pour de grandes valeurs. <code>fibonacci(35)</code> fait ~29 millions d'appels ! On peut l'accélérer avec la mémoïsation (<code>@functools.lru_cache</code>) ou en utilisant une boucle simple.</div>

        <h2>Récursion vs. boucle — quand utiliser quoi ?</h2>
        <pre><code class="language-python"># Fibonacci itératif (beaucoup plus rapide !)
def fibonacci_iter(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b

print(fibonacci_iter(100))   # Instantané !

# Mémoïsation (cache) pour la version récursive
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_cache(n):
    if n <= 1:
        return n
    return fibonacci_cache(n - 1) + fibonacci_cache(n - 2)

print(fibonacci_cache(100))  # Instantané aussi !</code></pre>

        <h2>Cas d'usage réels de la récursion</h2>
        <p>La récursion brille vraiment pour parcourir des structures imbriquées :</p>
        <pre><code class="language-python"># Calculer la somme d'une liste imbriquée (liste de listes)
def somme_profonde(structure):
    if isinstance(structure, (int, float)):
        return structure        # Cas de base : c'est un nombre
    total = 0
    for element in structure:
        total += somme_profonde(element)  # Récursion sur sous-listes
    return total

print(somme_profonde([1, [2, 3], [4, [5, 6]]]))  # 21
print(somme_profonde([[1, 2], [3, [4, [5]]]]))   # 15

# Afficher une arborescence de dossiers
def afficher_arbre(structure, niveau=0):
    for cle, valeur in structure.items():
        print("  " * niveau + "📁 " + cle)
        if isinstance(valeur, dict):
            afficher_arbre(valeur, niveau + 1)  # Récursion sur sous-dossier

arbre = {
    "Documents": {
        "Cours": {"Python.txt": {}, "Maths.txt": {}},
        "Projets": {"MonApp": {}}
    },
    "Images": {"Vacances": {}}
}
afficher_arbre(arbre)</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — La récursion est le choix naturel pour : les arbres (arborescences de fichiers, structures XML/HTML, organigrammes), les algorithmes "diviser pour régner" (tri fusion, recherche dichotomique), et les puzzles mathématiques. Pour les suites simples, une boucle est souvent préférable.</div>
      `
    },
    interactiveCode: `def factorielle(n):
    if n <= 1:
        return 1
    return n * factorielle(n - 1)

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print("Factorielles :")
for i in range(8):
    print(f"  {i}! = {factorielle(i)}")

print("\\nSuite de Fibonacci :")
fib = [fibonacci(i) for i in range(10)]
print("  " + " ".join(str(n) for n in fib))`,
    exercises: [
      {
        id: 1,
        title: 'Puissance récursive',
        description: 'Écris une fonction récursive <code>puissance(base, exp)</code> qui calcule base^exp sans utiliser **. (base^0 = 1, base^n = base × base^(n-1))',
        starter: '# Écris la fonction récursive puissance(base, exp)\n\nprint(puissance(2, 0))   # 1\nprint(puissance(2, 8))   # 256\nprint(puissance(3, 4))   # 81\n',
        solution: 'def puissance(base, exp):\n    if exp == 0:\n        return 1\n    return base * puissance(base, exp - 1)\n\nprint(puissance(2, 0))\nprint(puissance(2, 8))\nprint(puissance(3, 4))',
        hint: 'Cas de base : exp == 0 → retourne 1. Sinon : base × puissance(base, exp-1)'
      },
      {
        id: 2,
        title: 'Inverser une chaîne',
        description: 'Écris une fonction récursive <code>inverser(s)</code> qui retourne la chaîne inversée. (inverser("") = "", sinon dernier caractère + inverser du reste)',
        starter: '# Écris inverser(s) de façon récursive\n\nprint(inverser("Python"))  # nohtyP\nprint(inverser("abc"))    # cba\n',
        solution: 'def inverser(s):\n    if s == "":\n        return ""\n    return inverser(s[1:]) + s[0]\n\nprint(inverser("Python"))\nprint(inverser("abc"))',
        hint: 'inverser(s) = inverser(s[1:]) + s[0] — le premier caractère va à la fin'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Qu\'est-ce que le cas de base dans une récursion ?',
        options: ['L\'appel récursif', 'La condition d\'arrêt qui évite la boucle infinie', 'Le premier appel de la fonction', 'Les paramètres de la fonction'],
        answer: 1,
        explanation: 'Le cas de base est la condition qui arrête la récursion. Sans lui, la fonction s\'appellerait à l\'infini jusqu\'à un RecursionError.'
      },
      {
        id: 2,
        question: 'Que calcule factorielle(4) si défini récursivement ?',
        options: ['4', '8', '16', '24'],
        answer: 3,
        explanation: '4! = 4 × 3 × 2 × 1 = 24. La récursion déroule : 4 × factorielle(3) = 4 × 6 = 24.'
      },
      {
        id: 3,
        question: 'Que se passe-t-il sans cas de base ?',
        options: ['La fonction retourne 0', 'Python affiche une erreur de syntaxe', 'RecursionError : profondeur max dépassée', 'La fonction ne s\'exécute pas'],
        answer: 2,
        explanation: 'Python limite la profondeur de récursion (env. 1000). Sans cas de base, on atteint cette limite et Python lève un RecursionError.'
      }
    ]
  },
  {
    id: 19,
    emoji: '🔍',
    title: 'Algorithmes',
    level: 3,
    description: 'Recherche et tri : les algos fondamentaux !',
    color: '#06b6d4',
    lesson: {
      title: 'Algorithmes de recherche et de tri',
      content: `
        <h2>Pourquoi les algorithmes ?</h2>
        <p>Un <strong>algorithme</strong>, c'est une suite d'instructions précises pour résoudre un problème. Deux algorithmes peuvent résoudre le même problème, mais avec des efficacités très différentes. Sur 1 million d'éléments, le choix d'algorithme peut faire la différence entre 0,02 secondes et... 11 jours !</p>
        <p>Comprendre les algorithmes de recherche et de tri, c'est comprendre pourquoi Google trouve ta page en millisecondes, ou pourquoi le classement d'un jeu se met à jour instantanément.</p>

        <h2>La complexité algorithmique — mesurer l'efficacité</h2>
        <p>On mesure l'efficacité d'un algorithme avec la notation <strong>O(n)</strong> (Big O), qui indique combien d'opérations il faut en fonction de la taille n des données :</p>
        <ul>
          <li><strong>O(1)</strong> — Temps constant : toujours la même durée (accès à un dict)</li>
          <li><strong>O(log n)</strong> — Logarithmique : divise par 2 à chaque étape (recherche dichotomique)</li>
          <li><strong>O(n)</strong> — Linéaire : proportionnel à la taille (recherche linéaire)</li>
          <li><strong>O(n²)</strong> — Quadratique : très lent sur grandes données (tri à bulles)</li>
        </ul>

        <h2>Recherche linéaire — O(n)</h2>
        <p>La façon la plus simple : on parcourt tout jusqu'à trouver. Fonctionne sur n'importe quelle liste, triée ou non :</p>
        <pre><code class="language-python">def recherche_lineaire(liste, cible):
    for i, val in enumerate(liste):
        if val == cible:
            return i    # On retourne l'index dès qu'on trouve
    return -1           # -1 signifie "pas trouvé"

# Test
nombres = [5, 3, 8, 1, 9, 2, 7, 4, 6]
print(recherche_lineaire(nombres, 9))   # 4 (index de 9)
print(recherche_lineaire(nombres, 10))  # -1 (absent)

# Dans le pire cas : on regarde TOUS les éléments
# Sur une liste de 1 million d'éléments → jusqu'à 1 million comparaisons</code></pre>

        <h2>Recherche dichotomique — O(log n)</h2>
        <p>Sur une liste <strong>triée</strong>, on peut faire beaucoup mieux : on compare avec l'élément du milieu, et on élimine la moitié qui ne peut pas contenir la cible :</p>
        <pre><code class="language-python">def recherche_dicho(liste, cible):
    gauche, droite = 0, len(liste) - 1

    while gauche <= droite:
        milieu = (gauche + droite) // 2    # Indice du milieu

        if liste[milieu] == cible:
            return milieu                  # Trouvé !
        elif liste[milieu] < cible:
            gauche = milieu + 1            # La cible est à droite
        else:
            droite = milieu - 1            # La cible est à gauche

    return -1   # Pas trouvé

triee = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
print(recherche_dicho(triee, 7))    # 3
print(recherche_dicho(triee, 6))    # -1 (absent)
print(recherche_dicho(triee, 19))   # 9 (dernier élément)

# Sur 1 million d'éléments : max 20 comparaisons !  (log₂(1000000) ≈ 20)</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — C'est comme chercher un mot dans un dictionnaire papier ! Tu ouvres au milieu, tu vois si ton mot est avant ou après, tu coupes à nouveau en deux... En 20 coups, tu trouves n'importe quel mot parmi 1 million. Impossible de faire mieux sur une liste triée !</div>

        <h2>Tri à bulles — O(n²) — à connaître mais pas à utiliser</h2>
        <p>Le tri à bulles est le plus simple à comprendre : on compare des paires adjacentes et on les échange si nécessaire, jusqu'à ce que la liste soit triée. Intuitivement, les grands éléments "remontent" vers la fin comme des bulles :</p>
        <pre><code class="language-python">def tri_bulles(liste):
    n = len(liste)
    lst = liste.copy()  # On ne modifie pas la liste originale

    for i in range(n):
        # Après le passage i, les i derniers éléments sont à leur place
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:   # Si désordonné, on échange
                lst[j], lst[j + 1] = lst[j + 1], lst[j]

    return lst

nombres = [64, 34, 25, 12, 22, 11, 90]
print(tri_bulles(nombres))  # [11, 12, 22, 25, 34, 64, 90]

# Complexité : O(n²) → sur 10000 éléments = 100 millions d'opérations !
# À éviter en pratique, mais utile pour comprendre les algorithmes de tri.</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — En pratique, n'utilise <em>jamais</em> le tri à bulles dans un vrai programme ! Python inclut <code>sorted()</code> et <code>.sort()</code> qui utilisent l'algorithme Timsort (O(n log n)), bien plus rapide. Le tri à bulles sert uniquement à comprendre comment les algorithmes de tri fonctionnent.</div>

        <h2>sorted() et sort() — les vrais outils</h2>
        <pre><code class="language-python"># sorted() : retourne une NOUVELLE liste triée (n'affecte pas l'original)
nombres = [5, 2, 8, 1, 9, 3]
tries = sorted(nombres)        # Croissant
print(tries)                   # [1, 2, 3, 5, 8, 9]
print(nombres)                 # [5, 2, 8, 1, 9, 3] ← intact !

# .sort() : trie la liste EN PLACE (modifie l'original)
nombres.sort(reverse=True)     # Décroissant
print(nombres)                 # [9, 8, 5, 3, 2, 1]

# Trier des objets complexes avec key=
eleves = [
    {"nom": "Alice", "note": 15},
    {"nom": "Bob",   "note": 18},
    {"nom": "Chloé", "note": 12},
]

par_note = sorted(eleves, key=lambda e: e["note"])
for e in par_note:
    print(f"  {e['nom']} : {e['note']}")

# Tri multi-critères : d'abord par note décroissante, puis nom alphabétique
multi = sorted(eleves, key=lambda e: (-e["note"], e["nom"]))</code></pre>

        <h2>Algorithmes utiles en pratique</h2>
        <pre><code class="language-python"># Trouver le minimum et maximum sans min()/max()
def trouver_min_max(liste):
    mini = maxi = liste[0]
    for val in liste[1:]:
        if val < mini: mini = val
        if val > maxi: maxi = val
    return mini, maxi

notes = [14, 8, 17, 12, 15, 9]
mini, maxi = trouver_min_max(notes)
print(f"Min : {mini}, Max : {maxi}")  # Min : 8, Max : 17

# Supprimer les doublons en conservant l'ordre
def uniques_ordonnes(liste):
    vus = set()
    resultat = []
    for el in liste:
        if el not in vus:
            vus.add(el)
            resultat.append(el)
    return resultat

mots = ["python", "java", "python", "c", "java", "ruby"]
print(uniques_ordonnes(mots))  # ['python', 'java', 'c', 'ruby']</code></pre>
      `
    },
    interactiveCode: `def recherche_dicho(liste, cible):
    gauche, droite = 0, len(liste) - 1
    etapes = 0
    while gauche <= droite:
        etapes += 1
        milieu = (gauche + droite) // 2
        if liste[milieu] == cible:
            return milieu, etapes
        elif liste[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return -1, etapes

liste = list(range(0, 1000, 2))  # 500 nombres pairs
idx, n = recherche_dicho(liste, 742)
print(f"742 trouvé à l'index {idx} en {n} étapes (sur {len(liste)} éléments)")

# Tri avec key
mots = ["banane", "kiwi", "framboise", "figue", "mangue"]
print("\\nMots triés par longueur :")
for m in sorted(mots, key=len):
    print(f"  {m} ({len(m)} lettres)")`,
    exercises: [
      {
        id: 1,
        title: 'Trouver le minimum',
        description: 'Écris une fonction <code>trouver_min(liste)</code> qui retourne le plus petit élément sans utiliser <code>min()</code>.',
        starter: '# Écris trouver_min sans utiliser min()\n\nnombres = [42, 7, 19, 3, 55, 11]\nprint(trouver_min(nombres))  # 3\n',
        solution: 'def trouver_min(liste):\n    mini = liste[0]\n    for val in liste:\n        if val < mini:\n            mini = val\n    return mini\n\nnombres = [42, 7, 19, 3, 55, 11]\nprint(trouver_min(nombres))',
        hint: 'Commence avec mini = liste[0], puis boucle et mets à jour si tu trouves plus petit'
      },
      {
        id: 2,
        title: 'Classement d\'élèves',
        description: 'Trie la liste d\'élèves par note décroissante et affiche le classement avec le rang.',
        starter: 'eleves = [\n    {"nom": "Alice", "note": 15},\n    {"nom": "Bob", "note": 18},\n    {"nom": "Chloé", "note": 12},\n    {"nom": "David", "note": 16},\n]\n# Trie par note décroissante et affiche le classement\n',
        solution: 'eleves = [\n    {"nom": "Alice", "note": 15},\n    {"nom": "Bob", "note": 18},\n    {"nom": "Chloé", "note": 12},\n    {"nom": "David", "note": 16},\n]\nclasse = sorted(eleves, key=lambda e: e["note"], reverse=True)\nfor rang, e in enumerate(classe, 1):\n    print(f"  {rang}. {e[\'nom\']} — {e[\'note\']}/20")',
        hint: 'sorted(..., key=lambda e: e["note"], reverse=True) — puis enumerate(classe, 1) pour le rang'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle recherche nécessite une liste triée ?',
        options: ['Recherche linéaire', 'Recherche dichotomique', 'Les deux', 'Aucune des deux'],
        answer: 1,
        explanation: 'La recherche dichotomique (binaire) suppose que la liste est triée — elle compare avec l\'élément du milieu pour éliminer la moitié restante.'
      },
      {
        id: 2,
        question: 'Combien d\'étapes max pour chercher dans 1024 éléments avec dichotomie ?',
        options: ['1024', '512', '10', '32'],
        answer: 2,
        explanation: 'log₂(1024) = 10. La dichotomie divise par 2 à chaque étape : 1024 → 512 → 256 → ... → 1. Maximum 10 étapes.'
      },
      {
        id: 3,
        question: 'Que fait sorted(liste, reverse=True) ?',
        options: ['Inverse l\'ordre actuel', 'Trie par ordre décroissant', 'Mélange aléatoirement', 'Trie en ordre croissant'],
        answer: 1,
        explanation: 'reverse=True trie par ordre décroissant (du plus grand au plus petit).'
      }
    ]
  },
  {
    id: 20,
    emoji: '🗃️',
    title: 'Compréhensions avancées',
    level: 3,
    description: 'Dict, set et compréhensions imbriquées !',
    color: '#ec4899',
    lesson: {
      title: 'Compréhensions de dict, set, et imbriquées',
      content: `
        <h2>Aller plus loin avec les compréhensions</h2>
        <p>Tu maîtrises les compréhensions de listes. Python propose les mêmes mécanismes pour les <strong>dictionnaires</strong>, les <strong>sets</strong>, et même les <strong>générateurs</strong>. Ces outils permettent d'écrire du code concis, lisible et efficace pour transformer et filtrer n'importe quel type de données.</p>

        <h2>Compréhensions de dictionnaire</h2>
        <p>Syntaxe : <code>{clé: valeur for ... in ...}</code></p>
        <pre><code class="language-python"># Créer un dictionnaire : n → n²
carres = {n: n**2 for n in range(1, 6)}
print(carres)   # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Transformer les clés et valeurs d'un dict existant
prix = {"pomme": 0.5, "banane": 0.3, "kiwi": 1.2}
prix_double = {fruit: prix_u * 2 for fruit, prix_u in prix.items()}
print(prix_double)   # {'pomme': 1.0, 'banane': 0.6, 'kiwi': 2.4}

# Inverser clés et valeurs
original = {"a": 1, "b": 2, "c": 3}
inverse = {v: k for k, v in original.items()}
print(inverse)  # {1: 'a', 2: 'b', 3: 'c'}

# Filtrer un dictionnaire (garder seulement les admis)
notes = {"Alice": 15, "Bob": 9, "Chloé": 17, "David": 11, "Emma": 7}
admis = {nom: n for nom, n in notes.items() if n >= 10}
print(admis)   # {'Alice': 15, 'Chloé': 17, 'David': 11}

# Transformer ET filtrer : mentions pour les >12
mentions = {
    nom: ("TB" if n >= 16 else "B" if n >= 14 else "AB")
    for nom, n in notes.items() if n >= 12
}
print(mentions)   # {'Alice': 'B', 'Chloé': 'TB', 'David': 'AB'}</code></pre>

        <h2>Compréhensions de set</h2>
        <p>Syntaxe : <code>{expression for ... in ...}</code> (comme dict mais sans <code>:</code>)</p>
        <pre><code class="language-python"># Nombres impairs de 1 à 20
impairs = {n for n in range(1, 21) if n % 2 != 0}
print(impairs)   # {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}
# (non ordonné !)

# Lettres uniques d'un texte (sans espaces ni ponctuations)
texte = "Python est super et puissant"
lettres_uniques = {c.lower() for c in texte if c.isalpha()}
print(sorted(lettres_uniques))   # ['a', 'e', 'h', 'i', 'n', 'o', ...]

# Domaines uniques d'une liste d'emails
emails = ["alice@gmail.com", "bob@yahoo.fr", "chloé@gmail.com", "dave@hotmail.fr"]
domaines = {email.split("@")[1] for email in emails}
print(domaines)   # {'gmail.com', 'yahoo.fr', 'hotmail.fr'}</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Pour distinguer compréhension de dict et de set : si tu as <code>clé: valeur</code> c'est un dict, si tu as juste une expression c'est un set. Et <code>{}</code> seul crée un dict vide (pas un set) — utilise <code>set()</code> pour un set vide !</div>

        <h2>Compréhensions imbriquées</h2>
        <p>On peut imbriquer des compréhensions, mais attention à la lisibilité !</p>
        <pre><code class="language-python"># Créer une matrice (liste de listes)
# Équivalent à deux boucles for imbriquées
table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
for ligne in table:
    print(ligne)
# [1, 2, 3, 4, 5]
# [2, 4, 6, 8, 10]
# [3, 6, 9, 12, 15]
# ...

# Aplatir une liste de listes
matrice = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# [x for liste in matrice for x in liste] — lire de gauche à droite comme des for imbriqués
plat = [x for ligne in matrice for x in ligne]
print(plat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Toutes les combinaisons de deux listes
couleurs = ["rouge", "vert"]
tailles = ["S", "M", "L"]
articles = [(c, t) for c in couleurs for t in tailles]
print(articles)
# [('rouge', 'S'), ('rouge', 'M'), ..., ('vert', 'L')]</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Les compréhensions imbriquées se lisent <em>de gauche à droite</em>, dans le même ordre que des boucles for imbriquées. <code>[x for a in lst_a for x in a]</code> = d'abord la boucle sur <code>lst_a</code>, puis sur chaque <code>a</code>. Si tu confonds l'ordre, le résultat sera incorrect !</div>

        <h2>Les expressions génératrices — paresseux mais efficaces</h2>
        <p>En remplaçant les crochets <code>[]</code> par des parenthèses <code>()</code>, tu crées un <strong>générateur</strong> au lieu d'une liste. La différence clé : le générateur calcule les valeurs <em>une par une à la demande</em>, sans tout stocker en mémoire !</p>
        <pre><code class="language-python"># Liste : calcule et stocke TOUT immédiatement
liste_carres = [n**2 for n in range(1000000)]   # Utilise ~8 Mo de RAM !

# Générateur : calcule à la demande, ultra-léger
gen_carres = (n**2 for n in range(1000000))    # Utilise ~100 octets seulement !

# On obtient les valeurs avec next() ou en itérant
gen = (n**2 for n in range(5))
print(next(gen))   # 0
print(next(gen))   # 1
print(next(gen))   # 4
# etc.

# Très utile avec sum(), max(), etc. (Python consomme les valeurs une par une)
total = sum(n**2 for n in range(1000000))   # Efficace !
print(total)

# Trouver le premier élément qui satisfait une condition
premier_pair = next(n for n in [3, 7, 2, 9, 4] if n % 2 == 0)
print(premier_pair)   # 2</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Utilise un générateur plutôt qu'une liste quand tu n'as besoin des éléments qu'une seule fois (pour une somme, un max, etc.) ou quand les données sont très volumineuses. Pour indexer ou réutiliser les éléments, garde une liste.</div>
      `
    },
    interactiveCode: `# Compréhension de dictionnaire
notes = {"Alice": 15, "Bob": 9, "Chloé": 17, "David": 11, "Emma": 14}

# Élèves admis (note >= 10)
admis = {nom: n for nom, n in notes.items() if n >= 10}
print("Admis :", admis)

# Mentions
def mention(n):
    if n >= 16: return "TB"
    if n >= 14: return "B"
    if n >= 12: return "AB"
    return "P"

mentions = {nom: mention(n) for nom, n in notes.items()}
print("Mentions :", mentions)

# Aplatir une matrice
matrice = [[1,2,3],[4,5,6],[7,8,9]]
plat = [x for ligne in matrice for x in ligne]
print("Aplati :", plat)`,
    exercises: [
      {
        id: 1,
        title: 'Fréquence des lettres',
        description: 'Crée un dictionnaire qui associe chaque lettre (minuscule, sans espaces) à son nombre d\'occurrences dans la phrase donnée.',
        starter: 'phrase = "python est un langage puissant"\n# Crée un dict {lettre: nb_occurrences}\n# Affiche les 5 lettres les plus fréquentes\n',
        solution: 'phrase = "python est un langage puissant"\nfreq = {c: phrase.count(c) for c in set(phrase) if c != " "}\ntop5 = sorted(freq.items(), key=lambda x: x[1], reverse=True)[:5]\nfor lettre, nb in top5:\n    print(f"  \'{lettre}\' : {nb} fois")',
        hint: 'Crée un set des caractères (sans espace), puis {c: phrase.count(c) for c in ...}'
      },
      {
        id: 2,
        title: 'Matrice identité',
        description: 'Génère une matrice identité N×N (1 sur la diagonale, 0 ailleurs) avec une compréhension imbriquée. N=4.',
        starter: 'N = 4\n# Génère la matrice identité avec une compréhension\nmatrice = []\n# Affiche-la ligne par ligne\n',
        solution: 'N = 4\nmatrice = [[1 if i == j else 0 for j in range(N)] for i in range(N)]\nfor ligne in matrice:\n    print(ligne)',
        hint: '[[1 if i==j else 0 for j in range(N)] for i in range(N)]'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle syntaxe crée une compréhension de dictionnaire ?',
        options: ['[k: v for k, v in ...]', '{k: v for k, v in ...}', '(k: v for k, v in ...)', 'dict(k: v for k, v in ...)'],
        answer: 1,
        explanation: 'Les accolades {} avec deux-points k: v définissent une compréhension de dictionnaire.'
      },
      {
        id: 2,
        question: 'Que retourne {x for x in [1,1,2,2,3]} ?',
        options: ['[1, 1, 2, 2, 3]', '{1, 2, 3}', '(1, 2, 3)', '{1: 1, 2: 2, 3: 1}'],
        answer: 1,
        explanation: 'La compréhension de set élimine les doublons et retourne {1, 2, 3}.'
      },
      {
        id: 3,
        question: 'Dans [x for ligne in matrice for x in ligne], que fait le code ?',
        options: ['Crée une matrice', 'Transpose la matrice', 'Aplatit la matrice en une liste', 'Filtre les éléments'],
        answer: 2,
        explanation: 'Cette compréhension imbriquée parcourt chaque ligne puis chaque élément, créant une liste plate à partir d\'une liste de listes.'
      }
    ]
  },
  {
    id: 21,
    emoji: '🔗',
    title: 'Fonctions intégrées',
    level: 3,
    description: 'map, filter, zip, enumerate et les outils pro !',
    color: '#10b981',
    lesson: {
      title: 'Outils fonctionnels de Python',
      content: `
        <h2>La boîte à outils fonctionnelle de Python</h2>
        <p>Python inclut des fonctions intégrées ultra-pratiques pour travailler avec des collections : <code>enumerate</code>, <code>zip</code>, <code>map</code>, <code>filter</code>, <code>any</code>, <code>all</code>... Ces outils permettent d'écrire du code élégant et expressif. Une fois que tu les maîtrises, tu les utiliseras partout !</p>

        <h2>enumerate() — itérer avec l'index</h2>
        <p>Problème classique : tu veux boucler sur une liste et connaître à la fois la valeur ET son numéro. <code>enumerate()</code> est fait pour ça :</p>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise", "kiwi"]

# Sans enumerate (à éviter)
for i in range(len(fruits)):
    print(f"{i+1}. {fruits[i]}")

# Avec enumerate (élégant !)
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
# 1. pomme
# 2. banane
# 3. cerise
# 4. kiwi

# Trouver l'index d'un élément
for i, val in enumerate(fruits):
    if val == "cerise":
        print(f"Cerise trouvée à l'index {i}")  # index 2</code></pre>

        <h2>zip() — combiner plusieurs listes</h2>
        <p><code>zip()</code> associe les éléments de plusieurs listes par position, comme une fermeture éclair :</p>
        <pre><code class="language-python">prenoms = ["Alice", "Bob", "Chloé"]
notes   = [15, 12, 18]
villes  = ["Paris", "Lyon", "Nantes"]

# Itérer sur 3 listes en parallèle
for prenom, note, ville in zip(prenoms, notes, villes):
    print(f"{prenom} ({ville}) : {note}/20")

# Créer un dictionnaire à partir de deux listes
d = dict(zip(prenoms, notes))
print(d)   # {'Alice': 15, 'Bob': 12, 'Chloé': 18}

# zip s'arrête dès que la liste la plus courte est épuisée
a = [1, 2, 3, 4, 5]
b = ["a", "b", "c"]     # Plus courte !
print(list(zip(a, b)))  # [(1,'a'), (2,'b'), (3,'c')] — 4 et 5 ignorés

# zip peut "dézipper" aussi !
paires = [(1, "a"), (2, "b"), (3, "c")]
nums, lettres = zip(*paires)
print(list(nums))     # [1, 2, 3]
print(list(lettres))  # ['a', 'b', 'c']</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — <code>zip()</code> retourne un itérateur paresseux, pas une liste. Pour obtenir une liste, entoure de <code>list()</code>. C'est efficace pour les grandes collections car rien n'est calculé à l'avance !</div>

        <h2>map() — transformer chaque élément</h2>
        <p><code>map(fonction, itérable)</code> applique une fonction à chaque élément :</p>
        <pre><code class="language-python">nombres = [1, 2, 3, 4, 5]

# Appliquer une fonction à chaque élément
carres = list(map(lambda x: x**2, nombres))
print(carres)   # [1, 4, 9, 16, 25]

# Équivalent en compréhension (plus Pythonique !)
carres = [x**2 for x in nombres]

# map est pratique avec des fonctions existantes
textes = ["  alice  ", "  BOB  ", "chloé "]
nettoyes = list(map(str.strip, textes))   # Applique strip à chaque élément
print(nettoyes)   # ['alice', 'BOB', 'chloé']

# Convertir des types
strings = ["1", "2", "3", "4"]
entiers = list(map(int, strings))
print(entiers)  # [1, 2, 3, 4]</code></pre>

        <h2>filter() — filtrer des éléments</h2>
        <pre><code class="language-python">nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Garder seulement les pairs
pairs = list(filter(lambda x: x % 2 == 0, nombres))
print(pairs)   # [2, 4, 6, 8, 10]

# Équivalent en compréhension (plus lisible en général)
pairs = [x for x in nombres if x % 2 == 0]

# Filtrer des chaînes non vides
mots = ["python", "", "super", "", "cool", "  "]
non_vides = list(filter(lambda m: m.strip(), mots))
print(non_vides)   # ['python', 'super', 'cool']

# Combiner map et filter
notes = [8, 15, 12, 5, 18, 9, 14]
admis_double = list(map(lambda n: n * 2,
                        filter(lambda n: n >= 10, notes)))
print(admis_double)  # [30, 24, 36, 28]  (notes >= 10, doublées)</code></pre>

        <h2>any() et all() — tester des conditions</h2>
        <pre><code class="language-python">notes = [12, 15, 9, 17, 11]

# any() : au moins un True
print(any(n >= 18 for n in notes))    # False (aucune >= 18)
print(any(n >= 15 for n in notes))    # True (15 et 17 ≥ 15)

# all() : tous True
print(all(n >= 10 for n in notes))    # False (9 < 10)
print(all(n > 8 for n in notes))      # True (tous > 8)
print(all(n > 0 for n in notes))      # True (tous positifs)

# Usage pratique : validation de données
def valider_notes(notes):
    if not notes:
        return False, "Liste vide"
    if not all(0 <= n <= 20 for n in notes):
        return False, "Note hors de [0, 20]"
    if any(n < 0 for n in notes):
        return False, "Note négative impossible"
    return True, "OK"

print(valider_notes([12, 15, 18]))   # (True, 'OK')
print(valider_notes([12, 25, 15]))   # (False, 'Note hors de [0, 20]')</code></pre>

        <h2>Autres fonctions intégrées essentielles</h2>
        <pre><code class="language-python"># sum(), min(), max() avec key=
notes = [14, 8, 17, 12, 15]
print(sum(notes))          # 66
print(min(notes))          # 8
print(max(notes))          # 17
print(sum(notes) / len(notes))  # 13.2

eleves = [{"nom": "Alice", "note": 15}, {"nom": "Bob", "note": 18}]
meilleur = max(eleves, key=lambda e: e["note"])
print(meilleur["nom"])     # Bob

# sorted() avec key et reverse
mots = ["banane", "kiwi", "framboise", "figue"]
par_longueur = sorted(mots, key=len)
print(par_longueur)   # ['kiwi', 'figue', 'banane', 'framboise']

# reversed() — itérateur inversé
for x in reversed([1, 2, 3, 4, 5]):
    print(x, end=" ")  # 5 4 3 2 1</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — En Python moderne, les compréhensions de listes sont généralement préférées à <code>map()</code> et <code>filter()</code> pour leur lisibilité. Mais <code>any()</code>, <code>all()</code>, <code>zip()</code> et <code>enumerate()</code> n'ont pas d'équivalent aussi élégant, donc on les utilise toujours !</div>
      `
    },
    interactiveCode: `prenoms = ["Alice", "Bob", "Chloé", "David"]
notes = [15, 12, 18, 9]
villes = ["Paris", "Lyon", "Nantes", "Bordeaux"]

# zip + enumerate
print("=== Classement ===")
resultats = list(zip(prenoms, notes, villes))
classes = sorted(resultats, key=lambda x: x[1], reverse=True)

for rang, (prenom, note, ville) in enumerate(classes, 1):
    emoji = "🥇" if rang == 1 else "🥈" if rang == 2 else "🥉" if rang == 3 else "  "
    print(f"{emoji} {rang}. {prenom} ({ville}) : {note}/20")

# any / all
print(f"\\nQuelqu'un >= 16 ? {any(n >= 16 for n in notes)}")
print(f"Tout le monde >= 10 ? {all(n >= 10 for n in notes)}")

# Dictionnaire depuis zip
dico = dict(zip(prenoms, notes))
print(f"\\nDict : {dico}")`,
    exercises: [
      {
        id: 1,
        title: 'Numéroter une liste',
        description: 'À partir de la liste de tâches, affiche chaque tâche numérotée à partir de 1 avec <code>enumerate</code>.',
        starter: 'taches = ["Faire les devoirs", "Apprendre Python", "Jouer au foot", "Lire un livre"]\n# Affiche :\n# 1. Faire les devoirs\n# 2. Apprendre Python\n# ...\n',
        solution: 'taches = ["Faire les devoirs", "Apprendre Python", "Jouer au foot", "Lire un livre"]\nfor i, tache in enumerate(taches, 1):\n    print(f"{i}. {tache}")',
        hint: 'enumerate(taches, 1) démarre la numérotation à 1'
      },
      {
        id: 2,
        title: 'Bulletin de notes',
        description: 'Avec zip, combine matieres et notes pour afficher le bulletin. Puis vérifie avec any/all si l\'élève est admis partout (>= 10).',
        starter: 'matieres = ["Maths", "Français", "Histoire", "Sciences", "Python"]\nnotes = [14, 11, 8, 15, 18]\n# Affiche le bulletin et vérifie si admis partout\n',
        solution: 'matieres = ["Maths", "Français", "Histoire", "Sciences", "Python"]\nnotes = [14, 11, 8, 15, 18]\nprint("=== Bulletin ===")\nfor matiere, note in zip(matieres, notes):\n    statut = "✓" if note >= 10 else "✗"\n    print(f"  {statut} {matiere} : {note}/20")\nprint(f"\\nAdmis partout : {all(n >= 10 for n in notes)}")\nprint(f"Au moins une matière >= 15 : {any(n >= 15 for n in notes)}")',
        hint: 'for matiere, note in zip(matieres, notes): — puis all/any sur la liste notes'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Que retourne enumerate(["a","b","c"], 1) ?',
        options: ['["a","b","c"]', '[(1,"a"),(2,"b"),(3,"c")]', '[(0,"a"),(1,"b"),(2,"c")]', '[1,2,3]'],
        answer: 1,
        explanation: 'enumerate retourne des paires (index, valeur). Avec start=1 : (1,"a"), (2,"b"), (3,"c").'
      },
      {
        id: 2,
        question: 'Que fait zip([1,2,3], ["a","b","c"]) ?',
        options: ['Concatène les deux listes', 'Crée des paires [(1,"a"),(2,"b"),(3,"c")]', 'Crée un dictionnaire', 'Retourne le plus long'],
        answer: 1,
        explanation: 'zip combine plusieurs itérables en paires. Utile pour parcourir deux listes en parallèle.'
      },
      {
        id: 3,
        question: 'Que retourne all([True, True, False]) ?',
        options: ['True', 'False', '[True, True, False]', 'None'],
        answer: 1,
        explanation: 'all() retourne True uniquement si TOUS les éléments sont vrais. Ici False est présent → retourne False.'
      }
    ]
  },

  // ─── NIVEAU 4 ────────────────────────────────────────────────────────────────

  {
    id: 22,
    emoji: '🌐',
    title: 'Le Web & HTML',
    level: 4,
    description: 'Comment fonctionne Internet et le rôle de Python dedans !',
    color: '#3b82f6',
    lesson: {
      title: 'Le Web, HTML et Python',
      content: `
        <h2>Comment fonctionne Internet ?</h2>
        <p>Chaque fois que tu ouvres un site web, un dialogue invisible se produit entre ton navigateur et un serveur quelque part dans le monde. Comprendre ce dialogue est essentiel pour construire tes propres applications web avec Python !</p>
        <p>Voici le cycle complet d'une requête web :</p>
        <ol>
          <li>Tu tapes <code>https://monsite.com/page</code> dans Chrome/Firefox</li>
          <li>Ton navigateur <strong>résout le nom de domaine</strong> en adresse IP (via DNS)</li>
          <li>Il envoie une <strong>requête HTTP GET</strong> au serveur</li>
          <li>Le serveur (Python avec Flask !) reçoit la requête</li>
          <li>Il traite et renvoie une <strong>réponse HTTP</strong> avec du HTML</li>
          <li>Ton navigateur lit le HTML et <strong>affiche la page</strong></li>
        </ol>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — <strong>Frontend</strong> = tout ce que l'utilisateur voit dans son navigateur (HTML, CSS, JavaScript). <strong>Backend</strong> = le serveur qui traite la logique, accède à la base de données, etc. Python est un langage backend. Tu vas apprendre les deux !</div>

        <h2>HTML — la structure d'une page web</h2>
        <p>HTML (HyperText Markup Language) est le langage de base du Web. Il décrit la <em>structure</em> d'une page avec des <strong>balises</strong>. Python peut générer du HTML dynamiquement !</p>
        <pre><code class="language-python"># Python peut créer et manipuler du HTML
page_html = """&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Ma page Python&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bonjour, je suis généré par Python !&lt;/h1&gt;
    &lt;p&gt;Voici ma &lt;strong&gt;première page&lt;/strong&gt; web.&lt;/p&gt;
    &lt;a href="https://python.org"&gt;Visiter Python.org&lt;/a&gt;
  &lt;/body&gt;
&lt;/html&gt;"""

print(page_html)</code></pre>

        <h2>Les balises HTML essentielles</h2>
        <p>Voici les balises les plus importantes à connaître :</p>
        <pre><code class="language-python">balises_html = {
    "&lt;h1&gt; à &lt;h6&gt;": "Titres (h1 = plus grand, h6 = plus petit)",
    "&lt;p&gt;":           "Paragraphe de texte",
    "&lt;a href='url'&gt;": "Lien hypertexte (anchor)",
    "&lt;img src='url' alt='desc'&gt;": "Image",
    "&lt;ul&gt; + &lt;li&gt;":  "Liste non ordonnée (à puces)",
    "&lt;ol&gt; + &lt;li&gt;":  "Liste ordonnée (numérotée)",
    "&lt;div&gt;":         "Conteneur bloc générique",
    "&lt;span&gt;":        "Conteneur inline (dans le texte)",
    "&lt;table&gt;":       "Tableau",
    "&lt;form&gt;":         "Formulaire de saisie",
    "&lt;input&gt;":       "Champ de saisie",
    "&lt;button&gt;":      "Bouton cliquable",
    "&lt;nav&gt;":          "Navigation",
    "&lt;header&gt;":      "En-tête de page",
    "&lt;footer&gt;":      "Pied de page",
    "&lt;main&gt;":        "Contenu principal",
}

for balise, role in balises_html.items():
    print(f"  {balise} → {role}")</code></pre>

        <h2>Python génère du HTML dynamique</h2>
        <p>L'énorme avantage de Python est de générer du HTML <em>à la volée</em>, avec de vraies données provenant d'une base de données ou d'un calcul :</p>
        <pre><code class="language-python">def generer_tableau(eleves):
    html = "&lt;table border='1'&gt;\n"
    html += "  &lt;tr&gt;&lt;th&gt;Nom&lt;/th&gt;&lt;th&gt;Note&lt;/th&gt;&lt;th&gt;Mention&lt;/th&gt;&lt;/tr&gt;\n"

    for e in eleves:
        mention = "TB" if e["note"] >= 16 else "B" if e["note"] >= 14 else "AB" if e["note"] >= 12 else "Insuffisant"
        couleur = "green" if e["note"] >= 14 else "orange" if e["note"] >= 10 else "red"
        html += f"""  &lt;tr&gt;
    &lt;td&gt;{e["nom"]}&lt;/td&gt;
    &lt;td style="color:{couleur}"&gt;{e["note"]}/20&lt;/td&gt;
    &lt;td&gt;{mention}&lt;/td&gt;
  &lt;/tr&gt;\n"""

    html += "&lt;/table&gt;"
    return html

eleves = [
    {"nom": "Alice", "note": 16},
    {"nom": "Bob",   "note": 12},
    {"nom": "Chloé", "note": 18},
    {"nom": "David", "note": 8},
]
print(generer_tableau(eleves))</code></pre>

        <h2>HTTP — le protocole du Web</h2>
        <p>HTTP (HyperText Transfer Protocol) est le "langage" que le navigateur et le serveur utilisent pour communiquer.</p>
        <pre><code class="language-python"># Les méthodes HTTP principales
methodes = {
    "GET":    "Demander une ressource (lire une page, obtenir des données)",
    "POST":   "Envoyer des données au serveur (formulaire, création)",
    "PUT":    "Modifier une ressource existante",
    "DELETE": "Supprimer une ressource",
    "PATCH":  "Modification partielle d'une ressource",
}

# Les codes de statut HTTP importants
codes = {
    200: "OK — Tout va bien",
    201: "Created — Ressource créée avec succès",
    301: "Moved Permanently — Redirection permanente",
    400: "Bad Request — Requête mal formée",
    401: "Unauthorized — Non authentifié",
    403: "Forbidden — Accès refusé",
    404: "Not Found — Ressource introuvable",
    500: "Internal Server Error — Erreur serveur",
    503: "Service Unavailable — Serveur indisponible",
}

for code, desc in codes.items():
    print(f"  HTTP {code} → {desc}")</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — GET est pour <em>lire</em> des données (l'URL contient les paramètres : <code>?page=2&tri=date</code>). POST est pour <em>envoyer</em> des données sensibles (le corps de la requête contient les données, non visible dans l'URL). C'est pourquoi les formulaires de connexion utilisent toujours POST !</div>

        <h2>Ce qui t'attend dans les prochains modules</h2>
        <p>Maintenant que tu comprends comment le Web fonctionne, tu vas apprendre à construire le côté serveur avec Flask :</p>
        <ul>
          <li><strong>Flask</strong> : créer un serveur Python qui répond aux requêtes HTTP</li>
          <li><strong>Templates Jinja2</strong> : générer du HTML dynamique avec des variables Python</li>
          <li><strong>Formulaires</strong> : recevoir et traiter des données envoyées par l'utilisateur</li>
          <li><strong>Bases de données</strong> : stocker et retrouver des données avec SQLite</li>
          <li><strong>APIs REST</strong> : créer des APIs que d'autres apps peuvent consommer</li>
        </ul>
      `
    },
    interactiveCode: `eleves = [
    {"nom": "Alice", "note": 15, "mention": "Bien"},
    {"nom": "Bob",   "note": 12, "mention": "Assez bien"},
    {"nom": "Chloé", "note": 18, "mention": "Très bien"},
]

# Génère une page HTML complète
def generer_html(titre, eleves):
    lignes = ""
    for e in eleves:
        couleur = "green" if e["note"] >= 14 else "orange" if e["note"] >= 10 else "red"
        lignes += f'  <tr><td>{e["nom"]}</td><td style="color:{couleur}">{e["note"]}/20</td><td>{e["mention"]}</td></tr>\\n'

    return f"""<!DOCTYPE html>
<html>
<head><title>{titre}</title></head>
<body>
  <h1>{titre}</h1>
  <table border="1">
    <tr><th>Nom</th><th>Note</th><th>Mention</th></tr>
{lignes}  </table>
</body>
</html>"""

print(generer_html("Résultats du trimestre", eleves))`,
    exercises: [
      {
        id: 1,
        title: 'Générateur de liste HTML',
        description: 'Crée une fonction <code>liste_html(items)</code> qui prend une liste Python et retourne une chaîne HTML avec des balises <code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code>.',
        starter: 'def liste_html(items):\n    # Génère <ul><li>item1</li><li>item2</li>...</ul>\n    pass\n\nfruits = ["pomme", "banane", "cerise"]\nprint(liste_html(fruits))\n',
        solution: 'def liste_html(items):\n    html = "<ul>\\n"\n    for item in items:\n        html += f"  <li>{item}</li>\\n"\n    html += "</ul>"\n    return html\n\nfruits = ["pomme", "banane", "cerise"]\nprint(liste_html(fruits))',
        hint: 'Commence par "<ul>\\n", ajoute chaque <li>item</li>, termine par "</ul>"'
      },
      {
        id: 2,
        title: 'Codes HTTP',
        description: 'Crée un dictionnaire des codes HTTP principaux, puis une fonction <code>statut(code)</code> qui retourne la description. Teste avec 200, 404, 500.',
        starter: 'codes_http = {\n    200: "OK",\n    # Ajoute 201, 400, 401, 403, 404, 500\n}\n\ndef statut(code):\n    # Retourne la description ou "Inconnu"\n    pass\n\nprint(statut(200))  # OK\nprint(statut(404))  # Not Found\nprint(statut(999))  # Inconnu\n',
        solution: 'codes_http = {\n    200: "OK",\n    201: "Created",\n    400: "Bad Request",\n    401: "Unauthorized",\n    403: "Forbidden",\n    404: "Not Found",\n    500: "Internal Server Error",\n}\n\ndef statut(code):\n    return codes_http.get(code, "Inconnu")\n\nprint(statut(200))\nprint(statut(404))\nprint(statut(999))',
        hint: 'Utilise .get(code, "Inconnu") pour retourner une valeur par défaut'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle est la différence entre Frontend et Backend ?',
        options: [
          'Frontend = Python, Backend = JavaScript',
          'Frontend = ce que l\'utilisateur voit (navigateur), Backend = serveur qui traite les données',
          'Frontend = la base de données, Backend = l\'interface',
          'Il n\'y a pas de différence'
        ],
        answer: 1,
        explanation: 'Le frontend (HTML/CSS/JS) s\'exécute dans le navigateur. Le backend (Python, etc.) tourne sur le serveur et traite la logique métier et les données.'
      },
      {
        id: 2,
        question: 'Que signifie une réponse HTTP 404 ?',
        options: ['Tout va bien', 'Erreur serveur interne', 'Page ou ressource introuvable', 'Accès non autorisé'],
        answer: 2,
        explanation: '404 Not Found signifie que la ressource demandée n\'existe pas sur le serveur. C\'est l\'erreur web la plus connue !'
      },
      {
        id: 3,
        question: 'Quelle méthode HTTP envoie des données de formulaire au serveur ?',
        options: ['GET', 'POST', 'SEND', 'PUSH'],
        answer: 1,
        explanation: 'POST envoie des données dans le corps de la requête (formulaire, login…). GET passe les données dans l\'URL (?param=valeur).'
      }
    ]
  },
  {
    id: 23,
    emoji: '⚗️',
    title: 'Flask : premiers pas',
    level: 4,
    description: 'Crée ton premier serveur web avec Python !',
    color: '#6366f1',
    lesson: {
      title: 'Flask — le micro-framework web Python',
      content: `
        <h2>Qu'est-ce que Flask ?</h2>
        <p><strong>Flask</strong> est un micro-framework Python pour créer des applications web. "Micro" ne veut pas dire limité — ça veut dire qu'il reste simple et que tu gardes le contrôle. Il est utilisé par Pinterest, LinkedIn, et des milliers de startups.</p>
        <p>Avec Flask, Python devient ton serveur web. Tu écris du Python, et Flask s'occupe de recevoir les requêtes HTTP et d'envoyer les réponses !</p>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Important</strong> — Flask s'installe et s'exécute sur ton ordinateur ou un serveur, pas dans ce navigateur. Les exemples montrent comment ça marche — teste localement avec <code>pip install flask</code> puis <code>python app.py</code>.</div>

        <h2>Ton premier serveur Flask — 5 lignes !</h2>
        <pre><code class="language-python"># app.py
from flask import Flask

app = Flask(__name__)    # Crée l'application Flask

@app.route("/")          # Décore la fonction avec la route "/"
def accueil():
    return "&lt;h1&gt;Bonjour le monde !&lt;/h1&gt;"

if __name__ == "__main__":
    app.run(debug=True)   # Lance le serveur</code></pre>
        <p>Après <code>python app.py</code>, ouvre <code>http://localhost:5000</code> dans ton navigateur. Tu verras "Bonjour le monde !" !</p>
        <pre><code class="language-python"># Plusieurs routes dans la même app
from flask import Flask
app = Flask(__name__)

@app.route("/")
def accueil():
    return """
    &lt;h1&gt;Page d'accueil&lt;/h1&gt;
    &lt;p&gt;&lt;a href='/a-propos'&gt;À propos&lt;/a&gt;&lt;/p&gt;
    """

@app.route("/a-propos")
def a_propos():
    return "&lt;h1&gt;À propos&lt;/h1&gt;&lt;p&gt;Ce site est construit avec Flask !&lt;/p&gt;"

@app.route("/contact")
def contact():
    return "&lt;h1&gt;Contact&lt;/h1&gt;&lt;p&gt;Envoyez un email à ...&lt;/p&gt;"

if __name__ == "__main__":
    app.run(debug=True)</code></pre>

        <h2>Le décorateur @app.route — le coeur de Flask</h2>
        <p>Le décorateur <code>@app.route("/chemin")</code> associe une URL à une fonction Python. Quand quelqu'un visite cette URL, Flask appelle la fonction et renvoie ce qu'elle retourne :</p>
        <pre><code class="language-python">from flask import Flask
app = Flask(__name__)

# Route statique simple
@app.route("/")
def index():
    return "&lt;p&gt;Page d'accueil&lt;/p&gt;"

# Routes avec paramètres dynamiques
@app.route("/utilisateur/&lt;nom&gt;")           # &lt;nom&gt; = paramètre texte
def profil(nom):
    return f"&lt;h1&gt;Profil de {nom}&lt;/h1&gt;"

@app.route("/article/&lt;int:article_id&gt;")    # &lt;int:id&gt; = paramètre entier
def article(article_id):
    return f"&lt;p&gt;Article numéro {article_id}&lt;/p&gt;"

# http://localhost:5000/utilisateur/Alice → Profil de Alice
# http://localhost:5000/article/42       → Article numéro 42</code></pre>

        <h2>Retourner différents types de réponses</h2>
        <pre><code class="language-python">from flask import Flask, jsonify, redirect, url_for
app = Flask(__name__)

# Retourner du HTML (texte brut ou chaîne)
@app.route("/")
def accueil():
    return "&lt;h1&gt;Bienvenue&lt;/h1&gt;"   # Code HTTP 200 par défaut

# Retourner du JSON (pour une API)
eleves = [{"nom": "Alice", "note": 15}, {"nom": "Bob", "note": 12}]

@app.route("/api/eleves")
def get_eleves():
    return jsonify(eleves)   # Convertit en JSON + bon Content-Type

# Retourner avec un code HTTP personnalisé
@app.route("/secret")
def secret():
    return "&lt;p&gt;Accès refusé&lt;/p&gt;", 403   # 403 Forbidden

# Rediriger vers une autre URL
@app.route("/ancien-chemin")
def ancien():
    return redirect(url_for("accueil"))   # Redirige vers /</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — <code>url_for("nom_fonction")</code> génère l'URL correspondant à une fonction de vue. C'est mieux que d'écrire l'URL en dur : si tu changes le chemin, <code>url_for</code> se met à jour automatiquement !</div>

        <h2>Mode debug — l'outil indispensable</h2>
        <p>En mode debug (<code>app.run(debug=True)</code>) :</p>
        <ul>
          <li>Le serveur se <strong>redémarre automatiquement</strong> quand tu sauvegardes un fichier</li>
          <li>Les erreurs s'affichent dans le navigateur avec la <strong>trace complète</strong></li>
          <li>Tu peux inspecter les variables directement dans le navigateur</li>
        </ul>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — N'utilise <em>jamais</em> <code>debug=True</code> en production (serveur accessible par le public) ! Le mode debug permet d'exécuter du code Python directement depuis le navigateur — un énorme risque de sécurité !</div>

        <h2>Structure d'un projet Flask typique</h2>
        <pre><code class="language-python">mon_projet/
├── app.py              ← Point d'entrée principal
├── templates/          ← Fichiers HTML (templates Jinja2)
│   ├── base.html
│   ├── index.html
│   └── eleves.html
├── static/             ← Fichiers statiques (CSS, JS, images)
│   ├── style.css
│   └── script.js
└── requirements.txt    ← Liste des dépendances (flask, etc.)</code></pre>
        <pre><code class="language-python"># requirements.txt
flask==3.0.0
# Installation : pip install -r requirements.txt</code></pre>
      `
    },
    interactiveCode: `# Simulation du système de routing Flask en Python pur
# (Flask lui-même ne tourne pas dans le navigateur)

class MiniFlask:
    def __init__(self):
        self.routes = {}

    def route(self, path):
        def decorator(func):
            self.routes[path] = func
            return func
        return decorator

    def simuler_requete(self, path, **kwargs):
        if path in self.routes:
            return self.routes[path](**kwargs)
        return "404 - Page introuvable"

app = MiniFlask()

@app.route("/")
def accueil():
    return "<h1>Bienvenue !</h1>"

@app.route("/about")
def about():
    return "<p>À propos de ce site.</p>"

# Simuler des requêtes
print("GET /       →", app.simuler_requete("/"))
print("GET /about  →", app.simuler_requete("/about"))
print("GET /autre  →", app.simuler_requete("/inconnu"))`,
    exercises: [
      {
        id: 1,
        title: 'Routeur simple',
        description: 'Complète la classe <code>Routeur</code> pour qu\'elle stocke et exécute des routes. Ajoute les routes "/" → "Page d\'accueil" et "/contact" → "Contactez-nous".',
        starter: 'class Routeur:\n    def __init__(self):\n        self.routes = {}\n\n    def ajouter(self, chemin, fonction):\n        # Stocke la fonction pour ce chemin\n        pass\n\n    def traiter(self, chemin):\n        # Appelle la fonction si le chemin existe, sinon retourne "404"\n        pass\n\nr = Routeur()\nr.ajouter("/", lambda: "Page d\'accueil")\nr.ajouter("/contact", lambda: "Contactez-nous")\nprint(r.traiter("/"))         # Page d\'accueil\nprint(r.traiter("/contact"))  # Contactez-nous\nprint(r.traiter("/xyz"))      # 404\n',
        solution: 'class Routeur:\n    def __init__(self):\n        self.routes = {}\n\n    def ajouter(self, chemin, fonction):\n        self.routes[chemin] = fonction\n\n    def traiter(self, chemin):\n        if chemin in self.routes:\n            return self.routes[chemin]()\n        return "404 - Page introuvable"\n\nr = Routeur()\nr.ajouter("/", lambda: "Page d\'accueil")\nr.ajouter("/contact", lambda: "Contactez-nous")\nprint(r.traiter("/"))\nprint(r.traiter("/contact"))\nprint(r.traiter("/xyz"))',
        hint: 'self.routes[chemin] = fonction pour stocker, self.routes.get(chemin) pour récupérer'
      },
      {
        id: 2,
        title: 'Générateur de réponse HTTP',
        description: 'Crée une fonction <code>reponse_http(code, corps)</code> qui retourne une chaîne formatée comme une vraie réponse HTTP.',
        starter: 'def reponse_http(code, corps):\n    messages = {200: "OK", 404: "Not Found", 500: "Internal Server Error"}\n    # Retourne : "HTTP/1.1 200 OK\\nContent-Type: text/html\\n\\n<corps>"\n    pass\n\nprint(reponse_http(200, "<h1>Bonjour</h1>"))\nprint(reponse_http(404, "<h1>Page introuvable</h1>"))\n',
        solution: 'def reponse_http(code, corps):\n    messages = {200: "OK", 404: "Not Found", 500: "Internal Server Error"}\n    msg = messages.get(code, "Unknown")\n    return f"HTTP/1.1 {code} {msg}\\nContent-Type: text/html\\n\\n{corps}"\n\nprint(reponse_http(200, "<h1>Bonjour</h1>"))\nprint(reponse_http(404, "<h1>Page introuvable</h1>"))',
        hint: 'f"HTTP/1.1 {code} {messages[code]}\\nContent-Type: text/html\\n\\n{corps}"'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Que fait le décorateur @app.route("/") dans Flask ?',
        options: [
          'Importe Flask',
          'Associe l\'URL "/" à la fonction qui suit',
          'Lance le serveur',
          'Crée une base de données'
        ],
        answer: 1,
        explanation: '@app.route("/") dit à Flask : "quand un navigateur demande l\'URL /, exécute la fonction suivante et retourne son résultat".'
      },
      {
        id: 2,
        question: 'Sur quelle adresse Flask démarre-t-il par défaut ?',
        options: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:5000', 'http://127.0.0.1:80'],
        answer: 2,
        explanation: 'Flask utilise le port 5000 par défaut : http://localhost:5000 ou http://127.0.0.1:5000.'
      },
      {
        id: 3,
        question: 'Que retourne jsonify(données) dans Flask ?',
        options: ['Une chaîne Python', 'Une réponse HTTP avec le contenu en JSON', 'Un fichier .json', 'Un dictionnaire Python'],
        answer: 1,
        explanation: 'jsonify() convertit les données Python (dict, list) en réponse HTTP avec Content-Type: application/json — parfait pour créer une API.'
      }
    ]
  },
  {
    id: 24,
    emoji: '🎨',
    title: 'Templates Jinja2',
    level: 4,
    description: 'Génère des pages HTML dynamiques avec des templates !',
    color: '#f59e0b',
    lesson: {
      title: 'Templates HTML avec Jinja2',
      content: `
        <h2>Le problème du HTML dans Python</h2>
        <p>Dans le module précédent, les vues Flask retournaient des chaînes HTML directement. C'est pratique pour 2 lignes, mais dès qu'une page devient complexe, ton code Python ressemble à ça :</p>
        <pre><code class="language-python">return f"&lt;html&gt;&lt;head&gt;&lt;title&gt;...&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;Bonjour {prenom}&lt;/h1&gt;..." # 200 lignes de ce style → CAUCHEMAR</code></pre>
        <p>Les <strong>templates</strong> résolvent ce problème en séparant la logique Python du HTML. Flask utilise le moteur <strong>Jinja2</strong> qui ajoute de la logique (variables, boucles, conditions) directement dans les fichiers HTML.</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Le principe est le même que les f-strings, mais pour du HTML : tu mets des "trous" dans le HTML, et Python les remplit avec de vraies données. C'est ainsi que fonctionne chaque page dynamique sur le Web !</div>

        <h2>Structure d'un projet Flask avec templates</h2>
        <pre><code class="language-python">mon_app/
├── app.py              ← Code Python (logique)
└── templates/          ← Fichiers HTML avec Jinja2
    ├── base.html       ← Structure commune (nav, header, footer)
    ├── index.html      ← Page d'accueil (hérite de base.html)
    └── eleves.html     ← Page liste des élèves</code></pre>

        <h2>Utiliser render_template()</h2>
        <pre><code class="language-python"># app.py
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def accueil():
    # On passe des données au template via des arguments nommés
    return render_template("index.html",
                           prenom="Alice",
                           notes=[15, 12, 18, 14],
                           admis=True)

@app.route("/eleves")
def eleves():
    liste = [
        {"nom": "Alice", "note": 15},
        {"nom": "Bob",   "note": 9},
        {"nom": "Chloé", "note": 17},
    ]
    return render_template("eleves.html", eleves=liste)</code></pre>

        <h2>Syntaxe Jinja2 dans les templates HTML</h2>
        <p>Jinja2 ajoute trois types de balises dans le HTML :</p>
        <ul>
          <li><code>{{ variable }}</code> — afficher une valeur</li>
          <li><code>{% instruction %}</code> — logique (if, for, extends...)</li>
          <li><code>{# commentaire #}</code> — commentaire (non visible dans la page)</li>
        </ul>
        <pre><code class="language-python"># templates/index.html (contenu simplifié)
"""
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

{# Afficher une variable #}
&lt;h1&gt;Bonjour {{ prenom }} !&lt;/h1&gt;

{# Boucle for #}
&lt;h2&gt;Tes notes :&lt;/h2&gt;
&lt;ul&gt;
  {% for note in notes %}
    &lt;li&gt;{{ note }}/20&lt;/li&gt;
  {% endfor %}
&lt;/ul&gt;

{# Condition if #}
{% if admis %}
  &lt;p style="color:green"&gt;Félicitations, tu es admis(e) !&lt;/p&gt;
{% else %}
  &lt;p style="color:red"&gt;Continue tes efforts.&lt;/p&gt;
{% endif %}

{# Calculs et filtres #}
&lt;p&gt;Moyenne : {{ (notes | sum / notes | length) | round(1) }}&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
"""</code></pre>

        <h2>Les filtres Jinja2</h2>
        <p>Les <strong>filtres</strong> transforment les valeurs avec le symbole <code>|</code> :</p>
        <pre><code class="language-python"># Dans un template Jinja2 :
"""
{{ prenom | upper }}          → ALICE (majuscules)
{{ prenom | lower }}          → alice (minuscules)
{{ note | round(1) }}         → 15.3 (arrondi)
{{ texte | truncate(50) }}    → Texte... (tronqué)
{{ liste | length }}          → 4 (longueur)
{{ liste | join(", ") }}      → "alice, bob, chloé"
{{ valeur | default("N/A") }} → Valeur par défaut si None

{# Boucle avec indice #}
{% for eleve in eleves %}
  {{ loop.index }}. {{ eleve.nom }}   {# loop.index commence à 1 #}
  {{ loop.index0 }}. {{ eleve.nom }}  {# loop.index0 commence à 0 #}
  {% if loop.first %} (Premier !) {% endif %}
  {% if loop.last %}  (Dernier !) {% endif %}
{% endfor %}
"""</code></pre>

        <h2>Héritage de templates — éviter la répétition</h2>
        <p>Le principe DRY (Don't Repeat Yourself) appliqué aux templates : une structure commune dans un fichier parent, et chaque page remplit uniquement les "blocs" qui changent :</p>
        <pre><code class="language-python"># templates/base.html — Structure commune à toutes les pages
"""
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
  &lt;title&gt;{% block titre %}Mon Site Flask{% endblock %}&lt;/title&gt;
  &lt;link rel="stylesheet" href="/static/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;nav&gt;
    &lt;a href="/"&gt;Accueil&lt;/a&gt; |
    &lt;a href="/eleves"&gt;Élèves&lt;/a&gt; |
    &lt;a href="/contact"&gt;Contact&lt;/a&gt;
  &lt;/nav&gt;

  &lt;main&gt;
    {% block contenu %}
    {# Les pages enfants remplissent ce bloc #}
    {% endblock %}
  &lt;/main&gt;

  &lt;footer&gt;&lt;p&gt;Mon site Flask — 2024&lt;/p&gt;&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
"""

# templates/index.html — Hérite de base.html
"""
{% extends "base.html" %}

{% block titre %}Accueil{% endblock %}

{% block contenu %}
  &lt;h1&gt;Bienvenue sur mon site !&lt;/h1&gt;
  &lt;p&gt;Bonjour {{ prenom }}, bienvenue !&lt;/p&gt;
{% endblock %}
"""

# templates/eleves.html — Hérite aussi de base.html
"""
{% extends "base.html" %}

{% block titre %}Liste des élèves{% endblock %}

{% block contenu %}
  &lt;h1&gt;Tous les élèves&lt;/h1&gt;
  {% for e in eleves %}
    &lt;p&gt;{{ e.nom }} : {{ e.note }}/20&lt;/p&gt;
  {% endfor %}
{% endblock %}
"""</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — L'héritage de templates signifie que si tu changes la navigation dans <code>base.html</code>, le changement s'applique automatiquement à <em>toutes</em> les pages. Plus besoin de modifier 20 fichiers HTML !</div>
      `
    },
    interactiveCode: `# Simulation du moteur Jinja2 en Python pur
import re

def render(template, **context):
    """Mini moteur de templates façon Jinja2"""
    result = template

    # {{ variable }}
    for key, val in context.items():
        result = result.replace("{{ " + key + " }}", str(val))

    # {% for item in liste %} ... {% endfor %}
    for_pattern = r"\\{%\\s*for\\s+(\\w+)\\s+in\\s+(\\w+)\\s*%\\}(.+?)\\{%\\s*endfor\\s*%\\}"
    def expand_for(m):
        var, lst_name, body = m.group(1), m.group(2), m.group(3)
        lst = context.get(lst_name, [])
        return "".join(body.replace("{{ " + var + " }}", str(item)) for item in lst)
    result = re.sub(for_pattern, expand_for, result, flags=re.DOTALL)

    return result.strip()

template = """
Bonjour {{ prenom }} !
Tes notes :
{% for note in notes %}  - {{ note }}/20
{% endfor %}
Moyenne : {{ moyenne }}
"""

notes = [15, 12, 18, 14]
html = render(template,
    prenom="Alice",
    notes=notes,
    moyenne=f"{sum(notes)/len(notes):.1f}"
)
print(html)`,
    exercises: [
      {
        id: 1,
        title: 'Générateur de template',
        description: 'Crée une fonction <code>remplir(template, variables)</code> qui remplace les <code>{{clé}}</code> dans le template par les valeurs du dictionnaire.',
        starter: 'def remplir(template, variables):\n    # Remplace {{cle}} par variables["cle"]\n    pass\n\nt = "Bonjour {{prenom}}, tu as {{age}} ans et tu habites à {{ville}}."\nresultat = remplir(t, {"prenom": "Alice", "age": "15", "ville": "Paris"})\nprint(resultat)\n',
        solution: 'def remplir(template, variables):\n    for cle, valeur in variables.items():\n        template = template.replace("{{" + cle + "}}", valeur)\n    return template\n\nt = "Bonjour {{prenom}}, tu as {{age}} ans et tu habites à {{ville}}."\nresultat = remplir(t, {"prenom": "Alice", "age": "15", "ville": "Paris"})\nprint(resultat)',
        hint: 'Boucle sur variables.items() et fais template.replace("{{" + cle + "}}", valeur)'
      },
      {
        id: 2,
        title: 'Table HTML dynamique',
        description: 'Crée une fonction <code>table_html(colonnes, lignes)</code> qui génère un tableau HTML à partir d\'une liste de colonnes et d\'une liste de listes de valeurs.',
        starter: 'def table_html(colonnes, lignes):\n    # Génère <table><tr><th>...</th></tr><tr><td>...</td></tr>...</table>\n    pass\n\ncols = ["Nom", "Note", "Mention"]\ndata = [["Alice", 15, "Bien"], ["Bob", 12, "AB"], ["Chloé", 18, "TB"]]\nprint(table_html(cols, data))\n',
        solution: 'def table_html(colonnes, lignes):\n    html = "<table>\\n"\n    html += "  <tr>" + "".join(f"<th>{c}</th>" for c in colonnes) + "</tr>\\n"\n    for ligne in lignes:\n        html += "  <tr>" + "".join(f"<td>{v}</td>" for v in ligne) + "</tr>\\n"\n    html += "</table>"\n    return html\n\ncols = ["Nom", "Note", "Mention"]\ndata = [["Alice", 15, "Bien"], ["Bob", 12, "AB"], ["Chloé", 18, "TB"]]\nprint(table_html(cols, data))',
        hint: 'Commence par les en-têtes <th>, puis boucle sur lignes pour les <td>'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle syntaxe Jinja2 affiche une variable ?',
        options: ['<% variable %>', '${variable}', '{{ variable }}', '#{variable}'],
        answer: 2,
        explanation: 'Jinja2 utilise {{ }} pour les expressions/variables, et {% %} pour les instructions (if, for, etc.).'
      },
      {
        id: 2,
        question: 'Que fait {% extends "base.html" %} ?',
        options: [
          'Importe base.html comme module Python',
          'Le template hérite de base.html et peut remplir ses blocs',
          'Copie le contenu de base.html',
          'Crée un nouveau fichier base.html'
        ],
        answer: 1,
        explanation: 'extends permet l\'héritage de templates : le fichier enfant réutilise la structure du parent et remplit les blocs {% block %}.'
      },
      {
        id: 3,
        question: 'Quelle fonction Flask envoie un template HTML en réponse ?',
        options: ['send_html()', 'render_template()', 'template_response()', 'return_html()'],
        answer: 1,
        explanation: 'render_template("fichier.html", variable=valeur) charge le fichier Jinja2, injecte les variables, et retourne le HTML généré.'
      }
    ]
  },
  {
    id: 25,
    emoji: '📝',
    title: 'Formulaires & requêtes',
    level: 4,
    description: 'Reçois et traite les données envoyées par l\'utilisateur !',
    color: '#10b981',
    lesson: {
      title: 'Formulaires HTML et Flask',
      content: `
        <h2>L'interaction utilisateur — le coeur d'une web app</h2>
        <p>Un site web statique affiche les mêmes données pour tout le monde. Une <em>application</em> web permet aux utilisateurs d'interagir : s'inscrire, se connecter, chercher, publier des messages... Tout ça passe par des <strong>formulaires HTML</strong> et la gestion des requêtes côté serveur.</p>

        <h2>Les formulaires HTML</h2>
        <p>Un formulaire HTML a deux attributs essentiels : <code>action</code> (l'URL où envoyer) et <code>method</code> (GET ou POST). Chaque champ a un attribut <code>name</code> qui devient la clé dans les données reçues.</p>
        <pre><code class="language-python"># templates/inscription.html
"""
&lt;form action="/inscription" method="POST"&gt;
  &lt;label for="prenom"&gt;Prénom :&lt;/label&gt;
  &lt;input type="text" id="prenom" name="prenom" required&gt;

  &lt;label for="email"&gt;Email :&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;

  &lt;label for="mdp"&gt;Mot de passe :&lt;/label&gt;
  &lt;input type="password" id="mdp" name="mot_de_passe" minlength="8"&gt;

  &lt;label for="classe"&gt;Classe :&lt;/label&gt;
  &lt;select id="classe" name="classe"&gt;
    &lt;option value="3e"&gt;3ème&lt;/option&gt;
    &lt;option value="4e"&gt;4ème&lt;/option&gt;
  &lt;/select&gt;

  &lt;button type="submit"&gt;S'inscrire&lt;/button&gt;
&lt;/form&gt;
"""</code></pre>

        <h2>Recevoir et traiter les données avec Flask</h2>
        <pre><code class="language-python">from flask import Flask, request, render_template, redirect, url_for
app = Flask(__name__)

@app.route("/connexion", methods=["GET", "POST"])
def connexion():
    # GET : afficher le formulaire vide
    if request.method == "GET":
        return render_template("login.html")

    # POST : traiter les données soumises
    username = request.form.get("username", "").strip()
    password = request.form.get("password", "")

    if username == "admin" and password == "1234":
        return redirect(url_for("tableau_de_bord"))
    else:
        return render_template("login.html",
                               erreur="Identifiants incorrects")</code></pre>

        <h2>GET vs POST — quand utiliser quoi ?</h2>
        <ul>
          <li><strong>GET</strong> : données dans l'URL (<code>?q=python&page=2</code>) — pour des recherches, filtres, pagination. Peut être mis en favori, partagé.</li>
          <li><strong>POST</strong> : données dans le corps de la requête (invisible dans l'URL) — pour les formulaires sensibles (login, inscription, modification de données).</li>
        </ul>
        <pre><code class="language-python"># Paramètres GET (query strings)
@app.route("/recherche")
def recherche():
    # URL : /recherche?q=python&page=2
    q    = request.args.get("q", "")        # Récupère "python"
    page = int(request.args.get("page", 1)) # Récupère 2, défaut 1
    return render_template("resultats.html", query=q, page=page)</code></pre>

        <h2>Validation des données — indispensable</h2>
        <p>Ne fais <em>jamais</em> confiance aux données reçues ! Un utilisateur peut contourner les validations HTML et envoyer n'importe quoi.</p>
        <pre><code class="language-python">def valider_inscription(data):
    erreurs = []

    # Vérifier le prénom
    if not data.get("prenom", "").strip():
        erreurs.append("Le prénom est obligatoire")

    # Vérifier l'email
    email = data.get("email", "")
    if not email or "@" not in email or "." not in email.split("@")[-1]:
        erreurs.append("Email invalide")

    # Vérifier le mot de passe
    mdp = data.get("mot_de_passe", "")
    if len(mdp) < 8:
        erreurs.append("Mot de passe trop court (8 caractères min)")
    elif not any(c.isdigit() for c in mdp):
        erreurs.append("Le mot de passe doit contenir au moins un chiffre")

    return erreurs

# Dans la vue :
@app.route("/inscription", methods=["GET", "POST"])
def inscription():
    if request.method == "POST":
        erreurs = valider_inscription(request.form)
        if erreurs:
            return render_template("inscription.html", erreurs=erreurs)
        # Tout valide → sauvegarder et rediriger
        return redirect(url_for("confirmation"))
    return render_template("inscription.html")</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — Toujours utiliser le pattern <strong>Post/Redirect/Get</strong> : après traitement d'un POST réussi, redirige vers une page GET avec <code>redirect(url_for(...))</code>. Sinon, si l'utilisateur rafraîchit la page, le formulaire sera soumis une deuxième fois !</div>
      `
    },
    interactiveCode: `# Simulation de traitement de formulaire

def valider_inscription(data):
    """Valide un formulaire d'inscription"""
    erreurs = []

    if not data.get("prenom", "").strip():
        erreurs.append("Le prénom est obligatoire")

    if not data.get("email", "").strip():
        erreurs.append("L'email est obligatoire")
    elif "@" not in data["email"] or "." not in data["email"].split("@")[-1]:
        erreurs.append("Format d'email invalide")

    mdp = data.get("mot_de_passe", "")
    if len(mdp) < 8:
        erreurs.append("Mot de passe trop court (min 8 caractères)")
    elif not any(c.isdigit() for c in mdp):
        erreurs.append("Le mot de passe doit contenir au moins un chiffre")

    return erreurs

# Test avec différentes données
cas_tests = [
    {"prenom": "Alice", "email": "alice@example.com", "mot_de_passe": "Python123"},
    {"prenom": "",      "email": "invalide",          "mot_de_passe": "court"},
    {"prenom": "Bob",   "email": "bob@test.fr",       "mot_de_passe": "sansChiffre"},
]

for i, data in enumerate(cas_tests, 1):
    erreurs = valider_inscription(data)
    print(f"\\nTest {i} :")
    if erreurs:
        for e in erreurs:
            print(f"  ✗ {e}")
    else:
        print(f"  ✓ Formulaire valide !")`,
    exercises: [
      {
        id: 1,
        title: 'Parser une query string',
        description: 'Crée une fonction <code>parser_url(query)</code> qui transforme une query string comme <code>"nom=Alice&age=15&ville=Paris"</code> en dictionnaire Python.',
        starter: 'def parser_url(query):\n    # Transforme "cle1=val1&cle2=val2" en {"cle1": "val1", "cle2": "val2"}\n    pass\n\nprint(parser_url("nom=Alice&age=15&ville=Paris"))\n# {"nom": "Alice", "age": "15", "ville": "Paris"}\nprint(parser_url("q=python&page=2"))\n',
        solution: 'def parser_url(query):\n    resultat = {}\n    for paire in query.split("&"):\n        if "=" in paire:\n            cle, valeur = paire.split("=", 1)\n            resultat[cle] = valeur\n    return resultat\n\nprint(parser_url("nom=Alice&age=15&ville=Paris"))\nprint(parser_url("q=python&page=2"))',
        hint: 'Sépare par "&", puis chaque partie par "=". split("=", 1) évite les problèmes si la valeur contient "="'
      },
      {
        id: 2,
        title: 'Validation de formulaire',
        description: 'Crée une fonction <code>valider(data)</code> qui vérifie qu\'un dict contient "nom" (non vide), "age" (entre 10 et 120) et "email" (contient @). Retourne la liste des erreurs.',
        starter: 'def valider(data):\n    erreurs = []\n    # Vérifie nom, age (10-120), email (contient @)\n    return erreurs\n\nprint(valider({"nom": "Alice", "age": 15, "email": "a@b.fr"}))  # []\nprint(valider({"nom": "", "age": 200, "email": "invalide"}))    # 3 erreurs\n',
        solution: 'def valider(data):\n    erreurs = []\n    if not str(data.get("nom", "")).strip():\n        erreurs.append("Nom obligatoire")\n    age = data.get("age", 0)\n    if not (10 <= age <= 120):\n        erreurs.append("Âge invalide (10-120)")\n    if "@" not in str(data.get("email", "")):\n        erreurs.append("Email invalide")\n    return erreurs\n\nprint(valider({"nom": "Alice", "age": 15, "email": "a@b.fr"}))\nprint(valider({"nom": "", "age": 200, "email": "invalide"}))',
        hint: 'Vérifie chaque champ et ajoute un message à erreurs si invalide'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Comment récupère-t-on un champ POST nommé "email" dans Flask ?',
        options: ['request.get("email")', 'request.form["email"]', 'request.post.email', 'form.get_field("email")'],
        answer: 1,
        explanation: 'request.form["email"] accède aux données d\'un formulaire POST. Pour GET, c\'est request.args.get("email").'
      },
      {
        id: 2,
        question: 'Pourquoi valider les données côté serveur (Python) et pas seulement côté client (HTML) ?',
        options: [
          'Python est plus rapide',
          'Un utilisateur peut contourner les validations HTML et envoyer n\'importe quoi',
          'HTML ne peut pas valider',
          'C\'est juste une convention'
        ],
        answer: 1,
        explanation: 'La validation HTML (required, type...) peut être contournée en modifiant la page ou en envoyant des requêtes directement. La validation serveur est la vraie sécurité.'
      },
      {
        id: 3,
        question: 'Dans une URL /recherche?q=python&page=2, comment lire "page" avec Flask ?',
        options: ['request.form["page"]', 'request.url["page"]', 'request.args.get("page")', 'request.params["page"]'],
        answer: 2,
        explanation: 'Les paramètres de l\'URL (après ?) sont des paramètres GET accessibles via request.args.get("clé").'
      }
    ]
  },
  {
    id: 26,
    emoji: '🗄️',
    title: 'Bases de données',
    level: 4,
    description: 'Stocke tes données durablement avec SQLite !',
    color: '#8b5cf6',
    lesson: {
      title: 'SQLite avec Python',
      content: `
        <h2>Pourquoi une base de données ?</h2>
        <p>Quand tu fermes ton programme Python, toutes les variables disparaissent. Les fichiers JSON sauvent les données, mais ils deviennent ingérables avec des milliers de lignes : pas de recherche rapide, pas de tri, pas de mise à jour partielle...</p>
        <p>Les <strong>bases de données</strong> résolvent tout ça. Elles permettent de stocker, chercher, trier et modifier des millions d'enregistrements en millisecondes.</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — <strong>SQLite</strong> est une base de données légère stockée dans un seul fichier <code>.db</code>. C'est la base de données parfaite pour apprendre : elle ne nécessite aucun serveur, et Python l'inclut directement avec le module <code>sqlite3</code>. Elle est utilisée dans les navigateurs, les apps mobiles, et beaucoup de logiciels !</div>

        <h2>SQL — le langage des bases de données</h2>
        <p>SQL (Structured Query Language) est le langage universel pour parler aux bases de données. Les 4 opérations principales forment l'acronyme <strong>CRUD</strong> :</p>
        <pre><code class="language-python"># CREATE → créer une table (structure)
# INSERT → ajouter des données
# SELECT → lire/chercher des données
# UPDATE → modifier des données
# DELETE → supprimer des données</code></pre>

        <h2>Créer une connexion et une table</h2>
        <pre><code class="language-python">import sqlite3

# Connexion (crée le fichier .db s'il n'existe pas)
conn = sqlite3.connect("ecole.db")
cursor = conn.cursor()   # Curseur pour exécuter des requêtes

# CREATE TABLE : définir la structure
cursor.execute("""
    CREATE TABLE IF NOT EXISTS eleves (
        id      INTEGER PRIMARY KEY AUTOINCREMENT,  -- Clé auto-incrémentée
        nom     TEXT    NOT NULL,                    -- Obligatoire
        age     INTEGER,
        note    REAL,                                -- Décimal
        classe  TEXT    DEFAULT '3ème'               -- Valeur par défaut
    )
""")

conn.commit()   # Valider les changements (IMPORTANT !)
conn.close()    # Fermer la connexion</code></pre>

        <h2>Insérer des données (INSERT)</h2>
        <pre><code class="language-python">conn = sqlite3.connect("ecole.db")
cursor = conn.cursor()

# Insérer un élève
# TOUJOURS utiliser ? pour les valeurs, jamais du f-string !
cursor.execute(
    "INSERT INTO eleves (nom, age, note) VALUES (?, ?, ?)",
    ("Alice", 15, 14.5)   # Tuple de valeurs
)

# Insérer plusieurs enregistrements en une fois
nouveaux = [
    ("Bob",   14, 12.0),
    ("Chloé", 15, 17.5),
    ("David", 15, 9.0),
]
cursor.executemany(
    "INSERT INTO eleves (nom, age, note) VALUES (?, ?, ?)",
    nouveaux
)

conn.commit()
conn.close()</code></pre>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent — Injection SQL !</strong> N'écris <em>jamais</em> <code>f"INSERT INTO eleves WHERE nom = '{nom}'"</code>. Un utilisateur malveillant pourrait passer <code>nom = "'; DROP TABLE eleves; --"</code> et détruire ta base ! Utilise toujours les <code>?</code> (paramètres préparés) : <code>cursor.execute("... WHERE nom = ?", (nom,))</code></div>

        <h2>Lire des données (SELECT)</h2>
        <pre><code class="language-python">conn = sqlite3.connect("ecole.db")
cursor = conn.cursor()

# Lire tous les enregistrements
cursor.execute("SELECT * FROM eleves")
tous = cursor.fetchall()     # Liste de tuples
for eleve in tous:
    print(eleve)   # (1, 'Alice', 15, 14.5, '3ème')

# Sélectionner certaines colonnes et filtrer
cursor.execute("""
    SELECT nom, note
    FROM eleves
    WHERE note >= ?
    ORDER BY note DESC
""", (10,))

admis = cursor.fetchall()
for nom, note in admis:
    print(f"  {nom} : {note}/20")

# Requêtes d'agrégation (statistiques)
cursor.execute("""
    SELECT
        COUNT(*) as nb_eleves,
        AVG(note) as moyenne,
        MAX(note) as maximum,
        MIN(note) as minimum
    FROM eleves
""")
stats = cursor.fetchone()
print(f"Élèves: {stats[0]}, Moyenne: {stats[1]:.1f}")

conn.close()</code></pre>

        <h2>Modifier et supprimer</h2>
        <pre><code class="language-python">conn = sqlite3.connect("ecole.db")
cursor = conn.cursor()

# UPDATE : modifier des enregistrements existants
cursor.execute(
    "UPDATE eleves SET note = ? WHERE nom = ?",
    (15.0, "Alice")   # Nouvelle valeur, condition
)
print(f"Lignes modifiées : {cursor.rowcount}")

# DELETE : supprimer des enregistrements
cursor.execute("DELETE FROM eleves WHERE note < ?", (8,))
print(f"Élèves supprimés : {cursor.rowcount}")

conn.commit()
conn.close()</code></pre>

        <h2>Intégrer SQLite avec Flask</h2>
        <pre><code class="language-python">from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

def get_db():
    conn = sqlite3.connect("ecole.db")
    conn.row_factory = sqlite3.Row  # → résultats comme dicts !
    return conn

@app.route("/api/eleves")
def get_eleves():
    db = get_db()
    eleves = db.execute(
        "SELECT * FROM eleves ORDER BY note DESC"
    ).fetchall()
    db.close()
    return jsonify([dict(e) for e in eleves])  # dict grâce à row_factory

@app.route("/api/eleves", methods=["POST"])
def ajouter_eleve():
    data = request.get_json()
    db = get_db()
    db.execute(
        "INSERT INTO eleves (nom, note) VALUES (?, ?)",
        (data["nom"], data["note"])
    )
    db.commit()
    db.close()
    return jsonify({"message": "Élève ajouté !"}), 201</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — <code>conn.row_factory = sqlite3.Row</code> est une astuce précieuse : elle fait que chaque ligne retournée se comporte comme un dictionnaire, accessible par nom de colonne (<code>row["nom"]</code>) plutôt que par index (<code>row[1]</code>). C'est beaucoup plus lisible !</div>
      `
    },
    interactiveCode: `import sqlite3

# SQLite fonctionne en mémoire dans Pyodide avec ":memory:"
conn = sqlite3.connect(":memory:")
cursor = conn.cursor()

# Créer la table
cursor.execute("""
    CREATE TABLE eleves (
        id    INTEGER PRIMARY KEY AUTOINCREMENT,
        nom   TEXT NOT NULL,
        note  REAL
    )
""")

# Insérer des données
eleves = [("Alice", 15.0), ("Bob", 12.5), ("Chloé", 18.0),
          ("David", 9.5), ("Emma", 14.0)]
cursor.executemany("INSERT INTO eleves (nom, note) VALUES (?, ?)", eleves)
conn.commit()

# Lire tous les élèves
print("=== Tous les élèves ===")
cursor.execute("SELECT nom, note FROM eleves ORDER BY note DESC")
for nom, note in cursor.fetchall():
    print(f"  {nom} : {note}/20")

# Statistiques SQL
cursor.execute("SELECT COUNT(*), AVG(note), MAX(note), MIN(note) FROM eleves")
count, avg, maxi, mini = cursor.fetchone()
print(f"\\n=== Stats ===")
print(f"Effectif : {count} | Moyenne : {avg:.1f} | Max : {maxi} | Min : {mini}")

conn.close()`,
    exercises: [
      {
        id: 1,
        title: 'Base de données produits',
        description: 'Crée une table <code>produits</code> (id, nom, prix, stock), insère 4 produits, puis affiche ceux dont le stock est supérieur à 0.',
        starter: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\n# Crée la table produits\n# Insère 4 produits\n# Affiche les produits disponibles (stock > 0)\n\nconn.close()\n',
        solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\ncursor.execute("""\n    CREATE TABLE produits (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        nom TEXT, prix REAL, stock INTEGER\n    )\n""")\n\nproduits = [("Pomme", 0.50, 100), ("Banane", 0.30, 0),\n            ("Cerise", 2.00, 50), ("Kiwi", 0.80, 0)]\ncursor.executemany("INSERT INTO produits (nom, prix, stock) VALUES (?,?,?)", produits)\nconn.commit()\n\ncursor.execute("SELECT nom, prix, stock FROM produits WHERE stock > 0")\nprint("Produits disponibles :")\nfor nom, prix, stock in cursor.fetchall():\n    print(f"  {nom} : {prix}€ (stock: {stock})")\n\nconn.close()',
        hint: 'CREATE TABLE produits (...), executemany pour les inserts, SELECT ... WHERE stock > 0'
      },
      {
        id: 2,
        title: 'Mise à jour et statistiques',
        description: 'Reprends la base élèves de l\'exemple. Met à jour la note de "Bob" à 15. Puis affiche le nombre d\'élèves admis (note >= 10) et la moyenne de la classe.',
        starter: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE eleves (nom TEXT, note REAL)")\ndata = [("Alice",15),("Bob",12),("Chloé",18),("David",9)]\ncursor.executemany("INSERT INTO eleves VALUES (?,?)", data)\nconn.commit()\n\n# Met à jour la note de Bob à 15\n# Affiche le nombre d\'admis et la moyenne\n\nconn.close()\n',
        solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE eleves (nom TEXT, note REAL)")\ndata = [("Alice",15),("Bob",12),("Chloé",18),("David",9)]\ncursor.executemany("INSERT INTO eleves VALUES (?,?)", data)\nconn.commit()\n\ncursor.execute("UPDATE eleves SET note = ? WHERE nom = ?", (15, "Bob"))\nconn.commit()\n\ncursor.execute("SELECT COUNT(*) FROM eleves WHERE note >= 10")\nadmis = cursor.fetchone()[0]\ncursor.execute("SELECT AVG(note) FROM eleves")\nmoyenne = cursor.fetchone()[0]\nprint(f"Admis : {admis}/4")\nprint(f"Moyenne : {moyenne:.1f}/20")\nconn.close()',
        hint: 'UPDATE eleves SET note=? WHERE nom=? — puis SELECT COUNT(*) et AVG(note)'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Pourquoi utiliser ? au lieu de f-string dans une requête SQL ?',
        options: [
          'C\'est plus court',
          'Pour éviter les injections SQL (faille de sécurité)',
          'Python l\'exige syntaxiquement',
          'Les f-strings ne fonctionnent pas dans sqlite3'
        ],
        answer: 1,
        explanation: 'Une injection SQL peut détruire la base ou voler des données. Les ? sont des paramètres liés que sqlite3 sécurise automatiquement.'
      },
      {
        id: 2,
        question: 'Que fait cursor.fetchall() ?',
        options: [
          'Supprime tous les résultats',
          'Récupère toutes les lignes du résultat SELECT en une liste',
          'Exécute toutes les requêtes en attente',
          'Crée toutes les tables'
        ],
        answer: 1,
        explanation: 'fetchall() retourne toutes les lignes du dernier SELECT comme liste de tuples. fetchone() retourne seulement la première ligne.'
      },
      {
        id: 3,
        question: 'Quel avantage a SQLite par rapport à un fichier JSON ?',
        options: [
          'SQLite est plus facile à lire',
          'JSON est plus rapide',
          'SQLite permet les requêtes (filtres, tris, agrégats) et gère les grands volumes',
          'SQLite ne nécessite pas Python'
        ],
        answer: 2,
        explanation: 'SQLite permet des requêtes complexes (WHERE, ORDER BY, COUNT, AVG…) efficacement sur de grands volumes. JSON recharge tout en mémoire.'
      }
    ]
  },
  {
    id: 27,
    emoji: '🔌',
    title: 'API REST & JSON',
    level: 4,
    description: 'Crée une API que n\'importe quel client peut consommer !',
    color: '#06b6d4',
    lesson: {
      title: 'Construire une API REST avec Flask',
      content: `
        <h2>Qu'est-ce qu'une API REST ?</h2>
        <p>Quand tu ouvres l'app météo sur ton téléphone, elle affiche les données d'un serveur quelque part. Quand tu commandes sur Amazon, le site parle à une dizaine de serveurs différents. Toute cette communication se fait via des <strong>APIs REST</strong>.</p>
        <p>Une <strong>API REST</strong> (Representational State Transfer) est un contrat qui définit comment deux logiciels communiquent via HTTP en échangeant du JSON. Ton Flask peut être cette API !</p>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Les <strong>ressources</strong> sont identifiées par des URLs (<code>/api/eleves</code>, <code>/api/eleves/1</code>) et les <strong>opérations</strong> par les méthodes HTTP. C'est le principe REST : les URLs désignent "quoi", les méthodes HTTP disent "quoi en faire".</div>

        <h2>Le principe CRUD et les méthodes HTTP</h2>
        <p>Chaque opération sur les données correspond à une méthode HTTP :</p>
        <pre><code class="language-python"># CRUD = Create / Read / Update / Delete
# Exemple : API pour gérer des élèves

GET    /api/eleves         → Lire TOUS les élèves (liste)
GET    /api/eleves/42      → Lire l'élève n°42 (un seul)
POST   /api/eleves         → Créer un nouvel élève
PUT    /api/eleves/42      → Remplacer entièrement l'élève n°42
PATCH  /api/eleves/42      → Modifier partiellement l'élève n°42
DELETE /api/eleves/42      → Supprimer l'élève n°42</code></pre>

        <h2>API CRUD complète avec Flask et SQLite</h2>
        <pre><code class="language-python">from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

def get_db():
    conn = sqlite3.connect("ecole.db")
    conn.row_factory = sqlite3.Row
    return conn

# READ ALL — GET /api/eleves
@app.route("/api/eleves", methods=["GET"])
def get_eleves():
    db = get_db()
    eleves = db.execute("SELECT * FROM eleves ORDER BY note DESC").fetchall()
    db.close()
    return jsonify([dict(e) for e in eleves]), 200

# READ ONE — GET /api/eleves/&lt;id&gt;
@app.route("/api/eleves/&lt;int:eleve_id&gt;", methods=["GET"])
def get_eleve(eleve_id):
    db = get_db()
    eleve = db.execute("SELECT * FROM eleves WHERE id = ?", (eleve_id,)).fetchone()
    db.close()
    if eleve is None:
        return jsonify({"erreur": "Élève introuvable"}), 404
    return jsonify(dict(eleve)), 200

# CREATE — POST /api/eleves
@app.route("/api/eleves", methods=["POST"])
def creer_eleve():
    data = request.get_json()

    # Validation des données
    if not data or not data.get("nom"):
        return jsonify({"erreur": "Champ 'nom' obligatoire"}), 400

    db = get_db()
    cursor = db.execute(
        "INSERT INTO eleves (nom, note) VALUES (?, ?)",
        (data["nom"], data.get("note", 0))
    )
    db.commit()
    new_id = cursor.lastrowid
    nouvel = db.execute("SELECT * FROM eleves WHERE id = ?", (new_id,)).fetchone()
    db.close()
    return jsonify(dict(nouvel)), 201   # 201 = Created

# DELETE — DELETE /api/eleves/&lt;id&gt;
@app.route("/api/eleves/&lt;int:eleve_id&gt;", methods=["DELETE"])
def supprimer_eleve(eleve_id):
    db = get_db()
    result = db.execute("DELETE FROM eleves WHERE id = ?", (eleve_id,))
    db.commit()
    db.close()
    if result.rowcount == 0:
        return jsonify({"erreur": "Élève introuvable"}), 404
    return jsonify({"message": f"Élève {eleve_id} supprimé"}), 200</code></pre>

        <h2>Consommer l'API depuis le frontend (JavaScript)</h2>
        <pre><code class="language-python"># Voici comment le navigateur (JavaScript) appelle ton API Flask :
"""
// Lire tous les élèves
fetch('/api/eleves')
  .then(response => response.json())
  .then(eleves => {
    eleves.forEach(e => console.log(e.nom, e.note));
  });

// Créer un élève
fetch('/api/eleves', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({nom: 'Chloé', note: 18})
})
  .then(r => r.json())
  .then(data => console.log('Créé:', data));

// Supprimer l'élève n°3
fetch('/api/eleves/3', {method: 'DELETE'})
  .then(r => console.log(r.status));  // 200 si ok, 404 si absent
"""</code></pre>

        <h2>Bonnes pratiques d'une API</h2>
        <ul>
          <li>Toujours retourner le <strong>bon code HTTP</strong> : 200 (OK), 201 (créé), 400 (données invalides), 401 (non authentifié), 404 (introuvable), 500 (erreur serveur)</li>
          <li>Retourner des <strong>messages d'erreur clairs</strong> en JSON : <code>{"erreur": "Le champ 'nom' est obligatoire"}</code></li>
          <li><strong>Valider toutes les données</strong> reçues avant de les utiliser</li>
          <li>Utiliser des <strong>noms de routes cohérents</strong> : toujours au pluriel pour les collections (<code>/api/eleves</code>), pas d'actions dans l'URL (<code>/api/eleves/supprimer/3</code> → non !)</li>
        </ul>
        <div class="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-4 mb-4"><strong class="text-yellow-400">⚠️ Piège fréquent</strong> — N'oublie pas d'ajouter le header <code>Content-Type: application/json</code> quand tu appelles ton API depuis JavaScript, sinon Flask ne comprend pas que les données sont du JSON et <code>request.get_json()</code> retourne <code>None</code> !</div>
      `
    },
    interactiveCode: `import json

# Simulation d'une mini API REST en mémoire
class MiniAPI:
    def __init__(self):
        self.data = {}
        self.next_id = 1

    def get_all(self, ressource):
        return 200, list(self.data.get(ressource, {}).values())

    def get_one(self, ressource, id):
        item = self.data.get(ressource, {}).get(id)
        if item is None:
            return 404, {"erreur": f"{ressource}/{id} introuvable"}
        return 200, item

    def create(self, ressource, body):
        if ressource not in self.data:
            self.data[ressource] = {}
        item = {"id": self.next_id, **body}
        self.data[ressource][self.next_id] = item
        self.next_id += 1
        return 201, item

    def delete(self, ressource, id):
        if id in self.data.get(ressource, {}):
            del self.data[ressource][id]
            return 200, {"message": "Supprimé"}
        return 404, {"erreur": "Introuvable"}

api = MiniAPI()

# POST /eleves
code, r = api.create("eleves", {"nom": "Alice", "note": 15})
print(f"POST   {code}: {r}")
api.create("eleves", {"nom": "Bob", "note": 12})

# GET /eleves
code, r = api.get_all("eleves")
print(f"GET    {code}: {json.dumps(r)}")

# GET /eleves/1
code, r = api.get_one("eleves", 1)
print(f"GET/1  {code}: {r}")

# DELETE /eleves/1
code, r = api.delete("eleves", 1)
print(f"DELETE {code}: {r}")

# GET après delete
code, r = api.get_one("eleves", 1)
print(f"GET/1  {code}: {r}")`,
    exercises: [
      {
        id: 1,
        title: 'Sérialiser une API response',
        description: 'Crée une fonction <code>api_response(code, données, message=None)</code> qui retourne un dict JSON standardisé avec status, data et message.',
        starter: 'import json\n\ndef api_response(code, donnees, message=None):\n    # Retourne {"status": code, "data": donnees, "message": message}\n    pass\n\nprint(json.dumps(api_response(200, [{"id":1,"nom":"Alice"}])))\nprint(json.dumps(api_response(404, None, "Élève introuvable")))\nprint(json.dumps(api_response(201, {"id":2,"nom":"Bob"}, "Créé avec succès")))\n',
        solution: 'import json\n\ndef api_response(code, donnees, message=None):\n    return {"status": code, "data": donnees, "message": message}\n\nprint(json.dumps(api_response(200, [{"id":1,"nom":"Alice"}])))\nprint(json.dumps(api_response(404, None, "Élève introuvable")))\nprint(json.dumps(api_response(201, {"id":2,"nom":"Bob"}, "Créé avec succès")))',
        hint: 'Retourne simplement {"status": code, "data": donnees, "message": message}'
      },
      {
        id: 2,
        title: 'Filtrer une API',
        description: 'Simule un endpoint GET /api/produits avec des filtres. La fonction reçoit une liste de produits et des paramètres (categorie, prix_max) et retourne les produits filtrés.',
        starter: 'def endpoint_produits(produits, categorie=None, prix_max=None):\n    # Filtre par categorie si fourni\n    # Filtre par prix <= prix_max si fourni\n    # Retourne la liste filtrée\n    pass\n\nproduits = [\n    {"nom": "Pomme",  "prix": 0.5,  "categorie": "fruit"},\n    {"nom": "Lait",   "prix": 1.2,  "categorie": "dairy"},\n    {"nom": "Banane", "prix": 0.3,  "categorie": "fruit"},\n    {"nom": "Beurre", "prix": 2.5,  "categorie": "dairy"},\n]\nprint(endpoint_produits(produits, categorie="fruit"))\nprint(endpoint_produits(produits, prix_max=1.0))\n',
        solution: 'def endpoint_produits(produits, categorie=None, prix_max=None):\n    result = produits\n    if categorie:\n        result = [p for p in result if p["categorie"] == categorie]\n    if prix_max is not None:\n        result = [p for p in result if p["prix"] <= prix_max]\n    return result\n\nproduits = [\n    {"nom": "Pomme",  "prix": 0.5,  "categorie": "fruit"},\n    {"nom": "Lait",   "prix": 1.2,  "categorie": "dairy"},\n    {"nom": "Banane", "prix": 0.3,  "categorie": "fruit"},\n    {"nom": "Beurre", "prix": 2.5,  "categorie": "dairy"},\n]\nprint(endpoint_produits(produits, categorie="fruit"))\nprint(endpoint_produits(produits, prix_max=1.0))',
        hint: 'Utilise des compréhensions de liste avec des conditions if sur categorie et prix'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Quelle méthode HTTP crée une nouvelle ressource ?',
        options: ['GET', 'POST', 'CREATE', 'NEW'],
        answer: 1,
        explanation: 'POST crée une nouvelle ressource. GET lit, PUT/PATCH modifie, DELETE supprime. C\'est la convention REST CRUD.'
      },
      {
        id: 2,
        question: 'Quel code HTTP retourner après une création réussie ?',
        options: ['200 OK', '201 Created', '204 No Content', '302 Found'],
        answer: 1,
        explanation: '201 Created indique qu\'une ressource a été créée avec succès. 200 OK est pour les requêtes réussies sans création.'
      },
      {
        id: 3,
        question: 'Comment une API REST transmet-elle généralement ses données ?',
        options: ['XML seulement', 'HTML', 'JSON', 'CSV'],
        answer: 2,
        explanation: 'JSON est le format standard des APIs REST modernes — léger, lisible, et supporté nativement par tous les langages.'
      }
    ]
  },
  {
    id: 28,
    emoji: '🚀',
    title: 'Projet Full-Stack',
    level: 4,
    description: 'Assemble tout : frontend HTML + backend Flask + base de données !',
    color: '#f97316',
    lesson: {
      title: 'Mini app web full-stack',
      content: `
        <h2>Tu arrives au bout du voyage !</h2>
        <p>C'est le module final. Tu as appris Python de zéro jusqu'aux APIs REST. Il est temps d'<strong>assembler toutes les pièces</strong> en une vraie application web full-stack. C'est ce que font les développeurs dans les entreprises tech !</p>
        <p>Full-stack signifie que tu maîtrises à la fois le <em>frontend</em> (ce que l'utilisateur voit) et le <em>backend</em> (le serveur, la base de données, la logique). Peu de développeurs maîtrisent les deux — toi, tu y es !</p>

        <h2>Architecture d'une application web complète</h2>
        <p>Voici comment toutes les couches s'articulent :</p>
        <pre><code class="language-python">mon_app/
├── app.py              ← Point d'entrée Flask (routes, logique métier)
├── database.py         ← Couche d'accès aux données (SQLite)
├── templates/          ← Vues HTML (Jinja2)
│   ├── base.html       ← Structure commune (nav, header, footer)
│   ├── index.html      ← Page d'accueil
│   └── messages.html   ← Liste des messages
└── static/             ← Fichiers statiques
    ├── style.css        ← CSS pour l'apparence
    └── script.js        ← JavaScript pour les appels API

# Flux d'une requête :
# Navigateur → Flask (route) → SQLite (données) → Template (rendu) → Navigateur</code></pre>

        <h2>La couche base de données (database.py)</h2>
        <p>On isole la logique base de données dans un fichier séparé — bonne pratique de séparation des responsabilités :</p>
        <pre><code class="language-python"># database.py
import sqlite3

DATABASE = "app.db"

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row   # Accès par nom de colonne
    return conn

def init_db():
    """Initialise la base de données au démarrage."""
    db = get_db()
    db.execute("""
        CREATE TABLE IF NOT EXISTS messages (
            id        INTEGER PRIMARY KEY AUTOINCREMENT,
            auteur    TEXT    NOT NULL,
            contenu   TEXT    NOT NULL,
            date      TEXT    DEFAULT CURRENT_TIMESTAMP
        )
    """)
    db.commit()
    db.close()
    print("Base de données initialisée !")</code></pre>

        <h2>Le backend Flask (app.py)</h2>
        <p>Flask s'occupe du routing et fait le lien entre les requêtes HTTP, la base de données et les templates :</p>
        <pre><code class="language-python"># app.py
from flask import Flask, jsonify, request, render_template, redirect, url_for
from database import get_db, init_db

app = Flask(__name__)

# --- Pages HTML ---

@app.route("/")
def index():
    """Page d'accueil : affiche les messages via template Jinja2."""
    db = get_db()
    messages = db.execute(
        "SELECT * FROM messages ORDER BY date DESC LIMIT 20"
    ).fetchall()
    db.close()
    return render_template("index.html", messages=messages)

# --- API JSON ---

@app.route("/api/messages", methods=["GET"])
def api_get_messages():
    """API : retourne les messages en JSON."""
    db = get_db()
    msgs = db.execute("SELECT * FROM messages ORDER BY date DESC").fetchall()
    db.close()
    return jsonify([dict(m) for m in msgs]), 200

@app.route("/api/messages", methods=["POST"])
def api_post_message():
    """API : crée un nouveau message."""
    data = request.get_json()

    # Validation
    if not data or not data.get("auteur", "").strip():
        return jsonify({"erreur": "Auteur obligatoire"}), 400
    if not data.get("contenu", "").strip():
        return jsonify({"erreur": "Contenu obligatoire"}), 400

    db = get_db()
    db.execute(
        "INSERT INTO messages (auteur, contenu) VALUES (?, ?)",
        (data["auteur"].strip(), data["contenu"].strip())
    )
    db.commit()
    db.close()
    return jsonify({"message": "Publié !"}), 201

if __name__ == "__main__":
    init_db()
    app.run(debug=True)</code></pre>

        <h2>Le template HTML avec JavaScript (templates/index.html)</h2>
        <pre><code class="language-python">"""
{% extends "base.html" %}
{% block contenu %}

&lt;!-- Affichage des messages depuis Jinja2 (rendu côté serveur) --&gt;
&lt;div id="messages-container"&gt;
  {% for msg in messages %}
    &lt;div class="message"&gt;
      &lt;b&gt;{{ msg.auteur }}&lt;/b&gt; &lt;span&gt;{{ msg.date }}&lt;/span&gt;
      &lt;p&gt;{{ msg.contenu }}&lt;/p&gt;
    &lt;/div&gt;
  {% else %}
    &lt;p&gt;Aucun message pour l'instant.&lt;/p&gt;
  {% endfor %}
&lt;/div&gt;

&lt;!-- Formulaire d'envoi (appelle l'API via JavaScript) --&gt;
&lt;form id="form-message"&gt;
  &lt;input id="auteur" placeholder="Ton pseudo" required&gt;
  &lt;textarea id="contenu" placeholder="Ton message" required&gt;&lt;/textarea&gt;
  &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
// Envoyer via l'API REST (sans recharger la page !)
document.getElementById('form-message').addEventListener('submit', async (e) => {
  e.preventDefault();   // Empêche le rechargement de la page

  const auteur  = document.getElementById('auteur').value;
  const contenu = document.getElementById('contenu').value;

  const response = await fetch('/api/messages', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({auteur, contenu})
  });

  if (response.ok) {
    // Recharger la page pour voir le nouveau message
    location.reload();
  } else {
    const erreur = await response.json();
    alert('Erreur : ' + erreur.erreur);
  }
});
&lt;/script&gt;

{% endblock %}
"""</code></pre>
        <div class="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 mb-4"><strong class="text-blue-400">💡 Bon à savoir</strong> — Tu viens d'apprendre le pattern utilisé par des milliers d'applications en production : Flask comme serveur, SQLite pour les données, Jinja2 pour le rendu, et JavaScript pour les interactions dynamiques. C'est l'architecture de base de la plupart des apps web Python !</div>

        <h2>Les prochaines étapes — que faire après ?</h2>
        <p>Tu as les bases. Voici comment continuer :</p>
        <ul>
          <li><strong>Améliore ton app</strong> : ajoute l'authentification (sessions Flask), la pagination, la recherche</li>
          <li><strong>Apprends CSS</strong> : rends tes pages belles avec Tailwind CSS ou Bootstrap</li>
          <li><strong>Découvre Flask-SQLAlchemy</strong> : un ORM qui remplace les requêtes SQL brutes par du Python</li>
          <li><strong>Déploie sur le web</strong> : Render, Railway, PythonAnywhere — ton app accessible à tout le monde !</li>
          <li><strong>Explore React ou Vue</strong> : frameworks JavaScript pour des interfaces encore plus dynamiques</li>
          <li><strong>Contribue à des projets open source</strong> : le meilleur moyen de progresser vite</li>
        </ul>
      `
    },
    interactiveCode: `import sqlite3, json
from datetime import datetime

# Simulation complète d'une mini app de messages

# --- Couche base de données ---
conn = sqlite3.connect(":memory:")
conn.row_factory = sqlite3.Row
conn.execute("""
    CREATE TABLE messages (
        id      INTEGER PRIMARY KEY AUTOINCREMENT,
        auteur  TEXT NOT NULL,
        contenu TEXT NOT NULL,
        date    TEXT
    )
""")
conn.commit()

def ajouter_message(auteur, contenu):
    conn.execute("INSERT INTO messages (auteur, contenu, date) VALUES (?,?,?)",
                 (auteur, contenu, datetime.now().strftime("%H:%M:%S")))
    conn.commit()

def get_messages():
    rows = conn.execute("SELECT * FROM messages ORDER BY id DESC").fetchall()
    return [dict(r) for r in rows]

# --- Simulation du backend (logique Flask) ---
def api_post_message(body):
    if not body.get("auteur") or not body.get("contenu"):
        return 400, {"erreur": "Champs manquants"}
    ajouter_message(body["auteur"], body["contenu"])
    return 201, {"message": "Publié !"}

def api_get_messages():
    return 200, get_messages()

# --- Simulation du frontend ---
print("=== POST messages ===")
for msg in [
    {"auteur": "Alice",  "contenu": "Salut tout le monde !"},
    {"auteur": "Bob",    "contenu": "Coucou Alice !"},
    {"auteur": "Chloé",  "contenu": "Python c'est trop bien"},
    {"auteur": "",       "contenu": "test"},  # invalide
]:
    code, r = api_post_message(msg)
    print(f"  {code}: {r}")

print("\\n=== GET messages ===")
code, msgs = api_get_messages()
for m in msgs:
    print(f"  [{m['date']}] {m['auteur']}: {m['contenu']}")

conn.close()`,
    exercises: [
      {
        id: 1,
        title: 'Mini gestionnaire de tâches',
        description: 'Crée un mini backend en mémoire avec SQLite pour gérer des tâches (titre, statut done/todo). Implémente add_task(titre), complete_task(id), get_tasks(only_todo=False).',
        starter: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\nconn.execute("CREATE TABLE taches (id INTEGER PRIMARY KEY AUTOINCREMENT, titre TEXT, done INTEGER DEFAULT 0)")\nconn.commit()\n\ndef add_task(titre):\n    pass\n\ndef complete_task(id):\n    pass\n\ndef get_tasks(only_todo=False):\n    pass\n\nadd_task("Apprendre Flask")\nadd_task("Créer une API")\nadd_task("Déployer l\'app")\ncomplete_task(1)\nprint("Toutes :", get_tasks())\nprint("À faire :", get_tasks(only_todo=True))\n',
        solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\nconn.execute("CREATE TABLE taches (id INTEGER PRIMARY KEY AUTOINCREMENT, titre TEXT, done INTEGER DEFAULT 0)")\nconn.commit()\n\ndef add_task(titre):\n    conn.execute("INSERT INTO taches (titre) VALUES (?)", (titre,))\n    conn.commit()\n\ndef complete_task(id):\n    conn.execute("UPDATE taches SET done=1 WHERE id=?", (id,))\n    conn.commit()\n\ndef get_tasks(only_todo=False):\n    if only_todo:\n        rows = conn.execute("SELECT * FROM taches WHERE done=0").fetchall()\n    else:\n        rows = conn.execute("SELECT * FROM taches").fetchall()\n    return [{"id": r[0], "titre": r[1], "done": bool(r[2])} for r in rows]\n\nadd_task("Apprendre Flask")\nadd_task("Créer une API")\nadd_task("Déployer l\'app")\ncomplete_task(1)\nprint("Toutes :", get_tasks())\nprint("À faire :", get_tasks(only_todo=True))',
        hint: 'INSERT INTO taches (titre) VALUES (?), UPDATE ... SET done=1 WHERE id=?, SELECT ... WHERE done=0'
      },
      {
        id: 2,
        title: 'Pipeline données complet',
        description: 'Crée une fonction qui lit une liste de dicts (comme une API JSON), filtre les valides (nom non vide + score >= 0), les insère en base SQLite, et retourne les stats (count, avg).',
        starter: 'import sqlite3\n\ndef pipeline(donnees_json):\n    conn = sqlite3.connect(":memory:")\n    conn.execute("CREATE TABLE scores (nom TEXT, score INTEGER)")\n    # 1. Filtre les données valides\n    # 2. Insère en base\n    # 3. Retourne {"count": ..., "moyenne": ...}\n    pass\n\ndonnees = [\n    {"nom": "Alice", "score": 85},\n    {"nom": "",      "score": 90},\n    {"nom": "Bob",   "score": -5},\n    {"nom": "Chloé", "score": 92},\n    {"nom": "David", "score": 78},\n]\nprint(pipeline(donnees))\n',
        solution: 'import sqlite3\n\ndef pipeline(donnees_json):\n    conn = sqlite3.connect(":memory:")\n    conn.execute("CREATE TABLE scores (nom TEXT, score INTEGER)")\n    valides = [d for d in donnees_json if d.get("nom") and d.get("score", -1) >= 0]\n    conn.executemany("INSERT INTO scores VALUES (?,?)", [(d["nom"], d["score"]) for d in valides])\n    conn.commit()\n    row = conn.execute("SELECT COUNT(*), AVG(score) FROM scores").fetchone()\n    conn.close()\n    return {"count": row[0], "moyenne": round(row[1], 1) if row[1] else 0}\n\ndonnees = [\n    {"nom": "Alice", "score": 85},\n    {"nom": "",      "score": 90},\n    {"nom": "Bob",   "score": -5},\n    {"nom": "Chloé", "score": 92},\n    {"nom": "David", "score": 78},\n]\nprint(pipeline(donnees))',
        hint: 'Filtre avec compréhension, executemany pour insérer, SELECT COUNT(*), AVG(score) pour les stats'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Dans une app Flask full-stack, que contient le dossier templates/ ?',
        options: ['Les fichiers Python', 'Les fichiers HTML avec Jinja2', 'Les fichiers CSS', 'La base de données'],
        answer: 1,
        explanation: 'templates/ contient les fichiers .html avec la syntaxe Jinja2. static/ contient les CSS, JS et images.'
      },
      {
        id: 2,
        question: 'Que fait conn.row_factory = sqlite3.Row ?',
        options: [
          'Crée les colonnes automatiquement',
          'Retourne les résultats comme des dictionnaires accessibles par nom',
          'Accélère les requêtes',
          'Active les transactions'
        ],
        answer: 1,
        explanation: 'sqlite3.Row permet d\'accéder aux colonnes par nom (row["nom"]) au lieu de par index (row[0]). Plus lisible.'
      },
      {
        id: 3,
        question: 'Quel est le flux d\'une requête dans une app Flask full-stack ?',
        options: [
          'Navigateur → HTML → Python → DB → HTML → Navigateur',
          'DB → Flask → Navigateur → HTML',
          'Navigateur → Flask (route) → DB → JSON/HTML → Navigateur',
          'Python → HTML → DB → Navigateur'
        ],
        answer: 2,
        explanation: 'Le navigateur envoie une requête HTTP → Flask trouve la route correspondante → interroge la DB si besoin → retourne HTML (render_template) ou JSON (jsonify) → le navigateur affiche.'
      }
    ]
  }
];
