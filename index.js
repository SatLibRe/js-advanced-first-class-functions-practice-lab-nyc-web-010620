// Code your solution in this file!
const logDriverNames = function(array){
    for(const el of array){
        console.log(el.name)
    }
} 

const logDriversByHometown = function(array,location){
    for(const el of array){
        if(el.hometown === location){
            console.log(el.name)
        }
    }
}

const driversByRevenue = function(arrayOfDriverObj){
    const copyArrayOfDriverObj = [...arrayOfDriverObj]
    return copyArrayOfDriverObj.sort(function(b,a){
        return b.revenue - a.revenue
    });
}

const driversByName = function(arrayOfDriverObj){
    const copyArrayOfDriverObj = [...arrayOfDriverObj];
    return copyArrayOfDriverObj.sort(function(a,b){
        return a.name.localeCompare(b.name);
    });
}

const totalRevenue = function(arrayOfDriverObj){
   let total = 0; 
   for(const driver of arrayOfDriverObj){
       total += driver.revenue
   }
   return total
}

const averageRevenue = function(arrayOfDriverObj){
    return totalRevenue(arrayOfDriverObj) / arrayOfDriverObj.length
}