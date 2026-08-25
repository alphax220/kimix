// =====================================================
// TÉLÉCHARGEMENT DE KIMIX
// ====================================================
const GOOGLE_DRIVE_FILE_ID = "187n3qi2kHrMV0deMJfwQYNENc5yVvV4Y";
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

/* =====================================================
   CONFIGURATION
===================================================== */

/*
    Remplace par ton numéro WhatsApp.

    Exemple :

    const WHATSAPP_NUMBER = "221771234567";

    Ne mets pas le +.
*/

const WHATSAPP_NUMBER = "221775465436";


/*
    Remplace par le véritable lien de téléchargement
    de ton application Kimix.

    Exemple :

    const DOWNLOAD_URL =
        "https://ton-domaine.com/download/kimix.exe";
*/





/* =====================================================
   TRADUCTIONS
===================================================== */

const translations = {

    /* =================================================
       FRANÇAIS
    ================================================= */

    fr: {

        navBenefits:
            "Bénéfices",

        navOffers:
            "Offres",

        navRoadmap:
            "À venir",

        navContact:
            "Nous contacter",


        eyebrow:
            "GESTION DE PRODUCTION POUR FABRICANTS DE BOISSONS",

        heroTitle:
            "Produisez mieux.<br><strong>Décidez plus vite.</strong>",

        heroText:
            "Kimix aide les fabricants de boissons à transformer leurs recettes, leurs stocks et leurs objectifs de production en décisions simples et concrètes.",

        heroCta:
            "Découvrir les offres",

        heroContact:
            "Nous contacter",


        trust1:
            "✓ Pensé pour les TPE & PME",

        trust2:
            "✓ Simple à prendre en main",

        trust3:
            "✓ Essai 7 jours",


        dashboardLabel:
            "OBJECTIF DE PRODUCTION",

        dashboardTitle:
            "Préparer une production",

        ready:
            "● Prêt",

        statObjective:
            "Objectif",

        statAvailable:
            "Disponible",

        statGap:
            "À commander",

        needTitle:
            "Besoins identifiés avant production",

        ingredient1:
            "Concentré orange",

        ingredient2:
            "Sucre",

        ingredient3:
            "Bouteilles 1 L",

        ok:
            "Disponible",

        order:
            "À commander",


        problemKicker:
            "LE PROBLÈME",

        problemTitle:
            "Avant de produire, il faut savoir ce qui est réellement disponible.",

        problemText:
            "Recettes, concentrés, réceptions, stocks, conditionnements et coûts peuvent vite devenir difficiles à suivre. Kimix rassemble ces informations pour vous aider à préparer votre production avant de la lancer.",


        benefitsKicker:
            "CE QUE KIMIX VOUS APPORTE",

        benefitsTitle:
            "Un outil pensé autour de vos décisions de production.",

        benefitsIntro:
            "Kimix ne se limite pas à enregistrer des informations. Il vous aide à comprendre votre situation et à agir au bon moment.",


        benefit1Title:
            "Centraliser concentrés et fournisseurs",

        benefit1Text:
            "Chaque concentré dispose d'une fiche complète (code, référence, prix, conditionnement) et vos fournisseurs se synchronisent automatiquement entre les fiches et l'onglet dédié — zéro saisie en double, zéro oubli.",


        benefit2Title:
            "Calculer vos recettes automatiquement",

        benefit2Text:
            "Créez vos recettes et connaissez immédiatement la capacité de production réalisable selon votre stock, ainsi que les besoins en matières premières pour chacune d'elles.",


        benefit3Title:
            "Sécuriser vos réceptions et votre stock",

        benefit3Text:
            "Suivez vos lots avec des alertes de péremption configurables et des seuils de stock bas personnalisés pour anticiper les ruptures avant qu'elles ne bloquent la production.",


        benefit4Title:
            "Décider en un coup d'œil",

        benefit4Text:
            "Un dashboard synthétique affiche les recettes réalisables avec votre stock disponible, sans calcul manuel.",


        benefit5Title:
            "Piloter vos objectifs de production",

        benefit5Text:
            "Définissez un objectif et laissez Kimix calculer les besoins, lancez et suivez vos productions avec déduction automatique du stock, et gardez une traçabilité complète de chaque production.",


        benefit6Title:
            "Centraliser vos commandes",

        benefit6Text:
            "Gérez vos commandes fournisseurs et leur réception dans un seul outil, du besoin identifié jusqu'à la réception en stock.",


        benefit7Title:
            "Tracer chaque action",

        benefit7Text:
            "Un historique complet des actions, protégé par re-vérification du mot de passe, renforce la traçabilité et la sécurité — utile en cas de contrôle ou de litige.",


        benefit8Title:
            "Contrôler les accès",

        benefit8Text:
            "Authentification et gestion de licence vous permettent de savoir qui utilise l'outil et sous quelles conditions.",


        benefit9Title:
            "Une interface à votre image",

        benefit9Text:
            "Thèmes clair, sombre ou personnalisé et interface multilingue : une expérience adaptée aux préférences de chacun.",


        logicKicker:
            "UNE LOGIQUE SIMPLE",

        logicTitle:
            "De l'objectif à la décision.",


        logic1Title:
            "Objectif",

        logic1Text:
            "Vous définissez le volume que vous souhaitez produire.",


        logic2Title:
            "Besoins",

        logic2Text:
            "Kimix détermine les intrants nécessaires selon vos recettes.",


        logic3Title:
            "Disponibilités",

        logic3Text:
            "Vous voyez ce qui est disponible et ce qui manque.",


        logic4Title:
            "Décision",

        logic4Text:
            "Vous savez quoi préparer, quoi commander et quoi lancer.",


        offersKicker:
            "DES OFFRES ADAPTÉES À VOTRE ACTIVITÉ",

        offersTitle:
            "Accédez à Kimix selon la durée qui vous convient.",

        offersIntro:
            "Une tarification simple et flexible : de 1 jour à 5 ans, avec des remises croissantes pour les engagements longs.",


        pricingLabel:
            "ACCÈS KIMIX",

        pricingTitle:
            "Choisissez votre durée",

        pricingSubtitle:
            "Un accès flexible, sans engagement mensuel obligatoire.",

        pricingBenefit:
            "Plus la durée est longue, plus le coût mensuel est avantageux.",

        choosePlan:
            "Choisir mon accès",


        popular:
            "RECOMMANDÉ",


        roadmapKicker:
            "À VENIR",

        roadmapTitle:
            "Kimix continue d'évoluer avec les besoins des fabricants.",

        roadmapIntro:
            "De nouvelles fonctions sont prévues pour aller plus loin dans le pilotage des achats et de la production.",


        road1Title:
            "Devises",

        road1Text:
            "FCFA, dollar et euro pour mieux gérer les coûts.",


        road2Title:
            "Bilan théorique / réel",

        road2Text:
            "Analysez les écarts de quantité, coût, Brix et volume.",


        ctaKicker:
            "PRÊT À ESSAYER ?",

        ctaTitle:
            "Voyez en 7 jours si Kimix peut simplifier votre production.",

        ctaText:
            "Testez l'application et échangez avec notre équipe pour trouver l'offre adaptée à votre activité.",

        download:
            "Télécharger Kimix — Essai 7 jours",

        whatsapp:
            "Nous contacter sur WhatsApp",

        ctaSmall:
            "Besoin d'une démonstration ou d'une offre personnalisée ? Contactez-nous.",


        propertyKicker:
            "PROPRIÉTÉ",

        propertyText:
            "Kimix est une solution développée et commercialisée par AGIR NETWORK.",


        copyright:
            "© 2026 AGIR NETWORK — Tous droits réservés.",

        backTop:
            "Retour en haut ↑"

    },



    /* =================================================
       ENGLISH
    ================================================= */

    en: {

        navBenefits:
            "Benefits",

        navOffers:
            "Plans",

        navRoadmap:
            "Coming soon",

        navContact:
            "Contact us",


        eyebrow:
            "PRODUCTION MANAGEMENT FOR BEVERAGE MANUFACTURERS",

        heroTitle:
            "Produce better.<br><strong>Decide faster.</strong>",

        heroText:
            "Kimix helps beverage manufacturers turn recipes, inventory and production targets into simple, practical decisions.",

        heroCta:
            "Discover plans",

        heroContact:
            "Contact us",


        trust1:
            "✓ Built for small businesses & SMEs",

        trust2:
            "✓ Easy to use",

        trust3:
            "✓ 7-day trial",


        dashboardLabel:
            "PRODUCTION TARGET",

        dashboardTitle:
            "Prepare a production",

        ready:
            "● Ready",

        statObjective:
            "Target",

        statAvailable:
            "Available",

        statGap:
            "To order",

        needTitle:
            "Needs identified before production",

        ingredient1:
            "Orange concentrate",

        ingredient2:
            "Sugar",

        ingredient3:
            "1 L bottles",

        ok:
            "Available",

        order:
            "To order",


        problemKicker:
            "THE CHALLENGE",

        problemTitle:
            "Before you produce, you need to know what is actually available.",

        problemText:
            "Recipes, concentrates, receipts, inventory, packaging and costs can quickly become difficult to track. Kimix brings this information together so you can prepare production before launching it.",


        benefitsKicker:
            "WHAT KIMIX BRINGS YOU",

        benefitsTitle:
            "A tool built around your production decisions.",

        benefitsIntro:
            "Kimix does more than store information. It helps you understand your situation and take action at the right time.",


        benefit1Title:
            "Centralize concentrates and suppliers",

        benefit1Text:
            "Every concentrate has a complete profile (code, reference, price, packaging), and your suppliers sync automatically between concentrate sheets and the dedicated tab — no duplicate entry, nothing forgotten.",


        benefit2Title:
            "Calculate your recipes automatically",

        benefit2Text:
            "Create recipes and instantly know the production capacity achievable with your current stock, plus the raw materials required for each one.",


        benefit3Title:
            "Secure your receipts and stock",

        benefit3Text:
            "Track batches with configurable expiry alerts and custom low-stock thresholds to anticipate shortages before they block production.",


        benefit4Title:
            "Decide at a glance",

        benefit4Text:
            "A summary dashboard shows which recipes are achievable with your available stock, with no manual calculation.",


        benefit5Title:
            "Manage your production targets",

        benefit5Text:
            "Set a target and let Kimix calculate requirements, then launch and track productions with automatic stock deduction and full traceability of every production run.",


        benefit6Title:
            "Centralize your purchasing",

        benefit6Text:
            "Manage supplier orders and their receipt in a single tool, from identified need to stock receipt.",


        benefit7Title:
            "Trace every action",

        benefit7Text:
            "A complete action history, protected by password re-verification, strengthens traceability and security — useful for audits or disputes.",


        benefit8Title:
            "Control access",

        benefit8Text:
            "Authentication and license management let you know who uses the tool and under what conditions.",


        benefit9Title:
            "An interface that fits you",

        benefit9Text:
            "Light, dark or custom themes and a multilingual interface: an experience suited to everyone's preferences.",


        logicKicker:
            "A SIMPLE LOGIC",

        logicTitle:
            "From target to decision.",


        logic1Title:
            "Target",

        logic1Text:
            "Define the volume you want to produce.",


        logic2Title:
            "Requirements",

        logic2Text:
            "Kimix determines the inputs required according to your recipes.",


        logic3Title:
            "Availability",

        logic3Text:
            "See what is available and what is missing.",


        logic4Title:
            "Decision",

        logic4Text:
            "Know what to prepare, what to order and what to launch.",


        offersKicker:
            "PLANS FOR YOUR BUSINESS",

        offersTitle:
            "Access Kimix for the duration that suits you.",

        offersIntro:
            "Simple, flexible pricing: from 1 day to 5 years, with increasing discounts for longer commitments.",


        pricingLabel:
            "KIMIX ACCESS",

        pricingTitle:
            "Choose your duration",

        pricingSubtitle:
            "Flexible access with no mandatory monthly commitment.",

        pricingBenefit:
            "The longer the duration, the lower the monthly equivalent cost.",

        choosePlan:
            "Choose my access",


        popular:
            "RECOMMENDED",


        roadmapKicker:
            "COMING SOON",

        roadmapTitle:
            "Kimix keeps evolving with beverage manufacturers' needs.",

        roadmapIntro:
            "New capabilities are planned to take purchasing and production management further.",


        road1Title:
            "Currencies",

        road1Text:
            "FCFA, US dollar and euro for better cost management.",


        road2Title:
            "Theoretical / actual report",

        road2Text:
            "Analyze quantity, cost, Brix and volume variances.",


        ctaKicker:
            "READY TO TRY IT?",

        ctaTitle:
            "See in 7 days whether Kimix can simplify your production.",

        ctaText:
            "Try the application and talk to our team to find the plan that fits your business.",

        download:
            "Download Kimix — 7-day trial",

        whatsapp:
            "Contact us on WhatsApp",

        ctaSmall:
            "Need a demo or a custom plan? Get in touch with us.",


        propertyKicker:
            "PROPERTY",

        propertyText:
            "Kimix is developed and marketed by AGIR NETWORK.",


        copyright:
            "© 2026 AGIR NETWORK — All rights reserved.",

        backTop:
            "Back to top ↑"

    }

};



/* =====================================================
   CHANGEMENT DE LANGUE
===================================================== */

function applyLanguage(lang) {

    const dictionary =
        translations[lang] || translations.fr;


    /*
        Langue HTML
    */

    document.documentElement.lang =
        lang;


    /*
        Remplacement de tous les textes
    */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                dictionary[key] !== undefined
            ) {

                element.innerHTML =
                    dictionary[key];

            }

        });


    /*
        Bouton actif
    */

    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === lang
            );

        });


    /*
        Mémorisation
    */

    localStorage.setItem(
        "kimix-language",
        lang
    );


    /*
        Mettre à jour WhatsApp
    */

    setupWhatsApp();

}



/* =====================================================
   WHATSAPP
===================================================== */

function setupWhatsApp() {

    const currentLang =
        localStorage.getItem(
            "kimix-language"
        ) || "fr";


    const messageFR =
        "Bonjour AGIR NETWORK, je souhaite en savoir plus sur Kimix et tester l'application pendant 7 jours.";


    const messageEN =
        "Hello AGIR NETWORK, I would like to learn more about Kimix and try the application for 7 days.";


    const message =
        currentLang === "en"
            ? messageEN
            : messageFR;


    const whatsappButton =
        document.getElementById(
            "whatsappBtn"
        );


    if (
        whatsappButton &&
        WHATSAPP_NUMBER &&
        WHATSAPP_NUMBER !== "221XXXXXXXXX"
    ) {

        whatsappButton.href =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    }

}



/* =====================================================
   DOWNLOAD
===================================================== */

function setupDownload() {

    const downloadButton =
        document.getElementById("downloadBtn");

    if (!downloadButton) {
        return;
    }

    downloadButton.href = DOWNLOAD_URL;
    downloadButton.setAttribute("target", "_blank");
    downloadButton.setAttribute("rel", "noopener noreferrer");
}



/* =====================================================
   MENU MOBILE
===================================================== */

function setupMobileMenu() {

    const menuButton =
        document.getElementById(
            "menuBtn"
        );


    const nav =
        document.getElementById(
            "mainNav"
        );


    if (
        !menuButton ||
        !nav
    ) {

        return;

    }


    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "open"
            );

        }
    );


    nav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );

                }
            );

        });

}



/* =====================================================
   INITIALISATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
            Récupération de la langue précédente.
            Français par défaut.
        */

        const savedLanguage =
            localStorage.getItem(
                "kimix-language"
            ) || "fr";


        /*
            Boutons FR / EN
        */

        document
            .querySelectorAll(".lang-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        applyLanguage(
                            button.dataset.lang
                        );

                    }
                );

            });


        /*
            Menu mobile
        */

        setupMobileMenu();


        /*
            Application de la langue
        */

        applyLanguage(
            savedLanguage
        );


        /*
            WhatsApp
        */

        setupWhatsApp();


        /*
            Téléchargement
        */

        setupDownload();

    }
);