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
    }
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
      // 乐天派层数
      OSC: 10,
      // 排山倒海层数
      TTMC: 4,
      // 充满干劲层数
      FullOfEnergyC: 25,
      // 游骑兵层数
      RangerC: 1,
      // 步枪兵层数
      RiflemanC: 5,
      // 专注
      AbsorbedC: 10,
      // 专注
      PAbsorbedC: 10,
      // 威吓
      IntimidateC: 7,
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
        FightHandToHandWith: false,
        PCFirst: false,
        OS: false,
        FistToMeat: false,
        Rifleman: false,
        Insanity: false,
        Mourn: false,
        Mourns: false,
      },
      AddWDJ: {
        Chameleon: 90,
        DodgeCityHolster: 1000,
        Boomerang: 40,
        FightHandToHandWith: 30,
        PCFirst: -30,
        OS: 15,
        FistToMeat: 40,
        Rifleman: 50,
        Insanity: 18,
        Mourn: 1,
        Mourns: 5,
      },

      //爆头伤
      HI: {
        SharpshooterTacticalLink: false,
        Breadbasket: false,
        Naked: false
      },
      AddHI: {
        SharpshooterTacticalLink: 10,
        Breadbasket: 105,
        Naked: 50
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
      },

      // 乘算伤害
      MD: {
        Opportunistic: false,
        POpportunistic: false,
        GlassCannon: false,
        PGlassCannon: false,
        Scout: false,
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
        Light: false,
        Ranger: false,
        ToAbuse: false,
        Asystole: false,
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
        Light: 1.2,
        Ranger: 1.12,
        ToAbuse: 1.2,
        Asystole: 1.15,
        StrikersBattlegear: Math.pow(1.005, 100),
        HeartTerminator: Math.pow(1.01, 100),
        HunterRages: 1.2,
        HunterRage: Math.pow(1.05, 5)
      },

      // 独立伤
      AmpWd: {
        FirewallStrikerShield: false,
        FirewallTacticalLink: false,
        TTM: false,
        FullOfEnergy: false,
        AchillesPulse: false,
        Versatile: false,
        VersatileRF: false,
        VersatileAR: false,
        Intimidate: false
      },
      AddAmpWd: {
        FirewallStrikerShield: 1.11,
        FirewallTacticalLink: 1.1,
        TTM: 1.4,
        FullOfEnergy: 1.25,
        AchillesPulse: 1,
        Versatile: 1.35,
        VersatileRF: 1.35,
        VersatileAR: 1.1,
        Intimidate: 1.35
      },
      // 技师拆解
      TechnicianDismantling: false,
      TechnicianDismantlingAdd: 1.12,

      HeadHunter: false,  //猎头
      HeadHunterAdd: 12.5
    }
  },
  methods: {
    ChHunterRages () {
      this.MD.HunterRages = !this.MD.HunterRages
    },
    ChHunterRage () {
      this.MD.HunterRage = !this.MD.HunterRage
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
    ChBreadbasket () {
      this.HI.Breadbasket = !this.HI.Breadbasket
    },
    ChFightHandToHandWith () {
      this.WDJ.FightHandToHandWith = !this.WDJ.FightHandToHandWith
    },
    ChGoBlind () {
      this.MD.GoBlind = !this.MD.GoBlind
    },
    ChInsane () {
      this.WDJ.Insane = !this.WDJ.Insane
    },
    ChLight () {
      this.MD.Light = !this.MD.Light
    },
    ChPCFirst () {
      this.WDJ.PCFirst = !this.WDJ.PCFirst
    },
    ChPCLast () {
      this.TWD.PCLast = !this.TWD.PCLast
    },
    ChNaked () {
      this.HI.Naked = !this.HI.Naked
    },
    ChOS () {
      this.WDJ.OS = !this.WDJ.OS
    },
    ChTTM () {
      this.AmpWd.TTM = !this.AmpWd.TTM
    },
    ChFistToMeat () {
      this.WDJ.FistToMeat = !this.WDJ.FistToMeat
    },
    ChFullOfEnergy () {
      this.AmpWd.FullOfEnergy = !this.AmpWd.FullOfEnergy
    },
    ChRanger () {
      this.MD.Ranger = !this.MD.Ranger
    },
    ChRifleman () {
      this.WDJ.Rifleman = !this.WDJ.Rifleman
    },
    ChToAbuse () {
      this.MD.ToAbuse = !this.MD.ToAbuse
    },
    ChInsanity () {
      this.WDJ.Insanity = !this.WDJ.Insanity
    },
    ChAsystole () {
      this.MD.Asystole = !this.MD.Asystole
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
      this.AddMD.HeartTerminator = Math.pow(1.01, this.HeartTerminatorC)
    },
    MournsC () {
      this.AddWDJ.Mourns = 5 * this.MournsC
    },
    BreadbasketC () {
      this.AddHI.Breadbasket = 35 * this.BreadbasketC
    },
    OSC () {
      this.AddWDJ.OS = 3 * this.OSC
    },
    TTMC () {
      this.AddAmpWd.TTM = 1 + (10 * Number(this.TTMC) / 100)
    },
    FullOfEnergyC () {
      this.AddAmpWd.FullOfEnergy = 1 + (1 * Number(this.FullOfEnergyC) / 100)
    },
    RangerC () {
      this.AddMD.Ranger = 1 + (2 * Number(this.RangerC) / 100)
    },
    RiflemanC () {
      this.AddWDJ.Rifleman = 10 * this.RiflemanC
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


