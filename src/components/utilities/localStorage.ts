type wafu = {
  id: number;
  url: string;
  created_at: string;
};
interface wafuProps {
  name : string,
  data : wafu
  state : boolean
}


function StoreData({ name, data, state } : wafuProps): void {
    let existingData : wafu[] = getData();
    if(state == true){
        existingData.push(data)
    }else{    
        for(let i: number = 0; i < existingData.length; i++){
            if(existingData[i].id == data.id){
                existingData.splice(i , 1)
                break
            }
        }
    }
    localStorage.setItem(name, JSON.stringify(existingData));
    console.log(getData());
    
}

function getData(name: string = "wafu"): wafu[] {
  const storedData = localStorage.getItem(name);
  const parsedData: wafu[] = storedData ? JSON.parse(storedData) : [];
  return parsedData;
}

export type { wafu, wafuProps };
export { StoreData, getData };
