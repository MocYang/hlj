# 简介

纪委看板后台组件服务接口

组件端口:17009

接口地址前缀:/jwvisual/service

例如:http://127.0.0.1:17009/jwvisual/service/api/jwvisual/v3/detain/getMindDetainRoomInfo

**联系人：**<zhangyuanpeng5@hikvison.com.cn>



环境监测组件服务接口

组件端口:17163

接口地址前缀:/dwc-web/service/rs

例如:http://127.0.0.1:17163/dwc-web/service/rs/api/v2/environment/searchByRoomCode

联系人：<jiaopeng@hikvison.com.cn>

# 接口说明

## bff-core接口V2

### 根据房间设备编码，获取浏览url

**接口说明**

> 根据房间设备编码，获取浏览url<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/bff-core/getPlaybackUrlByCameraIndexCode

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| cameraName | body | string | 否 | 监控点名称 |
| url | body | string | 否 | 回放总rtsp url |
| uuid | body | string | 否 | 标记本次查询的全部标识符，用于查询分片时的多次查询 |
| list | body | object[] | 否 | 开始查询时间（IOS8601格式yyyy-MM-dd'T'HH:mm:ss.SSSzzz，和结束时间相差不超过三天） |
| +beginTime | body | string | 否 | 片段开始时间 |
| +endTime | body | string | 否 | 片段结束时间 |
| +siz | body | long | 否 | 录像片段大小（单位：Byte） |
**请求参数举例**
```json
{
  "list": [
    {}
  ]
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| type | body | integer | 是 | 结果类型：0成功;-1错误，系统未处理;-2异常，系统已处理 |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +cameraName | body | string | 否 | 监控点名称 |
| +url | body | string | 否 | 回放总rtsp url |
| +uuid | body | string | 否 | 标记本次查询的全部标识符，用于查询分片时的多次查询 |
| +list | body | object[] | 否 | 开始查询时间（IOS8601格式yyyy-MM-dd'T'HH:mm:ss.SSSzzz，和结束时间相差不超过三天） |
| ++beginTime | body | string | 否 | 片段开始时间 |
| ++endTime | body | string | 否 | 片段结束时间 |
| ++siz | body | long | 否 | 录像片段大小（单位：Byte） |
**返回参数举例**
```json
{
  "type": 0,
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "list": [
      {}
    ]
  }
}
```

<br><br>


### 根据房间设备编码，获取浏览url

**接口说明**

> 根据房间设备编码，获取浏览url<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/bff-core/getPreviewUrl

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| cameraIndexCode | body | string | 否 | 监控点编码 |
| streamType | body | integer | 否 | 码流类型(0-主码流,1-子码流) |
| protocol | body | string | 否 | 协议类型（rtsp-rtsp协议,rtmp-rtmp协议,hls-hLS协议），未填写为rtsp协议 |
| transmode | body | integer | 否 | 协议类型( 0-udp，1-tcp) |
| expand | body | string | 否 | 拓展字段 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| type | body | integer | 是 | 结果类型：0成功;-1错误，系统未处理;-2异常，系统已处理 |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +url | body | string | 否 | 视频浏览url |
**返回参数举例**
```json
{
  "type": 0,
  "code": "0",
  "msg": "SUCCESS",
  "data": {}
}
```

<br><br>


## 乌兰察布图样三维接口

### 留置房间使用率趋势

**接口说明**

> 留置房间使用率趋势<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getRoomUseTrend

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| timeUnit | body | integer | 否 | 查询时间单位，1：日；2：月；3：年 <br> 对应查询范围15天，12月，3年 |
| endTime | body | long | 否 | 查询结束时间戳，未开始默认为当前时间 |
**请求参数举例**
```json
{
  "timeUnit": 1,
  "endTime": 1
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 获取三年运行情况

**接口说明**

> 获取三年运行情况：留置、专案组、会诊、就医、讯问、谈话<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/get3YearStatistics

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +detainPeploNum | body | object[] | 否 | 留置人数 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
| +groupNum | body | object[] | 否 | 专案组数量 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
| +consultationNum | body | object[] | 否 | 会诊次数 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
| +treatmentNum | body | object[] | 否 | 就医次数 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
| +interrogateNum | body | object[] | 否 | 讯问次数 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
| +talkNum | body | object[] | 否 | 谈话次数 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "detainPeploNum": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ],
    "groupNum": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ],
    "consultationNum": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ],
    "treatmentNum": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ],
    "interrogateNum": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ],
    "talkNum": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ]
  }
}
```

<br><br>


### 留置人员身体状态统计

**接口说明**

> 留置人员身体状态统计<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getPhysicalInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +normal | body | long | 否 | 留置人员正常数量 |
| +abnormality | body | long | 否 | 留置人员异常数量 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "normal": 12,
    "abnormality": 10
  }
}
```

<br><br>


### 留置分析--留置总数

**接口说明**

> 留置分析--留置总数。<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getTotalTargetInfo

**请求方法**

> get

**数据提交方式**

> \

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| year | query | string | 否 | 查询年份，不传表示查询全部，例如：2021 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +totalNum | body | long | 否 | 总人数 |
| +menNum | body | long | 否 | 男性数量 |
| +womenNum | body | long | 否 | 女性数量 |
| +countyInvesGroupNum | body | long | 否 | 旗县区 |
| +cityInvesGroupNum | body | long | 否 | 市级 |
| +provinceInvesGroupNum | body | long | 否 | 自治区 |
| +centerInvesGroupNum | body | long | 否 | 中纪 |
| +countyPercent | body | long | 否 | 旗县区百分比 |
| +cityPercent | body | long | 否 | 市级百分比 |
| +provincePercent | body | long | 否 | 自治区百分比 |
| +centerPercent | body | long | 否 | 中纪百分比 |
| +jobGrade3And4Num | body | long | 否 | 厅局级数量 |
| +jobGrade5And6Num | body | long | 否 | 县处级人数 |
| +jobGrade7And8Num | body | long | 否 | 乡科级人数 |
| +jobGradeOtherNum | body | long | 否 | 其他职级人数 |
| +jobGrade3And4Percent | body | long | 否 | 厅局级百分比(四舍五入计算,大于0不足1%补充为1%) |
| +jobGrade5And6Percent | body | long | 否 | 县处级百分比(四舍五入计算,大于0不足1%补充为1%) |
| +jobGrade7And8Percent | body | long | 否 | 乡科级百分比(四舍五入计算,大于0不足1%补充为1%) |
| +jobGradeOtherPercent | body | long | 否 | 其他职级百分比(100-jobGrade3Num-jobGrade4Num-jobGrade5Percent) |
| +relieveProcuratorateNum | body | long | 否 | 留置对象移交去向数量--检察院 |
| +relievePoliceNum | body | long | 否 | 留置对象移交去向数量--公安 |
| +relieveFamilyNum | body | long | 否 | 留置对象移交去向数量--家属 |
| +relieveOtherNum | body | long | 否 | 留置对象移交去向数量--其他 |
| +relieveProcuratoratePercent | body | long | 否 | 留置对象移交去向百分比--检察院 |
| +relievePolicePercent | body | long | 否 | 留置对象移交去向百分比--公安 |
| +relieveFamilyPercent | body | long | 否 | 留置对象移交去向百分比--家属 |
| +relieveOtherPercent | body | long | 否 | 留置对象移交去向百分比--其他 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "totalNum": 48,
    "menNum": 23,
    "womenNum": 15,
    "countyInvesGroupNum": 10,
    "cityInvesGroupNum": 5,
    "provinceInvesGroupNum": 4,
    "centerInvesGroupNum": 1,
    "countyPercent": 10,
    "cityPercent": 5,
    "provincePercent": 4,
    "centerPercent": 1,
    "jobGrade3And4Num": 1,
    "jobGrade5And6Num": 3,
    "jobGrade7And8Num": 3,
    "jobGradeOtherNum": 10,
    "jobGrade3And4Percent": 1,
    "jobGrade5And6Percent": 3,
    "jobGrade7And8Percent": 3,
    "jobGradeOtherPercent": 10,
    "relieveProcuratorateNum": 10,
    "relievePoliceNum": 10,
    "relieveFamilyNum": 10,
    "relieveOtherNum": 10,
    "relieveProcuratoratePercent": 10,
    "relievePolicePercent": 10,
    "relieveFamilyPercent": 10,
    "relieveOtherPercent": 10
  }
}
```

<br><br>


### 讯问分析-讯问次数

**接口说明**

> 05_讯问分析-讯问次数<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getInterrogateAnalysis

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| timeUnit | body | integer | 否 | 查询时间单位，1：日；2：月；3：年 <br> 对应查询范围15天，12月，3年 |
| endTime | body | long | 否 | 查询结束时间戳，未开始默认为当前时间 |
**请求参数举例**
```json
{
  "timeUnit": 1,
  "endTime": 1
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 谈话分析-谈话次数

**接口说明**

> 06_谈话分析-谈话次数<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getTalkAnalysis

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| timeUnit | body | integer | 否 | 查询时间单位，1：日；2：月；3：年 <br> 对应查询范围15天，12月，3年 |
| endTime | body | long | 否 | 查询结束时间戳，未开始默认为当前时间 |
**请求参数举例**
```json
{
  "timeUnit": 1,
  "endTime": 1
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 讯问分析-违规次数

**接口说明**

> 07_讯问分析-违规次数<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getViolationAnalysis

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| timeUnit | body | integer | 否 | 查询时间单位，1：日；2：月；3：年 <br> 对应查询范围15天，12月，3年 |
| endTime | body | long | 否 | 查询结束时间戳，未开始默认为当前时间 |
**请求参数举例**
```json
{
  "timeUnit": 1,
  "endTime": 1
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 讯问分析-专案组

**接口说明**

> 08_讯问分析-专案组:attr分为“留置人数”，“讯问总次数”，name为专案组名称<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getGroupAnalysis

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| pageNum | body | integer | 否 | 查询页面，默认为0，表示但是当前专案组，之后从1开始，每页10个专案组，按时时间倒序 |
**请求参数举例**
```json
{
  "pageNum": 0
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 留置人员日常巡检列表

**接口说明**

> 留置人员日常巡检列表。<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getPhysicalAbnormalityList

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +suspectNo | body | string | 否 | 对象代号 |
| +age | body | string | 否 | 年龄 |
| +focusInfos | body | string[] | 否 | 重点关注信息 |
| +visitTime | body | string | 否 | 巡检时间 |
| +bp | body | object | 否 | 血压BP，单位mmHg |
| ++sbp | body | string | 否 | 收缩压 |
| ++dbp | body | string | 否 | 舒张压 |
| +hp | body | string | 否 | 心率HP，单位次/分 |
| +temperature | body | string | 否 | 体温T，单位℃ |
| +focus | body | integer | 否 | 重点关注，0否，是，默认否 |
| +accident | body | string | 否 | 突发事件 |
| +summary | body | string | 否 | 巡诊总结 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "focusInfos": [
        "头痛",
        "发烧"
      ],
      "bp": {
        "sbp": "113",
        "dbp": "78"
      },
      "hp": "80",
      "temperature": "37.7",
      "focus": 0,
      "accident": "腹泻",
      "summary": "体温偏高"
    }
  ]
}
```

<br><br>


### 讯问分析-违规总次数

**接口说明**

> 11_讯问分析-违规总次数<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getViolationAnalysisNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +num | body | long | 否 | 数量 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "num": 10
  }
}
```

<br><br>


### 云台操作

**接口说明**

> 12_云台操作<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/video/controlling

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| cameraIndexCode | body | string | 否 | 监控点编码 |
| action | body | integer | 否 | 开始或停止操作(1 开始 0 停止) |
| command | body | string | 否 | 控制命令(不区分大小写) 说明： LEFT 左转 RIGHT 右转 UP 上转 DOWN 下转 ZOOM_IN 焦距变大 ZOOM_OUT 焦距变小 LEFT_UP 左上 LEFT_DOWN 左下 RIGHT_UP 右上 RIGHT_DOWN 右下 FOCUS_NEAR 焦点前移 FOCUS_FAR 焦点后移 IRIS_ENLARGE 光圈扩大 IRIS_REDUCE 光圈缩小 以下命令presetIndex不可为空： GOTO_PRESET到预置点 |
| speed | body | integer | 否 | 云台速度(取值范围1-100,默认40) |
| presetIndex | body | integer | 否 | 预置点编号(取值范围为1-128) |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | string | 否 | 返回数据封装 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS"
}
```

<br><br>


### 获取讯问室详情

**接口说明**

> 13_获取讯问室详情<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getInterrogateRoomUseInfo

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码 |
**请求参数举例**
```json
{
  "roomIndexCode": "f47b0356537f4611a219065e2c8a7"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +roomIndexCode | body | string | 否 | 房间编码 |
| +roomName | body | string | 否 | 房间名称 |
| +status | body | string | 否 | 状态 |
| +caseName | body | string | 否 | 案件名称 |
| +suspectIndexCode | body | string | 否 | 留置对象IndexCode |
| +suspectNo | body | string | 否 | 留置对象代号 |
| +beginTime | body | string | 否 | 讯问登记时间 |
| +continuedTime | body | string | 否 | 讯问持续时间 |
| +interrogationMembers | body | string | 否 | 讯问人 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "roomIndexCode": "f47b0356537f4611a219065e2c8a7",
    "roomName": "讯问室1",
    "status": "0=空闲中，1=讯问中",
    "caseName": "20210717案件",
    "suspectIndexCode": "f47b0356537f4611a219065e2c8a7",
    "suspectNo": "张三",
    "beginTime": "yyyy-MM-dd HH:mm:ss",
    "continuedTime": "xx小时xx分钟",
    "interrogationMembers": "李四、王五"
  }
}
```

<br><br>


### getToken

**接口说明**

> 获取Token<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getToken

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | string | 否 | 返回数据封装 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS"
}
```

<br><br>


### 讯问分析-专案组

**接口说明**

> 08_讯问分析-专案组:attr分为“留置人数”，“讯问总次数”，name为专案组名称<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getGroupAnalysisByYear

**请求方法**

> get

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| year | query | string | 否 | 查询年份，例如：2021 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 讯问分析-讯问次数

**接口说明**

> 05_讯问分析-讯问次数<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getInterrogateAnalysisByYear

**请求方法**

> get

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| year | query | string | 否 | 查询年份，例如：2021 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 谈话分析-谈话次数

**接口说明**

> 06_谈话分析-谈话次数<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getTalkAnalysisByYear

**请求方法**

> get

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| year | query | string | 否 | 查询年份，例如：2021 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 讯问分析-违规次数

**接口说明**

> 07_讯问分析-违规次数<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/ulanqab3D/getViolationAnalysisByYear

**请求方法**

> get

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| year | query | string | 否 | 查询年份，例如：2021 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


## 工作人员查询接口

### 人员统计

**接口说明**

> 用于统计园区内个岗位人数。看护人员人数:guardNum;医务人员人数:medicalWorkersNum;后勤人员人数:supportNum;专案组人数:invesGroupNum<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/staff/getPersonnelNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +guardNum | body | long | 否 | 看护人员人数 |
| +medicalWorkersNum | body | long | 否 | 医务人员人数 |
| +supportNum | body | long | 否 | 后勤人员人数 |
| +invesGroupPeopleNum | body | long | 否 | 专案组人数 |
| +educationNum | body | long | 否 | 廉政中心人数 |
| +leaderNum | body | long | 否 | 领导人员 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "guardNum": 0,
    "medicalWorkersNum": 0,
    "supportNum": 0,
    "invesGroupPeopleNum": 0,
    "educationNum": 30,
    "leaderNum": 10
  }
}
```

<br><br>


### 办案组概况

**接口说明**

> 查询目前在办案件的办案组概况:办案组编号,组名,组长,安全员,留置人数,所属部门<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/staff/getInvesGroupInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +groupIndexCode | body | string | 否 | 调查组编号 |
| +groupName | body | string | 否 | 调查组名称 |
| +deptIndexCode | body | string | 否 |
| +deptName | body | string | 否 | 部门名称 |
| +caseNo | body | string | 否 | 案件号 |
| +groupleader | body | string | 否 | 组长 |
| +groupleaderTel | body | string | 否 | 组长电话 |
| +groupSafety | body | string | 否 | 安全员 |
| +groupSafetyTel | body | string | 否 | 安全员电话 |
| +groupPersonNameList | body | string[] | 否 | 专案组成员列表 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "groupIndexCode": "6728362768d647109b24fb2ab39ab456",
      "groupName": "张某专案组",
      "deptName": "审查调查室",
      "caseNo": "AJ0000001",
      "groupleader": "李四",
      "groupleaderTel": "13600000000",
      "groupSafety": "13300000000",
      "groupSafetyTel": "王五"
    }
  ]
}
```

<br><br>


### 场所信息

**接口说明**

> 用于统计园区内个岗位人数。<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/staff/getPlaceInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +policeTotal | body | string | 否 | 武警总人数 |
| +policeProportion | body | string | 否 | 武警看护比例 |
| +swatTotal | body | string | 否 | 特警总人数 |
| +swatProportion | body | string | 否 | 特警看护比例 |
| +doctor | body | string | 否 | 医生数量 |
| +nurse | body | string | 否 | 护士数量 |
| +ambulance | body | string | 否 | 救护车数量 |
| +equipment | body | string | 否 | 急救设备 |
| +educationTotal | body | string | 否 | 廉政教育中心总人数 |
| +leader | body | string | 否 | 廉政教育中心中心领导 |
| +synthetical | body | string | 否 | 廉政教育中心中心综合科 |
| +protection | body | string | 否 | 廉政教育中心中心监护科 |
| +custody | body | string | 否 | 廉政教育中心中心技防科 |
| +security | body | string | 否 | 廉政教育中心中心安防科 |
| +assets | body | string | 否 | 廉政教育中心中心资产科 |
| +guarantee | body | string | 否 | 廉政教育中心中心保障科 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "policeTotal": "24",
    "policeProportion": "男5包1,女四包1",
    "swatTotal": "24",
    "swatProportion": "男5包1,女四包1",
    "doctor": "2",
    "nurse": "2",
    "ambulance": "2",
    "equipment": "1",
    "educationTotal": "30",
    "leader": "4",
    "synthetical": "30",
    "protection": "30",
    "custody": "30",
    "security": "30",
    "assets": "30",
    "guarantee": "30"
  }
}
```

<br><br>


### 值班人员信息

**接口说明**

> 返回值班人员名称及照片。<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/staff/getDutyInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +personName | body | string | 否 | 人员名称 |
| +photoUrl | body | string | 否 | 图片地址 |
| +roomName | body | string | 否 | 留置室名称 |
| +dutyTimes | body | string | 否 | 值班时间 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "personName": "张三",
      "photoUrl": "http://10.19.121.119:6120/pic",
      "roomName": "留置室1",
      "dutyTimes": "2021-07-23 12:23:23 ~ 2021-07-23 14:23:23"
    }
  ]
}
```

<br><br>


### 专案组信息统计

**接口说明**

> 专案组信息统计。<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/staff/getInvesGroupStatistics

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +countyInvesGroupNum | body | long | 否 | 旗县区 |
| +cityInvesGroupNum | body | long | 否 | 市级 |
| +provinceInvesGroupNum | body | long | 否 | 内纪 |
| +centerInvesGroupNum | body | long | 否 | 中纪 |
| +otherInvesGroupNum | body | long | 否 | 其他 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "countyInvesGroupNum": 10,
    "cityInvesGroupNum": 5,
    "provinceInvesGroupNum": 4,
    "centerInvesGroupNum": 1,
    "otherInvesGroupNum": 1
  }
}
```

<br><br>


### 人员统计

**接口说明**

> 用于统计园区内个岗位人数。看护人员人数:guardNum;医务人员人数:medicalWorkersNum;后勤人员人数:supportNum;专案组人数:invesGroupNum<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/staff/getPersonnelNumChart

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 获取所有房间使用情况

**接口说明**

> 获取所有房间使用情况<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/visualFor3D/getAllUseRoom

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +roomIndexCode | body | string | 是 | 房间编号 |
| +roomName | body | string | 是 | 房间名称 |
| +roomType | body | string | 是 | 房间类型，见附录D.房间类型（roomType） |
| +roomTypeName | body | string | 是 | 房间类型名称，见附录D.房间类型（roomType） |
| +roomRemark | body | string | 否 | 房间备注信息 |
| +roomStatus | body | string | 否 | 房间状态信息 0=空闲,1=再用 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "roomIndexCode": "17feb07c20784496864aad0276124135",
      "roomName": "岗哨室-谈话",
      "roomType": "roomType.2005",
      "roomTypeName": "岗哨室",
      "roomRemark": "备注",
      "roomStatus": "备注"
    }
  ]
}
```

<br><br>


## 工作人员查询接口v3

### 人数详情

**接口说明**

> 场所介绍-人数详情:专案组人数,廉政教育中心人数,公安看护人数,医护人数,案管人数,后勤保障人数,审理人数,医生数量,护士数量,急救车数量,急救设备<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/staff/getPersonnelNumberDetails

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +detainTotal | body | long | 否 | 总留置房间数量 |
| +detainUseTotal | body | long | 否 | 现有留置数量 |
| +invesGroupNum | body | long | 否 | 专案组数量 |
| +invesGroupPeopleNum | body | long | 否 | 专案组人数 |
| +educationNum | body | long | 否 | 廉政中心人数 |
| +policeNum | body | long | 否 | 公安看护数量 |
| +hearNum | body | long | 否 | 审理人数 |
| +supportNum | body | long | 否 | 案管数量 |
| +doctorNum | body | long | 否 | 医生数量 |
| +nurseNum | body | long | 否 | 护士数量 |
| +doctorAndNurseNum | body | long | 否 | 医护人数 |
| +ambulanceNum | body | long | 否 | 救护车数量 |
| +equipmentNum | body | long | 否 | 急救设备 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "detainTotal": 20,
    "detainUseTotal": 0,
    "invesGroupNum": 0,
    "invesGroupPeopleNum": 0,
    "educationNum": 30,
    "policeNum": 30,
    "hearNum": 30,
    "supportNum": 30,
    "doctorNum": 10,
    "nurseNum": 10,
    "doctorAndNurseNum": 10,
    "ambulanceNum": 10,
    "equipmentNum": 10
  }
}
```

<br><br>


### 留置人员详情看板-调查组信息

**接口说明**

> 留置人员详情看板-调查组信息:承办部门,组长姓名,组长电话,安全员名称,安全员电话,成名名单列表<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/staff/getInvestigateGroupInfo

**请求方法**

> post

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +groupIndexCode | body | string | 否 | 调查组编号 |
| +groupName | body | string | 否 | 调查组名称 |
| +deptIndexCode | body | string | 否 |
| +deptName | body | string | 否 | 部门名称 |
| +caseNo | body | string | 否 | 案件号 |
| +groupleader | body | string | 否 | 组长 |
| +groupleaderTel | body | string | 否 | 组长电话 |
| +groupSafety | body | string | 否 | 安全员 |
| +groupSafetyTel | body | string | 否 | 安全员电话 |
| +groupPersonNameList | body | string[] | 否 | 专案组成员列表 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "groupIndexCode": "6728362768d647109b24fb2ab39ab456",
    "groupName": "张某专案组",
    "deptName": "审查调查室",
    "caseNo": "AJ0000001",
    "groupleader": "李四",
    "groupleaderTel": "13600000000",
    "groupSafety": "13300000000",
    "groupSafetyTel": "王五"
  }
}
```

<br><br>


### 留置人员详情看板-交互-调查组信息列表

**接口说明**

> 留置人员详情看板-交互-调查组信息列表:承办部门,组长姓名,组长电话,安全员名称,安全员电话,成名名单列表<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/staff/getInvestigateGroupList

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +groupIndexCode | body | string | 否 | 调查组编号 |
| +groupName | body | string | 否 | 调查组名称 |
| +deptIndexCode | body | string | 否 |
| +deptName | body | string | 否 | 部门名称 |
| +caseNo | body | string | 否 | 案件号 |
| +groupleader | body | string | 否 | 组长 |
| +groupleaderTel | body | string | 否 | 组长电话 |
| +groupSafety | body | string | 否 | 安全员 |
| +groupSafetyTel | body | string | 否 | 安全员电话 |
| +groupPersonNameList | body | string[] | 否 | 专案组成员列表 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "groupIndexCode": "6728362768d647109b24fb2ab39ab456",
      "groupName": "张某专案组",
      "deptName": "审查调查室",
      "caseNo": "AJ0000001",
      "groupleader": "李四",
      "groupleaderTel": "13600000000",
      "groupSafety": "13300000000",
      "groupSafetyTel": "王五"
    }
  ]
}
```

<br><br>


## 报警查询接口

### 分页查找报警记录

**接口说明**

> 分页查找报警记录<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/alarm/findAlarmPage

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +id | body | string | 否 |
| +componentType | body | string | 否 |
| +deploymentId | body | string | 否 |
| +deployName | body | string | 否 |
| +alarmEventComponentId | body | string | 否 |
| +deploySubType | body | string | 否 |
| +alarmEventLevel | body | string | 否 |
| +alarmEventObjName | body | string | 否 |
| +inputSourceName | body | string | 否 |
| +inputSourceIndexCode | body | string | 否 |
| +snappedPicUrl | body | string | 否 |
| +refrencePicUrl | body | string | 否 |
| +alarmEventType | body | string | 否 |
| +alarmTime | body | date | 否 |
| +alarmTimeUTC | body | long | 否 |
| +deviceType | body | string | 否 |
| +analysisType | body | string | 否 |
| +similarity | body | string | 否 |
| +attribute | body | string | 否 |
| +alarmEventObjIndexCode | body | string | 否 |
| +transInfo | body | string | 否 |
| +triggers | body | string | 否 |
| +alarmTime4Global | body | string | 否 |
| +userIds | body | string | 否 |
| +reservedField1 | body | string | 否 |
| +reservedField2 | body | string | 否 |
| +archivedFlag | body | string | 否 |
| +sourceUuid | body | string | 否 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {}
  ]
}
```

<br><br>


### 报警信息接收

**接口说明**

> 报警信息接收<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/alarm/handleAlarm

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| body | body | object | 否 | 
**请求参数举例**
```json
{
  "body": {}
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| type | body | integer | 是 | 结果类型：0成功;-1错误，系统未处理;-2异常，系统已处理 |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
**返回参数举例**
```json
{
  "type": 0,
  "code": "0",
  "msg": "SUCCESS",
  "data": {}
}
```

<br><br>


### 报警信息统计

**接口说明**

> 03_报警信息统计<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/alarm/countAlarm

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +fielddetection | body | long | 否 | 区域入侵 |
| +linedetection | body | long | 否 | 越界侦测 |
| +regionEntrance | body | long | 否 | 进入区域 |
| +regionExiting | body | long | 否 | 离开区域 |
| +loitering | body | long | 否 | 徘徊侦测 |
| +group | body | long | 否 | 人员聚集 |
| +rapidMove | body | long | 否 | 快速移动 |
| +parking | body | long | 否 | 停车侦测 |
| +unattendedBaggage | body | long | 否 | 物品遗留 |
| +attendedBaggage | body | long | 否 | 物品拿取 |
| +peoplenumChange | body | long | 否 | 人数异常 |
| +spacingChange | body | long | 否 | 间距异常 |
| +violentMotion | body | long | 否 | 剧烈运动 |
| +leavePosition | body | long | 否 | 离岗 |
| +fallDown | body | long | 否 | 倒地 |
| +reachHight | body | long | 否 | 攀高 |
| +advReachHeight | body | long | 否 | 折线攀高 |
| +getUp | body | long | 否 | 起身 |
| +toiletTarry | body | long | 否 | 如厕超时 |
| +standUp | body | long | 否 | 人员站立 |
| +sitQuietly | body | long | 否 | 静坐 |
| +yardTarry | body | long | 否 | 放风场滞留 |
| +audioAbnormal | body | long | 否 | 声强突变 |
| +humanEnter | body | long | 否 | 人靠近ATM |
| +overTime | body | long | 否 | 操作超时 |
| +stickUp | body | long | 否 | 贴纸条 |
| +installScanner | body | long | 否 | 安装读卡器 |
| +trail | body | long | 否 | 尾随 |
| +advTraversePlane | body | long | 否 | 折线警戒面 |
| +running | body | long | 否 | 快速奔跑 |
| +retention | body | long | 否 | 滞留检测 |
| +leftTake | body | long | 否 | 物品遗留拿取 |
| +keypersonGetup | body | long | 否 | 重点人员起身 |
| +hands | body | long | 否 | 举手 |
| +handls | body | long | 否 | 举手 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "fielddetection": 12,
    "linedetection": 12,
    "regionEntrance": 12,
    "regionExiting": 12,
    "loitering": 12,
    "group": 12,
    "rapidMove": 12,
    "parking": 12,
    "unattendedBaggage": 12,
    "attendedBaggage": 12,
    "peoplenumChange": 12,
    "spacingChange": 12,
    "violentMotion": 12,
    "leavePosition": 12,
    "fallDown": 12,
    "reachHight": 12,
    "advReachHeight": 12,
    "getUp": 12,
    "toiletTarry": 12,
    "standUp": 12,
    "sitQuietly": 12,
    "yardTarry": 12,
    "audioAbnormal": 12,
    "humanEnter": 12,
    "overTime": 12,
    "stickUp": 12,
    "installScanner": 12,
    "trail": 12,
    "advTraversePlane": 12,
    "running": 12,
    "retention": 12,
    "leftTake": 12,
    "keypersonGetup": 12,
    "hands": 12,
    "handls": 12
  }
}
```

<br><br>


## 报警查询接口v3

### 留置预警监测

**接口说明**

> 留置预警监测-最新预警5条:预警类型,留置房间名称,时间<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/alarm/findAlarmInfo

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +componentType | body | string | 否 | 报警查询类型 |
| +deploymentId | body | string | 否 | 事件编号 |
| +alarmEventComponentId | body | string | 否 | 布控类型 |
| +alarmEventLevel | body | string | 否 | 优先级 h高 m中 l低 |
| +alarmEventObjName | body | string | 否 | 布控目标 |
| +roomName | body | string | 否 | 房间名称 |
| +inputSourceName | body | string | 否 | 抓拍设备 |
| +inputSourceIndexCode | body | string | 否 | 抓拍设备编号 |
| +snappedPicUrl | body | string | 否 | 抓拍图Base64 |
| +alarmTime | body | date | 否 | 报警时间 |
| +alarmTime4Global | body | string | 否 | 报警时间ISO格式 |
| +alarmEventType | body | string | 否 | 报警类型 |
| +alarmEventName | body | string | 否 | 报警类型名称 |
| +id | body | string | 否 | id |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "componentType": "SMART_ALARM",
      "deploymentId": "ianalysis_dac_03dc4de7a9184d2eb0de2bb5e945d232",
      "alarmEventComponentId": "ianalysis_dac",
      "alarmEventLevel": "h",
      "alarmEventObjName": "LD102-AI",
      "roomName": "LD102",
      "inputSourceName": "LD102-AI",
      "inputSourceIndexCode": "142b5bf7d05e416b882ee1831d3eb374",
      "alarmTime": "1626513600611",
      "alarmTime4Global": "2021-07-18T09:24:32.693+08:00",
      "alarmEventType": "advReachHeight",
      "alarmEventName": "advReachHeight",
      "id": "xxxxxxx"
    }
  ]
}
```

<br><br>


### 获取下一条报警记录

**接口说明**

> 获取下一条报警记录<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/alarm/getNextAlarm

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| id | body | string | 否 |
| componentType | body | string | 否 |
| deployName | body | string | 否 |
| deploymentId | body | string | 否 |
| alarmEventComponentId | body | string | 否 |
| alarmEventObjName | body | string | 否 |
| alarmEventObjIndexCode | body | string | 否 |
| inputSourceName | body | string | 否 |
| inputSourceIndexCode | body | string | 否 |
| alarmEventType | body | string | 否 |
| alarmTimeStart | body | string | 否 |
| alarmTimeEnd | body | string | 否 |
| deviceType | body | string | 否 |
| analysisType | body | string | 否 |
| deploySubType | body | string | 否 |
| alarmEventLevel | body | string | 否 |
| currentUserId | body | string | 否 |
| bottomId | body | string | 否 |
| page | body | integer | 否 |
| limit | body | integer | 否 |
| plateColor | body | string | 否 |
| carNumber | body | string | 否 |
| carColour | body | string | 否 |
| carBrand | body | string | 否 |
| carSubBrand | body | string | 否 |
| carType | body | string | 否 |
| registerGender | body | string | 否 |
| reservedField1 | body | string | 否 |
| reservedField2 | body | string | 否 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +componentType | body | string | 否 | 报警查询类型 |
| +deploymentId | body | string | 否 | 事件编号 |
| +alarmEventComponentId | body | string | 否 | 布控类型 |
| +alarmEventLevel | body | string | 否 | 优先级 h高 m中 l低 |
| +alarmEventObjName | body | string | 否 | 布控目标 |
| +roomName | body | string | 否 | 房间名称 |
| +inputSourceName | body | string | 否 | 抓拍设备 |
| +inputSourceIndexCode | body | string | 否 | 抓拍设备编号 |
| +snappedPicUrl | body | string | 否 | 抓拍图Base64 |
| +alarmTime | body | date | 否 | 报警时间 |
| +alarmTime4Global | body | string | 否 | 报警时间ISO格式 |
| +alarmEventType | body | string | 否 | 报警类型 |
| +alarmEventName | body | string | 否 | 报警类型名称 |
| +id | body | string | 否 | id |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "componentType": "SMART_ALARM",
    "deploymentId": "ianalysis_dac_03dc4de7a9184d2eb0de2bb5e945d232",
    "alarmEventComponentId": "ianalysis_dac",
    "alarmEventLevel": "h",
    "alarmEventObjName": "LD102-AI",
    "roomName": "LD102",
    "inputSourceName": "LD102-AI",
    "inputSourceIndexCode": "142b5bf7d05e416b882ee1831d3eb374",
    "alarmTime": "1626513600611",
    "alarmTime4Global": "2021-07-18T09:24:32.693+08:00",
    "alarmEventType": "advReachHeight",
    "alarmEventName": "advReachHeight",
    "id": "xxxxxxx"
  }
}
```

<br><br>


### 报警信息分页查询

**接口说明**

> 报警信息分页查询<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/alarm/findAlarmPageInfo

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| id | body | string | 否 | 报警记录Id |
| componentType | body | string | 否 | 报警类型 |
| deployName | body | string | 否 | 布控任务名称 |
| deploymentId | body | string | 否 | 布控编号 |
| alarmEventComponentId | body | string | 否 | 布控类型:人脸,车辆,WIFI探针,人证 |
| alarmEventObjName | body | string | 否 | 布控目标 |
| alarmEventObjIndexCode | body | string | 否 | 布控目标编号 |
| inputSourceName | body | string | 否 | 设备名称 |
| inputSourceIndexCode | body | string | 否 | 编号 |
| alarmEventType | body | string | 否 | 布控原因 |
| alarmTimeStart | body | string | 否 | 报警记录开始时间 ISO格式 yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| alarmTimeEnd | body | string | 否 | 报警记录结束时间 ISO格式 yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| deviceType | body | string | 否 | 设备类型 |
| analysisType | body | string | 否 | 分析类型 |
| deploySubType | body | string | 否 | 布控子类型 |
| alarmEventLevel | body | string | 否 | 优先级 高h 中m 低l |
| currentUserId | body | string | 否 | 用户Id |
| bottomId | body | string | 否 | 移动端查询最后一条报警记录Id |
| page | body | integer | 否 | 页码 |
| limit | body | integer | 否 | 每页条数 |
**请求参数举例**
```json
{
  "id": "id",
  "componentType": "componentType",
  "deployName": "deployName",
  "deploymentId": "deploymentId",
  "alarmEventComponentId": "alarmEventComponentId",
  "alarmEventObjName": "alarmEventObjName",
  "alarmEventObjIndexCode": "alarmEventObjIndexCode",
  "inputSourceName": "inputSourceName",
  "inputSourceIndexCode": "inputSourceIndexCode",
  "alarmEventType": "alarmEventType",
  "alarmTimeStart": "alarmTimeStart",
  "alarmTimeEnd": "alarmTimeEnd",
  "deviceType": "deviceType",
  "analysisType": "analysisType",
  "deploySubType": "deploySubType",
  "alarmEventLevel": "alarmEventLevel",
  "currentUserId": "currentUserId",
  "bottomId": "bottomId",
  "page": 1,
  "limit": 10
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +total | body | long | 否 |
| +list | body | object[] | 否 |
| ++componentType | body | string | 否 | 报警查询类型 |
| ++deploymentId | body | string | 否 | 事件编号 |
| ++alarmEventComponentId | body | string | 否 | 布控类型 |
| ++alarmEventLevel | body | string | 否 | 优先级 h高 m中 l低 |
| ++alarmEventObjName | body | string | 否 | 布控目标 |
| ++roomName | body | string | 否 | 房间名称 |
| ++inputSourceName | body | string | 否 | 抓拍设备 |
| ++inputSourceIndexCode | body | string | 否 | 抓拍设备编号 |
| ++snappedPicUrl | body | string | 否 | 抓拍图Base64 |
| ++alarmTime | body | date | 否 | 报警时间 |
| ++alarmTime4Global | body | string | 否 | 报警时间ISO格式 |
| ++alarmEventType | body | string | 否 | 报警类型 |
| ++alarmEventName | body | string | 否 | 报警类型名称 |
| ++id | body | string | 否 | id |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "list": [
      {
        "componentType": "SMART_ALARM",
        "deploymentId": "ianalysis_dac_03dc4de7a9184d2eb0de2bb5e945d232",
        "alarmEventComponentId": "ianalysis_dac",
        "alarmEventLevel": "h",
        "alarmEventObjName": "LD102-AI",
        "roomName": "LD102",
        "inputSourceName": "LD102-AI",
        "inputSourceIndexCode": "142b5bf7d05e416b882ee1831d3eb374",
        "alarmTime": "1626513600611",
        "alarmTime4Global": "2021-07-18T09:24:32.693+08:00",
        "alarmEventType": "advReachHeight",
        "alarmEventName": "advReachHeight",
        "id": "xxxxxxx"
      }
    ]
  }
}
```

<br><br>


## 留置信息查询接口V2

### 当前留置人员男女数量,年龄数量及对应比例统计

**接口说明**

> 当前留置人员男女数量,职级数量,年龄数量及对应比例统计<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDetainPeopleNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +guardNum | body | long | 否 | 看护人员人数 |
| +medicalWorkersNum | body | long | 否 | 医务人员人数 |
| +supportNum | body | long | 否 | 后勤人员人数 |
| +invesGroupPeopleNum | body | long | 否 | 专案组人数 |
| +educationNum | body | long | 否 | 廉政中心人数 |
| +leaderNum | body | long | 否 | 领导人员 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "guardNum": 0,
    "medicalWorkersNum": 0,
    "supportNum": 0,
    "invesGroupPeopleNum": 0,
    "educationNum": 30,
    "leaderNum": 10
  }
}
```

<br><br>


### 留置人员身体状态统计

**接口说明**

> 留置人员身体状态统计<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getPhysicalInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +normal | body | long | 否 | 留置人员正常数量 |
| +abnormality | body | long | 否 | 留置人员异常数量 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "normal": 12,
    "abnormality": 10
  }
}
```

<br><br>


### 留置人员日常巡检列表

**接口说明**

> 留置人员日常巡检列表。<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getPhysicalAbnormalityList

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +suspectNo | body | string | 否 | 对象代号 |
| +age | body | string | 否 | 年龄 |
| +focusInfos | body | string[] | 否 | 重点关注信息 |
| +visitTime | body | string | 否 | 巡检时间 |
| +bp | body | object | 否 | 血压BP，单位mmHg |
| ++sbp | body | string | 否 | 收缩压 |
| ++dbp | body | string | 否 | 舒张压 |
| +hp | body | string | 否 | 心率HP，单位次/分 |
| +temperature | body | string | 否 | 体温T，单位℃ |
| +focus | body | integer | 否 | 重点关注，0否，是，默认否 |
| +accident | body | string | 否 | 突发事件 |
| +summary | body | string | 否 | 巡诊总结 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "focusInfos": [
        "头痛",
        "发烧"
      ],
      "bp": {
        "sbp": "113",
        "dbp": "78"
      },
      "hp": "80",
      "temperature": "37.7",
      "focus": 0,
      "accident": "腹泻",
      "summary": "体温偏高"
    }
  ]
}
```

<br><br>


### 智慧留置室运行态势

**接口说明**

> 智慧留置室房间总数:mindRoomSumNum;智慧留置室房间空闲数量:mindRoomFreeNum;智慧留置室房间占用数量:mindRoomUseNum;智慧留置室房间占用百分百:usePercent<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getMindDetainRoomInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +mindRoomTotalNum | body | long | 否 | 智慧留置房间总数 |
| +mindRoomFreeNum | body | long | 否 | 智慧留置房间空闲中数量 |
| +mindRoomUseNum | body | long | 否 | 智慧留置房间使用中数量 |
| +usePercent | body | long | 否 | 智慧留置房间使用率--只保留整数部分 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "mindRoomTotalNum": 14,
    "mindRoomFreeNum": 7,
    "mindRoomUseNum": 7,
    "usePercent": 50
  }
}
```

<br><br>


### 普通留置室运行态势

**接口说明**

> 普通留置室房间<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getOrdinaryDetainRoomInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +ordinaryRoomTotalNum | body | long | 否 | 普通留置房间总数 |
| +ordinaryRoomFreeNum | body | long | 否 | 普通留置房间空闲中数量 |
| +ordinaryRoomUseNum | body | long | 否 | 普通留置房间使用中数量 |
| +groupName | body | long | 否 | 普通留置房间使用率--只保留整数部分 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "ordinaryRoomTotalNum": 14,
    "ordinaryRoomFreeNum": 7,
    "ordinaryRoomUseNum": 7,
    "groupName": 50
  }
}
```

<br><br>


### 留置区当前使用情况

**接口说明**

> 留置区当前使用情况,包括留置室的总数/使用中/空闲中数量<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDetainRoomeUsage

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +detainRoomTotalNum | body | long | 否 | 留置房间总数 |
| +detainRoomUseNum | body | long | 否 | 留置房间使用中 |
| +detainRoomFreeNum | body | long | 否 | 留置房间空闲数 |
| +usePercent | body | long | 否 | 房间使用率--只保留整数部分 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "detainRoomTotalNum": 60,
    "detainRoomUseNum": 60,
    "detainRoomFreeNum": 60,
    "usePercent": 50
  }
}
```

<br><br>


### 留置区月份留置人数折线图

**接口说明**

> 留置区月份留置人数折线图<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDetainMonthLineChart

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 获取所有留置室房间是否正在使用信息列表

**接口说明**

> 获取所有留置室房间是否正在使用信息列表<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getUseDetainRoomInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | string[] | 否 | 返回数据封装 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS"
}
```

<br><br>


### 获取留置人员预警信息

**接口说明**

> 获取留置人员预警信息<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDetainAlarmInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +roomName | body | string | 否 | 房间名 |
| +alermTime | body | string | 否 | 预警时间 |
| +alermInfo | body | string | 否 | 预警行为 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "roomName": "留置室1",
      "alermTime": "2021-4-28 12:34:00",
      "alermInfo": "入厕超市"
    }
  ]
}
```

<br><br>


### 留置人员折线图

**接口说明**

> 留置人员折线图<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDetainLineChart

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +name | body | string | 否 | 节点名称 |
| +value | body | long | 否 | 节点数值 |
| +attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "name": "5.2",
      "attr": "高风险"
    }
  ]
}
```

<br><br>


### 根据留置房间编码获取留置人员信息

**接口说明**

> 根据留置房间编码获取留置人员信息<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDetainPeopleInfoByRoomIndexCode

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| body | body | object | 否 | 
**请求参数举例**
```json
{
  "body": {}
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +suspectName | body | string | 是 | 对象姓名 |
| +suspectNo | body | string | 是 | 对象代号 |
| +detainIndexCode | body | string | 是 | 留置记录编号 |
| +sex | body | string | 否 | 性别 |
| +groupIndexCode | body | string | 是 | 调查组编号 |
| +groupName | body | string | 是 | 调查组名称 |
| +caseName | body | string | 否 | 案件名称 |
| +caseNo | body | string | 否 | 案件号 |
| +riskUrl | body | string | 否 | 案件号 |
| +roomName | body | string | 是 | 房间名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "suspectName": "张三",
    "suspectNo": "2020_001",
    "detainIndexCode": "f47b0356537f4611ace9219065e2c8a7",
    "sex": "1",
    "groupIndexCode": "6728362768d647109b24fb2ab39fef78",
    "groupName": "周某专案组",
    "caseName": "2019-01-01T00:00:00.000+08:00",
    "caseNo": "AJ000001",
    "riskUrl": "AJ000001",
    "roomName": "留置室101"
  }
}
```

<br><br>


### 获取所有房间信息

**接口说明**

> 获取所有房间信息<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getAllRoom

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +roomIndexCode | body | string | 是 | 房间编号 |
| +roomName | body | string | 是 | 房间名称 |
| +roomType | body | string | 是 | 房间类型，见附录D.房间类型（roomType） |
| +roomTypeName | body | string | 是 | 房间类型名称，见附录D.房间类型（roomType） |
| +roomRemark | body | string | 否 | 房间备注信息 |
| +roomStatus | body | string | 否 | 房间状态信息 0=空闲,1=再用 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "roomIndexCode": "17feb07c20784496864aad0276124135",
      "roomName": "岗哨室-谈话",
      "roomType": "roomType.2005",
      "roomTypeName": "岗哨室",
      "roomRemark": "备注",
      "roomStatus": "备注"
    }
  ]
}
```

<br><br>


### 获取所有房间使用信息

**接口说明**

> 获取所有房间使用信息<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getAllUseRoom

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +roomIndexCode | body | string | 是 | 房间编号 |
| +roomName | body | string | 是 | 房间名称 |
| +roomType | body | string | 是 | 房间类型，见附录D.房间类型（roomType） |
| +roomTypeName | body | string | 是 | 房间类型名称，见附录D.房间类型（roomType） |
| +roomRemark | body | string | 否 | 房间备注信息 |
| +roomStatus | body | string | 否 | 房间状态信息 0=空闲,1=再用 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "roomIndexCode": "17feb07c20784496864aad0276124135",
      "roomName": "岗哨室-谈话",
      "roomType": "roomType.2005",
      "roomTypeName": "岗哨室",
      "roomRemark": "备注",
      "roomStatus": "备注"
    }
  ]
}
```

<br><br>


### 留置人数总量

**接口说明**

> 留置人数总量,包括历史留置人数/留置中/待留置<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getAllDetainNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {}
}
```

<br><br>


### 当前留置人员男女总数,并区分期中智慧留置或普通数量

**接口说明**

> 当前留置人员男女总数,并区分期中智慧留置或普通数量<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDetainPeopleSexNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +totalNum | body | long | 否 | 总人数 |
| +menTotalNum | body | long | 否 | 男性数量 |
| +menMindNum | body | long | 否 | 男性智慧留置数量 |
| +menOrdinaryNum | body | long | 否 | 男性普通留置数量 |
| +womenTotalNum | body | long | 否 | 女性数量 |
| +womenMindNum | body | long | 否 | 女性智慧留置数量 |
| +womenOrdinaryNum | body | long | 否 | 女性普通留置数量 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "totalNum": 48,
    "menTotalNum": 24,
    "menMindNum": 10,
    "menOrdinaryNum": 14,
    "womenTotalNum": 24,
    "womenMindNum": 20,
    "womenOrdinaryNum": 4
  }
}
```

<br><br>


### 测试接口

**接口说明**

> 测试接口<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getDemoString

**请求方法**

> post

**数据提交方式**

> application/json


<br><br>


### 案件数据及留置人数统计

**接口说明**

> 用于当前区域内进行中案件数量及正在留置的人数。案件数量:detainNum;普通留置数量:ordinaryNum;智慧留置数量mindNum<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/detain/getTargetInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +ordinaryRoomTotalNum | body | long | 否 | 普通留置房间总数 |
| +mindRoomFreeNum | body | long | 否 | 智慧留置房间空闲中数量 |
| +mindRoomUseNum | body | long | 否 | 智慧留置房间使用中数量 |
| +groupName | body | long | 否 | 普通留置房间使用率--只保留整数部分 |
| +mindRoomTotalNum | body | long | 否 | 智慧留置房间总数 |
| +mindRoomUsePercent | body | long | 否 | 智慧留置房间使用率--只保留整数部分 |
| +roomTotalNum | body | long | 否 | 留置室总数 |
| +detainNum | body | long | 否 | 在办案件数量 |
| +mindNum | body | long | 否 | 智慧看护数 |
| +ordinaryNum | body | long | 否 | 近身看护数据 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "ordinaryRoomTotalNum": 46,
    "mindRoomFreeNum": 7,
    "mindRoomUseNum": 7,
    "groupName": 50,
    "mindRoomTotalNum": 14,
    "mindRoomUsePercent": 50,
    "roomTotalNum": 50,
    "detainNum": 50,
    "mindNum": 50,
    "ordinaryNum": 50
  }
}
```

<br><br>


## 留置信息查询接口V3

### 本年度留置人数统计

**接口说明**

> 本年度留置人数统计:男性数量,女性数量,男性百分比,女性百分比<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getTargetInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +totalNum | body | long | 否 | 总人数 |
| +menNum | body | long | 否 | 女性数量 |
| +menPercent | body | long | 否 | 男性百分比(只保留整数部分),大于0但不足1是,补足为1 |
| +womenPercent | body | long | 否 | 女性百分比(100-男性百分比) |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "totalNum": 48,
    "menNum": 15,
    "menPercent": 65,
    "womenPercent": 35
  }
}
```

<br><br>


### 当前留置区情况

**接口说明**

> 当前留置区情况:当前留置人数,各个年龄段数量(35以下,35~60,60以上),各个职级数量(厅级,处级,科级,其他)<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getDetainPeopleNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +totalNum | body | long | 否 | 总人数 |
| +ageNumUnder35 | body | long | 否 | 年龄数量,35岁及以下 |
| +ageNum36To60 | body | long | 否 | 年龄数量36至60 |
| +ageNumAbove60 | body | long | 否 | 年龄数量60岁以上 |
| +agePercentUnder35 | body | long | 否 | 年龄数量,35岁及以下百分比(四舍五入计算,大于0不足1%补充为1%) |
| +agePercent36To60 | body | long | 否 | 年龄数量36至40百分比(四舍五入计算,大于0不足1%补充为1%) |
| +agePercentAbove60 | body | long | 否 | 年龄数量60岁及以上百分比(四舍五入计算,大于0不足1%补充为1%) |
| +jobGrade3And4Num | body | long | 否 | 厅局级数量 |
| +jobGrade5And6Num | body | long | 否 | 县处级人数 |
| +jobGrade7And8Num | body | long | 否 | 县处级人数 |
| +jobGradeOtherNum | body | long | 否 | 其他职级人数 |
| +jobGrade3And4Percent | body | long | 否 | 厅局级百分比(四舍五入计算,大于0不足1%补充为1%) |
| +jobGrade5And6Percent | body | long | 否 | 县处级百分比(四舍五入计算,大于0不足1%补充为1%) |
| +jobGrade7And8Percent | body | long | 否 | 乡科级百分比(四舍五入计算,大于0不足1%补充为1%) |
| +jobGradeOtherPercent | body | long | 否 | 其他职级百分比(100-jobGrade3Num-jobGrade4Num-jobGrade5Percent) |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "totalNum": 48,
    "ageNumUnder35": 1,
    "ageNum36To60": 2,
    "ageNumAbove60": 30,
    "agePercentUnder35": 1,
    "agePercent36To60": 2,
    "agePercentAbove60": 30,
    "jobGrade3And4Num": 1,
    "jobGrade5And6Num": 3,
    "jobGrade7And8Num": 3,
    "jobGradeOtherNum": 10,
    "jobGrade3And4Percent": 1,
    "jobGrade5And6Percent": 3,
    "jobGrade7And8Percent": 3,
    "jobGradeOtherPercent": 10
  }
}
```

<br><br>


### 场所留置案件概况

**接口说明**

> 场所留置案件概况:在办案件数量,年度案件数量<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getCaseNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +currentCustNum | body | long | 否 | 当前案件数量 |
| +historyCustNum | body | long | 否 | 历史案件数量 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "currentCustNum": 48,
    "historyCustNum": 108
  }
}
```

<br><br>


### 智慧留置室房间使用情况

**接口说明**

> 智慧留置室房间使用情况:智慧留置室房间总数;智慧留置室房间空闲数量;智慧留置室房间使用中数量;智慧留置室房间占用百分百<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getMindDetainRoomInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +mindRoomTotalNum | body | long | 否 | 智慧留置房间总数 |
| +mindRoomFreeNum | body | long | 否 | 智慧留置房间空闲中数量 |
| +mindRoomUseNum | body | long | 否 | 智慧留置房间使用中数量 |
| +usePercent | body | long | 否 | 智慧留置房间使用率--只保留整数部分 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "mindRoomTotalNum": 14,
    "mindRoomFreeNum": 7,
    "mindRoomUseNum": 7,
    "usePercent": 50
  }
}
```

<br><br>


### 普通留置室房间使用情况

**接口说明**

> 普通留置室房间使用情况:普通留置室房间总数;普通留置室房间空闲数量;普通留置室房间使用中数量;普通留置室房间占用百分百<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getOrdinaryDetainRoomInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +ordinaryRoomTotalNum | body | long | 否 | 普通留置房间总数 |
| +ordinaryRoomFreeNum | body | long | 否 | 普通留置房间空闲中数量 |
| +ordinaryRoomUseNum | body | long | 否 | 普通留置房间使用中数量 |
| +groupName | body | long | 否 | 普通留置房间使用率--只保留整数部分 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "ordinaryRoomTotalNum": 14,
    "ordinaryRoomFreeNum": 7,
    "ordinaryRoomUseNum": 7,
    "groupName": 50
  }
}
```

<br><br>


### 留置人员详情看板-案件信息

**接口说明**

> 案件详情:在办案件数量,案件类型,案件级别,案件名称,案件状态,案由,办案部门,承办人<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getCaseInfo

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码,和留置对象编码二选一,必须输入一个 |
| suspectIndex | body | string | 否 | 留置对象编码,和房间编码二选一,必须输入一个 |
**请求参数举例**
```json
{
  "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
  "suspectIndex": "2328362768d647109b24fb2ab39fad23"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +suspectNo | body | string | 否 | 留置人员代号 |
| +caseLevel | body | string | 否 | 案件级别 |
| +caseType | body | string | 否 | 案件类型 |
| +caseName | body | string | 否 | 案件名称 |
| +caseNo | body | string | 否 | 案件编号 |
| +caseStatus | body | string | 否 | 案件状态 |
| +caseAccusation | body | string | 否 | 案由 |
| +caseHandlers | body | string | 否 | 承办人 |
| +orgName | body | string | 否 | 办案部门 |
| +groupTime | body | string | 否 | 分组时间，（格式为yyyy年M月 ） |
| +visualTime | body | string | 否 | 日期，（格式为M月d日 ） |
| +createTime | body | string | 否 | 创建时间，（格式为yyyy-MM-dd ） |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "suspectNo": "张三",
    "caseLevel": "重大案件",
    "caseType": "行政案件",
    "caseName": "张三专案",
    "caseNo": "AJ20217003",
    "caseStatus": "进行中",
    "caseAccusation": "利用影响力受贿",
    "caseHandlers": "李四",
    "orgName": "稽查部门",
    "groupTime": "2021-1月",
    "visualTime": "7月6日",
    "createTime": "2020-01-01T00:00:00.000+08:00"
  }
}
```

<br><br>


### 留置人员详情看板-日常巡检

**接口说明**

> 日常巡检:巡检时间,值班医生,血压BP(mmhg),心率,体温,突发状况,巡检总结<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getDailyVisitInfo

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码,和留置对象编码二选一,必须输入一个 |
| suspectIndex | body | string | 否 | 留置对象编码,和房间编码二选一,必须输入一个 |
**请求参数举例**
```json
{
  "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
  "suspectIndex": "2328362768d647109b24fb2ab39fad23"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +dailyVisitIndexCode | body | string | 否 | 巡诊记录编码 |
| +suspectIndexCode | body | string | 否 | 留置对象编码 |
| +visitTime | body | string | 否 | 巡诊时间 |
| +bp | body | object | 否 | 血压BP，单位mmHg |
| ++sbp | body | string | 否 | 收缩压 |
| ++dbp | body | string | 否 | 舒张压 |
| +hp | body | string | 否 | 心率HP，单位次/分 |
| +temperature | body | string | 否 | 体温T，单位℃ |
| +accident | body | string | 否 | 突发事件 |
| +summary | body | string | 否 | 巡诊总结 |
| +focus | body | integer | 否 | 重点关注，0否，1是，默认否 |
| +focusInfos | body | string[] | 否 | 重点关注信息 |
| +medicalStaff | body | string | 否 | 值班医生 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "dailyVisitIndexCode": "1922531182ce46b6b61c4fcfd0122f5e",
    "suspectIndexCode": "99ecdb45199446d88924867887e8bb90",
    "visitTime": "2020-06-01T00:00:00.000+08:00",
    "bp": {
      "sbp": "113",
      "dbp": "78"
    },
    "hp": "80",
    "temperature": "37.7",
    "accident": "腹泻",
    "summary": "体温偏高",
    "focus": 0,
    "focusInfos": [
      "头痛",
      "发烧"
    ],
    "medicalStaff": "张三、李四"
  }
}
```

<br><br>


### 留置人员详情看板-体征信息

**接口说明**

> 体征信息:体动次数,心率折线图,呼吸率折线图<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getSignPerSecInfo

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码,和留置对象编码二选一,必须输入一个 |
| suspectIndex | body | string | 否 | 留置对象编码,和房间编码二选一,必须输入一个 |
**请求参数举例**
```json
{
  "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
  "suspectIndex": "2328362768d647109b24fb2ab39fad23"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +motionRatePerSec | body | integer | 否 | 体动次数 |
| +heartRatePerSecList | body | object[] | 否 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
| +breathRatePerSecList | body | object[] | 否 |
| ++name | body | string | 否 | 节点名称 |
| ++value | body | long | 否 | 节点数值 |
| ++attr | body | string | 否 | 折现名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "motionRatePerSec": 48,
    "heartRatePerSecList": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ],
    "breathRatePerSecList": [
      {
        "name": "5.2",
        "attr": "高风险"
      }
    ]
  }
}
```

<br><br>


### 留置人员详情看板-看护信息

**接口说明**

> 看护信息:行为,时间<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getBehaviorInfo

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码,和留置对象编码二选一,必须输入一个 |
| suspectIndex | body | string | 否 | 留置对象编码,和房间编码二选一,必须输入一个 |
**请求参数举例**
```json
{
  "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
  "suspectIndex": "2328362768d647109b24fb2ab39fad23"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +behaviorName | body | string | 否 | 行为 |
| +happenTime | body | string | 否 | 时间 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "behaviorName": "吃饭",
      "happenTime": "2021-07-14 12:12:23"
    }
  ]
}
```

<br><br>


### 留置人员详情看板-人员信息

**接口说明**

> 人员信息:性别,民族,年龄,留置时长,开始时间<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getDetainBaseInfo

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码,和留置对象编码二选一,必须输入一个 |
| suspectIndex | body | string | 否 | 留置对象编码,和房间编码二选一,必须输入一个 |
**请求参数举例**
```json
{
  "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
  "suspectIndex": "2328362768d647109b24fb2ab39fad23"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +suspectName | body | string | 否 | 姓名 |
| +suspectNo | body | string | 否 | 对象代号 |
| +sex | body | string | 否 | 性别 |
| +nation | body | string | 否 | 民族 |
| +age | body | string | 否 | 年龄 |
| +detainDuration | body | string | 否 | 留置时长 |
| +workUnit | body | string | 否 | 工作单位 |
| +job | body | string | 否 | 职务 |
| +detainBeginTime | body | string | 否 | 留置开始时间 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "suspectName": "张三",
    "suspectNo": "张三",
    "sex": "男",
    "nation": "汉",
    "age": "46",
    "detainDuration": "50天",
    "workUnit": "测试单位",
    "job": "测试职务",
    "detainBeginTime": "2021-3-22"
  }
}
```

<br><br>


### 获取所有房间信息使用信息

**接口说明**

> 获取所有房间信息使用信息<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getAllUseRoom

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +roomIndexCode | body | string | 是 | 房间编号 |
| +roomName | body | string | 是 | 房间名称 |
| +roomType | body | string | 是 | 房间类型，见附录D.房间类型（roomType） |
| +roomTypeName | body | string | 是 | 房间类型名称，见附录D.房间类型（roomType） |
| +roomRemark | body | string | 否 | 房间备注信息 |
| +roomStatus | body | string | 否 | 房间状态信息 0=空闲,1=再用 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "roomIndexCode": "17feb07c20784496864aad0276124135",
      "roomName": "岗哨室-谈话",
      "roomType": "roomType.2005",
      "roomTypeName": "岗哨室",
      "roomRemark": "备注",
      "roomStatus": "备注"
    }
  ]
}
```

<br><br>


### 获取留置人员风险评估结果

**接口说明**

> 获取留置人员风险评估结果<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getDetainRisk

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码,和留置对象编码二选一,必须输入一个 |
| suspectIndex | body | string | 否 | 留置对象编码,和房间编码二选一,必须输入一个 |
**请求参数举例**
```json
{
  "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
  "suspectIndex": "2328362768d647109b24fb2ab39fad23"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +roomIndexCode | body | string | 否 | 房间编码 |
| +suspectIndex | body | string | 否 | 留置对象编码 |
| +detainRisk | body | string | 否 | 风险评估 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
    "suspectIndex": "2328362768d647109b24fb2ab39fad23",
    "detainRisk": "低"
  }
}
```

<br><br>


### 留置对象详情,男性数量,男性智慧留置数量,男性普通留置数量,女性数量,女性智慧留置数量,女性普通留置数量

**接口说明**

> 留置对象详情,男性数量,男性智慧留置数量,男性普通留置数量,女性数量,女性智慧留置数量,女性普通留置数量<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getDetainPeopleTypeNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +totalNum | body | long | 否 | 总人数 |
| +menNum | body | long | 否 | 女性数量 |
| +mindMenNum | body | long | 否 | 智慧留置男性数量 |
| +ordinaryMenNum | body | long | 否 | 普通留置男性数量 |
| +mindWomenNum | body | long | 否 | 智慧留置女性数量 |
| +ordinaryWomenNum | body | long | 否 | 普通留置女性数量 |
| +menPercent | body | long | 否 | 男性百分比(只保留整数部分),大于0但不足1是,补足为1 |
| +womenPercent | body | long | 否 | 女性百分比(100-男性百分比) |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "totalNum": 48,
    "menNum": 15,
    "mindMenNum": 23,
    "ordinaryMenNum": 23,
    "mindWomenNum": 23,
    "ordinaryWomenNum": 23,
    "menPercent": 65,
    "womenPercent": 35
  }
}
```

<br><br>


### 获取留置信息列表

**接口说明**

> 获取留置信息列表<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getDetainInfoList

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| status | body | integer | 否 | 状态: 1当前留置对象，2本年度留置对象 |
| sex | body | integer | 否 | 状态: 1男，2女 |
| age | body | integer | 否 | 状态: 1:35岁及以下，2:36-60岁,60岁以上 |
| jobGrade | body | integer | 否 | 职级: 1:厅局级，2:县处级,3:乡科级,4:其他 |
| isMind | body | integer | 否 | 是否智慧留置, 0-普通留置,1-智慧留置 |
| arrival | body | integer | 否 | 解除留置去向，2：移送检察机关，3:移送公安机关;4:家人领回;0:其他 |
| groupLeve | body | integer | 否 | 调查组级别--0：中纪委，1：自治区级别，2：市本级，3：旗县区 |
| year | body | string | 否 | 年份 |
**请求参数举例**
```json
{
  "status": 1,
  "sex": 1,
  "age": 1,
  "jobGrade": 1,
  "isMind": 1,
  "arrival": 1,
  "groupLeve": 1,
  "year": "1"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +isMind | body | string | 否 | 是否智慧留置, 0-普通留置,1-智慧留置 |
| +detainIndexCode | body | string | 否 | 留置记录唯一编码 |
| +roomIndexCode | body | string | 否 | 房间唯一编码 |
| +roomName | body | string | 否 | 房间名称 |
| +planBeginTime | body | date | 否 | 计划留置开始时间 |
| +planEndTime | body | date | 否 | 计划留置结束时间 |
| +beginTime | body | date | 否 | 留置开始时间 |
| +endTime | body | date | 否 | 解除留置时间 |
| +status | body | integer | 否 | 状态：0待收置，1留置中，2已移交 |
| +suspectInfo | body | object | 否 | 留置对象信息 |
| ++suspectIndexCode | body | string | 否 | 对象唯一编码 |
| ++suspectName | body | string | 否 | 对象姓名 |
| ++suspectNo | body | string | 否 | 对象代号 |
| ++sex | body | integer | 否 | 性别 |
| ++nation | body | integer | 否 | 民族 |
| ++birthday | body | date | 否 | 出生日期 |
| ++political | body | integer | 否 | 政治面貌 |
| ++joiningPartyTime | body | string | 否 | 入党时间(手动录入，不一定是个日期) |
| ++certificateType | body | integer | 否 | 证件类型，身份证 |
| ++certificateNo | body | string | 否 | 证件号 |
| ++workUnit | body | string | 否 | 工作单位 |
| ++workUnitType | body | integer | 否 | 单位类型 |
| ++job | body | string | 否 | 职务 |
| ++education | body | integer | 否 | 文化程度 |
| ++address | body | string | 否 | 家庭住址 |
| ++partyRepresentative | body | integer | 否 | 是否党代表，0是，1否 |
| ++partyRepresentativeRemark | body | string | 否 | 党代表备注 |
| ++NPCMember | body | integer | 否 | 是否人大代表，0是，1否 |
| ++NPCMemberRemark | body | string | 否 | 人大代表备注 |
| ++CPPCCMember | body | integer | 否 | 是否政协委员，0是，1否 |
| ++CPPCCMemberRemark | body | string | 否 | 政协委员备注 |
| +investigateGroupInfo | body | object | 否 | 调查组信息 |
| ++groupIndexCode | body | string | 否 | 调查组唯一编码 |
| ++groupName | body | string | 否 | 调查组名称 |
| ++memberList | body | object[] | 否 | 调查组相关人，包括组长、安全员、成员 |
| +++personIndexCode | body | string | 否 | 人员唯一编码 |
| +++personName | body | string | 否 | 人员姓名 |
| +++orgIndexCode | body | string | 否 | 部门唯一编码 |
| +++orgName | body | string | 否 | 部门名称 |
| +++tel | body | string | 否 | 联系方式 |
| +++type | body | integer | 否 | 人员类型，1组长，2安全员，3成员 |
| +caseInfo | body | object | 否 | 案件信息 |
| ++caseIndexCode | body | string | 否 | 案件唯一编码 |
| ++caseName | body | string | 否 | 案件名称 |
| ++caseNo | body | string | 否 | 案件编号 |
| ++accusation | body | integer | 否 | 案由 |
| ++orgIndexCode | body | string | 否 | 办案部门唯一编码 |
| ++orgName | body | string | 否 | 办案部门名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "planBeginTime": "2019-01-01T00:00:00.000+08:00",
      "planEndTime": "2019-01-01T00:00:00.000+08:00",
      "beginTime": "2019-01-01T00:00:00.000+08:00",
      "endTime": "2019-01-01T00:00:00.000+08:00",
      "suspectInfo": {
        "birthday": "1980-11-11"
      },
      "investigateGroupInfo": {
        "memberList": [
          {
            "type": 1
          }
        ]
      },
      "caseInfo": {}
    }
  ]
}
```

<br><br>


### 获取案件列表

**接口说明**

> 获取案件列表<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getCaseList

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| status | body | integer | 否 | 状态: 1当前案件数量，2本年案件数量 |
**请求参数举例**
```json
{
  "status": 1
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +suspectNo | body | string | 否 | 留置人员代号 |
| +caseLevel | body | string | 否 | 案件级别 |
| +caseType | body | string | 否 | 案件类型 |
| +caseName | body | string | 否 | 案件名称 |
| +caseNo | body | string | 否 | 案件编号 |
| +caseStatus | body | string | 否 | 案件状态 |
| +caseAccusation | body | string | 否 | 案由 |
| +caseHandlers | body | string | 否 | 承办人 |
| +orgName | body | string | 否 | 办案部门 |
| +groupTime | body | string | 否 | 分组时间，（格式为yyyy年M月 ） |
| +visualTime | body | string | 否 | 日期，（格式为M月d日 ） |
| +createTime | body | string | 否 | 创建时间，（格式为yyyy-MM-dd ） |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "suspectNo": "张三",
      "caseLevel": "重大案件",
      "caseType": "行政案件",
      "caseName": "张三专案",
      "caseNo": "AJ20217003",
      "caseStatus": "进行中",
      "caseAccusation": "利用影响力受贿",
      "caseHandlers": "李四",
      "orgName": "稽查部门",
      "groupTime": "2021-1月",
      "visualTime": "7月6日",
      "createTime": "2020-01-01T00:00:00.000+08:00"
    }
  ]
}
```

<br><br>


### 测试接口

**接口说明**

> 测试接口<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/detain/getDemoString

**请求方法**

> post

**数据提交方式**

> application/json


<br><br>


## 留置设备信息查询接口

### 根据房间编号搜索房间监控点信息

**接口说明**

> 根据房间编号搜索房间监控点信息<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/device/searchCamera

**请求方法**

> post

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +cameraUseageMark | body | string | 是 | 监控点用途标签，见附录F.监控点用途（cameraUseageMark） |
| +cameraUseageMarkName | body | string | 是 | 监控点用途标签名称，见附录F.监控点用途（cameraUseageMark） |
| +cameraName | body | string | 是 | 监控点名称 |
| +cameraIndexCode | body | string | 是 | 监控点编号 |
| +chanNum | body | integer | 是 | 监控点通道号 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "cameraUseageMark": "monitoringUseage.1",
      "cameraUseageMarkName": "画中画",
      "cameraName": "VGA IN_126",
      "cameraIndexCode": "9bfa8f78985e44eea2c50afb37431205",
      "chanNum": 3
    }
  ]
}
```

<br><br>


### 获取所有房间监控点信息

**接口说明**

> 获取所有房间监控点信息<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/device/searchAllCamera

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +cameraUseageMark | body | string | 是 | 监控点用途标签，见附录F.监控点用途（cameraUseageMark） |
| +cameraUseageMarkName | body | string | 是 | 监控点用途标签名称，见附录F.监控点用途（cameraUseageMark） |
| +cameraName | body | string | 是 | 监控点名称 |
| +cameraIndexCode | body | string | 是 | 监控点编号 |
| +chanNum | body | integer | 是 | 监控点通道号 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "cameraUseageMark": "monitoringUseage.1",
      "cameraUseageMarkName": "画中画",
      "cameraName": "VGA IN_126",
      "cameraIndexCode": "9bfa8f78985e44eea2c50afb37431205",
      "chanNum": 3
    }
  ]
}
```

<br><br>


### 获取所有房间监控点信息

**接口说明**

> 获取所有房间监控点信息<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/device/searchAllCamera

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +cameraUseageMark | body | string | 是 | 监控点用途标签，见附录F.监控点用途（cameraUseageMark） |
| +cameraUseageMarkName | body | string | 是 | 监控点用途标签名称，见附录F.监控点用途（cameraUseageMark） |
| +cameraName | body | string | 是 | 监控点名称 |
| +cameraIndexCode | body | string | 是 | 监控点编号 |
| +chanNum | body | integer | 是 | 监控点通道号 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "cameraUseageMark": "monitoringUseage.1",
      "cameraUseageMarkName": "画中画",
      "cameraName": "VGA IN_126",
      "cameraIndexCode": "9bfa8f78985e44eea2c50afb37431205",
      "chanNum": 3
    }
  ]
}
```

<br><br>


### 获取命名中附带办案2字样的摄像头,包头需求

**接口说明**

> 02_获取命名中附带办案2字样的摄像头,包头需求<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/device/searchBanAn2Camera

**请求方法**

> get

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +cameraUseageMark | body | string | 是 | 监控点用途标签，见附录F.监控点用途（cameraUseageMark） |
| +cameraUseageMarkName | body | string | 是 | 监控点用途标签名称，见附录F.监控点用途（cameraUseageMark） |
| +cameraName | body | string | 是 | 监控点名称 |
| +cameraIndexCode | body | string | 是 | 监控点编号 |
| +chanNum | body | integer | 是 | 监控点通道号 |
| +manualCaptureBase64 | body | string | 否 | 抓图Base64 |
| +roomIndexCode | body | string | 否 | 房间编码 |
| +roomName | body | string | 否 | 房间名称 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "cameraUseageMark": "monitoringUseage.1",
      "cameraUseageMarkName": "画中画",
      "cameraName": "VGA IN_126",
      "cameraIndexCode": "9bfa8f78985e44eea2c50afb37431205",
      "chanNum": 3
    }
  ]
}
```

<br><br>


### 根据房间编号搜索房间监控点信息

**接口说明**

> 根据房间编号搜索房间监控点信息<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/device/searchCamera

**请求方法**

> post

**数据提交方式**

> application/json

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +cameraUseageMark | body | string | 是 | 监控点用途标签，见附录F.监控点用途（cameraUseageMark） |
| +cameraUseageMarkName | body | string | 是 | 监控点用途标签名称，见附录F.监控点用途（cameraUseageMark） |
| +cameraName | body | string | 是 | 监控点名称 |
| +cameraIndexCode | body | string | 是 | 监控点编号 |
| +chanNum | body | integer | 是 | 监控点通道号 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "cameraUseageMark": "monitoringUseage.1",
      "cameraUseageMarkName": "画中画",
      "cameraName": "VGA IN_126",
      "cameraIndexCode": "9bfa8f78985e44eea2c50afb37431205",
      "chanNum": 3
    }
  ]
}
```

<br><br>


## 谈话信息查询接口

### 本地讯问使用情况

**接口说明**

> 本地讯问使用情况<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/interrogate/getInterrogateRoomList

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +interrogateIndexCode | body | string | 否 | 讯问IndexCode |
| +roomName | body | string | 否 | 讯问室名称 |
| +roomIndexCode | body | string | 否 | 讯问室IndexCode |
| +suspectName | body | string | 否 | 谈话对象名称 |
| +time | body | string | 否 | 谈话时长 |
| +status | body | string | 否 | 状态 |
| +beginTime | body | string | 是 | 登记进入时间yyyy-MM-dd HH:mm:ss |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "interrogateIndexCode": "interrogateIndexCode",
      "roomName": "讯问室1",
      "roomIndexCode": "讯问室1",
      "suspectName": "张三",
      "time": "30分钟",
      "status": "谈话中",
      "beginTime": "2020-12-30 00:00:00"
    }
  ]
}
```

<br><br>


### 本地讯问使用统计

**接口说明**

> 谈话室使用统计<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/interrogate/getInterrogateRoomUseNum

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +beingUsedNum | body | string | 否 | 当前数量 |
| +usedTodayNum | body | string | 否 | 当天讯问数量 |
| +usedMonthNum | body | string | 否 | 当月讯问数量 |
| +usedWeekNum | body | string | 否 | 当周讯问数量 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "beingUsedNum": "2",
    "usedTodayNum": "20",
    "usedMonthNum": "50",
    "usedWeekNum": "50"
  }
}
```

<br><br>


### 本地讯问列表-分页查询

**接口说明**

> 本地讯问列表-分页查询<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/interrogate/getInterrogateInfoList

**请求方法**

> post

**数据提交方式**

> \

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| beginTime | body | string | 否 | 开始时间,yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| endTime | body | string | 否 | 结束时间,yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| pageNo | body | integer | 是 | 第几页（最小1) |
| pageSize | body | integer | 是 | 每页条数(最小1,最大200) |
**请求参数举例**
```json
{
  "beginTime": "2020-01-01T00:00:00.000+08:00",
  "endTime": "2020-06-30T00:00:00.000+08:00",
  "pageNo": 1,
  "pageSize": 20
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +total | body | long | 否 | 总记录数 |
| +pageNo | body | integer | 否 | 当前页 |
| +pageSize | body | integer | 否 | 每页的数量 |
| +list | body | object[] | 否 | 返回结果数据 |
| ++interrogateIndexCode | body | string | 否 | 讯问IndexCode |
| ++roomName | body | string | 否 | 讯问室名称 |
| ++roomIndexCode | body | string | 否 | 讯问室IndexCode |
| ++suspectName | body | string | 否 | 谈话对象名称 |
| ++time | body | string | 否 | 谈话时长 |
| ++status | body | string | 否 | 状态 |
| ++beginTime | body | string | 是 | 登记进入时间yyyy-MM-dd HH:mm:ss |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "list": [
      {
        "interrogateIndexCode": "interrogateIndexCode",
        "roomName": "讯问室1",
        "roomIndexCode": "讯问室1",
        "suspectName": "张三",
        "time": "30分钟",
        "status": "谈话中",
        "beginTime": "2020-12-30 00:00:00"
      }
    ]
  }
}
```

<br><br>


### 本地讯问-当前讯问列表

**接口说明**

> 本地讯问-当前讯问列表<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/interrogate/getInterrogateNowList

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +interrogateIndexCode | body | string | 否 | 讯问IndexCode |
| +roomName | body | string | 否 | 讯问室名称 |
| +roomIndexCode | body | string | 否 | 讯问室IndexCode |
| +suspectName | body | string | 否 | 谈话对象名称 |
| +time | body | string | 否 | 谈话时长 |
| +status | body | string | 否 | 状态 |
| +beginTime | body | string | 是 | 登记进入时间yyyy-MM-dd HH:mm:ss |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "interrogateIndexCode": "interrogateIndexCode",
      "roomName": "讯问室1",
      "roomIndexCode": "讯问室1",
      "suspectName": "张三",
      "time": "30分钟",
      "status": "谈话中",
      "beginTime": "2020-12-30 00:00:00"
    }
  ]
}
```

<br><br>


### 获取所有留置室房间是否正在使用信息列表

**接口说明**

> 获取所有留置室房间是否正在使用信息列表<br>

**接口版本**

> v2

**接口地址**

> /api/jwvisual/v2/interrogate/getInterrogateRoomInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +roomTotalNum | body | long | 否 | 谈话室总数 |
| +roomUseNum | body | long | 否 | 谈话室使用中数量 |
| +roomFreeNum | body | long | 否 | 谈话室空闲数量 |
| +groupName | body | long | 否 | 房间使用率--只保留整数部分 |
| +useRoomIndexCodeList | body | string[] | 否 | 使用中谈话室indexCode列表 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "roomTotalNum": 20,
    "roomUseNum": 1,
    "roomFreeNum": 20,
    "groupName": 50
  }
}
```

<br><br>


## 谈话信息查询接口v3

### 讯问详情--讯问登记

**接口说明**

> 讯问详情-讯问中:讯问状态,讯问室名称,讯问持续时间<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/interrogate/getInterrogateInfo

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +interrogateIndexCode | body | string | 否 | 讯问IndexCode |
| +roomName | body | string | 否 | 讯问室名称 |
| +roomIndexCode | body | string | 否 | 讯问室IndexCode |
| +suspectName | body | string | 否 | 谈话对象名称 |
| +time | body | string | 否 | 谈话时长 |
| +status | body | string | 否 | 状态 |
| +beginTime | body | string | 是 | 登记进入时间yyyy-MM-dd HH:mm:ss |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "interrogateIndexCode": "interrogateIndexCode",
      "roomName": "讯问室1",
      "roomIndexCode": "讯问室1",
      "suspectName": "张三",
      "time": "30分钟",
      "status": "谈话中",
      "beginTime": "2020-12-30 00:00:00"
    }
  ]
}
```

<br><br>


### 讯问室使用情况--讯问登记

**接口说明**

> 讯问室使用情况:讯问室房间总数;讯问室房间空闲数量;讯问室房间占用数量讯问室房间占用百分百<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/interrogate/getInterrogateRoom

**请求方法**

> get

**数据提交方式**

> \

**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object | 否 | 返回数据封装 |
| +interrogateRoomTotalNum | body | long | 否 | 讯问室总数 |
| +interrogateRoomFreeNum | body | long | 否 | 讯问室空闲中数量 |
| +interrogateRoomUseNum | body | long | 否 | 讯问室使用中数量 |
| +usePercent | body | long | 否 | 讯问室房间使用率--只保留整数部分 |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "interrogateRoomTotalNum": 14,
    "interrogateRoomFreeNum": 7,
    "interrogateRoomUseNum": 7,
    "usePercent": 50
  }
}
```

<br><br>


### 讯问详情列表--本地讯问

**接口说明**

> 讯问详情列表:讯问对象,讯问状态,讯问室名称,讯问持续时间<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/interrogate/getInterrogateList

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| roomIndexCode | body | string | 否 | 房间编码,和留置对象编码二选一,必须输入一个 |
| suspectIndex | body | string | 否 | 留置对象编码,和房间编码二选一,必须输入一个 |
**请求参数举例**
```json
{
  "roomIndexCode": "2328362768d647109b24fb2ab39fad23",
  "suspectIndex": "2328362768d647109b24fb2ab39fad23"
}
```
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +interrogateIndexCode | body | string | 否 | 讯问IndexCode |
| +roomName | body | string | 否 | 讯问室名称 |
| +roomIndexCode | body | string | 否 | 讯问室IndexCode |
| +suspectName | body | string | 否 | 谈话对象名称 |
| +time | body | string | 否 | 谈话时长 |
| +status | body | string | 否 | 状态 |
| +beginTime | body | string | 是 | 登记进入时间yyyy-MM-dd HH:mm:ss |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "interrogateIndexCode": "interrogateIndexCode",
      "roomName": "讯问室1",
      "roomIndexCode": "讯问室1",
      "suspectName": "张三",
      "time": "30分钟",
      "status": "谈话中",
      "beginTime": "2020-12-30 00:00:00"
    }
  ]
}
```

<br><br>


### 根据审讯记录获取审讯回放url

**接口说明**

> 根据审讯记录获取审讯回放url<br>

**接口版本**

> v3

**接口地址**

> /api/jwvisual/v3/interrogate/getPlayBackUrl

**请求方法**

> post

**数据提交方式**

> application/json

**请求参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| indexCode | body | string | 否 |
**返回参数**

| 参数名称 | 参数位置    | 数据类型  | 是否必须 | 参数描述                                     |
| --------------- | ------ | ----------- | ---- | ---------------------------------------- |
| code | body | string | 是 | 错误码 |
| msg | body | string | 是 | 返回描述信息 |
| data | body | object[] | 否 | 返回数据封装 |
| +cameraName | body | string | 否 | 监控点名称 |
| +url | body | string | 否 | 回放总rtsp url |
| +uuid | body | string | 否 | 标记本次查询的全部标识符，用于查询分片时的多次查询 |
| +list | body | object[] | 否 | 开始查询时间（IOS8601格式yyyy-MM-dd'T'HH:mm:ss.SSSzzz，和结束时间相差不超过三天） |
| ++beginTime | body | string | 否 | 片段开始时间 |
| ++endTime | body | string | 否 | 片段结束时间 |
| ++siz | body | long | 否 | 录像片段大小（单位：Byte） |
**返回参数举例**
```json
{
  "code": "0",
  "msg": "SUCCESS",
  "data": [
    {
      "list": [
        {}
      ]
    }
  ]
}
```

<br><br>

## 获取房间环境信息接口v2

### 根据房间编号获取环境状态信息

l 接口说明

根据房间编号获取环境状态信息

 

l 接口版本

V2

l 接口地址

api/v2/environment/searchByRoomCode

l 完整地址

http://ip:17163/dwc-web/service/rs/api/v2/environment/searchByRoomCode

l 请求方法

post

l 数据提交方式

application/json

l 请求参数

| 参数名称      | 参数位置 | 数据类型 | 是否必须 | 参数描述 |
| ------------- | -------- | -------- | -------- | -------- |
| roomIndexCode | body     | string   | 是       | 房间编号 |

l 请求参数举例

```json
{

  "roomIndexCode":"123"

}
```



l 返回参数

| 参数名称       | 参数位置 | 数据类型 | 是否必须 | 参数描述     |
| -------------- | -------- | -------- | -------- | ------------ |
| code           | body     | string   | 是       | 错误码       |
| msg            | body     | string   | 是       | 返回描述信息 |
| data           | body     | object   | 否       | 返回数据封装 |
| +roomIndexCode | body     | String   | 否       | 房间编号     |
| +roomName      | body     | String   | 否       | 房间名称     |
| +roomType      | body     | String   | 否       | 房间类型     |
| +roomTypeName  | body     | String   | 否       | 房间名称     |
| +roomRemark    | body     | String   | 否       | 房间备注信息 |
| +temperature   | body     | String   | 否       | 温度         |
| +humidity      | body     | String   | 否       | 湿度         |
| +cleanliness   | body     | String   | 否       | 空气质量     |
| +brightness    | body     | String   | 否       | 光照度       |

l 返回参数举例

```json
{

  "code": "0",
  "msg": "SUCCESS",
  "data": {
    "roomIndexCode": "d555ac5ade5c47a98ff8682202bebb93",
    "roomName": "206留置室",
    "roomType": "roomType.2001",
	"roomTypeName": "留置室",
    "roomRemark": "智慧留置室",
    "temperature": "17",
    "humidity": "38",
    "cleanliness": "43",
    "brightness": "12"
  }

}
```



<br><br><br>