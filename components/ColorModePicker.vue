<template>
	<div>
		<ul>
			<li v-for="color in colors" :key="color">
				<component 
					:is="`icon-${color}`"
					:class="getClasses(color)"
					@click="$colorMode.preference = color"
				/>
			</li>
		</ul>
		<p>
			<ColorScheme placeholder="..." tag="span">
				{{$t('description')}} <b>{{$colorMode.preference}}</b>
			</ColorScheme>
		</p>
	</div>
</template>
<script>
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
	components:{
		IconSystem,
		IconLight,
		IconDark,
		IconSepia,
	},
	data() {
		return {
			colors: ["system","light","dark","sepia"]
		};
	},
	methods: {
		getClasses(color){
			// 不在 ssr 上设置类首选项是系统（因为我们在客户端知道它们）
			if(this.$colorMode.unknown){
				return {}
			}

			return{
				preferred:color === this.$colorMode.preference,
				selected:color === this.$colorMode.value
			}
		}
	}
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 10px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
</style>
