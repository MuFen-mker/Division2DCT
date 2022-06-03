const root = new Vue({
  data () {
    return {
      arms: 0,
      RedCore: 0,
      WeaponType: 0,
      weaponM: 0,
      CHD: 0,
      DTA: 0,
      DTOC: 0,
      DTH: 0,
      HSD: 0,
    }
  },
})

const Checkbox = new Vue({
  data () {
    return {
      // 面包篮层数
      BreadbasketC: 0,
      // 乐天派层数
      OSC: 0,
      // 排山倒海层数
      TTMC: 0,
      // 充满干劲层数
      FullOfEnergyC: 0,
      // 游骑兵层数
      RangerC:0,
      // 步枪兵层数
      RiflemanC:0,
      // 专注
      AbsorbedC:0,
      // 威吓
      IntimidateC:0,
      //抹灭性破坏
      OFC:0,
      // 无人能挡的力量层数
      UnstoppableForceC:0,
      // 索耶的护膝层数
      SawyersKneepadsC:0,
      // 道奇层数
      DodgeCityHolsterC:0,
      //突袭层数
      StrikersBattlegearC: 0,
      //芳心终结者层数
      HeartTerminatorC: 0,

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
        Insanity: false
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
        Insanity: 18
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
        Gunslinger: false,
        OF: false,
        ShelterCover: false,
        Spark: false,
        SawyersKneepads: false,
        TipOfTheSpear: false,
        FutureInitiative: false,
        PCLast: false
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
        Gunslinger: 20,
        OF: 25,
        ShelterCover: 12,
        Spark: 15,
        SawyersKneepads: 30,
        TipOfTheSpear: 20,
        FutureInitiative: 25,
        PCLast: 30
      },

      // 乘算伤害
      MD: {
        Opportunistic: false,
        Versatile: false,
        VersatileRF: false,
        VersatileAR: false,
        GlassCannon: false,
        Intimidate: false,
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
      },
      AddMD: {
        Opportunistic: 1.1,
        Versatile: 1.35,
        VersatileRF: 1.35,
        VersatileAR: 1.1,
        GlassCannon: 1.5,
        Intimidate: 1.35,
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
      },

      // 独立伤
      AmpWd: {
        FirewallStrikerShield: false,
        FirewallTacticalLink: false,
        TechnicianDismantling: false,
        TTM: false,
        FullOfEnergy: false,
        AchillesPulse:false
      },
      AddAmpWd: {
        FirewallStrikerShield: 1.11,
        FirewallTacticalLink: 1.1,
        TechnicianDismantling: 1.12,
        TTM: 1.4,
        FullOfEnergy: 1.25,
        AchillesPulse:0.1
      },

      HeadHunter: false,  //猎头
      HeadHunterAdd: 12.5
    }
  },
  methods: {
    ChAchillesPulse(){
      this.AmpWd.AchillesPulse = !this.AmpWd.AchillesPulse
    },
    ChVersatileRF () {
      this.MD.VersatileRF = !this.MD.VersatileRF
    },
    ChVersatileAR () {
      this.MD.VersatileAR = !this.MD.VersatileAR
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
    ChGlassCannon () {
      this.MD.GlassCannon = !this.MD.GlassCannon
    },
    ChGunslinger () {
      this.TWD.Gunslinger = !this.TWD.Gunslinger
    },
    ChIntimidate () {
      this.MD.Intimidate = !this.MD.Intimidate
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
    ChUnstoppableForce () {
      this.TWD.UnstoppableForce = !this.WDJ.UnstoppableForce
    },
    ChVersatile () {
      this.MD.Versatile = !this.MD.Versatile
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
      this.AmpWd.TechnicianDismantling = !this.AmpWd.TechnicianDismantling
    }
  },
  computed: {
    BreadbasketSum () {
      return this.AddHI.Breadbasket = 35 * this.BreadbasketC
    },
    OSSum () {
      return this.AddWDJ.OS = 3 * this.OSC
    },
    TTMSum () {
      return this.AddAmpWd.TTM = 1 + (10 * Number(this.TTMC)/ 100)
    },
    FullOfEnergySum () {
      return this.AddAmpWd.FullOfEnergy = 1 + (1 * Number(this.FullOfEnergyC)/ 100)
    },
    RangerSum () {
      return this.AddMD.Ranger = 1 + (2 * Number(this.RangerC)/ 100)
    },
    RiflemanSum () {
      return this.AddWDJ.Rifleman = 10 * this.RiflemanC
    },
    AbsorbedSum () {
      return this.AddTWD.Absorbed = 5 * this.AbsorbedC
    },
    IntimidateSum () {
      return this.AddMD.Intimidate = 1 + (5 * Number(this.IntimidateC)/ 100)
    },
    OFSum () {
      return this.AddTWD.OF = 1 * this.OFC
    },
    UnstoppableForceSum () {
      return this.AddTWD.UnstoppableForce = 5 * this.UnstoppableForceC
    },
    SawyersKneepadsSum () {
      return this.AddTWD.SawyersKneepads = 3 * this.SawyersKneepadsC
    },
    DodgeCityHolsterSum () {
      return this.AddWDJ.DodgeCityHolster = 10 * this.DodgeCityHolsterC
    },
    StrikersBattlegearSum () {
      return this.AddMD.StrikersBattlegear = Math.pow(1.005, this.StrikersBattlegearC)
    },
    HeartTerminatorSum () {
      return this.AddMD.HeartTerminator = Math.pow(1.01, this.HeartTerminatorC)
    },
    AchillesPulseNum(){
      return this.AddAmpWd.AchillesPulse = 1 + Number(root.HSD)/100
    }
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

      HeadHunterDs: 0
    }
  },
  methods: {
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
      this.FULLHI = root.HSD
      this.HeadHunterDs = 0

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
      this.Sum = root.arms * (1 + (root.RedCore / 100 + root.WeaponType / 100 + root.weaponM / 100 + this.FULLWDJ / 100))

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
        this.HeadHunterDs = (root.arms * (1 + (root.RedCore / 100 + root.WeaponType / 100 + root.weaponM / 100 + this.FULLWDJ / 100)) * (1 + (this.FULLTWD / 100))) * Checkbox.HeadHunterAdd
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
      this.ASumHB = this.Sum * (1 + (root.CHD / 100 + root.HSD / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumHB = this.Sum * (1 + (root.CHD / 100 + root.HSD / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))

      //掩体头部暴击
      this.ASumHBOC = this.Sum * (1 + (root.CHD / 100 + root.HSD / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTA / 100)) * (1 + (this.FULLTWD / 100))
      this.HSumHBOC = this.Sum * (1 + (root.CHD / 100 + root.HSD / 100)) * (1 + (root.DTOC / 100)) * (1 + (root.DTH / 100)) * (1 + (this.FULLTWD / 100))


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
          this.ASumH = this.HSumH * AddAmpWdARR[i]

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
    },
  },
})
Calculation.$mount('#Calculation')
Checkbox.$mount('#Checkbox')
root.$mount('#root')
