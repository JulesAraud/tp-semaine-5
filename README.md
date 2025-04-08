# 🐳 TP Semaine 5 – Déploiement d'une application MERN + IA avec Docker Compose

Ce projet est une architecture complète multi-conteneurs Docker utilisant :

- **MongoDB** (avec mongo-express)
- **Redis**
- **Backend Node.js/Express**
- **Frontend React/Next.js**
- **Backend IA (Python/TensorFlow)**
- **Frontend IA**
- (Optionnel) Elasticsearch

---

## 📦 Services inclus

| Service         | Description                                           | Port local         |
|-----------------|-------------------------------------------------------|--------------------|
| `mongodb`       | Base de données NoSQL                                 | `27017`            |
| `mongo-express` | Interface web de gestion MongoDB                      | `8081`             |
| `redis`         | Cache/Store mémoire                                   | `6379`             |
| `backend`       | API Express (Node.js)                                 | `5000`, `5001`     |
| `frontend`      | Interface utilisateur (React/Next.js)                | `3000`             |
| `ai-backend`    | Reconnaissance faciale (Python, TensorFlow)          | `8000`             |
| `ai-frontend`   | Interface IA (Next.js)                                | `3001`             |
| `elasticsearch` | (Optionnel) Moteur de recherche texte avancé         | `9200`             |

---

## 🚀 Lancement

### 1. Cloner le projet

```bash
git clone https://github.com/votre-utilisateur/tp-semaine-5.git
cd tp-semaine-5
