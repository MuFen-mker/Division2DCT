<template>
  <div class="tips" id="Tips">
    <p>
      输入框直接输入数值，无需输入百分号，数值以<span style="color: red"
        >"角色面板"</span
      >为准，查看数据时请用<span style="color: red">"G"</span>切换为当前武器
    </p>
    <p>
      武器基础白字是无任何增伤，武器原本的伤害。请在游戏中开启<span
        style="color: red"
        >"显示基础伤害"</span
      >查看,或直接在输入框输入<span style="color: red">完整武器名</span>查找
    </p>
    <p>计算结果有些许偏差是正常的</p>
    <p>
      只有在考虑对机械单位时才勾选<span style="color: red">"技师--拆解"</span
      >，机械单位并不吃装甲伤，也不会进掩体，所以隐藏多数计算结果只显示已计算生命值/掩体伤的非暴击害/暴击伤害
    </p>
    <p>
      叠层天赋以某个条件增伤时输入框输入对应的层数即可(例如专注每秒增伤，乐天派每减少10%为一层)
    </p>
    <p>追悼长期BUFF指每个已捡起挂饰，短期BUFF指捡起挂饰时</p>
    <a
      class="star"
      target="_blank"
      href="https://github.com/MuFen-mker/Division2DCT"
      >*喜欢的话帮忙GitHub点个星星吧
    </a>
    <p style="color: orange">
      错误反馈<br />h4xor343的"开黑啦"服务器ID：90818938 <br />
      欢迎各位华盛顿特工，此服务器提供专业的八人本基础教学，进阶教学，修车服务!
    </p>
  </div>
</template>
<script>
export default {
  name: 'Head-Tips',
  data() {
    return {}
  },
}
</script>
<style scoped>
@media screen and (min-width: 730px) {
  .tips {
    font-family: 'myfont';
    font-size: 18px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 5px solid orange;
    border-top: 5px solid orange;
    box-sizing: border-box;
    padding: 30px 30px 30px 30px;
    text-align: center;
    background-color: rgba(255, 166, 0, 0.05);
  }

  .tips p {
    color: black;
  }
  .star {
    text-decoration: none;
    color: black;
  }

  .star:hover {
    color: rgb(0, 196, 196);
  }
}
@media screen and (max-width: 730px) {
  .tips {
    font-family: 'myfont';
    font-size: 18px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 5px solid orange;
    border-top: 5px solid orange;
    box-sizing: border-box;
    padding: 30px 30px 30px 30px;
    text-align: center;
    background-color: rgba(255, 166, 0, 0.05);
  }

  .tips p {
    color: black;
  }
  .star {
    text-decoration: none;
    color: black;
  }

  .star:hover {
    color: rgb(0, 196, 196);
  }
}
</style>
