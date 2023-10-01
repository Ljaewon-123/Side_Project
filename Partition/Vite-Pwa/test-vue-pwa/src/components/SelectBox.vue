<template>
  <div @click="show = !show" ref="mainSel" >
    <div class="title flex" :style="applyCss()" >
      <span>{{ selectTxt }}</span>
      <img :class="[show ? 'rotation' : 'rotation-f']" :src="'/assets/images/arrow.png'" alt="아래쪽 화살표">
    </div>
    <transition name="slide-fade" class="transition">
      <ul v-show="show" class="selectbox-list" :style="applyCssOnlyWidth()">
        <li v-for="item,index in optionArr" :key="index" class="option"
        :class="currentSelect(item.name)"
        @click="clickSelect(item.name,index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType, watch } from 'vue';
import { useClickOutside } from '@/composables/useClickOutside'

const props = defineProps({
  width:String,
  height:String,
  value: Number,
  list: Array as PropType<Array<any>>,
})



const emit = defineEmits(["change"]);
const selectTxt = ref('')
const show = ref(false)
const optionArr = ref()
optionArr.value = props.list


selectTxt.value = optionArr.value[0].name


const mainSel = ref(null) // 마운트 이후에 바인딩 될 예정
useClickOutside(mainSel, ()=>{
  show.value = false
})



const clickSelect = (name :string,index:number) => {
  if(selectTxt.value == name ) return
  selectTxt.value = name 
  changeMethod(index,name)
}

const changeMethod = (index:number, name:string) => {
  emit("change",index,name);
};

const currentSelect = (name :string) => {
  if(selectTxt.value == name ){
    return 'highlight'
  }
  else return ''
}

const applyCss = () => {
  const css = {
    width: props.width,
    height: props.height, 
  }
  return css
}

const applyCssOnlyWidth = () => {
  const css = {
    width: props.width,
  }
  return css
}

// watch(()=>(props.list) ,(newVal,oldVal) => {  // 이거는 promise 객체일때 유효  지금은 유배

// if(props.value != undefined)
// selectTxt.value = optionArr.value[props.value - 1].name
// else selectTxt.value = optionArr.value[0].name


// },{deep: true,immediate:true})

</script>

<style scoped>

.title{
  background-color: #ffffff;
  border-radius: 8px;
  border:1px solid #6ebae6;
  justify-content: space-between;
  padding: 5px 10px;
  font-weight: 500;
  color:black;
}


/* 애니메이션 */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/*  */

/* 옵션 영역 스타일 */
.selectbox-list{
  position: absolute;
  padding: 0px 0px;
  width: 200px;
  border-radius: 8px;
  border:1px solid #6ebae6;
  background-color: #ffffff;
  color:black;
  cursor: pointer;
  z-index: 5;
  margin-top: 3px;
}
.option{
  padding: 5px 10px;
  min-height: 15px;
  font-weight: 500;
}
.highlight{
  background-color: #6ebae6;
  border-radius: 8px;
}
.selectbox-list .option:hover{
  background-color: #6ebae6;
  border-radius: 8px;
}
/*  */
.rotation { 		
  transform: rotate(-180deg);	
  transition: all ease 0.5s;	
}
.rotation-f{ 		
  /* transform: rotate(180deg);	 */
  transition: all ease 0.5s;
}
img{
  width: 10px;
  height: 10px;
}

</style>