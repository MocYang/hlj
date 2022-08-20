interface cameraIndexCodePlayConf {
    /**
     * 0 主码流
     * 1 子码流
     */
    streamType?: 0 | 1

    /**
     * 0 udp
     * 1 tcp
     */
    transmode?: 1 | 0

    /**
     * 是否是小鹰眼设备 0不是 1是
     */
    isSmallEagleEyeAbility?: 0 | 1,

    cameraIndexCode?: string
}

/**
 * 摄像头编码方式回看参数
 */
interface cameraIndexCodePlayBackConf {
    /**
     *  传0是查询中心存储  传1是查询设备存储
     */
    recordStyle?: 0 | 1

    /**
     * 录像类型 传空查询全部录像片段 "0|1|2|6" 0定时录像 1移动侦测 2报警触发 6手动录像
     */
    recordType?: 0 | 1 | 2 | 6

    /**
     * 0 主码流
     * 1 子码流
     */
    streamType?: 0 | 1

    /**
     * 0 udp
     * 1 tcp
     */
    transmode?: 1 | 0


    startTime?: string

    endTime?: string
}

interface srcPlayConf {
    /**
     * vnsc查询得到的转流方式
     */
    streamDispatchMode?: number
}

interface initConfig {
    /**
     * 平台ip
     */
    strPlatIp?: string

    /**
     * 权限编码
     */
    strToken?: string
}

export declare class HSimplePlayer {
    /**
     * rtsp url播放
     */
    src?: string

    /**
     * 摄像头编码播放
     */
    cameraIndexCodePlayConf?: cameraIndexCodePlayConf

    /**
     * 编码播放参数
     */
    cameraIndexCodePlayBackConf?: cameraIndexCodePlayBackConf

    /**
     * rtsp方式播放参数
     */

    srcPlayConf?: srcPlayConf

    /**
     * 初始化参数
     */
    initConfig?: initConfig
}
