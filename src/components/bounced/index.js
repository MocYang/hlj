import React from 'react';
import './index.scss'
import bgSrc from '../../images/bounced/边框.png'
import imgItem from '../../images/bounced/Rectangle 526.png'

function bounced (){
   return(
    //    <div className='Bounced'>
           <div className='bounced'>
                <img className='bg-1' src={bgSrc} alt="" />
                <div  className='btstr'></div>
            <div className='information'>
                <div className='title_liuzhi_1'>
                    <p>DL102</p>
                    <div className='fork'></div>
                </div>
                <div className='title_liuzhi_2'>
                    <p>留置对象</p>
                </div>
                <div className='icon_renyuan'>
                    <div className='icon'></div>
                    <p className='zhang'>张昌怡</p>
                    <p>63岁</p>
                </div>
                <div className='box'>
                    <div className='box_lztime'>
                        <div className='title_lztime'>
                            <p>留置时间</p>
                        </div>
                        <div className='time'>
                            <div className='tian'>
                                <div className='tian_1'><span className='countdown'>8</span></div>
                                <div className='tian_2'><span className='countdown'>1</span></div>
                                <div className='tian_3'><span className='countdown'>1</span></div>
                                <div className='tian_4'><span className='countdown'>1</span></div>
                                <div className='tian_5'><span className='countdown'>1</span></div>
                                <div className='tian_6'><span className='countdown'>1</span></div>
                                <p>天</p>
                            </div>
                            <div className='shi'>
                                <div className='shi_1'><span className='countdown'>1</span></div>
                                <div className='shi_2'><span className='countdown'>1</span></div>
                                <p>时</p>
                            </div>
                            <div className='fen'>
                                <div className='fen_1'><span className='countdown'>1</span></div>
                                <div className='fen_2'><span className='countdown'>1</span></div>
                                <p>分</p>
                            </div>
                            <div className='miao'>
                                <div className='miao_1'><span className='countdown'>1</span></div>
                                <div className='miao_2'><span className='countdown'>1</span></div>
                                <p>秒</p>
                            </div>
                        </div>

                    </div>
                    <div className='box_ai'>
                        <div className='title_ai'>
                            <p>AI智慧守护</p>
                        </div>
                        <div className='when'>
                            <div>
                               <span className='eight'>8</span> 
                            </div>
                            <p>时</p>
                        </div>
                    </div>
                </div>

                <div className='xinxi'>
                    <div className='xinxi_1'>
                        <div className='rudang'>
                            <p className='key'>入党时间</p>
                            <p className='contont'>1979-02-07</p>
                        </div>
                        <div className='chusheng'>
                            <p className='key'>出生日期</p>
                            <p className='contont'>1979-02-07</p>
                        </div>
                        <div className='xueli'>
                            <p className='key'>学历</p>
                            <p className='contont'>--</p>
                        </div>
                    </div>
                    <div className='xinxi_2'>
                        <div className='zhiwu'>
                            <p className='key'>职务&emsp;&emsp;</p>
                            <p className='contont'>审判员（已退休）</p>
                        </div>
                        <div className='zhiji'>
                            <p className='key'>职级&emsp;&emsp;</p>
                            <p className='contont'>--</p>
                        </div>
                        <div className='zuzhang'>
                            <p className='key'>组长</p>
                            <p className='contont'>张书文</p>
                        </div>
                    </div>
                    <div className='xinxi-3'>
                    <div className='anquanyuan'>
                            <p className='key'>安全员&emsp;</p>
                            <p className='contont'>陈济东</p>
                        </div>
                        <div className='gongzuodanwei'>
                            <p className='key'>工作单位</p>
                            <p className='contont'>黑龙江省监察纪委</p>
                        </div>
                    </div>
                </div>
                <div className='img-list-box'>
                    <div className='img-item'>
                        <img className='' src={imgItem} alt=''/>
                    </div>
                    <div className='img-item'>
                        <img className='' src={imgItem} alt='' />
                    </div>
                    <div className='img-item'>
                        <img className='' src={imgItem} alt='' />
                    </div>
                    <div className='img-item'>
                        <img className='' src={imgItem} alt='' />
                    </div>
                </div>
            </div>
       </div>

       
    // </div>
   )
}

export default bounced