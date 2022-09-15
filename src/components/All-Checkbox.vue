<template>
  <div id="Checkbox" class="Checkbox">
    <div id="TalentType" class="TalentType">
      <a :class="WQT" @click="WQTF">武器天赋</a
      ><a :class="XJT" @click="XJTF">胸甲天赋</a
      ><a :class="BBT" @click="BBTF">背包天赋</a
      ><a :class="QTT" @click="QTTF">奇特天赋</a
      ><a :class="ZBZ" @click="ZBZF">装备组</a
      ><a :class="JNS" @click="JNSF">技能增伤</a
      ><a :class="ZCS" @click="ZCSF">专长加成</a>
    </div>
    <div v-show="WQT.TalentTypeA" class="firstbox">
      <!-- 武器天赋 -->
      <div>
        <input @click="ChBoomerang" type="checkbox" />
        <span>回力镖</span>
      </div>
      <div>
        <input @click="ChBreadbasket" type="checkbox" />
        <span>面包篮</span>
        <input
          id="checkboxinput"
          v-show="HI.Breadbasket"
          v-model="BreadbasketC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChFightHandToHandWith" type="checkbox" />
        <span>短兵相接</span>
      </div>
      <div>
        <input @click="ChGoBlind" type="checkbox" />
        <span>失明</span>
      </div>
      <div>
        <input @click="ChLight" type="checkbox" />
        <span>点燃</span>
      </div>
      <div>
        <input @click="ChPCFirst" type="checkbox" />
        <span>精密计算:前半段</span>
      </div>
      <div>
        <input @click="ChPCLast" type="checkbox" />
        <span>精密计算:后半段</span>
      </div>
      <div>
        <input @click="ChNaked" type="checkbox" />
        <span>赤身裸体</span>
      </div>
      <div>
        <input @click="ChOS" type="checkbox" />
        <span>乐天派</span>
        <input id="checkboxinput" v-show="WDJ.OS" v-model="OSC" type="text" />
      </div>
      <div>
        <input @click="ChTTM" type="checkbox" />
        <span>排山倒海</span>
        <input
          id="checkboxinput"
          v-show="AmpWd.TTM"
          v-model="TTMC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChFistToMeat" type="checkbox" />
        <span>拳拳到肉</span>
      </div>
      <div>
        <input @click="ChFullOfEnergy" type="checkbox" />
        <span>充满干劲</span>
        <input
          id="checkboxinput"
          v-show="AmpWd.FullOfEnergy"
          v-model="FullOfEnergyC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChRanger" type="checkbox" />
        <span>游骑兵</span>
        <input
          id="checkboxinput"
          v-show="MD.Ranger"
          v-model="RangerC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChRifleman" type="checkbox" />
        <span>步枪兵</span>
        <input
          id="checkboxinput"
          v-show="WDJ.Rifleman"
          v-model="RiflemanC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChToAbuse" type="checkbox" />
        <span>虐待狂</span>
      </div>
      <div>
        <input @click="ChInsanity" type="checkbox" />
        <span>精神错乱</span>
      </div>
      <div>
        <input @click="ChAsystole" type="checkbox" />
        <span>停搏</span>
      </div>
      <div>
        <input @click="ChInSync" type="checkbox" />
        <span>同步伤害(最大增益)</span>
      </div>

      <h2>具名完美天赋</h2>

      <div>
        <input @click="ChPBoomerang" type="checkbox" />
        <span>完美回力镖</span>
      </div>
      <div>
        <input @click="ChPBreadbasket" type="checkbox" />
        <span>完美面包篮</span>
        <input
          id="checkboxinput"
          v-show="HI.PBreadbasket"
          v-model="PBreadbasketC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChPLight" type="checkbox" />
        <span>完美点燃</span>
      </div>
      <div>
        <input @click="ChPPCFirst" type="checkbox" />
        <span>完美精密计算:前半段</span>
      </div>
      <div>
        <input @click="ChPPCLast" type="checkbox" />
        <span>完美精密计算:后半段</span>
      </div>
      <div>
        <input @click="ChPFightHandToHandWith" type="checkbox" />
        <span>完美短兵相接</span>
      </div>
      <div>
        <input @click="ChPOS" type="checkbox" />
        <span>完美乐天派</span>
        <input id="checkboxinput" v-show="WDJ.POS" v-model="POSC" type="text" />
      </div>
      <div>
        <input @click="ChPInSync" type="checkbox" />
        <span>完美同步伤害(最大增益)</span>
      </div>
      <div>
        <input @click="ChPAsystole" type="checkbox" />
        <span>完美停搏</span>
      </div>
      <div>
        <input @click="ChPInsanity" type="checkbox" />
        <span>完美精神错乱</span>
      </div>
      <div>
        <input @click="ChPToAbuse" type="checkbox" />
        <span>完美虐待狂</span>
      </div>
      <div>
        <input @click="ChPTTM" type="checkbox" />
        <span>完美排山倒海</span>
        <input
          id="checkboxinput"
          v-show="AmpWd.PTTM"
          v-model="PTTMC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChPGoBlind" type="checkbox" />
        <span>完美失明</span>
      </div>
      <div>
        <input @click="ChPRifleman" type="checkbox" />
        <span>完美步枪兵</span>
        <input
          id="checkboxinput"
          v-show="WDJ.PRifleman"
          v-model="PRiflemanC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChPFullOfEnergy" type="checkbox" />
        <span>完美充满干劲</span>
        <input
          id="checkboxinput"
          v-show="AmpWd.PFullOfEnergy"
          v-model="PFullOfEnergyC"
          type="text"
        />
      </div>
    </div>
    <div v-show="XJT.TalentTypeA" class="secondbox">
      <!-- 胸甲天赋 -->
      <div>
        <input @click="ChFeelTheSame" type="checkbox" />
        <span>感同深受(队友携带且六电)</span>
      </div>
      <div>
        <input @click="ChFeelTheSameY" type="checkbox" />
        <span>感同深受(自身携带且六电)</span>
      </div>
      <div>
        <input @click="ChAbsorbed" type="checkbox" />
        <span>专注</span>
        <input
          id="checkboxinput"
          v-show="TWD.Absorbed"
          v-model="AbsorbedC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChGlassCannon" type="checkbox" />
        <span>玻璃大炮</span>
      </div>
      <div>
        <input @click="ChGunslinger" type="checkbox" />
        <span>枪神</span>
      </div>
      <div>
        <input @click="ChIntimidate" type="checkbox" />
        <span>威吓</span>
        <input
          id="checkboxinput"
          v-show="AmpWd.Intimidate"
          v-model="IntimidateC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChOF" type="checkbox" />
        <span>抹灭性破坏</span>
        <input id="checkboxinput" v-show="TWD.OF" v-model="OFC" type="text" />
      </div>
      <div>
        <input @click="ChShelterCover" type="checkbox" />
        <span>掩体掩护</span>
      </div>
      <div>
        <input @click="ChSpark" type="checkbox" />
        <span>火花</span>
      </div>
      <div>
        <input @click="ChHeadHunter" type="checkbox" />
        <span>猎头者(MAX)</span>
      </div>
      <div>
        <input @click="ChScout" type="checkbox" />
        <span>探子</span>
      </div>

      <h2>具名完美天赋</h2>

      <div>
        <input @click="ChPAbsorbed" type="checkbox" />
        <span>完美专注</span>
        <input
          id="checkboxinput"
          v-show="TWD.PAbsorbed"
          v-model="PAbsorbedC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChPGlassCannon" type="checkbox" />
        <span>完美玻璃大炮</span>
      </div>
      <div>
        <input @click="ChPScout" type="checkbox" />
        <span>完美探子</span>
      </div>
      <div>
        <input @click="ChPIntimidate" type="checkbox" />
        <span>完美威吓</span>
        <input
          id="checkboxinput"
          v-show="AmpWd.PIntimidate"
          v-model="PIntimidateC"
          type="text"
        />
      </div>
    </div>
    <div v-show="BBT.TalentTypeA" class="thirdbox">
      <!-- 背包天赋 -->
      <div>
        <input @click="ChCompanion" type="checkbox" />
        <span>同伴</span>
      </div>
      <div>
        <input @click="ChComposure" type="checkbox" />
        <span>泰然自若</span>
      </div>
      <div>
        <input @click="ChConcussion" type="checkbox" />
        <span>震荡</span>
      </div>
      <div>
        <input @click="ChConcussionKill" type="checkbox" />
        <span>震荡(获得击杀后)</span>
      </div>
      <div>
        <input @click="ChOpportunistic" type="checkbox" />
        <span>投机取巧</span>
      </div>
      <div>
        <input @click="ChUnstoppableForce" type="checkbox" />
        <span>无人能挡的力量</span>
        <input
          id="checkboxinput"
          v-show="TWD.UnstoppableForce"
          v-model="UnstoppableForceC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChVersatile" type="checkbox" />
        <span>多才多艺(冲锋枪与霰弹枪)</span>
      </div>
      <div>
        <input @click="ChVersatileRF" type="checkbox" />
        <span>多才多艺(狙击与步枪)</span>
      </div>
      <div>
        <input @click="ChVersatileAR" type="checkbox" />
        <span>多才多艺(突击步枪与机枪)</span>
      </div>
      <div>
        <input @click="ChVigilance" type="checkbox" />
        <span>警戒</span>
      </div>
      <div>
        <input @click="ChWicked" type="checkbox" />
        <span>恶人</span>
      </div>

      <h2>具名完美天赋</h2>

      <div>
        <input @click="ChPOpportunistic" type="checkbox" />
        <span>完美投机取巧</span>
      </div>
    </div>
    <div v-show="QTT.TalentTypeA" class="fourthbox">
      <!-- 奇特天赋 -->
      <div>
        <input @click="ChSawyersKneepads" type="checkbox" />
        <span>索耶的护膝</span>
        <input
          id="checkboxinput"
          v-show="TWD.SawyersKneepads"
          v-model="SawyersKneepadsC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChDodgeCityHolster" type="checkbox" />
        <span>道奇城枪手枪套</span>
        <input
          id="checkboxinput"
          v-show="WDJ.DodgeCityHolster"
          v-model="DodgeCityHolsterC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChBigHorn" type="checkbox" />
        <span>大角突击步枪(半自动模式)</span>
      </div>
      <div>
        <input @click="ChChameleon" type="checkbox" />
        <span>变色龙(躯体BUFF)</span>
      </div>
      <div>
        <input @click="ChLadyDeath" type="checkbox" />
        <span>死亡女神</span>
      </div>
      <div>
        <input @click="ChMerciless" type="checkbox" />
        <span>无情/冷酷无情</span>
      </div>
      <div>
        <input @click="ChScorpio" type="checkbox" />
        <span>天蝎座</span>
      </div>
      <div>
        <input @click="ChMourn" type="checkbox" />
        <span>追悼(长期BUFF)</span>
        <input
          id="checkboxinput"
          v-show="WDJ.Mourn"
          v-model="MournC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChMourns" type="checkbox" />
        <span>追悼(短期BUFF,输入红核数)</span>
        <input
          id="checkboxinput"
          v-show="WDJ.Mourns"
          v-model="MournsC"
          type="text"
        />
      </div>
    </div>
    <div v-show="ZBZ.TalentTypeA" class="fifthbox">
      <!-- 装备组 -->
      <div>
        <input @click="ChAcesEights" type="checkbox" />
        <span>A、8两对</span>
      </div>
      <div>
        <input @click="ChOngoingDirective" type="checkbox" />
        <span>政令进行时</span>
      </div>
      <div>
        <input @click="ChStrikersBattlegear" type="checkbox" />
        <span>突袭者战斗装备</span>
        <input
          id="checkboxinput"
          v-show="MD.StrikersBattlegear"
          v-model="StrikersBattlegearC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChTipOfTheSpear" type="checkbox" />
        <span>先锋部队</span>
      </div>
      <div>
        <input @click="ChTruePatriot" type="checkbox" />
        <span>真实爱国者</span>
      </div>
      <div>
        <input @click="ChFutureInitiative" type="checkbox" />
        <span>未来主动权(带胸甲)</span>
      </div>
      <div>
        <input @click="ChHeartTerminator" type="checkbox" />
        <span>芳心终结者</span>
        <input
          id="checkboxinput"
          v-show="MD.HeartTerminator"
          v-model="HeartTerminatorC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChHunterRage" type="checkbox" />
        <span>猎人怒火(层数)</span>
        <input
          id="checkboxinput"
          v-show="MD.HunterRage"
          v-model="HunterRageC"
          type="text"
        />
      </div>
      <div>
        <input @click="ChHunterRages" type="checkbox" />
        <span>猎人怒火(15米内)</span>
      </div>
    </div>
    <div v-show="JNS.TalentTypeA" class="sixthbox">
      <!-- 技能增伤 -->
      <div>
        <input @click="ChScannerPulse" type="checkbox" />
        <span>脉冲--扫描/遥控</span>
      </div>
      <div>
        <input @click="ChAchillesPulse" type="checkbox" />
        <span>脉冲--阿基里斯</span>
      </div>
      <div>
        <input @click="ChFirewallStrikerShield" type="checkbox" />
        <span>突袭者护盾(11%)</span>
      </div>
    </div>
    <div v-show="ZCS.TalentTypeA" class="seventhbox">
      <!-- 专长加成 -->
      <div>
        <input @click="ChDemolitionistTacticalLink" type="checkbox" />
        <span>爆破专家--战术链接</span>
      </div>
      <div>
        <input @click="ChFirewallTacticalLink" type="checkbox" />
        <span>烈焰之墙--战术链接</span>
      </div>
      <div>
        <input @click="ChSharpshooterTacticalLink" type="checkbox" />
        <span>精准射手--战术链接</span>
      </div>
      <div>
        <input @click="ChSurvivalistTacticalLink" type="checkbox" />
        <span>生存专家--战术链接</span>
      </div>
      <div>
        <input @click="ChTechnicianDismantling" type="checkbox" />
        <span>技师--拆解</span>
      </div>
    </div>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'

export default {
  data() {
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
      StrikersBattlegearC: 200,
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
        InSync: false,
        PInSync: false,
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
        InSync: 30,
        PInSync: 40,
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
        HunterRage: false,
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
        StrikersBattlegear: 2,
        HeartTerminator: 2,
        HunterRages: 1.2,
        HunterRage: Math.pow(1.05, 5),
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
        PIntimidate: false,
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
        PIntimidate: Math.pow(1.05, 8),
      },
      // 技师拆解
      TechnicianDismantling: false,
      TechnicianDismantlingAdd: 1.12,

      HeadHunter: false, //猎头
      HeadHunterAdd: 12.5,

      // 天赋选中切换
      WQT: { TalentTypeA: true },
      XJT: { TalentTypeA: false },
      BBT: { TalentTypeA: false },
      QTT: { TalentTypeA: false },
      ZBZ: { TalentTypeA: false },
      JNS: { TalentTypeA: false },
      ZCS: { TalentTypeA: false },
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

    ChHunterRages() {
      this.MD.HunterRages = !this.MD.HunterRages
    },
    ChHunterRage() {
      this.MD.HunterRage = !this.MD.HunterRage
    },
    ChInSync() {
      this.WDJ.InSync = !this.WDJ.InSync
    },
    ChPInSync() {
      this.WDJ.PInSync = !this.WDJ.PInSync
    },
    ChMourns() {
      this.WDJ.Mourns = !this.WDJ.Mourns
    },
    ChMourn() {
      this.WDJ.Mourn = !this.WDJ.Mourn
    },
    ChAchillesPulse() {
      this.AmpWd.AchillesPulse = !this.AmpWd.AchillesPulse
    },
    ChVersatile() {
      this.AmpWd.Versatile = !this.AmpWd.Versatile
    },
    ChVersatileRF() {
      this.AmpWd.VersatileRF = !this.AmpWd.VersatileRF
    },
    ChVersatileAR() {
      this.AmpWd.VersatileAR = !this.AmpWd.VersatileAR
    },
    ChFeelTheSameY() {
      this.TWD.FeelTheSameY = !this.TWD.FeelTheSameY
    },
    ChConcussionKill() {
      this.TWD.ConcussionKill = !this.TWD.ConcussionKill
    },
    ChBoomerang() {
      this.WDJ.Boomerang = !this.WDJ.Boomerang
    },
    ChPBoomerang() {
      this.WDJ.PBoomerang = !this.WDJ.PBoomerang
    },
    ChBreadbasket() {
      this.HI.Breadbasket = !this.HI.Breadbasket
    },
    ChPBreadbasket() {
      this.HI.PBreadbasket = !this.HI.PBreadbasket
    },
    ChFightHandToHandWith() {
      this.WDJ.FightHandToHandWith = !this.WDJ.FightHandToHandWith
    },
    ChPFightHandToHandWith() {
      this.WDJ.PFightHandToHandWith = !this.WDJ.PFightHandToHandWith
    },
    ChGoBlind() {
      this.MD.GoBlind = !this.MD.GoBlind
    },
    ChPGoBlind() {
      this.MD.PGoBlind = !this.MD.PGoBlind
    },
    ChInsane() {
      this.WDJ.Insane = !this.WDJ.Insane
    },
    ChLight() {
      this.MD.Light = !this.MD.Light
    },
    ChPLight() {
      this.MD.PLight = !this.MD.PLight
    },
    ChPCFirst() {
      this.WDJ.PCFirst = !this.WDJ.PCFirst
    },
    ChPPCFirst() {
      this.WDJ.PPCFirst = !this.WDJ.PPCFirst
    },
    ChPCLast() {
      this.TWD.PCLast = !this.TWD.PCLast
    },
    ChPPCLast() {
      this.TWD.PPCLast = !this.TWD.PPCLast
    },
    ChNaked() {
      this.HI.Naked = !this.HI.Naked
    },
    ChOS() {
      this.WDJ.OS = !this.WDJ.OS
    },
    ChPOS() {
      this.WDJ.POS = !this.WDJ.POS
    },
    ChTTM() {
      this.AmpWd.TTM = !this.AmpWd.TTM
    },
    ChPTTM() {
      this.AmpWd.PTTM = !this.AmpWd.PTTM
    },
    ChFistToMeat() {
      this.WDJ.FistToMeat = !this.WDJ.FistToMeat
    },
    ChFullOfEnergy() {
      this.AmpWd.FullOfEnergy = !this.AmpWd.FullOfEnergy
    },
    ChPFullOfEnergy() {
      this.AmpWd.PFullOfEnergy = !this.AmpWd.PFullOfEnergy
    },
    ChRanger() {
      this.MD.Ranger = !this.MD.Ranger
    },
    ChRifleman() {
      this.WDJ.Rifleman = !this.WDJ.Rifleman
    },
    ChPRifleman() {
      this.WDJ.PRifleman = !this.WDJ.PRifleman
    },
    ChToAbuse() {
      this.MD.ToAbuse = !this.MD.ToAbuse
    },
    ChPToAbuse() {
      this.MD.PToAbuse = !this.MD.PToAbuse
    },
    ChInsanity() {
      this.WDJ.Insanity = !this.WDJ.Insanity
    },
    ChPInsanity() {
      this.WDJ.PInsanity = !this.WDJ.PInsanity
    },
    ChAsystole() {
      this.MD.Asystole = !this.MD.Asystole
    },
    ChPAsystole() {
      this.MD.PAsystole = !this.MD.PAsystole
    },
    ChFeelTheSame() {
      this.TWD.FeelTheSame = !this.TWD.FeelTheSame
    },
    ChAbsorbed() {
      this.TWD.Absorbed = !this.TWD.Absorbed
    },
    ChPAbsorbed() {
      this.TWD.PAbsorbed = !this.TWD.PAbsorbed
    },
    ChGlassCannon() {
      this.MD.GlassCannon = !this.MD.GlassCannon
    },
    ChPGlassCannon() {
      this.MD.PGlassCannon = !this.MD.PGlassCannon
    },
    ChGunslinger() {
      this.TWD.Gunslinger = !this.TWD.Gunslinger
    },
    ChIntimidate() {
      this.AmpWd.Intimidate = !this.AmpWd.Intimidate
    },
    ChPIntimidate() {
      this.AmpWd.PIntimidate = !this.AmpWd.PIntimidate
    },
    ChOF() {
      this.TWD.OF = !this.TWD.OF
    },
    ChShelterCover() {
      this.TWD.ShelterCover = !this.TWD.ShelterCover
    },
    ChSpark() {
      this.TWD.Spark = !this.TWD.Spark
    },
    ChHeadHunter() {
      this.HeadHunter = !this.HeadHunter
    },
    ChScout() {
      this.MD.Scout = !this.MD.Scout
    },
    ChPScout() {
      this.MD.PScout = !this.MD.PScout
    },
    ChCompanion() {
      this.TWD.Companion = !this.TWD.Companion
    },
    ChComposure() {
      this.TWD.Composure = !this.TWD.Composure
    },
    ChConcussion() {
      this.TWD.Concussion = !this.TWD.Concussion
    },
    ChOpportunistic() {
      this.MD.Opportunistic = !this.MD.Opportunistic
    },
    ChPOpportunistic() {
      this.MD.POpportunistic = !this.MD.POpportunistic
    },
    ChUnstoppableForce() {
      this.TWD.UnstoppableForce = !this.WDJ.UnstoppableForce
    },
    ChVigilance() {
      this.TWD.Vigilance = !this.TWD.Vigilance
    },
    ChWicked() {
      this.TWD.Wicked = !this.TWD.Wicked
    },
    ChSawyersKneepads() {
      this.TWD.SawyersKneepads = !this.TWD.SawyersKneepads
    },
    ChDodgeCityHolster() {
      this.WDJ.DodgeCityHolster = !this.WDJ.DodgeCityHolster
    },
    ChBigHorn() {
      this.MD.BigHorn = !this.MD.BigHorn
    },
    ChChameleon() {
      this.WDJ.Chameleon = !this.WDJ.Chameleon
    },
    ChLadyDeath() {
      this.MD.LadyDeath = !this.MD.LadyDeath
    },
    ChMerciless() {
      this.MD.Merciless = !this.MD.Merciless
    },
    ChScorpio() {
      this.MD.Scorpio = !this.MD.Scorpio
    },
    ChAcesEights() {
      this.MD.AcesEights = !this.MD.AcesEights
    },
    ChOngoingDirective() {
      this.MD.OngoingDirective = !this.MD.OngoingDirective
    },
    ChStrikersBattlegear() {
      this.MD.StrikersBattlegear = !this.MD.StrikersBattlegear
    },
    ChTipOfTheSpear() {
      this.TWD.TipOfTheSpear = !this.TWD.TipOfTheSpear
    },
    ChTruePatriot() {
      this.MD.TruePatriot = !this.MD.TruePatriot
    },
    ChFutureInitiative() {
      this.TWD.FutureInitiative = !this.TWD.FutureInitiative
    },
    ChHeartTerminator() {
      this.MD.HeartTerminator = !this.MD.HeartTerminator
    },
    ChScannerPulse() {
      this.MD.ScannerPulse = !this.MD.ScannerPulse
    },
    ChFirewallStrikerShield() {
      this.AmpWd.FirewallStrikerShield = !this.AmpWd.FirewallStrikerShield
    },
    ChDemolitionistTacticalLink() {
      this.MD.DemolitionistTacticalLink = !this.MD.DemolitionistTacticalLink
    },
    ChFirewallTacticalLink() {
      this.AmpWd.FirewallTacticalLink = !this.AmpWd.FirewallTacticalLink
    },
    ChSharpshooterTacticalLink() {
      this.HI.SharpshooterTacticalLink = !this.HI.SharpshooterTacticalLink
    },
    ChSurvivalistTacticalLink() {
      this.MD.SurvivalistTacticalLink = !this.MD.SurvivalistTacticalLink
    },
    ChTechnicianDismantling() {
      this.TechnicianDismantling = !this.TechnicianDismantling
    },
  },
  mounted() {
    // 组件挂载完成后默认发送一次值
    PubSub.publish('takeTechnicianDismantlingAdd', this.TechnicianDismantlingAdd)
    PubSub.publish('takeHeadHunterAdd', this.HeadHunterAdd)
    PubSub.publish('takeTechnicianDismantling', this.TechnicianDismantling)
    PubSub.publish('takeHeadHunter', this.HeadHunter)
    PubSub.publish('takeAddAmpWd', this.AddAmpWd)
    PubSub.publish('takeAmpWd', this.AmpWd)
    PubSub.publish('takeAddMD', this.AddMD)
    PubSub.publish('takeMD', this.MD)
    PubSub.publish('takeAddTWD', this.AddTWD)
    PubSub.publish('takeTWD', this.TWD)
    PubSub.publish('takeAddHI', this.AddHI)
    PubSub.publish('takeHI', this.HI)
    PubSub.publish('takeAddWDJ', this.AddWDJ)
    PubSub.publish('takeWDJ', this.WDJ)
  },
  watch: {
    TechnicianDismantling() {
      PubSub.publish('takeTechnicianDismantling', this.TechnicianDismantling)
    },
    HeadHunter() {
      PubSub.publish('takeHeadHunter', this.HeadHunter)
    },

    AddAmpWd: {
      deep: true,
      handler() {
        PubSub.publish('takeAddAmpWd', this.AddAmpWd)
      },
    },
    AmpWd: {
      deep: true,
      handler() {
        PubSub.publish('takeAmpWd', this.AmpWd)
      },
    },
    AddMD: {
      deep: true,
      handler() {
        PubSub.publish('takeAddMD', this.AddMD)
      },
    },
    MD: {
      deep: true,
      handler() {
        PubSub.publish('takeMD', this.MD)
      },
    },
    AddTWD: {
      deep: true,
      handler() {
        PubSub.publish('takeAddTWD', this.AddTWD)
      },
    },
    TWD: {
      deep: true,
      handler() {
        PubSub.publish('takeTWD', this.TWD)
      },
    },
    AddHI: {
      deep: true,
      handler() {
        PubSub.publish('takeAddHI', this.AddHI)
      },
    },
    HI: {
      deep: true,
      handler() {
        PubSub.publish('takeHI', this.HI)
      },
    },
    AddWDJ: {
      deep: true,
      handler() {
        PubSub.publish('takeAddWDJ', this.AddWDJ)
      },
    },
    WDJ: {
      deep: true,
      handler() {
        PubSub.publish('takeWDJ', this.WDJ)
      },
    },

    HunterRageC() {
      this.AddMD.HunterRage = Math.pow(1.05, this.HunterRageC)
    },
    HeartTerminatorC() {
      this.AddMD.HeartTerminator = 1 + (1 * Number(this.HeartTerminatorC)) / 100
    },
    MournC() {
      this.AddWDJ.Mourn = 1 * this.MournC
    },
    MournsC() {
      this.AddWDJ.Mourns = 5 * this.MournsC
    },
    BreadbasketC() {
      this.AddHI.Breadbasket = 35 * this.BreadbasketC
    },
    PBreadbasketC() {
      this.AddHI.PBreadbasket = 50 * this.PBreadbasketC
    },
    OSC() {
      this.AddWDJ.OS = 3 * this.OSC
    },
    POSC() {
      this.AddWDJ.POS = 4 * this.POSC
    },
    TTMC() {
      this.AddAmpWd.TTM = 1 + (10 * Number(this.TTMC)) / 100
    },
    PTTMC() {
      this.AddAmpWd.PTTM = 1 + (12 * Number(this.PTTMC)) / 100
    },
    FullOfEnergyC() {
      this.AddAmpWd.FullOfEnergy = 1 + (1 * Number(this.FullOfEnergyC)) / 100
    },
    PFullOfEnergyC() {
      this.AddAmpWd.PFullOfEnergy = 1 + (5 * Number(this.PFullOfEnergyC)) / 100
    },
    RangerC() {
      this.AddMD.Ranger = 1 + (2 * Number(this.RangerC)) / 100
    },
    RiflemanC() {
      this.AddWDJ.Rifleman = 10 * this.RiflemanC
    },
    PRiflemanC() {
      this.AddWDJ.PRifleman = 11 * this.PRiflemanC
    },
    AbsorbedC() {
      this.AddTWD.Absorbed = 5 * this.AbsorbedC
    },
    PAbsorbedC() {
      this.AddTWD.PAbsorbed = 6 * this.PAbsorbedC
    },
    IntimidateC() {
      this.AddAmpWd.Intimidate = Math.pow(1.05, this.IntimidateC)
    },
    PIntimidateC() {
      this.AddAmpWd.PIntimidate = Math.pow(1.05, this.PIntimidateC)
    },
    OFC() {
      this.AddTWD.OF = 1 * this.OFC
    },
    UnstoppableForceC() {
      this.AddTWD.UnstoppableForce = 5 * this.UnstoppableForceC
    },
    SawyersKneepadsC() {
      this.AddTWD.SawyersKneepads = 3 * this.SawyersKneepadsC
    },
    DodgeCityHolsterC() {
      this.AddWDJ.DodgeCityHolster = 10 * this.DodgeCityHolsterC
    },
    StrikersBattlegearC() {
      this.AddMD.StrikersBattlegear = 1 + (1 * Number(this.StrikersBattlegearC)) / 100
    },
  },
}
</script>
<style scoped>
@media screen and (min-width: 730px) {
  .TalentType {
    text-align: center;
    margin-bottom: 10px;
  }

  .TalentType a {
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    font-family: 'myfont';
    display: inline-block;
    font-size: 20px;
    width: 14%;
    background-color: rgba(255, 166, 0, 0.1);
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
  }

  .TalentTypeA {
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    border-bottom: 5px solid rgba(255, 166, 0, 1);
    font-family: 'myfont';
    display: inline-block;
    font-size: 20px;
    width: 14%;
    background-color: rgba(255, 166, 0, 0.1);
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
  }

  .TalentType a:hover {
    background-color: rgba(0, 0, 0, 0);
  }
  #checkboxinput {
    background-color: rgba(255, 166, 0, 0.05);
    text-align: center;
    border-radius: 2px;
    border-top: 0;
    border-bottom: 2px solid rgba(255, 166, 0, 1);
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    color: black;
    font-size: 18px;
    width: 70px;
    outline: none;
  }

  .Checkbox {
    margin-top: 40px;
    font-family: 'myfont';
  }

  .Checkbox h2 {
    box-sizing: border-box;
    text-align: center;
    background: rgba(255, 166, 0, 0.05);
    border-left: 10px solid rgba(255, 166, 0, 1);
    border-right: 10px solid rgba(255, 166, 0, 1);
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .Checkbox div > div {
    display: inline-block;
    width: 270px;
    line-height: 50px;
    padding-left: 67px;
    font-size: 18px;
  }

  .Checkbox div div input {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    color: black;
  }
}
@media screen and (max-width: 730px) {
  .TalentType {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
  }

  .TalentType a {
    text-align: center;
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    font-family: 'myfont';
    font-size: 20px;
    width: 11%;
    background-color: rgba(255, 166, 0, 0.1);
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
    writing-mode: vertical-rl;
    display: flex;
    flex-direction: column;
    justify-content: center;
    writing-mode: tb-rl;
    height: 20%;
  }

  .TalentTypeA {
    text-align: center;
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    border-bottom: 5px solid rgba(255, 166, 0, 1);
    font-family: 'myfont';
    font-size: 20px;
    width: 11%;
    background-color: rgba(255, 166, 0, 0.1);
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
    writing-mode: vertical-rl;
    display: flex;
    flex-direction: column;
    justify-content: center;
    writing-mode: tb-rl;
    height: 20%;
    height: 20%;
  }

  .TalentType a:hover {
    background-color: rgba(0, 0, 0, 0);
  }

  #checkboxinput {
    background-color: rgba(255, 166, 0, 0.05);
    text-align: center;
    border-radius: 2px;
    border-top: 0;
    border-bottom: 2px solid rgba(255, 166, 0, 1);
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    color: black;
    font-size: 18px;
    width: 70px;
    outline: none;
  }

  .Checkbox {
    font-family: 'myfont';
    margin-top: 40px;
  }

  .Checkbox h2 {
    font-size: 25px;
    box-sizing: border-box;
    text-align: center;
    background: rgba(255, 166, 0, 0.05);
    border-left: 10px solid rgba(255, 166, 0, 1);
    border-right: 10px solid rgba(255, 166, 0, 1);
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .Checkbox div > div {
    display: inline-block;
    line-height: 50px;
    padding-left: 5%;
    font-size: 18px;
  }

  .Checkbox div div input {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    color: black;
  }
}
</style>
