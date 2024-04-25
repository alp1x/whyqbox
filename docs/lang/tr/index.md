---
layout: home

hero:
  name: "🦲 neden.qbox?"
  text: "- 🧔neden.olmasın?"
  tagline: Bu site qbox'un amacını kısaca özetlemektedir, resmi sayfa değildir
  image:
    src: https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg
    alt: Qbox Ördek
  actions:
    - theme: brand
      text: Başlamak için
      link: https://docs.qbox.re/
    - theme: alt
      text: GitHub'da Görüntüle
      link: https://github.com/alp1x/whyqbox
---

### 👋 qbox nedir, kısaca açıklar mısınız?
::: info + evet, tabii ki.
 Aslen <Badge type="danger" text="QBCore" />'dan çatallanan <Badge type="warning" text="Qbox" />, kod kalitesini artırmak, güvenliği geliştirmek, performans yükünü azaltmak ve <Badge type="tip" text="overextended" /> kaynaklarıyla entegre olacak şekilde birçok kaynak yeniden düzenlenmiştir.
:::

### 👷 qbcore betikleri qbox'ta çalışır mı?
::: info + evet, çalışır.
 Geriye dönük uyumluluk için bir köprü katmanı oluşturduk ve belgelenmiş ve doğru qb-core kullanım yollarıyla çoğu QBCore betiğini değişiklik yapmadan kullanmaya devam edebilirsiniz.
:::

### 📦 qbox kullanıma hazır mı?
::: info + evet, hazır.
 Qbx_core'un qb-core kaynaklarıyla geriye dönük uyumluluğu olduğundan, stabil bir deneyim için yalnızca yayımlanan Qbox kaynaklarını kullanmanızı öneririz.
:::

### ⚡ kısa bir karşılaştırma yapalım
| Kısa bir özet |QBCore|Qbox|
| ------------- | :-----------: | -----------: |
| hafif     | 🔧 |  ✅ |
| lint hataları yok      | ⭕ |  ✅ |
| okunabilir ve iyi organize edilmiş     | 🔧 |  ✅ |
| modüler yapı     | ⭕ |  ✅ |
| kullanımdan kaldırılmış kodlar yok     | ⭕ | ✅ |

[📚 Daha fazla oku](https://docs.qbox.re/)


## 📦 sırada ne var?


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
