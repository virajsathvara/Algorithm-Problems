/**
 * search an element in a sorted and rotated array.
 * Example:
 * Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
 * Output : Found at index 8
 * Explanation:
 * It can be done straight forward in O(n) complexity but the goal is to
 * reduce it even further using binary search.
 */

function search (arr, start, end, key) {
  if (start > end) return -1

  const middle = Math.floor((start + end) / 2)
  if (arr[middle] === key) return middle

  if (arr[start] <= arr[middle]) {
    if (arr[start] <= key && arr[middle] >= key) {
      return search(arr, start, middle - 1, key)
    }
    return search(arr, middle + 1, end, key)
  }

  if (arr[middle] <= key && arr[end] >= key) {
    return search(arr, middle + 1, end, key)
  }
  return search(arr, start, middle - 1, key)
}

const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3]
const key = 3
const keyIndex = search(arr, 0, arr.length - 1, key)
console.log(keyIndex)
