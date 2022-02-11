
const setPagination = (query): any => {
    if (query == null || query == undefined  || query.page == undefined || query.limit == undefined)
      return { skip: 0, take: 10 };
    else {
      const limit = query.limit || 10;
      return {
        skip: (query.page * limit) || 0,
        take: limit,
      }
    }
  }
  
  const setSortings = (query): any => {
    if (query == null || query == undefined || query.sort == undefined || query.sort == null)
      return { order : {} };
    else {    
      return { order : JSON.parse(query.sort) };
    } 
  };
  
  
  const setFilters = (query): any => {
    if (query == null || query == undefined || query.filter == undefined || query.filter == null)
      return { where :{}};
    else {    
      return { where : JSON.parse(query.filter)} ;
    } 
  }

module.exports = { setPagination, setSortings, setFilters };