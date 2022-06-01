const root = new Vue({
  data(){
      return{
        arms:'',
        RedCore:'',
        WeaponType:'',

      }
  }
})

const WeaponTalent = new Vue({
  data(){
      return{
        Boomerang:false,
        Breadbasket:false,
        FightHandToHandWith:false,
        GoBlind:false,
        Insane:false,
        Light:false,
        PCFirst:false,
        PCLast:false,
        Naked:false,
        OS:false,
        TTM:false,
        FistToMeat:false,
        FullOfEnergy:false,
        Ranger:false,
        Rifleman:false,
        ToAbuse:false,
        Insanity:false,
        Asystole:false
      }
  },
  methods: {
    ChBoomerang(){
      this.Boomerang = !this.Boomerang
    },
    ChBreadbasket(){
      this.Breadbasket = !this.Breadbasket
    },
    ChFightHandToHandWith(){
      this.FightHandToHandWith = !this.FightHandToHandWith
    },
    ChGoBlind(){
      this.GoBlind = !this.GoBlind
    },
    ChInsane(){
      this.Insane = !this.Insane
    },
    ChLight(){
      this.Light = !this.Light
    },
    ChPCFirst(){
      this.PCFirst = !this.PCFirst
    },
    ChPCLast(){
      this.PCLast = !this.PCLast
    },
    ChNaked(){
      this.Naked = !this.Naked
    },
    ChOS(){
      this.OS = !this.OS
    },
    ChTTM(){
      this.TTM = !this.TTM
    },
    ChFistToMeat(){
      this.FistToMeat = !this.FistToMeat
    },
    ChFullOfEnergy(){
      this.FullOfEnergy = !this.FullOfEnergy
    },
    ChRanger(){
      this.Ranger = !this.Ranger
    },
    ChRifleman(){
      this.Rifleman = !this.Rifleman
    },
    ChToAbuse(){
      this.ToAbuse = !this.ToAbuse
    },
    ChInsanity(){
      this.Insane = !this.Insane
    },
    ChAsystole(){
      this.Asystole = !this.Asystole
    }
  },
})
const BreastplateTalent = new Vue({
    data(){
        return{
          FeelTheSame:'',
          Absorbed:'',
          GlassCannon:'',
          Gunslinger:'',
          Intimidate:'',
          OF:'',
          ShelterCover:'',
          Spark:'',
          HeadHunter:'',
          Scout:''
        }
    },
    methods:{
      ChFeelTheSame(){
        this.FeelTheSame = !this.FeelTheSame
      },
      ChAbsorbed(){
        this.Absorbed = !this.Absorbed
      },
      ChGlassCannon(){
        this.GlassCannon = !this.GlassCannon
      },
      ChGunslinger(){
        this.Gunslinger = !this.Gunslinger
      },
      ChIntimidate(){
        this.Intimidate = !this.Intimidate
      },
      ChOF(){
        this.OF = !this.OF
      },
      ChShelterCover(){
        this.ShelterCover = !this.ShelterCover
      },
      ChSpark(){
        this.Spark = !this.Spark
      },
      ChHeadHunter(){
        this.HeadHunter = !this.HeadHunter
      },
      ChScout(){
        this.Scout = !this.Scout
      }
    }
})
BreastplateTalent.$mount('#BreastplateTalent')
WeaponTalent.$mount('#WeaponTalent')
root.$mount('#root')