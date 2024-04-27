---
layout: home

hero:
  name: "🦲 Pourquoi.qbox?"
  text: "- 🧔Pourquoi.pas?"
  tagline: Ce site explique brievement l'utilité de Qbox, ceci n'est pas une page officielle
  image:
    src: https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg
    alt: Qbox Duck
  actions:
    - theme: brand
      text: Commencer
      link: https://docs.qbox.re/
    - theme: alt
      text: Voir sur Github
      link: https://github.com/alp1x/whyqbox
---

### 👋 peux-tu expliquer brièvement ce qu'est qbox ?
::: info + oui, avec plaisir.
 initialement dérivé de <Badge type="danger" text="QBCore" />, plusieurs resources <Badge type="warning" text="Qbox" /> ont été refactorisés pour améliorer la qualité du code, améliorer la sécurité , améliorer les performances, et intégrer les resources <Badge type="tip" text="overextended" />.
:::

### 👷 Est-ce que les scripts Qbcore fonctionnent sur Qbox ?
::: info + oui, ils fonctionnent
 Nous avons créé une couche de compatibilité, avec une utilisation de qb-core documentés et corrects, et vous pouvez continuer à utiliser la plupart des scripts QBCore sans aucune modification.
:::

### 📦 Est-ce que Qbox est pret a être utilisé?
::: info + Oui, c'est prêt.
 Malgré que qbx_core est rétrocompatible avec les resources qb-core, nous vous recommandons d'utiliser uniquement les resources Qbox publiées pour une expérience stable.
:::

### ⚡ Faisons une brève comparaison
| Un bref aperçu |QBCore|Qbox|
| ------------- | :-----------: | -----------: |
| léger     | 🔧 |  ✅ |
| Aucune erreur de lint n'est présente | ⭕ | ✅ |
| Lisible et bien organisé | 🔧 | ✅ |
| Structure modulaire | ⭕ | ✅ |
| Aucune fonction obsolète n'est invoquée | ⭕ | ✅ |

[📚 En savoir plus](https://docs.qbox.re/)


## 📦 Et après ?

```lua
-- qbx_core/server/storage/main.lua

local players = require 'server.storage.players'

---@class StorageFunctions
---@field insertBan fun(request: InsertBanRequest)
---@field fetchBan fun(request: GetBanRequest): BanEntity?
---@field deleteBan fun(request: GetBanRequest)
---@field upsertPlayerEntity fun(request: UpsertPlayerRequest)
---@field fetchPlayerSkin fun(citizenId: string): PlayerSkin?
---@field fetchPlayerEntity fun(citizenId: string): PlayerEntity?
---@field fetchAllPlayerEntities fun(license2: string, license?: string): PlayerEntity[]
---@field deletePlayer fun(citizenId: string): boolean success
---@field fetchIsUnique fun(type: UniqueIdType, value: string|number): boolean
---@field addPlayerToJob fun(citizenid: string, group: string, grade: integer)
---@field addPlayerToGang fun(citizenid: string, group: string, grade: integer)
---@field fetchPlayerGroups fun(citizenid: string): table<string, integer>, table<string, integer> jobs, gangs
---@field removePlayerFromJob fun(citizenid: string, group: string)
---@field removePlayerFromGang fun(citizenid: string, group: string)

---@type StorageFunctions
return players /* [!code focus]
```

![wait](https://media1.tenor.com/m/mzdEPa0JG4AAAAAd/punisher-no-no-no-tanklorde.gif)
