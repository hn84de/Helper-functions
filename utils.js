function getCopy(objToCopy)
{
  if (objToCopy === null)
  {
    return objToCopy;
  }

  if (objToCopy !== 'object')
  {
    return objToCopy;
  }

  if (Array.isArray(objToCopy))
  {
    var retArr = [];
    const arrSize = objToCopy;
    for (var i = 0; i < arrSize; ++i)
      {
        retArr[i] = getCopy(objToCopy[i]);
      }
    return retArr;
  }

  var retObj = {};
  for (const key in objToCopy)
    {
      if (objToCopy.hasOwnProperty(key))
      {
        retObj[key] = getCopy(objToCopy[key]);
      }
    }
  return retObj;
}
