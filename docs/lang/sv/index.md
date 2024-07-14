---
layout: home

hero:
  name: "🦲 varför.qbox?"
  text: "- 🧔varför.inte?"
  tagline: denna sidan går endast igenom qbox grundligt, det är inte den officiella sidan 
  image:
    src: https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg
    alt: Qbox Duck
  actions:
    - theme: brand
      text: Kom Igång
      link: https://docs.qbox.re/
    - theme: alt
      text: Visa på GitHub
      link: https://github.com/alp1x/whyqbox
---

### 👋 kan du förklara lite snabbt vad denhär qbox är?
::: info + ja, självklart.
 Medans den är från grunden en <Badge type="danger" text="QBCore" /> fork, många <Badge type="warning" text="Qbox" /> resources har gjorts om och förbättrats för att improvisera kod kvalitén, förbättra säkerhet, förbättra prestanda, och integrera med <Badge type="tip" text="overextended" /> resources.
:::

### 👷 funkar qbcore scripts i qbox?
::: info + ja, det gör dem.
 Vi har skapat ett "bridge layer" för bakåt kompatibilitet med dokumentarade och korrekta qb-core användningsvägar, och du kan fortsätta att använda de flesta QBCore scriptsen utan några ändringar.
:::

### 📦 är qbox färdig att användas?
::: info + ja, det är den.
 Since qbx_core has backward compatibility with qb-core sources, we recommend using only published Qbox sources for a stable experience.
 Eftersom att qbx_core har bakåt kompatibilitet med qb-core "källor", vi rekommenderar att endast använda publicerade Qbox "källor" för en stabil upplevelse.
:::

### ⚡ låt oss göra en liten jämförelse
| En kort översikt |QBCore|Qbox|
| ------------- | :-----------: | -----------: |
| lättvikt     | 🔧 |  ✅ |
| inga lint errors finns      | ⭕ |  ✅ |
| läsbar och bra orgnaiserad     | 🔧 |  ✅ |
| modulär struktur     | ⭕ |  ✅ |
| inga föråldrade funktioner anropas     | ⭕ | ✅ |

[📚 Läs mer](https://docs.qbox.re/)


## 📦 vad näst?

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
