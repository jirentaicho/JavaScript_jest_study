// 参考サイト: https://jestjs.io/ja/docs/mock-functions
import { jest } from '@jest/globals';
import axios from 'axios'
import HotAnimations from './hotanimation';

jest.mock('axios')

test('人気アニメ一覧を取得できること', () => {
    const anims = [
        {
            title: "ラブライブ！スーパースター",
        },
        {
            title: "とある科学の超電磁砲T",
        },
        {
            title: "New Game!!",
        },
        {
            title: "俺の妹がこんなに可愛いわけがない",
        },
    ]
    const res = { data: anims }
    axios.get.mockResolvedValue(res);

    return HotAnimations.getList().then(data => expect(data).toEqual(anims));
})