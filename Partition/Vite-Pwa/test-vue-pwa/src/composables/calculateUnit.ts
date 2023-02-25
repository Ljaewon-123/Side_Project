import type { ArrayItem } from "@/types"
import { ref } from "vue"

export const changeRound = (num:number) => {
  return parseFloat(num.toFixed(4))
}

export const calculateUnit = (lst:ArrayItem[], refNum:number, unit:string) => {

  const array = ref(lst)
  const refVal = ref(refNum)
  const currentUnit = ref(unit)

  // 더 쉽게 정리할만한게...???
  const ml = {tsp:4.929, tbsp: 14.787, oz: 29.574, cups: 240, pints: 474.2, quarts: 949.4, liters:1000, gallons:3785}
  const tsp = {ml: 4.929, tbsp: 3, oz: 6, cups: 48.692, pints: 96, quarts: 192, liters:202.9, gallons: 768}
  const tbsp = {ml: 14.787, tsp:3, oz: 2, cups: 16.231, pints: 32, quarts: 64, liters:67, gallons: 256}
  const oz = {ml: 29.574 , tsp:6, tbsp: 2 , cups: 8.115, pints: 16, quarts: 32 , liters:33.814, gallons: 128}
  const cups = {ml: 240, tsp:48.692, tbsp:16.231, oz: 8.115, pints: 1.972, quarts: 3.943, liters: 4.167, gallons:15.772}
  const pints = {ml:474.2, tsp:96, tbsp:32, oz:2, cups:1.872 ,quarts: 2, liters: 2.113, gallons: 8}
  const quarts = {ml:949.4 ,tsp:192, tbsp: 64, oz: 32, cups: 3.943, pints: 2,  liters:1.057, gallons:4}
  const liters = {ml:1000 ,tsp:202.9, tbsp: 67, oz: 33.814, cups: 4.167, pints: 2.113, quarts:1.057, gallons: 3.785}
  const gallons = {ml:3785 ,tsp:768, tbsp: 256, oz: 128, cups: 15.772, pints: 8, quarts:4, liters: 3.785}

  for(let i = 0; i < array.value.length; i++){
    if(currentUnit.value == 'ml'){
      if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value / ml.tsp)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value / ml.tbsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value / ml.oz)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value / ml.cups)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value / ml.pints)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value / ml.quarts)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value / ml.liters)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / ml.gallons)
      }
    }
    else if(currentUnit.value == 'tsp'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * tsp.ml)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value / tsp.tbsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value / tsp.oz)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value / tsp.cups)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value / tsp.pints)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value / tsp.quarts)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value / tsp.liters)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / tsp.gallons)
      }
    }
    else if(currentUnit.value == 'tbsp'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * tbsp.ml)
      }
      else if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value * tbsp.tsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value / tbsp.oz)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value / tbsp.cups)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value / tbsp.pints)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value / tbsp.quarts)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value / tbsp.liters)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / tbsp.gallons)
      }
    }
    else if(currentUnit.value == 'oz'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * oz.ml)
      }
      else if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value * oz.tsp)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value * oz.tbsp)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value / oz.cups)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value / oz.pints)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value / oz.quarts)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value / oz.liters)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / oz.gallons)
      }
    }
    else if(currentUnit.value == 'cups'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * cups.ml)
      }
      else if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value * cups.tsp)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value * cups.tbsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value * cups.oz)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value / cups.pints)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value / cups.quarts)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value / cups.liters)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / cups.gallons)
      }
    }
    else if(currentUnit.value == 'pints'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * pints.ml)
      }
      else if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value * pints.tsp)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value * cups.tbsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value * pints.oz)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value * pints.cups)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value / pints.quarts)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value / pints.liters)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / pints.gallons)
      }
    }
    else if(currentUnit.value == 'quarts'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * quarts.ml)
      }
      else if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value * quarts.tsp)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value * quarts.tbsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value * quarts.oz)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value * quarts.cups)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value * quarts.pints)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value / quarts.liters)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / quarts.gallons)
      }
    }
    else if(currentUnit.value == 'liters'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * liters.ml)
      }
      else if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value * liters.tsp)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value * liters.tbsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value * liters.oz)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value * liters.cups)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value * liters.pints)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value * liters.quarts)
      }
      else if(array.value[i].name == 'gallons') {
        array.value[i].value = changeRound(refVal.value / liters.gallons)
      }
    }
    else if(currentUnit.value == 'gallons'){
      if(array.value[i].name == 'ml') {
        array.value[i].value = changeRound(refVal.value * gallons.ml)
      }
      else if(array.value[i].name == 'tsp') {
        array.value[i].value = changeRound(refVal.value * gallons.tsp)
      }
      else if(array.value[i].name == 'tbsp') {
        array.value[i].value = changeRound(refVal.value * gallons.tbsp)
      }
      else if(array.value[i].name == 'oz') {
        array.value[i].value = changeRound(refVal.value * gallons.oz)
      }
      else if(array.value[i].name == 'cups') {
        array.value[i].value = changeRound(refVal.value * liters.cups)
      }
      else if(array.value[i].name == 'pints') {
        array.value[i].value = changeRound(refVal.value * gallons.pints)
      }
      else if(array.value[i].name == 'quarts') {
        array.value[i].value = changeRound(refVal.value * gallons.quarts)
      }
      else if(array.value[i].name == 'liters') {
        array.value[i].value = changeRound(refVal.value * gallons.liters)
      }
    }
  }

  return array
}