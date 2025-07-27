
function rateLimit(options){

  const storeIP = new Map();

  return function (req,res,next){
      
    const {windowMs , maxRequest} = options

    const ip = req.ip

    if(!storeIP.has(ip)){
    storeIP.set(ip , {count : 1, startTime : Date.now()});
    return next();
    }

    const userData = storeIP.get(ip)
  const now  = Date.now()
   const TimePassed = now- userData.startTime 

   // if time gone , reset the time,if not increment the count
  if(TimePassed > windowMs){
    userData.count =1;
    userData.startTime=now;
  }
else{
  userData.count++
}

// cheking if number of request is more than limit
if(userData.count > maxRequest){
  return res.status(429).json({
    message: 'Too many request',
  })
}


return next();
    
    


  };
}


module.exports = rateLimit