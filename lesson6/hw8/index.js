function cloneArr(arr){
    copy = arr.slice(0);
		for (i = 0; i < copy.length; i++) {
			copy[i] = cloneArr(copy[i]);
		}
		return copy;
}