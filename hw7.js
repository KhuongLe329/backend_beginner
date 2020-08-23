///https://edabit.com/challenge/xuFor4LkEXfBmtDqH
function champions(teams) {
	  let ans, maxPoint = -1000000000, maxDiff = -1000000000;
		for(let x of teams) {
			let cur = x.wins * 3 + 1 * x.draws;
			let diff = cur - x.conceded;
			if(cur > maxPoint) {
				maxPoint = cur;
				maxDiff = diff;
				ans = x.name;
			} else if(cur == maxPoint && diff > maxDiff) {
				ans = x.name;
				diff = maxDiff;
			}
		}
	return ans;
}
