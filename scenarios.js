const scenarios = [
   
  // --- THÈME : ALCOOL EXCÉSIF & BLACKOUT ---
  { "text": "Tu te réveilles nu dans un parc municipal après une soirée très arrosée.", "options": ["Je tente de me fabriquer un slip en feuilles d'arbres.", "Je lance un live Instagram pour raconter ma mésaventure.", "Je sprinte jusqu'à chez moi en hurlant que c'est de l'art."] },
  { "text": "Tu vomis accidentellement sur la robe de mariée de ta meilleure amie en plein milieu de la cérémonie.", "options": ["Je prétends que c'est une tradition ancestrale porte-bonheur.", "J'essaie d'aspirer le vomi avec ma bouche pour réparer.", "Je m'enfuis en courant et je change d'identité."] },
  { "text": "Tu te réveilles après un blackout et tu réalises que tu as épousé un inconnu à Las Vegas.", "options": ["Je demande le divorce immédiatement et je repars faire la fête.", "J'accepte ma nouvelle vie et je tente de le/la séduire.", "On braque un casino ensemble pour fêter ça."] },
  { "text": "Tu es complètement bourré en boîte et tu confonds le DJ avec ton ex.", "options": ["Je monte sur scène pour lui faire une déclaration d'amour micro en main.", "Je lui jette mon verre à la figure en hurlant des insultes.", "Je tente de le doper au GHB pour qu'il reprenne avec moi."] },

  // --- THÈME : SITUATIONS ULTRA-GÊNANTES ---
  { "text": "Tu t'endors pendant une réunion importante et tu te réveilles en bavant sur ton patron.", "options": ["Je fais semblant de pleurer pour justifier l'humidité.", "Je lui propose de lécher pour nettoyer sa veste.", "Je demande une augmentation immédiatement."] },
  { "text": "Tu confonds ton gel douche avec de la crème épilatoire avant un premier rendez-vous.", "options": ["J'y vais quand même, totalement imberbe, et je mise tout sur mon humour.", "J'annule en prétendant une invasion de zombies.", "Je me tatoue tout le corps en urgence pour masquer."] },
  { "text": "Tu envoies par accident un SMS très coquin destiné à ton/ta partenaire à ton groupe de famille.", "options": ["Je prétends que mon téléphone a été piraté par des russes.", "J'assume totalement et je demande des conseils à ma grand-mère.", "Je bloque tous les membres de ma famille."] },
  { "text": "Tu es au restaurant avec ton crush et tu réalises que tu as une énorme crotte de nez visible.", "options": ["Je tente de la manger discrètement.", "Je la projette sur le serveur.", "Je prétends que c'est un piercing invisible de nouvelle génération."] },

  // --- THÈME : SCATOLOGIE ET PIPI (HUMOUR CRADO) ---
  { "text": "Tu es bloqué dans un ascenseur avec ton patron et tu as une envie pressante et incontrôlable de faire caca.", "options": ["Je fais caca dans un coin en l'accusant d'être responsable de la panne.", "Je me fais caca dessus en silence en priant pour que l'odeur ne trahisse rien.", "Je lui propose de faire caca ensemble pour renforcer la cohésion d'équipe."] },
  { "text": "Tu réalises qu'il n'y a plus de papier toilette après avoir fait une énorme commission chez ton/ta futur(e) belle-famille.", "options": ["J'utilise les serviettes d'invités décoratives et je les cache dans la chasse d'eau.", "Je sors les fesses sales pour aller chercher du papier dans le salon.", "Je nettoie avec le chat de la maison."] },
  { "text": "Tu es en train de faire un discours important et tu éternues si fort que tu urines accidentellement sur le premier rang.", "options": ["Je prétends que c'est une performance artistique sur le thème de l'humidité.", "Je continue mon discours comme si de rien n'était, en serrant les fesses.", "Je jette de l'eau sur tout le monde pour noyer le poisson."] },
  { "text": "Tu découvres que ton/ta colocataire utilise ta brosse à dents pour nettoyer le fond de la cuvette des toilettes.", "options": ["Je l'utilise quand même pour renforcer mes défenses immunitaires.", "Je la remplace par sa propre brosse à dents après l'avoir frottée contre mon anus.", "Je vends la brosse à dents sur internet comme objet fétichiste."] },

  // --- THÈME : MEURTRE ET VIOLENCE (HUMOUR NOIR) ---
  { "text": "Tu tues accidentellement le chat adoré de ta voisine en faisant une marche arrière.", "options": ["Je le remplace par un raton laveur espérant qu'elle ne verra pas la différence.", "Je le cuisine et je l'invite à dîner pour lui annoncer la nouvelle.", "Je fais accuser le facteur."] },
  { "text": "Tu surprends ton/ta partenaire au lit avec ton/ta meilleur(e) ami(e).", "options": ["Je les tue tous les deux, je dissous les corps et je monte un business de savon.", "Je me joins à eux pour un plan à trois mémorable.", "Je les prends en photo et je les fais chanter pour le restant de leurs jours."] },
  { "text": "Un collègue de travail insupportable te vole ton déjeuner pour la dixième fois.", "options": ["Je mets du poison rat dans mon prochain sandwich.", "Je fais caca dans mon sandwich et j'attends qu'il le mange.", "Je le balance au patron pour vol qualifié."] },
  { "text": "Tu es témoin d'un meurtre commis par la mafia locale.", "options": ["Je les filme et je vends la vidéo à la police.", "Je leur propose mes services pour nettoyer la scène du crime.", "Je fais semblant de n'avoir rien vu et je demande un autographe au tueur."] },

  // --- THÈME : CRIMES ET DROGUES (VARIATIONS) ---
  { "text": "Tu trouves un sac contenant 10 kg de cocaïne pure abandonné dans une ruelle.", "options": ["Je la coupe avec de la farine et je la vends aux enfants à la sortie des écoles.", "Je la sniffe toute seule en un week-end et je tente de battre le record du monde de pompes.", "Je la dénonce à la police et je demande une médaille."] },
  { "text": "Un hacker menace de diffuser ton historique de navigation internet si tu ne lui verses pas 5000€.", "options": ["Je le paie avec de la fausse monnaie que j'ai imprimée.", "Je diffuse moi-même mon historique en avant-première pour gâcher son plan.", "Je le hacke en retour pour diffuser ses photos d'enfance gênantes."] },
  { "text": "Tu es à court d'argent pour acheter de la drogue.", "options": ["Je vends un rein sur le dark web.", "Je braque une banque avec un pistolet à eau.", "Je me fais passer pour un prêtre pour voler l'argent de la quête."] },

  // --- THÈME : SEXE ET SITUATIONS BIZARRES (VARIATIONS) ---
  { "text": "Ton/ta partenaire te propose d'essayer le fétichisme des pieds.", "options": ["J'accepte, mais seulement si je peux lui lécher les orteils après une séance de sport.", "Je refuse catégoriquement et je le/la quitte.", "Je lui propose d'essayer plutôt le fétichisme des coudes."] },
  { "text": "Tu te réveilles dans le lit d'une personne dont tu ne te souviens absolument pas.", "options": ["Je vole tout ce qui a de la valeur et je m'enfuis par la fenêtre.", "Je lui prépare le petit-déjeuner et je lui propose de nous marier.", "Je me rendors en espérant que c'est un rêve."] },

  // --- NOUVEAUX SCÉNARIOS MÉLANGÉS ---
  { "text": "Tu gagnes au loto mais tu réalises que tu as jeté le ticket gagnant dans la poubelle.", "options": ["Je plonge dans la benne à ordures municipale.", "Je braque le centre de tri des déchets.", "Je deviens dépressif et je me dope pour oublier."] },
  { "text": "Ton chat ramène un doigt humain coupé à la maison.", "options": ["Je le garde comme porte-bonheur.", "J'essaie de retrouver le propriétaire en utilisant ses empreintes.", "Je le vends aux enchères sur le dark web."] },
  { "text": "Tu es coincé dans une ornière de boue avec ton crush et la voiture tombe en panne.", "options": ["On se fait une lutte dans la boue nu avant de baiser.", "On mange le chauffeur Uber qui nous accompagnait pour survivre.", "On essaie de pousser la voiture en écoutant du death metal."] },
  { "text": "Ton ex te recontacte pour te dire qu'il/elle est devenu(e) une star du porno.", "options": ["Je demande un autographe sur mes fesses.", "Je tente de devenir son/sa partenaire officiel(le).", "Je le/la fais chanter avec de vieilles photos gênantes."] },
  { "text": "Tu es invité à un dîner de gala et tu réalises que tu as oublié de mettre un pantalon.", "options": ["Je prétends que c'est la nouvelle mode à Paris.", "Je vole le pantalon d'un serveur.", "Je me cache sous la table pendant toute la soirée."] },
  { "text": "Tu découvres que ton voisin cultive de la weed dans son jardin.", "options": ["Je lui vole toute sa récolte.", "Je le balance à la police en échange d'une récompense.", "Je lui propose de monter un business ensemble."] },
  { "text": "Tu te fais arrêter par la police avec 2 grammes de cocaïne sur toi.", "options": ["J'essaie de corrompre le policier en lui proposant une pipe.", "Je mange la cocaïne avant qu'ils ne la trouvent.", "Je prétends que c'est du sucre glace pour mon beignet."] },
  { "text": "Tu tombes amoureux d'une intelligence artificielle.", "options": ["J'essaie de construire un robot pour l'incarner.", "Je me drogue pour avoir des hallucinations où nous sommes ensemble.", "Je tente de hacker le Pentagone pour lui donner plus de puissance."] },
  { "text": "Ton patron te propose une promotion si tu acceptes de te faire tatouer son nom sur le front.", "options": ["J'accepte, le ridicule ne tue pas.", "Je refuse et je lui urine sur son bureau.", "Je me tatoue le nom de son concurrent pour le faire rager."] },
  { "text": "Tu te réveilles après une opération et tu réalises qu'on t'a greffé une queue de cochon par erreur.", "options": ["Je deviens une star de cirque.", "Je tente de la manger.", "Je poursuis l'hôpital en justice et je demande 10 millions d'euros."] },
  { "text": "Tu es en train de cambrioler une maison et tu tombes nez à nez avec le propriétaire qui est armé.", "options": ["Je lui propose de partager le butin.", "Je tente de le séduire.", "Je lui tire dessus avec mon pistolet à billes."] },
  { "text": "Tu découvres que ton meilleur ami est un tueur en série.", "options": ["Je deviens son complice.", "Je le balance à la police.", "Je lui demande de tuer mon ex."] },
  { "text": "Tu es invité à une soirée échangiste mais tu réalises que tout le monde a plus de 70 ans.", "options": ["J'en profite pour hériter de leurs fortunes.", "Je m'enfuis en courant.", "Je me drogue pour tenir le coup."] },
  { "text": "Tu t'étouffes avec un cacahuète en plein milieu d'un date.", "options": ["J'essaie de me faire la manœuvre de Heimlich moi-même sur le dossier de la chaise.", "Je vomis sur mon crush.", "Je meurs en silence pour ne pas le/la déranger."] },
  { "text": "Tu découvres que ta mère vend des nudes sur internet.", "options": ["Je lui demande une commission sur les ventes.", "Je me shoote pour oublier.", "Je la fais chanter pour avoir plus d'argent de poche."] },
  { "text": "Tu es coincé dans un aéroport pendant 24 heures à cause d'une grève.", "options": ["Je me saoule au duty-free.", "Je tente de braquer la banque de l'aéroport.", "Je dors nu sur les sièges d'embarquement."] },
  { "text": "Tu gagnes un concours de mangeurs de hot-dogs mais tu as une indigestion terrible juste après.", "options": ["Je vomis sur le trophée.", "Je fais caca dans mon pantalon sur le podium.", "Je me fais une ligne de coke pour me remettre d'aplomb."] },
  { "text": "Tu découvres que ton père est un espion russe.", "options": ["Je deviens un agent double.", "Je le vends à la CIA.", "Je lui demande de hacker mon école pour améliorer mes notes."] },
  { "text": "Tu es invité à un mariage et tu réalises que tu es amoureux/se du marié/e.", "options": ["Je tente d'interrompre la cérémonie en hurlant 'Je m'oppose!'.", "Je me saoule et je baise le/la témoin.", "Je me dope pour ne pas pleurer."] },
  { "text": "Tu te fais mordre par un zombie.", "options": ["J'essaie de mordre le plus de gens possible avant de me transformer.", "Je me tire une balle dans la tête.", "Je me dope pour ralentir la transformation."] },
  { "text": "Tu es coincé sur une île déserte avec ton pire ennemi.", "options": ["Je le mange.", "On fait une trêve et on baise pour se réchauffer.", "Je me dope avec des plantes hallucinogènes pour imaginer que je suis ailleurs."] },
  { "text": "Tu découvres que ta femme est enceinte de ton meilleur ami.", "options": ["Je les tue tous les deux.", "J'accepte d'élever l'enfant comme le mien.", "Je les fais chanter pour le restant de leurs jours."] },
  { "text": "Tu es invité à une soirée déguisée mais tu es le seul à avoir joué le jeu.", "options": ["Je prétends que je suis en costume de 'personne normale'.", "Je me déshabille et je prétends que je suis en costume d'Adam/Ève.", "Je me saoule pour oublier la gêne."] },
  { "text": "Tu trouves un pistolet chargé dans la rue.", "options": ["Je braque la première personne que je croise.", "Je le vends au marché noir.", "Je l'apporte à la police."] },
  { "text": "Tu découvres que ton mari est un travesti.", "options": ["Je lui demande de me prêter ses robes.", "Je le divorce immédiatement.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es coincé dans une file d'attente pendant 10 heures pour acheter le nouvel iPhone.", "options": ["Je me fais pipi dessus pour ne pas perdre ma place.", "Je braque la personne devant moi pour lui prendre sa place.", "Je me dope pour tenir le coup."] },
  { "text": "Tu découvres que ton fils se drogue.", "options": ["Je me drogue avec lui.", "Je l'envoie en cure de désintoxication.", "Je le jette à la rue."] },
  { "text": "Tu es invité à un dîner de famille et tu réalises que ton oncle est raciste.", "options": ["Je l'empoisonne avec du cyanure.", "Je me dispute avec lui.", "Je me dope pour ne pas l'entendre."] },
  { "text": "Tu te fais voler ton téléphone.", "options": ["Je traque le voleur et je le tue.", "J'en achète un nouveau.", "Je me dope pour oublier."] },
  { "text": "Tu découvres que ta sœur est lesbienne.", "options": ["Je lui demande d'organiser un plan à trois avec sa copine.", "Je la rejette.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es coincé dans un embouteillage depuis 5 heures.", "options": ["Je fais caca par la fenêtre de la voiture.", "Je braque la voiture d'à côté.", "Je me dope pour patienter."] },
  { "text": "Tu découvres que ton voisin est un extraterrestre.", "options": ["Je deviens son esclave.", "Je le balance à la zone 51.", "Je me dope pour avoir des hallucinations où nous sommes ensemble."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins sexy de la pièce.", "options": ["Je me dope pour me donner confiance en moi.", "J'essaie de séduire la personne la plus moche.", "Je pars en courant."] },
  { "text": "Tu te fais mordre par un vampire.", "options": ["Je deviens son serviteur.", "J'essaie de mordre le plus de gens possible.", "Je me dope pour ralentir la transformation."] },
  { "text": "Tu es coincé dans une maison hantée.", "options": ["J'essaie de baiser les fantômes.", "Je tente d'exorciser la maison.", "Je me dope pour avoir des hallucinations plus cool."] },
  { "text": "Tu découvres que ta fille est une prostituée.", "options": ["Je lui demande une commission sur ses passes.", "Je l'envoie dans un couvent.", "Je la fais chanter pour avoir de l'argent."] },
  { "text": "Tu es invité à un dîner de gala et tu réalises que tu as une haleine de poney.", "options": ["Je me saoule au vin rouge pour masquer l'odeur.", "Je mange le dentifrice du serveur.", "Je me cache sous la table."] },
  { "text": "Tu te fais enlever par des extraterrestres.", "options": ["J'essaie de baiser les aliens.", "Je tente de hacker leur vaisseau.", "Je me dope pour avoir des hallucinations plus cool."] },
  { "text": "Tu es coincé dans un labyrinthe.", "options": ["J'essaie de casser les murs.", "Je tente de tricher.", "Je me dope pour avoir des hallucinations qui me montrent la sortie."] },
  { "text": "Tu découvres que ton fils est gay.", "options": ["Je l'accepte tel qu'il est.", "Je le rejette.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la plus âgée de la pièce.", "options": ["Je me dope pour me donner de l'énergie.", "J'essaie de séduire la personne la plus jeune.", "Je pars en courant."] },
  { "text": "Tu te fais piquer par une abeille.", "options": ["J'essaie de manger l'abeille.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans une tornade.", "options": ["J'essaie de baiser la tornade.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ta femme te trompe avec son boss.", "options": ["Je les tue tous les deux.", "Je divorce immédiatement.", "Je la fais chanter pour le restant de leurs jours."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins riche de la pièce.", "options": ["Je braque tout le monde.", "J'essaie de séduire la personne la plus riche.", "Je pars en courant."] },
  { "text": "Tu te fais mordre par un loup-garou.", "options": ["J'essaie de mordre le plus de gens possible.", "Je me tire une balle dans la tête.", "Je me dope pour ralentir la transformation."] },
  { "text": "Tu es coincé dans un ouragan.", "options": ["J'essaie de baiser l'ouragan.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ton père est gay.", "options": ["Je l'accepte tel qu'il est.", "Je le rejette.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la plus bête de la pièce.", "options": ["Je me dope pour me donner de l'intelligence.", "J'essaie de séduire la personne la plus bête.", "Je pars en courant."] },
  { "text": "Tu te fais piquer par une méduse.", "options": ["J'essaie de manger la méduse.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans un tsunami.", "options": ["J'essaie de baiser le tsunami.", "Je tente de nager.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ta mère est lesbienne.", "options": ["Je l'accepte telle qu'elle est.", "Je la rejette.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins populaire de la pièce.", "options": ["Je braque tout le monde.", "J'essaie de séduire la personne la plus populaire.", "Je pars en courant."] },
  { "text": "Tu te fais mordre par un serpent venimeux.", "options": ["J'essaie de manger le serpent.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans un tremblement de terre.", "options": ["J'essaie de baiser le tremblement de terre.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ton mari est gay.", "options": ["Je l'accepte tel qu'il est.", "Je le divorce immédiatement.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins drôle de la pièce.", "options": ["Je me dope pour me donner de l'humour.", "J'essaie de séduire la personne la moins drôle.", "Je pars en courant."] },
  { "text": "Tu te fais piquer par un scorpion.", "options": ["J'essaie de manger le scorpion.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans une avalanche.", "options": ["J'essaie de baiser l'avalanche.", "Je tente de nager.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ta sœur est une prostituée.", "options": ["Je lui demande une commission sur ses passes.", "Je la rejette.", "Je la fais chanter pour avoir de l'argent."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins intelligente de la pièce.", "options": ["Je me dope pour me donner de l'intelligence.", "J'essaie de séduire la personne la moins intelligente.", "Je pars en courant."] },
  { "text": "Tu te fais mordre par un requin.", "options": ["J'essaie de manger le requin.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans une éruption volcanique.", "options": ["J'essaie de baiser le volcan.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ton frère est gay.", "options": ["Je l'accepte tel qu'il est.", "Je le rejette.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins intéressante de la pièce.", "options": ["Je me dope pour me donner de l'intérêt.", "J'essaie de séduire la personne la moins intéressante.", "Je pars en courant."] },
  { "text": "Tu te fais piquer par une araignée.", "options": ["J'essaie de manger l'araignée.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans une inondation.", "options": ["J'essaie de baiser l'inondation.", "Je tente de nager.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ta mère est une prostituée.", "options": ["Je lui demande une commission sur ses passes.", "Je la rejette.", "Je la fais chanter pour avoir de l'argent."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins séduisante de la pièce.", "options": ["Je me dope pour me donner du charme.", "J'essaie de séduire la personne la moins séduisante.", "Je pars en courant."] },
  { "text": "Tu te fais mordre par une tique.", "options": ["J'essaie de manger la tique.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans un incendie.", "options": ["J'essaie de baiser l'incendie.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ton fils est une prostituée.", "options": ["Je lui demande une commission sur ses passes.", "Je l'envoie dans un couvent.", "Je le fais chanter pour avoir de l'argent."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins populaire de la pièce.", "options": ["Je braque tout le monde.", "J'essaie de séduire la personne la plus populaire.", "Je pars en courant."] },
  { "text": "Tu te fais piquer par une guêpe.", "options": ["J'essaie de manger la guêpe.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans une tempête de neige.", "options": ["J'essaie de baiser la tempête.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ta fille est lesbienne.", "options": ["Je l'accepte telle qu'elle est.", "Je la rejette.", "Je me dope pour accepter la situation."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins riche de la pièce.", "options": ["Je braque tout le monde.", "J'essaie de séduire la personne la plus riche.", "Je pars en courant."] },
  { "text": "Tu te fais mordre par un rat.", "options": ["J'essaie de manger le rat.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans une tempête de sable.", "options": ["J'essaie de baiser la tempête.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ton père est une prostituée.", "options": ["Je lui demande une commission sur ses passes.", "Je l'envoie dans un couvent.", "Je le fais chanter pour avoir de l'argent."] },
  { "text": "Tu es invité à une soirée et tu réalises que tu es la personne la moins sexy de la pièce.", "options": ["Je me dope pour me donner confiance en moi.", "J'essaie de séduire la personne la plus moche.", "Je pars en courant."] },
  { "text": "Tu te fais piquer par un moustique.", "options": ["J'essaie de manger le moustique.", "Je pleure comme un bébé.", "Je me dope pour oublier la douleur."] },
  { "text": "Tu es coincé dans une éclipse.", "options": ["J'essaie de baiser l'éclipse.", "Je tente de voler.", "Je me dope pour avoir des hallucinations où je suis en sécurité."] },
  { "text": "Tu découvres que ta femme est lesbienne.", "options": ["Je lui demande d'organiser un plan à trois avec sa copine.", "Je la rejette.", "Je la fais chanter pour avoir de l'argent."] },
  {
    "text": "L'imam de votre mosquée vous propose 5000€ pour l'aider à détourner les dons du djihad à des fins personnelles.",
    "options": ["On accepte l'argent, on se défonce avec et on disparaît.", "On le filme en train de compter les billets pour le racketter.", "On prend les preuves et on les balance aux fidèles en plein prêche."]
  },
  {
    "text": "Votre père ultra-religieux vous surprend avec votre copain et vous force à prendre une drogue 'expérimentale' pour vous guérir.",
    "options": ["On prend la drogue, on baise devant lui pour le défier et on vide son coffre.", "On le force à avaler ses propres cachets puis on le tabasse.", "On filme sa crise de nerf et on la diffuse sur les réseaux de la paroisse."]
  },
  {
    "text": "Le prêtre de la paroisse vous propose de la drogue et du cash pour coucher avec lui dans le confessionnal.",
    "options": ["On baise, on se shoote sur l'autel et on pisse dans le bénitier.", "On accepte le deal, on enregistre tout et on le dénonce au Vatican.", "On prend le cash, on l'assomme et on vole les reliques de l'église."]
  },
  {
    "text": "Votre famille organise un exorcisme violent car vous êtes trans, avec la complicité d'un gourou sous coke.",
    "options": ["On se défonce avec eux, on baise leur gourou et on leur vole leurs bijoux.", "On les drogue à leur insu et on filme leurs délires mystiques.", "On vandalise la maison et on les dénonce pour séquestration."]
  },
  {
    "text": "Un groupe terroriste vous propose des captives et de la drogue pour tester une nouvelle ceinture explosive.",
    "options": ["On baise les captives, on se shoote et on s'enfuit avec l'argent du groupe.", "On accepte, puis on retourne la bombe contre les chefs du camp.", "On filme tout le réseau pour le vendre aux services de renseignement."]
  },
  {
    "text": "Votre mère pratiquante vous surprend en train de vous droguer avec un partenaire d'une religion qu'elle déteste.",
    "options": ["On continue de baiser devant elle, on la shoote de force et on lui vole son or.", "On l'insulte en la traitant de bigote avant de vider son compte bancaire.", "On l'oblige à regarder la scène en se moquant de ses prières."]
  },
  {
    "text": "À l'école catholique, un prof vous propose du sexe et de la meth contre votre silence sur ses détournements de fonds.",
    "options": ["On baise, on se shoote en classe et on brûle les registres.", "On accepte le deal puis on le fait chanter pour obtenir les clés de l'école.", "On enregistre ses aveux et on les diffuse sur le groupe WhatsApp des parents."]
  },
  {
    "text": "Votre grand-père raciste vous propose de la coke si vous l'aidez à agresser un voisin noir.",
    "options": ["On prend la coke, on filme l'agression et on le rackette à vie.", "On se défonce puis on tabasse le grand-père en le traitant de vieux nazi.", "On accepte l'argent, on vole sa maison et on le livre à la police."]
  },
  {
    "text": "Un rabbin influent vous propose du cash et de la drogue pour voler des documents compromettants dans une synagogue rivale.",
    "options": ["On fait le job, on se shoote et on garde les documents pour le faire chanter.", "On accepte puis on profane la synagogue en filmant tout.", "On prend l'argent et on balance le projet aux autorités religieuses."]
  },
  {
    "text": "Votre sœur voilée vous propose de la drogue si vous acceptez d'avoir des rapports incestueux avec elle.",
    "options": ["On baise, on se shoote et on lui vole ses économies 'halal'.", "On accepte puis on la filme pour avoir un moyen de pression éternel.", "On la drogue de force et on lui rase la tête pour la punir."]
  },
  {
    "text": "Dans votre lycée, un groupe d'extrême-droite vous offre du sexe et de la dope pour harceler des élèves LGBT.",
    "options": ["On prend tout, on participe et on filme pour leur propre chute.", "On accepte puis on les braque et on les poignarde dans une ruelle.", "On se défonce avec eux puis on les dénonce anonymement au proviseur."]
  },
  {
    "text": "Votre oncle sexiste vous propose de la meth si vous l'aidez à violer une femme droguée en boîte de nuit.",
    "options": ["On prend la dope, on participe et on filme pour le racketter après.", "On se shoote, on le tabasse à mort et on sauve la fille.", "On accepte le deal puis on vide ses poches et on l'abandonne sur place."]
  },
  {
    "text": "Le responsable de votre centre culturel islamique vous propose du sexe contre l'accès au coffre-fort des dons.",
    "options": ["On baise dans le bureau, on vide le coffre et on se shoote.", "On filme l'acte pour prendre le contrôle total du centre.", "On accepte, puis on pisse sur les tapis de prière avant de partir."]
  },
  {
    "text": "Votre famille organise un mariage forcé et vous donne de la drogue pour vous rendre 'docile' le soir de la noce.",
    "options": ["On se défonce, on baise tout le monde et on vole les cadeaux de mariage.", "On drogue les mariés et les invités pour s'enfuir avec la dot.", "On filme la cérémonie forcée et on l'envoie aux médias pour les humilier."]
  },
  {
    "text": "Un prof de religion vous menace de vous dénoncer comme apostat si vous ne couchez pas avec lui.",
    "options": ["On baise avec lui, on se shoote et on vole les sujets d'examen.", "On enregistre ses menaces et on détruit sa carrière publiquement.", "On simule l'acte pour mieux l'agresser et lui voler son argent."]
  }


];
