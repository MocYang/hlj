/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/2 13:39
 * @File: config.js
 * @Description
 */

let colorGroup = ['#0381FF', '#42FFFF', '#4BFF9C', '#6060FF']

const polygonMaterials = [
  'opacity',
  'Opacity_cheng',
  'Opacity_hong',
  'Opacity_huang',
  'Opacity_lan',
  'Opacity_lv',
  'Opacity_qing',

  'Opacity_qianglv',
  'Opacity_qinglan',
  'Opacity_zi',
  'Opacity_tiankonglan'
]

export default {
  // 智慧留置室
  A: {
    key: 'A',
    label: '智慧留置',
    color: '#0381FF',

    // 定位坐标
    center: {
      pitch: 60.317466735839844,
      roll: 0.0000786629825597629,
      x: -47833.26171875,
      y: -19960.490234375,
      yaw: 178.67388916015625,
      z: 2701.837890625
    },

    // 材质面名称
    polygon: 'Opacity_tiankonglan',
    areas: [
      // 区域面点位数组
      {
        gid: 'TEMP_SHAPE_D1218',
        name: 'TEMP_SHAPE_D1218',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_cheng',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '8d8e08972cc3790c' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -50239.4609375,
            y: -18278.486328125,
            z: 482.9420166015625
          },
          {
            x: -49567.79296875,
            y: -18270.044821875,
            z: 482.94195556640625
          },
          {
            x: -49571.35546875,
            y: -21867.3984375,
            z: 482.9420166015625
          },
          {
            x: -50243.61328125,
            y: -21871.482421875,
            z: 482.94219970703125
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -50244.61328125,
          y: -21872.482421875,
          z: 482.94195556640625
        },
        bmax: {
          x: -49566.79296875,
          y: -18269.044821875,
          z: 482.144775390625
        }
      },
      {
        gid: 'TEMP_SHAPE_D1254',
        name: 'TEMP_SHAPE_D1254',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_cheng',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '10781645c6d2b570' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -49325.8515625,
            y: -21148.76171875,
            z: 482.94195556640625
          },
          {
            x: -48635.91015625,
            y: -21146.318359375,
            z: 482.94195556640625
          },
          {
            x: -48633.140625,
            y: -21864.16796875,
            z: 482.94195556640625
          },
          {
            x: -49323.66015625,
            y: -21866.482421875,
            z: 482.94207763671875
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -49326.8515625,
          y: -21867.482421875,
          z: 482.94195556640625
        },
        bmax: {
          x: -48632.140625,
          y: -21145.318359375,
          z: 482.1559143066406
        }
      },
      {
        gid: 'TEMP_SHAPE_D1291',
        name: 'TEMP_SHAPE_D1291',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_cheng',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: 'c00054f70570721a' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -49320.8046875,
            y: -18271.681640625,
            z: 482.9420166015625
          },
          {
            x: -48627.71484375,
            y: -18271.705078125,
            z: 482.942138671875
          },
          {
            x: -48633.9296875,
            y: -18630.08203125,
            z: 482.9422607421875
          },
          {
            x: -49326.98828125,
            y: -18632.19140625,
            z: 482.94317626953125
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -49327.98828125,
          y: -18633.19140625,
          z: 482.942138671875
        },
        bmax: {
          x: -48626.71484375,
          y: -18270.68359375,
          z: 482.16973876953125
        }
      }
    ]
  },
  // 普通留置室
  B: {
    key: 'B',
    label: '普通留置',
    color: '#4BFF9C',
    // 材质面名称
    polygon: 'Opacity_qianglv',

    // 定位坐标
    center: {
      pitch: 73.64998626708984,
      roll: 0.00018317214562557638,
      x: -45181.6953125,
      y: -19748.208984375,
      yaw: 179.98733520507812,
      z: 7118.1669921875
    },

    areas: [
      // 区域面点位数组

      {
        gid: 'TEMP_SHAPE_D54',
        name: 'TEMP_SHAPE_D54',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_huang',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: 'c52c2c49cd1c9cb3' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -50656.875,
            y: -21862.177734375,
            z: 482.94195556640625
          },
          {
            x: -50289.9296875,
            y: -21862.4765625,
            z: 482.94219970703125
          },
          {
            x: -50299.09765625,
            y: -22467.857421875,
            z: 482.94305419921875
          },
          {
            x: -50656.828125,
            y: -22466.552734375,
            z: 482.9429931640625
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -50657.875,
          y: -22468.857421875,
          z: 482.94219970703125
        },
        bmax: {
          x: -50288.9296875,
          y: -21861.177734375,
          z: 482.15850830078125
        }
      },
      {
        gid: 'TEMP_SHAPE_D141',
        name: 'TEMP_SHAPE_D141',
        type: 10300,
        typename: 'polygon',
        style: 'SplineOrangeHighlight',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '1c3798c177aa4e8d' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -50655.83203125,
            y: -22718.87890625,
            z: 482.94305419921875
          },
          {
            x: -50651.10546875,
            y: -23333.685546875,
            z: 482.94189453125
          },
          {
            x: -49566.78515625,
            y: -23334.62109375,
            z: 482.94195556640625
          },
          {
            x: -49575.71875,
            y: -22714.986328125,
            z: 482.928955078125
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -50656.83203125,
          y: -23335.62109375,
          z: 482.928955078125
        },
        bmax: {
          x: -49565.78515625,
          y: -22713.98828125,
          z: 482.15936279296875
        }
      },

      {
        gid: 'TEMP_SHAPE_D150',
        name: 'TEMP_SHAPE_D150',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: 'e971cafc5318642b' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -48690.25390625,
            y: -22721.4765625,
            z: 482.9420166015625
          },
          {
            x: -47945.7578125,
            y: -22721.9609375,
            z: 482.9420166015625
          },
          {
            x: -47941.328125,
            y: -23313.05859375,
            z: 482.9420166015625
          },
          {
            x: -48691.62890625,
            y: -23325.017578125,
            z: 482.94189453125
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -48692.625,
          y: -23326.015625,
          z: 482.94189453125
        },
        bmax: {
          x: -47940.328125,
          y: -22720.4765625,
          z: 482.15863037109375
        }
      },
      {
        gid: 'TEMP_SHAPE_D191',
        name: 'TEMP_SHAPE_D191',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '600dcba162cf08be' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -48660.921875,
            y: -21866.501953125,
            z: 482.94195556640625
          },
          {
            x: -47938.66796875,
            y: -21863.423828125,
            z: 482.9420166015625
          },
          {
            x: -47938.65625,
            y: -22463.75390625,
            z: 482.94293212890625
          },
          {
            x: -48673.06640625,
            y: -22465.98828125,
            z: 482.94207763671875
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -48674.0625,
          y: -22466.98828125,
          z: 482.9420166015625
        },
        bmax: {
          x: -47937.65625,
          y: -21862.42578125,
          z: 482.15863037109375
        }
      },
      {
        gid: 'TEMP_SHAPE_D233',
        name: 'TEMP_SHAPE_D233',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: 'e4a2676bd7c17dd5' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -47253.515625,
            y: -21512.380859375,
            z: 482.942138671875
          },
          {
            x: -46562.68359375,
            y: -21482.380859375,
            z: 482.94305419921875
          },
          {
            x: -46561.80078125,
            y: -21875.140625,
            z: 482.94189453125
          },
          {
            x: -47250.0390625,
            y: -21870.248046875,
            z: 482.9420166015625
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -47254.515625,
          y: -21876.140625,
          z: 482.94189453125
        },
        bmax: {
          x: -46560.796875,
          y: -21502.3828125,
          z: 482.17010498046875
        }
      },
      {
        gid: 'TEMP_SHAPE_D276',
        name: 'TEMP_SHAPE_D276',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '360af34ff7105686' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -46311.01171875,
            y: -21141.09765625,
            z: 482.9420166015625
          },
          {
            x: -45654.0546875,
            y: -21150.17578125,
            z: 482.9420166015625
          },
          {
            x: -45654.5234375,
            y: -21876.091796875,
            z: 482.94207763671875
          },
          {
            x: -46313.046875,
            y: -21874.2734375,
            z: 482.9420166015625
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -46314.046875,
          y: -21877.08984375,
          z: 482.9420166015625
        },
        bmax: {
          x: -45653.0546875,
          y: -21140.09765625,
          z: 482.1556701660156
        }
      },
      {
        gid: 'TEMP_SHAPE_D320',
        name: 'TEMP_SHAPE_D320',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '6cf6e738ae1dde34' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -47255.9375,
            y: -18272.0859375,
            z: 482.9420166015625
          },
          {
            x: -46562.859375,
            y: -18268.900390625,
            z: 482.942138671875
          },
          {
            x: -46564.44140625,
            y: -19348.263671875,
            z: 482.9420166015625
          },
          {
            x: -47255.9296875,
            y: -19349.857421875,
            z: 482.9420166015625
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -47256.9375,
          y: -19350.857421875,
          z: 482.9420166015625
        },
        bmax: {
          x: -46561.859375,
          y: -18267.900390625,
          z: 482.15130615234375
        }
      },
      {
        gid: 'TEMP_SHAPE_D365',
        name: 'TEMP_SHAPE_D365',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '9a88424e5f4d54d9' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -46314.234375,
            y: -18270.318359375,
            z: 482.9423828125
          },
          {
            x: -45638.34375,
            y: -18269.919921875,
            z: 482.9420166015625
          },
          {
            x: -45654.42578125,
            y: -18989.6953125,
            z: 482.9429931640625
          },
          {
            x: -46312,
            y: -18992.78515625,
            z: 482.943115234375
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -46315.234375,
          y: -18993.78515625,
          z: 482.9420166015625
        },
        bmax: {
          x: -45637.34375,
          y: -18268.91796875,
          z: 482.1562194824219
        }
      },
      {
        gid: 'TEMP_SHAPE_D411',
        name: 'TEMP_SHAPE_D411',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '97d3cbbdd5641b1a' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -44932.66015625,
            y: -17675.001953125,
            z: 482.94317626953125
          },
          {
            x: -44571.21875,
            y: -17669.947265625,
            z: 482.943115234375
          },
          {
            x: -44574.57421875,
            y: -18282.75390625,
            z: 482.94232177734375
          },
          {
            x: -44931.8046875,
            y: -18278.306640625,
            z: 482.94207763671875
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -44933.65625,
          y: -18283.75390625,
          z: 482.94207763671875
        },
        bmax: {
          x: -44570.21875,
          y: -17668.94921875,
          z: 482.1597900390625
        }
      },
      {
        gid: 'TEMP_SHAPE_D458',
        name: 'TEMP_SHAPE_D458',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: 'cb26cab6262d9f6f' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -45654.15234375,
            y: -16817.42578125,
            z: 482.94207763671875
          },
          {
            x: -44566.73828125,
            y: -16807.861328125,
            z: 482.94232177734375
          },
          {
            x: -44571.45703125,
            y: -17415.98046875,
            z: 482.94232177734375
          },
          {
            x: -45654.50390625,
            y: -17410.57421875,
            z: 482.94207763671875
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -45655.50390625,
          y: -17416.98046875,
          z: 482.94207763671875
        },
        bmax: {
          x: -44565.73828125,
          y: -16806.86328125,
          z: 482.158935546875
        }
      },
      {
        gid: 'TEMP_SHAPE_D506',
        name: 'TEMP_SHAPE_D506',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '1ee1bb760b3a000' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -48307.5078125,
            y: -17665.365234375,
            z: 482.94342041015625
          },
          {
            x: -48306.16796875,
            y: -18277.708984375,
            z: 482.94195556640625
          },
          {
            x: -47611.00390625,
            y: -18276.365234375,
            z: 482.9420166015625
          },
          {
            x: -47609.48828125,
            y: -17665.046875,
            z: 482.94281005859375
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -48308.5078125,
          y: -18278.7109375,
          z: 482.94195556640625
        },
        bmax: {
          x: -47608.4921875,
          y: -17664.046875,
          z: 482.1597595214844
        }
      }
    ]
  },
  // 女留置室
  C: {
    key: 'C',
    label: '女留置',
    color: '#42FFFF',
    // 材质面名称
    polygon: 'Opacity_qinglan',

    // 定位坐标
    center: {
      pitch: 88.98046875,
      roll: 0.001536002615466714,
      x: -50400.23046875,
      y: -17416.765625,
      yaw: -90.01382446289062,
      z: 2415.897216796875
    },

    areas: [
      // 区域面点位数组
      {
        gid: 'TEMP_SHAPE_D603',
        name: 'TEMP_SHAPE_D603',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: 'e2d0c146ee8d23cf' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -50657.9140625,
            y: -16815.45703125,
            z: 482.94232177734375
          },
          {
            x: -50656.20703125,
            y: -17415.8828125,
            z: 482.94281005859375
          },
          {
            x: -49245.9453125,
            y: -17413.830078125,
            z: 482.94195556640625
          },
          {
            x: -49248.78515625,
            y: -16805.205078125,
            z: 482.9420166015625
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -50658.9140625,
          y: -17416.8828125,
          z: 482.94195556640625
        },
        bmax: {
          x: -49244.9453125,
          y: -16804.203125,
          z: 482.15899658203125
        }
      },
      {
        gid: 'TEMP_SHAPE_D653',
        name: 'TEMP_SHAPE_D653',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '3e95f6d6682711b' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -50654.75,
            y: -17668.6328125,
            z: 482.94287109375
          },
          {
            x: -50650.69140625,
            y: -18270.748046875,
            z: 482.94232177734375
          },
          {
            x: -50287.20703125,
            y: -18278.70703125,
            z: 482.9420166015625
          },
          {
            x: -50293.94140625,
            y: -17666.365234375,
            z: 482.94195556640625
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -50655.75,
          y: -18279.70703125,
          z: 482.94195556640625
        },
        bmax: {
          x: -50286.203125,
          y: -17665.36328125,
          z: 482.15948486328125
        }
      }
    ]
  },
  // 走读式谈话室
  D: {
    key: 'D',
    label: '走读式谈话室',
    color: '#6060FF',
    // 材质面名称
    polygon: 'Opacity_zi',

    // 定位坐标
    center: {
      pitch: 83.81399536132812,
      roll: 0.0004912344156764448,
      x: -45045.23828125,
      y: -22275.296875,
      yaw: -90.57567596435547,
      z: 2539.0126953125
    },

    areas: [
      // 区域面点位数组
      {
        gid: 'TEMP_SHAPE_D754',
        name: 'TEMP_SHAPE_D754',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '203e7ac3f94216ad' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -45654.26953125,
            y: -21867.421875,
            z: 482.1422119140625
          },
          {
            x: -45655.36328125,
            y: -22468.232421875,
            z: 482.9420166015625
          },
          {
            x: -44204.10546875,
            y: -22466.572265625,
            z: 482.942138671875
          },
          {
            x: -44207.57421875,
            y: -21858.37890625,
            z: 482.94189453125
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -45656.36328125,
          y: -22469.23046875,
          z: 482.94189453125
        },
        bmax: {
          x: -44203.10546875,
          y: -21857.37890625,
          z: 482.3758239746094
        }
      },
      {
        gid: 'TEMP_SHAPE_D806',
        name: 'TEMP_SHAPE_D806',
        type: 10300,
        typename: 'polygon',
        style: 'Opacity_hong',
        color: '#00ff00',
        lighting: true,
        linestyle: '',
        attr: { gid: '5af67ed8ae170365' },
        linewidth: 1,
        scale: 1,
        points: [
          {
            x: -45655.05859375,
            y: -22724.01953125,
            z: 482.94195556640625
          },
          {
            x: -45652.58984375,
            y: -23325.37109375,
            z: 482.94189453125
          },
          {
            x: -44209.66796875,
            y: -23330.068359375,
            z: 482.94183349609375
          },
          {
            x: -44212.67578125,
            y: -22724.52734375,
            z: 482.94195556640625
          }
        ],
        linecolor: '#00ff00',
        linevisible: true,
        onMousePoint: {
          x: 0,
          y: 0,
          z: 0
        },
        onMouse: false,
        bmin: {
          x: -45656.05859375,
          y: -23331.06640625,
          z: 482.94183349609375
        },
        bmax: {
          x: -44208.66796875,
          y: -22723.01953125,
          z: 482.1585998535156
        }
      }
    ]
  },
  // 询问室 = 暂不加
  E: {
    key: 'E',
    color: '#6060FF',
    // 材质面名称
    polygon: 'Opacity_lan',
    center: null,
    areas: [
      // 区域面点位数组
    ]
  }
}
