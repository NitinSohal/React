const initialState=1;
const Change=(State=initialState,action)=>{
    switch(action.type){
        case "10":
            console.log(State);
            return (State*10);
        case "100":
            console.log(State);
            return (State*100);
        case "1000":
            console.log(State);
            return (State*1000);
        case "10000":
            console.log(State);
            return (initialState);
        default:
            console.log(State);
            return State;
    }
}
export default Change;