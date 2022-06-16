<template>
  <div id="Calculation" class="allcompute">
    <a id="CulationButton" @click="culation" href="#" onclick="return false;"
      >计算</a
    >
    <div class="aspacing"></div>
    <div class="usculation">
      <h1>全天赋武器伤加成:{{ FULLWDJ | numberToCurrency }}</h1>
      <h1>全天赋总武器伤加成:{{ FULLTWD | numberToCurrency }}</h1>
      <h1>猎头者奖励:{{ HeadHunterDs | numberToCurrency }}</h1>
      <button v-if="concise" class="allcomputebutton" @click="CNV">
        显示详细计算结果
      </button>
      <button v-if="detailed" class="allcomputebuttons" @click="CNV">
        显示详细计算结果
      </button>
      <div v-if="detailed">
        <h1>{{ HSUMNAME }}:&nbsp;{{ HSum | numberToCurrency }}</h1>
        <h2>
          暴击:&nbsp;<span style="color: rgb(255, 84, 5)">{{
            HSumB | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          爆头:&nbsp;<span style="color: red">{{
            HSumH | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          头部暴击:&nbsp;<span style="color: rgb(228, 122, 0)">{{
            HSumHB | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标伤害:&nbsp;{{ HSumOC | numberToCurrency }}
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标暴击:&nbsp;<span style="color: rgb(255, 84, 5)">{{
            HSumBOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标爆头:&nbsp;<span style="color: red">{{
            HSumHOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标头部暴击:&nbsp;<span style="color: rgb(228, 122, 0)">{{
            HSumHBOC | numberToCurrency
          }}</span>
        </h2>
        <br />
        <h1 v-if="TechnicianDismantlingTag">
          对护甲值目标伤害:&nbsp;<span style="color: rgb(13, 146, 255)">{{
            ASum | numberToCurrency
          }}</span>
        </h1>
        <h2 v-if="TechnicianDismantlingTag">
          暴击:&nbsp;<span style="color: rgb(255, 84, 5)">{{
            ASumB | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          爆头:&nbsp;<span style="color: red">{{
            ASumH | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          头部暴击:&nbsp;<span style="color: rgb(228, 122, 0)">{{
            ASumHB | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标伤害:&nbsp;<span style="color: rgb(13, 146, 255)">{{
            ASumOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标暴击:&nbsp;<span style="color: rgb(255, 84, 5)">{{
            ASumBOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标爆头:&nbsp;<span style="color: red">{{
            ASumHOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          对离开掩体目标头部暴击:&nbsp;<span style="color: rgb(228, 122, 0)">{{
            ASumHBOC | numberToCurrency
          }}</span>
        </h2>
      </div>
      <div v-if="concise">
        <h1>{{ HSUMNAME }}:&nbsp;{{ HSumOC | numberToCurrency }}</h1>
        <h2>
          暴击:&nbsp;<span style="color: rgb(255, 84, 5)">{{
            HSumBOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          爆头:&nbsp;<span style="color: red">{{
            HSumHOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          头部暴击:&nbsp;<span style="color: rgb(231, 112, 0)">{{
            HSumHBOC | numberToCurrency
          }}</span>
        </h2>
        <br />
        <h1 v-if="TechnicianDismantlingTag">
          对护甲值目标伤害:&nbsp;<span style="color: rgb(13, 146, 255)">{{
            ASumOC | numberToCurrency
          }}</span>
        </h1>
        <h2 v-if="TechnicianDismantlingTag">
          暴击:&nbsp;<span style="color: rgb(255, 84, 5)">{{
            ASumBOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          爆头:&nbsp;<span style="color: red">{{
            ASumHOC | numberToCurrency
          }}</span>
        </h2>
        <h2 v-if="TechnicianDismantlingTag">
          头部暴击:&nbsp;<span style="color: rgb(228, 122, 0)">{{
            ASumHBOC | numberToCurrency
          }}</span>
        </h2>
      </div>
    </div>
    <div id="floatCal" class="floatCal" ref="floatCal">
      <a @click="culation" href="#CulationButton">
        <span>计算</span>
      </a>
    </div>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
import $ from 'jquery'

export default {
  data() {
    this.scrollChange = this.throttle(this.scrollChange, 200)
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
      detailed: false,

      // 从输入框获取数据
      acceptArms: 0,
      acceptHSD: 0,
      acceptRedCore: 0,
      acceptWeaponType: 0,
      acceptCHD: 0,
      acceptDTA: 0,
      acceptDTOC: 0,
      acceptDTH: 0,

      // 获取各天赋勾选状态
      acceptWDJ: undefined,
      acceptAddWDJ: undefined,
      acceptHI: undefined,
      acceptAddHI: undefined,
      acceptTWD: undefined,
      acceptAddTWD: undefined,
      acceptMD: undefined,
      acceptAddMD: undefined,
      acceptAmpWd: undefined,
      acceptAddAmpWd: undefined,
      acceptTechnicianDismantling: undefined,
      acceptTechnicianDismantlingAdd: undefined,
      acceptHeadHunter: undefined,
      acceptHeadHunterAdd: undefined,

      ButtonAnit2if: 0,
      allComputeButtonOffsetToTop: 0,
      windowsWidth: 0,
      temp: 0,
    }
  },
  methods: {
    throttle(func, wait) {
      let timeout = null
      return function () {
        const context = this
        const args = arguments
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null
            func.apply(context, args)
          }, wait)
        }
      }
    },
    scrollChange() {
      this.allComputeButtonOffsetToTop = $('#CulationButton').offset().top
      this.windowsWidth = document.documentElement.clientWidth
      this.temp =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset
      if (this.windowsWidth <= 730) {
        if (this.temp > this.allComputeButtonOffsetToTop) {
          this.$refs.floatCal.style.animationName = 'ButtonAnit1'
          this.ButtonAnit2if = 1
        } else {
          if (this.ButtonAnit2if == 1) {
            this.ButtonAnit2if = 0
            this.$refs.floatCal.style.animationName = 'ButtonAnit2'
          }
        }
      }
      console.log(this.ButtonAnit2if);
    },

    CNV() {
      this.concise = !this.concise
      this.detailed = !this.detailed
    },
    culation() {
      let WDJARR = []
      let AddWDJARR = []

      let TWDARR = []
      let AddTWDARR = []

      let HIARR = []
      let AddHIARR = []

      let MDARR = []
      let AddMDARR = []

      let AmpWdARR = []
      let AddAmpWdARR = []

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
      this.TDLdq = 0
      this.TDLdqB = 0
      this.CONHSum = 0
      this.CONASum = 0
      this.CONHSumB = 0
      this.CONASumB = 0
      this.CONHSumH = 0
      this.CONASumH = 0
      this.CONHSumHB = 0
      this.CONASumHB = 0
      this.FULLHI = Number(this.acceptHSD)
      this.HeadHunterDs = 0
      this.TechnicianDismantlingTag = true
      this.HSUMNAME = '对生命值目标伤害'

      // 计算全部武器伤害
      Object.keys(this.acceptWDJ).forEach((item) => {
        WDJARR.push(this.acceptWDJ[item])
      })
      Object.keys(this.acceptAddWDJ).forEach((item) => {
        AddWDJARR.push(this.acceptAddWDJ[item])
      })
      for (let i = 0; i < WDJARR.length; i++) {
        if (WDJARR[i] == true) {
          this.FULLWDJ = this.FULLWDJ + AddWDJARR[i]
        }
      }

      // 计算全部总武器伤害
      Object.keys(this.acceptTWD).forEach((item) => {
        TWDARR.push(this.acceptTWD[item])
      })
      Object.keys(this.acceptAddTWD).forEach((item) => {
        AddTWDARR.push(this.acceptAddTWD[item])
      })
      for (let i = 0; i < TWDARR.length; i++) {
        if (TWDARR[i] == true) {
          this.FULLTWD = this.FULLTWD + AddTWDARR[i]
        }
      }

      // 计算全部爆头伤害
      Object.keys(this.acceptHI).forEach((item) => {
        HIARR.push(this.acceptHI[item])
      })
      Object.keys(this.acceptAddHI).forEach((item) => {
        AddHIARR.push(this.acceptAddHI[item])
      })
      for (let i = 0; i < HIARR.length; i++) {
        if (HIARR[i] == true) {
          this.FULLHI = this.FULLHI + AddHIARR[i]
        }
      }
      // 计算阿基里斯
      this.acceptAddAmpWd.AchillesPulse = 1 + Number(this.FULLHI) / 100

      this.Sum =
        this.acceptArms *
        (1 +
          (this.acceptRedCore / 100 +
            this.acceptWeaponType / 100 +
            this.FULLWDJ / 100))

      // 计算全部乘算伤害
      Object.keys(this.acceptMD).forEach((item) => {
        MDARR.push(this.acceptMD[item])
      })
      Object.keys(this.acceptAddMD).forEach((item) => {
        AddMDARR.push(this.acceptAddMD[item])
      })
      for (let i = 0; i < MDARR.length; i++) {
        if (MDARR[i] == true) {
          this.Sum = this.Sum * AddMDARR[i]
        }
      }
      // 猎头奖励
      if (this.acceptHeadHunter == true) {
        this.HeadHunterDs =
          this.acceptArms *
          (1 +
            (this.acceptRedCore / 100 +
              this.acceptWeaponType / 100 +
              this.FULLWDJ / 100)) *
          (1 + this.FULLTWD / 100) *
          this.acceptHeadHunterAdd
      }

      // 计算护甲与生命伤害
      this.ASum =
        this.Sum * (1 + this.acceptDTA / 100) * (1 + this.FULLTWD / 100)
      this.HSum =
        this.Sum * (1 + this.acceptDTH / 100) * (1 + this.FULLTWD / 100)

      // 掩体伤
      this.ASumOC =
        this.Sum *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTA / 100) *
        (1 + this.FULLTWD / 100)
      this.HSumOC =
        this.Sum *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTH / 100) *
        (1 + this.FULLTWD / 100)

      // 暴击伤害
      this.ASumB =
        this.Sum *
        (1 + this.acceptCHD / 100) *
        (1 + this.acceptDTA / 100) *
        (1 + this.FULLTWD / 100)
      this.HSumB =
        this.Sum *
        (1 + this.acceptCHD / 100) *
        (1 + this.acceptDTH / 100) *
        (1 + this.FULLTWD / 100)

      // 掩体暴击伤
      this.ASumBOC =
        this.Sum *
        (1 + this.acceptCHD / 100) *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTA / 100) *
        (1 + this.FULLTWD / 100)
      this.HSumBOC =
        this.Sum *
        (1 + this.acceptCHD / 100) *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTH / 100) *
        (1 + this.FULLTWD / 100)

      // 爆头伤害
      this.ASumH =
        this.Sum *
        (1 + this.FULLHI / 100) *
        (1 + this.acceptDTA / 100) *
        (1 + this.FULLTWD / 100)
      this.HSumH =
        this.Sum *
        (1 + this.FULLHI / 100) *
        (1 + this.acceptDTH / 100) *
        (1 + this.FULLTWD / 100)

      // 掩体爆头伤
      this.ASumHOC =
        this.Sum *
        (1 + this.FULLHI / 100) *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTA / 100) *
        (1 + this.FULLTWD / 100)
      this.HSumHOC =
        this.Sum *
        (1 + this.FULLHI / 100) *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTH / 100) *
        (1 + this.FULLTWD / 100)

      // 头部暴击
      this.ASumHB =
        this.Sum *
        (1 + (this.acceptCHD / 100 + this.FULLHI / 100)) *
        (1 + this.acceptDTA / 100) *
        (1 + this.FULLTWD / 100)
      this.HSumHB =
        this.Sum *
        (1 + (this.acceptCHD / 100 + this.FULLHI / 100)) *
        (1 + this.acceptDTH / 100) *
        (1 + this.FULLTWD / 100)

      //掩体头部暴击
      this.ASumHBOC =
        this.Sum *
        (1 + (this.acceptCHD / 100 + this.FULLHI / 100)) *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTA / 100) *
        (1 + this.FULLTWD / 100)
      this.HSumHBOC =
        this.Sum *
        (1 + (this.acceptCHD / 100 + this.FULLHI / 100)) *
        (1 + this.acceptDTOC / 100) *
        (1 + this.acceptDTH / 100) *
        (1 + this.FULLTWD / 100)

      // 判断技师拆解是否开启
      if (this.acceptTechnicianDismantling == true) {
        this.HSUMNAME = '对机械单位伤害'
        this.TechnicianDismantlingTag = false
        this.TDL =
          this.Sum *
          (1 + this.acceptDTOC / 100) *
          (1 + this.FULLTWD / 100) *
          this.acceptTechnicianDismantlingAdd
        this.TDLB =
          this.Sum *
          (1 + this.acceptCHD / 100) *
          (1 + this.acceptDTOC / 100) *
          (1 + this.FULLTWD / 100) *
          this.acceptTechnicianDismantlingAdd
        this.TDLdq =
          this.Sum *
          (1 + this.FULLHI / 100) *
          (1 + this.acceptDTOC / 100) *
          (1 + this.FULLTWD / 100) *
          this.acceptTechnicianDismantlingAdd
        this.TDLdqB =
          this.Sum *
          (1 + this.FULLHI / 100) *
          (1 + this.acceptDTOC / 100) *
          (1 + this.FULLTWD / 100) *
          this.acceptTechnicianDismantlingAdd
      }

      //独立伤选取计算
      Object.keys(this.acceptAmpWd).forEach((item) => {
        AmpWdARR.push(this.acceptAmpWd[item])
      })
      Object.keys(this.acceptAddAmpWd).forEach((item) => {
        AddAmpWdARR.push(this.acceptAddAmpWd[item])
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
      if (this.acceptWDJ.DodgeCityHolster == true) {
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
  mounted() {
    window.addEventListener('scroll', this.scrollChange)

    // 接收一些单独天赋的状态和值
    this.PubTakeTechnicianDismantling = pubsub.subscribe(
      'takeTechnicianDismantling',
      (msgName, data) => {
        this.acceptTechnicianDismantling = data
      }
    )
    this.PubTakeTechnicianDismantlingAdd = pubsub.subscribe(
      'takeTechnicianDismantlingAdd',
      (msgName, data) => {
        this.acceptTechnicianDismantlingAdd = data
      }
    )

    this.PubTakeHeadHunter = pubsub.subscribe(
      'takeHeadHunter',
      (msgName, data) => {
        this.acceptHeadHunter = data
      }
    )
    this.PubTakeHeadHunterAdd = pubsub.subscribe(
      'takeHeadHunterAdd',
      (msgName, data) => {
        this.acceptHeadHunterAdd = data
      }
    )

    // 接收勾选框的状态和值
    this.PubTakeAddAmpWd = pubsub.subscribe('takeAddAmpWd', (msgName, data) => {
      this.acceptAddAmpWd = data
    })
    this.PubTakeAmpWd = pubsub.subscribe('takeAmpWd', (msgName, data) => {
      this.acceptAmpWd = data
    })
    this.PubTakeAddMD = pubsub.subscribe('takeAddMD', (msgName, data) => {
      this.acceptAddMD = data
    })
    this.PubTakeMD = pubsub.subscribe('takeMD', (msgName, data) => {
      this.acceptMD = data
    })
    this.PubTakeAddTWD = pubsub.subscribe('takeAddTWD', (msgName, data) => {
      this.acceptAddTWD = data
    })
    this.PubTakeTWD = pubsub.subscribe('takeTWD', (msgName, data) => {
      this.acceptTWD = data
    })
    this.PubTakeAddHI = pubsub.subscribe('takeAddHI', (msgName, data) => {
      this.acceptAddHI = data
    })
    this.PubTakeHI = pubsub.subscribe('takeHI', (msgName, data) => {
      this.acceptHI = data
    })
    this.PubTakeAddWDJ = pubsub.subscribe('takeAddWDJ', (msgName, data) => {
      this.acceptAddWDJ = data
    })
    this.PubTakeWDJ = pubsub.subscribe('takeWDJ', (msgName, data) => {
      this.acceptWDJ = data
    })

    // 接收输入框组件的输入值
    this.PubTakeHSD = pubsub.subscribe('takeHSD', (msgName, data) => {
      this.acceptHSD = data
    })

    this.PubTakeDTH = pubsub.subscribe('takeDTH', (msgName, data) => {
      this.acceptDTH = data
    })

    this.PubTakeDTOC = pubsub.subscribe('takeDTOC', (msgName, data) => {
      this.acceptDTOC = data
    })

    this.PubTakeDTA = pubsub.subscribe('takeDTA', (msgName, data) => {
      this.acceptDTA = data
    })

    this.PubTakeCHD = pubsub.subscribe('takeCHD', (msgName, data) => {
      this.acceptCHD = data
    })

    this.PubTakeWeaponType = pubsub.subscribe(
      'takeWeaponType',
      (msgName, data) => {
        this.acceptWeaponType = data
      }
    )

    this.PubTakeRedCore = pubsub.subscribe('takeRedCore', (msgName, data) => {
      this.acceptRedCore = data
    })

    this.PubTakeArms = pubsub.subscribe('takeArms', (msgName, data) => {
      this.acceptArms = data
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.PubTakeArms)
    pubsub.unsubscribe(this.PubTakeRedCore)
    pubsub.unsubscribe(this.PubTakeWeaponType)
    pubsub.unsubscribe(this.PubTakeCHD)
    pubsub.unsubscribe(this.PubTakeDTA)
    pubsub.unsubscribe(this.PubTakeDTOC)
    pubsub.unsubscribe(this.PubTakeDTH)
    pubsub.unsubscribe(this.PubTakeHSD)
    pubsub.unsubscribe(this.PubTakeWDJ)
    pubsub.unsubscribe(this.PubTakeAddWDJ)
    pubsub.unsubscribe(this.PubTakeHI)
    pubsub.unsubscribe(this.PubTakeAddHI)
    pubsub.unsubscribe(this.PubTakeTWD)
    pubsub.unsubscribe(this.PubTakeAddTWD)
    pubsub.unsubscribe(this.PubTakeMD)
    pubsub.unsubscribe(this.PubTakeAddMD)
    pubsub.unsubscribe(this.PubTakeAmpWd)
    pubsub.unsubscribe(this.PubTakeAddAmpWd)
  },
}
</script>
<style>
@media screen and (min-width: 730px) {
  .floatCal {
    display: none;
  }
  .aspacing {
    height: 50px;
  }
  .allcompute {
    font-size: 11px;
    position: relative;
    left: 62.7%;
    padding: 0 1% 1%;
    width: 35%;
    background-color: rgba(255, 166, 0, 0.05);
    border-left: 3px solid orange;
    border-bottom: 3px solid orange;
    line-height: 30px;
    border-radius: 5px 0 0 5px;
    display: inline-block;
  }

  .allcomputebutton {
    border-radius: 0 5px 5px 0;
    border-left: 5px solid grey;
    background: rgba(255, 166, 0, 0.05);
    padding-left: 5px;
    display: inline-block;
    margin-top: 5px;
    font-family: 'myfont';
    font-size: 18px;
    vertical-align: top;
    user-select: none;
  }

  .allcomputebuttons {
    border-radius: 0 5px 5px 0;
    border-left: 5px solid rgb(153, 255, 0);
    background: rgba(255, 166, 0, 0.05);
    padding-left: 5px;
    display: inline-block;
    margin-top: 5px;
    font-family: 'myfont';
    font-size: 18px;
    user-select: none;
  }

  .allcompute > a {
    display: block;
    width: 98.6%;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    font-size: 30px;
    background-color: rgba(255, 166, 0, 0.05);
    font-family: 'myfont';
    position: absolute;
    left: 0;
    border-bottom: 5px solid orange;
    border-radius: 5px 0 0 0;
    border-top: 3px solid orange;
    user-select: none;
  }

  .allcompute > a:hover {
    color: black;
    border-bottom: 5px solid rgb(231, 150, 0);
    background-color: rgba(255, 166, 0, 0.2);
  }

  .allcomputeFive a:hover {
    color: rgb(255, 255, 255);
    border-bottom: 5px solid white;
    background-color: rgb(0, 0, 0);
  }
}
@media screen and (max-width: 730px) {
  @keyframes ButtonAnit1 {
    0% {
      opacity: 0;
      right: -14%;
    }

    100% {
      opacity: 1;
      right: 2%;
    }
  }

  @keyframes ButtonAnit2 {
    0% {
      opacity: 1;
      right: 2%;
    }

    100% {
      opacity: 0;
      right: -14%;
    }
  }
  .floatCal {
    background-color: rgb(242 232 216);
    text-align: center;
    border: 1px solid rgb(255 166 0);
    width: 55px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px 0 0 4px;
    position: fixed;
    bottom: 25%;
    right: -14%;
    opacity: 0;
    animation-duration: 500ms;
    animation-fill-mode: both;
  }

  .floatCal a span {
    font-family: 'myfont';
    font-size: 20px;
    user-select: none;
  }

  .floatCal a {
    z-index: 999;
    display: inline-block;
    text-decoration: none;
  }
  .aspacing {
    height: 50px;
  }
  .allcompute {
    font-size: 11px;
    padding: 0 1% 1%;
    width: 100%;
    background-color: rgba(255, 166, 0, 0.05);
    border-left: 3px solid orange;
    border-bottom: 3px solid orange;
    border-right: 3px solid orange;
    line-height: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .allcomputebutton {
    border-radius: 0 5px 5px 0;
    border-left: 5px solid grey;
    background: rgba(255, 166, 0, 0.05);
    padding-left: 5px;
    display: inline;
    margin-top: 5px;
    font-family: 'myfont';
    font-size: 18px;
    user-select: none;
  }

  .allcomputebuttons {
    border-radius: 0 5px 5px 0;
    border-left: 5px solid rgb(153, 255, 0);
    background: rgba(255, 166, 0, 0.05);
    padding-left: 5px;
    display: inline;
    margin-top: 5px;
    font-family: 'myfont';
    font-size: 18px;
  }

  .allcompute > a {
    display: block;
    width: 97.4%;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    font-size: 30px;
    background-color: rgba(255, 166, 0, 0.05);
    font-family: 'myfont';
    position: absolute;
    left: 0;
    border-bottom: 5px solid orange;
    border-radius: 5px 0 0 0;
    border-top: 3px solid orange;
    user-select: none;
  }

  .allcompute > a:hover {
    color: black;
    border-bottom: 5px solid rgb(231, 150, 0);
    background-color: rgba(255, 166, 0, 0.2);
  }
}
</style>
