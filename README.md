# frostasy
Frostasy est un projet utilitaire de suivi de livraison, permettant ainsi au client d'avoir un accès sur les courses / commandes de ces employés.

# Documentation Technique Backend

## Base de Données

### Docker
Pour gérer la base de données avec Docker, utilisez les commandes suivantes :

1. Accéder au répertoire de la base de données :
```bash
cd database
```

2. Démarrer les conteneurs Docker :
```bash
docker-compose up
```

3. Arrêter les conteneurs Docker :
```bash
docker-compose down
```

## Prisma

### Gestion des Migrations

#### Déployer une migration existante
Pour appliquer les migrations existantes à la base de données :
```bash
npx prisma migrate deploy
```

#### Créer une nouvelle migration
Lorsque vous modifiez un modèle, créez une nouvelle migration avec :
```bash
npx prisma migrate dev --name nomDeLaMigration
```

Cette commande va :
- Créer un nouveau fichier de migration
- Appliquer les changements à la base de données
- Régénérer le client Prisma

Remplacez `nomDeLaMigration` par un nom descriptif de vos modifications, par exemple : `ajout_colonne_email`, `creation_table_users`, etc.