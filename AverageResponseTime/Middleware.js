
let totalTime = 0;
let responseNumber = 0;

function requestTime(req, res, next) {
    const start = process.hrtime();


    res.on("finish", ()=>{
        const diff = process.hrtime(start);
        let durationInMs = (diff[0] * 1000 + diff[1])/1e6
        totalTime+=durationInMs;
        responseNumber+=1;

        console.log("averageTime", totalTime/responseNumber)
    })


    next();
}



module.exports = requestTime;