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
    Ch5
  },
})
WeaponTalent.$mount('#WeaponTalent')
root.$mount('#root')