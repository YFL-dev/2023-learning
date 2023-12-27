const { reverseWords } = require('../src/05');

describe('reverse words in a given string', () => {
	test('test string 1', () => {
		expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");

		expect(reverseWords('God Ding')).toBe('doG gniD');
	});
});