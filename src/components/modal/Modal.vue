<template>
    <transition name="fade">
        <div class="modal-overlay" v-show="show">
            <!-- Used to close the modal by clicking on the overlay -->
            <div class="modal-sandbox" @click="tryHidingModal"></div>
            
            <!-- Main modal container -->
            <div class="modal-box">
                <div class="modal-header" v-show="headerVisible">
                    <div class="modal-title">
                        <h2><slot name="title">{{ title }}</slot></h2>
                    </div>

                    <div class="close-modal" v-show="this.canClose" @click="tryHidingModal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                          <path d="M43.8 22c0 12-9.8 21.8-21.8 21.8S.2 34 .2 22 10 .2 22 .2 43.8 10 43.8 22zm-3.6 0C40.2 12 32 3.8 22 3.8S3.8 12 3.8 22 12 40.2 22 40.2c10.1 0 18.2-8.2 18.2-18.2z"/><path d="M13.6 30.4c.4.4.8.5 1.2.5.4 0 .9-.2 1.2-.5l5.9-5.9 5.9 5.9c.4.4.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5L24.5 22l5.9-5.9c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L22 19.5l-5.9-5.9c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5.9 5.9-5.9 5.9c-.7.7-.7 1.8 0 2.5z"/>                        </svg>
                    </div> 
                </div>

                <div class="modal-body">
                    <div v-if="fetchingBody" class="modal-loader">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                                <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite"/>
                            </path>
                        </svg>
                    </div>

                    <template v-else>
                        <slot name="body">
                            <div v-html="body"></div>
                        </slot>
                    </template>
                </div>

                <div class="modal-footer"
                    v-show="(buttons && buttons.length) || this.$slots.footer"
                >
                    <slot name="footer">
                        <button v-for="(btn, index) in buttons"
                            :key="index"
                            @click="handleButtonClick(btn)"
                            v-text="btn.text ? btn.text : ''"
                            :type="btn.type ? btn.type : 'button'"
                            :class="btn.class ? btn.class : ''">
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: ''
            },
            dismissible: {
                type: Boolean,
                default: true
            },
            header: {
                type: Boolean,
                default: true
            }
        },

        data() {
            return {
                title: '',
                body: '',
                buttons: [],
                show: false,
                fetchingBody: false,
                canClose: this.dismissible,
                headerVisible: this.header
            }
        },

        created() {
            window.VoerroModalEvent.$on('show', (optionsOrId, options) => {
                this.showModal(optionsOrId, options);
            });

            window.VoerroModalEvent.$on('hide', (id) => {
                this.hideModalById(id);
            });
        },

        methods: {
            showModal(optionsOrId, options = null) {
                if ((! this.id && typeof optionsOrId === 'object') || this.id === optionsOrId) {
                    // Determine the options object
                    if (typeof optionsOrId === 'object') {                        
                        options = optionsOrId;
                    }
                    
                    // Apply the options
                    if (options) {                        
                        // Some options can only be set to dynamically generated
                        // modals and not to the inline modals
                        if (! this.id) {
                            this.title = options.title ? options.title : '';
                            this.body = options.body ? options.body : '';

                            if (options.bodyUrl) {
                                this.fetchingBody = true;

                                let request = new XMLHttpRequest();
                                request.addEventListener("load", this.onAjaxResponse);
                                request.open("GET", options.bodyUrl);
                                request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                                request.send();
                            }
                        }

                        this.buttons = options.buttons ? options.buttons : [];

                        this.canClose = typeof options.dismissible === 'boolean'
                            ? options.dismissible
                            : this.dismissible;

                        this.headerVisible = typeof options.header === 'boolean'
                            ? options.header
                            : this.header;  
                    }

                    // Show the modal
                    // $nextTick allows to show a new modal right after the
                    // previous one was closed
                    this.$nextTick(function () {
                        this.show = true;
                    });
                }
            },

            hideModal () {
                this.show = false;
            },

            tryHidingModal() {
                if (this.canClose === true) {
                    this.hideModal();
                }
            },

            hideModalById(id = null) {
                // Inline template
                if (id && this.id && id === this.id) {
                    this.show = false;
                } else if (!id && this.id === '') {
                    // Dynamically generated modal
                    this.show = false;
                }
            },

            handleButtonClick(btn) {
                if (btn.handler) {
                    btn.handler();
                }
                
                if (!btn.preventDefault) {
                    this.hideModal();
                }
            },

            onAjaxResponse ({ target }) {
                if (target.status === 200) {
                    this.body = target.response;
                } else {
                    console.error(`AJAX request to fetch the modal content returned an error: ${target.status} - ${target.statusText}`);

                    this.showModal({
                        title: 'Error',
                        body: 'Could not fetch the content of the modal.',
                        buttons: [{ text: 'Ok' }]
                    });
                }
                
                this.fetchingBody = false;
            }
        }
    }
</script>

<style lang="scss">
/**
* Basic modal CSS
*/
.modal-overlay,
.modal-box {
    z-index: 900;
}

.modal-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    /*background: rgba(0, 0, 0, .5);*/
}

.modal-sandbox {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
}

.modal-box {	
    display: flex;
    flex-direction: column;

    position: relative;
    min-width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, .9);
}

/**
* Transitions
*/
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

/**
* Styling
*/
.modal-header {
    display: flex;
    padding: 1rem 1rem 0 1rem;
}

.modal-title {
    font-weight: bold;
    flex: 1;
    margin: 0 0 40px 0;

    h2 {
      font-size: 50px;
      margin: 0;
    }
}

.modal-body {
    position: relative;
    overflow: auto;
    padding: 1rem;
}

.modal-footer {
    display: flex;
    flex-wrap: wrap;
    text-align: right;
    border-top: 1px solid #f0f0f0;
    padding: 0 !important;
}

.modal-footer > button {
    flex-grow: 1;
    cursor: pointer;

    border: none;
    text-decoration: none;
    
    border-radius: 0 0 .2rem .2rem;
    background: transparent;
    font-weight: bold;
}
.modal-footer > button:hover {
    background: #f0f0f0;
}

/* Close Button */
.close-modal {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: -.5rem;
    margin-left: .5rem;

    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
    color: #505050;
}

.close-modal > svg {
    fill: #FF4141;
    width: 44px;
    height: 44px;
}

.close-modal:hover > svg {
    fill: #7288A2;
}


/* Loading animated icon */
.modal-loader {
    display: flex;
    justify-content: center;

    width: 100%;
}
.modal-loader > svg {
    width: 3rem;
    height: 3rem;
    fill: #000;
}

/**
* Responsivness
*/
/* Phones */
@media only screen and (max-width: 768px) {
    .modal-box {
        min-width: 95%;
    }

    .modal-footer > button {
        padding: 1rem 1rem;
    }
}

/* Tablets */
@media only screen and (min-width: 769px) {
    .modal-footer > button {
        padding: .8rem 1rem;
    }
}

/* Desktops */
@media only screen and (min-width: 1024px) {
    .modal-footer > button {
        padding: .8rem 1rem;
    }
}
</style>
