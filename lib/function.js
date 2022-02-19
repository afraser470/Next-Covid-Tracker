// js functions will go here
export function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

export function removeNoData(data){
    data.forEach(province => {
      if(province.population == null){
        data.splice(data.indexOf(province),1);
      }
      
    });
    return data;
}