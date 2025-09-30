Mon Univers - Votre Site Personnel
Bienvenue dans le projet de votre site personnel ! Ce guide vous aidera à comprendre la structure des fichiers, à personnaliser votre site et à le mettre en ligne.

Structure du Projet
Le projet est organisé de manière simple pour vous permettre de vous y retrouver facilement :

index.html: C'est votre page d'accueil.

blog.html: La page où vous ajouterez vos articles.

photos.html: La page pour votre galerie d'images.

critiques.html: La section pour vos analyses de jeux vidéo.

histoire.html: La page de présentation "À propos de moi".

style.css: Le fichier contenant tout le design de votre site (couleurs, polices, mise en page).

script.js: Un fichier JavaScript qui gère l'interactivité du menu de navigation.

Comment Personnaliser le Site
1. Modifier le Contenu des Pages
Ouvrez n'importe quel fichier .html avec un éditeur de code (comme Visual Studio Code, Sublime Text, etc.). Vous pouvez ensuite modifier le texte directement.

Changer les textes : Remplacez les textes d'exemple (comme "Titre de mon premier article") par vos propres écrits.

Changer les images et le logo :

Créez un dossier nommé images à la racine de votre projet.

Placez-y vos photos et votre logo.

Dans les fichiers HTML, remplacez les liens comme https://placehold.co/... par le chemin vers votre image. Par exemple : src="images/ma-photo-de-paysage.jpg" pour une photo, et src="images/mon-logo.png" pour le logo.

2. Personnaliser le Style (CSS)
Ouvrez le fichier style.css. Au tout début, vous trouverez des "variables de couleur" :

:root {
    --primary-color: #3498db; /* Bleu vibrant */
    --background-color: #1a1d21; /* Fond très sombre */
    --card-background: #23272f; /* Fond des cartes */
    --text-color: #ecf0f1; /* Texte blanc cassé */
}

Modifiez simplement les codes couleur (par ex. #3498db) pour changer l'apparence de tout le site en une seule fois ! Vous pouvez trouver des palettes de couleurs sur des sites comme coolors.co.

Mettre Votre Site en Ligne avec GitHub Pages
GitHub Pages est un moyen gratuit et simple d'héberger votre site.

Créez un compte GitHub : Si vous n'en avez pas, inscrivez-vous sur github.com.

Créez un nouveau dépôt (repository) :

Cliquez sur le signe "+" en haut à droite et choisissez "New repository".

Donnez-lui un nom. Pour que l'URL soit simple, nommez-le votrenomdutilisateur.github.io.

Assurez-vous qu'il soit "Public".

Cliquez sur "Create repository".

Envoyez vos fichiers sur GitHub :

Sur la page de votre nouveau dépôt, cliquez sur "uploading an existing file".

Faites glisser tous vos fichiers et dossiers (index.html, style.css, le dossier images, etc.) dans la zone prévue.

Attendez que le chargement soit terminé, puis cliquez sur "Commit changes".

Activez GitHub Pages :

Allez dans l'onglet "Settings" de votre dépôt.

Dans le menu de gauche, cliquez sur "Pages".

Sous "Branch", assurez-vous que la branche main (ou master) est sélectionnée et cliquez sur "Save".

Au bout de quelques minutes, votre site sera accessible à l'adresse https://votrenomdutilisateur.github.io !