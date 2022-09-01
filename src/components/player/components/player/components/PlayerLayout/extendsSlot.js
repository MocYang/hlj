export default {
  name: 'ExtendsSlot',
  functional: true,
  inject: ['player'],
  props: {
    slotName: {
      type: String,
      default: 'extends'
    }
  },
  render: (h, ctx) => {
    const slotFun = ctx.injections.player.$scopedSlots[ctx.props.slotName]
    return h('div', {
      class: 'slot-toolbar'
    }, slotFun && slotFun({
      /**
       * player组件上下文
       */
      context: ctx.injections.player,
      /**
       * 通过jsPlugin创建的player实例
       */
      player: ctx.injections.player.currentPlayer,
    }))
  }
}
