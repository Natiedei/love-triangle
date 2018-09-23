/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var kol, per1, per2, per3;
  kol = 0;
  for(var i=0;i<preferences.length;i++){
	  per1 = preferences[i]-1;
	  per2 = preferences[per1]-1;
	  per3 = preferences[per2]-1;
	if ((per3 == i) && (per1 != per2) && (per2 != per3) && (per1 != per3)){
		kol++;
	}
  }
 
  return kol / 3;
};
