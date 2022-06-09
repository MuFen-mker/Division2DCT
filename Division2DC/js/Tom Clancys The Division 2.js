Vue.filter("numberToCurrency", function (value) {
  if (!value) return 0
  // 获取整数部分
  const intPart = Math.trunc(value)
  // 整数部分处理，增加,
  const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  // 预定义小数部分
  let floatPart = ''
  // 将数值截取为小数部分和整数部分
  const valueArray = value.toString().split('.')
  if (valueArray.length === 2) { // 有小数部分
    floatPart = valueArray[1].toString().slice(0, 2) // 取得小数部分
    return intPartFormat + '.' + floatPart
  }
  return intPartFormat + floatPart
});

const root = new Vue({
  data () {
    return {
      arms: 0,
      RedCore: 0,
      WeaponType: 0,
      CHD: 0,
      DTA: 0,
      DTOC: 0,
      DTH: 0,
      HSD: 0,

      // element input
      restaurants: [],
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.WeaponName.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "342247", "WeaponName": "1886" },
        { "value": "92613.5", "WeaponName": "ACR SS" },
        { "value": "100135.5", "WeaponName": "LVOA-C" },
        { "value": "75219", "WeaponName": "M16A2" },
        { "value": "156079.5", "WeaponName": "M1A CQB" },
        { "value": "104836.5", "WeaponName": "Resolute MK47" },
        { "value": "97784.5", "WeaponName": "SIG 716" },
        { "value": "99665", "WeaponName": "SIG 716 CQB" },
        { "value": "105777", "WeaponName": "UIC15 MOD2" },
        { "value": "98255", "WeaponName": "USC .45ACP" },
        { "value": "116119.5", "WeaponName": "军规 MK17" },
        { "value": "84621.5", "WeaponName": "冷酷无情" },
        { "value": "205442", "WeaponName": "十三一打" },
        { "value": "104836.5", "WeaponName": "和谐" },
        { "value": "329084", "WeaponName": "响尾蛇" },
        { "value": "97784.5", "WeaponName": "城镇 MDR" },
        { "value": "84621.5", "WeaponName": "无情" },
        { "value": "116119.5", "WeaponName": "永恒凝视" },
        { "value": "100135.5", "WeaponName": "涌动" },
        { "value": "141036", "WeaponName": "特战 M1A" },
        { "value": "205442", "WeaponName": "经典 M1A" },
        { "value": "342247", "WeaponName": "维吉尼亚州人" },
        { "value": "99665", "WeaponName": "艺术家工具" },
        { "value": "116119.5", "WeaponName": "警用 MK17" },
        { "value": "103896.5", "WeaponName": "轻型 M4" },
        { "value": "122231", "WeaponName": "饥饿之人" },
        { "value": "53123.5", "WeaponName": "ACR" },
        { "value": "53123.5", "WeaponName": "ACR-E" },
        { "value": "62055.5", "WeaponName": "AK-M" },
        { "value": "51243", "WeaponName": "AUG A3-CQC" },
        { "value": "41370.5", "WeaponName": "CTAR-21" },
        { "value": "45131.5", "WeaponName": "F2000" },
        { "value": "56884.5", "WeaponName": "FAL" },
        { "value": "56884.5", "WeaponName": "FAL SA-58" },
        { "value": "56884.5", "WeaponName": "FAL SA-58 Para" },
        { "value": "44191", "WeaponName": "FAMAS 2010" },
        { "value": "48892", "WeaponName": "G36 C" },
        { "value": "55004", "WeaponName": "MK16" },
        { "value": "51713", "WeaponName": "PDR" },
        { "value": "50772.5", "WeaponName": "SIG 556" },
        { "value": "58765", "WeaponName": "TKB-408" },
        { "value": "47012", "WeaponName": "七号卡宾枪" },
        { "value": "60645", "WeaponName": "兴奋狂躁" },
        { "value": "48892", "WeaponName": "军用 G36" },
        { "value": "60645", "WeaponName": "军规 AK-M" },
        { "value": "47952", "WeaponName": "军规 P416" },
        { "value": "41370.5", "WeaponName": "劈柴者" },
        { "value": "48892", "WeaponName": "加强版 G36" },
        { "value": "39960", "WeaponName": "变色龙" },
        { "value": "51243", "WeaponName": "大角突击步枪" },
        { "value": "47952", "WeaponName": "定制 P416 G3" },
        { "value": "58765", "WeaponName": "废王者" },
        { "value": "55004", "WeaponName": "战术 MK16" },
        { "value": "45131.5", "WeaponName": "护盾破坏者" },
        { "value": "50772.5", "WeaponName": "机械动物" },
        { "value": "51713", "WeaponName": "测试对象" },
        { "value": "44191", "WeaponName": "燃烧殆尽" },
        { "value": "55004", "WeaponName": "特战 MK16" },
        { "value": "47952", "WeaponName": "狂野狼人" },
        { "value": "51713", "WeaponName": "电容突击" },
        { "value": "44191", "WeaponName": "纵火狂" },
        { "value": "47952", "WeaponName": "荣耀迷惑" },
        { "value": "47952", "WeaponName": "蜜獾" },
        { "value": "44191", "WeaponName": "警用 M4" },
        { "value": "51243", "WeaponName": "隐形之手" },
        { "value": "51713", "WeaponName": "驯鹰人" },
        { "value": "60645", "WeaponName": "黑市 AK-M" },
        { "value": "399602", "WeaponName": "Ekim 长棍" },
        { "value": "146677", "WeaponName": "G28" },
        { "value": "376096", "WeaponName": "M700 战术" },
        { "value": "376096", "WeaponName": "M700 碳纤维板" },
        { "value": "399602", "WeaponName": "Model 700" },
        { "value": "357291", "WeaponName": "SR-1" },
        { "value": "338956.5", "WeaponName": "SRS A1" },
        { "value": "159840.5", "WeaponName": "伞兵 SVD" },
        { "value": "940240", "WeaponName": "复仇女神" },
        { "value": "376096", "WeaponName": "定制 M44" },
        { "value": "159840.5", "WeaponName": "库存 SVD" },
        { "value": "159840.5", "WeaponName": "恐惧宣告" },
        { "value": "324382.5", "WeaponName": "战术 .308" },
        { "value": "324382.5", "WeaponName": "手术刀" },
        { "value": "357291", "WeaponName": "指定打击" },
        { "value": "338956.5", "WeaponName": "潜行 SRS" },
        { "value": "143856.5", "WeaponName": "特战 MK20 SSR" },
        { "value": "416056", "WeaponName": "猎枪 M44" },
        { "value": "423108", "WeaponName": "白色死神" },
        { "value": "159840.5", "WeaponName": "突击队" },
        { "value": "423108", "WeaponName": "经典 M44 卡宾枪" },
        { "value": "338956.5", "WeaponName": "螳螂" },
        { "value": "338956.5", "WeaponName": "针刺" },
        { "value": "357291", "WeaponName": "阿德蕾斯提雅" },
        { "value": "143856.5", "WeaponName": "黑暗" },
        { "value": "169240", "WeaponName": "ACS-12" },
        { "value": "594228", "WeaponName": "KSG 霰弹枪" },
        { "value": "695776", "WeaponName": "M870 高速" },
        { "value": "364812", "WeaponName": "SASG-12" },
        { "value": "451312", "WeaponName": "SIX12" },
        { "value": "646884", "WeaponName": "SPAS-12" },
        { "value": "440032", "WeaponName": "Super 90" },
        { "value": "695776", "WeaponName": "军规 M870" },
        { "value": "620555", "WeaponName": "双短管霰弹枪" },
        { "value": "620556", "WeaponName": "双管猎枪" },
        { "value": "620556", "WeaponName": "双管霰弹枪" },
        { "value": "620555", "WeaponName": "后备猎枪" },
        { "value": "451312", "WeaponName": "天蝎座" },
        { "value": "695776", "WeaponName": "定制 M870 MCS" },
        { "value": "695776", "WeaponName": "库耶列布希" },
        { "value": "364812", "WeaponName": "战术 SASG-12K" },
        { "value": "440032", "WeaponName": "战术 Super 90 SBS" },
        { "value": "440032", "WeaponName": "打手" },
        { "value": "451312", "WeaponName": "拖把" },
        { "value": "169240", "WeaponName": "摇滚" },
        { "value": "646884", "WeaponName": "摇篮曲" },
        { "value": "364812", "WeaponName": "海啸" },
        { "value": "440032", "WeaponName": "海陆 Super 90" },
        { "value": "646884", "WeaponName": "美梦" },
        { "value": "594228", "WeaponName": "送别" },
        { "value": "364812", "WeaponName": "黑市 SASG-12 S" },
        { "value": "57824.5", "WeaponName": "AUG A3 Para XS" },
        { "value": "50302.5", "WeaponName": "CMMG Banshee	" },
        { "value": "70518", "WeaponName": "M1928" },
        { "value": "51713", "WeaponName": "MP5 ST" },
        { "value": "51713", "WeaponName": "MP5-N" },
        { "value": "51713", "WeaponName": "MP5A2" },
        { "value": "47952", "WeaponName": "MP7" },
        { "value": "48892", "WeaponName": "P90" },
        { "value": "59705", "WeaponName": "PP-19" },
        { "value": "53123.5	", "WeaponName": "SIG MPX" },
        { "value": "65816.5", "WeaponName": "UMP45" },
        { "value": "40430", "WeaponName": "Vector SBR .45 ACP" },
        { "value": "37139", "WeaponName": "Vectot SBR 9mm" },
        { "value": "47952", "WeaponName": "交换链" },
        { "value": "53123.5", "WeaponName": "公寓" },
        { "value": "59705", "WeaponName": "冰冷关系" },
        { "value": "57824.5", "WeaponName": "加强版 AUG A3P" },
        { "value": "59705", "WeaponName": "加强版 PP-19" },
        { "value": "53123.5", "WeaponName": "安全距离" },
        { "value": "50302.5", "WeaponName": "怨恨" },
        { "value": "57824.5", "WeaponName": "战术 AUG A3P" },
        { "value": "65816.5", "WeaponName": "战术 UMP-45" },
        { "value": "42310.5", "WeaponName": "战术 Vector SBR 9mm	" },
        { "value": "51713", "WeaponName": "改装 SMG-9" },
        { "value": "49832.5", "WeaponName": "改装 SMG-9 A2" },
        { "value": "40430", "WeaponName": "暗冬行动" },
        { "value": "41370.5", "WeaponName": "死亡女神" },
        { "value": "55474", "WeaponName": "汤米" },
        { "value": "48892", "WeaponName": "艾米琳的护卫" },
        { "value": "66757", "WeaponName": "警用 T821" },
        { "value": "65816.5", "WeaponName": "警用 UMP-45" },
        { "value": "42780.5", "WeaponName": "话匣子" },
        { "value": "53123.5", "WeaponName": "逆火" },
        { "value": "84621.5", "WeaponName": "雪橇弑手" },
        { "value": "66757", "WeaponName": "黑市 T821" },
        { "value": "39960", "WeaponName": "GR9" },
        { "value": "37609.5", "WeaponName": "IWI NEGEV" },
        { "value": "56414", "WeaponName": "M249 B" },
        { "value": "44661", "WeaponName": "MG5" },
        { "value": "59705", "WeaponName": "军规 L86 LSW" },
        { "value": "61115.5", "WeaponName": "军规 M60 E4" },
        { "value": "56414", "WeaponName": "军规 MK46" },
        { "value": "55474", "WeaponName": "军规 RPK-74 M" },
        { "value": "61115.5", "WeaponName": "好时光" },
        { "value": "59705", "WeaponName": "定制 L86 A2" },
        { "value": "55474", "WeaponName": "崭新牢靠" },
        { "value": "56414", "WeaponName": "战术 M249 Para" },
        { "value": "39960", "WeaponName": "挑战" },
        { "value": "44661", "WeaponName": "斯莱普尼尔" },
        { "value": "47952", "WeaponName": "斯通纳轻突击机枪" },
        { "value": "47952", "WeaponName": "无声怒吼" },
        { "value": "37609.5", "WeaponName": "枪弹王者" },
        { "value": "47143.5", "WeaponName": "步兵 MG5" },
        { "value": "37609.5", "WeaponName": "残暴屠杀" },
        { "value": "56414", "WeaponName": "毒刺" },
        { "value": "59705", "WeaponName": "白板" },
        { "value": "63466", "WeaponName": "经典 M60" },
        { "value": "55474", "WeaponName": "经典 RPK-74" },
        { "value": "56414", "WeaponName": "蓝屏" },
        { "value": "61115.5	", "WeaponName": "黑市 M60 E6" },
        { "value": "55474", "WeaponName": "黑市 RPK-74 E" },
        { "value": "56414", "WeaponName": "黑色星期五" },
        { "value": "47012", "WeaponName": "鼠疫" },
        { "value": "190398.5", "WeaponName": "586 麦格农" },
        { "value": "32908", "WeaponName": "93R" },
        { "value": "220956", "WeaponName": "D50" },
        { "value": "109067.5", "WeaponName": "KARD-45" },
        { "value": "101075.5", "WeaponName": "M1911" },
        { "value": "98725", "WeaponName": "M45A1" },
        { "value": "79920", "WeaponName": "Px4 Storm Type F" },
        { "value": "79920", "WeaponName": "Px4 Storm Type T" },
        { "value": "76629.5", "WeaponName": "X-45" },
        { "value": "76629.5", "WeaponName": "X-45 战术" },
        { "value": "109067.5", "WeaponName": "Kard 定制 TDI" },
        { "value": "79920", "WeaponName": "军官的 M9 A1" },
        { "value": "81800.5", "WeaponName": "军规 M9" },
        { "value": "79920", "WeaponName": "定制 PF45" },
        { "value": "98725", "WeaponName": "战术 M1911" },
        { "value": "98725", "WeaponName": "特殊莫桑比克" },
        { "value": "169243", "WeaponName": "犀牛左轮手枪" },
        { "value": "282072", "WeaponName": "王子左轮手枪" },
        { "value": "170183", "WeaponName": "短枪管犀牛" },
        { "value": "82741", "WeaponName": "第一波 PF45" },
        { "value": "235060", "WeaponName": "自由" },
        { "value": "190398.5", "WeaponName": "警用 686 麦格农" },
        { "value": "190398.5", "WeaponName": "轨道" },
        { "value": "79920", "WeaponName": "避雷针" },
      ];
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  watch: {
    HSD () {
      Checkbox.AddAmpWd.AchillesPulse = 1 + (Number(this.HSD) / 100)
    }
  }
})

const Checkbox = new Vue({
  data () {
    return {
      // 面包篮层数
      BreadbasketC: 3,
      // 完美面包篮层数
      PBreadbasketC: 2,
      // 乐天派层数
      OSC: 10,
      POSC: 10,
      // 排山倒海层数
      TTMC: 4,
      PTTMC: 4,
      // 充满干劲层数
      FullOfEnergyC: 25,
      PFullOfEnergyC: 5,
      // 游骑兵层数
      RangerC: 1,
      // 步枪兵层数
      RiflemanC: 5,
      PRiflemanC: 6,
      // 专注
      AbsorbedC: 10,
      // 专注
      PAbsorbedC: 10,
      // 威吓
      IntimidateC: 7,
      PIntimidateC: 8,
      //抹灭性破坏
      OFC: 25,
      // 无人能挡的力量层数
      UnstoppableForceC: 5,
      // 索耶的护膝层数
      SawyersKneepadsC: 10,
      // 道奇层数
      DodgeCityHolsterC: 100,
      //突袭层数
      StrikersBattlegearC: 100,
      //芳心终结者层数
      HeartTerminatorC: 100,
      // 猎人怒火层数
      HunterRageC: 5,
      // 追悼
      MournC: 30,
      // 追悼红核
      MournsC: 6,

      // 武器伤
      WDJ: {
        Chameleon: false,
        DodgeCityHolster: false,
        Boomerang: false,
        PBoomerang: false,
        FightHandToHandWith: false,
        PFightHandToHandWith: false,
        PCFirst: false,
        PPCFirst: false,
        OS: false,
        POS: false,
        FistToMeat: false,
        Rifleman: false,
        PRifleman: false,
        Insanity: false,
        PInsanity: false,
        Mourn: false,
        Mourns: false,
        InSync:false,
        PInSync:false
      },
      AddWDJ: {
        Chameleon: 90,
        DodgeCityHolster: 1000,
        Boomerang: 40,
        PBoomerang: 50,
        FightHandToHandWith: 30,
        PFightHandToHandWith: 38,
        PCFirst: -30,
        PPCFirst: -27,
        OS: 30,
        POS: 40,
        FistToMeat: 40,
        Rifleman: 50,
        PRifleman: 66,
        Insanity: 18,
        PInsanity: 22,
        Mourn: 30,
        Mourns: 30,
        InSync:30,
        PInSync:40
      },

      //爆头伤
      HI: {
        SharpshooterTacticalLink: false,
        Breadbasket: false,
        PBreadbasket: false,
        Naked: false,
      },
      AddHI: {
        SharpshooterTacticalLink: 10,
        Breadbasket: 105,
        PBreadbasket: 100,
        Naked: 50,
      },

      // 总武器伤
      TWD: {
        Companion: false,
        Composure: false,
        Concussion: false,
        ConcussionKill: false,
        UnstoppableForce: false,
        Vigilance: false,
        Wicked: false,
        FeelTheSame: false,
        FeelTheSameY: false,
        Absorbed: false,
        PAbsorbed: false,
        Gunslinger: false,
        OF: false,
        ShelterCover: false,
        Spark: false,
        SawyersKneepads: false,
        TipOfTheSpear: false,
        FutureInitiative: false,
        PCLast: false,
        PPCLast: false,
      },
      AddTWD: {
        Companion: 15,
        Composure: 15,
        Concussion: 10,
        ConcussionKill: 25,
        UnstoppableForce: 25,
        Vigilance: 25,
        Wicked: 18,
        FeelTheSame: 15,
        FeelTheSameY: 7,
        Absorbed: 50,
        PAbsorbed: 60,
        Gunslinger: 20,
        OF: 25,
        ShelterCover: 12,
        Spark: 15,
        SawyersKneepads: 30,
        TipOfTheSpear: 20,
        FutureInitiative: 25,
        PCLast: 30,
        PPCLast: 33,
      },

      // 乘算伤害
      MD: {
        Opportunistic: false,
        POpportunistic: false,
        GlassCannon: false,
        PGlassCannon: false,
        Scout: false,
        PScout: false,
        BigHorn: false,
        LadyDeath: false,
        Merciless: false,
        Scorpio: false,
        AcesEights: false,
        OngoingDirective: false,
        TruePatriot: false,
        ScannerPulse: false,
        DemolitionistTacticalLink: false,
        SurvivalistTacticalLink: false,
        GoBlind: false,
        PGoBlind: false,
        Light: false,
        PLight: false,
        Ranger: false,
        ToAbuse: false,
        PToAbuse: false,
        Asystole: false,
        PAsystole: false,
        StrikersBattlegear: false,
        HeartTerminator: false,
        HunterRages: false,
        HunterRage: false
      },
      AddMD: {
        Opportunistic: 1.1,
        POpportunistic: 1.15,
        GlassCannon: 1.25,
        PGlassCannon: 1.3,
        Scout: 1.15,
        PScout: 1.2,
        BigHorn: 5.5,
        LadyDeath: 1.75,
        Merciless: 6,
        Scorpio: 1.2,
        AcesEights: 1.3,
        OngoingDirective: 1.2,
        TruePatriot: 1.08,
        ScannerPulse: 1.15,
        DemolitionistTacticalLink: 1.05,
        SurvivalistTacticalLink: 1.1,
        GoBlind: 1.2,
        PGoBlind: 1.25,
        Light: 1.2,
        PLight: 1.25,
        Ranger: 1.12,
        ToAbuse: 1.2,
        PToAbuse: 1.25,
        Asystole: 1.15,
        PAsystole: 1.2,
        StrikersBattlegear: Math.pow(1.005, 100),
        HeartTerminator: 2,
        HunterRages: 1.2,
        HunterRage: Math.pow(1.05, 5)
      },

      // 独立伤
      AmpWd: {
        FirewallStrikerShield: false,
        FirewallTacticalLink: false,
        TTM: false,
        PTTM: false,
        FullOfEnergy: false,
        PFullOfEnergy: false,
        AchillesPulse: false,
        Versatile: false,
        VersatileRF: false,
        VersatileAR: false,
        Intimidate: false,
        PIntimidate: false
      },
      AddAmpWd: {
        FirewallStrikerShield: 1.11,
        FirewallTacticalLink: 1.1,
        TTM: 1.4,
        PTTM: 1.48,
        FullOfEnergy: 1.25,
        PFullOfEnergy: 1.25,
        AchillesPulse: 1,
        Versatile: 1.35,
        VersatileRF: 1.35,
        VersatileAR: 1.1,
        Intimidate: Math.pow(1.05, 7),
        PIntimidate: Math.pow(1.05, 8)
      },
      // 技师拆解
      TechnicianDismantling: false,
      TechnicianDismantlingAdd: 1.12,

      HeadHunter: false,  //猎头
      HeadHunterAdd: 12.5,

      // 天赋选中切换
      WQT: { TalentTypeA: true },
      XJT: { TalentTypeA: false },
      BBT: { TalentTypeA: false },
      QTT: { TalentTypeA: false },
      ZBZ: { TalentTypeA: false },
      JNS: { TalentTypeA: false },
      ZCS: { TalentTypeA: false }
    }
  },
  methods: {
    ZCSF() {
      this.ZCS.TalentTypeA = true
      this.JNS.TalentTypeA = false
      this.QTT.TalentTypeA = false
      this.ZBZ.TalentTypeA = false
      this.BBT.TalentTypeA = false
      this.XJT.TalentTypeA = false
      this.WQT.TalentTypeA = false
    },
    JNSF() {
      this.JNS.TalentTypeA = true
      this.ZCS.TalentTypeA = false
      this.QTT.TalentTypeA = false
      this.ZBZ.TalentTypeA = false
      this.BBT.TalentTypeA = false
      this.XJT.TalentTypeA = false
      this.WQT.TalentTypeA = false
    },
    QTTF() {
      this.QTT.TalentTypeA = true
      this.JNS.TalentTypeA = false
      this.ZCS.TalentTypeA = false
      this.ZBZ.TalentTypeA = false
      this.BBT.TalentTypeA = false
      this.XJT.TalentTypeA = false
      this.WQT.TalentTypeA = false
    },
    ZBZF() {
      this.ZBZ.TalentTypeA = true
      this.JNS.TalentTypeA = false
      this.ZCS.TalentTypeA = false
      this.QTT.TalentTypeA = false
      this.BBT.TalentTypeA = false
      this.XJT.TalentTypeA = false
      this.WQT.TalentTypeA = false
    },
    BBTF() {
      this.BBT.TalentTypeA = true
      this.JNS.TalentTypeA = false
      this.ZCS.TalentTypeA = false
      this.QTT.TalentTypeA = false
      this.ZBZ.TalentTypeA = false
      this.XJT.TalentTypeA = false
      this.WQT.TalentTypeA = false
    },
    XJTF() {
      this.XJT.TalentTypeA = true
      this.JNS.TalentTypeA = false
      this.ZCS.TalentTypeA = false
      this.QTT.TalentTypeA = false
      this.ZBZ.TalentTypeA = false
      this.BBT.TalentTypeA = false
      this.WQT.TalentTypeA = false
    },
    WQTF() {
      this.WQT.TalentTypeA = true
      this.JNS.TalentTypeA = false
      this.ZCS.TalentTypeA = false
      this.QTT.TalentTypeA = false
      this.ZBZ.TalentTypeA = false
      this.BBT.TalentTypeA = false
      this.XJT.TalentTypeA = false
    },

    ChHunterRages () {
      this.MD.HunterRages = !this.MD.HunterRages
    },
    ChHunterRage () {
      this.MD.HunterRage = !this.MD.HunterRage
    },
    ChInSync(){
      this.WDJ.InSync = !this.WDJ.InSync
    },
    ChPInSync(){
      this.WDJ.PInSync = !this.WDJ.PInSync
    },
    ChMourns () {
      this.WDJ.Mourns = !this.WDJ.Mourns
    },
    ChMourn () {
      this.WDJ.Mourn = !this.WDJ.Mourn
    },
    ChAchillesPulse () {
      this.AmpWd.AchillesPulse = !this.AmpWd.AchillesPulse
    },
    ChVersatile () {
      this.AmpWd.Versatile = !this.AmpWd.Versatile
    },
    ChVersatileRF () {
      this.AmpWd.VersatileRF = !this.AmpWd.VersatileRF
    },
    ChVersatileAR () {
      this.AmpWd.VersatileAR = !this.AmpWd.VersatileAR
    },
    ChFeelTheSameY () {
      this.TWD.FeelTheSameY = !this.TWD.FeelTheSameY
    },
    ChConcussionKill () {
      this.TWD.ConcussionKill = !this.TWD.ConcussionKill
    },
    ChBoomerang () {
      this.WDJ.Boomerang = !this.WDJ.Boomerang
    },
    ChPBoomerang () {
      this.WDJ.PBoomerang = !this.WDJ.PBoomerang
    },
    ChBreadbasket () {
      this.HI.Breadbasket = !this.HI.Breadbasket
    },
    ChPBreadbasket () {
      this.HI.PBreadbasket = !this.HI.PBreadbasket
    },
    ChFightHandToHandWith () {
      this.WDJ.FightHandToHandWith = !this.WDJ.FightHandToHandWith
    },
    ChPFightHandToHandWith () {
      this.WDJ.PFightHandToHandWith = !this.WDJ.PFightHandToHandWith
    },
    ChGoBlind () {
      this.MD.GoBlind = !this.MD.GoBlind
    },
    ChPGoBlind () {
      this.MD.PGoBlind = !this.MD.PGoBlind
    },
    ChInsane () {
      this.WDJ.Insane = !this.WDJ.Insane
    },
    ChLight () {
      this.MD.Light = !this.MD.Light
    },
    ChPLight () {
      this.MD.PLight = !this.MD.PLight
    },
    ChPCFirst () {
      this.WDJ.PCFirst = !this.WDJ.PCFirst
    },
    ChPPCFirst () {
      this.WDJ.PPCFirst = !this.WDJ.PPCFirst
    },
    ChPCLast () {
      this.TWD.PCLast = !this.TWD.PCLast
    },
    ChPPCLast () {
      this.TWD.PPCLast = !this.TWD.PPCLast
    },
    ChNaked () {
      this.HI.Naked = !this.HI.Naked
    },
    ChOS () {
      this.WDJ.OS = !this.WDJ.OS
    },
    ChPOS () {
      this.WDJ.POS = !this.WDJ.POS
    },
    ChTTM () {
      this.AmpWd.TTM = !this.AmpWd.TTM
    },
    ChPTTM () {
      this.AmpWd.PTTM = !this.AmpWd.PTTM
    },
    ChFistToMeat () {
      this.WDJ.FistToMeat = !this.WDJ.FistToMeat
    },
    ChFullOfEnergy () {
      this.AmpWd.FullOfEnergy = !this.AmpWd.FullOfEnergy
    },
    ChPFullOfEnergy () {
      this.AmpWd.PFullOfEnergy = !this.AmpWd.PFullOfEnergy
    },
    ChRanger () {
      this.MD.Ranger = !this.MD.Ranger
    },
    ChRifleman () {
      this.WDJ.Rifleman = !this.WDJ.Rifleman
    },
    ChPRifleman () {
      this.WDJ.PRifleman = !this.WDJ.PRifleman
    },
    ChToAbuse () {
      this.MD.ToAbuse = !this.MD.ToAbuse
    },
    ChPToAbuse () {
      this.MD.PToAbuse = !this.MD.PToAbuse
    },
    ChInsanity () {
      this.WDJ.Insanity = !this.WDJ.Insanity
    },
    ChPInsanity () {
      this.WDJ.PInsanity = !this.WDJ.PInsanity
    },
    ChAsystole () {
      this.MD.Asystole = !this.MD.Asystole
    },
    ChPAsystole () {
      this.MD.PAsystole = !this.MD.PAsystole
    },
    ChFeelTheSame () {
      this.TWD.FeelTheSame = !this.TWD.FeelTheSame
    },
    ChAbsorbed () {
      this.TWD.Absorbed = !this.TWD.Absorbed
    },
    ChPAbsorbed () {
      this.TWD.PAbsorbed = !this.TWD.PAbsorbed
    },
    ChGlassCannon () {
      this.MD.GlassCannon = !this.MD.GlassCannon
    },
    ChPGlassCannon () {
      this.MD.PGlassCannon = !this.MD.PGlassCannon
    },
    ChGunslinger () {
      this.TWD.Gunslinger = !this.TWD.Gunslinger
    },
    ChIntimidate () {
      this.AmpWd.Intimidate = !this.AmpWd.Intimidate
    },
    ChPIntimidate () {
      this.AmpWd.PIntimidate = !this.AmpWd.PIntimidate
    },
    ChOF () {
      this.TWD.OF = !this.TWD.OF
    },
    ChShelterCover () {
      this.TWD.ShelterCover = !this.TWD.ShelterCover
    },
    ChSpark () {
      this.TWD.Spark = !this.TWD.Spark
    },
    ChHeadHunter () {
      this.HeadHunter = !this.HeadHunter
    },
    ChScout () {
      this.MD.Scout = !this.MD.Scout
    },
    ChPScout () {
      this.MD.PScout = !this.MD.PScout
    },
    ChCompanion () {
      this.TWD.Companion = !this.TWD.Companion
    },
    ChComposure () {
      this.TWD.Composure = !this.TWD.Composure
    },
    ChConcussion () {
      this.TWD.Concussion = !this.TWD.Concussion
    },
    ChOpportunistic () {
      this.MD.Opportunistic = !this.MD.Opportunistic
    },
    ChPOpportunistic () {
      this.MD.POpportunistic = !this.MD.POpportunistic
    },
    ChUnstoppableForce () {
      this.TWD.UnstoppableForce = !this.WDJ.UnstoppableForce
    },
    ChVigilance () {
      this.TWD.Vigilance = !this.TWD.Vigilance
    },
    ChWicked () {
      this.TWD.Wicked = !this.TWD.Wicked
    },
    ChSawyersKneepads () {
      this.TWD.SawyersKneepads = !this.TWD.SawyersKneepads
    },
    ChDodgeCityHolster () {
      this.WDJ.DodgeCityHolster = !this.WDJ.DodgeCityHolster
    },
    ChBigHorn () {
      this.MD.BigHorn = !this.MD.BigHorn
    },
    ChChameleon () {
      this.WDJ.Chameleon = !this.WDJ.Chameleon
    },
    ChLadyDeath () {
      this.MD.LadyDeath = !this.MD.LadyDeath
    },
    ChMerciless () {
      this.MD.Merciless = !this.MD.Merciless
    },
    ChScorpio () {
      this.MD.Scorpio = !this.MD.Scorpio
    },
    ChAcesEights () {
      this.MD.AcesEights = !this.MD.AcesEights
    },
    ChOngoingDirective () {
      this.MD.OngoingDirective = !this.MD.OngoingDirective
    },
    ChStrikersBattlegear () {
      this.MD.StrikersBattlegear = !this.MD.StrikersBattlegear
    },
    ChTipOfTheSpear () {
      this.TWD.TipOfTheSpear = !this.TWD.TipOfTheSpear
    },
    ChTruePatriot () {
      this.MD.TruePatriot = !this.MD.TruePatriot
    },
    ChFutureInitiative () {
      this.TWD.FutureInitiative = !this.TWD.FutureInitiative
    },
    ChHeartTerminator () {
      this.MD.HeartTerminator = !this.MD.HeartTerminator
    },
    ChScannerPulse () {
      this.MD.ScannerPulse = !this.MD.ScannerPulse
    },
    ChFirewallStrikerShield () {
      this.AmpWd.FirewallStrikerShield = !this.AmpWd.FirewallStrikerShield
    },
    ChDemolitionistTacticalLink () {
      this.MD.DemolitionistTacticalLink = !this.MD.DemolitionistTacticalLink
    },
    ChFirewallTacticalLink () {
      this.AmpWd.FirewallTacticalLink = !this.AmpWd.FirewallTacticalLink
    },
    ChSharpshooterTacticalLink () {
      this.HI.SharpshooterTacticalLink = !this.HI.SharpshooterTacticalLink
    },
    ChSurvivalistTacticalLink () {
      this.MD.SurvivalistTacticalLink = !this.MD.SurvivalistTacticalLink
    },
    ChTechnicianDismantling () {
      this.TechnicianDismantling = !this.TechnicianDismantling
    }
  },
  watch: {
    HunterRageC () {
      this.AddMD.HunterRage = Math.pow(1.05, this.HunterRageC)
    },
    HeartTerminatorC () {
      this.AddMD.HeartTerminator = 1 + (1 * Number(this.HeartTerminatorC)/100)
    },
    MournC () {
      this.AddWDJ.Mourn = 1 * this.MournC
    },
    MournsC () {
      this.AddWDJ.Mourns = 5 * this.MournsC
    },
    BreadbasketC () {
      this.AddHI.Breadbasket = 35 * this.BreadbasketC
    },
    PBreadbasketC () {
      this.AddHI.PBreadbasket = 50 * this.PBreadbasketC
    },
    OSC () {
      this.AddWDJ.OS = 3 * this.OSC
    },
    POSC () {
      this.AddWDJ.POS = 4 * this.POSC
    },
    TTMC () {
      this.AddAmpWd.TTM = 1 + (10 * Number(this.TTMC) / 100)
    },
    PTTMC () {
      this.AddAmpWd.PTTM = 1 + (12 * Number(this.PTTMC) / 100)
    },
    FullOfEnergyC () {
      this.AddAmpWd.FullOfEnergy = 1 + (1 * Number(this.FullOfEnergyC) / 100)
    },
    PFullOfEnergyC () {
      this.AddAmpWd.PFullOfEnergy = 1 + (5 * Number(this.PFullOfEnergyC) / 100)
    },
    RangerC () {
      this.AddMD.Ranger = 1 + (2 * Number(this.RangerC) / 100)
    },
    RiflemanC () {
      this.AddWDJ.Rifleman = 10 * this.RiflemanC
    },
    PRiflemanC () {
      this.AddWDJ.PRifleman = 11 * this.PRiflemanC
    },
    AbsorbedC () {
      this.AddTWD.Absorbed = 5 * this.AbsorbedC
    },
    PAbsorbedC () {
      this.AddTWD.PAbsorbed = 6 * this.PAbsorbedC
    },
    IntimidateC () {
      this.AddAmpWd.Intimidate = Math.pow(1.05, this.IntimidateC)
    },
    PIntimidateC () {
      this.AddAmpWd.PIntimidate = Math.pow(1.05, this.PIntimidateC)
    },
    OFC () {
      this.AddTWD.OF = 1 * this.OFC
    },
    UnstoppableForceC () {
      this.AddTWD.UnstoppableForce = 5 * this.UnstoppableForceC
    },
    SawyersKneepadsC () {
      this.AddTWD.SawyersKneepads = 3 * this.SawyersKneepadsC
    },
    DodgeCityHolsterC () {
      this.AddWDJ.DodgeCityHolster = 10 * this.DodgeCityHolsterC
    },
    StrikersBattlegearC () {
      this.AddMD.StrikersBattlegear = Math.pow(1.005, this.StrikersBattlegearC)
    },
  }
})
const Calculation = new Vue({

  data () {
    return {
      FULLWDJ: 0,
      FULLTWD: 0,
      FULLHI: 0,
      HSum: 0,
      ASum: 0,
      HSumB: 0,
      ASumB: 0,
      HSumH: 0,
      ASumH: 0,
      HSumHB: 0,
      ASumHB: 0,
      HSumOC: 0,
      ASumOC: 0,
      HSumBOC: 0,
      ASumBOC: 0,
      HSumHOC: 0,
      ASumHOC: 0,
      HSumHBOC: 0,
      ASumHBOC: 0,
      Sum: 0,

      TDL: 0,
      TDLB: 0,
      TDLdq: 0,
      TDLdqB: 0,

      CONHSum: 0,
      CONASum: 0,
      CONHSumB: 0,
      CONASumB: 0,
      CONHSumH: 0,
      CONASumH: 0,
      CONHSumHB: 0,
      CONASumHB: 0,

      HeadHunterDs: 0,

      HSUMNAME: '对生命值目标伤害',
      TechnicianDismantlingTag: true,

      // 简洁与详细切换
      concise: true,
      detailed: false
    }
  },
  methods: {
    CNV () {
      this.concise = !this.concise
      this.detailed = !this.detailed
    },
    culation () {
      let WDJARR = [];
      let AddWDJARR = [];

      let TWDARR = [];
      let AddTWDARR = [];

      let HIARR = [];
      let AddHIARR = [];

      let MDARR = [];
      let AddMDARR = [];

      let AmpWdARR = [];
      let AddAmpWdARR = [];

      // 初始化
      this.Sum = 0
      this.HSum = 0
      this.ASum = 0
      this.HSumB = 0
      this.ASumB = 0
      this.HSumH = 0
      this.ASumH = 0
      this.HSumHB = 0
      this.ASumHB = 0
      this.HSumOC = 0
      this.ASumOC = 0
      this.HSumBOC = 0
      this.ASumBOC = 0
      this.HSumHOC = 0
      this.ASumHOC = 0
      this.HSumHBOC = 0
      this.ASumHBOC = 0
      this.FULLTWD = 0
      this.FULLWDJ = 0
      this.TDL = 0
      this.TDLB = 0
      this.TDLdq = 0,
        this.TDLdqB = 0,
        this.CONHSum = 0
      this.CONASum = 0
      this.CONHSumB = 0
      this.CONASumB = 0
      this.CONHSumH = 0
      this.CONASumH = 0
      this.CONHSumHB = 0
      this.CONASumHB = 0
      this.FULLHI = Number(root.HSD)
      this.HeadHunterDs = 0
      this.TechnicianDismantlingTag = true
      this.HSUMNAME = '对生命值目标伤害'

      // 计算阿基里斯
      Checkbox.AddAmpWd.AchillesPulse = 1 + (Number(root.HSD) / 100)

      // 计算全部武器伤害
      Object.keys(Checkbox.WDJ).forEach((item) => {
        WDJARR.push(Checkbox.WDJ[item])
      })
      Object.keys(Checkbox.AddWDJ).forEach((item) => {
        AddWDJARR.push(Checkbox.AddWDJ[item])
      })
      for (let i = 0; i < WDJARR.length; i++) {
        if (WDJARR[i] == true) {
          this.FULLWDJ = this.FULLWDJ + AddWDJARR[i]
        }
      }

      // 计算全部总武器伤害
      Object.keys(Checkbox.TWD).forEach((item) => {
        TWDARR.push(Checkbox.TWD[item])
      })
      Object.keys(Checkbox.AddTWD).forEach((item) => {
        AddTWDARR.push(Checkbox.AddTWD[item])
      })
      for (let i = 0; i < TWDARR.length; i++) {
        if (TWDARR[i] == true) {
          this.FULLTWD = this.FULLTWD + AddTWDARR[i]
        }
      }

      // 计算全部爆头伤害
      Object.keys(Checkbox.HI).forEach((item) => {
        HIARR.push(Checkbox.HI[item])
      })
      Object.keys(Checkbox.AddHI).forEach((item) => {
        AddHIARR.push(Checkbox.AddHI[item])
      })
      for (let i = 0; i < HIARR.length; i++) {
        if (HIARR[i] == true) {
          this.FULLHI = this.FULLHI + AddHIARR[i]
        }
      }
      this.Sum = root.arms * (1 + (root.RedCore / 100 + root.WeaponType / 100 + this.FULLWDJ / 100))

      // 计算全部乘算伤害
      Object.keys(Checkbox.MD).forEach((item) => {
        MDARR.push(Checkbox.MD[item])
      })
      Object.keys(Checkbox.AddMD).forEach((item) => {
        AddMDARR.push(Checkbox.AddMD[item])
      })
      for (let i = 0; i < MDARR.length; i++) {
        if (MDARR[i] == true) {
          this.Sum = this.Sum * AddMDARR[i]
        }
      }
      // 猎头奖励
      if (Checkbox.HeadHunter == true) {
        this.HeadHunterDs = (root.arms * (1 + (root.RedCore / 100 + root.WeaponType / 100 + this.FULLWDJ / 100)) * (1 + (this.FULLTWD / 100))) * Checkbox.HeadHunterAdd
      }

      // 计算护甲与生命伤害
      this.ASum = this.Sum * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSum = this.Sum * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      // 掩体伤
      this.ASumOC = this.Sum * (1 + (root.DTOC / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumOC = this.Sum * (1 + (root.DTOC / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      // 暴击伤害
      this.ASumB = this.Sum * (1 + (root.CHD / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumB = this.Sum * (1 + (root.CHD / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      // 掩体暴击伤
      this.ASumBOC = this.Sum * (1 + (root.CHD / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumBOC = this.Sum * (1 + (root.CHD / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      // 爆头伤害
      this.ASumH = this.Sum * (1 + (this.FULLHI / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumH = this.Sum * (1 + (this.FULLHI / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      // 掩体爆头伤
      this.ASumHOC = this.Sum * (1 + (this.FULLHI / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumHOC = this.Sum * (1 + (this.FULLHI / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      // 头部暴击
      this.ASumHB = this.Sum * (1 + (root.CHD / 100 + this.FULLHI / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumHB = this.Sum * (1 + (root.CHD / 100 + this.FULLHI / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      //掩体头部暴击
      this.ASumHBOC = this.Sum * (1 + (root.CHD / 100 + this.FULLHI / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumHBOC = this.Sum * (1 + (root.CHD / 100 + this.FULLHI / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      // 判断技师拆解是否开启
      if (Checkbox.TechnicianDismantling == true) {
        this.HSUMNAME = '对机械单位伤害'
        this.TechnicianDismantlingTag = false
        this.TDL = this.Sum * (1 + (root.DTOC / 100)) * (1 + (this.FULLTWD / 100)) * Checkbox.TechnicianDismantlingAdd
        this.TDLB = this.Sum * (1 + (root.CHD / 100)) * (1 + (root.DTOC / 100)) * (1 + (this.FULLTWD / 100)) * Checkbox.TechnicianDismantlingAdd
        this.TDLdq = this.Sum * (1 + (this.FULLHI / 100)) * (1 + (root.DTOC / 100)) * (1 + (this.FULLTWD / 100)) * Checkbox.TechnicianDismantlingAdd
        this.TDLdqB = this.Sum * (1 + (this.FULLHI / 100)) * (1 + (root.DTOC / 100)) * (1 + (this.FULLTWD / 100)) * Checkbox.TechnicianDismantlingAdd
      }

      //独立伤选取计算
      Object.keys(Checkbox.AmpWd).forEach((item) => {
        AmpWdARR.push(Checkbox.AmpWd[item])
      })
      Object.keys(Checkbox.AddAmpWd).forEach((item) => {
        AddAmpWdARR.push(Checkbox.AddAmpWd[item])
      })
      for (let i = 0; i < AmpWdARR.length; i++) {
        if (AmpWdARR[i] == true) {
          this.ASum = this.ASum * AddAmpWdARR[i]
          this.HSum = this.HSum * AddAmpWdARR[i]

          this.ASumB = this.ASumB * AddAmpWdARR[i]
          this.HSumB = this.HSumB * AddAmpWdARR[i]

          this.ASumH = this.ASumH * AddAmpWdARR[i]
          this.HSumH = this.HSumH * AddAmpWdARR[i]

          this.ASumHB = this.ASumHB * AddAmpWdARR[i]
          this.HSumHB = this.HSumHB * AddAmpWdARR[i]

          this.ASumOC = this.ASumOC * AddAmpWdARR[i]
          this.HSumOC = this.HSumOC * AddAmpWdARR[i]

          this.ASumBOC = this.ASumBOC * AddAmpWdARR[i]
          this.HSumBOC = this.HSumBOC * AddAmpWdARR[i]

          this.ASumHOC = this.ASumHOC * AddAmpWdARR[i]
          this.HSumHOC = this.HSumHOC * AddAmpWdARR[i]

          this.ASumHBOC = this.ASumHBOC * AddAmpWdARR[i]
          this.HSumHBOC = this.HSumHBOC * AddAmpWdARR[i]
        }
      }

      // 猎头的计算
      this.ASum = this.ASum + this.HeadHunterDs
      this.HSum = this.HSum + this.HeadHunterDs

      this.ASumOC = this.ASumOC + this.HeadHunterDs
      this.HSumOC = this.HSumOC + this.HeadHunterDs

      this.ASumB = this.ASumB + this.HeadHunterDs
      this.HSumB = this.HSumB + this.HeadHunterDs

      this.ASumBOC = this.ASumBOC + this.HeadHunterDs
      this.HSumBOC = this.HSumBOC + this.HeadHunterDs

      this.ASumH = this.ASumH + this.HeadHunterDs
      this.HSumH = this.HSumH + this.HeadHunterDs

      this.ASumHOC = this.ASumHOC + this.HeadHunterDs
      this.HSumHOC = this.HSumHOC + this.HeadHunterDs

      this.ASumHB = this.ASumHB + this.HeadHunterDs
      this.HSumHB = this.HSumHB + this.HeadHunterDs

      this.ASumHBOC = this.ASumHBOC + this.HeadHunterDs
      this.HSumHBOC = this.HSumHBOC + this.HeadHunterDs

      // 判断道奇是否开启
      if (Checkbox.WDJ.DodgeCityHolster == true) {
        this.ASum = this.ASumH
        this.HSum = this.HSumH

        this.ASumOC = this.ASumHOC
        this.HSumOC = this.HSumHOC

        this.ASumB = this.ASumHB
        this.HSumB = this.HSumHB

        this.ASumBOC = this.ASumHBOC
        this.HSumBOC = this.HSumHBOC

        this.TDL = this.TDLdq
        this.TDLB = this.TDLdqB
      }

      // 赋值简洁面板
      this.CONHSum = this.HSumOC
      this.CONASum = this.ASumOC
      this.CONHSumB = this.HSumBOC
      this.CONASumB = this.ASumBOC
      this.CONHSumH = this.HSumHOC
      this.CONASumH = this.ASumHOC
      this.CONHSumHB = this.HSumHBOC
      this.CONASumHB = this.ASumHBOC
    },
  },
})
Calculation.$mount('#Calculation')
Checkbox.$mount('#Checkbox')
root.$mount('#root')


