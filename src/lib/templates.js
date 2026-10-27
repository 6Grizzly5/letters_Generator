<<<<<<< HEAD
export const CLOSING = "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.";

// style : "band" = bandeau en haut, "sidebar" = liseré à gauche
// Variables : {company} {school} {level} {field} {duration} {startDate} {availability} {skillsSentence}
// Accords : {e} {etudiant} {Etudiant} {serieux} {rigoureux} {Curieux} {heureux}
=======
export const CLOSING =
  "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.";

// style : "band" = bandeau en haut, "sidebar" = liseré à gauche
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
export const TEMPLATES = {
  directe: {
    label: "Directe et concise",
    accent: "#1F4E79",
    style: "band",
<<<<<<< HEAD
    subject: "Demande de stage en {field}",
    paragraphs: [
      "Actuellement {etudiant} en {level}, parcours {field}, à {school}, je vous adresse ma candidature pour un stage au sein de {company}. Arrivé{e} à une étape importante de ma formation, je souhaite désormais confronter mes connaissances théoriques à la réalité d'un environnement professionnel.",
      "Au cours de mon cursus, j'ai appris à analyser un besoin, à concevoir une solution, à organiser mon travail et à mener des projets concrets de bout en bout. J'ai également développé le sens de la méthode et du détail, indispensables pour travailler de manière organisée et collaborative.",
      "Je souhaite aujourd'hui intégrer une équipe afin de découvrir ses méthodes de travail, ses outils et ses exigences au quotidien. Je suis {serieux}, motivé{e} et {rigoureux}, et prêt{e} à m'investir pleinement dans les missions qui me seront confiées.",
      "Je suis conscient{e} qu'un stage est avant tout une période d'apprentissage. J'accorde donc une grande importance à l'écoute, à la ponctualité et au respect des consignes. Je m'efforcerai de gagner rapidement en autonomie tout en sachant demander conseil lorsque cela est nécessaire.",
=======
    subject: "Demande de stage en informatique",
    paragraphs: [
      "Actuellement étudiant en troisième année de Licence en Génie Logiciel à {school}, je vous adresse ma candidature pour un stage au sein de {company}. Arrivé à une étape importante de ma formation, je souhaite désormais confronter mes connaissances théoriques à la réalité d'un environnement professionnel.",
      "Au cours de mon cursus, j'ai appris à analyser un besoin, à concevoir une application, à structurer une base de données et à développer des solutions fonctionnelles. J'ai également pris l'habitude d'utiliser des outils de gestion de versions comme Git, indispensables pour travailler de manière organisée et collaborative sur un même projet.",
      "Je souhaite aujourd'hui intégrer une équipe informatique afin de découvrir ses méthodes de travail, ses outils et ses exigences au quotidien. Sérieux, motivé et rigoureux, je suis prêt à m'investir pleinement dans les missions qui me seront confiées, qu'il s'agisse de développement, de maintenance, de tests ou de documentation.",
      "Je suis conscient qu'un stage est avant tout une période d'apprentissage. J'accorde donc une grande importance à l'écoute, à la ponctualité et au respect des consignes. Je m'efforcerai de gagner rapidement en autonomie tout en sachant demander conseil lorsque cela est nécessaire.",
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
      "Je suis disponible {availability}. Je me tiens à votre entière disposition pour un entretien, afin de vous présenter plus en détail mon parcours et ma motivation, et je vous remercie de l'attention que vous porterez à ma demande.",
      CLOSING,
    ],
  },
  classique: {
    label: "Classique et formelle",
    accent: "#172033",
    style: "band",
<<<<<<< HEAD
    subject: "Candidature pour un stage en {field}",
    paragraphs: [
      "{Etudiant} en {level}, parcours {field}, à {school}, je souhaite effectuer un stage professionnel au sein de {company}. Cette démarche s'inscrit dans la continuité de ma formation et répond à mon désir de mettre en pratique, dans un cadre réel, les connaissances acquises au cours de mon cursus.",
      "Ma formation m'a permis d'acquérir des bases solides dans mon domaine et d'en comprendre les enjeux. Elle m'a également appris à analyser un problème, à proposer une solution adaptée et à présenter clairement mon travail.",
      "Intégrer votre structure représenterait pour moi une occasion précieuse de mieux comprendre les exigences du métier, de progresser auprès de professionnels expérimentés et de participer concrètement aux travaux de votre équipe. Je suis convaincu{e} que cette expérience enrichira durablement mon parcours.",
      "Je mesure l'importance de la confiance qui accompagne chaque mission confiée à un stagiaire. Je m'engage à faire preuve de sérieux, de discrétion et d'esprit d'équipe, et à tirer le meilleur parti des conseils qui me seront donnés.",
      "Je suis ouvert{e} à toute mission en lien avec ma formation et je m'adapterai volontiers aux priorités de votre service.",
      "Disponible {availability}, je serais {heureux} de pouvoir vous présenter plus en détail ma motivation lors d'un entretien. Je vous prie d'agréer, Madame, Monsieur, l'expression de ma considération distinguée.",
=======
    subject: "Candidature pour un stage en informatique",
    paragraphs: [
      "Étudiant en troisième année de Licence, parcours Génie Logiciel, à {school}, je souhaite effectuer un stage professionnel au sein de {company}. Cette démarche s'inscrit dans la continuité de ma formation et répond à mon désir de mettre en pratique, dans un cadre réel, les connaissances acquises au cours de mon cursus.",
      "Ma formation m'a permis d'acquérir des bases solides en conception et développement d'applications, en modélisation, en bases de données ainsi qu'en outils de gestion de versions. Elle m'a également appris à analyser un problème, à proposer une solution adaptée et à présenter clairement mon travail.",
      "Intégrer votre structure représenterait pour moi une occasion précieuse de mieux comprendre les exigences du métier, de progresser auprès de professionnels expérimentés et de participer concrètement aux travaux de votre équipe. Je suis convaincu que cette expérience enrichira durablement mon parcours.",
      "Rigoureux, ponctuel et attentif, je mesure l'importance de la confiance qui accompagne chaque mission confiée à un stagiaire. Je m'engage à faire preuve de sérieux, de discrétion et d'esprit d'équipe, et à tirer le meilleur parti des conseils qui me seront donnés.",
      "Je suis ouvert à toute mission en lien avec le développement logiciel, l'analyse des besoins, la gestion des données ou le support applicatif, et je m'adapterai volontiers aux priorités de votre service.",
      "Disponible {availability}, je serais heureux de pouvoir vous présenter plus en détail ma motivation lors d'un entretien. Je vous prie d'agréer, Madame, Monsieur, l'expression de ma considération distinguée.",
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
    ],
  },
  technique: {
    label: "Compétences techniques",
    accent: "#0F766E",
    style: "sidebar",
<<<<<<< HEAD
    subject: "Demande de stage en {field}",
    paragraphs: [
      "Dans le cadre de ma {level} en {field} à {school}, je recherche un stage au sein de {company} afin de renforcer mon expérience pratique et de me familiariser avec les méthodes de travail d'une équipe professionnelle.",
      "Au cours de ma formation et de mes projets, {skillsSentence}. J'ai également appris à concevoir mes travaux avant de les réaliser, en réfléchissant à leur structure et à leur organisation.",
      "Ces expériences m'ont appris à structurer mon travail, à vérifier mes réalisations, à corriger mes erreurs et à progresser face aux difficultés. J'ai développé le réflexe de chercher, de comprendre puis de documenter les solutions, ce qui me permet d'apprendre vite de nouveaux outils.",
      "Je souhaite mettre ces compétences au service de vos activités tout en développant de meilleures pratiques de travail et de collaboration en équipe, et en contribuant utilement aux projets qui me seront confiés.",
=======
    subject: "Demande de stage en développement logiciel",
    paragraphs: [
      "Dans le cadre de ma troisième année de Licence en Génie Logiciel à {school}, je recherche un stage au sein de {company} afin de renforcer mon expérience pratique et de me familiariser avec les méthodes de travail d'une équipe de développement.",
      "Au cours de ma formation et de mes projets personnels, j'ai travaillé avec des technologies telles que JavaScript, React, Python, Flask, SQL et Git. J'ai également abordé la modélisation avec Merise et UML, ce qui m'a appris à concevoir une application avant de la coder, en pensant à sa structure et à ses données.",
      "Ces expériences m'ont appris à structurer mon travail, à tester mes réalisations, à corriger mes erreurs et à progresser face aux difficultés techniques. J'ai développé le réflexe de chercher, de comprendre puis de documenter les solutions, ce qui me permet d'apprendre vite de nouveaux outils.",
      "Je souhaite mettre ces compétences au service de vos activités tout en développant de meilleures pratiques de conception, de programmation et de collaboration en équipe. Je suis particulièrement intéressé par la création d'applications web, la gestion des bases de données et l'amélioration de solutions existantes.",
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
      "Je suis disponible {availability} et reste à votre disposition pour un entretien, au cours duquel je pourrai vous présenter mes réalisations ainsi que ma motivation.",
      "Veuillez agréer, Madame, Monsieur, mes salutations respectueuses.",
    ],
  },
  apprentissage: {
    label: "Motivation et apprentissage",
    accent: "#6D28D9",
    style: "sidebar",
    subject: "Candidature pour un stage de formation",
    paragraphs: [
<<<<<<< HEAD
      "{Etudiant} en {level}, parcours {field}, à {school}, je souhaite rejoindre {company} dans le cadre d'un stage qui me permettra de confronter ma formation aux réalités du monde professionnel et de gagner en maturité dans mon futur métier.",
      "Au-delà des connaissances techniques, je souhaite apprendre à travailler selon les méthodes et les priorités d'une équipe, à communiquer efficacement avec mes collègues et à prendre progressivement en charge des tâches concrètes. Je sais que ces qualités ne s'acquièrent qu'au contact du terrain.",
      "{Curieux}, appliqué{e} et disposé{e} à apprendre, je suis prêt{e} à m'investir dans les missions correspondant à mon niveau et à approfondir les compétences nécessaires aux besoins de votre structure. Je considère chaque conseil et chaque correction comme une occasion de progresser.",
      "Mon parcours m'a donné le goût de la logique, de la résolution de problèmes et du travail bien fait. J'aime comprendre le fonctionnement des choses avant d'agir, et je n'hésite pas à poser des questions lorsqu'un point me paraît flou, afin d'éviter les erreurs et de gagner du temps.",
      "Intégrer {company} serait pour moi une chance de contribuer, à ma mesure, à vos projets tout en construisant les bases solides de ma future carrière.",
      "Ma disponibilité commence le {startDate}, pour {duration}. Je vous remercie pour l'examen de ma candidature et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
=======
      "Étudiant en troisième année de Licence en Génie Logiciel à {school}, je souhaite rejoindre {company} dans le cadre d'un stage qui me permettra de confronter ma formation aux réalités du monde professionnel et de gagner en maturité dans mon futur métier.",
      "Au-delà des connaissances techniques, je souhaite apprendre à travailler selon les méthodes et les priorités d'une équipe, à communiquer efficacement avec mes collègues et à prendre progressivement en charge des tâches concrètes. Je sais que ces qualités ne s'acquièrent qu'au contact du terrain.",
      "Curieux, appliqué et disposé à apprendre, je suis prêt à m'investir dans les missions correspondant à mon niveau et à approfondir les compétences nécessaires aux besoins de votre structure. Je considère chaque conseil et chaque correction comme une occasion de progresser.",
      "Mon parcours m'a donné le goût de la logique, de la résolution de problèmes et du travail bien fait. J'aime comprendre le fonctionnement des choses avant d'agir, et je n'hésite pas à poser des questions lorsqu'un point me paraît flou, afin d'éviter les erreurs et de gagner du temps.",
      "Intégrer {company} serait pour moi une chance de contribuer, à ma mesure, à vos projets tout en construisant les bases solides de ma future carrière dans l'informatique.",
      "Ma disponibilité commence le {availabilityStart}, pour six mois. Je vous remercie pour l'examen de ma candidature et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
    ],
  },
  projet: {
    label: "Parcours et projets",
    accent: "#B45309",
    style: "band",
<<<<<<< HEAD
    subject: "Demande de stage en {field}",
    paragraphs: [
      "Actuellement en {level} en {field} à {school}, je souhaite réaliser mon stage au sein de {company} pour approfondir mon expérience pratique et ma compréhension de la conduite de projets dans mon domaine.",
      "Mes travaux académiques et personnels m'ont amené{e} à concevoir et à réaliser des projets concrets. Chacun d'eux, de l'analyse du besoin jusqu'à la livraison, m'a demandé de planifier mon travail, de respecter des délais et de livrer un résultat abouti.",
      "Ces projets m'ont permis de mieux comprendre l'importance de l'organisation, de la résolution de problèmes et de la collaboration. J'ai appris que la qualité d'un travail ne dépend pas seulement du résultat final, mais aussi de sa clarté, de sa rigueur et de la manière dont il répond aux besoins de ses utilisateurs.",
      "Je souhaiterais contribuer aux activités de votre équipe, découvrir vos pratiques et faire progresser mes compétences au contact de situations réelles. Je suis prêt{e} à prendre part à toutes les étapes d'un projet, avec sérieux et enthousiasme.",
      "Je suis disponible {availability}. Je serais {heureux} de vous présenter mes réalisations lors d'un entretien afin d'illustrer concrètement ma motivation.",
=======
    subject: "Demande de stage en informatique - Génie Logiciel",
    paragraphs: [
      "Actuellement en troisième année de Licence en Génie Logiciel à {school}, je souhaite réaliser mon stage au sein de {company} pour approfondir mon expérience du développement d'applications et de la conduite de projets informatiques.",
      "Mes travaux académiques et personnels m'ont amené à concevoir des applications, à manipuler des bases de données et à utiliser différents outils de développement. Chaque projet, de l'analyse du besoin jusqu'à la livraison, m'a demandé de planifier mon travail, de respecter des délais et de livrer un résultat fonctionnel.",
      "Ces projets m'ont permis de mieux comprendre l'importance de l'organisation du code, de la résolution de problèmes et de la collaboration. J'ai appris que la qualité d'une application ne dépend pas seulement de ses fonctionnalités, mais aussi de sa clarté, de sa maintenabilité et de l'expérience de ses utilisateurs.",
      "Je souhaiterais contribuer aux activités de votre équipe, découvrir vos pratiques et faire progresser mes compétences au contact de situations réelles. Je suis prêt à prendre part à toutes les étapes d'un projet, de la conception aux tests, avec sérieux et enthousiasme.",
      "Je suis disponible {availability}. Je serais ravi de vous présenter mes réalisations lors d'un entretien afin d'illustrer concrètement ma motivation.",
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
      "Je reste à votre disposition pour tout renseignement complémentaire et vous prie d'agréer, Madame, Monsieur, l'expression de ma considération distinguée.",
    ],
  },
  personnalisee: {
    label: "Détaillée et personnalisée",
    accent: "#9F1239",
    style: "sidebar",
<<<<<<< HEAD
    subject: "Candidature spontanée pour un stage en {field}",
    paragraphs: [
      "Je vous soumets ma candidature pour un stage au sein de {company}, dans le domaine de {field}, afin de mettre mes acquis au service de vos activités et de poursuivre mon apprentissage.",
      "{Etudiant} en {level}, parcours {field}, à {school}, je souhaite poursuivre ma formation par une expérience qui me confronte aux besoins concrets d'une organisation. Mon parcours m'a permis d'acquérir des bases théoriques et pratiques ainsi que des méthodes de travail utiles en équipe.",
      "Je suis conscient{e} qu'un stage implique autant de rigueur et d'écoute que de compétences techniques. Je suis donc prêt{e} à apprendre vos méthodes, à respecter les consignes de votre équipe et à contribuer sérieusement aux tâches qui me seront confiées, même lorsqu'elles semblent modestes au départ.",
      "Ce que je peux vous apporter, c'est mon envie d'apprendre, ma capacité à travailler de façon organisée et ma volonté de mener à bien chaque mission. J'aime relever les défis et je prends le temps de bien comprendre un problème avant d'y apporter une solution.",
      "En retour, je recherche un cadre qui me permette de progresser auprès de personnes expérimentées, d'observer de bonnes pratiques et de comprendre les enjeux réels de votre activité.",
      "Je recherche un stage de {duration}, à partir du {startDate}. Je serais {heureux} de pouvoir vous rencontrer afin de vous présenter mon parcours et les objectifs de ce stage.",
=======
    subject: "Candidature spontanée pour un stage en informatique",
    paragraphs: [
      "Je vous soumets ma candidature pour un stage au sein de {company}, dans le domaine informatique, et plus particulièrement pour des missions liées au développement logiciel ou aux applications métiers.",
      "Étudiant en troisième année de Licence, parcours Génie Logiciel, à {school}, je souhaite poursuivre ma formation par une expérience qui me confronte aux besoins concrets d'une organisation. Mon parcours m'a permis d'aborder la programmation, les bases de données, la conception d'applications et les outils de collaboration utilisés dans les projets.",
      "Je suis conscient qu'un stage implique autant de rigueur et d'écoute que de compétences techniques. Je suis donc prêt à apprendre vos méthodes, à respecter les consignes de votre équipe et à contribuer sérieusement aux tâches qui me seront confiées, même lorsqu'elles semblent modestes au départ.",
      "Ce que je peux vous apporter, c'est mon envie d'apprendre, ma capacité à travailler de façon organisée et ma volonté de mener à bien chaque mission. J'aime relever les défis techniques et je prends le temps de bien comprendre un problème avant d'y apporter une solution.",
      "En retour, je recherche un cadre qui me permette de progresser auprès de personnes expérimentées, d'observer de bonnes pratiques et de comprendre les enjeux réels d'un service informatique.",
      "Je recherche un stage de six mois, à partir du {availabilityStart}. Je serais heureux de pouvoir vous rencontrer afin de vous présenter mon parcours et les objectifs de ce stage.",
>>>>>>> 7dc2b0aa387dfd5e7dc48c0c0de647dc4acf4a37
      "Je vous remercie de l'attention accordée à ma demande et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    ],
  },
};
