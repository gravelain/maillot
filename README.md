# ⚽ Maillot Project

Projet de gestion des informations de maillots pour une équipe de football.

Ce projet permet aux joueurs de renseigner leurs informations (nom, numéro, taille, nom affiché sur le maillot) via une plateforme web.

---

# 🧭 Objectif du projet

Construire une plateforme complète composée de :

- 🧠 Backend : NestJS (API REST)
- 💻 Frontend : React + Vite
- 🗄️ Base de données : PostgreSQL
- 🧰 Admin DB : Adminer
- 📊 Monitoring : Loki + Promtail + Grafana (à venir)
- 💾 Backups automatisés (à venir)

---

# 🏗️ Architecture globale

maillot/
│
├── maillot-api/ # Backend NestJS
├── maillot-web/ # Frontend React
│
├── infra/ # Infrastructure Docker (DevOps)
│ ├── compose.yml
│ ├── compose.dev.yml
│ ├── compose.monitoring.yml
│ ├── compose.backup.yml
│ ├── .env
│ ├── configs/
│ └── scripts/
│
├── data/ # Données persistantes
│ ├── postgres/
│ ├── backups/
│ ├── grafana/
│ ├── loki/
│ └── logs/
│
├── docs/ # Documentation avancée
└── README.md

---

# 🧱 Sprint 1

👉 Sprint 1 — Infrastructure PostgreSQL + Adminer

## Prérequis

- Docker + Docker Compose
- Node.js (pour dev local sans Docker si besoin)

---

## ▶️ Lancer l’infrastructure

```bash
cd infra
docker compose --env-file .env up -d


🌐 Services accessibles

Service	URL
PostgreSQL	localhost:15432
Adminer	http://localhost:18080



Sprint 2 : Backend NestJS (Docker + Prisma)
Sprint 3 : Frontend React (Docker + Vite)
Sprint 4 : Monitoring (Loki / Grafana)
Sprint 5 : Backups automatiques
Sprint 6 : Automatisation (Makefile + scripts)
Sprint 7 : Production ready (HTTPS + CI/CD)


⚠️ Règles importantes
Les données PostgreSQL sont persistées dans /data
Aucun service ne doit dépendre de localhost en Docker
Les ports externes sont tous dans la plage 13xxx / 15xxx
Chaque service doit avoir un restart: unless-stopped
🧠 Philosophie du projet

Ce projet suit une approche :

👉 “On construit comme en entreprise”

Infrastructure avant application
Séparation des responsabilités
Services indépendants
Observabilité dès le début
Sauvegarde prévue dès la conception


🧱 Sprint 1 : Backend NestJS (Docker + Prisma)
```
