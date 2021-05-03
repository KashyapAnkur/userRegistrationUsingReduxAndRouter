const changeTitleAction = localTitle => ({type: 'counter/changeTitle', title: localTitle});

const increase = () => ({type: 'counter/increase'})
const decrease = () => ({type: 'counter/decrease'})

export {changeTitleAction, increase, decrease};