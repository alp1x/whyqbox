---
layout: home

hero:
  name: "🦲 왜.qbox인가요?"
  text: "- 🧔왜.안되겠어?"
  tagline: 이 사이트는 qbox의 목적을 간략하게 요약할 뿐, 공식 페이지가 아닙니다
  image:
    src: https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg
    alt: Qbox 오리
  actions:
    - theme: brand
      text: 시작하기
      link: https://docs.qbox.re/
    - theme: alt
      text: GitHub에서 보기
      link: https://github.com/alp1x/whyqbox
---

### 👋 qbox가 무엇인지 간단히 설명해 주실 수 있나요?
::: info + 네, 물론입니다.
 원래 <Badge type="danger" text="QBCore" />에서 분기한 Qbox는 코드 품질을 향상시키고, 보안을 강화하며, 성능 오버헤드를 낮추고, <Badge type="tip" text="overextended" /> 리소스와 통합하기 위해 많은 리소스가 재구성되었습니다.
:::

### 👷 qbcore 스크립트는 qbox에서 작동하나요?
::: info + 네, 작동합니다.
 문서화되고 올바른 qb-core 사용 경로와의 호환성을 위한 브릿지 계층을 만들었으며, 대부분의 QBCore 스크립트를 변경 없이 계속 사용할 수 있습니다.
:::

### 📦 qbox 사용 준비가 되었나요?
::: info + 네, 준비되었습니다.
 Qbx_core가 qb-core 소스와의 호환성을 갖추고 있기 때문에 안정적인 경험을 위해 출판된 Qbox 소스만 사용하시길 권장합니다.
:::

### ⚡ 간단한 비교를 해봅시다
| 간단한 개요 |QBCore|Qbox|
| ------------- | :-----------: | -----------: |
| 가벼움     | 🔧 |  ✅ |
| 린트 오류 없음      | ⭕ |  ✅ |
| 읽기 쉽고 잘 구성됨     | 🔧 |  ✅ |
| 모듈 구조     | ⭕ |  ✅ |
| 사용 중단된 함수 호출 없음     | ⭕ | ✅ |

[📚 더 읽어보기](https://docs.qbox.re/)


## 📦 다음은 무엇인가요?



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
