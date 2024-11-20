---
layout: home

hero:
  name: "🦲  ليش؟.qbox"
  text: "- 🧔 ليش.لا؟"
  tagline: هذا الموقع يلخص بشكل بسيط هدف qbox، وهو ليس الصفحة الرسمية
  image:
    src: https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg
    alt: بطة Qbox
  actions:
    - theme: brand
      text: ابدأ الآن
      link: https://docs.qbox.re/
    - theme: alt
      text: عرض على GitHub
      link: https://github.com/alp1x/whyqbox
---

### 👋 تقدر تشرح لي qbox بشكل مختصر؟
::: info + نعم، بالطبع.
في الأصل تم إنشاءه من نسخة مُعدلة من <Badge type="danger" text="QBCore" />, لكن العديد من موارد <Badge type="warning" text="Qbox" /> تم إعادة هيكلتها لتحسين جودة الكود، تعزيز الأمان، تقليل الحمل على الأداء، والتكامل مع موارد <Badge type="tip" text="overextended" />.
:::

### 👷 هل سكريبتات qbcore تشتغل في qbox؟
::: info + نعم، تشتغل.
أنشأنا طبقة جسرية للتوافق العكسي مع مسارات استخدام qb-core الموثقة والصحيحة، وتقدر تستمر في استخدام معظم سكريبتات QBCore بدون أي تعديلات.
:::

### 📦 هل qbox جاهز للاستخدام؟
::: info + نعم، جاهز.
بما أن qbx_core متوافق عكسياً مع مصادر qb-core، ننصح باستخدام فقط المصادر المنشورة لـ Qbox لتجربة مستقرة.
:::

### ⚡ خلنا نسوي مقارنة بسيطة
| لمحة عامة قصيرة |QBCore|Qbox|
| ------------- | :-----------: | -----------: |
| خفيف الوزن     | 🔧 |  ✅ |
| ما في أخطاء lint      | ⭕ |  ✅ |
| قابلة للقراءة ومنظمة بشكل جيد    | 🔧 |  ✅ |
| هيكلية معيارية     | ⭕ |  ✅ |
| لا يتم استدعاء أي وظائف قديمة    | ⭕ | ✅ |

[📚 اقرأ المزيد](https://docs.qbox.re/)

## 📦 وش الجاي؟

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

![انتظر](https://media1.tenor.com/m/mzdEPa0JG4AAAAAd/punisher-no-no-no-tanklorde.gif)