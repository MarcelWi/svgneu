import svgAbschluss from '@/components/svg/schule/abschluss';
import svgBeginn from '@/components/svg/schule/beginn';
import svgVerlauf from '@/components/svg/schule/verlauf';
import svgLebensumstaende from '@/components/svg/schule/lebensumstaende';


const posts = {
  '1': {
    id: 1,
    title: 'sunt aut facere',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
  '2': {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
  },
  'schule': {
    id: 3,
    title: 'Schule',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    metatitle: 'Lebenslage',
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
              cx: '10',
              cy: '15'
            }
          },
          {
            path: 'Leistung-3',
            name: 'Leistung-3',
            meta: {
              title: 'Leistung 3',
              cx: '-35',
              cy: '1'
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
  'berufsausbildung': {
    id: 4,
    title: 'Berufsausbildung',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    metatitle: 'Lebenslage',
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
              cx: '10',
              cy: '15'
            }
          },
          {
            path: 'Leistung-3',
            name: 'Leistung-3',
            meta: {
              title: 'Leistung 3',
              cx: '-35',
              cy: '1'
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
  }
};

export function getPost (id, cb) {
  // fake an API request
  setTimeout(() => {
    if (posts[id]) {
      cb(null, posts[id])
    } else {
      cb(new Error('Post not found.'))
    }
  }, 100)
}
