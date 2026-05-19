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
        <h2>Qu'est-ce qu'un objet ?</h2>
        <p>Jusqu'ici, on a utilisé des données séparées : une variable <code>prenom</code>, une autre <code>age</code>... La <strong>Programmation Orientée Objet (POO)</strong> permet de regrouper des données ET des fonctions dans une seule entité : un <strong>objet</strong>.</p>
        <div class="info-box"><p>💡 Une <strong>classe</strong>, c'est le plan de construction. Un <strong>objet</strong>, c'est la maison construite à partir du plan.</p></div>

        <h2>Créer une classe</h2>
        <pre><code class="language-python">class Eleve:
    def __init__(self, prenom, age):
        self.prenom = prenom   # attribut
        self.age = age         # attribut

    def se_presenter(self):
        print(f"Je m'appelle {self.prenom}, j'ai {self.age} ans.")

# Créer des objets (instances)
e1 = Eleve("Alice", 15)
e2 = Eleve("Bob", 14)

e1.se_presenter()   # Je m'appelle Alice, j'ai 15 ans.
e2.se_presenter()   # Je m'appelle Bob, j'ai 14 ans.
print(e1.prenom)    # Alice</code></pre>

        <h2>Le rôle de self et __init__</h2>
        <ul>
          <li><code>__init__</code> est la méthode constructeur — elle est appelée automatiquement à la création</li>
          <li><code>self</code> représente l'objet lui-même — il permet d'accéder à ses propres attributs</li>
        </ul>

        <h2>Attributs et méthodes</h2>
        <pre><code class="language-python">class Compteur:
    def __init__(self):
        self.valeur = 0         # attribut d'instance

    def incrementer(self):
        self.valeur += 1

    def reinitialiser(self):
        self.valeur = 0

    def afficher(self):
        print(f"Compteur : {self.valeur}")

c = Compteur()
c.incrementer()
c.incrementer()
c.incrementer()
c.afficher()        # Compteur : 3
c.reinitialiser()
c.afficher()        # Compteur : 0</code></pre>
        <div class="tip-box"><p>✅ Chaque objet a ses propres attributs indépendants. Deux Eleve n'ont pas le même prenom.</p></div>
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
        <h2>Qu'est-ce que l'héritage ?</h2>
        <p>L'héritage permet à une classe <strong>enfant</strong> de récupérer tous les attributs et méthodes d'une classe <strong>parent</strong>, puis de les spécialiser ou d'en ajouter de nouveaux.</p>
        <div class="info-box"><p>💡 Analogie : <code>Animal</code> est le parent. <code>Chien</code> et <code>Chat</code> héritent d'<code>Animal</code> — ils ont tout ce qu'un animal a, plus leurs propres spécificités.</p></div>

        <h2>Syntaxe de base</h2>
        <pre><code class="language-python">class Animal:
    def __init__(self, nom):
        self.nom = nom

    def respirer(self):
        print(f"{self.nom} respire.")

class Chien(Animal):           # Chien hérite d'Animal
    def aboyer(self):
        print(f"{self.nom} dit : Woof !")

rex = Chien("Rex")
rex.respirer()   # Méthode héritée d'Animal
rex.aboyer()     # Méthode propre à Chien</code></pre>

        <h2>super() — appeler le parent</h2>
        <pre><code class="language-python">class Animal:
    def __init__(self, nom, espece):
        self.nom = nom
        self.espece = espece

    def decrire(self):
        print(f"{self.nom} est un {self.espece}")

class Chien(Animal):
    def __init__(self, nom, race):
        super().__init__(nom, "chien")  # appelle Animal.__init__
        self.race = race

    def decrire(self):
        super().decrire()               # appelle Animal.decrire()
        print(f"Race : {self.race}")

rex = Chien("Rex", "Berger Allemand")
rex.decrire()</code></pre>

        <h2>Polymorphisme</h2>
        <p>Chaque sous-classe peut redéfinir une méthode du parent — c'est le <strong>polymorphisme</strong> :</p>
        <pre><code class="language-python">class Animal:
    def parler(self):
        print("...")

class Chien(Animal):
    def parler(self):
        print("Woof !")

class Chat(Animal):
    def parler(self):
        print("Miaou !")

animaux = [Chien(), Chat(), Animal()]
for a in animaux:
    a.parler()   # Woof ! / Miaou ! / ...</code></pre>
        <div class="tip-box"><p>✅ isinstance(rex, Animal) retourne True — un Chien EST un Animal.</p></div>
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
        <h2>Lire un fichier</h2>
        <p>Python peut lire et écrire des fichiers texte. On utilise toujours <strong>with open()</strong> qui ferme le fichier automatiquement.</p>
        <pre><code class="language-python"># Lire tout le contenu
with open("notes.txt", "r", encoding="utf-8") as f:
    contenu = f.read()
    print(contenu)

# Lire ligne par ligne
with open("notes.txt", "r", encoding="utf-8") as f:
    for ligne in f:
        print(ligne.strip())  # strip() enlève \\n</code></pre>
        <div class="info-box"><p>💡 Les modes : "r" = lecture, "w" = écriture (écrase), "a" = ajout, "r+" = lecture + écriture.</p></div>

        <h2>Écrire dans un fichier</h2>
        <pre><code class="language-python"># Créer/écraser le fichier
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Bonjour !\\n")
    f.write("Deuxième ligne\\n")

# Ajouter sans effacer
with open("output.txt", "a", encoding="utf-8") as f:
    f.write("Ligne ajoutée\\n")</code></pre>

        <h2>Le format JSON</h2>
        <p><strong>JSON</strong> est le format universel pour stocker des données structurées (listes, dictionnaires) :</p>
        <pre><code class="language-python">import json

# Convertir Python → JSON (écriture)
eleves = [
    {"nom": "Alice", "note": 15},
    {"nom": "Bob",   "note": 12}
]
with open("eleves.json", "w") as f:
    json.dump(eleves, f, indent=2)

# Lire JSON → Python
with open("eleves.json", "r") as f:
    data = json.load(f)
print(data[0]["nom"])   # Alice</code></pre>

        <h2>JSON sans fichier</h2>
        <pre><code class="language-python">import json

# Dict → chaîne JSON
texte = json.dumps({"nom": "Alice", "age": 15})
print(texte)   # {"nom": "Alice", "age": 15}

# Chaîne JSON → dict
d = json.loads('{"nom": "Alice", "age": 15}')
print(d["nom"])  # Alice</code></pre>
        <div class="tip-box"><p>✅ Dans Pyodide (le navigateur), les fichiers sont en mémoire uniquement. Utilise json.dumps/loads pour tester la sérialisation.</p></div>
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
        <h2>Qu'est-ce que la récursion ?</h2>
        <p>Une fonction <strong>récursive</strong> est une fonction qui s'appelle elle-même. C'est une technique puissante pour résoudre des problèmes qui se répètent naturellement.</p>
        <div class="info-box"><p>💡 Imagine un miroir face à un autre miroir : tu vois des reflets qui s'emboîtent à l'infini. La récursion, c'est pareil — mais avec un cas d'arrêt !</p></div>

        <h2>La structure obligatoire</h2>
        <p>Toute fonction récursive doit avoir :</p>
        <ul>
          <li>Un <strong>cas de base</strong> (arrêt) — sinon boucle infinie !</li>
          <li>Un <strong>appel récursif</strong> qui se rapproche du cas de base</li>
        </ul>
        <pre><code class="language-python">def countdown(n):
    if n <= 0:          # Cas de base
        print("Décollage !")
    else:
        print(n)
        countdown(n - 1)  # Appel récursif

countdown(5)  # 5, 4, 3, 2, 1, Décollage !</code></pre>

        <h2>Factorielle</h2>
        <pre><code class="language-python">def factorielle(n):
    if n == 0 or n == 1:   # Cas de base
        return 1
    return n * factorielle(n - 1)  # n! = n × (n-1)!

print(factorielle(5))  # 120  (5×4×3×2×1)
print(factorielle(0))  # 1</code></pre>

        <h2>Suite de Fibonacci</h2>
        <pre><code class="language-python">def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(8):
    print(fibonacci(i), end=" ")
# 0 1 1 2 3 5 8 13</code></pre>
        <div class="tip-box"><p>✅ La récursion est élégante mais peut être lente sur de grandes valeurs. Pour fibonacci(35)+, préfère une boucle.</p></div>

        <h2>Parcourir une structure imbriquée</h2>
        <pre><code class="language-python">def somme_liste(lst):
    if not lst:           # Liste vide
        return 0
    return lst[0] + somme_liste(lst[1:])

print(somme_liste([1, 2, 3, 4, 5]))  # 15</code></pre>
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
        <h2>Recherche linéaire</h2>
        <p>Parcourir une liste élément par élément jusqu'à trouver la cible :</p>
        <pre><code class="language-python">def recherche_lineaire(liste, cible):
    for i, val in enumerate(liste):
        if val == cible:
            return i      # Retourne l'index
    return -1             # Pas trouvé

nombres = [5, 3, 8, 1, 9, 2]
print(recherche_lineaire(nombres, 8))  # 2
print(recherche_lineaire(nombres, 7))  # -1</code></pre>

        <h2>Recherche dichotomique (liste triée)</h2>
        <p>Sur une liste <strong>triée</strong>, on coupe en deux à chaque étape — beaucoup plus rapide !</p>
        <pre><code class="language-python">def recherche_dicho(liste, cible):
    gauche, droite = 0, len(liste) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if liste[milieu] == cible:
            return milieu
        elif liste[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return -1

triee = [1, 3, 5, 7, 9, 11, 13]
print(recherche_dicho(triee, 7))   # 3
print(recherche_dicho(triee, 6))   # -1</code></pre>
        <div class="info-box"><p>💡 Recherche linéaire : jusqu'à N étapes. Dichotomique : jusqu'à log₂(N) étapes. Sur 1 million d'éléments → max 20 étapes !</p></div>

        <h2>Tri à bulles</h2>
        <pre><code class="language-python">def tri_bulles(liste):
    n = len(liste)
    lst = liste.copy()
    for i in range(n):
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return lst

nombres = [64, 34, 25, 12, 22, 11, 90]
print(tri_bulles(nombres))  # [11, 12, 22, 25, 34, 64, 90]</code></pre>

        <h2>sorted() et sort()</h2>
        <pre><code class="language-python">eleves = [("Alice", 15), ("Bob", 18), ("Chloé", 12)]

# Trier par note (deuxième élément)
par_note = sorted(eleves, key=lambda e: e[1])
print(par_note)  # [('Chloé', 12), ('Alice', 15), ('Bob', 18)]

# Tri décroissant
desc = sorted(eleves, key=lambda e: e[1], reverse=True)
print(desc)</code></pre>
        <div class="tip-box"><p>✅ En pratique, utilise toujours sorted() ou .sort() de Python — ils utilisent Timsort, plus efficace que le tri à bulles.</p></div>
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
        <h2>Compréhension de dictionnaire</h2>
        <p>Comme les compréhensions de listes, mais pour créer des dictionnaires :</p>
        <pre><code class="language-python"># {clé: valeur for ... in ...}
carres = {n: n**2 for n in range(1, 6)}
print(carres)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Inverser un dictionnaire (clés ↔ valeurs)
original = {"a": 1, "b": 2, "c": 3}
inverse = {v: k for k, v in original.items()}
print(inverse)  # {1: 'a', 2: 'b', 3: 'c'}

# Filtrer un dictionnaire
notes = {"Alice": 15, "Bob": 9, "Chloé": 17, "David": 11}
admis = {nom: n for nom, n in notes.items() if n >= 10}
print(admis)  # {'Alice': 15, 'Chloé': 17, 'David': 11}</code></pre>

        <h2>Compréhension de set</h2>
        <pre><code class="language-python"># {expression for ... in ...}
impairs = {n for n in range(20) if n % 2 != 0}
print(impairs)  # {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}

# Lettres uniques d'un texte
lettres = {c.lower() for c in "Python est Super" if c.isalpha()}
print(sorted(lettres))</code></pre>

        <h2>Compréhensions imbriquées</h2>
        <pre><code class="language-python"># Table de multiplication (matrice)
table = [[i * j for j in range(1, 4)] for i in range(1, 4)]
for ligne in table:
    print(ligne)
# [1, 2, 3]
# [2, 4, 6]
# [3, 6, 9]

# Aplatir une liste de listes
matrice = [[1, 2], [3, 4], [5, 6]]
plat = [x for ligne in matrice for x in ligne]
print(plat)  # [1, 2, 3, 4, 5, 6]</code></pre>
        <div class="tip-box"><p>✅ Les compréhensions imbriquées se lisent de gauche à droite, comme des boucles for imbriquées.</p></div>

        <h2>Générateur</h2>
        <pre><code class="language-python"># Utiliser () au lieu de [] crée un générateur (paresseux)
gen = (n**2 for n in range(1000000))  # Pas de mémoire utilisée !
print(next(gen))  # 0
print(next(gen))  # 1</code></pre>
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
        <h2>enumerate()</h2>
        <p>Itérer avec l'index ET la valeur :</p>
        <pre><code class="language-python">fruits = ["pomme", "banane", "cerise"]

for i, fruit in enumerate(fruits):
    print(f"{i+1}. {fruit}")
# 1. pomme
# 2. banane
# 3. cerise

# Démarrer à un autre index
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")</code></pre>

        <h2>zip()</h2>
        <p>Combiner plusieurs listes en parallèle :</p>
        <pre><code class="language-python">prenoms = ["Alice", "Bob", "Chloé"]
notes   = [15, 12, 18]
villes  = ["Paris", "Lyon", "Nantes"]

for prenom, note, ville in zip(prenoms, notes, villes):
    print(f"{prenom} ({ville}) : {note}/20")

# Créer un dictionnaire depuis deux listes
d = dict(zip(prenoms, notes))
print(d)  # {'Alice': 15, 'Bob': 12, 'Chloé': 18}</code></pre>

        <h2>map()</h2>
        <p>Appliquer une fonction à chaque élément :</p>
        <pre><code class="language-python">nombres = [1, 2, 3, 4, 5]

carres = list(map(lambda x: x**2, nombres))
print(carres)  # [1, 4, 9, 16, 25]

# Équivalent en compréhension (préféré en Python)
carres = [x**2 for x in nombres]</code></pre>

        <h2>filter()</h2>
        <pre><code class="language-python">nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pairs = list(filter(lambda x: x % 2 == 0, nombres))
print(pairs)  # [2, 4, 6, 8, 10]</code></pre>

        <h2>any() et all()</h2>
        <pre><code class="language-python">notes = [12, 15, 9, 17, 11]

print(any(n >= 18 for n in notes))   # False (aucun >= 18)
print(all(n >= 10 for n in notes))   # False (9 < 10)
print(all(n > 8 for n in notes))     # True (tous > 8)</code></pre>
        <div class="tip-box"><p>✅ any() = au moins un True. all() = tous True. Très utiles pour valider des conditions sur des listes.</p></div>
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
        <h2>Comment fonctionne le Web ?</h2>
        <p>Quand tu tapes une URL dans ton navigateur, voici ce qui se passe :</p>
        <ul>
          <li>Ton navigateur envoie une <strong>requête HTTP</strong> à un serveur</li>
          <li>Le serveur (qui peut tourner Python !) reçoit la requête</li>
          <li>Il répond avec du <strong>HTML + CSS + JS</strong></li>
          <li>Ton navigateur <strong>affiche</strong> le résultat</li>
        </ul>
        <div class="info-box"><p>💡 <strong>Frontend</strong> = ce que l'utilisateur voit (HTML/CSS/JS dans le navigateur). <strong>Backend</strong> = le serveur qui traite les données (Python, base de données…).</p></div>

        <h2>HTML — la structure d'une page</h2>
        <p>HTML (HyperText Markup Language) décrit la structure d'une page avec des <strong>balises</strong> :</p>
        <pre><code class="language-python"># Python peut générer du HTML !
page = """&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Ma page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bonjour le monde !&lt;/h1&gt;
    &lt;p&gt;C'est ma première page web.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;"""
print(page)</code></pre>

        <h2>Les balises HTML essentielles</h2>
        <pre><code class="language-python">balises = {
    "h1 à h6": "Titres (h1 = le plus grand)",
    "p":        "Paragraphe",
    "a":        "Lien : &lt;a href='url'&gt;texte&lt;/a&gt;",
    "img":      "Image : &lt;img src='url' alt='desc'&gt;",
    "ul/li":    "Liste à puces",
    "div":      "Conteneur générique",
    "form":     "Formulaire de saisie",
    "input":    "Champ de saisie",
    "button":   "Bouton cliquable",
}
for balise, role in balises.items():
    print(f"  &lt;{balise}&gt; → {role}")</code></pre>

        <h2>Python génère du HTML dynamique</h2>
        <p>L'intérêt de Python c'est de générer du HTML <strong>dynamiquement</strong>, avec de vraies données :</p>
        <pre><code class="language-python">eleves = [
    {"nom": "Alice", "note": 15},
    {"nom": "Bob",   "note": 12},
    {"nom": "Chloé", "note": 18},
]

# Génère un tableau HTML
html = "&lt;table&gt;\\n"
html += "  &lt;tr&gt;&lt;th&gt;Nom&lt;/th&gt;&lt;th&gt;Note&lt;/th&gt;&lt;/tr&gt;\\n"
for e in eleves:
    html += f"  &lt;tr&gt;&lt;td&gt;{e['nom']}&lt;/td&gt;&lt;td&gt;{e['note']}/20&lt;/td&gt;&lt;/tr&gt;\\n"
html += "&lt;/table&gt;"
print(html)</code></pre>

        <h2>HTTP — le protocole du Web</h2>
        <ul>
          <li><strong>GET</strong> : demander une page ou des données</li>
          <li><strong>POST</strong> : envoyer des données au serveur (formulaire)</li>
          <li><strong>200 OK</strong> : tout s'est bien passé</li>
          <li><strong>404 Not Found</strong> : page introuvable</li>
          <li><strong>500 Internal Server Error</strong> : erreur côté serveur</li>
        </ul>
        <div class="tip-box"><p>✅ Dans ce niveau, tu vas créer ton propre serveur Python avec Flask — il recevra des requêtes HTTP et renverra du HTML !</p></div>
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
        <p><strong>Flask</strong> est un mini-framework Python pour créer des applications web. Il est léger, simple à apprendre, et très utilisé. Avec Flask, Python devient ton serveur web !</p>
        <div class="info-box"><p>⚠️ Flask s'installe et s'exécute sur ton ordinateur, pas dans ce navigateur. Les exemples ci-dessous montrent comment ça marche — tu peux les tester localement avec <code>pip install flask</code>.</p></div>

        <h2>Installation</h2>
        <pre><code class="language-python"># Dans ton terminal :
# pip install flask</code></pre>

        <h2>Ton premier serveur Flask</h2>
        <pre><code class="language-python">from flask import Flask

app = Flask(__name__)   # Crée l'application

@app.route("/")         # Route : URL "/"
def accueil():
    return "&lt;h1&gt;Bonjour le monde !&lt;/h1&gt;"

@app.route("/hello")    # Route : URL "/hello"
def hello():
    return "&lt;p&gt;Page hello !&lt;/p&gt;"

if __name__ == "__main__":
    app.run(debug=True)  # Lance le serveur sur http://localhost:5000</code></pre>

        <h2>Les routes avec paramètres</h2>
        <pre><code class="language-python">from flask import Flask
app = Flask(__name__)

@app.route("/bonjour/&lt;prenom&gt;")
def bonjour(prenom):
    return f"&lt;h1&gt;Bonjour {prenom} !&lt;/h1&gt;"

# http://localhost:5000/bonjour/Alice → Bonjour Alice !
# http://localhost:5000/bonjour/Bob  → Bonjour Bob !</code></pre>

        <h2>Retourner du JSON (API)</h2>
        <pre><code class="language-python">from flask import Flask, jsonify
app = Flask(__name__)

eleves = [
    {"nom": "Alice", "note": 15},
    {"nom": "Bob",   "note": 12},
]

@app.route("/api/eleves")
def get_eleves():
    return jsonify(eleves)   # Retourne du JSON automatiquement

# http://localhost:5000/api/eleves
# → [{"nom": "Alice", "note": 15}, ...]</code></pre>

        <h2>Le décorateur @app.route</h2>
        <p>Le <code>@app.route("/url")</code> est un <strong>décorateur</strong> — il dit à Flask : "quand quelqu'un visite cette URL, exécute cette fonction". La fonction retourne ce que le navigateur reçoit.</p>
        <div class="tip-box"><p>✅ Chaque fonction associée à une route s'appelle une <strong>vue</strong> (view). Elle reçoit la requête et retourne une réponse.</p></div>
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
        <h2>Pourquoi des templates ?</h2>
        <p>Écrire du HTML directement dans Python devient vite illisible. Les <strong>templates</strong> séparent le code Python de la présentation HTML. Flask utilise le moteur de templates <strong>Jinja2</strong>.</p>
        <div class="info-box"><p>💡 Structure Flask : <code>app.py</code> (logique Python) + <code>templates/</code> (fichiers HTML avec Jinja2).</p></div>

        <h2>Structure d'un projet Flask avec templates</h2>
        <pre><code class="language-python">mon_app/
├── app.py
└── templates/
    ├── base.html        ← template parent
    ├── index.html       ← hérite de base.html
    └── eleves.html</code></pre>

        <h2>Utiliser render_template</h2>
        <pre><code class="language-python"># app.py
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def accueil():
    prenom = "Alice"
    notes = [15, 12, 18, 14]
    return render_template("index.html",
                           prenom=prenom,
                           notes=notes)</code></pre>

        <h2>Syntaxe Jinja2 dans le HTML</h2>
        <pre><code class="language-python"># templates/index.html
# {{ variable }}         → afficher une variable
# {% if condition %}     → condition
# {% for x in liste %}  → boucle
# {{ variable | filtre }} → appliquer un filtre

# Exemple :
"""
&lt;h1&gt;Bonjour {{ prenom }} !&lt;/h1&gt;

&lt;ul&gt;
{% for note in notes %}
  &lt;li&gt;{{ note }}/20&lt;/li&gt;
{% endfor %}
&lt;/ul&gt;

{% if notes | sum / notes | length >= 12 %}
  &lt;p&gt;Félicitations !&lt;/p&gt;
{% else %}
  &lt;p&gt;Continue tes efforts.&lt;/p&gt;
{% endif %}
"""</code></pre>

        <h2>Template parent (héritage)</h2>
        <pre><code class="language-python"># templates/base.html
"""
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;&lt;title&gt;{% block titre %}Mon Site{% endblock %}&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;
  &lt;nav&gt;&lt;a href="/"&gt;Accueil&lt;/a&gt;&lt;/nav&gt;
  {% block contenu %}{% endblock %}
&lt;/body&gt;
&lt;/html&gt;
"""

# templates/index.html
"""
{% extends "base.html" %}
{% block titre %}Accueil{% endblock %}
{% block contenu %}
  &lt;h1&gt;Bienvenue !&lt;/h1&gt;
{% endblock %}
"""</code></pre>
        <div class="tip-box"><p>✅ L'héritage de templates évite de répéter le header/footer/nav sur chaque page — DRY (Don't Repeat Yourself) !</p></div>
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
        <h2>Les formulaires HTML</h2>
        <p>Un formulaire permet à l'utilisateur d'envoyer des données au serveur. Il a deux attributs importants : <code>action</code> (l'URL cible) et <code>method</code> (GET ou POST).</p>
        <pre><code class="language-python"># Template HTML du formulaire :
"""
&lt;form action="/connexion" method="POST"&gt;
  &lt;label&gt;Nom d\'utilisateur :&lt;/label&gt;
  &lt;input type="text" name="username"&gt;

  &lt;label&gt;Mot de passe :&lt;/label&gt;
  &lt;input type="password" name="password"&gt;

  &lt;button type="submit"&gt;Se connecter&lt;/button&gt;
&lt;/form&gt;
"""</code></pre>

        <h2>Recevoir les données avec Flask</h2>
        <pre><code class="language-python">from flask import Flask, request, render_template, redirect
app = Flask(__name__)

@app.route("/connexion", methods=["GET", "POST"])
def connexion():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        if username == "admin" and password == "1234":
            return f"&lt;h1&gt;Bienvenue {username} !&lt;/h1&gt;"
        else:
            return render_template("login.html",
                                   erreur="Identifiants incorrects")

    return render_template("login.html")</code></pre>

        <h2>GET vs POST</h2>
        <ul>
          <li><strong>GET</strong> : données dans l'URL (<code>?nom=Alice&age=15</code>) — pour des recherches, filtres</li>
          <li><strong>POST</strong> : données dans le corps de la requête — pour les formulaires sensibles (login, données personnelles)</li>
        </ul>

        <h2>Paramètres GET (query strings)</h2>
        <pre><code class="language-python">@app.route("/recherche")
def recherche():
    # URL : /recherche?mot=python&page=2
    mot = request.args.get("mot", "")       # "python"
    page = request.args.get("page", "1")    # "2"
    return f"Recherche : {mot}, page {page}"</code></pre>

        <h2>Validation des données</h2>
        <pre><code class="language-python">def valider_formulaire(data):
    erreurs = []
    if not data.get("nom"):
        erreurs.append("Le nom est obligatoire")
    if len(data.get("password", "")) < 6:
        erreurs.append("Mot de passe trop court (min 6 caractères)")
    if "@" not in data.get("email", ""):
        erreurs.append("Email invalide")
    return erreurs</code></pre>
        <div class="tip-box"><p>✅ Valide TOUJOURS les données côté serveur. Ne fais jamais confiance aux données venant du navigateur !</p></div>
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
        <p>Une variable ou un fichier JSON suffit pour peu de données. Mais pour stocker des milliers d'utilisateurs, de messages ou de produits, on utilise une <strong>base de données</strong>.</p>
        <div class="info-box"><p>💡 <strong>SQLite</strong> est une base de données légère, stockée dans un seul fichier, idéale pour apprendre. Python l'inclut directement avec le module <code>sqlite3</code>.</p></div>

        <h2>Créer une base et une table</h2>
        <pre><code class="language-python">import sqlite3

# Connexion (crée le fichier si inexistant)
conn = sqlite3.connect("ecole.db")
cursor = conn.cursor()

# Créer une table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS eleves (
        id      INTEGER PRIMARY KEY AUTOINCREMENT,
        nom     TEXT    NOT NULL,
        age     INTEGER,
        note    REAL
    )
""")
conn.commit()
conn.close()</code></pre>

        <h2>Insérer des données</h2>
        <pre><code class="language-python">conn = sqlite3.connect("ecole.db")
cursor = conn.cursor()

# Insérer un élève (jamais concatener directement → injection SQL !)
cursor.execute(
    "INSERT INTO eleves (nom, age, note) VALUES (?, ?, ?)",
    ("Alice", 15, 14.5)
)

# Insérer plusieurs à la fois
eleves = [("Bob", 14, 12.0), ("Chloé", 15, 17.5)]
cursor.executemany(
    "INSERT INTO eleves (nom, age, note) VALUES (?, ?, ?)",
    eleves
)
conn.commit()
conn.close()</code></pre>

        <h2>Lire des données (SELECT)</h2>
        <pre><code class="language-python">conn = sqlite3.connect("ecole.db")
cursor = conn.cursor()

# Tous les élèves
cursor.execute("SELECT * FROM eleves")
tous = cursor.fetchall()
for eleve in tous:
    print(eleve)   # (1, 'Alice', 15, 14.5)

# Filtrer
cursor.execute("SELECT nom, note FROM eleves WHERE note >= ?", (14,))
bons = cursor.fetchall()
print(bons)   # [('Alice', 14.5), ('Chloé', 17.5)]

conn.close()</code></pre>

        <h2>Modifier et supprimer</h2>
        <pre><code class="language-python">cursor.execute("UPDATE eleves SET note = ? WHERE nom = ?", (15.0, "Alice"))
cursor.execute("DELETE FROM eleves WHERE note < ?", (10,))
conn.commit()</code></pre>
        <div class="tip-box"><p>✅ Utilise toujours des <code>?</code> pour les valeurs — jamais du f-string dans du SQL, c'est la faille d'injection SQL !</p></div>
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
        <p>Une <strong>API REST</strong> est une interface qui permet à des applications de communiquer entre elles via HTTP en échangeant du JSON. C'est ainsi que les apps mobiles parlent à leurs serveurs, que les sites web chargent des données dynamiquement, etc.</p>
        <div class="info-box"><p>💡 REST = Representational State Transfer. Les <strong>ressources</strong> sont identifiées par des URLs, et les <strong>opérations</strong> par les méthodes HTTP (GET/POST/PUT/DELETE).</p></div>

        <h2>Les méthodes HTTP CRUD</h2>
        <pre><code class="language-python"># CRUD = Create Read Update Delete
GET    /api/eleves       → lire tous les élèves
GET    /api/eleves/1     → lire l'élève n°1
POST   /api/eleves       → créer un nouvel élève
PUT    /api/eleves/1     → modifier l'élève n°1
DELETE /api/eleves/1     → supprimer l'élève n°1</code></pre>

        <h2>API complète avec Flask</h2>
        <pre><code class="language-python">from flask import Flask, jsonify, request
app = Flask(__name__)

eleves = [
    {"id": 1, "nom": "Alice", "note": 15},
    {"id": 2, "nom": "Bob",   "note": 12},
]

@app.route("/api/eleves", methods=["GET"])
def get_eleves():
    return jsonify(eleves), 200   # 200 OK

@app.route("/api/eleves/&lt;int:id&gt;", methods=["GET"])
def get_eleve(id):
    eleve = next((e for e in eleves if e["id"] == id), None)
    if eleve is None:
        return jsonify({"erreur": "Introuvable"}), 404
    return jsonify(eleve), 200

@app.route("/api/eleves", methods=["POST"])
def creer_eleve():
    data = request.get_json()
    nouvel = {"id": len(eleves) + 1, **data}
    eleves.append(nouvel)
    return jsonify(nouvel), 201   # 201 Created

@app.route("/api/eleves/&lt;int:id&gt;", methods=["DELETE"])
def supprimer_eleve(id):
    global eleves
    eleves = [e for e in eleves if e["id"] != id]
    return jsonify({"message": "Supprimé"}), 200</code></pre>

        <h2>Consommer une API (côté frontend)</h2>
        <pre><code class="language-python"># En JavaScript (fetch API) :
"""
fetch('/api/eleves')
  .then(r => r.json())
  .then(data => console.log(data))

// Créer un élève :
fetch('/api/eleves', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({nom: 'Chloé', note: 18})
})
"""</code></pre>
        <div class="tip-box"><p>✅ Une bonne API retourne toujours le bon code HTTP : 200 (OK), 201 (créé), 400 (mauvaise requête), 404 (introuvable), 500 (erreur serveur).</p></div>
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
        <h2>Architecture d'une app web complète</h2>
        <p>Voici comment les pièces s'assemblent dans une vraie application web :</p>
        <pre><code class="language-python">mon_app/
├── app.py           ← Backend Flask (routes, logique)
├── database.py      ← Gestion SQLite
├── templates/
│   ├── base.html    ← Structure commune
│   ├── index.html   ← Page d'accueil
│   └── formulaire.html
└── static/
    ├── style.css    ← CSS
    └── script.js    ← JavaScript (appels API)</code></pre>

        <h2>La couche base de données (database.py)</h2>
        <pre><code class="language-python"># database.py
import sqlite3

def get_db():
    conn = sqlite3.connect("app.db")
    conn.row_factory = sqlite3.Row   # → dictionnaires au lieu de tuples
    return conn

def init_db():
    db = get_db()
    db.execute("""CREATE TABLE IF NOT EXISTS messages (
        id        INTEGER PRIMARY KEY AUTOINCREMENT,
        auteur    TEXT NOT NULL,
        contenu   TEXT NOT NULL,
        date      TEXT DEFAULT CURRENT_TIMESTAMP
    )""")
    db.commit()
    db.close()</code></pre>

        <h2>Le backend (app.py)</h2>
        <pre><code class="language-python"># app.py
from flask import Flask, jsonify, request, render_template
from database import get_db, init_db

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/messages", methods=["GET"])
def get_messages():
    db = get_db()
    msgs = db.execute("SELECT * FROM messages ORDER BY date DESC").fetchall()
    db.close()
    return jsonify([dict(m) for m in msgs])

@app.route("/api/messages", methods=["POST"])
def post_message():
    data = request.get_json()
    if not data.get("auteur") or not data.get("contenu"):
        return jsonify({"erreur": "Champs manquants"}), 400
    db = get_db()
    db.execute("INSERT INTO messages (auteur, contenu) VALUES (?, ?)",
               (data["auteur"], data["contenu"]))
    db.commit()
    db.close()
    return jsonify({"message": "Publié !"}), 201

if __name__ == "__main__":
    init_db()
    app.run(debug=True)</code></pre>

        <h2>Le frontend (templates/index.html)</h2>
        <pre><code class="language-python">"""
&lt;!-- Charger les messages depuis l'API --&gt;
&lt;div id="messages"&gt;&lt;/div&gt;

&lt;form id="form"&gt;
  &lt;input id="auteur" placeholder="Ton pseudo"&gt;
  &lt;input id="contenu" placeholder="Ton message"&gt;
  &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
async function charger() {
  const res = await fetch('/api/messages');
  const msgs = await res.json();
  document.getElementById('messages').innerHTML =
    msgs.map(m => \`&lt;p&gt;&lt;b&gt;\${m.auteur}&lt;/b&gt; : \${m.contenu}&lt;/p&gt;\`).join('');
}

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  await fetch('/api/messages', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      auteur: document.getElementById('auteur').value,
      contenu: document.getElementById('contenu').value
    })
  });
  charger();
});

charger();  // Charger au démarrage
&lt;/script&gt;
"""</code></pre>
        <div class="tip-box"><p>✅ Ce pattern (Flask API + frontend JavaScript qui appelle l'API) est utilisé par des milliers d'applications en production. Tu connais maintenant l'architecture de base !</p></div>
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
