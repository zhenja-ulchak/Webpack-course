function createAnalts():object {
    let isRemove = false
    let count = 0
    let listn = (): number => count++
    document.addEventListener('click' , listn)
    return{
        removeEvent(){
            document.removeEventListener('click' , listn) 
            isRemove = true
        },
        getPush(){
            if (isRemove) {
                return 'Analytics delete'
            }
            return count
        }
    }
}
window['analytics'] = createAnalts()