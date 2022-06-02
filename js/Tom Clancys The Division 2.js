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
})

const Checkbox = new Vue({
  data () {
    return {
      //突袭层数
      StrikersBattlegears: 0,
      //芳心终结者层数
      HeartTerminators: 0,
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
        StrikersBattlegear: false,
        TruePatriot: false,
        HeartTerminator: false,
        ScannerPulse: false,
        DemolitionistTacticalLink: false,
        SurvivalistTacticalLink: false,
        GoBlind: false,
        Light: false,
        Ranger: false,
        ToAbuse: false,
        Asystole: false
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
        StrikersBattlegear: Math.pow(1.005, 100),
        TruePatriot: 1.08,
        HeartTerminator: Math.pow(1.01, 100),
        ScannerPulse: 1.15,
        DemolitionistTacticalLink: 1.05,
        SurvivalistTacticalLink: 1.1,
        GoBlind: 1.2,
        Light: 1.2,
        Ranger: 1.12,
        ToAbuse: 1.2,
        Asystole: 1.15,
      },

      // 独立伤
      AmpWd: {
        FirewallStrikerShield: false,
        FirewallTacticalLink: false,
        TechnicianDismantling: false,
        TTM: false,
        FullOfEnergy: false,
      },
      AddAmpWd: {
        FirewallStrikerShield: 1.11,
        FirewallTacticalLink: 1.1,
        TechnicianDismantling: 1.12,
        TTM: 1.4,
        FullOfEnergy: 1.25,
      },
      HeadHunter: false  //猎头
    }
  },
  methods: {
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
      this.TWD.Vigilance = !this.WDJ.Vigilance
    },
    ChWicked () {
      this.TWD.Wicked = !this.WDJ.Wicked
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
})
const Calculation = new Vue({

  data () {
    return {
      FULLWDJ: 0,
      FULLTWD: 0,
      FULLHI:0,
      HSum: 0,
      ASum: 0,
      HSumB:0,
      ASumB:0,
      HSumH:0,
      ASumH:0,
      HSumHB:0,
      ASumHB:0,
      Sum:0
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
      this.FULLTWD = 0
      this.FULLWDJ = 0
      this.FULLHI = 0
      
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
          this.FULLHI = root.HSD + AddHIARR[i]
        }
      }
      this.Sum =  root.arms*(1 + (root.RedCore/100 + root.WeaponType/100 + this.FULLWDJ/100))*(1+(this.FULLTWD/100))

// 计算全部乘算伤害
      Object.keys(Checkbox.MD).forEach((item) => {
        MDARR.push(Checkbox.MD[item])
      })
      Object.keys(Checkbox.AddMD).forEach((item) => {
        AddMDARR.push(Checkbox.AddMD[item])
      })
      for (let i = 0; i < MDARR.length; i++) {
        if (MDARR[i] == true) {
          this.Sum = this.Sum*AddMDARR[i]
        }
      }
      // 计算护甲与生命伤害
          this.ASum = this.Sum*(1+(root.DTA/100))
          this.HSum = this.Sum*(1+(root.DTH/100))

      // 暴击伤害
          this.ASumB = this.Sum*(1+(root.CHD/100))*(1+(root.DTA/100))
          this.HSumB = this.Sum*(1+(root.CHD/100))*(1+(root.DTH/100))
      // 爆头伤害
          this.ASumH = this.Sum*(1+(root.HSD/100))*(1+(root.DTA/100))
          this.HSumH = this.Sum*(1+(root.HSD/100))*(1+(root.DTH/100))
      // 头部暴击
          this.ASumHB = this.Sum*(1+(root.CHD/100 + root.HSD/100))*(1+(root.DTA/100))
          this.HSumHB = this.Sum*(1+(root.CHD/100 + root.HSD/100))*(1+(root.DTH/100))
    },
  },
})
Calculation.$mount('#Calculation')
Checkbox.$mount('#Checkbox')
root.$mount('#root')
