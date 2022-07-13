/**
 * Given an array of integers where each element represents the max number of
 * steps that can be made forward from that element.
 * Write a function to return the minimum number of jumps to reach the end of the array
 * (starting from the first element). If an element is 0, they cannot move through that element.
 * If the end isn’t reachable, return -1.
 * Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
 * Output: 3 (1-> 3 -> 9 -> 9)
 */

/*
  1. maintain an array of steps required to reach to the end. Array is written from
  the end. It is easier that way.
  2. When you hit a point where we have a choice to make, Let's say you are at index
  number 3 and the value is 4, at that point your steps array will have entries from
  arrLength till the 4th element.
  What you wanna do is loop from index 3 to (4 more steps) index 7 and lookup the
  steps array to take the minimum steps.
  3. your first element in your steps array is your answer. For the sake of sending -1,
  you can have a condition.
  TIME COMPLEXITY: O(n^2)
  SPACE COMPLEXITY: O(n) cuz we have another array steps with the same length as our main array.




*/
function findSteps (arr, l) {
  let i = l - 2
  const steps = []
  steps[l - 1] = 0
  while (i >= 0) {
    if (arr[i] === 0) {
      steps[i] = Number.MAX_VALUE
    } else if (arr[i] >= (l - i - 1)) {
      steps[i] = 1
    } else {
      //  assign the minimum number of steps which can be taken to reach the end
      let min = Number.MAX_VALUE
      for (let j = i + 1; j < l && j <= arr[i] + i; j++) {
        if (min > steps[j]) min = steps[j]
      }
      if (min !== Number.MAX_VALUE) steps[i] = min + 1
      else steps[i] = min
    }
    i--
  }
  console.log(steps)
  if (steps[0] === Number.MAX_VALUE) return -1
  return steps[0]
}

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
const result = findSteps(arr, arr.length)
console.log(result)
