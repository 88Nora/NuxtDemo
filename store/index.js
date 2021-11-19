export const state = () => ({
	//locales 支持的语言环境列表
	locales:['en-US','zh-CN'],
	//本地化的语言环境
	locale:'en-US'
})

export const mutations = {
	SET_LANG(state, locale) {
		if (state.locales.indexOf(locale) !== -1) {
		  state.locale = locale
		}
	}
}