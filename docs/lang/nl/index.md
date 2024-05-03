---
layout: home

hero:
  name: "🦲 waarom.qbox?"
  text: "- waarom.not?"
  tagline: deze site vat slechts kort het doel van qbox samen, het is niet de officiële pagina
  image:
    src: https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg
    alt: Qbox Eend
  actions:
    - theme: brand
      text: Begin nu
      link: https://docs.qbox.re/
    - theme: alt
      text: Bekijk op GitHub
      link: https://github.com/alp1x/whyqbox
---

### 👋 can you briefly explain what this qbox?

::: info + ja, natuurlijk.
Hoe wel het origineel geforked is van <Badge type="danger" text="QBCore" />, zijn veel <Badge type="warning" text="Qbox" /> resources herschreven om de codekwaliteit te verbeteren, de beveiliging te verbeteren, de prestatieoverhead te verlagen en te integreren met <Badge type="tip" text="overextended" /> resources.
:::

### 👷 do qbcore scripts work in qbox?

::: info + ja zeker.
Wij hebben een brug gemaakt voor achterwaartse compatibiliteit met gedocumenteerde en correcte qb-core gebruikspaden, en u kunt de meeste QBCore-scripts blijven gebruiken zonder wijzigingen.
:::

### 📦 is the qbox ready to use?

::: info + ja zeker.
Sinds qbx_core achterwaartse compatibiliteit heeft met qb-core resources, raden we aan alleen gepubliceerde Qbox resources te gebruiken voor een stabiele ervaring.
:::

### ⚡ let's make a brief comparison

| Een kort overzicht                       | QBCore | Qbox |
| ---------------------------------------- | :----: | ---: |
| lichtgewicht                             |   🔧   |   ✅ |
| lintfouten zijn niet aanwezig            |   ⭕   |   ✅ |
| leesbaar en georganiseerd                |   🔧   |   ✅ |
| modulaire structuur                      |   ⭕   |   ✅ |
| geen verouderde functies worden geroepen |   ⭕   |   ✅ |

[📚 Read more](https://docs.qbox.re/)

## 📦 wat is het volgende?

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
