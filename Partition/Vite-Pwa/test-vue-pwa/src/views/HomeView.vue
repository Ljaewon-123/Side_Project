<template>
  <div class="main">
    <div class="basic">
      <SelectBox :list="basic" :width="'200px'" @change="changeEvent" />
      <div>기준 단위</div>
      <br>
      <input type="number" v-model="refVal" class="input-box" >
      <div>기본값 입력</div>
    </div>
    <div class="sub">
      <div v-for="item, index in array" :key="index">
        <input type="number" v-model="array![index].value" class="input-box" maxlength="4" readonly>
        <span class="text">{{ array![index].name }}</span>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import SelectBox from '@/components/SelectBox.vue';
import { ref, watch } from 'vue';
import type { ArrayItem } from '@/types'
import { calculateUnit } from '@/composables/calculateUnit'

// 한번 다운받았으면 다시 다운 안받아도 된다 

const refVal = ref(0)
const currentUnit = ref('')
const array = ref<ArrayItem[]>()
const basic = ref([
  {name:'ml', value:0},
  {name:'tsp', value:0},
  {name:'tbsp', value:0},
  {name:'oz', value:0},
  {name:'cups', value:0},
  {name:'pints', value:0},
  {name:'quarts', value:0},
  {name:'liters', value:0},
  {name:'gallons', value:0}
])

const calculate = () => { // 
  if(array.value){
    calculateUnit(array.value,refVal.value, currentUnit.value)
  }
  
}

const changeEvent = (index:number, name:string) => {
  setupLst(index,name)
  calculate()
}

const setupLst = (index?:number, name?:string) => {
  array.value = [...basic.value]
  if(!index) array.value.splice(0,1), currentUnit.value = basic.value[0].name
  else array.value.splice(index,1), currentUnit.value = name!

  
}
setupLst()


watch(()=>(refVal.value) ,(newVal,oldVal) => {  

  calculate()


},{deep: true,immediate:true})

</script>


<style scoped>
.main{
  display: grid;
  row-gap: 40px;
}
.sub{
  display: grid;
  row-gap: 20px;
}
.input-box {
  text-align: right;
  font-weight: 600;
  font-size: xx-large;
  border: 1px solid #e1e7ed;
  border-radius: 10px;
  width: 200px;
}
.basic{
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.text{
  text-align: right;
  font-weight: 600;
  font-size: xx-large;
}
</style>