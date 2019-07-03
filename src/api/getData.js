import axios from 'axios'

/**
 * 获取首页默认地址
 */

export const cityGuess = () => axios('/home', {
	type: 'guess'
});
