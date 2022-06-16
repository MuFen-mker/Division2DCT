<template>
  <div id="root" class="first">
    <p class="el-inputDel">
      武器基础白字<br />
      <el-autocomplete
        popper-class="my-autocomplete"
        v-model="arms"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        placeholder="可输入武器名"
      >
        <template slot-scope="{ item }">
          <span style="font-size: 15px; color: black">{{
            item.WeaponName
          }}</span>
          <div class="WeaponValue" style="font-size: 10px; color: black">
            {{ item.value }}
          </div>
        </template>
      </el-autocomplete>
    </p>
    <p>
      所有武器的伤害加成<input
        v-model="RedCore"
        type="text"
        name="RedCore"
        placeholder="所有武器的伤害加成(%)"
      />
    </p>
    <p>
      武器种类伤害加成<input
        v-model="WeaponType"
        type="text"
        name="Weapon type"
        placeholder="武器种类伤害加成(%)"
      />
    </p>
    <p>
      爆头伤害<input
        v-model="HSD"
        type="text"
        name="HSD"
        placeholder="爆头伤(%)"
      />
    </p>
    <p>
      爆击伤害<input
        v-model="CHD"
        type="text"
        name="CHD"
        placeholder="爆伤(%)"
      />
    </p>
    <p>
      对生命值伤害<input
        v-model="DTH"
        type="text"
        name="DTH"
        placeholder="生命伤(%)"
      />
    </p>
    <p>
      装甲伤害<input
        v-model="DTA"
        type="text"
        name="DTA"
        placeholder="装甲伤(%)"
      />
    </p>
    <p>
      对离开掩体目标伤<input
        v-model="DTOC"
        type="text"
        name="DTOC"
        placeholder="掩体伤(%)"
      />
    </p>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  name: 'All-Root',
  data() {
    return {
      arms: '0',
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
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.WeaponName.toLowerCase().indexOf(
            queryString.toLowerCase()
          ) === 0
        )
      }
    },
    loadAll() {
      return [
        { value: '342247', WeaponName: '1886' },
        { value: '92613.5', WeaponName: 'ACR SS' },
        { value: '100135.5', WeaponName: 'LVOA-C' },
        { value: '75219', WeaponName: 'M16A2' },
        { value: '156079.5', WeaponName: 'M1A CQB' },
        { value: '104836.5', WeaponName: 'Resolute MK47' },
        { value: '97784.5', WeaponName: 'SIG 716' },
        { value: '99665', WeaponName: 'SIG 716 CQB' },
        { value: '105777', WeaponName: 'UIC15 MOD2' },
        { value: '98255', WeaponName: 'USC .45ACP' },
        { value: '116119.5', WeaponName: '军规 MK17' },
        { value: '84621.5', WeaponName: '冷酷无情' },
        { value: '205442', WeaponName: '十三一打' },
        { value: '104836.5', WeaponName: '和谐' },
        { value: '329084', WeaponName: '响尾蛇' },
        { value: '97784.5', WeaponName: '城镇 MDR' },
        { value: '84621.5', WeaponName: '无情' },
        { value: '116119.5', WeaponName: '永恒凝视' },
        { value: '100135.5', WeaponName: '涌动' },
        { value: '141036', WeaponName: '特战 M1A' },
        { value: '205442', WeaponName: '经典 M1A' },
        { value: '342247', WeaponName: '维吉尼亚州人' },
        { value: '99665', WeaponName: '艺术家工具' },
        { value: '116119.5', WeaponName: '警用 MK17' },
        { value: '103896.5', WeaponName: '轻型 M4' },
        { value: '122231', WeaponName: '饥饿之人' },
        { value: '53123.5', WeaponName: 'ACR' },
        { value: '53123.5', WeaponName: 'ACR-E' },
        { value: '62055.5', WeaponName: 'AK-M' },
        { value: '51243', WeaponName: 'AUG A3-CQC' },
        { value: '41370.5', WeaponName: 'CTAR-21' },
        { value: '45131.5', WeaponName: 'F2000' },
        { value: '56884.5', WeaponName: 'FAL' },
        { value: '56884.5', WeaponName: 'FAL SA-58' },
        { value: '56884.5', WeaponName: 'FAL SA-58 Para' },
        { value: '44191', WeaponName: 'FAMAS 2010' },
        { value: '48892', WeaponName: 'G36 C' },
        { value: '55004', WeaponName: 'MK16' },
        { value: '51713', WeaponName: 'PDR' },
        { value: '50772.5', WeaponName: 'SIG 556' },
        { value: '58765', WeaponName: 'TKB-408' },
        { value: '47012', WeaponName: '七号卡宾枪' },
        { value: '60645', WeaponName: '兴奋狂躁' },
        { value: '48892', WeaponName: '军用 G36' },
        { value: '60645', WeaponName: '军规 AK-M' },
        { value: '47952', WeaponName: '军规 P416' },
        { value: '41370.5', WeaponName: '劈柴者' },
        { value: '48892', WeaponName: '加强版 G36' },
        { value: '39960', WeaponName: '变色龙' },
        { value: '51243', WeaponName: '大角突击步枪' },
        { value: '47952', WeaponName: '定制 P416 G3' },
        { value: '58765', WeaponName: '废王者' },
        { value: '55004', WeaponName: '战术 MK16' },
        { value: '45131.5', WeaponName: '护盾破坏者' },
        { value: '50772.5', WeaponName: '机械动物' },
        { value: '51713', WeaponName: '测试对象' },
        { value: '44191', WeaponName: '燃烧殆尽' },
        { value: '55004', WeaponName: '特战 MK16' },
        { value: '47952', WeaponName: '狂野狼人' },
        { value: '51713', WeaponName: '电容突击' },
        { value: '44191', WeaponName: '纵火狂' },
        { value: '47952', WeaponName: '荣耀迷惑' },
        { value: '47952', WeaponName: '蜜獾' },
        { value: '44191', WeaponName: '警用 M4' },
        { value: '51243', WeaponName: '隐形之手' },
        { value: '51713', WeaponName: '驯鹰人' },
        { value: '60645', WeaponName: '黑市 AK-M' },
        { value: '399602', WeaponName: 'Ekim 长棍' },
        { value: '146677', WeaponName: 'G28' },
        { value: '376096', WeaponName: 'M700 战术' },
        { value: '376096', WeaponName: 'M700 碳纤维板' },
        { value: '399602', WeaponName: 'Model 700' },
        { value: '357291', WeaponName: 'SR-1' },
        { value: '338956.5', WeaponName: 'SRS A1' },
        { value: '159840.5', WeaponName: '伞兵 SVD' },
        { value: '940240', WeaponName: '复仇女神' },
        { value: '376096', WeaponName: '定制 M44' },
        { value: '159840.5', WeaponName: '库存 SVD' },
        { value: '159840.5', WeaponName: '恐惧宣告' },
        { value: '324382.5', WeaponName: '战术 .308' },
        { value: '324382.5', WeaponName: '手术刀' },
        { value: '357291', WeaponName: '指定打击' },
        { value: '338956.5', WeaponName: '潜行 SRS' },
        { value: '143856.5', WeaponName: '特战 MK20 SSR' },
        { value: '416056', WeaponName: '猎枪 M44' },
        { value: '423108', WeaponName: '白色死神' },
        { value: '159840.5', WeaponName: '突击队' },
        { value: '423108', WeaponName: '经典 M44 卡宾枪' },
        { value: '338956.5', WeaponName: '螳螂' },
        { value: '338956.5', WeaponName: '针刺' },
        { value: '357291', WeaponName: '阿德蕾斯提雅' },
        { value: '143856.5', WeaponName: '黑暗' },
        { value: '169240', WeaponName: 'ACS-12' },
        { value: '594228', WeaponName: 'KSG 霰弹枪' },
        { value: '695776', WeaponName: 'M870 高速' },
        { value: '364812', WeaponName: 'SASG-12' },
        { value: '451312', WeaponName: 'SIX12' },
        { value: '646884', WeaponName: 'SPAS-12' },
        { value: '440032', WeaponName: 'Super 90' },
        { value: '695776', WeaponName: '军规 M870' },
        { value: '620555', WeaponName: '双短管霰弹枪' },
        { value: '620556', WeaponName: '双管猎枪' },
        { value: '620556', WeaponName: '双管霰弹枪' },
        { value: '620555', WeaponName: '后备猎枪' },
        { value: '451312', WeaponName: '天蝎座' },
        { value: '695776', WeaponName: '定制 M870 MCS' },
        { value: '695776', WeaponName: '库耶列布希' },
        { value: '364812', WeaponName: '战术 SASG-12K' },
        { value: '440032', WeaponName: '战术 Super 90 SBS' },
        { value: '440032', WeaponName: '打手' },
        { value: '451312', WeaponName: '拖把' },
        { value: '169240', WeaponName: '摇滚' },
        { value: '646884', WeaponName: '摇篮曲' },
        { value: '364812', WeaponName: '海啸' },
        { value: '440032', WeaponName: '海陆 Super 90' },
        { value: '646884', WeaponName: '美梦' },
        { value: '594228', WeaponName: '送别' },
        { value: '364812', WeaponName: '黑市 SASG-12 S' },
        { value: '57824.5', WeaponName: 'AUG A3 Para XS' },
        { value: '50302.5', WeaponName: 'CMMG Banshee	' },
        { value: '70518', WeaponName: 'M1928' },
        { value: '51713', WeaponName: 'MP5 ST' },
        { value: '51713', WeaponName: 'MP5-N' },
        { value: '51713', WeaponName: 'MP5A2' },
        { value: '47952', WeaponName: 'MP7' },
        { value: '48892', WeaponName: 'P90' },
        { value: '59705', WeaponName: 'PP-19' },
        { value: '53123.5	', WeaponName: 'SIG MPX' },
        { value: '65816.5', WeaponName: 'UMP45' },
        { value: '40430', WeaponName: 'Vector SBR .45 ACP' },
        { value: '37139', WeaponName: 'Vectot SBR 9mm' },
        { value: '47952', WeaponName: '交换链' },
        { value: '53123.5', WeaponName: '公寓' },
        { value: '59705', WeaponName: '冰冷关系' },
        { value: '57824.5', WeaponName: '加强版 AUG A3P' },
        { value: '59705', WeaponName: '加强版 PP-19' },
        { value: '53123.5', WeaponName: '安全距离' },
        { value: '50302.5', WeaponName: '怨恨' },
        { value: '57824.5', WeaponName: '战术 AUG A3P' },
        { value: '65816.5', WeaponName: '战术 UMP-45' },
        { value: '42310.5', WeaponName: '战术 Vector SBR 9mm	' },
        { value: '51713', WeaponName: '改装 SMG-9' },
        { value: '49832.5', WeaponName: '改装 SMG-9 A2' },
        { value: '40430', WeaponName: '暗冬行动' },
        { value: '41370.5', WeaponName: '死亡女神' },
        { value: '55474', WeaponName: '汤米' },
        { value: '48892', WeaponName: '艾米琳的护卫' },
        { value: '66757', WeaponName: '警用 T821' },
        { value: '65816.5', WeaponName: '警用 UMP-45' },
        { value: '42780.5', WeaponName: '话匣子' },
        { value: '53123.5', WeaponName: '逆火' },
        { value: '84621.5', WeaponName: '雪橇弑手' },
        { value: '66757', WeaponName: '黑市 T821' },
        { value: '39960', WeaponName: 'GR9' },
        { value: '37609.5', WeaponName: 'IWI NEGEV' },
        { value: '56414', WeaponName: 'M249 B' },
        { value: '44661', WeaponName: 'MG5' },
        { value: '59705', WeaponName: '军规 L86 LSW' },
        { value: '61115.5', WeaponName: '军规 M60 E4' },
        { value: '56414', WeaponName: '军规 MK46' },
        { value: '55474', WeaponName: '军规 RPK-74 M' },
        { value: '61115.5', WeaponName: '好时光' },
        { value: '59705', WeaponName: '定制 L86 A2' },
        { value: '55474', WeaponName: '崭新牢靠' },
        { value: '56414', WeaponName: '战术 M249 Para' },
        { value: '39960', WeaponName: '挑战' },
        { value: '44661', WeaponName: '斯莱普尼尔' },
        { value: '47952', WeaponName: '斯通纳轻突击机枪' },
        { value: '47952', WeaponName: '无声怒吼' },
        { value: '37609.5', WeaponName: '枪弹王者' },
        { value: '47143.5', WeaponName: '步兵 MG5' },
        { value: '37609.5', WeaponName: '残暴屠杀' },
        { value: '56414', WeaponName: '毒刺' },
        { value: '59705', WeaponName: '白板' },
        { value: '63466', WeaponName: '经典 M60' },
        { value: '55474', WeaponName: '经典 RPK-74' },
        { value: '56414', WeaponName: '蓝屏' },
        { value: '61115.5	', WeaponName: '黑市 M60 E6' },
        { value: '55474', WeaponName: '黑市 RPK-74 E' },
        { value: '56414', WeaponName: '黑色星期五' },
        { value: '47012', WeaponName: '鼠疫' },
        { value: '190398.5', WeaponName: '586 麦格农' },
        { value: '32908', WeaponName: '93R' },
        { value: '220956', WeaponName: 'D50' },
        { value: '109067.5', WeaponName: 'KARD-45' },
        { value: '101075.5', WeaponName: 'M1911' },
        { value: '98725', WeaponName: 'M45A1' },
        { value: '79920', WeaponName: 'Px4 Storm Type F' },
        { value: '79920', WeaponName: 'Px4 Storm Type T' },
        { value: '76629.5', WeaponName: 'X-45' },
        { value: '76629.5', WeaponName: 'X-45 战术' },
        { value: '109067.5', WeaponName: 'Kard 定制 TDI' },
        { value: '79920', WeaponName: '军官的 M9 A1' },
        { value: '81800.5', WeaponName: '军规 M9' },
        { value: '79920', WeaponName: '定制 PF45' },
        { value: '98725', WeaponName: '战术 M1911' },
        { value: '98725', WeaponName: '特殊莫桑比克' },
        { value: '169243', WeaponName: '犀牛左轮手枪' },
        { value: '282072', WeaponName: '王子左轮手枪' },
        { value: '170183', WeaponName: '短枪管犀牛' },
        { value: '82741', WeaponName: '第一波 PF45' },
        { value: '235060', WeaponName: '自由' },
        { value: '190398.5', WeaponName: '警用 686 麦格农' },
        { value: '190398.5', WeaponName: '轨道' },
        { value: '79920', WeaponName: '避雷针' },
      ]
    },
  },
  mounted() {
    this.restaurants = this.loadAll()
  },
  watch: {
    HSD() {
      PubSub.publish('takeHSD',Number(this.HSD))
    },
    DTH() {
      PubSub.publish('takeDTH',Number(this.DTH))
    },
    DTOC() {
      PubSub.publish('takeDTOC', Number(this.DTOC))
    },
    DTA() {
      PubSub.publish('takeDTA', Number(this.DTA))
    },
    CHD() {
      PubSub.publish('takeCHD', Number(this.CHD))
    },
    WeaponType() {
      PubSub.publish('takeWeaponType', Number(this.WeaponType))
    },
    RedCore() {
      PubSub.publish('takeRedCore', Number(this.RedCore))
    },
    arms() {
      PubSub.publish('takeArms', Number(this.arms))
    }
  }
}
</script>
<style>
@media screen and (min-width: 730px) {
  .el-autocomplete-suggestion li {
    line-height: 24px !important;
  }
  .WeaponValue {
    padding-bottom: 10px;
  }
  .el-inputDel .el-input__inner {
    border-radius: 0;
    padding: 0;
    margin: 0;
  }
  .el-inputDel .el-input__inner:focus {
    border-color: rgba(255, 166, 0, 1);
  }
  .el-inputDel .el-input__inner:hover {
    border-color: rgba(255, 166, 0, 1);
  }
  .first {
    text-align: center;
    font-size: 0;
  }

  .first p {
    font-size: 18px;
    margin-top: 10px;
    display: inline-block;
    font-family: 'myfont';
    line-height: normal;
  }

  .first input {
    margin-top: 5px;
    border-bottom: 1px solid rgba(255, 166, 0, 1);
    border-top: 0px;
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    background-color: rgba(255, 166, 0, 0.05);
    text-align: center;
    font-size: 18px;
    display: block;
    height: 30px;
    color: black;
    outline: none;
  }
}
@media screen and (max-width: 730px) {
  .el-inputDel .el-input__inner {
    border-radius: 0;
    padding: 0;
    margin: 0;
  }
  .el-inputDel .el-input__inner:focus {
    border-color: rgba(255, 166, 0, 1);
  }
  .el-inputDel .el-input__inner:hover {
    border-color: rgba(255, 166, 0, 1);
  }
  .first {
    text-align: center;
    font-size: 0;
  }

  .first p {
    font-size: 18px;
    margin-top: 10px;
    width: 45%;
    display: inline-block;
    font-family: 'myfont';
  }

  .first input {
    width: 100%;
    margin-top: 5px;
    border-bottom: 1px solid rgba(255, 166, 0, 1);
    border-top: 0px;
    border-left: 1px solid rgba(255, 166, 0, 1);
    border-right: 1px solid rgba(255, 166, 0, 1);
    background-color: rgba(255, 166, 0, 0.05);
    text-align: center;
    font-size: 18px;
    display: block;
    height: 30px;
    color: black;
    outline: none;
  }
}
</style>
