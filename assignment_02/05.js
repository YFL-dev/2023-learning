/**
 * Given a string, s, reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 *
 * Example 1:
 * Input: s = "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 *
 * Example 2:
 * Input: s = "God Ding"
 * Output: "doG gniD"
 *
 */

function reverseWords(s) {
  const words = s.split(" ");

  const reverseWords = words.map((word) => word.split("").reverse().join(""));

  const reverseString = reverseWords.join(" ");

  return reverseString;
}

const s = "Bi train Zhu";

console.log(reverseWords(s));
