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
        <input type="number" v-model="array![index].value" class="input-box" readonly>
        <span class="text">{{ array![index].name }}</span>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import SelectBox from '@/components/SelectBox.vue';
import { ref, watch } from 'vue';
import type { ArrayItem } from '@/types'

const refVal = ref(0)
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

const test = () => { // 이제 여기다가 알맞는 식 써넣고 pwa하면 될듯
  if(array.value){
    for(let i = 0; i < array.value.length; i++){
      if(array.value[i].name == 'tsp') {
        array.value[i].value = refVal.value * 10
      }
    }
  }
  
}

const changeEvent = (index:number) => {
  setupLst(index)
  test()
}

const setupLst = (index?:number) => {
  array.value = [...basic.value]
  if(!index) array.value.splice(0,1)
  else array.value.splice(index,1)
}
setupLst()

watch(()=>(refVal.value) ,(newVal,oldVal) => {  // 이거는 promise 객체일때 유효  지금은 유배

  test()


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