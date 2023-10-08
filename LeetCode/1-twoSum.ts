// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

function twoSum(nums: number[], target: number): number[] {
	const faultParams = nums.length < 1 || (nums.length === 1 && nums[0] !== target);
	if (faultParams) return [];
	let onlyOne: number[] = []; // 考虑没有0和有0的情况
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			onlyOne = [i];
		}
		for (let ii = i + 1; ii < nums.length; ii++) {
			if (nums[ii] + nums[i] === target) {
				return [i, ii];
			}
		}
	}
  return onlyOne;
}
