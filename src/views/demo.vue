<template>
  <div class="main">

    <!-- Modals -->
    <demo-error-modal/>
    <demo-login-modal/>
    <demo-dog-profile-modal />
    <demo-conditional-modal/>
    <demo-size-modal/>
    <demo-adaptive-modal/>
    <demo-resizable-modal/>
    <demo-draggable-modal/>

    <!-- Dialogs -->
    <modals-container />

    <v-dialog
      @before-opened="dialogEvent('before-open')"
      @before-closed="dialogEvent('before-close')"
      @opened="dialogEvent('opened')"
      @closed="dialogEvent('closed')"/>

    <h2>Vue.js Modal
      <a href="https://github.com/euvl/vue-js-modal/blob/master/README.md"
         target="readme">Readme</a>
      <a href="https://github.com/euvl/vue-js-modal/issues"
         target="issues">Issues</a>
      <a href="https://github.com/euvl/vue-js-modal/tree/master/demo/client_side_rendering/src/components/modals"
         target="issues">Examples</a>
    </h2>

    <!-- Other -->

    <pre style="line-height: 1.5;">

    npm install --save vue-js-modal

    ...
    import vmodal from 'vue-js-modal'
    Vue.use(vmodal)
  </pre>

    <div style="margin-top: 20px; margin-bottom: 15px;">
      <button
        class="btn"
        @click="$modal.show('example-resizable')">
        Resizable
      </button>
      <button
        class="btn"
        @click="$modal.show('example-adaptive')">
        Adaptive
      </button>
      <button
        class="btn"
        @click="$modal.show('example-draggable')">
        Draggable
      </button>
      <br>
      <button
        class="btn green"
        @click="$modal.show('dog-profile')">
        Demo: Dog Profile photo
      </button>
      <button
        class="btn green"
        @click="$modal.show('error-modal')">
        Demo: Error handling
      </button>
      <button
        class="btn green"
        @click="$modal.show('demo-login')">
        Demo: Login
      </button>
      <button
        class="btn green"
        @click="$modal.show('size-modal')">
        Demo: Width: 60%, Height: auto
      </button>
      <button
        :class="canBeShown ? 'btn green' : 'btn red'"
        @click="conditionalShow">
        Can <b v-if="!canBeShown">NOT</b> be shown
      </button>

      <br>

      <button
        class="btn"
        @click="showBasicDialog">
        Dialog: basic
      </button>

      <button
        class="btn"
        @click="showTitleDialog">
        Dialog: title
      </button>

      <button
        class="btn"
        @click="showButtonsDialog">
        Dialog: buttons
      </button>
      <br>
      <button
        class="btn"
        @click="showDynamicRuntimeModal">
        Dynamic: Runtime Modal
      </button>
      <button
        class="btn"
        @click="showDynamicComponentModal">
        Dynamic: Component Modal
      </button>
      <button
        class="btn"
        @click="showDynamicComponentModalWithModalParams">
        Dynamic: Component Modal with modal params
      </button>
    </div>

  </div>
</template>
<script>
  import DemoAdaptiveModal    from '@/components/modals/Modal_Adaptive.vue'
  import DemoDraggableModal   from '@/components/modals/Modal_Draggable.vue'
  import DemoResizableModal   from '@/components/modals/Modal_Resizable.vue'
  import DemoConditionalModal from '@/components/modals/Modal_Conditional.vue'
  import DemoErrorModal       from '@/components/modals/DemoErrorModal.vue'
  import DemoLoginModal       from '@/components/modals/DemoLoginModal.vue'
  import DemoDogProfileModal  from '@/components/modals/DogProfileModal.vue'
  import DemoSizeModal        from '@/components/modals/SizeModal.vue'
  import CustomComponentModal from '@/components/modals/CustomComponentModal.vue'

  export default {
  name: 'app',
  components: {
    DemoAdaptiveModal,
    DemoDraggableModal,
    DemoResizableModal,
    DemoErrorModal,
    DemoLoginModal,
    DemoDogProfileModal,
    DemoConditionalModal,
    DemoSizeModal
  },
  data () {
    return {
      canBeShown: false
    }
  },
  created () {
    setInterval(() => {
      this.canBeShown = !this.canBeShown
    }, 5000)
  },
  methods: {
    conditionalShow () {
      this.$modal.show('conditional-modal', {
        show: this.canBeShown
      })
    },

    showBasicDialog () {
      this.$modal.show('dialog', {
        text: 'I am a tiny dialog box.<br/>And I render <b>HTML!</b>'
      })
    },

    showTitleDialog () {
      this.$modal.show('dialog', {
        title: 'Information',
        text: 'Check out, I have a title 😎'
      })
    },

    showButtonsDialog () {
      this.$modal.show('dialog', {
        title: 'Buttons example',
        text: 'You can add an arbitrary number of buttons.',
        buttons: [
          {
            title: 'C💩NCEL',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'LIKE',
            default: true,
            handler: () => {
              alert('LIKE LIKE LIKE')
            }
          },
          {
            title: 'REPOST',
            handler: () => {
              alert('REPOST REPOST REPOST')
            }
          }
        ]
      })
    },

    showDynamicRuntimeModal () {
      this.$modal.show({
        template: `
          <div class="example-modal-content">
            <h1>This is created inline</h1>
            <p>{{ text }}</p>
          </div>
        `,
        props: ['text']
      }, {
        text: 'This text is passed as a property'
      })
    },

    showDynamicComponentModal () {
      this.$modal.show(CustomComponentModal, {
        text: 'This text is passed as a property'
      })
    },

    showDynamicComponentModalWithModalParams () {
      this.$modal.show({
        template: `
          <div class="example-modal-content">
            <button class="btn" @click="closeByName">Close this using name</button>
            <button class="btn" @click="closeByEvent">Close this using events</button>
          </div>
        `,
        methods: {
          closeByName() {
            this.$modal.hide('dynamic-modal');
          },
          closeByEvent() {
            this.$emit('close');
          },
        }
      }, null, {
        name: 'dynamic-modal',
        resizable: true,
        adaptive: true,
        draggable: true,
      })
    },

    dialogEvent (eventName) {
      console.log('Dialog event: ' + eventName)
    }
  }
}

</script>
<style scoped>
</style>
