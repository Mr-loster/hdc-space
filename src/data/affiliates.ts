export interface AffiliateItem {
  slug: string;
  name: string;
  taglineZh: string;
  taglineEn: string;
  categoryZh: string;
  categoryEn: string;
  targetUrl: string;
  badgeZh?: string;
  badgeEn?: string;
  rating?: number;
  priceZh?: string;
  priceEn?: string;
  couponZh?: string;
  couponEn?: string;
  descriptionZh: string;
  descriptionEn: string;
  icon: string;
  featured?: boolean;
  posterImage?: string;
}

// 真实好物与返佣推荐数据库
export const affiliateList: AffiliateItem[] = [
  {
    slug: "binance",
    name: "Binance 币安",
    taglineZh: "全球交易量第一的加密货币交易平台，安全合规、深度流动性",
    taglineEn: "World's leading cryptocurrency exchange by trade volume & security",
    categoryZh: "数字金融与Web3",
    categoryEn: "Crypto & Finance",
    targetUrl: "https://www.bsmkweb.net/register?ref=814488239",
    badgeZh: "全球第一",
    badgeEn: "World #1",
    rating: 4.9,
    priceZh: "新人专享交易手续费折扣",
    priceEn: "Exclusive Fee Discounts",
    couponZh: "邀请码：814488239（享专属手续费返佣与新手礼包）",
    couponEn: "Referral Code: 814488239 (Fee rebate & welcome bonus)",
    descriptionZh: "全球公认的数字资产旗舰平台。提供极高流动性、丰富的现货与衍生品交易，以及数十亿美元的 SAFU 投资者保护基金，是参与加密经济与资产配置的首选基础设施。",
    descriptionEn: "The undisputed benchmark for digital asset trading. Features industry-leading liquidity, advanced spot/futures suites, and multi-billion-dollar SAFU insurance reserves.",
    icon: "🪙",
    featured: true,
    posterImage: "/binance-poster.png",
  },
  {
    slug: "wise",
    name: "Wise 多币种账户",
    taglineZh: "全球公认的低费率跨境汇款与多币种数字银行账户",
    taglineEn: "International money transfers & multi-currency account with real exchange rates",
    categoryZh: "数字金融与Web3",
    categoryEn: "Crypto & Finance",
    targetUrl: "https://wise.com/invite/ilpc/dechaoh4",
    badgeZh: "出海必备",
    badgeEn: "Essential",
    rating: 4.9,
    priceZh: "免费开户 / 真实中间汇率",
    priceEn: "Free Account / Mid-Market Rates",
    couponZh: "专属福利：通过本站链接注册，享最高 £500（约 4,500 元）免费汇款额度",
    couponEn: "Special Perk: Free transfer up to £500 (~$600) via HDC's link",
    descriptionZh: "全球自由职业者、跨境电商、留学生与数字游民的标配金融工具。支持持有并兑换 40+ 种全球法定货币，提供真实市场中间汇率，费率透明度远超传统商业银行，完美无缝对接各类海外消费与法币出入金需求。",
    descriptionEn: "The essential financial bridge for global freelancers, digital nomads, and cross-border investors. Hold and convert 40+ currencies at real mid-market exchange rates with ultra-low transparent fees.",
    icon: "💳",
    featured: true,
  },
  {
    slug: "ifast",
    name: "iFAST Global Bank (奕丰环球银行)",
    taglineZh: "受英国 PRA/FCA 监管的正规数字商业银行，享 £85,000 FSCS 存款保障",
    taglineEn: "UK-regulated full digital bank with £85,000 FSCS deposit insurance protection",
    categoryZh: "数字金融与Web3",
    categoryEn: "Crypto & Finance",
    targetUrl: "https://www.ifastgb.com/tellafriend/WDWXXNI94D",
    badgeZh: "英国正规银行",
    badgeEn: "UK Licensed Bank",
    rating: 4.9,
    priceZh: "免费开户 / £85,000 存款保障",
    priceEn: "Free Account / £85k FSCS Covered",
    couponZh: "专属邀请码：WDWXXNI94D（开户达标享现金返现奖励）",
    couponEn: "Referral Code: WDWXXNI94D (Cash bonus upon qualifying deposit)",
    descriptionZh: "持有英国全牌照的正规商业银行，受英国审慎监管局（PRA）与金融行为监管局（FCA）监管，享受英国政府最高 £85,000 英镑 FSCS 存款保险。支持远程开通个人同名英国银行账户（多币种独立 IBAN），与 Wise 官方深度互通无损秒到，出海资金合规流转的核心底座。",
    descriptionEn: "A fully authorized UK digital bank regulated by PRA and FCA, offering up to £85,000 FSCS government deposit protection. Provides personal multi-currency UK IBAN accounts with instant zero-loss linkages to Wise.",
    icon: "🏦",
    featured: true,
  },
];

export function getAffiliateBySlug(slug: string): AffiliateItem | undefined {
  return affiliateList.find((item) => item.slug === slug);
}
