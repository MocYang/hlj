/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/2 13:39
 * @File: config.js
 * @Description
 */

const polygonMaterials = [
  "opacity",
  "Opacity_cheng",
  "Opacity_hong",
  "Opacity_huang",
  "Opacity_lan",
  "Opacity_lv",
  "Opacity_qing"
]

export default {
  // 智慧留置室
  "A": {
    // 材质面名称
    polygon: 'Opacity_qing',
    areas: [
      // 区域面点位数组
      {
        "gid": "TEMP_SHAPE_D1218",
        "name": "TEMP_SHAPE_D1218",
        "type": 10300,
        "typename": "polygon",
        "style": "Opacity_cheng",
        "color": "#00ff00",
        "lighting": true,
        "linestyle": "",
        "attr": { "gid": "8d8e08972cc3790c" },
        "linewidth": 1,
        "scale": 1,
        "points": [{
          "x": -50239.4609375,
          "y": -18278.486328125,
          "z": 482.9420166015625
        }, {
          "x": -49567.79296875,
          "y": -18270.044821875,
          "z": 482.94195556640625
        }, {
          "x": -49571.35546875,
          "y": -21867.3984375,
          "z": 482.9420166015625
        }, {
          "x": -50243.61328125,
          "y": -21871.482421875,
          "z": 482.94219970703125
        }],
        "linecolor": "#00ff00",
        "linevisible": true,
        "onMousePoint": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "onMouse": false,
        "bmin": {
          "x": -50244.61328125,
          "y": -21872.482421875,
          "z": 482.94195556640625
        },
        "bmax": {
          "x": -49566.79296875,
          "y": -18269.044821875,
          "z": 482.144775390625
        }
      },
      {
        "gid": "TEMP_SHAPE_D1254",
        "name": "TEMP_SHAPE_D1254",
        "type": 10300,
        "typename": "polygon",
        "style": "Opacity_cheng",
        "color": "#00ff00",
        "lighting": true,
        "linestyle": "",
        "attr": { "gid": "10781645c6d2b570" },
        "linewidth": 1,
        "scale": 1,
        "points": [{
          "x": -49325.8515625,
          "y": -21148.76171875,
          "z": 482.94195556640625
        }, {
          "x": -48635.91015625,
          "y": -21146.318359375,
          "z": 482.94195556640625
        }, {
          "x": -48633.140625,
          "y": -21864.16796875,
          "z": 482.94195556640625
        }, {
          "x": -49323.66015625,
          "y": -21866.482421875,
          "z": 482.94207763671875
        }],
        "linecolor": "#00ff00",
        "linevisible": true,
        "onMousePoint": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "onMouse": false,
        "bmin": {
          "x": -49326.8515625,
          "y": -21867.482421875,
          "z": 482.94195556640625
        },
        "bmax": {
          "x": -48632.140625,
          "y": -21145.318359375,
          "z": 482.1559143066406
        }
      },
      {
        "gid": "TEMP_SHAPE_D1291",
        "name": "TEMP_SHAPE_D1291",
        "type": 10300,
        "typename": "polygon",
        "style": "Opacity_cheng",
        "color": "#00ff00",
        "lighting": true,
        "linestyle": "",
        "attr": { "gid": "c00054f70570721a" },
        "linewidth": 1,
        "scale": 1,
        "points": [{
          "x": -49320.8046875,
          "y": -18271.681640625,
          "z": 482.9420166015625
        }, {
          "x": -48627.71484375,
          "y": -18271.705078125,
          "z": 482.942138671875
        }, {
          "x": -48633.9296875,
          "y": -18630.08203125,
          "z": 482.9422607421875
        }, {
          "x": -49326.98828125,
          "y": -18632.19140625,
          "z": 482.94317626953125
        }],
        "linecolor": "#00ff00",
        "linevisible": true,
        "onMousePoint": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "onMouse": false,
        "bmin": {
          "x": -49327.98828125,
          "y": -18633.19140625,
          "z": 482.942138671875
        },
        "bmax": {
          "x": -48626.71484375,
          "y": -18270.68359375,
          "z": 482.16973876953125
        }
      }
    ]
  },
  // 普通留置室
  "B": {
    // 材质面名称
    polygon: 'Opacity_lv',
    areas: [
      // 区域面点位数组
    ]
  },
  // 女留置室
  "C": {
    // 材质面名称
    polygon: 'Opacity_huang',
    areas: [
      // 区域面点位数组
    ]
  },
  // 走读式谈话室
  "D": {
    // 材质面名称
    polygon: 'Opacity_lan',
    areas: [
      // 区域面点位数组
    ]
  },
  // 询问室 = 暂不加
  "E": {
    // 材质面名称
    polygon: 'Opacity_lan',
    areas: [
      // 区域面点位数组
    ]
  }
}
