import { onBeforeUnmount, onMounted } from "vue";

export const useClickOutside = (elTargetRef:any, callbackFn:Function) => {
  if( !elTargetRef ) return

  const listener = (e : { target: any; composedPath: () => string | any[]; }) => {
    
    if(e.target == elTargetRef.value || e.composedPath().includes(elTargetRef.value)){
      // we click inside the modal/active region
      return
    }
    // at this point we clicked outside the modal
    if ( typeof callbackFn == 'function'){
      callbackFn()
    }
  }

  onMounted(() => {
    window.addEventListener('click',listener)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click',listener)
  })

  return listener
}