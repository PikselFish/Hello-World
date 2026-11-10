/* ============================================================
   NOBULLSHIT presale site configuration.
   Everything that can change lives in this file only: identity,
   parameters, contract addresses, and ALL page text in both
   languages (English default, Chinese selectable).
   Empty contract addresses = PREVIEW MODE (no chain calls,
   transaction buttons disabled). Fill them ONLY after the
   contracts are really deployed.
   ============================================================ */
window.APP_SETTINGS = {
  /* --- Project identity (decided by Babang, 2026-11-11) --- */
  projectName: "NOBULLSHIT",
  ticker: "NOB",
  x: "", // e.g. "https://x.com/projecthandle" — empty hides the X link
  accent: "#ffd60a",
  accent2: "#ffd60a",

  /* --- Contract addresses (EMPTY = preview mode) --- */
  contracts: {
    token: "",
    sale: "",
    fund: "",
    pair: "",
  },

  /* --- Sale parameters --- */
  params: {
    tokensPerShare: 100000, // tokens per 1 paid share
    freeTokenPerShare: 10000, // tokens per 1 free share (10% of a paid share)
    freeShares: 1000, // total free shares (1 per Agent ID)
    openingShare: 10000, // paid shares that finalize the sale at once
    softCapShares: 6000, // at the deadline, at/above this still launches
    liquidityStages: [3000, 6000, 10000], // liquidity enters the pool at these paid-share marks
    pricePerShareBNB: 0.005, // price of 1 paid share in BNB
    maxPaidPerWallet: 10, // max paid shares per wallet
    saleStartISO: "", // e.g. "2026-11-20T00:00:00+08:00" — empty = not scheduled
    deadlineISO: "", // presale deadline; below the soft cap past it = refunds
  },

  /* --- Tokenomics (total supply 3,000,000,000 — amounts are what count) --- */
  totalSupply: 3000000000,
  tokenomics: [
    { key: "presale", pct: 34, amount: 1010000000, color: "#ffd60a" },
    { key: "liquidity", pct: 33, amount: 990000000, color: "#3ecf8e" },
    { key: "ecosystem", pct: 17, amount: 500000000, color: "#d9d9d9" },
    { key: "treasury", pct: 16, amount: 500000000, color: "#7a7a7a" },
  ],

  /* --- Chain --- */
  chain: {
    id: 56, // BNB Smart Chain
    name: "BNB Smart Chain",
    rpc: "https://bsc-dataseed.binance.org",
    explorer: "https://bscscan.com",
  },

  /* ==========================================================
     PAGE TEXT — English (default) and Chinese.
     {s1} {s2} {s3} = liquidity stage share marks, {n} = a number
     from the parameters, {q} = free-share quota, {supply} = total
     supply. Placeholders are filled from params at render time.
     ========================================================== */
  i18n: {
    en: {
      tagline: "Share-model token presale. No sweet promises — the numbers and the rules are written in the open.",
      description: "1 share = 100,000 tokens. The liquidity pool is built in 3 stages up to 10,000 shares. Below 6,000 shares at the deadline = full refund. Agent ID holders get 1 free share (10,000 tokens).",
      nav_presale: "Presale", nav_how: "How It Works", nav_terms: "Terms", nav_missions: "Missions", nav_tokenomics: "Tokenomics", nav_faq: "FAQ",
      connect: "Connect Wallet",
      banner: "PREVIEW MODE — contracts are not deployed yet. Contract addresses and the schedule will be announced; transaction buttons are disabled.",
      pill_preview: "Preview", pill_live_prefix: "Live on",
      stamp1: "No sweet promises", stamp2: "Open numbers", stamp3: "Below 6,000 = refund",
      cd_d: "Days", cd_h: "Hours", cd_m: "Minutes", cd_s: "Seconds",
      cd_none: "Presale schedule not announced yet", cd_opens: "Presale opens in", cd_deadline: "Presale is live — deadline in", cd_done: "Presale has ended",
      hs_free_left: "Free shares left", hs_price: "Price / share", hs_mine: "Your shares",
      hs_mine_sub: "Connect your wallet to see your shares",
      hs_mine_free_yes: "Your shares include 1 free share", hs_mine_free_no: "Your shares do not include a free share yet",
      desk_title: "Presale Desk", desk_tag_preview: "PREVIEW", desk_tag_live: "LIVE",
      desk_sub: "Liquidity is built in 3 stages — the last at share #{n}",
      free_row_title: "Free Share — Agent ID", free_row_sub: "1 free share = {n} tokens",
      free_waiting: "Waiting for contract deployment", free_claimed: "Free share claimed",
      free_eligible: "You are eligible to claim a free share", free_not: "Not eligible / not open yet",
      claim: "Claim",
      buy_title: "Buy Shares", buy_per: "1 share = {n} tokens", max_per: "max {n} / wallet",
      bd_shares: "Shares", bd_tokens: "Tokens received", bd_total: "Total to pay", buy_btn: "Buy Shares",
      collect_title: "Collect Tokens", collect_wait: "Pool not open yet", collect_open: "Pool is open — you can collect now", collect_btn: "Collect",
      refund_title: "Claim Refund", refund_note: "Presale failed — refunds are open", refund_btn: "Refund",
      invite_title: "Your Invite Link",
      invite_desc: "Purchases through your link earn the inviter a 5% bonus.",
      invite_ph: "Connect your wallet to generate your link", copy: "Copy",
      invite_came: "You arrived via an invite:",
      how_title: "How It Works", how_sub: "Four steps from presale to a tradable token.",
      step1_t: "Claim / buy shares", step1_p: "Free shares for Agent ID holders; paid shares for anyone (max {n} per wallet).",
      step2_t: "On the way to share #{n}", step2_p: "Presale funds are held by the fund contract. Free shares do not count toward the pool-opening target.",
      step3_t: "Liquidity enters in stages", step3_p: "At shares {s1}, {s2} and {s3}, liquidity enters the pool stage by stage. At the final stage the LP is locked and trading opens.",
      step4_t: "Collect your tokens", step4_p: "Once the presale finalizes — at {s3} shares, or the {soft} soft cap at the deadline — every share holder collects their tokens at the Presale Desk on this page.",
      terms_title: "Presale Terms", terms_sub: "The rules are written plainly from the start — the same for every participant.",
      term1_l: "Price per share", term1_n: "Fixed for the whole presale; it does not move with the number of buyers.",
      term2_l: "Contents of one share", term2_n: "Every paid share represents this many tokens, received at collect.",
      term3_l: "Free share", term3_n: "1 per Agent ID wallet, from a quota of {q} free shares. Not counted toward the pool target.",
      term4_l: "Liquidity in 3 stages", term4_n: "At each stage the matching share of liquidity enters the pool — visible on-chain, checkable by anyone. LP is fully locked at the final stage.",
      term5_l: "Soft cap / hard cap", term5_n: "Below {soft} shares at the deadline: failed, full refunds. At {soft}–{hard}: the presale closes and the token still launches. At {hard}: finalized immediately whenever reached. Unsold share allocations are burned at finalization.",
      term6_l: "Per-wallet limit", term6_n: "This limit keeps distribution spread out instead of concentrated in a few wallets.",
      missions_title: "Missions Program", missions_sub: "Presale activities tracked for bonuses and the holder streak board. The program runs when the presale opens.",
      tok_title: "Tokenomics", tok_sub: "Total supply {supply} tokens. Whatever is not used is burned when the presale finalizes — supply follows real demand.",
      tok_center: "total allocation",
      tok_presale: "Presale (shares)", tok_liquidity: "Liquidity pool", tok_ecosystem: "Ecosystem & rewards", tok_treasury: "Treasury (locked, vesting)",
      addr_title: "Contract Addresses", addr_sub: "Always match the addresses on this page with the official announcement. Verified contracts can be inspected publicly on BscScan.",
      addr_tba: "To be announced", addr_token: "Token", addr_sale: "Sale contract", addr_fund: "Fund contract", addr_pair: "Liquidity pair",
      faq_title: "Frequently Asked Questions",
      footer_presale_on: "Presale on", footer_right: "Not financial advice — do your own research.",
      copied_addr: "Address copied.", copied_invite: "Invite link copied.",
      connect_first_invite: "Connect your wallet first to generate an invite link.",
      tx_wait_wallet: "Waiting for wallet confirmation…", tx_sent: "Transaction sent, waiting for confirmation…", tx_fail: "Transaction failed / cancelled.",
      no_wallet: "No wallet found. Open this page in a wallet browser (MetaMask/Rabby/Bitget).",
      wallet_connected: "Wallet connected:", wallet_fail: "Failed to connect the wallet.",
      claim_ok: "Free share claimed. Tokens are collected after the pool opens.",
      buy_ok: "Purchase recorded. Tokens are collected after the pool opens.",
      collect_ok: "Tokens collected to your wallet.", refund_ok: "Refund sent to your wallet.",
      mile_stage: "Stage", mile_share: "shares",
      missions: [
        { title: "Daily Check-in", desc: "Check in every day during the presale to keep your streak.", pts: "10 pts / day" },
        { title: "Invite Friends", desc: "Share your invite link — purchases through it are tracked for the inviter bonus.", pts: "5% bonus" },
        { title: "Hold an Agent ID", desc: "Wallets with an active Agent ID are entitled to a free share and announcement priority.", pts: "1 free share" },
        { title: "Hold Your Shares", desc: "Keep your shares until the pool opens to enter the holder streak board.", pts: "Streak board" },
      ],
      faq: [
        { q: "What is a share?", a: "A share is the presale unit. 1 paid share is worth 100,000 tokens and 1 free share is worth 10,000 tokens. Shares are recorded by the sale contract and can be exchanged for tokens with the Collect button after the pool opens." },
        { q: "Who is entitled to a free share?", a: "Every wallet holding an Agent ID is entitled to 1 free share, while the quota of 1,000 free shares lasts. Free shares do not reduce the paid-share quota and do not count toward the pool-opening target." },
        { q: "When does the pool open?", a: "Liquidity is built in 3 stages: at paid shares 3,000, 6,000 and 10,000, part of the liquidity is placed into the pool, publicly checkable on-chain. Tokens can be collected and traded after the final stage is reached, and at that stage all LP is locked." },
        { q: "What if the target is not reached?", a: "There are three outcome zones, written down from day one. Reach 10,000 shares: the presale finalizes at once. End at the deadline with 6,000 shares or more (soft cap): the presale closes and the token still launches — remaining liquidity is placed, LP is locked, collecting and trading open. Below 6,000 shares at the deadline: the presale fails and buyers can withdraw their BNB in full (refund) through the sale contract." },
        { q: "Can a free share be sold?", a: "What you receive from a free share is tokens after the pool opens. The tokens are the same as purchased ones — once collected, they can be transferred or traded freely." },
      ],
    },
    zh: {
      tagline: "份额模式代币预售。不画大饼——数字和规则都公开写明。",
      description: "1 份 = 100,000 枚代币。流动性池分 3 个阶段建立，直至 10,000 份。截止时低于 6,000 份 = 全额退款。Agent ID 持有者可获得 1 份免费份额（10,000 枚代币）。",
      nav_presale: "预售", nav_how: "运作方式", nav_terms: "条款", nav_missions: "任务", nav_tokenomics: "代币经济学", nav_faq: "常见问题",
      connect: "连接钱包",
      banner: "预览模式——合约尚未部署。合约地址与时间表将另行公布；交易按钮暂不可用。",
      pill_preview: "预览", pill_live_prefix: "已上线：",
      stamp1: "不画大饼", stamp2: "数据公开", stamp3: "低于 6,000 = 全额退款",
      cd_d: "天", cd_h: "小时", cd_m: "分钟", cd_s: "秒",
      cd_none: "预售时间表尚未公布", cd_opens: "预售开始倒计时", cd_deadline: "预售进行中——截止倒计时", cd_done: "预售已结束",
      hs_free_left: "剩余免费份额", hs_price: "每份价格", hs_mine: "你的份额",
      hs_mine_sub: "连接钱包查看你的份额",
      hs_mine_free_yes: "你的份额包含 1 份免费份额", hs_mine_free_no: "你的份额尚未包含免费份额",
      desk_title: "预售台", desk_tag_preview: "预览", desk_tag_live: "进行中",
      desk_sub: "流动性分 3 个阶段注入——最后一阶段在第 {n} 份",
      free_row_title: "免费份额——Agent ID", free_row_sub: "1 份免费份额 = {n} 枚代币",
      free_waiting: "等待合约部署", free_claimed: "免费份额已领取",
      free_eligible: "你有资格领取免费份额", free_not: "暂不符合资格 / 尚未开放",
      claim: "领取",
      buy_title: "购买份额", buy_per: "1 份 = {n} 枚代币", max_per: "每钱包最多 {n} 份",
      bd_shares: "份额数量", bd_tokens: "获得代币", bd_total: "应付总额", buy_btn: "购买份额",
      collect_title: "领取代币", collect_wait: "流动性池尚未开启", collect_open: "流动性池已开启——现在可以领取", collect_btn: "领取",
      refund_title: "领取退款", refund_note: "预售失败——退款已开放", refund_btn: "退款",
      invite_title: "你的邀请链接",
      invite_desc: "通过你的链接购买，邀请人可获得 5% 奖励。",
      invite_ph: "连接钱包以生成你的链接", copy: "复制",
      invite_came: "你通过邀请链接访问：",
      how_title: "运作方式", how_sub: "从预售到代币可交易的四个步骤。",
      step1_t: "领取 / 购买份额", step1_p: "Agent ID 持有者可领免费份额；任何人可购买付费份额（每钱包最多 {n} 份）。",
      step2_t: "向第 {n} 份迈进", step2_p: "预售资金由基金合约托管。免费份额不计入开池目标。",
      step3_t: "流动性分阶段注入", step3_p: "在第 {s1}、{s2} 和 {s3} 份时，流动性分阶段进入池中。最后阶段 LP 将被锁定，交易开启。",
      step4_t: "领取你的代币", step4_p: "预售一旦完成——达到 {s3} 份，或在截止时达到 {soft} 份软顶——所有份额持有者都可在本页的预售台领取代币。",
      terms_title: "预售条款", terms_sub: "规则从一开始就写得清清楚楚——对每位参与者都一样。",
      term1_l: "每份价格", term1_n: "整个预售期间价格固定，不随购买人数变化。",
      term2_l: "每份包含", term2_n: "每份付费份额代表这么多代币，领取时到账。",
      term3_l: "免费份额", term3_n: "每个持有 Agent ID 的钱包 1 份，来自 {q} 份免费份额配额。不计入开池目标。",
      term4_l: "流动性分 3 阶段", term4_n: "每个阶段将相应比例的流动性注入池中——链上可见，任何人可查。最后阶段 LP 完全锁定。",
      term5_l: "软顶 / 硬顶", term5_n: "截止时低于 {soft} 份：失败，全额退款。{soft}–{hard} 份：预售关闭，代币仍会推出。达到 {hard} 份：随时立即完成。未售出的份额配额在完成时销毁。",
      term6_l: "每钱包上限", term6_n: "此上限让分布更分散，而不是集中在少数钱包。",
      missions_title: "任务计划", missions_sub: "预售期间的活动将被记录，用于奖励与持有人连续榜。计划在预售开启时运行。",
      tok_title: "代币经济学", tok_sub: "总供应量 {supply} 枚代币。未使用的部分将在预售完成时销毁——供应量跟随真实需求。",
      tok_center: "总分配",
      tok_presale: "预售（份额）", tok_liquidity: "流动性池", tok_ecosystem: "生态与奖励", tok_treasury: "财库（锁定，线性释放）",
      addr_title: "合约地址", addr_sub: "请始终将本页地址与官方公告核对。已验证合约可在 BscScan 上公开查看。",
      addr_tba: "待公布", addr_token: "代币", addr_sale: "预售合约", addr_fund: "基金合约", addr_pair: "流动性交易对",
      faq_title: "常见问题",
      footer_presale_on: "预售于", footer_right: "不构成财务建议——请自行研究。",
      copied_addr: "地址已复制。", copied_invite: "邀请链接已复制。",
      connect_first_invite: "请先连接钱包以生成邀请链接。",
      tx_wait_wallet: "等待钱包确认…", tx_sent: "交易已发送，等待确认…", tx_fail: "交易失败或已取消。",
      no_wallet: "未找到钱包。请在钱包浏览器中打开本页（MetaMask/Rabby/Bitget）。",
      wallet_connected: "钱包已连接：", wallet_fail: "连接钱包失败。",
      claim_ok: "免费份额已领取。代币将在开池后领取。",
      buy_ok: "购买已记录。代币将在开池后领取。",
      collect_ok: "代币已领取到你的钱包。", refund_ok: "退款已发送到你的钱包。",
      mile_stage: "阶段", mile_share: "份",
      missions: [
        { title: "每日签到", desc: "预售期间每天签到，保持你的连续记录。", pts: "10 分 / 天" },
        { title: "邀请好友", desc: "分享你的邀请链接——通过它产生的购买将被记录，用于邀请奖励。", pts: "5% 奖励" },
        { title: "持有 Agent ID", desc: "拥有有效 Agent ID 的钱包有权获得免费份额和公告优先权。", pts: "1 份免费份额" },
        { title: "持有你的份额", desc: "将份额持有到开池，进入持有人连续榜。", pts: "连续榜" },
      ],
      faq: [
        { q: "什么是份额？", a: "份额是预售的单位。1 份付费份额价值 100,000 枚代币，1 份免费份额价值 10,000 枚代币。份额由预售合约记录，开池后可通过“领取”按钮兑换为代币。" },
        { q: "谁有资格获得免费份额？", a: "每个持有 Agent ID 的钱包都有权获得 1 份免费份额，1,000 份免费份额配额用完为止。免费份额不占用付费份额配额，也不计入开池目标。" },
        { q: "流动性池何时开启？", a: "流动性分 3 个阶段建立：在付费份额达到 3,000、6,000 和 10,000 时，将一部分流动性注入池中，链上公开可查。达到最后阶段后即可领取和交易代币，且该阶段所有 LP 都将被锁定。" },
        { q: "如果目标没有达成怎么办？", a: "有三个结果区间，从第一天起就写明。达到 10,000 份：预售立即完成。截止时达到 6,000 份或以上（软顶）：预售关闭，代币仍会推出——剩余流动性注入，LP 锁定，领取与交易开启。截止时低于 6,000 份：预售失败，购买者可通过预售合约全额取回 BNB（退款）。" },
        { q: "免费份额可以出售吗？", a: "免费份额带给你的是开池后的代币。这些代币与购买所得相同——领取后可自由转账或交易。" },
      ],
    },
  },
};
