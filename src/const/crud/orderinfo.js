export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  "column": [
	  {
      "type": "input",
      "label": "id",
      "prop": "id"
    },	  {
      "type": "input",
      "label": "创建时间",
      "prop": "createDate"
    },	  {
      "type": "input",
      "label": "更新时间",
      "prop": "updateDate"
    },	  {
      "type": "input",
      "label": "是否删除   0否 1是",
      "prop": "isDel"
    },	  {
      "type": "input",
      "label": "用户id",
      "prop": "userId"
    },	  {
      "type": "input",
      "label": "订单状态  1:未支付  2:已支付  3:已到店/排队中  4:施工中 5:完工  6:已确认服务/已确认收货 7:未支付到时取消，8：已退款， 9-关闭",
      "prop": "orderStatus"
    },	  {
      "type": "input",
      "label": "订单号",
      "prop": "orderNo"
    },	  {
      "type": "input",
      "label": "订单金额",
      "prop": "orderAmount"
    },	  {
      "type": "input",
      "label": "实际支付金额",
      "prop": "payAmount"
    },	  {
      "type": "input",
      "label": "支付时间",
      "prop": "payTime"
    }  ]
}
