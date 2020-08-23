/// https://edabit.com/challenge/QuhNPjLubRNh2McfX
function rolls(arr) {
	 let pre = 0, res = 0
	 for(let x of arr) {
		  if(pre == 6) res += x * 2 
		  else if(pre != 1) res += x
		  pre = x
	 }
	 return res
}
