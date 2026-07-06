# 🔌 Convention des ports

## Pourquoi une convention ?

Éviter les conflits avec :

- Docker
- Node
- autres projets locaux

---

## Ports du projet

| Service    | Interne | Externe |
| ---------- | ------- | ------- |
| NestJS     | 3000    | 13001   |
| React      | 5173    | 13000   |
| PostgreSQL | 5432    | 15432   |
| Adminer    | 8080    | 18080   |

---

## Règle

- Interne = standard des outils
- Externe = projet (13xxx / 15xxx)
