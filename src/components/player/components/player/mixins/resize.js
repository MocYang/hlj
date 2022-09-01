import { debounce } from 'lodash'
export default {
  data () {
    return {
      $_resizeHandler: null
    }
  },
  mounted () {
    this.$_resizeHandler = debounce(() => {
      if (this.currentPlayer) {
        this.resizePlayer(this)
      }
    }, 200)
    this.$_initResizeEvent()
  },
  beforeDestroy () {
    this.$_destroyResizeEvent()
  },
  methods: {
    $_initResizeEvent () {
      window.addEventListener('resize', this.$_resizeHandler.bind(this))
    },
    $_destroyResizeEvent () {
      window.removeEventListener('resize', this.$_resizeHandler.bind(this))
    }
  }
}
