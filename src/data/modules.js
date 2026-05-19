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
  }
];
