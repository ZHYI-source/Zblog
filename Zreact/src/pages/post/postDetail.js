import React, {useState} from 'react';
import './postDetail.scss'
import {Pagination} from 'antd';
import myImage from '../../assets/img/post-detail.png';
const PostDetail = () => {
    const [postData, setPostData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    return (
        <>
            <section className="post-detail">
                <section className="post-detail-header">
                    <h2>不畏将来，看淡得失</h2>
                    <p className="tip">
                        <span>浏览数：99 </span>
                        <span>最后更新时间：2023-09-06 14:08 </span>
                    </p>
                    <img src="https://images.unsplash.com/photo-1693491012954-e7a0527b699e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"/>
                </section>
                <section className="post-detail-body">
                    <p>有句话说：&ldquo;当你独自穿过了暴风雨，你就不是原来的那个人了。&rdquo;</p>
                    <p>经过生活历练的人，最终都变成了更强大的自己。</p>
                    <p>生活中，我们要学会清空情绪、清零往事、清静内心。</p>
                    <p>清空情绪</p>
                    <p>人就像一个容器，当脑袋里装满了情绪，就无法再运转。</p>
                    <p>一个人理想的状态，就是每天回到家可以忘掉所有的不愉快。以自己喜欢的方式做自己喜欢的事，生活时时刻刻都应该是美好的，试着清空那些不愉快的情绪。</p>
                    <p>快乐是很简单的。把注意力放在手头的工作上，或是当下的生活中。不去想那些糟心事，不愉快的情绪也就消散了。</p>
                    <p>如果老是琢磨自己的情绪，就会被逼到死角，找不到出路。与其耿耿于怀，不如放下重来。</p>
                    <p>清空，不是消极的&ldquo;万事皆空&rdquo;，而是历经磨炼后的平心静气。</p>
                    <p>院子里的落叶要扫除，内心更要定期清理，拔除那些枯枝败叶，才能种下希望。</p>
                    <p>对于生活，不要只想着填满，而要懂得留白。空荡的地方，才能听见灵魂的声音。</p>
                    <p>给自己一点空间，给生活一点时间，花会沿路盛开，好事如约而至。</p>
                    <p>清零往事</p>
                    <p>人这辈子，要学会让往事清零，爱恨随意。</p>
                    <p>找个时间，把那些旧事、烦事，统统倒出来，任凭它随风消散。</p>
                    <p>命运是自己把握的，人生是往前走的，我们要往前看。</p>
                    <p>我们在为人处世中难免会有疏忽和遗漏，不要灰心和失望，路还很长呢，别忘了，还有下一步。</p>
                    <p>将遗憾留给昨天，用希望迎接明天。让往事随风而逝，温暖记在心上就好。</p>
                    <p>成长的路，你一步一步走过，纵然会遇到一些困难与挫折，但依旧会等到灿烂的阳光。</p>
                    <p>那时候，你也&ldquo;增了韧，淬了刚，添了柔&rdquo;。</p>
                    <p>清静内心</p>
                    <p>人这辈子，要学会清静内心。</p>
                    <p>一位作家说：&ldquo;在一个安静的位置上，去看世界的热闹。&rdquo;</p>
                    <p>心乱，会让人坐立不安，陷入恐惧中；心静，则让人波澜不惊，灵魂舒缓。大多数时候，无论我们做任何事，都在于一个&ldquo;静&rdquo;字。</p>
                    <p>看过一句话说：&ldquo;静而后能安，安而后能虑，虑而后能得。&rdquo;</p>
                    <p>无论外界环境如何，我们要从容不迫，踏实努力，终会有收获。</p>
                    <p>人这一辈子，走过山山水水，历经各种挑战，褪去一身浮躁，留下内心清静，变得无比丰富与庄重。</p>
                    <p>很喜欢这样一句话：&ldquo;愿尔明月长随，清风常伴，百忧到心尽开解，万难加身皆辟易。&rdquo;</p>
                    <p>也许生活会磨掉我们的天真和懵懂，但却让我们长出铠甲和羽翼。</p>
                    <p>把情绪清空，是定力；把旧事清零，是韧劲；让内心清静，是涵养。</p>
                    <p>心中无事自无事，心中有喜常欢喜，愿你保留骨子里的那份良善与干净，活得踏实自在。</p>
                </section>
                <div className="reship" >
                    <p>转载：- <a href="https://www.bidushe.com/article/103480.html" target="_blank">
                        《不畏将来，看淡得失》</a></p>
                <p>著名：如侵犯您的版权，请
                    <router-link to="/">联系我</router-link>
                    回复原文章的地址，我会给您删除此文章，给您带来不便请您谅解！
                </p>
            </div>
                <footer>

                </footer>

            </section>
        </>
    );
};

export default PostDetail;
