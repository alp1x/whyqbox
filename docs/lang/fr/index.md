---
layout: home

hero:
  name: "🦲 why.qbox?"
  text: "- 🧔why.not?"
  tagline: this site only briefly summarizes the purpose of qbox, it is not the official page
  image:
    src: https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg
    alt: Qbox Duck
  actions:
    - theme: brand
      text: Get Started
      link: https://docs.qbox.re/
    - theme: alt
      text: View on GitHub
      link: https://github.com/alp1x/whyqbox
---

### 👋 can you briefly explain what this qbox?
::: info + yes, of course.
 While originally forked from <Badge type="danger" text="QBCore" />, many <Badge type="warning" text="Qbox" /> resources have been refactored to improve code quality, enhance security, lower performance overhead, and integrate with <Badge type="tip" text="overextended" /> resources.
:::

### 👷 do qbcore scripts work in qbox?
::: info + yes, they do.
 We have created a bridge layer for backward compatibility with documented and correct qb-core usage paths, and you can continue to use most QBCore scripts without any changes.
:::

### 📦 is the qbox ready to use?
::: info + yes, it is.
 Since qbx_core has backward compatibility with qb-core sources, we recommend using only published Qbox sources for a stable experience.
:::

### ⚡ let's make a brief comparison
| A short overview |QBCore|Qbox|
| ------------- | :-----------: | -----------: |
| lightweight     | 🔧 |  ✅ |
| no lint errors are present      | ⭕ |  ✅ |
| readable and well organized     | 🔧 |  ✅ |
| modular structure     | ⭕ |  ✅ |
| no deprecated functions are being invoked     | ⭕ | ✅ |

[📚 Read more](https://docs.qbox.re/)


## 📦 what's next?

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
