const root = new Vue({
  data () {
    return {
      arms: '',
      RedCore: '',
      WeaponType: '',

    }
  }
})

const Checkbox = new Vue({
  data () {
    return {
      // 武器伤
      WDJ: {
        Chameleon: false,
        DodgeCityHolster: false,
        Boomerang: false,
        FightHandToHandWith: false,
        Insane: false,
        PCFirst: false,
        OS: false,
        FistToMeat: false,
        Rifleman: false,
        Insanity: false
      },
      AddWDJ: {
        Chameleon: '',
        DodgeCityHolster: '',
        Boomerang: '',
        FightHandToHandWith: '',
        Insane: '',
        PCFirst: '',
        OS: '',
        FistToMeat: '',
        Rifleman: '',
        Insanity: ''
      },

      //爆头伤
      HI: {
        SharpshooterTacticalLink: false,
        Breadbasket: false,
        Naked: false
      },
      AddHI: {
        SharpshooterTacticalLink: '',
        Breadbasket: '',
        Naked: ''
      },

      // 总武器伤
      TWD: {
        Companion: false,
        Composure: false,
        Concussion: false,
        UnstoppableForce: false,
        Vigilance: false,
        Wicked: false,
        FeelTheSame: false,
        Absorbed: false,
        Gunslinger: false,
        OF: false,
        ShelterCover: false,
        Spark: false,
        SawyersKneepads: false,
        TipOfTheSpear: false,
        FutureInitiative:false,
        PCLast:false
      },
      AddTWD: {
        Companion: '',
        Composure: '',
        Concussion: '',
        UnstoppableForce: '',
        Vigilance: '',
        Wicked: '',
        FeelTheSame: '',
        Absorbed: '',
        Gunslinger: '',
        OF: '',
        ShelterCover: '',
        Spark: '',
        SawyersKneepads: '',
        TipOfTheSpear: '',
        FutureInitiative:'',
        PCLast:''
      },

      // 乘算伤害
      MD:{
        Opportunistic:false,
        Versatile:false,
        GlassCannon:false,
        Intimidate:false,
        HeadHunter:false,
        Scout:false,
        BigHorn:false,
        LadyDeath:false,
        Merciless:false,
        Nemesis:false,
        Scorpio:false,
        AcesEights:false,
        OngoingDirective:false,
        StrikersBattlegear:false,
        TruePatriot:false,
        HeartTerminator:false,
        ScannerPulse:false,
        AchillesPulse:false,
        FirewallStrikerShield:false,
        DemolitionistTacticalLink:false,
        FirewallTacticalLink:false,
        SurvivalistTacticalLink:false,
        GoBlind:false,
        Light:false,
        TTM:false,
        FullOfEnergy:false,
        Ranger:false,
        ToAbuse:false,
        Asystole:false
      },
      AddMD:{
        Opportunistic:'',
        Versatile:'',
        GlassCannon:'',
        Intimidate:'',
        HeadHunter:'',
        Scout:'',
        BigHorn:'',
        LadyDeath:'',
        Merciless:'',
        Nemesis:'',
        Scorpio:'',
        AcesEights:'',
        OngoingDirective:'',
        StrikersBattlegear:'',
        TruePatriot:'',
        HeartTerminator:'',
        ScannerPulse:'',
        AchillesPulse:'',
        FirewallStrikerShield:'',
        DemolitionistTacticalLink:'',
        FirewallTacticalLink:'',
        SurvivalistTacticalLink:'',
        GoBlind:'',
        Light:'',
        TTM:'',
        FullOfEnergy:'',
        Ranger:'',
        ToAbuse:'',
        Asystole:'',
      },
    }
  },
  methods: {
    ChBoomerang(){
      this.WDJ.Boomerang = !this.WDJ.Boomerang
    },
    ChBreadbasket(){
      this.HI.Breadbasket = !this.HI.Breadbasket
    },
    ChFightHandToHandWith(){
      this.WDJ.FightHandToHandWith = !this.WDJ.FightHandToHandWith
    },
    ChGoBlind(){
      this.MD.GoBlind = !this.MD.GoBlind
    },
    ChInsane(){
      this.WDJ.Insane = !this.WDJ.Insane
    },
    ChLight(){
      this.MD.Light = !this.MD.Light
    },
    ChPCFirst(){
      this.WDJ.PCFirst = !this.WDJ.PCFirst
    },
    ChPCLast(){
      this.TWD.PCLast = !this.TWD.PCLast
    },
    ChNaked(){
      this.HI.Naked = !this.HI.Naked
    },
    ChOS(){
      this.WDJ.OS = !this.WDJ.OS
    },
    ChTTM(){
      this.MD.TTM = !this.MD.TTM
    },
    ChFistToMeat(){
      this.WDJ.FistToMeat = !this.WDJ.FistToMeat
    },
    ChFullOfEnergy(){
      this.MD.FullOfEnergy = !this.MD.FullOfEnergy
    },
    ChRanger(){
      this.MD.Ranger = !this.MD.Ranger
    },
    ChRifleman(){
      this.WDJ.Rifleman = !this.WDJ.Rifleman
    },
    ChToAbuse(){
      this.MD.ToAbuse = !this.MD.ToAbuse
    },
    ChInsanity(){
      this.WDJ.Insanity = !this.WDJ.Insanity
    },
    ChAsystole(){
      this.MD.Asystole = !this.MD.Asystole
    },
    ChFeelTheSame(){
      this.TWD.FeelTheSame = !this.TWD.FeelTheSame
    },
    ChAbsorbed(){
      this.TWD.Absorbed = !this.TWD.Absorbed
    },
    ChGlassCannon(){
      this.MD.GlassCannon = !this.MD.GlassCannon
    },
    ChGunslinger(){
      this.TWD.Gunslinger = !this.TWD.Gunslinger
    },
    ChIntimidate(){
      this.MD.Intimidate = !this.MD.Intimidate
    },
    ChOF(){
      this.TWD.OF = !this.TWD.OF
    },
    ChShelterCover(){
      this.TWD.ShelterCover = !this.TWD.ShelterCover
    },
    ChSpark(){
      this.TWD.Spark = !this.TWD.Spark
    },
    ChHeadHunter(){
      this.MD.HeadHunter = !this.MD.HeadHunter
    },
    ChScout(){
      this.MD.Scout = !this.MD.Scout
    },
    ChCompanion(){
      this.TWD.Companion = !this.TWD.Companion
    },
    ChComposure(){
      this.TWD.Composure = !this.TWD.Composure
    },
    ChConcussion(){
      this.TWD.Concussion = !this.TWD.Concussion
    },
    ChOpportunistic(){
      this.MD.Opportunistic = !this.MD.Opportunistic
    },
    ChUnstoppableForce(){
      this.TWD.UnstoppableForce = !this.WDJ.UnstoppableForce
    },
    ChVersatile(){
      this.MD.Versatile = !this.MD.Versatile
    },
    ChVigilance(){
      this.TWD.Vigilance = !this.WDJ.Vigilance
    },
    ChWicked(){
      this.TWD.Wicked = !this.WDJ.Wicked
    },
    ChSawyersKneepads(){
      this.TWD.SawyersKneepads = !this.TWD.SawyersKneepads
    },
    ChDodgeCityHolster(){
      this.WDJ.DodgeCityHolster = !this.WDJ.DodgeCityHolster
    },
    ChBigHorn(){
      this.MD.BigHorn = !this.MD.BigHorn
    },
    ChChameleon(){
      this.WDJ.Chameleon = !this.WDJ.Chameleon
    },
    ChLadyDeath(){
      this.MD.LadyDeath = !this.MD.LadyDeath
    },
    ChMerciless(){
      this.MD.Merciless = !this.MD.Merciless
    },
    ChNemesis(){
      this.MD.Nemesis = !this.MD.Nemesis
    },
    ChScorpio(){
      this.MD.Scorpio = !this.MD.Scorpio
    },
    ChAcesEights(){
      this.MD.AcesEights = !this.MD.AcesEights
    },
    ChOngoingDirective(){
      this.MD.OngoingDirective = !this.MD.OngoingDirective
    },
    ChStrikersBattlegear(){
      this.MD.StrikersBattlegear = !this.MD.StrikersBattlegear
    },
    ChTipOfTheSpear(){
      this.TWD.TipOfTheSpear = !this.TWD.TipOfTheSpear
    },
    ChTruePatriot(){
      this.MD.TruePatriot = !this.MD.TruePatriot
    },
    ChFutureInitiative(){
      this.TWD.FutureInitiative = !this.TWD.FutureInitiative
    },
    ChHeartTerminator(){
      this.MD.HeartTerminator = !this.MD.HeartTerminator
    },
    ChScannerPulse(){
      this.MD.ScannerPulse = !this.MD.ScannerPulse
    },
    ChAchillesPulse(){
      this.MD.AchillesPulse = !this.MD.AchillesPulse
    },
    ChFirewallStrikerShield(){
      this.MD.FirewallStrikerShield = !this.MD.FirewallStrikerShield
    },
    ChDemolitionistTacticalLink(){
      this.MD.DemolitionistTacticalLink = !this.MD.DemolitionistTacticalLink
    },
    ChFirewallTacticalLink(){
      this.MD.FirewallTacticalLink = !this.MD.FirewallTacticalLink
    },
    ChSharpshooterTacticalLink(){
      this.HI.SharpshooterTacticalLink = !this.HI.SharpshooterTacticalLink
    },
    ChSurvivalistTacticalLink(){
      this.MD.SurvivalistTacticalLink = !this.MD.SurvivalistTacticalLink
    }
    }
})

Checkbox.$mount('#Checkbox')
root.$mount('#root')