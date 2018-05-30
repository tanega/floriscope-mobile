# Floriscope Mobile Roadmap

---

## Objectifs de l’application mobile Floriscope:

1.  proposer « a minima » l’ensemble des fonctionnalités de la version Web.
2.  tester les nouvelles fonctionnalités sur mobile avant de les porter sur la version Web.
3.  challenger les fonctionnalités Web existantes (refonte UX/ fonctionnel possibles).
4.  10k utilisateurs courant 2019.

> La deadline de la V1 de l’application mobile est début décembre (date à préciser |> **application à présenter lors du concours « Les Victoires du Paysage »).**

---

> Le lot « V2 » devra faire l’objet de mises-à-jour régulières sur les différents stores.

## Fonctionnalités V1

### Login/Signup

* [ ] En tant que visiteur, je peux me connecter à mon compte Floriscope.
* [ ] En tant que membre et lorsque je ré-ouvre l’application, je reste connecté et retrouve mes données à jour.
* [ ] En tant que visiteur, je peux créer un compte Floriscope.
* [ ] En tant que membre et après inscription, je visualise des écrans explicatifs (différents en fonction de la catégorie du profil ? Suggestion: proposer ses écrans lors de la « First install »; pre-inscription.

### Profil

* [ ] En tant que membre, je peux visualiser mes données de profil.
* [ ] En tant que membre, je peux éditer mon profil.
* [ ] En tant que membre et lorsque je consulte mon profil, je peux visualiser mes collections de plantes favorites.
* [ ] En tant que membre et lorsque je consulte mon profil, je peux visualiser mes plantes favorites.

### Recherche de plantes

* [ ] En tant que membre, je peux effectuer une recherche de plantes dans la base.
* [ ] En tant que membre, je peux sauvegarder une recherche. Suggestion: afficher uniquement les précédentes recherches.
* [ ] En tant que membre et lorsque je viens d’effectuer une recherche, je peux consulter le détail d’une plante.

### Fiche détail d’une plante

* [ ] En tant que membre et lorsque je consulte une plante, je visualiser ses informations principales.
* [ ] En tant que membre et lorsque je consulte une plante, je peux afficher des informations supplémentaires (à définir)
* [ ] En tant que membre et lorsque je consulte une plante, je peux afficher l’ensemble des photos de la plante (galerie).
* [ ] En tant que membre et lorsque je consulte une plante, je peux l’ajouter à mes favoris.
* [ ] En tant que membre et lorsque je consulte une plante, je peux l’ajouter à une collection de plantes.
* [ ] En tant que membre et lorsque je consulte une plante, je peux l’ajouter à une collection de plantes.
* [ ] En tant que membre et lorsque je consulte une plante, je peux visualiser les différentes collections qui comportent cette plante.
* [ ] En tant que membre et lorsque je consulte une image d’une plante, je peux lire des informations complémentaires sur cette image.

### Collections de plantes

* [ ] En tant que membre, je peux créer, modifier et visualiser mes collections de plantes.
* [ ] En tant que membre et lorsque j’affiche mes collections de plantes, je peux filtrer la liste de collections par nom.

### Taches techniques

* [ ] Setup du projet (boilerplate https://github.com/infinitered/ignite ?)
* [ ] Mise en place de la navigation et transitions d’écrans (visiteur / membre / first install ? / tabulations).
* [ ] Suivi des actions utilisateurs: « clics » et « écrans affichés » (google analytics).
* [ ] Suivi des erreurs / plantage (Crashlytics).
* [ ] Gestion des MAJ (forcer l’utilisateur à télécharger une MAJ).
* [ ] Mise à disposition de l’application pour les betas testeurs.
* [ ] Interprétation des codes erreurs API (ex: déconnexion automatique si le token est invalide)

## Fonctionnalités V2

#### Portail de recherche

* [ ] En tant que membre, je peux sélectionner/modifier la ressource (Plantes, Images, Collections) au sein de laquelle je souhaite effectuer ma recherche.

### Recherche de plantes

* [ ] En tant que membre et lorsque je viens d’effectuer une recherche, je peux ajouter la plante à mes favoris.
* [ ] En tant que membre et lorsque je viens d’effectuer une recherche, je peux ajouter la plante à une de mes collections.

### Recherche parmi les images

* [ ] En tant que membre, je peux rechercher parmi les images publiques de la base.
* [ ] En tant que membre, je peux filtrer les résultats de recherche pour les images selon les mots-clés, l'auteur, la(les) plante(s) photographiées
* [ ] En tant que membre et lorsque je viens d'effectuer une recherche parmi les images, je peux consulter le détail d'une image

### Recherche parmi les collections

* [ ] En tant que membre, je peux rechercher parmi les collections publiques de plantes.
* [ ] En tant que membre, je peux filtrer les résultats de recherche pour les collections de plantes selon leur catégorie, leurs mots-clés, leur auteur, les plantes présentes dans ces collections.
* [ ] En tant que membre et lorsque j'ai effectué une recherche, je peux consulter le détail d'une collection de plante.
* [ ] En tant que membre et lorsque j'ai effectué une recherche, je peux ajouter une collection de plantes à mes collections favorites.

### Fiche détail d’une plante

* [ ] En tant que membre et lorsque je consulte une plante, je peux trouver la plante « autour de moi ».
* [ ] En tant que membre et lorsque je recherche une plante autour de moi, je peux visualiser les différents producteurs (+ lien externe), jardins / parcs, …

### Collections de plantes

* [ ] En tant que membre et lorsque je consulte une collection de plantes, je peux afficher le profil « public  » de l’utilisateur.

### QR Code

* [ ] En tant que membre, je peux lire et interpréter des QR Codes.

### Autres fonctionnalités mentionnées (V1 / V2 ?)

* [ ] En tant que membre, je peux recevoir des notifications (https://onesignal.com/)
* [ ] En tant que membre et lorsque je clique sur un lien Floriscope, l’application s’ouvre dans le bon contexte. (Deeplinks).
* [ ] En tant que membre, je peux utiliser l’application hors-ligne sans grande dégradation du service.
* [ ] Suivi des actions utilisateurs: pouvoir analyser les chemins utilisateurs.
* [ ] Mise en place d’un CI (linting / tests)

---

> Lors des développements, il a été convenu de **créer de façon atomique les différents composants (guide storybook)** ainsi que de réaliser des **tests unitaires (interprétation des APIs/ états Redux)**.
