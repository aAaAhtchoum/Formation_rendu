
var allGood = true;

function checkLines(data){
    
    for(let i=0;i<data.length;i++){
        line = data[i]
        console.log('ex3 line = '+line)

        if(isCorrect(line)===false){
            console.log('Anomaly found on line : '+(i+1))
            // Inject html here
            document.getElementById('line_err').innerHTML += `<p>line ${i+1} is incorrect : ${line}</p>`;
            allGood=false;
        }   
    }
}

// get the values per columns
function getCol(data,i){
    return data.map(x => x[i])
}

function checkColumns(data){
    for(let i=0;i<data.length;i++){
        col = getCol(data,i)
        console.log('ex3 col = '+col)

        if(isCorrect(col)===false){
            console.log('Anomaly found on col : '+(i+1))
            // Inject html here
            document.getElementById('col_err').innerHTML += `<p>Column ${i+1} is incorrect : ${col}</p>`;
            allGood=false;
        }  
    }
}

function getRegion(arr,i){
    // find the top left index of each region
    const x = (i*3)%9; // 036 036 036
    const y = Math.floor(i/3)*3; // 000 111 222

    // populate return based on top left index
    // bit messy but it's not like sudoku rules are gonna changes any time soon
    arr = [arr[x][y]
    ,arr[x][y+1]
    ,arr[x][y+2]
    ,arr[x+1][y]
    ,arr[x+1][y+1]
    ,arr[x+1][y+2]
    ,arr[x+2][y]
    ,arr[x+2][y+1]
    ,arr[x+2][y+2]]

    return arr;
}

for (let i=0;i<9;i++){
    getRegion(data,i)
}

function checkRegions(data){
    for(let i=0;i<data.length;i++){
        region = getRegion(data,i)
        console.log('ex3 region = '+region)

        if(isCorrect(region)===false){
            console.log('Anomaly found on region : '+(i+1))
            // Inject html here
            document.getElementById('zone_err').innerHTML += `<p>Region ${i+1} is incorrect : ${region}</p>`;
            allGood=false;
        }
    }
}

checkLines(to_check)
checkColumns(to_check)
checkRegions(to_check)

if (allGood ===true){
    document.getElementById('all_good').innerHTML = `<h4>The table is correct !</h4>`;
}