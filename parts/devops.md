## origine de devops

* distinguer les stéréotypes dev et ops
* solution humaine et technique pour résoudre le mur de la confusion
  * Culture
  * Automatisation
  * LEAN
  * Mesure
  * Solidarité

## Automatisation

* CI / CD : intégration continue / déploiement continue
* CI: ensemble des tâches automatisées qui assure la livrabilité d'un code
   - capacité à démontrer le caractère fonctionnel d'un code

## gitlab CI

1. gitlab runner
  * spawn des runners qui exécutent des jobs de CI dans des conteneurs docker:
  * exemple de syntaxe `gitlab-ci.yml`

  ```yaml
  test:
    script:
      - echo "TEST !"
  ```

2. exemple de pipeline
  * image: node sur debian
  * installation et cache des dépendances
  * test unitaires plus rapport + couverture
  * build
  * déploiement

---
yaml config:
  param: value
  obj:
    list:
      - elem1
      - elem2
---

