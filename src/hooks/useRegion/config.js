/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/2 13:39
 * @File: config.js
 * @Description
 */

let colorGroup = ['#eba35b',  '#86e5ef','#42FFFF', '#6060FF']

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
    color: '#eba35b',

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
    polygon: 'Opacity_cheng',
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
      {"gid":"TEMP_SHAPE_D5859","name":"TEMP_SHAPE_D5859","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"4c1e3549b60c1cd2"},"linewidth":1,"scale":1,"points":[{"x":-49301.296875,"y":-18253.07421875,"z":492.94091796875},{"x":-48633.4609375,"y":-18242.248046875,"z":482.942138671875},{"x":-48650.0859375,"y":-21846.7265625,"z":482.9423828125},{"x":-49303.30078125,"y":-21851.341796875,"z":482.942138671875}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-49304.3046875,"y":-21852.341796875,"z":482.942138671875},"bmax":{"x":-48632.4609375,"y":-18241.248046875,"z":493.1436767578125}}
    ]
  },
  // 普通留置室
  B: {
    key: 'B',
    label: '普通留置',
    color: '#42FFFF',
    // 材质面名称
    polygon: 'Opacity_qing',

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
      {"gid":"TEMP_SHAPE_D6823","name":"TEMP_SHAPE_D6823","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"517f08d2be3e442b"},"linewidth":1,"scale":1,"points":[{"x":-48635.9375,"y":-18269.09375,"z":492.9423828125},{"x":-47267.65625,"y":-18270.927734375,"z":482.941650390625},{"x":-47253.25390625,"y":-19334.330078125,"z":482.942138671875},{"x":-46569.23828125,"y":-19329.0390625,"z":482.942138671875},{"x":-46569.86328125,"y":-17671.658203125,"z":482.94189453125},{"x":-48658.40234375,"y":-17671.57421875,"z":482.9423828125}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-48659.3984375,"y":-19335.306640625,"z":482.941650390625},"bmax":{"x":-46568.2578125,"y":-17670.677734375,"z":493.15911865234375}},
      {"gid":"TEMP_SHAPE_D6824","name":"TEMP_SHAPE_D6824","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"4efc676902f4c7e1"},"linewidth":1,"scale":1,"points":[{"x":-45656.75,"y":-17414.40625,"z":492.94189453125},{"x":-44209.0859375,"y":-17403.673828125,"z":482.942138671875},{"x":-44206.70703125,"y":-16811.32421875,"z":482.94189453125},{"x":-45654.5859375,"y":-16800.435546875,"z":482.94189453125}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-45657.75,"y":-17415.40625,"z":482.94189453125},"bmax":{"x":-44205.703125,"y":-16799.4375,"z":493.1488037109375}},
      {"gid":"TEMP_SHAPE_D6825","name":"TEMP_SHAPE_D6825","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"ce4141a524c4b16d"},"linewidth":1,"scale":1,"points":[{"x":-45655.57421875,"y":-18992.357421875,"z":492.943115234375},{"x":-45640.90234375,"y":-18269.63671875,"z":482.94189453125},{"x":-44202.6640625,"y":-18271.4609375,"z":482.94189453125},{"x":-44198.80859375,"y":-17673.15625,"z":482.942138671875},{"x":-46318.8984375,"y":-17662.318359375,"z":482.94189453125},{"x":-46318.95703125,"y":-18985.9375,"z":482.943115234375}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-46319.890625,"y":-18992.357421875,"z":482.94189453125},"bmax":{"x":-44198.80859375,"y":-17662.318359375,"z":493.158203125}},
      {"gid":"TEMP_SHAPE_D6827","name":"TEMP_SHAPE_D6827","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"86e7f482daf0b918"},"linewidth":1,"scale":1,"points":[{"x":-46312.79296875,"y":-22162.244140625,"z":492.942138671875},{"x":-45659.79296875,"y":-22160.421875,"z":482.942138671875},{"x":-45660.37890625,"y":-21152.861328125,"z":482.942138671875},{"x":-46318.640625,"y":-21144.04296875,"z":482.942138671875}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-46319.640625,"y":-22163.24609375,"z":482.942138671875},"bmax":{"x":-45658.796875,"y":-21143.04296875,"z":493.157470703125}},
      {"gid":"TEMP_SHAPE_D6828","name":"TEMP_SHAPE_D6828","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"22274f894d53a8cb"},"linewidth":1,"scale":1,"points":[{"x":-49321.49609375,"y":-22463.576171875,"z":492.94189453125},{"x":-47290.21484375,"y":-22459.228515625,"z":482.94189453125},{"x":-47280.4375,"y":-21865.603515625,"z":482.94189453125},{"x":-49324.55078125,"y":-21876.99609375,"z":482.942138671875}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-49325.546875,"y":-22464.576171875,"z":482.94189453125},"bmax":{"x":-47279.4375,"y":-21864.603515625,"z":493.1468200683594}},
      {"gid":"TEMP_SHAPE_D6829","name":"TEMP_SHAPE_D6829","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"ccc581398c6faab6"},"linewidth":1,"scale":1,"points":[{"x":-51026.875,"y":-22463.9765625,"z":492.94189453125},{"x":-49583.171875,"y":-22469.041015625,"z":482.942138671875},{"x":-49581.08203125,"y":-21862.443359375,"z":482.9423828125},{"x":-51021.5234375,"y":-21863.68359375,"z":482.942626953125}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-51027.875,"y":-22470.041015625,"z":482.942138671875},"bmax":{"x":-49580.078125,"y":-21861.443359375,"z":493.1488037109375}},
      {"gid":"TEMP_SHAPE_D6831","name":"TEMP_SHAPE_D6831","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"4e15d6480e5dae2a"},"linewidth":1,"scale":1,"points":[{"x":-51016.81640625,"y":-23318.61328125,"z":515.125244140625},{"x":-49585.3046875,"y":-23331.380859375,"z":483.717041015625},{"x":-49572.2734375,"y":-22714.205078125,"z":482.928955078125},{"x":-51029.73046875,"y":-22712.513671875,"z":482.942138671875}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-51030.7265625,"y":-23332.380859375,"z":482.928955078125},"bmax":{"x":-49571.2734375,"y":-22711.513671875,"z":515.34716796875}},
      {"gid":"TEMP_SHAPE_D6832","name":"TEMP_SHAPE_D6832","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"d8b58f9e41f19e79"},"linewidth":1,"scale":1,"points":[{"x":-48690.11328125,"y":-23326.640625,"z":492.9423828125},{"x":-47944.84765625,"y":-23310.044921875,"z":482.941650390625},{"x":-47938.45703125,"y":-22715.611328125,"z":482.94189453125},{"x":-48698.01171875,"y":-22710.525390625,"z":482.942138671875}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-48699.01171875,"y":-23327.640625,"z":482.941650390625},"bmax":{"x":-47937.45703125,"y":-22709.5234375,"z":493.15582275390625}},
      {"gid":"TEMP_SHAPE_D4426","name":"TEMP_SHAPE_D4426","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"cdd9d23bc6f06d2"},"linewidth":1,"scale":1,"points":[{"x":-47246.69140625,"y":-20418.109375,"z":492.942138671875},{"x":-47243.1171875,"y":-21862.09765625,"z":482.9422607421875},{"x":-46563.2421875,"y":-21867.46484375,"z":482.9420166015625},{"x":-46567.03125,"y":-20421.439453125,"z":482.9420166015625}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-47247.6953125,"y":-21868.46484375,"z":482.9420166015625},"bmax":{"x":-46562.2421875,"y":-20417.109375,"z":493.1490478515625}}
    ]
  },
  // 女留置室
  C: {
    key: 'C',
    label: '女留置',
    color: '#86e5ef',
    // 材质面名称
    polygon: 'Opacity_lan',

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
      {"gid":"TEMP_SHAPE_D6518","name":"TEMP_SHAPE_D6518","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"c2aa16b175e99474"},"linewidth":1,"scale":1,"points":[{"x":-51011.453125,"y":-17411.15234375,"z":492.94189453125},{"x":-49579.9453125,"y":-17401.822265625,"z":482.94189453125},{"x":-49574.24609375,"y":-16809.802734375,"z":482.942138671875},{"x":-51027.453125,"y":-16806.302734375,"z":482.9423828125}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-51028.453125,"y":-17412.15234375,"z":482.94189453125},"bmax":{"x":-49573.25,"y":-16805.30078125,"z":493.1488952636719}},
      {"gid":"TEMP_SHAPE_D6172","name":"TEMP_SHAPE_D6172","type":10300,"typename":"polygon","style":"SplineOrangeHighlight","color":"#00ff00","lighting":true,"linestyle":"","attr":{"gid":"1a52f715ce64939"},"linewidth":1,"scale":1,"points":[{"x":-51027.28125,"y":-18271.2421875,"z":492.942138671875},{"x":-49584.09375,"y":-18264.880859375,"z":482.9423828125},{"x":-49584.60546875,"y":-17678.021484375,"z":482.942138671875},{"x":-51031.109375,"y":-17670.44140625,"z":482.942138671875}],"linecolor":"#00ff00","linevisible":true,"onMousePoint":{"x":0,"y":0,"z":0},"onMouse":false,"bmin":{"x":-51032.109375,"y":-18272.2421875,"z":482.942138671875},"bmax":{"x":-49583.09375,"y":-17669.44140625,"z":493.1490783691406}}
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
