const DATA_LIST_PRODUCTS =[
    {
        "id": 1,
        "nom": "Haltères Hexagonales 10kg",
        "description": "Paire d'haltères hexagonales en caoutchouc, idéale pour l'entraînement de force.",
        "etoile": 4.5,
        "price": 60.99,
        "imageProduit": "/assets/produits/halteres_10kg.webp",
        "categorie_id": 2
    },
    {
        "id": 2,
        "nom": "Banc de Musculation Réglable",
        "description": "Banc de musculation inclinable pour exercices variés.",
        "etoile": 4.7,
        "price": 149.99,
        "imageProduit": "/assets/produits/banc_musculation.webp",
        "categorie_id": 3
    },
    {
        "id": 3,
        "nom": "Presse à Jambes Professionnelle",
        "description": "Machine de musculation professionnelle pour jambes avec charge guidée.",
        "etoile": 5,
        "price": 999.99,
        "imageProduit": "/assets/produits/presse_jambes.webp",
        "categorie_id": 4
    },
    {
        "id": 4,
        "nom": "Corde à Sauter Ajustable",
        "description": "Corde à sauter ajustable en longueur, idéale pour le cardio et l'endurance.",
        "etoile": 4.3,
        "price": 14.99,
        "imageProduit": "/assets/produits/corde_sauter.webp",
        "categorie_id": 5
    },
    {
        "id": 5,
        "nom": "Barre de Traction Multifonction",
        "description": "Barre de traction pour porte, sans perçage nécessaire.",
        "etoile": 4.6,
        "price": 45.50,
        "imageProduit": "/assets/produits/barre_traction.webp",
        "categorie_id": 2
    },
    {
        "id": 6,
        "nom": "Station de Musculation Complète",
        "description": "Station tout-en-un pour un entraînement complet du corps.",
        "etoile": 4.8,
        "price": 1200.00,
        "imageProduit": "/assets/produits/station_complète.webp",
        "categorie_id": 4
    },
    {
        "id": 7,
        "nom": "Tapis de Yoga Antidérapant",
        "description": "Tapis de yoga antidérapant pour séances de stretching et relaxation.",
        "etoile": 4.2,
        "price": 25.99,
        "imageProduit": "/assets/produits/tapis_yoga.webp",
        "categorie_id": 5
    },
    {
        "id": 8,
        "nom": "Disques de Poids 20kg (x2)",
        "description": "Paire de disques en fonte de 20 kg, compatibles avec toutes les barres olympiques.",
        "etoile": 4.9,
        "price": 150.00,
        "imageProduit": "/assets/produits/disques_20kg.webp",
        "categorie_id": 2
    },
    {
        "id": 9,
        "nom": "Kettlebell 16kg",
        "description": "Kettlebell en fonte de 16 kg pour entraînements fonctionnels.",
        "etoile": 4.7,
        "price": 75.00,
        "imageProduit": "/assets/produits/kettlebell_16kg.webp",
        "categorie_id": 2
    },
    {
        "id": 10,
        "nom": "Banc à Abdominaux",
        "description": "Banc spécifique pour les exercices d'abdominaux avec inclinaison réglable.",
        "etoile": 4.5,
        "price": 89.99,
        "imageProduit": "/assets/produits/banc_abdominaux.webp",
        "categorie_id": 3
    },
    {
        "id": 11,
        "nom": "Vélo Elliptique",
        "description": "Vélo elliptique pour séances de cardio intensives.",
        "etoile": 4.8,
        "price": 699.99,
        "imageProduit": "/assets/produits/velo_elliptique.webp",
        "categorie_id": 4
    },
    {
        "id": 12,
        "nom": "Gants de Musculation",
        "description": "Paire de gants pour protéger les mains pendant l'entraînement.",
        "etoile": 4.3,
        "price": 19.99,
        "imageProduit": "/assets/produits/gants_musculation.webp",
        "categorie_id": 5
    },
    {
        "id": 13,
        "nom": "Ballon de Gym 65cm",
        "description": "Ballon de gym anti-éclatement pour exercices de stabilité et de gainage.",
        "etoile": 4.6,
        "price": 29.99,
        "imageProduit": "/assets/produits/ballon_gym.webp",
        "categorie_id": 5
    },
    {
        "id": 14,
        "nom": "Rack de Rangement pour Poids",
        "description": "Rack de rangement solide pour disques de poids.",
        "etoile": 4.9,
        "price": 199.99,
        "imageProduit": "/assets/produits/rack_poids.webp",
        "categorie_id": 2
    },
    {
        "id": 15,
        "nom": "Barre Olympique 20kg",
        "description": "Barre olympique standard de 20 kg pour entraînement de force.",
        "etoile": 5,
        "price": 230.00,
        "imageProduit": "/assets/produits/barre_olympique.webp",
        "categorie_id": 2
    },
    {
        "id": 16,
        "nom": "Banc de Développé Couché",
        "description": "Banc robuste pour développé couché avec supports ajustables.",
        "etoile": 4.8,
        "price": 179.99,
        "imageProduit": "/assets/produits/banc_developpe.webp",
        "categorie_id": 3
    },
    {
        "id": 17,
        "nom": "Chaise Romaine",
        "description": "Chaise romaine multifonction pour tractions et dips.",
        "etoile": 4.7,
        "price": 289.99,
        "imageProduit": "/assets/produits/chaise_romaine.webp",
        "categorie_id": 4
    },
    {
        "id": 18,
        "nom": "Ceinture de Musculation",
        "description": "Ceinture de musculation en cuir pour support lombaire.",
        "etoile": 4.5,
        "price": 39.99,
        "imageProduit": "/assets/produits/ceinture_musculation.webp",
        "categorie_id": 5
    },
    {
        "id": 19,
        "nom": "Sac de Sable 20kg",
        "description": "Sac de sable ajustable pour entraînement de force et d'endurance.",
        "etoile": 4.4,
        "price": 55.00,
        "imageProduit": "/assets/produits/sac_sable.webp",
        "categorie_id": 2
    },
    {
        "id": 20,
        "nom": "Tapis de Course Pliable",
        "description": "Tapis de course pliable avec écran LCD intégré.",
        "etoile": 4.9,
        "price": 899.99,
        "imageProduit": "/assets/produits/tapis_course.webp",
        "categorie_id": 4
    }
];

export default DATA_LIST_PRODUCTS;
