import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

import Home from '@/views/Pages/Home'
import AreaItemView from '@/views/Pages/AreaItemView'
// import ElementAfter from '@/views/Element/after'
// import ElementAnimate from '@/views/Element/animate'
// import ElementAppend from '@/views/Element/append'
// import ElementDrag from '@/views/Element/drag'
// import Editor from '@/views/Element/editor'
//
// import demo from '@/views/demo'
// import Post from '@/views/Pages/Post.vue'


import svgSchule from '@/components/svg/index/schule';
import svgBerufsausbildung from '@/components/svg/index/berufsausbildung';
import svgStudium from '@/components/svg/index/studium';
import svgWeiterbildung from '@/components/svg/index/weiterbildung';

import svgAbschluss from '@/components/svg/schule/abschluss';
import svgBeginn from '@/components/svg/schule/beginn';
import svgVerlauf from '@/components/svg/schule/verlauf';
import svgLebensumstaende from '@/components/svg/schule/lebensumstaende';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Home,
    meta: {
      title: 'Übersicht',
      metatitle: 'Lebenslage',
    },
  },
    {
      path: '/schule',
      name: 'schule',
      component: AreaItemView,
      meta: {
        id: 1,
        title: 'Schule',
        metatitle: 'Lebenslage',
        svg: svgSchule,
        py: 'top',
        cx: '0',
        cy: '50',
        pathes: ['berufsausbildung', 'studium']
      },
      children: [
        {
          path: '/schule/beginn',
          name: 'schule-beginn',
          meta: {
            idName: 'beginn',
            title: 'Beginn',
            svg: svgBeginn,
            cx: '150',
            cy: '270',
            pathes: ['verlauf', 'besondere-lebensumstaende']
          },
          children: [
            {
              path: 'Leistung-1',
              name: 'Leistung-1',
              meta: {
                title: 'Leistung 1',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'Leistung-2',
              name: 'Leistung-2',
              meta: {
                title: 'Leistung 2',
                cx: '25',
                cy: '25'
              }
            },
            {
              path: 'Leistung-3',
              name: 'Leistung-3',
              meta: {
                title: 'Leistung 3',
                cx: '-35',
                cy: '15'
              }
            },
            {
              path: 'Leistung-4',
              name: 'Leistung-4',
              meta: {
                title: 'Leistung 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/schule/verlauf',
          name: 'schule-verlauf',
          meta: {
            idName: 'verlauf',
            title: 'Verlauf',
            svg: svgVerlauf,
            cx: '250',
            cy: '250',
            pathes: ['abschluss', 'besondere-lebensumstaende']
          },
          children: [
            {
              path: 'verlauf-Leistung-1',
              name: 'verlauf-Leistung-1',
              meta: {
                title: 'Verlauf 1',
                cx: '-20',
                cy: '20'
              }
            },
            {
              path: 'verlauf-Leistung-2',
              name: 'verlauf-Leistung-2',
              meta: {
                title: 'verlauf 2',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-3',
              name: 'verlauf-Leistung-3',
              meta: {
                title: 'verlauf 3',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-4',
              name: 'verlauf-Leistung-4',
              meta: {
                title: 'verlauf 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/schule/besondere-lebensumstaende',
          name: 'schule-besondere-lebensumstaende',
          meta: {
            idName: 'besondere-lebensumstaende',
            title: 'Besondere Lebensumstände',
            svg: svgLebensumstaende,
            cx: '500',
            cy: '500'
          },
        },
        {
          path: '/schule/abschluss',
          name: 'schule-abschluss',
          meta: {
            idName: 'abschluss',
            title: 'Abschluss',
            svg: svgAbschluss,
            cx: '600',
            cy: '600',
            pathes: ['besondere-lebensumstaende']
          },
        },
      ]
    },
    {
      path: '/berufsausbildung',
      name: 'berufsausbildung',
      component: AreaItemView,
      meta: {
        id: 2,
        title: 'Berufsausbildung',
        metatitle: 'Lebenslage',
        svg: svgBerufsausbildung,
        py: 'bottom',
        cx: '250',
        cy: '150',
        pathes: ['studium', 'weiterbildung']
      },
      children: [
        {
          path: '/berufsausbildung/beginn',
          name: 'berufsausbildung-beginn',
          meta: {
            idName: 'beginn',
            title: 'Beginn',
            svg: svgBeginn,
            cx: '150',
            cy: '270',
            pathes: ['verlauf', 'abschluss']
          },
          children: [
            {
              path: 'Leistung-21',
              name: 'Leistung-21',
              meta: {
                title: 'Leistung 1',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'Leistung-22',
              name: 'Leistung-22',
              meta: {
                title: 'Leistung 2',
                cx: '10',
                cy: '15'
              }
            },
            {
              path: 'Leistung-23',
              name: 'Leistung-23',
              meta: {
                title: 'Leistung 3',
                cx: '-35',
                cy: '1'
              }
            },
            {
              path: 'Leistung-24',
              name: 'Leistung-24',
              meta: {
                title: 'Leistung 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/berufsausbildung/verlauf',
          name: 'berufsausbildung-verlauf',
          meta: {
            idName: 'verlauf',
            title: 'Verlauf',
            svg: svgVerlauf,
            cx: '250',
            cy: '250',
            pathes: ['abschluss', 'besondere-lebensumstaende']
          },
          children: [
            {
              path: 'verlauf-Leistung-31',
              name: 'verlauf-Leistung-31',
              meta: {
                title: 'Verlauf 1',
                cx: '-20',
                cy: '20'
              }
            },
            {
              path: 'verlauf-Leistung-32',
              name: 'verlauf-Leistung-32',
              meta: {
                title: 'verlauf 2',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-33',
              name: 'verlauf-Leistung-33',
              meta: {
                title: 'verlauf 3',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-34',
              name: 'verlauf-Leistung-34',
              meta: {
                title: 'verlauf 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/berufsausbildung/besondere-lebensumstaende',
          name: 'berufsausbildung-besondere-lebensumstaende',
          meta: {
            idName: 'besondere-lebensumstaende',
            title: 'Besondere Lebensumstände',
            svg: svgLebensumstaende,
            cx: '500',
            cy: '500'
          },
        },
        {
          path: '/berufsausbildung/abschluss',
          name: 'berufsausbildung-abschluss',
          meta: {
            idName: 'abschluss',
            title: 'Abschluss',
            svg: svgAbschluss,
            cx: '600',
            cy: '600',
            pathes: ['besondere-lebensumstaende']
          },
        },
      ]
    },
    {
      path: '/studium',
      name: 'studium',
      component: AreaItemView,
      meta: {
        id: 3,
        title: 'Studium',
        metatitle: 'Lebenslage',
        svg: svgStudium,
        cx: '500',
        cy: '500',
        pathes: ['weiterbildung']
      },
      children: [
        {
          path: '/studium/beginn',
          name: 'studium-beginn',
          meta: {
            idName: 'beginn',
            title: 'Beginn',
            svg: svgBeginn,
            cx: '150',
            cy: '270',
            pathes: ['verlauf', 'abschluss', 'besondere-lebensumstaende']
          },
          children: [
            {
              path: 'Leistung-41',
              name: 'Leistung-41',
              meta: {
                title: 'Leistung 1',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'Leistung-42',
              name: 'Leistung-42',
              meta: {
                title: 'Leistung 2',
                cx: '10',
                cy: '15'
              }
            },
            {
              path: 'Leistung-43',
              name: 'Leistung-43',
              meta: {
                title: 'Leistung 3',
                cx: '-35',
                cy: '1'
              }
            },
            {
              path: 'Leistung-44',
              name: 'Leistung-44',
              meta: {
                title: 'Leistung 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/studium/verlauf',
          name: 'studium-verlauf',
          meta: {
            idName: 'verlauf',
            title: 'Verlauf',
            svg: svgVerlauf,
            cx: '250',
            cy: '250',
            pathes: ['abschluss']
          },
          children: [
            {
              path: 'verlauf-Leistung-41',
              name: 'verlauf-Leistung-41',
              meta: {
                title: 'Verlauf 1',
                cx: '-20',
                cy: '20'
              }
            },
            {
              path: 'verlauf-Leistung-42',
              name: 'verlauf-Leistung-42',
              meta: {
                title: 'verlauf 2',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-43',
              name: 'verlauf-Leistung-43',
              meta: {
                title: 'verlauf 3',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-44',
              name: 'verlauf-Leistung-44',
              meta: {
                title: 'verlauf 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/studium/besondere-lebensumstaende',
          name: 'studium-besondere-lebensumstaende',
          meta: {
            idName: 'besondere-lebensumstaende',
            title: 'Besondere Lebensumstände',
            svg: svgLebensumstaende,
            cx: '500',
            cy: '500'
          },
        },
        {
          path: '/studium/abschluss',
          name: 'studium-abschluss',
          meta: {
            idName: 'abschluss',
            title: 'Abschluss',
            svg: svgAbschluss,
            cx: '600',
            cy: '600',
            pathes: ['besondere-lebensumstaende']
          },
        },
      ]
    },
    {
      path: '/weiterbildung',
      name: 'weiterbildung',
      component: AreaItemView,
      meta: {
        id: 4,
        title: 'Weiterbildung',
        metatitle: 'Lebenslage',
        svg: svgWeiterbildung,
        cx: '750',
        cy: '550'
      },
      children: [
        {
          path: '/weiterbildung/beginn',
          name: 'weiterbildung-beginn',
          meta: {
            idName: 'beginn',
            title: 'Beginn',
            svg: svgBeginn,
            cx: '150',
            cy: '270',
            pathes: ['verlauf', 'besondere-lebensumstaende']
          },
          children: [
            {
              path: 'Leistung-51',
              name: 'Leistung-51',
              meta: {
                title: 'Leistung 1',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'Leistung-52',
              name: 'Leistung-52',
              meta: {
                title: 'Leistung 2',
                cx: '10',
                cy: '15'
              }
            },
            {
              path: 'Leistung-53',
              name: 'Leistung-53',
              meta: {
                title: 'Leistung 3',
                cx: '-35',
                cy: '1'
              }
            },
            {
              path: 'Leistung-54',
              name: 'Leistung-54',
              meta: {
                title: 'Leistung 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/weiterbildung/verlauf',
          name: 'weiterbildung-verlauf',
          meta: {
            idName: 'verlauf',
            title: 'Verlauf',
            svg: svgVerlauf,
            cx: '250',
            cy: '250',
            pathes: ['abschluss', 'besondere-lebensumstaende']
          },
          children: [
            {
              path: 'verlauf-Leistung-51',
              name: 'verlauf-Leistung-51',
              meta: {
                title: 'Verlauf 1',
                cx: '-20',
                cy: '20'
              }
            },
            {
              path: 'verlauf-Leistung-52',
              name: 'verlauf-Leistung-52',
              meta: {
                title: 'verlauf 2',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-53',
              name: 'verlauf-Leistung-53',
              meta: {
                title: 'verlauf 3',
                cx: '1',
                cy: '1'
              }
            },
            {
              path: 'verlauf-Leistung-54',
              name: 'verlauf-Leistung-54',
              meta: {
                title: 'verlauf 4',
                cx: '1',
                cy: '1'
              }
            },
          ]
        },
        {
          path: '/weiterbildung/besondere-lebensumstaende',
          name: 'weiterbildung-besondere-lebensumstaende',
          meta: {
            idName: 'besondere-lebensumstaende',
            title: 'Besondere Lebensumstände',
            svg: svgLebensumstaende,
            cx: '500',
            cy: '500'
          },
        },
        {
          path: '/weiterbildung/abschluss',
          name: 'weiterbildung-abschluss',
          meta: {
            idName: 'abschluss',
            title: 'Abschluss',
            svg: svgAbschluss,
            cx: '600',
            cy: '600',
            pathes: ['besondere-lebensumstaende']
          },
        },
      ]
    },
    // {
    //   path: '/post/:id',
    //   name: 'Post',
    //   component: Post,
    //   meta: {
    //     id: 1,
    //     title: 'Schule',
    //     metatitle: 'Lebenslageee',
    //     svg: svgSchule,
    //     py: 'top',
    //     cx: '0',
    //     cy: '50',
    //     pathes: ['berufsausbildung', 'studium']
    //   },
    // },
    // {
    //   path: '/post/schule',
    //   name: 'Post',
    //   component: Post,
    //   meta: {
    //     id: 1,
    //     title: 'Schule',
    //     metatitle: 'Lebenslageee 343',
    //     svg: svgSchule,
    //     py: 'top',
    //     cx: '0',
    //     cy: '50',
    //     pathes: ['berufsausbildung', 'studium']
    //   },
    // }
    // { path: '/post/:id',
    //   component: Post
    // },

    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: demo,
    //   meta: {
    //     title: 'Element.after()'
    //   }
    // }
    // {
    //   path: '/element/after',
    //   name: 'element-after',
    //   component: ElementAfter,
    //   meta: {
    //     title: 'Element.after()'
    //   }
    // }, {
    //   path: '/element/animate',
    //   name: 'element-animate',
    //   component: ElementAnimate,
    //   meta: {
    //     title: 'Element.animate() 点击变色(动画)'
    //   }
    // }, {
    //   path: '/element/append',
    //   name: 'element-append',
    //   component: ElementAppend,
    //   meta: {
    //     title: 'Element.append()'
    //   }
    // }, {
    //   path: '/element/darg',
    //   name: 'element-darg',
    //   component: ElementDrag,
    //   meta: {
    //     title: 'Element.drag()'
    //   }
    // }, {
    //   path: '/editor',
    //   name: 'editor',
    //   component: Editor,
    //   meta: {
    //     title: 'Editor'
    //   }
    // }]
  ]
})
