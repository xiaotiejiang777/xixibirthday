// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最最最亲爱的",  // 同上...
        '宝贝公主',
        "今天是你的生日",
        "也是我们在一起的",
        "第326天哦",
        "在这特殊的一天",
        "我有好多话想对你说",
        "你外表柔弱",
        '胆小',
        "却是我见过",
        '最勇敢的女孩',
        "感谢你不远万里",
        '来到我的身边',
        "我不觉得自己有什么",
        '值得炫耀的东西',
        '直到我有了你',
        '有时候看着你的照片',
        '或是想到你的时候',
        '会忍不住笑出声',
        '我想告诉全世界',
        '你有多好',
        '但是我发现',
        '你就是我的全世界',
        '不管是遇到开心的',
        '或是不开心的事',
        '你都是我第一个想分享的人',
        '工作很累',
        '想到有你在家等着我',
        '我就觉得心安',
        '觉得踏实',
        '工作很苦',
        '但是有你很甜',
        '有你我觉得自己很幸福',
        '你总担心自己太粘人了',
        '但是我觉得不会',
        '因为',
        '我的幸福是被你关爱',
        '我的幸福也是被你需要',
        '我也要努力',
        '让你变成',
        '世界上最幸福的被爱的女生',
        '生日快乐我的宝贝 ennn mua'
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "宝贝公主": "./imgs/1.jpg",
        "今天是你的生日": './imgs/291630329706_.pic_hd.jpg',
        "你外表柔弱": './imgs/151630329685_.pic_hd.jpg',
        '胆小': './imgs/221630329694_.pic_hd.jpg',
        // "却是我见过",
        '最勇敢的女孩': './imgs/211630329693_.pic_hd.jpg',
        "第326天哦": './imgs/141630329681_.pic_hd.jpg',
        '来到我的身边': './imgs/161630329686_.pic_hd.jpg',
        '直到我有了你': './imgs/281630329704_.pic_hd.jpg',
        '有时候看着你的照片': './imgs/271630329703_.pic_hd.jpg',
        '你就是我的全世界': './imgs/261630329702_.pic_hd.jpg',
        '你都是我第一个想分享的人': './imgs/171630329687_.pic_hd.jpg',
        '世界上最幸福的被爱的女生': './imgs/201630329692_.pic_hd.jpg',
        '生日快乐我的宝贝 ennn mua': './imgs/191630329690_.pic_hd.jpg',
        '有你我觉得自己很幸福': './imgs/231630329697_.pic_hd.jpg',
        '我的幸福是被你关爱': './imgs/241630329698_.pic_hd.jpg',
        '我的幸福也是被你需要': './imgs/251630329699_.pic_hd.jpg',
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐响起",
        bannar_coming: "来条彩带吧",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
