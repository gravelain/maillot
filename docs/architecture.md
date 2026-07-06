# 🏗️ Architecture du projet

Le projet est structuré en 3 couches :

## 1. Applications

- maillot-api (NestJS)
- maillot-web (React)

## 2. Infrastructure

- PostgreSQL
- Adminer
- Monitoring
- Backup

## 3. Données

Toutes les données persistantes sont stockées dans `/data`.

---

# 🔐 Règle importante

Les applications ne doivent jamais communiquer directement avec les conteneurs internes via localhost.

Elles utilisent :

- noms de services Docker
- réseaux internes
