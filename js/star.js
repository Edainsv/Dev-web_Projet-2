/*
* Permet de créer automatiquement 5 étiole
* Puis ajoute un style à nb d'étoile selon la note souhaitée
*/

function NewStar(nb) {
	var showStar = document.getElementsByClassName('star');
	var allStar = new Array(5);
	var maxStar = 5;

	if (nb > 5){
		nb = 5;
	}

	// Création des étoiles et attribution d'un style par défaut (Note 0/5)
	for (var i = 0; i < maxStar; i++)
	{
		allStar[i] = document.createElement('i');
		allStar[i].className = 'fa-solid fa-star star-off';
	}

	/* Modif de la classe selon la quantité (Note nb/5)
	*  Les nb premières étoiles auront une classe différent
	*  pour simuler une style selon la note actuelle
	*/
	for (var i = 0; i < nb; i++)
	{
		allStar[i].className = 'fa-solid fa-star star-on';
	}

	for (var i = 0; i < maxStar; i++)
	{
		// Pour toute les div ayant la classe 'test-star'
		for (j = 0; j < showStar.length; j++) {
			showStar[j].appendChild(allStar[i]);
		}
	}

}
