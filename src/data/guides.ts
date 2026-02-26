export interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string; // We'll use HTML/JSX string or a structured format. Let's use simple HTML string for now to render with dangerouslySetInnerHTML, or better, a structured array of sections.
  sections: { title: string; content: string }[];
  keyTakeaways: string[];
  faq: { question: string; answer: string }[];
}

export const guides: Guide[] = [
  {
    id: "1",
    title:
      "Odeur de fosse septique dans la maison par temps de pluie : Causes et Solutions",
    slug: "odeur-fosse-septique-maison-pluie",
    description:
      "Comprendre pourquoi votre fosse septique refoule des odeurs d'œufs pourris (H2S) lorsqu'il pleut et comment y remédier définitivement.",
    category: "Diagnostic",
    author: "Jean-Marc, Expert ANC",
    date: "2026-02-15",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "Le phénomène de pression atmosphérique",
        content:
          "<p>Par temps de pluie, la pression atmosphérique baisse. L'air lourd chargé d'humidité empêche les gaz légers (comme le méthane et le sulfure d'hydrogène - H2S) de s'échapper naturellement par la ventilation secondaire (l'extracteur éolien sur le toit). Ces gaz cherchent alors le chemin le plus facile pour s'évacuer : vos canalisations intérieures.</p>",
      },
      {
        title: "Cas concret : La maison de M. Martin en Bretagne",
        content:
          "<p><em>« À chaque forte pluie d'automne, une odeur insoutenable envahissait notre salle de bain au rez-de-chaussée. Nous avons fait vidanger la fosse (350€), sans succès. »</em></p><p><strong>Diagnostic de l'expert :</strong> Après inspection, nous avons constaté que la ventilation secondaire (le tuyau qui remonte sur le toit) était absente. Les gaz stagnaient dans la fosse. Lors des pluies, la nappe phréatique remontait légèrement, poussant l'eau dans l'épandage, ce qui mettait la fosse sous pression. Le gaz refluait par le siphon de la douche, dont la garde d'eau était trop faible.</p><p><strong>Solution :</strong> Installation d'une ventilation secondaire en PVC Ø100mm remontant au-dessus du faîtage, équipée d'un extracteur statique. Coût : 450€. Résultat : disparition totale des odeurs, même par forte tempête.</p>",
      },
      {
        title: "Les 3 vérifications immédiates à faire",
        content:
          "<ol><li><strong>Vérifiez vos siphons :</strong> Assurez-vous qu'ils contiennent toujours de l'eau. Un siphon sec laisse passer les gaz. Faites couler un peu d'eau dans les douches ou lavabos peu utilisés.</li><li><strong>Contrôlez la ventilation primaire :</strong> Le tuyau de chute des WC doit remonter jusqu'au toit à l'air libre (sans clapet aérateur bloqué).</li><li><strong>Inspectez la ventilation secondaire :</strong> Elle doit être raccordée en sortie de fosse (avant le filtre à pouzzolane) et remonter à 40cm au-dessus du faîtage du toit.</li></ol>",
      },
    ],
    keyTakeaways: [
      "La pluie modifie la pression atmosphérique et empêche l'évacuation des gaz.",
      "Une ventilation secondaire absente ou bouchée est la cause n°1 des odeurs intérieures.",
      "Un simple siphon asséché peut ruiner le confort olfactif de toute une maison.",
    ],
    faq: [
      {
        question:
          "Un clapet aérateur (clapet anti-vide) peut-il remplacer une ventilation secondaire ?",
        answer:
          "Non. Le clapet aérateur (ou clapet équilibreur de pression) laisse entrer l'air pour éviter le désiphonnage, mais il empêche les gaz de sortir. Il ne remplace en aucun cas la ventilation secondaire obligatoire qui doit extraire les gaz toxiques (H2S) vers l'extérieur.",
      },
    ],
  },
  {
    id: "2",
    title: "Quand et comment changer la pouzzolane de sa fosse septique ?",
    slug: "quand-changer-pouzzolane-fosse-septique",
    description:
      "Le guide définitif pour savoir si votre filtre à pouzzolane est mort, comment le nettoyer, et les étapes pour le remplacer vous-même ou par un pro.",
    category: "Entretien",
    author: "Sophie, Technicienne SPANC",
    date: "2026-02-10",
    readTime: "8 min",
    content: "",
    sections: [
      {
        title: "La durée de vie réelle de la pouzzolane",
        content:
          "<p>Contrairement au mythe tenace, la pouzzolane n'est pas éternelle. Cette roche volcanique, choisie pour sa grande porosité (qui retient les matières en suspension), subit les assauts constants de l'acidité (H2S) et de l'eau. En moyenne, <strong>la pouzzolane doit être remplacée tous les 5 à 7 ans</strong>.</p>",
      },
      {
        title: "Le test infaillible pour savoir si elle est morte",
        content:
          "<p>Sortez le panier de préfiltre. Lavez les pierres au jet d'eau (basse pression). Prenez une pierre entre votre pouce et votre index et pressez fortement.</p><ul><li><strong>Si la pierre résiste et retrouve une couleur rougeâtre/brune :</strong> Elle est encore bonne. Remettez-la en place.</li><li><strong>Si la pierre s'effrite comme du charbon mou, ou reste noire et gluante à cœur :</strong> Elle est saturée et morte. L'eau ne passe plus à travers mais par-dessus, entraînant les boues vers votre épandage. Il faut la changer d'urgence.</li></ul>",
      },
      {
        title: "Cas concret : L'épandage sauvé in extremis",
        content:
          "<p><em>Intervention à Lyon (Rhône) :</em> Un propriétaire nous appelle pour un écoulement lent. La fosse a été vidangée il y a 6 mois. En ouvrant le regard du préfiltre, l'eau stagne au-dessus des pierres.</p><p><strong>Diagnostic :</strong> La pouzzolane, en place depuis 12 ans, s'est transformée en une pâte argileuse noire. Le filtre était totalement colmaté. Heureusement, le bouchon a tenu et n'a pas laissé passer les boues vers les drains.</p><p><strong>Solution :</strong> Extraction des 40kg de pouzzolane morte (mise en déchetterie, bac gravats). Nettoyage de la cassette, et remplissage avec de la pouzzolane neuve (calibre 40/80mm). Coût des matériaux : 25€. Temps passé : 1h. Économie réalisée par rapport à un épandage détruit : environ 6000€.</p>",
      },
    ],
    keyTakeaways: [
      "La pouzzolane a une durée de vie utile de 5 à 7 ans.",
      "Un nettoyage annuel au jet d'eau est obligatoire pour prolonger sa vie.",
      "Utilisez toujours un calibre de pierre de 40 à 80 mm (jamais plus petit).",
    ],
    faq: [
      {
        question: "Puis-je remplacer la pouzzolane par des graviers normaux ?",
        answer:
          "Non. Le gravier de construction n'est pas poreux. Il ne retiendra pas les matières en suspension fines, qui iront directement colmater votre épandage. La pouzzolane ou les filtres synthétiques spécifiques sont obligatoires.",
      },
    ],
  },
  {
    id: "3",
    title: "Fosse septique non conforme lors d'une vente : Qui paie quoi ?",
    slug: "fosse-septique-non-conforme-vente-maison",
    description:
      "Décryptage juridique et financier : obligations du vendeur, droits de l'acheteur, et comment négocier le prix de la maison suite au diagnostic SPANC.",
    category: "Réglementation",
    author: "Me. Antoine, Avocat en Droit Immobilier",
    date: "2026-01-28",
    readTime: "7 min",
    content: "",
    sections: [
      {
        title: "Le diagnostic SPANC : Une obligation incontournable",
        content:
          "<p>Depuis la loi sur l'eau, tout vendeur d'un bien immobilier non raccordé au tout-à-l'égout doit fournir un diagnostic d'assainissement non collectif (réalisé par le SPANC) datant de moins de 3 ans. Ce document est annexé au compromis de vente.</p>",
      },
      {
        title:
          "Que se passe-t-il si l'installation est déclarée 'Non Conforme' ?",
        content:
          "<p>Une non-conformité <strong>n'empêche pas la vente</strong>. C'est une information cruciale pour l'acheteur. La loi stipule que si l'installation est non conforme, l'acquéreur a l'obligation de procéder aux travaux de mise aux normes dans un délai de <strong>1 an après la signature de l'acte authentique</strong>.</p>",
      },
      {
        title: "Cas concret : Négociation réussie à Bordeaux",
        content:
          "<p><em>Vente d'une échoppe avec jardin.</em> Le diagnostic SPANC révèle une fosse septique reliée à un puits perdu (totalement illégal et polluant). Devis de mise aux normes (micro-station) : 8 500€.</p><p><strong>La négociation :</strong> Le vendeur refusait de faire les travaux avant la vente pour ne pas retarder la transaction. L'acheteur a utilisé le devis pour négocier une baisse du prix de vente de 8 500€. Le notaire a consigné cette somme (ou l'a déduite du net vendeur), et l'acheteur a réalisé les travaux 3 mois après son emménagement, obtenant ainsi un certificat de conformité à son nom.</p>",
      },
      {
        title: "Qui paie finalement ?",
        content:
          "<p>Dans 90% des cas, c'est l'acheteur qui fait réaliser les travaux après la vente, mais le coût est <strong>déduit du prix de vente initial</strong> lors de la négociation. Le vendeur 'paie' donc indirectement via une moins-value sur son bien.</p>",
      },
    ],
    keyTakeaways: [
      "Le diagnostic SPANC de moins de 3 ans est obligatoire pour vendre.",
      "Une non-conformité n'annule pas et ne bloque pas la vente.",
      "L'acheteur a 1 an pour faire les travaux après l'achat.",
      "Le coût des travaux est le levier de négociation principal.",
    ],
    faq: [
      {
        question:
          "Le notaire peut-il bloquer la vente si la fosse est dangereuse ?",
        answer:
          "Le notaire ne bloque pas la vente, mais il a un devoir de conseil. Si le SPANC signale un danger sanitaire ou environnemental avéré (ex: rejet direct dans un cours d'eau), le notaire s'assurera que l'acheteur a bien pris conscience de son obligation de travaux rapides, souvent en insérant une clause spécifique dans l'acte.",
      },
    ],
  },
  {
    id: "4",
    title: "Comment déboucher un épandage de fosse septique ?",
    slug: "comment-deboucher-epandage-fosse-septique",
    description: "Solutions techniques pour sauver un épandage saturé sans tout terrasser. Diagnostic, hydrocurage et traitements biologiques.",
    category: "Maintenance",
    author: "Marc, Terrassier Expert",
    date: "2026-02-20",
    readTime: "10 min",
    content: "",
    sections: [
      {
        title: "Identifier la cause du bouchon",
        content: "<p>Avant d'agir, il faut savoir si le bouchon est mécanique (racines, terre) ou biologique (biofilm de boues). Ouvrez le regard de répartition : si l'eau stagne ici, le problème est dans les drains.</p>"
      },
      {
        title: "L'hydrocurage à basse pression",
        content: "<p>L'utilisation d'un furet hydraulique peut déloger les sédiments. Attention : n'utilisez jamais de haute pression (type Karcher direct) qui pourrait briser les tuyaux en PVC ancien ou en terre cuite.</p>"
      }
    ],
    keyTakeaways: ["Ne jamais utiliser d'acide sulfurique", "L'hydrocurage est la solution la plus efficace", "Vérifier la présence de racines"],
    faq: [{ question: "Quel est le prix d'un hydrocurage ?", answer: "Entre 200€ et 500€ selon la longueur du réseau." }]
  },
  {
    id: "5",
    title: "Prix changement filtre pouzzolane : Devis et Matériaux",
    slug: "prix-changement-filtre-pouzzolane",
    description: "Détail des coûts pour le remplacement de votre préfiltre. Matériaux, main d'œuvre et astuces pour économiser.",
    category: "Budget",
    author: "Sophie, Technicienne SPANC",
    date: "2026-02-18",
    readTime: "5 min",
    content: "",
    sections: [
      {
        title: "Coût des matériaux",
        content: "<p>Un sac de 40kg de pouzzolane coûte environ 15€ à 25€. Pour une fosse standard, deux sacs suffisent généralement.</p>"
      }
    ],
    keyTakeaways: ["Matériaux peu coûteux", "Main d'œuvre principale dépense", "Faisable soi-même en 1h"],
    faq: [{ question: "Où acheter de la pouzzolane ?", answer: "En jardinerie ou négoce de matériaux (calibre 40/80)." }]
  },
  {
    id: "6",
    title: "Fosse septique pleine en 1 mois : Pourquoi ?",
    slug: "fosse-septique-pleine-un-mois-pourquoi",
    description: "Comprendre pourquoi votre fosse semble pleine juste après une vidange. Différence entre niveau normal et saturation.",
    category: "Diagnostic",
    author: "Jean-Marc, Expert ANC",
    date: "2026-02-12",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "Le niveau d'eau normal",
        content: "<p>Une fosse septique est TOUJOURS pleine d'eau. C'est son principe de fonctionnement. Elle se remplit en 2 à 4 jours après une vidange.</p>"
      }
    ],
    keyTakeaways: ["Une fosse pleine d'eau est normal", "Le problème est le niveau de boue", "Vérifier le préfiltre si refoulement"],
    faq: [{ question: "Quand s'inquiéter ?", answer: "Si l'eau dépasse le niveau du tuyau de sortie." }]
  },
  {
    id: "7",
    title: "Peut-on mettre de la javel dans une fosse septique ?",
    slug: "eau-javel-fosse-septique-danger",
    description: "L'impact des produits chimiques sur la flore bactérienne de votre fosse. Précautions et alternatives écologiques.",
    category: "Entretien",
    author: "Dr. Claire, Microbiologiste",
    date: "2026-02-05",
    readTime: "4 min",
    content: "",
    sections: [
      {
        title: "L'effet bactéricide",
        content: "<p>La javel tue les bactéries nécessaires à la liquéfaction des boues. Une utilisation massive bloque le processus biologique.</p>"
      }
    ],
    keyTakeaways: ["Utilisation très modérée tolérée", "Privilégier le vinaigre blanc", "Relancer avec un activateur si abus"],
    faq: [{ question: "Quelle quantité maximum ?", answer: "Un petit verre par semaine maximum." }]
  },
  {
    id: "8",
    title: "Distance fosse septique limite de propriété : La règle",
    slug: "distance-fosse-septique-limite-propriete",
    description: "Tout savoir sur les distances légales à respecter (voisins, arbres, puits) selon la norme NF DTU 64.1.",
    category: "Réglementation",
    author: "Antoine, Avocat",
    date: "2026-01-20",
    readTime: "5 min",
    content: "",
    sections: [
      {
        title: "Les distances minimales",
        content: "<p>3 mètres de la limite de propriété, 5 mètres de l'habitation, 35 mètres d'un puits ou captage d'eau potable.</p>"
      }
    ],
    keyTakeaways: ["3m des voisins minimum", "35m des points d'eau", "Interdiction sous les arbres"],
    faq: [{ question: "Peut-on obtenir une dérogation ?", answer: "Rarement, uniquement via accord écrit et validation SPANC." }]
  },
  {
    id: "9",
    title: "Comment nettoyer un bac à graisse de fosse septique ?",
    slug: "comment-nettoyer-bac-a-graisse",
    description: "Guide pratique pour l'entretien du bac à graisse. Fréquence, méthode et élimination des déchets.",
    category: "Maintenance",
    author: "Marc, Expert",
    date: "2026-01-15",
    readTime: "7 min",
    content: "",
    sections: [
      {
        title: "La méthode manuelle",
        content: "<p>Retirez la croûte de graisse en surface avec une pelle. Nettoyez les parois au jet d'eau. Ne jetez pas les graisses dans le jardin !</p>"
      }
    ],
    keyTakeaways: ["Tous les 6 mois idéalement", "Ne pas jeter les graisses aux WC", "Vérifier l'entrée et la sortie"],
    faq: [{ question: "Où jeter les graisses ?", answer: "Dans un sac poubelle hermétique avec les ordures ménagères." }]
  },
  {
    id: "10",
    title: "Fosse septique béton ou plastique : Avis Expert",
    slug: "fosse-septique-beton-plastique-avis",
    description: "Comparatif complet entre les cuves en béton et en polyéthylène. Résistance, prix et facilité de pose.",
    category: "Technique",
    author: "Jean-Marc, Expert",
    date: "2026-01-10",
    readTime: "8 min",
    content: "",
    sections: [
      {
        title: "Le béton : La robustesse",
        content: "<p>Idéal pour les terrains avec passage de véhicules (avec dalle de répartition) ou nappe phréatique haute.</p>"
      }
    ],
    keyTakeaways: ["Béton : lourd et solide", "Plastique : léger et étanche", "Le choix dépend du terrain"],
    faq: [{ question: "Laquelle est la moins chère ?", answer: "Le plastique est souvent moins cher à l'achat mais nécessite plus de sable." }]
  },
  {
    id: "11",
    title: "Gaz toxique fosse septique H2S : Danger de mort",
    slug: "gaz-toxique-fosse-septique-h2s-danger",
    description: "Comprendre les risques liés au sulfure d'hydrogène. Comment se protéger et assurer une ventilation sûre.",
    category: "Sécurité",
    author: "Dr. Claire, Microbiologiste",
    date: "2026-01-05",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "Le tueur silencieux",
        content: "<p>Le H2S sent l'œuf pourri à faible dose, mais devient inodore à haute dose car il paralyse l'odorat. Il est mortel en quelques minutes.</p>"
      }
    ],
    keyTakeaways: ["Ne jamais descendre dans une fosse", "Ventilation primaire et secondaire vitales", "Odeur d'œuf pourri = alerte"],
    faq: [{ question: "Comment détecter le gaz ?", answer: "Il existe des détecteurs portatifs pour les professionnels." }]
  },
  {
    id: "12",
    title: "Planter au-dessus d'un épandage : Quelles plantes ?",
    slug: "planter-au-dessus-epandage-quelles-plantes",
    description: "Aménager son jardin sans détruire son assainissement. Liste des végétaux autorisés et interdits.",
    category: "Jardin",
    author: "Lucie, Paysagiste",
    date: "2025-12-20",
    readTime: "5 min",
    content: "",
    sections: [
      {
        title: "Les racines : Ennemi n°1",
        content: "<p>Les racines cherchent l'eau et pénètrent dans les drains, les bouchant totalement. Évitez les saules, peupliers et thuyas.</p>"
      }
    ],
    keyTakeaways: ["Gazon uniquement au-dessus", "Fleurs à racines superficielles", "Arbres à 3m minimum"],
    faq: [{ question: "Peut-on mettre un potager ?", answer: "Déconseillé pour des raisons sanitaires (risques bactériens)." }]
  },
  {
    id: "13",
    title: "Contre-visite SPANC fosse septique : Prix et Déroulement",
    slug: "contre-visite-spanc-prix-deroulement",
    description: "Tout savoir sur la procédure de vérification après travaux ou mise en demeure. Délais et coûts associés.",
    category: "Réglementation",
    author: "Sophie, Technicienne SPANC",
    date: "2025-12-15",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "L'objectif de la contre-visite",
        content: "<p>Vérifier que les travaux demandés ont été réalisés conformément au projet validé. Elle donne lieu au certificat de conformité.</p>"
      }
    ],
    keyTakeaways: ["Certificat de conformité final", "Prix variable selon commune", "Obligatoire avant remblaiement"],
    faq: [{ question: "Quel est le prix moyen ?", answer: "Entre 80€ et 150€ généralement." }]
  },
  {
    id: "14",
    title: "Bruit d'eau qui coule dans la fosse septique la nuit : Causes",
    slug: "bruit-eau-coule-fosse-septique-nuit",
    description: "Vous entendez un écoulement continu dans vos canalisations ou votre fosse alors que tout est fermé ? Diagnostic d'une fuite silencieuse.",
    category: "Diagnostic",
    author: "Jean-Marc",
    date: "2026-02-24",
    readTime: "5 min",
    content: "",
    sections: [
      {
        title: "La chasse d'eau qui fuit : le coupable n°1",
        content: "<p>Un filet d'eau invisible dans la cuvette des WC peut représenter jusqu'à 150 litres par jour. La nuit, le silence permet d'entendre cet écoulement continu qui remplit inutilement votre fosse et sature votre épandage.</p>"
      },
      {
        title: "Le groupe de sécurité du chauffe-eau",
        content: "<p>Si votre chauffe-eau est raccordé au réseau d'eaux usées, un groupe de sécurité défectueux peut laisser échapper un goutte-à-goutte permanent, créant un bruit de ruissellement dans les tuyaux.</p>"
      }
    ],
    keyTakeaways: ["Vérifier le compteur d'eau la nuit", "Mettre du colorant dans le réservoir WC", "Une fuite sature l'épandage"],
    faq: [{ question: "Est-ce grave pour la fosse ?", answer: "Oui, un excès d'eau claire dilue les bactéries et sature l'épandage prématurément." }]
  },
  {
    id: "15",
    title: "Peut-on rouler ou garer une voiture sur une fosse septique ?",
    slug: "rouler-garer-voiture-sur-fosse-septique",
    description: "Les règles de résistance à la compression pour les cuves en béton et en plastique. Comment aménager un parking au-dessus de son ANC.",
    category: "Réglementation",
    author: "Marc",
    date: "2026-02-23",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "Interdiction stricte sans aménagement",
        content: "<p>Il est formellement interdit de rouler sur une fosse septique (plastique ou béton) sans une dalle de répartition des charges. Le poids d'un véhicule (1,5 à 2 tonnes) risque de fissurer ou d'écraser la cuve.</p>"
      },
      {
        title: "La solution : la dalle de répartition",
        content: "<p>Pour créer un parking, il faut couler une dalle en béton armé indépendante de la cuve, reposant sur le terrain naturel non remanié autour de la fosse. Les regards doivent être équipés de tampons en fonte classe B125 minimum.</p>"
      }
    ],
    keyTakeaways: ["Ne jamais rouler sur une cuve nue", "Dalle de répartition obligatoire", "Tampons fonte classe B125"],
    faq: [{ question: "Et pour un tracteur tondeuse ?", answer: "Un tracteur tondeuse léger (moins de 300kg) peut passer sur une fosse béton, mais reste déconseillé sur une fosse plastique peu enterrée." }]
  },
  {
    id: "16",
    title: "Comment cacher un regard de fosse septique dans son jardin ?",
    slug: "comment-cacher-regard-fosse-septique-jardin",
    description: "Astuces d'aménagement paysager pour dissimuler les plaques disgracieuses de votre assainissement tout en gardant un accès pour la vidange.",
    category: "Jardin",
    author: "Lucie",
    date: "2026-02-22",
    readTime: "4 min",
    content: "",
    sections: [
      {
        title: "Les solutions amovibles",
        content: "<p>Le regard doit rester accessible à tout moment. Privilégiez les pots de fleurs sur roulettes, les faux rochers en résine creux, ou les nains de jardin légers. Évitez tout ce qui nécessite des outils pour être déplacé.</p>"
      },
      {
        title: "Ce qu'il ne faut absolument pas faire",
        content: "<p>Ne jamais recouvrir le regard de terre, de gazon ou de béton. En cas d'urgence (débordement), le terrassier ou le vidangeur doit pouvoir ouvrir la fosse en moins de 5 minutes sans avoir à creuser.</p>"
      }
    ],
    keyTakeaways: ["Le regard doit rester accessible", "Utiliser des faux rochers légers", "Ne jamais enterrer la plaque"],
    faq: [{ question: "Puis-je peindre la plaque en béton ?", answer: "Oui, une peinture extérieure pour sol béton (couleur verte ou terre) est une excellente solution économique." }]
  },
  {
    id: "17",
    title: "Fosse septique qui se remplit d'eau de pluie : Que faire ?",
    slug: "fosse-septique-remplit-eau-de-pluie",
    description: "L'eau de pluie sature votre fosse et fait déborder votre épandage ? Comment identifier et supprimer les raccordements parasites.",
    category: "Diagnostic",
    author: "Sophie",
    date: "2026-02-21",
    readTime: "7 min",
    content: "",
    sections: [
      {
        title: "Le danger des eaux pluviales",
        content: "<p>Les eaux pluviales ne doivent jamais entrer dans la fosse. Elles noient les bactéries, remuent les boues (qui partent dans l'épandage) et saturent le terrain. C'est une non-conformité majeure lors du contrôle SPANC.</p>"
      },
      {
        title: "Identifier la fuite",
        content: "<p>Vérifiez l'étanchéité des regards de visite (joints ciment fissurés). Contrôlez également qu'aucune gouttière ou regard de cour n'a été raccordé par erreur au réseau d'eaux usées (test au colorant fluorescéine).</p>"
      }
    ],
    keyTakeaways: ["Séparation stricte eaux usées / eaux pluviales", "Refaire les joints des regards", "Utiliser un colorant de traçage"],
    faq: [{ question: "Le SPANC peut-il exiger des travaux ?", answer: "Oui, la séparation des réseaux est une obligation légale stricte." }]
  },
  {
    id: "18",
    title: "Papier toilette pour fosse septique : Lequel choisir ?",
    slug: "quel-papier-toilette-pour-fosse-septique",
    description: "Épaisseurs, biodégradabilité, rouleaux aquatube... Le vrai du faux sur le papier hygiénique et son impact sur les boues de votre fosse.",
    category: "Entretien",
    author: "Dr. Claire",
    date: "2026-02-20",
    readTime: "5 min",
    content: "",
    sections: [
      {
        title: "Le test du bocal d'eau",
        content: "<p>Pour savoir si votre papier est adapté, mettez une feuille dans un bocal d'eau, fermez et secouez. S'il se désagrège en petits flocons en quelques secondes, il est parfait. S'il reste intact, changez de marque.</p>"
      },
      {
        title: "Le danger des rouleaux dits biodégradables",
        content: "<p>Même s'ils sont vendus comme 'jetables dans les toilettes', les rouleaux en carton (Aquatube) mettent trop de temps à se décomposer dans une fosse septique et contribuent à l'épaississement de la croûte de surface.</p>"
      }
    ],
    keyTakeaways: ["Faire le test du bocal", "Éviter le papier ultra-molletonné", "Ne jamais jeter les rouleaux en carton"],
    faq: [{ question: "Faut-il acheter du papier spécial fosse ?", answer: "Non, un papier toilette classique (100% cellulose) de bonne qualité suffit amplement." }]
  },
  {
    id: "19",
    title: "Odeur de fosse septique uniquement quand on tire la chasse",
    slug: "odeur-fosse-septique-quand-on-tire-la-chasse",
    description: "Pourquoi une mauvaise odeur remonte des canalisations précisément au moment où vous actionnez la chasse d'eau ? Le problème du désiphonnage.",
    category: "Diagnostic",
    author: "Jean-Marc",
    date: "2026-02-19",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "Le phénomène de désiphonnage",
        content: "<p>Lorsqu'on tire la chasse, le volume d'eau crée un effet piston dans le tuyau. S'il n'y a pas de ventilation primaire, cette dépression aspire l'eau des siphons voisins (douche, lavabo). Le siphon vide laisse alors passer les gaz de la fosse.</p>"
      },
      {
        title: "La solution : le clapet anti-vide",
        content: "<p>Si vous ne pouvez pas installer une ventilation primaire jusqu'au toit, la pose d'un clapet aérateur (ou clapet anti-vide) sur la canalisation, souvent caché sous le lavabo ou derrière les WC, permet de casser cette dépression.</p>"
      }
    ],
    keyTakeaways: ["L'effet piston vide les siphons", "Installer un clapet anti-vide", "Vérifier la ventilation primaire"],
    faq: [{ question: "Combien coûte un clapet anti-vide ?", answer: "Entre 15€ et 30€ en magasin de bricolage, très facile à installer soi-même." }]
  },
  {
    id: "20",
    title: "Faut-il remettre en eau une fosse septique après vidange ?",
    slug: "remettre-eau-fosse-septique-apres-vidange",
    description: "L'étape cruciale (et souvent oubliée) après le passage du camion hydrocureur pour éviter l'écrasement de la cuve et relancer les bactéries.",
    category: "Entretien",
    author: "Marc",
    date: "2026-02-18",
    readTime: "5 min",
    content: "",
    sections: [
      {
        title: "Le risque d'écrasement ou de remontée",
        content: "<p>Une fosse vide est soumise à la pression de la terre environnante. Si le terrain est humide (nappe phréatique haute), la cuve en plastique vide peut remonter à la surface comme un bateau. Il faut la remplir d'eau claire immédiatement après la vidange.</p>"
      },
      {
        title: "Relancer la flore bactérienne",
        content: "<p>Le vidangeur professionnel doit toujours laisser un fond de boue (environ 10%) au fond de la cuve. Ce résidu contient les bactéries nécessaires pour réensemencer la fosse une fois remplie d'eau.</p>"
      }
    ],
    keyTakeaways: ["Remplir d'eau immédiatement après vidange", "Évite l'écrasement de la cuve", "Garder 10% de boues pour les bactéries"],
    faq: [{ question: "Qui doit fournir l'eau ?", answer: "C'est généralement au propriétaire de fournir l'eau via un tuyau d'arrosage pendant que le vidangeur termine son intervention." }]
  },
  {
    id: "21",
    title: "Racines dans les drains d'épandage : Comment s'en débarrasser ?",
    slug: "racines-drains-epandage-comment-debarrasser",
    description: "Les racines d'arbres ont envahi et bouché vos tuyaux d'épandage. Solutions curatives (furet, hydrocurage) et préventives.",
    category: "Maintenance",
    author: "Lucie",
    date: "2026-02-17",
    readTime: "8 min",
    content: "",
    sections: [
      {
        title: "Le diagnostic par caméra",
        content: "<p>Avant de tout casser, une inspection vidéo des drains permet de localiser exactement le bouchon de racines. Les arbres comme les saules, peupliers ou thuyas sont souvent les coupables, attirés par l'humidité et les nutriments.</p>"
      },
      {
        title: "L'hydrocurage avec buse coupe-racines",
        content: "<p>N'utilisez jamais de destructeur de souche chimique (qui tuerait votre fosse). L'intervention d'un camion hydrocureur équipé d'une buse rotative coupe-racines permet de broyer le bouchon. Ensuite, il faudra souvent abattre l'arbre responsable pour éviter la récidive.</p>"
      }
    ],
    keyTakeaways: ["Inspection vidéo recommandée", "Hydrocurage mécanique uniquement", "Pas de produits chimiques"],
    faq: [{ question: "L'assurance habitation couvre-t-elle ce dégât ?", answer: "Rarement, car il s'agit d'un défaut d'entretien ou d'une erreur de plantation initiale (non-respect des distances)." }]
  },
  {
    id: "22",
    title: "Comment combler et neutraliser une fosse septique abandonnée ?",
    slug: "combler-neutraliser-fosse-septique-abandonnee",
    description: "Vous venez de vous raccorder au tout-à-l'égout ? La loi impose de neutraliser l'ancienne fosse. Étapes, matériaux et réglementation.",
    category: "Réglementation",
    author: "Sophie",
    date: "2026-02-16",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "L'obligation légale",
        content: "<p>L'article L.1331-5 du Code de la santé publique impose de mettre hors d'état de servir toute fosse septique lors d'un raccordement au réseau public, pour éviter les risques d'effondrement ou de dégagement de gaz toxiques.</p>"
      },
      {
        title: "Les étapes de neutralisation",
        content: "<p>1. Vidange complète et nettoyage par un professionnel agréé. 2. Percement du fond de la cuve pour empêcher la rétention d'eau pluviale. 3. Comblement total avec du sable, des graviers ou du béton maigre.</p>"
      }
    ],
    keyTakeaways: ["Vidange professionnelle obligatoire", "Percer le fond de la cuve", "Combler avec du sable ou gravier"],
    faq: [{ question: "Puis-je la transformer en récupérateur d'eau de pluie ?", answer: "Oui, c'est légal après une désinfection totale et l'application d'un enduit d'étanchéité intérieur, mais l'opération est souvent coûteuse." }]
  },
  {
    id: "23",
    title: "Yaourt périmé dans la fosse septique : Mythe ou réalité ?",
    slug: "yaourt-perime-fosse-septique-mythe-realite",
    description: "L'astuce de grand-mère du yaourt jeté dans les toilettes pour activer les bactéries fonctionne-t-elle vraiment ? Analyse scientifique.",
    category: "Entretien",
    author: "Dr. Claire",
    date: "2026-02-15",
    readTime: "4 min",
    content: "",
    sections: [
      {
        title: "Bactéries lactiques vs anaérobies",
        content: "<p>Le yaourt contient des ferments lactiques (Lactobacillus). Or, une fosse septique a besoin de bactéries anaérobies spécifiques pour digérer la cellulose (papier) et les matières fécales. Les bactéries du yaourt ne sont donc pas les plus adaptées à ce milieu.</p>"
      },
      {
        title: "Une astuce inoffensive mais peu efficace",
        content: "<p>Jeter un yaourt périmé ne fera aucun mal à votre fosse, mais son impact sur la liquéfaction des boues est quasi nul. Pour relancer une fosse, préférez un activateur biologique du commerce ou, mieux, demandez à votre vidangeur de laisser un fond de boue.</p>"
      }
    ],
    keyTakeaways: ["Les bactéries du yaourt ne sont pas adaptées", "Astuce inoffensive mais inefficace", "Privilégier les activateurs spécifiques"],
    faq: [{ question: "Et la levure de boulanger ?", answer: "Même constat. La levure (Saccharomyces cerevisiae) n'est pas la souche bactérienne dont la fosse a besoin pour dégrader les matières organiques." }]
  },
  // --- Long tail Var (83) – SEO local / géolocalisé ---
  {
    id: "24",
    title: "Vidange fosse septique Var : prix 2026 et entreprises agréées (83)",
    slug: "vidange-fosse-septique-var-prix-entreprises-agreees-83",
    description: "Tarifs vidange fosse septique dans le Var, liste des vidangeurs agréés par département, et obligations SPANC pour les communes du 83.",
    category: "Var (83)",
    author: "Équipe Technique Var",
    date: "2026-02-25",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "Prix moyen d'une vidange dans le Var",
        content: "<p>Dans le Var (83), le coût d'une vidange de fosse septique ou toutes eaux varie entre <strong>250€ et 450€</strong> selon la capacité (3 à 5 m³), l'accessibilité du regard et la commune (Toulon, Draguignan, Fréjus, Hyères…). Les entreprises agréées par la préfecture appliquent des tarifs encadrés ; demandez toujours un bon de vidange pour le SPANC.</p>"
      },
      {
        title: "Où trouver un vidangeur agréé dans le Var ?",
        content: "<p>Seuls les vidangeurs agréés par le préfet du Var peuvent évacuer les matières vers les stations de traitement agréées (ex. STEP). Consultez la liste tenue par la DDPP du Var ou votre SPANC (syndicat ou commune). Les professionnels de la côte (Saint-Raphaël, Sainte-Maxime, Cogolin) et de l'arrière-pays (Brignoles, Lorgues) sont référencés sur demande au SPANC 83.</p>"
      },
      {
        title: "Fréquence recommandée dans le Var",
        content: "<p>La réglementation impose une vidange <strong>tous les 4 ans minimum</strong> (ou selon préconisation du SPANC après contrôle). En terrain sableux ou à forte utilisation (résidence secondaire en été), un entretien tous les 2 à 3 ans peut être recommandé par votre SPANC varois.</p>"
      }
    ],
    keyTakeaways: ["Prix type Var : 250€–450€ selon capacité et accès", "Vidangeur agréé obligatoire (liste DDPP/SPANC 83)", "Vidange tous les 4 ans minimum, bon à conserver"],
    faq: [
      { question: "Le SPANC du Var peut-il imposer une vidange plus fréquente ?", answer: "Oui. Après contrôle, le SPANC peut exiger une vidange dans un délai plus court si le niveau de boues est trop élevé." },
      { question: "Où est traitée la vidange des fosses dans le Var ?", answer: "Les matières sont acheminées vers des centres de traitement agréés (STEP ou centres dédiés). Le vidangeur doit remettre un bordereau de suivi." }
    ]
  },
  {
    id: "25",
    title: "Contrôle SPANC Var (83) : délais, tarifs et communes",
    slug: "controle-spanc-var-83-delais-tarifs-communes",
    description: "Tout sur le contrôle assainissement non collectif dans le Var. Délais de passage, grille tarifaire 83, et démarches par commune (Toulon, Draguignan, Fréjus…).",
    category: "Var (83)",
    author: "Équipe Technique Var",
    date: "2026-02-25",
    readTime: "7 min",
    content: "",
    sections: [
      {
        title: "Qui fait le SPANC dans le Var ?",
        content: "<p>Dans le Var, le contrôle de l'assainissement non collectif est assuré soit par des <strong>SPANC communaux</strong>, soit par des <strong>syndicats intercommunaux</strong> (ex. SIVOM). Chaque commune du 83 est rattachée à un SPANC ; en cas de vente, le diagnostic est obligatoire et doit dater de moins de 3 ans.</p>"
      },
      {
        title: "Tarifs des contrôles SPANC Var",
        content: "<p>Les tarifs du contrôle SPANC dans le Var varient selon les secteurs : comptez en moyenne <strong>150€ à 250€</strong> pour un contrôle de conformité (visite de l'installation + rapport). La redevance annuelle d'assainissement (part ANC) est fixée par la collectivité ; elle apparaît sur la taxe foncière ou la facture d'eau.</p>"
      },
      {
        title: "Délais et mise en conformité dans le 83",
        content: "<p>En cas de non-conformité, le SPANC du Var fixe un délai pour les travaux (souvent 1 à 4 ans selon la gravité). Les communes du littoral (Fréjus, Saint-Raphaël, Hyères) et de l'intérieur (Brignoles, Draguignan, Lorgues) appliquent les mêmes règles issues du Code de la santé publique.</p>"
      }
    ],
    keyTakeaways: ["SPANC communal ou intercommunal dans tout le Var", "Contrôle type : 150€–250€ selon secteur", "Délai de mise en conformité fixé par le SPANC 83"],
    faq: [
      { question: "Comment connaître mon SPANC dans le Var ?", answer: "Votre mairie ou le site du syndicat des eaux de votre secteur indique le SPANC compétent pour votre commune (83)." },
      { question: "Le contrôle SPANC est-il obligatoire à la vente dans le Var ?", answer: "Oui. Un diagnostic ANC de moins de 3 ans est obligatoire pour toute vente d'un bien non raccordé au tout-à-l'égout dans le 83." }
    ]
  },
  {
    id: "26",
    title: "Fosse septique terrain pentu Var : solutions et normes (83)",
    slug: "fosse-septique-terrain-pentu-var-solutions-normes-83",
    description: "Installer ou réhabiliter une fosse septique sur un terrain en pente dans le Var. Contraintes, solutions techniques (relevage, épandage en dérivation) et avis SPANC 83.",
    category: "Var (83)",
    author: "Équipe Technique Var",
    date: "2026-02-25",
    readTime: "8 min",
    content: "",
    sections: [
      {
        title: "Les contraintes du relief varois",
        content: "<p>Dans le Var, de nombreuses parcelles sont en pente (arrière-pays, côteaux). Pour une fosse toutes eaux, la sortie doit être <strong>en contrebas</strong> de l'entrée pour assurer l'écoulement gravitaire. Si la pente est trop forte, un poste de relevage peut être nécessaire entre la fosse et l'épandage ; le SPANC du 83 valide au cas par cas.</p>"
      },
      {
        title: "Épandage en dérivation et pente",
        content: "<p>L'épandage doit être implanté sur un sol en pente faible (&lt; 5 %) pour éviter le ruissellement. En terrain pentu dans le Var, les drains peuvent être disposés en dérivation (en courbes de niveau) plutôt qu'en ligne. La filière compacte (filtre à sable, filtre coco) est parfois retenue quand la surface plane est limitée.</p>"
      },
      {
        title: "Cas concret : réhabilitation à Bormes-les-Mimosas",
        content: "<p><em>Maison en pente, vue mer.</em> La fosse existante était en amont ; l'épandage en aval saturait par temps de pluie. <strong>Solution validée SPANC Var :</strong> pose d'une micro-station en remplacement, avec rejet en bas de pente vers une zone d'épandage rétrécie mais suffisante. Devis : 9 200€ (subvention ANAH partielle).</p>"
      }
    ],
    keyTakeaways: ["Écoulement gravitaire obligatoire fosse → épandage", "Poste de relevage possible si pente forte (accord SPANC 83)", "Épandage en courbes de niveau ou filière compacte selon terrain"],
    faq: [
      { question: "Peut-on mettre la fosse en bas de pente dans le Var ?", answer: "Oui, si les eaux usées sont relevées depuis la maison jusqu'à la fosse par une pompe de relevage adaptée (norme NF)." },
      { question: "Quelle pente max pour un épandage dans le 83 ?", answer: "En pratique, une pente inférieure à 5 % est recommandée. Au-delà, le SPANC Var peut exiger une étude de sol et un dimensionnement spécifique." }
    ]
  },
  {
    id: "27",
    title: "Installation fosse septique Var : devis et réglementation (83)",
    slug: "installation-fosse-septique-var-devis-reglementation-83",
    description: "Construire ou remplacer une fosse septique dans le Var. Étude de sol, choix de filière, démarches SPANC 83 et fourchettes de prix par type d'installation.",
    category: "Var (83)",
    author: "Équipe Technique Var",
    date: "2026-02-25",
    readTime: "7 min",
    content: "",
    sections: [
      {
        title: "Démarches avant travaux dans le Var",
        content: "<p>Avant toute installation ou réhabilitation d'un ANC dans le Var, vous devez déposer une <strong>demande d'installation</strong> auprès de votre SPANC (formulaire type + plan de masse + étude de sol si exigée). Le SPANC du 83 émet un avis sur la filière et l'implantation. Sans accord, les travaux ne sont pas conformes et la contre-visite sera défavorable.</p>"
      },
      {
        title: "Prix d'une installation complète dans le 83",
        content: "<p>Pour une maison de 4 à 5 EH dans le Var : <strong>fosse toutes eaux + préfiltre pouzzolane + épandage</strong>, comptez environ <strong>8 000€ à 14 000€</strong> (terrain favorable). Micro-station : 10 000€ à 16 000€. Filtre compact : 9 000€ à 15 000€. Les prix varient selon l'accessibilité (îles, côteaux) et la nature du sol (sable, argile, roche).</p>"
      },
      {
        title: "Étude de sol et filière adaptée au Var",
        content: "<p>En sol sableux (littoral varois), l'épandage classique est souvent possible. En sol argileux ou à faible perméabilité (arrière-pays), le SPANC 83 peut imposer une filière compacte (filtre à sable, coco) ou une micro-station avec rejet en irrigation. L'étude de sol (type G1 ou G2) est souvent demandée pour les installations neuves.</p>"
      }
    ],
    keyTakeaways: ["Demande SPANC obligatoire avant travaux dans le Var", "Devis type 83 : 8 000€–14 000€ fosse + épandage", "Étude de sol souvent requise pour filière adaptée"],
    faq: [
      { question: "Faut-il un architecte pour une fosse dans le Var ?", answer: "Non, mais un bureau d'études ou un installateur agréé peut rédiger le dossier SPANC. Pour une construction neuve, le plan d'assainissement est intégré au permis." },
      { question: "Quelle fosse choisir en sol sableux dans le 83 ?", answer: "Fosse toutes eaux + préfiltre + épandage traditionnel convient en sol sableux. Le SPANC Var valide selon la surface disponible et le nombre d'EH." }
    ]
  },
  {
    id: "28",
    title: "Réhabilitation fosse septique Var : aides et professionnels (83)",
    slug: "rehabilitation-fosse-septique-var-aides-professionnels-83",
    description: "Mettre aux normes une vieille fosse septique dans le Var. Aides ANAH, MaPrimeRénov', prêt à taux zéro, et choix d'un installateur agréé dans le 83.",
    category: "Var (83)",
    author: "Équipe Technique Var",
    date: "2026-02-25",
    readTime: "6 min",
    content: "",
    sections: [
      {
        title: "Aides financières pour l'ANC dans le Var",
        content: "<p>Dans le Var (83), la réhabilitation d'une fosse septique non conforme peut être éligible à <strong>MaPrimeRénov'</strong> (sous conditions de ressources et de performance du projet), à l'<strong>ANAH</strong> (habitat indigne ou décent), et au <strong>prêt à taux zéro (PTZ)</strong> si travaux lourds. Certaines communes ou EPCI du Var ajoutent des subventions locales ; renseignez-vous en mairie.</p>"
      },
      {
        title: "Choisir un installateur agréé dans le 83",
        content: "<p>Les installateurs d'ANC dans le Var doivent être qualifiés (label Qualité Assainissement ou reconnu par les fabricants). Pour une micro-station, le contrat d'entretien est souvent obligatoire. Demandez plusieurs devis (Toulon, Draguignan, Fréjus, Brignoles) et vérifiez que le professionnel travaille avec le SPANC pour la conception et la contre-visite.</p>"
      },
      {
        title: "Étapes : de la mise en demeure au certificat de conformité",
        content: "<p>Après contrôle SPANC défavorable dans le Var, vous recevez un rapport avec délai de travaux. Une fois les travaux réalisés, vous demandez une <strong>contre-visite SPANC</strong>. Si tout est conforme, le SPANC 83 délivre le certificat de conformité. Conservez-le pour toute revente ou assurance.</p>"
      }
    ],
    keyTakeaways: ["MaPrimeRénov' et ANAH peuvent financer la réhabilitation dans le Var", "Installateur qualifié et accord SPANC 83 indispensables", "Contre-visite SPANC pour obtenir le certificat de conformité"],
    faq: [
      { question: "MaPrimeRénov' couvre-t-elle la fosse septique dans le Var ?", answer: "Oui, sous conditions (résidence principale, revenus, nature des travaux). Le montant dépend du bouquet de travaux et des plafonds." },
      { question: "Combien coûte une réhabilitation complète dans le 83 ?", answer: "Comptez 6 000€ à 12 000€ pour un remplacement fosse + épandage, selon accès et filière. Les aides peuvent couvrir 20 à 50 % du coût." }
    ]
  }
];

export const longTailKeywords = [
  "odeur fosse septique dans la maison par temps de pluie",
  "quand changer la pouzzolane fosse septique",
  "fosse septique non conforme vente maison qui paie",
  "nettoyage filtre pouzzolane fosse septique",
  "remplacer pouzzolane par un autre materiau",
  "contre visite spanc fosse septique prix",
  "faut il mettre des bacteries dans une fosse septique",
  "yaourt perime fosse septique mythe ou realite",
  "fosse septique qui deborde apres vidange",
  "eau qui stagne sur le filtre fosse septique",
  "prix changement filtre pouzzolane",
  "cout mise aux normes fosse septique 2026",
  "comment deboucher un epandage de fosse septique",
  "duree de vie d'un epandage fosse septique",
  "fosse septique pleine en 1 mois pourquoi",
  "odeur oeuf pourri fosse septique exterieur",
  "extracteur eolien fosse septique obligatoire",
  "comment savoir si le drain de la fosse est bouche",
  "racines dans epandage fosse septique que faire",
  "distance fosse septique limite de propriete",
  "peut on rouler sur une fosse septique",
  "plaque beton sur fosse septique",
  "regard de repartition fosse septique plein d'eau",
  "bac a graisse obligatoire avec fosse toutes eaux",
  "comment nettoyer bac a graisse fosse septique",
  "frequence vidange bac a graisse",
  "fosse septique beton ou plastique avis",
  "micro station ou fosse septique avec epandage",
  "filtre compact coco ou pouzzolane",
  "duree de vie filtre compact coco",
  "entretien filtre compact noisette",
  "subvention anah mise aux normes fosse septique",
  "pret a taux zero assainissement non collectif",
  "spanc obligation de travaux delai",
  "amende fosse septique non conforme",
  "comment cacher les regards de fosse septique",
  "planter au dessus d'un epandage",
  "gaz toxique fosse septique h2s danger",
  "comment ventiler une fosse septique",
  "tuyau ventilation fosse septique diametre",
  "clapet aeraulique fosse septique",
  "eau de javel et fosse septique",
  "papier toilette fosse septique",
  "lingettes biodegradables fosse septique",
  "medicaments antibiotiques fosse septique",
  "comment relancer une fosse septique apres vidange",
  "activateur biologique fosse septique maison",
  "epandage fosse septique terrain argileux",
  "tertio fosse septique",
  "lit d'epandage a faible profondeur",
  "vidange fosse septique var prix 83",
  "controle spanc var delais tarifs communes",
  "fosse septique terrain pentu var",
  "installation fosse septique var devis 83",
  "rehabilitation fosse septique var aides",
];
