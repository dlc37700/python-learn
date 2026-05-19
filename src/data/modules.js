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
        <p>Python est un langage de programmation — c'est comme une <strong>recette de cuisine pour ton ordinateur</strong> ! Tu écris des instructions, et l'ordinateur les exécute exactement comme tu les as écrites.</p>
        <div class="info-box">
          <p>🐍 Python est utilisé par des millions de développeurs dans le monde entier : pour créer des jeux, des sites web, de l'intelligence artificielle et bien plus encore !</p>
        </div>

        <h2>Ta première ligne de code</h2>
        <p>La commande la plus importante pour commencer est <code>print()</code>. Elle permet d'<strong>afficher du texte</strong> à l'écran.</p>
        <pre><code class="language-python">print("Bonjour le monde !")
print("Je m'appelle Python")</code></pre>

        <div class="tip-box">
          <p>💡 Le texte doit être entre guillemets : simples <code>'bonjour'</code> ou doubles <code>"bonjour"</code>, les deux fonctionnent !</p>
        </div>

        <h2>Les commentaires</h2>
        <p>Un commentaire commence par <code>#</code>. Python l'<strong>ignore complètement</strong> — c'est pour toi, pour laisser des notes dans ton code.</p>
        <pre><code class="language-python"># Ceci est un commentaire, Python l'ignore
print("Bonjour !")  # Commentaire en fin de ligne</code></pre>

        <h2>Essaie par toi-même !</h2>
        <p>Tu peux modifier le code ci-dessous et cliquer sur <strong>Exécuter</strong> pour voir le résultat :</p>
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
        <h2>C'est quoi une variable ?</h2>
        <p>Une variable, c'est comme une <strong>boîte avec une étiquette</strong>. Tu mets une valeur dedans, tu lui donnes un nom, et tu peux la réutiliser plus tard !</p>
        <div class="info-box">
          <p>📦 Imagine : tu as une boîte étiquetée "age". Tu mets le nombre 15 dedans. Plus tard, tu peux demander "quel est mon age ?" et Python te répond 15 !</p>
        </div>

        <h2>Déclarer une variable</h2>
        <p>C'est très simple : <code>nom = valeur</code></p>
        <pre><code class="language-python">age = 15
prenom = "Alice"
print(age)      # Affiche 15
print(prenom)   # Affiche Alice</code></pre>

        <h2>Les types de variables</h2>
        <p>Il existe plusieurs types de données en Python :</p>

        <h3>🔢 int — les entiers</h3>
        <pre><code class="language-python">age = 15
annee = 2024
score = -5</code></pre>

        <h3>📝 str — les chaînes de caractères</h3>
        <pre><code class="language-python">prenom = "Alice"
message = 'Bonjour !'
ville = "Paris"</code></pre>

        <h3>🔣 float — les décimaux</h3>
        <pre><code class="language-python">taille = 1.75
pi = 3.14
temperature = -2.5</code></pre>

        <h3>✅ bool — les booléens</h3>
        <pre><code class="language-python">etudiant = True
majeur = False</code></pre>

        <div class="tip-box">
          <p>💡 Tu peux connaître le type d'une variable avec <code>type()</code> : <code>print(type(age))</code> affiche <code>&lt;class 'int'&gt;</code></p>
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
        <h2>Les opérateurs arithmétiques</h2>
        <p>Python peut faire des calculs comme une calculatrice, et même plus !</p>
        <pre><code class="language-python">a = 10
b = 3

print(a + b)   # Addition : 13
print(a - b)   # Soustraction : 7
print(a * b)   # Multiplication : 30
print(a / b)   # Division : 3.333...
print(a // b)  # Division entière : 3
print(a % b)   # Modulo (reste) : 1
print(a ** b)  # Puissance : 1000</code></pre>

        <div class="info-box">
          <p>🧮 <code>//</code> donne la partie entière de la division : 10 // 3 = 3<br>
          <code>%</code> donne le reste : 10 % 3 = 1 (car 10 = 3×3 + 1)</p>
        </div>

        <h2>Concaténation de chaînes</h2>
        <p>Le <code>+</code> avec des chaînes les <strong>colle ensemble</strong> !</p>
        <pre><code class="language-python">prenom = "Alice"
nom = "Martin"
print("Bonjour " + prenom + " " + nom + " !")
# Affiche : Bonjour Alice Martin !</code></pre>

        <h2>Conversion de types</h2>
        <p>Parfois on a besoin de convertir un type en un autre :</p>
        <pre><code class="language-python">age = 15
message = "J'ai " + str(age) + " ans"
print(message)  # J'ai 15 ans

texte = "42"
nombre = int(texte)
print(nombre + 8)  # 50</code></pre>

        <div class="tip-box">
          <p>💡 On ne peut pas additionner un nombre et une chaîne directement ! Il faut d'abord convertir avec <code>str()</code> ou <code>int()</code>.</p>
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
        <h2>Si... sinon...</h2>
        <p>Les conditions permettent à ton programme de prendre des <strong>décisions</strong>. Comme dans la vraie vie : "Si j'ai faim, je mange. Sinon, je continue."</p>

        <h2>Le if basique</h2>
        <pre><code class="language-python">age = 16

if age >= 18:
    print("Tu es majeur !")
else:
    print("Tu es mineur.")</code></pre>

        <div class="info-box">
          <p>⚠️ <strong>L'indentation est obligatoire !</strong> Le code dans un if doit être décalé de 4 espaces. C'est ainsi que Python sait ce qui appartient au bloc if.</p>
        </div>

        <h2>if / elif / else</h2>
        <p><code>elif</code> signifie "else if" — c'est pour tester plusieurs conditions :</p>
        <pre><code class="language-python">note = 15

if note >= 16:
    print("Excellent !")
elif note >= 12:
    print("Bien")
elif note >= 10:
    print("Passable")
else:
    print("À améliorer")</code></pre>

        <h2>Les opérateurs de comparaison</h2>
        <pre><code class="language-python">a == b   # Égal à
a != b   # Différent de
a < b    # Inférieur à
a > b    # Supérieur à
a <= b   # Inférieur ou égal
a >= b   # Supérieur ou égal</code></pre>

        <h2>Les opérateurs logiques</h2>
        <pre><code class="language-python">age = 16
permis = True

if age >= 18 and permis:
    print("Tu peux conduire !")

if age < 12 or age > 65:
    print("Tarif réduit")

if not permis:
    print("Pas de permis !")</code></pre>

        <div class="tip-box">
          <p>💡 <code>and</code> : les deux conditions doivent être vraies<br>
          <code>or</code> : au moins une condition doit être vraie<br>
          <code>not</code> : inverse la condition</p>
        </div>
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
        <h2>À quoi servent les boucles ?</h2>
        <p>Imagine que tu doives afficher "Bonjour" 100 fois. Tu n'allais quand même pas écrire 100 lignes print() ! Les boucles permettent de <strong>répéter des instructions</strong>.</p>

        <h2>La boucle for</h2>
        <p>La boucle <code>for</code> répète un nombre <strong>connu</strong> de fois :</p>
        <pre><code class="language-python">for i in range(5):
    print(i)
# Affiche : 0, 1, 2, 3, 4</code></pre>

        <h3>range() en détail</h3>
        <pre><code class="language-python">range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8 (pas de 2)
range(5, 0, -1) # 5, 4, 3, 2, 1 (à rebours)</code></pre>

        <h2>La boucle while</h2>
        <p>La boucle <code>while</code> continue tant qu'une <strong>condition est vraie</strong> :</p>
        <pre><code class="language-python">compteur = 0
while compteur < 5:
    print(compteur)
    compteur += 1  # IMPORTANT : sinon boucle infinie !</code></pre>

        <div class="info-box">
          <p>🔄 <strong>for</strong> : quand tu sais combien de fois répéter<br>
          <strong>while</strong> : quand tu répètes jusqu'à ce qu'une condition change</p>
        </div>

        <h2>break et continue</h2>
        <pre><code class="language-python"># break : quitte la boucle immédiatement
for i in range(10):
    if i == 5:
        break
    print(i)  # Affiche 0, 1, 2, 3, 4

# continue : saute à l'itération suivante
for i in range(5):
    if i == 2:
        continue
    print(i)  # Affiche 0, 1, 3, 4</code></pre>

        <div class="tip-box">
          <p>💡 Attention aux boucles infinies avec while ! Assure-toi toujours que la condition finit par devenir False.</p>
        </div>
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
        <h2>Qu'est-ce qu'une liste ?</h2>
        <p>Une liste, c'est comme un <strong>tiroir avec plusieurs compartiments</strong>. Tu peux y stocker plusieurs valeurs dans une seule variable !</p>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]
notes = [14, 17, 12, 15, 18]
mix = [42, "bonjour", True, 3.14]</code></pre>

        <h2>Accéder aux éléments</h2>
        <p>Chaque élément a un <strong>indice</strong> (position), qui commence à 0 :</p>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]
print(fruits[0])   # pomme (premier)
print(fruits[1])   # banane (deuxième)
print(fruits[-1])  # cerise (dernier)</code></pre>

        <div class="info-box">
          <p>🔢 En Python, on compte à partir de 0 ! Le premier élément est à l'index 0, le deuxième à l'index 1, etc.</p>
        </div>

        <h2>Modifier une liste</h2>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]

fruits[0] = "fraise"    # Modifier
fruits.append("mangue") # Ajouter à la fin
fruits.remove("banane") # Supprimer par valeur
fruits.sort()           # Trier

print(len(fruits))      # Nombre d'éléments</code></pre>

        <h2>Parcourir une liste</h2>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]

for fruit in fruits:
    print(fruit)

# Avec l'indice
for i in range(len(fruits)):
    print(i, fruits[i])</code></pre>

        <div class="tip-box">
          <p>💡 <code>len(liste)</code> donne le nombre d'éléments. <code>liste[-1]</code> donne le dernier élément. Pratique !</p>
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
        <h2>Qu'est-ce qu'une fonction ?</h2>
        <p>Une fonction, c'est comme une <strong>recette réutilisable</strong>. Tu la définis une fois, et tu peux l'utiliser autant de fois que tu veux !</p>
        <div class="info-box">
          <p>🔧 Tu utilises déjà des fonctions intégrées : <code>print()</code>, <code>len()</code>, <code>range()</code>. Maintenant tu vas créer les tiennes !</p>
        </div>

        <h2>Définir une fonction</h2>
        <pre><code class="language-python">def saluer():
    print("Bonjour tout le monde !")

# Appeler la fonction
saluer()  # Affiche : Bonjour tout le monde !</code></pre>

        <h2>Les paramètres</h2>
        <p>Les paramètres permettent de passer des données à la fonction :</p>
        <pre><code class="language-python">def saluer(prenom):
    print("Bonjour " + prenom + " !")

saluer("Alice")  # Bonjour Alice !
saluer("Bob")    # Bonjour Bob !</code></pre>

        <h2>Le return</h2>
        <p><code>return</code> permet de <strong>renvoyer</strong> une valeur depuis la fonction :</p>
        <pre><code class="language-python">def calculer_carre(nombre):
    return nombre * nombre

resultat = calculer_carre(5)
print(resultat)  # 25

print(calculer_carre(7))  # 49</code></pre>

        <h2>Plusieurs paramètres</h2>
        <pre><code class="language-python">def additionner(a, b):
    return a + b

def aire_rectangle(longueur, largeur):
    return longueur * largeur

print(additionner(3, 5))         # 8
print(aire_rectangle(4, 6))      # 24</code></pre>

        <div class="tip-box">
          <p>💡 Une bonne fonction fait <strong>une seule chose</strong> mais la fait bien. Ça rend le code lisible et réutilisable !</p>
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
        <h2>Les f-strings</h2>
        <p>Les <strong>f-strings</strong> sont la façon la plus moderne et lisible d'insérer des variables dans du texte. Il suffit de mettre un <code>f</code> devant les guillemets :</p>
        <pre><code class="language-python">prenom = "Alice"
age = 15
print(f"Bonjour {prenom}, tu as {age} ans !")
print(f"Dans 5 ans, tu auras {age + 5} ans.")</code></pre>
        <div class="tip-box"><p>✅ Tu peux même faire des calculs directement entre les accolades !</p></div>

        <h2>Le slicing (découpage)</h2>
        <p>On peut extraire une partie d'une chaîne avec <code>[début:fin:pas]</code> :</p>
        <pre><code class="language-python">mot = "Python"
print(mot[0:3])   # Pyt  (indices 0, 1, 2)
print(mot[2:])    # thon (du 3ème jusqu'à la fin)
print(mot[:4])    # Pyth (du début jusqu'au 4ème)
print(mot[-3:])   # hon  (les 3 derniers)
print(mot[::-1])  # nohtyP (inversé !)</code></pre>

        <h2>Méthodes essentielles</h2>
        <pre><code class="language-python">texte = "  Bonjour le Monde  "
print(texte.upper())          # BONJOUR LE MONDE
print(texte.lower())          # bonjour le monde
print(texte.strip())          # Bonjour le Monde (sans espaces)
print(texte.replace("Monde", "Python"))  # Bonjour le Python

mots = "pomme,banane,cerise"
liste = mots.split(",")       # ['pomme', 'banane', 'cerise']
print(liste)
print(" - ".join(liste))      # pomme - banane - cerise</code></pre>

        <h2>Rechercher dans une chaîne</h2>
        <pre><code class="language-python">phrase = "Python est super"
print(len(phrase))             # 16 (longueur)
print("est" in phrase)         # True (contient "est" ?)
print(phrase.startswith("Py")) # True
print(phrase.count("e"))       # 2 (nombre de "e")</code></pre>
        <div class="info-box"><p>💡 Les chaînes sont immuables : tu ne peux pas modifier un caractère directement, mais tu peux créer une nouvelle chaîne.</p></div>
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
        <h2>Qu'est-ce qu'un dictionnaire ?</h2>
        <p>Un dictionnaire, c'est comme un vrai dictionnaire : tu cherches un <strong>mot (clé)</strong> et tu trouves sa <strong>définition (valeur)</strong>. En Python, on associe des clés à des valeurs avec <code>{ clé: valeur }</code>.</p>
        <pre><code class="language-python">eleve = {
    "prenom": "Alice",
    "age": 15,
    "moyenne": 14.5,
    "redoublant": False
}
print(eleve["prenom"])  # Alice
print(eleve["age"])     # 15</code></pre>
        <div class="info-box"><p>💡 Contrairement aux listes, on accède aux éléments par leur clé, pas par leur position.</p></div>

        <h2>Modifier un dictionnaire</h2>
        <pre><code class="language-python">eleve = {"prenom": "Alice", "age": 15}
eleve["age"] = 16          # Modifier une valeur
eleve["ville"] = "Paris"   # Ajouter une nouvelle clé
del eleve["ville"]         # Supprimer une clé
print(eleve)</code></pre>

        <h2>Parcourir un dictionnaire</h2>
        <pre><code class="language-python">scores = {"Alice": 18, "Bob": 14, "Chloé": 16}

for prenom in scores:
    print(prenom)                          # clés seulement

for prenom, note in scores.items():
    print(f"{prenom} : {note}/20")        # clés + valeurs

print(list(scores.keys()))   # ['Alice', 'Bob', 'Chloé']
print(list(scores.values())) # [18, 14, 16]</code></pre>

        <h2>Méthodes utiles</h2>
        <pre><code class="language-python">d = {"a": 1, "b": 2}
print(d.get("c", 0))  # 0 (valeur par défaut si clé absente)
print("a" in d)       # True
print(len(d))         # 2</code></pre>
        <div class="tip-box"><p>✅ Utilise .get() pour éviter une erreur si la clé n'existe pas.</p></div>
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
        <p>Quand Python rencontre une erreur, il s'arrête. Mais avec <strong>try / except</strong>, tu peux <em>attraper</em> l'erreur et décider quoi faire — comme un filet de sécurité !</p>
        <pre><code class="language-python">try:
    resultat = 10 / 0
except ZeroDivisionError:
    print("Impossible de diviser par zéro !")</code></pre>
        <div class="info-box"><p>💡 Python essaie d'exécuter le bloc <code>try</code>. Si une erreur survient, il saute dans le bloc <code>except</code> correspondant.</p></div>

        <h2>Attraper plusieurs erreurs</h2>
        <pre><code class="language-python">try:
    x = int("abc")     # ValueError : "abc" n'est pas un entier
    y = 10 / 0         # ZeroDivisionError
except ValueError:
    print("Ce n'est pas un nombre valide !")
except ZeroDivisionError:
    print("Division par zéro impossible !")
except Exception as e:
    print(f"Erreur inattendue : {e}")</code></pre>

        <h2>else et finally</h2>
        <pre><code class="language-python">try:
    nombre = int("42")
except ValueError:
    print("Erreur de conversion")
else:
    print(f"Conversion réussie : {nombre}")  # Si pas d'erreur
finally:
    print("Ce bloc s'exécute toujours !")    # Toujours exécuté</code></pre>

        <h2>Erreurs courantes en Python</h2>
        <pre><code class="language-python">NameError       # Variable inexistante
TypeError       # Mauvais type (ex: 1 + "a")
ValueError      # Valeur invalide (ex: int("abc"))
IndexError      # Index hors limite (ex: liste[99])
KeyError        # Clé absente dans un dictionnaire
ZeroDivisionError  # Division par zéro</code></pre>
        <div class="tip-box"><p>✅ Utilise <code>except Exception as e: print(e)</code> pour afficher le message d'erreur et comprendre ce qui se passe.</p></div>
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
        <h2>Une liste en une ligne</h2>
        <p>Les <strong>compréhensions de listes</strong> permettent de créer une liste à partir d'une autre en une seule ligne élégante. C'est l'une des fonctionnalités préférées des développeurs Python !</p>

        <h2>La syntaxe</h2>
        <pre><code class="language-python"># Syntaxe : [expression for élément in itérable]

# Méthode classique (3 lignes)
carres = []
for i in range(1, 6):
    carres.append(i ** 2)

# Compréhension de liste (1 ligne !)
carres = [i ** 2 for i in range(1, 6)]
print(carres)  # [1, 4, 9, 16, 25]</code></pre>
        <div class="info-box"><p>💡 C'est exactement la même chose, juste écrit plus élégamment. Python préfère la version compacte !</p></div>

        <h2>Avec une condition (filtre)</h2>
        <pre><code class="language-python"># [expression for élément in itérable if condition]

nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Nombres pairs uniquement
pairs = [n for n in nombres if n % 2 == 0]
print(pairs)   # [2, 4, 6, 8, 10]

# Nombres pairs au carré
pairs_carres = [n ** 2 for n in nombres if n % 2 == 0]
print(pairs_carres)  # [4, 16, 36, 64, 100]</code></pre>

        <h2>Transformer du texte</h2>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]

# Mettre en majuscules
majuscules = [f.upper() for f in fruits]
print(majuscules)  # ['POMME', 'BANANE', 'CERISE']

# Longueur de chaque mot
longueurs = [len(f) for f in fruits]
print(longueurs)   # [5, 6, 6]

# Filtrer les mots de plus de 5 lettres
longs = [f for f in fruits if len(f) > 5]
print(longs)       # ['banane', 'cerise']</code></pre>
        <div class="tip-box"><p>✅ Utilise une compréhension quand tu transformes ou filtres une liste. Pour les opérations complexes, la boucle for reste plus lisible.</p></div>
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
        <h2>Qu'est-ce qu'un module ?</h2>
        <p>Python est livré avec des <strong>centaines de modules</strong> prêts à l'emploi — des boîtes à outils que tu peux "importer" pour avoir de nouvelles fonctionnalités sans rien installer.</p>
        <pre><code class="language-python">import random   # importe le module entier
from math import sqrt  # importe une seule fonction</code></pre>

        <h2>Le module random</h2>
        <pre><code class="language-python">import random

# Nombre entier aléatoire entre 1 et 6 (dé)
de = random.randint(1, 6)
print(f"Tu as lancé un {de}")

# Nombre décimal entre 0 et 1
print(random.random())

# Choisir un élément au hasard dans une liste
fruits = ["pomme", "banane", "cerise", "kiwi"]
print(random.choice(fruits))

# Mélanger une liste
random.shuffle(fruits)
print(fruits)</code></pre>

        <h2>Le module math</h2>
        <pre><code class="language-python">import math

print(math.sqrt(16))    # 4.0 (racine carrée)
print(math.pi)          # 3.141592...
print(math.floor(3.7))  # 3 (arrondi bas)
print(math.ceil(3.2))   # 4 (arrondi haut)
print(math.pow(2, 8))   # 256.0 (puissance)</code></pre>

        <h2>Le module datetime</h2>
        <pre><code class="language-python">from datetime import datetime

maintenant = datetime.now()
print(maintenant)
print(f"Année : {maintenant.year}")
print(f"Mois : {maintenant.month}")
print(f"Jour : {maintenant.day}")</code></pre>
        <div class="tip-box"><p>✅ Il existe aussi os, json, collections, itertools... Chaque module est une boîte à outils spécialisée !</p></div>
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
        <h2>Paramètres par défaut</h2>
        <p>Tu peux donner une valeur par défaut à un paramètre. Si l'appelant ne passe pas cet argument, la valeur par défaut est utilisée :</p>
        <pre><code class="language-python">def saluer(prenom, message="Bonjour"):
    print(f"{message} {prenom} !")

saluer("Alice")              # Bonjour Alice !
saluer("Bob", "Salut")       # Salut Bob !
saluer("Chloé", "Coucou")    # Coucou Chloé !</code></pre>

        <h2>Arguments nommés (kwargs)</h2>
        <pre><code class="language-python">def creer_profil(nom, age, ville="Paris"):
    print(f"{nom}, {age} ans, habite à {ville}")

creer_profil("Alice", 15)
creer_profil(age=16, nom="Bob", ville="Lyon")</code></pre>
        <div class="info-box"><p>💡 Avec les arguments nommés, l'ordre n'a plus d'importance !</p></div>

        <h2>*args : nombre variable d'arguments</h2>
        <pre><code class="language-python">def somme(*nombres):
    total = 0
    for n in nombres:
        total += n
    return total

print(somme(1, 2, 3))       # 6
print(somme(10, 20, 30, 40)) # 100
print(somme(5))              # 5</code></pre>

        <h2>Les fonctions lambda</h2>
        <p>Une <strong>lambda</strong> est une petite fonction anonyme en une ligne, utile pour les opérations simples :</p>
        <pre><code class="language-python"># Syntaxe : lambda paramètres: expression

doubler = lambda x: x * 2
print(doubler(5))    # 10

additionner = lambda a, b: a + b
print(additionner(3, 7))  # 10

# Très utile avec sorted()
eleves = [("Alice", 15), ("Bob", 18), ("Chloé", 12)]
tries = sorted(eleves, key=lambda e: e[1])
print(tries)  # Trié par âge</code></pre>
        <div class="tip-box"><p>✅ Utilise lambda pour des fonctions courtes et ponctuelles. Pour tout ce qui est complexe, préfère def.</p></div>
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
        <h2>Les tuples</h2>
        <p>Un tuple ressemble à une liste, mais il est <strong>immuable</strong> : on ne peut pas le modifier après création. On l'écrit avec des parenthèses.</p>
        <pre><code class="language-python">coordonnees = (48.8566, 2.3522)  # Paris
couleurs = ("rouge", "vert", "bleu")
point = (10, 20)

print(coordonnees[0])  # 48.8566
print(len(couleurs))   # 3</code></pre>
        <div class="info-box"><p>💡 Utilise un tuple quand les données ne doivent pas changer : coordonnées GPS, dimensions, couleurs RGB, etc.</p></div>

        <h2>Déballage de tuple</h2>
        <pre><code class="language-python">x, y = (10, 20)        # déballage
print(x, y)             # 10 20

prenom, age, ville = ("Alice", 15, "Paris")
print(f"{prenom}, {age} ans, {ville}")

# Swap de deux variables !
a, b = 1, 2
a, b = b, a
print(a, b)  # 2 1</code></pre>

        <h2>Les sets (ensembles)</h2>
        <p>Un set est une collection <strong>sans doublon et sans ordre</strong>. Parfait pour tester l'appartenance ou éliminer les doublons !</p>
        <pre><code class="language-python">nombres = {1, 2, 3, 4, 4, 2, 1}
print(nombres)   # {1, 2, 3, 4} — pas de doublons !

# Ajouter / supprimer
nombres.add(5)
nombres.remove(1)
print(nombres)</code></pre>

        <h2>Opérations sur les sets</h2>
        <pre><code class="language-python">a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # Union : {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection : {3, 4}
print(a - b)   # Différence : {1, 2}

# Éliminer les doublons d'une liste
mots = ["chat", "chien", "chat", "oiseau", "chien"]
uniques = list(set(mots))
print(uniques)</code></pre>
        <div class="tip-box"><p>✅ set() est très rapide pour vérifier si un élément existe (<code>x in mon_set</code> est quasi instantané).</p></div>
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
  }
];
