const superbowlWin = (arr) => {

    let didWin = arr.find((each) => {
        return each.result === "W";
    })
    
    return didWin ? didWin.year : undefined;
}